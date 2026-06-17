/* eslint-disable */
const versionFolders = __debug_export_InstallationManager__.getVersionFolders();
{
    const zipFs = new zip.fs.FS();
    const vanillaBackupFolderZipPath = versionFolders.at(-1).getBackupFolderZipPath();
    const t1 = performance.now();
    await zipFs.importData64URI(`data:application/zip;base64,${require("fs").readFileSync(vanillaBackupFolderZipPath, { encoding: "base64" })}`);
    const t2 = performance.now();
    console.log("importData64URI: " + (t2 - t1));
}
{
    const zipFs = new zip.fs.FS();
    const vanillaBackupFolderZipPath = versionFolders.at(-1).getBackupFolderZipPath();
    const t1 = performance.now();
    await zipFs.importBlob(new Blob([require("fs").readFileSync(vanillaBackupFolderZipPath)]));
    const t2 = performance.now();
    console.log("importBlob: " + (t2 - t1));
}
{
    const zipFs = new zip.fs.FS();
    const vanillaBackupFolderZipPath = versionFolders.at(-1).getBackupFolderZipPath();
    const t1 = performance.now();
    await zipFs.importUint8Array(new Uint8Array(require("fs").readFileSync(vanillaBackupFolderZipPath)));
    const t2 = performance.now();
    console.log("importUint8Array: " + (t2 - t1));
}
{
    const zipFs = new zip.fs.FS();
    const vanillaBackupFolderZipPath = versionFolders.at(-1).getBackupFolderZipPath();
    const t1 = performance.now();
    await zipFs.importUint8Array(new Uint8Array(require("fs").readFileSync(vanillaBackupFolderZipPath).buffer));
    const t2 = performance.now();
    console.log("importUint8Array: " + (t2 - t1));
}
