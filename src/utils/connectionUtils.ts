import { lookup } from "node:dns";
import { createWriteStream, mkdirSync, WriteStream, type PathLike } from "node:fs";
import path from "node:path";
import Stream, { Transform, type PipelineSource, type TransformCallback } from "node:stream";
import { pipeline } from "node:stream/promises";

export async function getConnectionStatus(): Promise<boolean> {
    return new Promise((resolve: (value: boolean) => void): void => {
        lookup("www.google.com", (err: NodeJS.ErrnoException | null): void => {
            resolve(!err);
        });
    });
}

/**
 * Callbacks for the {@link downloadFileWithProgress} function.
 */
interface DownloadFileWithProgressCallbacks {
    /**
     * Called when the URI has been fetched.
     *
     * @param response The response.
     * @param stats The stats of the download.
     */
    onFetched?(response: Response, stats: DownloadFileWithProgressStats): void;
    /**
     * Called when the URI is unable to be fetched.
     *
     * @param response The response.
     * @param stats The stats of the download.
     */
    onFetchFailure?(response: Response, stats: DownloadFileWithProgressStats): void;
    /**
     * Called when an error occurs.
     *
     * @param error The error that occurred.
     * @param stats The stats of the download.
     */
    onError?(error: unknown, stats: DownloadFileWithProgressMixedStats): void;
    /**
     * Called when a chunk of the file has been downloaded.
     *
     * @param stats The stats of the download.
     */
    onProgress?(stats: DownloadFileWithProgressDataChunkStats): void;
    /**
     * Called when the download is complete.
     *
     * @param stats The stats of the download.
     */
    onComplete?(stats: DownloadFileWithProgressCompletionStats): void;
    /**
     * Called when the download ends.
     *
     * @param endReason The reason for the end of the download.
     */
    onEnd?(
        endReason: {
            /**
             * The reason for the end of the download.
             *
             * - `"FetchFailure"`: The URI could not be fetched.
             * - `"Error"`: An error occurred.
             * - `"Abort"`: The download was aborted.
             * - `"Complete"`: The download completed.
             * - `"End"`: The download ended for some other reason.
             */
            reason: string;
        } & (
            | { reason: "FetchFailure"; response: Response; stats: DownloadFileWithProgressStats }
            | { reason: "Error"; error: unknown; stats: DownloadFileWithProgressMixedStats }
            | {
                  reason: "Abort";
                  cause: DOMException | Error;
                  signal: AbortSignal | undefined;
                  stats: DownloadFileWithProgressMixedStats;
              }
            | { reason: "Complete"; stats: DownloadFileWithProgressCompletionStats }
            | { reason: "End"; stats: DownloadFileWithProgressMixedStats }
        )
    ): void;
}

/**
 * Stats for the {@link downloadFileWithProgress} function that consist of a mixture of stats from multiple different parts of the download.
 */
type DownloadFileWithProgressMixedStats = DownloadFileWithProgressStats &
    Partial<DownloadFileWithProgressDataChunkStats & DownloadFileWithProgressCompletionStats>;

/**
 * Stats for the {@link downloadFileWithProgress} function.
 */
interface DownloadFileWithProgressStats {
    /**
     * The total size of the contents in bytes.
     *
     * `null` if no `Content-Length` header was found or the value of it is invalid.
     */
    readonly totalSize: number | null;
    /**
     * The time the function started.
     */
    readonly startTime: number;
    /**
     * The time the fetching on the URI completed.
     */
    readonly fetchEndTime: number;
    /**
     * The time it took to fetch the URI.
     */
    readonly fetchTime: number;
}

/**
 * Stats for the {@link downloadFileWithProgress} function's future callbacks after the URI has been fetched.
 */
interface DownloadFileWithProgressPostFetchStats extends DownloadFileWithProgressStats {
    /**
     * The total number of bytes downloaded.
     */
    readonly downloadedBytes: number;
    /**
     * The time the file started downloading.
     */
    readonly downloadStartTime: number;
    /**
     * The total number of chunks that have been downloaded.
     */
    readonly chunkCount: number;
}

/**
 * Stats for the {@link downloadFileWithProgress} function when a chunk of the file has been downloaded.
 */
interface DownloadFileWithProgressDataChunkStats extends DownloadFileWithProgressPostFetchStats {
    /**
     * The time the last chunk finished downloading.
     *
     * `null` if this is the first chunk.
     */
    readonly lastChunkEndTime: number | null;
    /**
     * The time the chunk finished downloading.
     */
    readonly chunkEndTime: number;
    /**
     * The size of the last chunk in bytes.
     *
     * `null` if this is the first chunk.
     */
    readonly lastChunkSize: number | null;
    /**
     * The size of the chunk in bytes.
     */
    readonly chunkSize: number;
}

/**
 * Stats for the {@link downloadFileWithProgress} function when the download is complete.
 */
interface DownloadFileWithProgressCompletionStats extends DownloadFileWithProgressPostFetchStats {
    /**
     * The time the function completed.
     */
    readonly endTime: number;
    /**
     * The total time it took for the function to complete.
     */
    readonly totalTime: number;
    /**
     * The time it took to download the file.
     */
    readonly downloadTime: number;
}

/**
 * Options for the {@link downloadFileWithProgress} function.
 */
interface DownloadFileWithProgressOptions {
    /**
     * The signal to abort the download.
     */
    signal?: AbortSignal | undefined;
}

/**
 * Downloads a file from a URI while keeping track of its progress to allow for progress bars.
 *
 * @param uri The URI to download.
 * @param outputPath The path to save the file to.
 * @param callbacks The callbacks.
 * @param options Options for the download.
 * @returns A promise resolving when the download is complete.
 *
 * @throws {DOMException | Error} If the download is aborted. The error name will be `"AbortError"`.
 * @throws {Error} If the fetching of the URI results in a non-OK error code. The error message will be in the format `Failed to fetch ${uri}: ${response.statusText}`, and the error will have a `cause` of the response.
 * @throws {ReferenceError} If the response has no body. The error message will be `"No response body."` and the error will have a `cause` of the response.
 * @throws {any} If an error occurs.
 */
export async function downloadFileWithProgress(
    uri: string | URL | globalThis.Request,
    outputPath: PathLike,
    callbacks: DownloadFileWithProgressCallbacks,
    options: DownloadFileWithProgressOptions = {}
): Promise<void> {
    // Deconstruct options here instead of in the function header so the docs show it as options.
    const { signal } = options;
    const startTime: number = Date.now();
    const response = await fetch(uri, { signal }).catch((e: unknown): never => {
        const fetchEndTime: number = Date.now();
        if ((e instanceof DOMException || e instanceof Error) && e.name === "AbortError") {
            try {
                callbacks.onEnd?.({
                    reason: "Abort",
                    cause: e,
                    signal,
                    stats: {
                        fetchEndTime,
                        fetchTime: fetchEndTime - startTime,
                        startTime,
                        totalSize: null,
                    },
                });
            } catch {}
            throw e;
        }
        try {
            callbacks.onError?.(e, {
                fetchEndTime,
                fetchTime: fetchEndTime - startTime,
                startTime,
                totalSize: null,
            });
        } catch {}
        try {
            callbacks.onEnd?.({
                reason: "Error",
                error: e,
                stats: {
                    fetchEndTime,
                    fetchTime: fetchEndTime - startTime,
                    startTime,
                    totalSize: null,
                },
            });
        } catch {}
        throw e;
    });

    const fetchEndTime: number = Date.now();

    if (!response.ok) {
        try {
            callbacks.onFetchFailure?.(response, {
                fetchEndTime,
                fetchTime: fetchEndTime - startTime,
                startTime,
                totalSize: null,
            });
        } catch {}
        try {
            callbacks.onEnd?.({
                reason: "FetchFailure",
                response,
                stats: {
                    fetchEndTime,
                    fetchTime: fetchEndTime - startTime,
                    startTime,
                    totalSize: null,
                },
            });
        } catch {}
        throw new Error(`Failed to fetch ${uri instanceof Request ? uri.url : uri}: ${response.statusText}`, {
            cause: response,
        });
    }

    if (!response.body) {
        const e = new ReferenceError("No response body.", {
            cause: response,
        });
        try {
            callbacks.onError?.(e, {
                fetchEndTime,
                fetchTime: fetchEndTime - startTime,
                startTime,
                totalSize: null,
            });
        } catch {}
        try {
            callbacks.onEnd?.({
                reason: "Error",
                error: e,
                stats: {
                    fetchEndTime,
                    fetchTime: fetchEndTime - startTime,
                    startTime,
                    totalSize: null,
                },
            });
        } catch {}
        throw e;
    }

    const contentLengthHeader: string | null = response.headers.get("content-length");
    const totalSize: number | null = contentLengthHeader === null || isNaN(parseInt(contentLengthHeader, 10)) ? null : parseInt(contentLengthHeader, 10);

    try {
        callbacks.onFetched?.(response, {
            fetchEndTime,
            fetchTime: fetchEndTime - startTime,
            startTime,
            totalSize,
        });
    } catch {}

    const downloadStartTime: number = Date.now();
    let downloadedBytes: number = 0;
    let chunkCount: number = 0;
    let lastChunkEndTime: number | null = null;
    let lastChunkSize: number | null = null;
    let chunkEndTime: number | null = null;
    let chunkSize: number | null = null;

    try {
        mkdirSync(path.dirname(outputPath.toString()), { recursive: true });
        const fileStream: WriteStream = createWriteStream(outputPath, { signal });
        const progressStream = new Transform({
            transform(chunk: any, _encoding: BufferEncoding, callback: TransformCallback): void {
                chunkEndTime = Date.now();
                chunkSize = chunk.length as number;
                downloadedBytes += chunk.length as number;
                chunkCount++;
                try {
                    callbacks.onProgress?.({
                        chunkCount,
                        chunkEndTime: chunkEndTime,
                        chunkSize: chunkSize,
                        downloadedBytes,
                        downloadStartTime,
                        fetchEndTime,
                        fetchTime: fetchEndTime - startTime,
                        lastChunkEndTime,
                        lastChunkSize,
                        startTime,
                        totalSize,
                    });
                } catch {}
                lastChunkEndTime = chunkEndTime;
                callback(null, chunk);
            },
            signal,
        });

        await pipeline(response.body!, progressStream, fileStream, { signal });
    } catch (e) {
        if ((e instanceof DOMException || e instanceof Error) && e.name === "AbortError") {
            try {
                callbacks.onEnd?.({
                    reason: "Abort",
                    cause: e,
                    signal,
                    stats: {
                        chunkCount,
                        chunkEndTime: chunkEndTime ?? undefined,
                        chunkSize: chunkSize ?? undefined,
                        downloadedBytes,
                        downloadStartTime,
                        fetchEndTime,
                        fetchTime: fetchEndTime - startTime,
                        lastChunkEndTime,
                        lastChunkSize,
                        startTime,
                        totalSize,
                    },
                });
            } catch {}
            throw e;
        }
        try {
            callbacks.onError?.(e, {
                chunkCount,
                chunkEndTime: chunkEndTime ?? undefined,
                chunkSize: chunkSize ?? undefined,
                downloadedBytes,
                downloadStartTime,
                fetchEndTime,
                fetchTime: fetchEndTime - startTime,
                lastChunkEndTime,
                lastChunkSize,
                startTime,
                totalSize,
            });
        } catch {}
        try {
            callbacks.onEnd?.({
                reason: "Error",
                error: e,
                stats: {
                    chunkCount,
                    chunkEndTime: chunkEndTime ?? undefined,
                    chunkSize: chunkSize ?? undefined,
                    downloadedBytes,
                    downloadStartTime,
                    fetchEndTime,
                    fetchTime: fetchEndTime - startTime,
                    lastChunkEndTime,
                    lastChunkSize,
                    startTime,
                    totalSize,
                },
            });
        } catch {}
        throw e;
    }

    const downloadEndTime: number = Date.now();

    try {
        callbacks.onComplete?.({
            chunkCount,
            downloadedBytes,
            downloadStartTime,
            downloadTime: downloadEndTime - downloadStartTime,
            endTime: downloadEndTime,
            fetchEndTime,
            fetchTime: fetchEndTime - startTime,
            startTime,
            totalSize,
            totalTime: downloadEndTime - startTime,
        });
    } catch {}
    try {
        callbacks.onEnd?.({
            reason: "Complete",
            stats: {
                chunkCount,
                downloadedBytes,
                downloadStartTime,
                downloadTime: downloadEndTime - downloadStartTime,
                endTime: downloadEndTime,
                fetchEndTime,
                fetchTime: fetchEndTime - startTime,
                startTime,
                totalSize,
                totalTime: downloadEndTime - startTime,
            },
        });
    } catch {}
}

/**
 * Callbacks for the {@link readBytesFromReadableSteamWithProgress} function.
 */
interface ReadBytesFromReadableSteamWithProgressCallbacks {
    /**
     * Called when an error occurs.
     *
     * @param error The error that occurred.
     * @param stats The stats of the read.
     */
    onError?(error: unknown, stats: ReadBytesFromReadableSteamWithProgressMixedStats): void;
    /**
     * Called when a chunk of the file has been read.
     *
     * @param stats The stats of the read.
     */
    onProgress?(stats: ReadBytesFromReadableSteamWithProgressDataChunkStats): void;
    /**
     * Called when the read is complete.
     *
     * @param stats The stats of the read.
     */
    onComplete?(stats: ReadBytesFromReadableSteamWithProgressCompletionStats): void;
    /**
     * Called when the read ends.
     *
     * @param endReason The reason for the end of the read.
     */
    onEnd?(
        endReason: {
            /**
             * The reason for the end of the read.
             *
             * - `"Error"`: An error occurred.
             * - `"Abort"`: The read was aborted.
             * - `"Complete"`: The read completed.
             * - `"End"`: The read ended for some other reason.
             */
            reason: string;
        } & (
            | { reason: "Error"; error: unknown; stats: ReadBytesFromReadableSteamWithProgressMixedStats }
            | { reason: "Abort"; cause: DOMException | Error; signal: AbortSignal | undefined; stats: ReadBytesFromReadableSteamWithProgressMixedStats }
            | { reason: "Complete"; stats: ReadBytesFromReadableSteamWithProgressCompletionStats }
            | { reason: "End"; stats: ReadBytesFromReadableSteamWithProgressMixedStats }
        )
    ): void;
}

/**
 * Stats for the {@link readBytesFromReadableSteamWithProgress} function that consist of a mixture of stats from multiple different parts of the read.
 */
type ReadBytesFromReadableSteamWithProgressMixedStats = ReadBytesFromReadableSteamWithProgressStats &
    Partial<ReadBytesFromReadableSteamWithProgressDataChunkStats & ReadBytesFromReadableSteamWithProgressCompletionStats>;

/**
 * Stats for the {@link readBytesFromReadableSteamWithProgress} function.
 */
interface ReadBytesFromReadableSteamWithProgressStats {
    /**
     * The total size of the contents in bytes.
     *
     * `null` if no {@link ReadBytesFromReadableSteamWithProgressOptions.totalSize | totalSize} was provided.
     */
    readonly totalSize: number | null;
    /**
     * The time the function started.
     */
    readonly startTime: number;
    /**
     * The total number of bytes read.
     */
    readonly readBytes: number;
    /**
     * The total number of chunks that have been read.
     */
    readonly chunkCount: number;
}

/**
 * Stats for the {@link readBytesFromReadableSteamWithProgress} function when a chunk of the file has been read.
 */
interface ReadBytesFromReadableSteamWithProgressDataChunkStats extends ReadBytesFromReadableSteamWithProgressStats {
    /**
     * The time the last chunk finished being read.
     *
     * `null` if this is the first chunk.
     */
    readonly lastChunkEndTime: number | null;
    /**
     * The time the chunk finished being read.
     */
    readonly chunkEndTime: number;
    /**
     * The size of the last chunk in bytes.
     *
     * `null` if this is the first chunk.
     */
    readonly lastChunkSize: number | null;
    /**
     * The size of the chunk in bytes.
     */
    readonly chunkSize: number;
}

/**
 * Stats for the {@link readBytesFromReadableSteamWithProgress} function when the read is complete.
 */
interface ReadBytesFromReadableSteamWithProgressCompletionStats extends ReadBytesFromReadableSteamWithProgressStats {
    /**
     * The time the function completed.
     */
    readonly endTime: number;
    /**
     * The total time it took for the function to complete.
     */
    readonly totalTime: number;
    /**
     * The time it took to read the stream.
     */
    readonly readTime: number;
}

/**
 * Options for the {@link readBytesFromReadableSteamWithProgress} function.
 */
interface ReadBytesFromReadableSteamWithProgressOptions {
    /**
     * The signal to abort the read.
     */
    signal?: AbortSignal | undefined;
    /**
     * The total size of the contents in bytes.
     *
     * Only used for providing information to the callbacks.
     *
     * Setting this to `null` is equivalent to not setting it or setting it to `undefined`.
     */
    totalSize?: number | null | undefined;
}

/**
 * Reads bytes from a readable stream while keeping track of its progress to allow for progress bars.
 *
 * An example usage of this function is to read the {@link Response.prototype.body | body} of the {@link Response} of a request for a URI with large contents.
 *
 * @param stream The stream to read from.
 * @param callbacks The callbacks.
 * @param options Options for the read.
 * @returns A promise resolving with a {@link Buffer} containing the contents of the stream when the stream is fully read.
 *
 * @throws {DOMException | Error} If the read is aborted. The error name will be `"AbortError"`.
 * @throws {DOMException | Error} If the {@link stream} is aborted. The error name will be `"AbortError"`.
 * @throws {any} If an error occurs.
 */
export async function readBytesFromReadableSteamWithProgress(
    stream: PipelineSource<any>,
    callbacks: ReadBytesFromReadableSteamWithProgressCallbacks,
    options: ReadBytesFromReadableSteamWithProgressOptions = {}
): Promise<Buffer<ArrayBuffer>> {
    // Deconstruct options here instead of in the function header so the docs show it as options.
    const { signal, totalSize = null } = options;
    const startTime: number = Date.now();

    let readBytes: number = 0;
    let chunkCount: number = 0;
    let lastChunkEndTime: number | null = null;
    let lastChunkSize: number | null = null;
    let chunkEndTime: number | null = null;
    let chunkSize: number | null = null;

    const readDataChunks: Buffer[] = [];

    try {
        const progressStream = new WriteStream({
            write(chunk: any, encoding: BufferEncoding, callback): void {
                readDataChunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding));
                chunkEndTime = Date.now();
                chunkSize = chunk.length as number;
                readBytes += chunk.length as number;
                chunkCount++;
                try {
                    callbacks.onProgress?.({
                        chunkCount,
                        chunkEndTime: chunkEndTime,
                        chunkSize: chunkSize,
                        readBytes: readBytes,
                        lastChunkEndTime,
                        lastChunkSize,
                        startTime,
                        totalSize,
                    });
                } catch {}
                lastChunkEndTime = chunkEndTime;
                callback(null);
            },
            signal,
        });

        await pipeline(stream, progressStream, { signal });
    } catch (e) {
        if ((e instanceof DOMException || e instanceof Error) && e.name === "AbortError") {
            try {
                callbacks.onEnd?.({
                    reason: "Abort",
                    cause: e,
                    signal,
                    stats: {
                        chunkCount,
                        chunkEndTime: chunkEndTime ?? undefined,
                        chunkSize: chunkSize ?? undefined,
                        readBytes: readBytes,
                        lastChunkEndTime,
                        lastChunkSize,
                        startTime,
                        totalSize,
                    },
                });
            } catch {}
            throw e;
        }
        try {
            callbacks.onError?.(e, {
                chunkCount,
                chunkEndTime: chunkEndTime ?? undefined,
                chunkSize: chunkSize ?? undefined,
                readBytes: readBytes,
                lastChunkEndTime,
                lastChunkSize,
                startTime,
                totalSize,
            });
        } catch {}
        try {
            callbacks.onEnd?.({
                reason: "Error",
                error: e,
                stats: {
                    chunkCount,
                    chunkEndTime: chunkEndTime ?? undefined,
                    chunkSize: chunkSize ?? undefined,
                    readBytes: readBytes,
                    lastChunkEndTime,
                    lastChunkSize,
                    startTime,
                    totalSize,
                },
            });
        } catch {}
        throw e;
    }

    const downloadEndTime: number = Date.now();

    try {
        callbacks.onComplete?.({
            chunkCount,
            readBytes: readBytes,
            readTime: downloadEndTime - startTime,
            endTime: downloadEndTime,
            startTime,
            totalSize,
            totalTime: downloadEndTime - startTime,
        });
    } catch {}
    try {
        callbacks.onEnd?.({
            reason: "Complete",
            stats: {
                chunkCount,
                readBytes: readBytes,
                readTime: downloadEndTime - startTime,
                endTime: downloadEndTime,
                startTime,
                totalSize,
                totalTime: downloadEndTime - startTime,
            },
        });
    } catch {}
    return Buffer.concat(readDataChunks);
}
