import { Dirent, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import * as path from "node:path";
import "./zip.js";
import { writeFile } from "node:fs/promises";

/**
 * Recursively add the contents of the zip folder to a destination folder.
 *
 * @param directoryEntry The zip directory entry to extract the contents from.
 * @param basePath The base path to extract the contents to.
 * @param destinationFolder The subfolder of the zip and base path to extract the contents from and to respectively. Defaults to an empty string.
 * @param onItemAddCallback The callback to call when an item is added.
 * @returns A promise that resolves when the contents are extracted.
 *
 * @throws {any} If the {@link signal} is aborted. The thrown value is the {@link AbortSignal.reason | reason} of the aborted {@link signal}.
 * @throws {any} If an error occurs.
 */
export async function addFolderContentsReversed(
    directoryEntry: zip.ZipDirectoryEntry,
    basePath: string,
    destinationFolder: string = "",
    onItemAddCallback?: ((item: zip.ZipFileEntry<any, any>) => void) | undefined,
    signal?: AbortSignal | undefined
): Promise<void> {
    signal?.throwIfAborted();
    const folderContents: zip.ZipEntry[] = directoryEntry.children;
    await Promise.all(
        folderContents.map(async (item: zip.ZipEntry): Promise<void> => {
            try {
                mkdirSync(path.resolve(basePath, destinationFolder), { recursive: true });
            } catch {}
            if (item instanceof zip.fs.ZipFileEntry) {
                await writeFile(
                    path.resolve(basePath, destinationFolder, item.name),
                    new Uint8Array(await (await item.getBlob(undefined, { signal })).arrayBuffer())
                );
                onItemAddCallback?.(item);
            } else if (item instanceof zip.fs.ZipDirectoryEntry) {
                await addFolderContentsReversed(item, basePath, path.join(destinationFolder, item.name), onItemAddCallback, signal);
            }
            signal?.throwIfAborted();
        })
    );
}

/**
 * Adds the contents of a folder to the zip file system.
 *
 * @param directoryEntry The zip directory entry.
 * @param basePath The base path.
 * @param folder The folder. Defaults to an empty string.
 *
 * @todo Make an async version of this with parallelization and abort signal support, also add the thing from {@link addFolderContentsReversed} that allows you too keep track of how many items have been added.
 */
export function addFolderContents(directoryEntry: zip.ZipDirectoryEntry, basePath: string, folder: string = ""): void {
    const folderContents: Dirent<string>[] = readdirSync(path.join(basePath, folder), { withFileTypes: true });
    for (const item of folderContents) {
        if (item.isFile()) {
            directoryEntry.addBlob(item.name, new Blob([readFileSync(path.resolve(basePath, folder, item.name))]));
        } else if (item.isDirectory()) {
            addFolderContents(directoryEntry.addDirectory(item.name), basePath, path.join(folder, item.name));
        }
    }
}

/**
 * Checks if two array buffers are equal.
 *
 * @param buf1 The first array buffer.
 * @param buf2 The second array buffer.
 * @returns True if the two array buffers are equal, false otherwise.
 *
 * @see https://stackoverflow.com/a/21554107/16872762
 */
function arrayBuffersAreEqual(buf1: ArrayBuffer, buf2: ArrayBuffer): boolean {
    if (buf1.byteLength != buf2.byteLength) return false;
    var dv1: Int8Array<ArrayBuffer> = new Int8Array(buf1);
    var dv2: Int8Array<ArrayBuffer> = new Int8Array(buf2);
    for (var i: number = 0; i != buf1.byteLength; i++) {
        if (dv1[i] != dv2[i]) return false;
    }
    return true;
}

/**
 * Compares the contents of two zips.
 *
 * @param zip1 The first zip.
 * @param zip2 The second zip.
 * @param checkMode The mode to check the contents with.
 * @returns True if the contents are the same, false otherwise.
 */
export function compareZips(zip1: zip.FS, zip2: zip.FS, checkMode: "onlyNames" | "namesAndFileSizes" = "namesAndFileSizes"): boolean {
    const zip1Entries: string[] = zip1.entries.map((v: zip.ZipEntry): string => v.getFullname());
    const zip2Entries: string[] = zip2.entries.map((v: zip.ZipEntry): string => v.getFullname());
    if (zip1Entries.length !== zip2Entries.length) return false;
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] !== zip2Entries[i]) return false;
    }
    if (checkMode === "onlyNames") return true;
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] === undefined && zip2Entries[i] === undefined) continue;
        const zip1Entry: zip.ZipEntry | undefined = zip1.find(zip1Entries[i]!);
        if (zip1Entry === undefined) return false;
        const zip2Entry: zip.ZipEntry | undefined = zip2.find(zip1Entries[i]!);
        if (zip2Entry === undefined) return false;
        if (zip1Entry instanceof zip.fs.ZipFileEntry && zip2Entry instanceof zip.fs.ZipFileEntry) {
            if (zip1Entry.uncompressedSize !== zip2Entry.uncompressedSize) return false;
        } else if (zip1Entry instanceof zip.fs.ZipDirectoryEntry !== zip2Entry instanceof zip.fs.ZipDirectoryEntry) return false;
    }
    return true;
}

/**
 * Compares the contents of two zips.
 *
 * @param zip1 The first zip.
 * @param zip2 The second zip.
 * @returns True if the contents are the same, false otherwise.
 */
export async function compareZipsFull(zip1: zip.FS, zip2: zip.FS): Promise<boolean> {
    const zip1Entries: string[] = zip1.entries.map((v: zip.ZipEntry): string => v.getFullname());
    const zip2Entries: string[] = zip2.entries.map((v: zip.ZipEntry): string => v.getFullname());
    if (zip1Entries.length !== zip2Entries.length) return false;
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] !== zip2Entries[i]) return false;
    }
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] === undefined) continue;
        const zip1Entry: zip.ZipEntry | undefined = zip1.find(zip1Entries[i]!);
        if (zip1Entry === undefined) return false;
        const zip2Entry: zip.ZipEntry | undefined = zip2.find(zip1Entries[i]!);
        if (zip2Entry === undefined) return false;
        if (zip1Entry instanceof zip.fs.ZipFileEntry && zip2Entry instanceof zip.fs.ZipFileEntry) {
            if (zip1Entry.uncompressedSize !== zip2Entry.uncompressedSize) return false;
        } else if (zip1Entry instanceof zip.fs.ZipDirectoryEntry !== zip2Entry instanceof zip.fs.ZipDirectoryEntry) return false;
    }
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] === undefined) continue;
        const zip1Entry: zip.ZipEntry | undefined = zip1.find(zip1Entries[i]!);
        if (zip1Entry === undefined) return false;
        const zip2Entry: zip.ZipEntry | undefined = zip2.find(zip1Entries[i]!);
        if (zip2Entry === undefined) return false;
        if (zip1Entry instanceof zip.fs.ZipFileEntry && zip2Entry instanceof zip.fs.ZipFileEntry) {
            if (!arrayBuffersAreEqual(await (await zip1Entry.getBlob()).arrayBuffer(), await (await zip2Entry.getBlob()).arrayBuffer())) return false;
        }
    }
    return true;
}
