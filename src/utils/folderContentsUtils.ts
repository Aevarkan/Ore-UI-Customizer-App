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
