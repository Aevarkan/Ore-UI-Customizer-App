/* eslint-disable */
{
    const folderIndexes = [0, 1];
    const versionFolders = globalifiedRendererImports.InstallationManager.getVersionFolders("VersionDescending");
    const targetVersionFolders = folderIndexes.map((index) => versionFolders[index]);
    const result = await globalifiedRendererImports.InstallationManager.compareVersionFolderBackupContents(
        targetVersionFolders[0],
        targetVersionFolders[1],
        "namesAndFileSizes"
    );
    console.log(`${result ? "Matches" : "Does not match"}
Version Folder 1: ${targetVersionFolders[0].getDisplayVersion()}; ${targetVersionFolders[0].installationStatus}; ${targetVersionFolders[0].installedVersion}
Version Folder 2: ${targetVersionFolders[1].getDisplayVersion()}; ${targetVersionFolders[1].installationStatus}; ${targetVersionFolders[1].installedVersion}`);
}

{
    const versionFolders = globalifiedRendererImports.InstallationManager.getVersionFolders("VersionDescending");
    const vF_1 = versionFolders.filter((v) => v.getBackupFolderZipPath() !== undefined);
    const vF_2 = [[], []];
    const vF_2B = [[], []];
    for (const vF of vF_1) {
        if (vF.channel === "Release") {
            const displayVersion = vF.getDisplayVersion();
            if (vF_2B[0].some((v) => v === displayVersion)) continue;
            vF_2[0].push(vF);
            vF_2B[0].push(displayVersion);
        }
        if (vF.channel === "Preview") {
            const displayVersion = vF.getDisplayVersion();
            if (vF_2B[1].some((v) => v === displayVersion)) continue;
            vF_2[1].push(vF);
            vF_2B[1].push(displayVersion);
        }
    }
    for (let i = 0; i < vF_2.length; i++) {
        for (let j = 0; j < vF_2[i].length - 1; j++) {
            const result = await globalifiedRendererImports.InstallationManager.compareVersionFolderBackupContents(vF_2[i][j], vF_2[i][j + 1], "namesAndFileSizes");
            console.log(`${result ? "Matches" : "Does not match"}
Version Folder 1: ${vF_2[i][j].getDisplayVersion()}; ${vF_2[i][j].installationStatus}; ${vF_2[i][j].installedVersion}
Version Folder 2: ${vF_2[i][j + 1].getDisplayVersion()}; ${vF_2[i][j + 1].installationStatus}; ${vF_2[i][j + 1].installedVersion}`);
        }
    }
}

{
    const versionFolders = globalifiedRendererImports.InstallationManager.getVersionFolders("VersionDescending");
    const vF_1 = versionFolders.filter((v) => v.getBackupFolderZipPath() !== undefined);
    const vF_2 = await Promise.all(
        vF_1.map(async (v) => {
            const zipFs = new zip.fs.FS();
            await zipFs.importUint8Array(new Uint8Array(require("fs").readFileSync(v.getBackupFolderZipPath()).buffer));
            return [v, v.getDisplayVersion(), v.installationStatus, v.installedVersion, zipFs.uncompressedSize];
        })
    );
    console.log(vF_2);
    console.log(Object.fromEntries([...new Set(vF_2.map((v) => v[4]))].map((v) => [v, vF_2.filter((v2) => v2[4] === v)])));
}

// NOTE: This one hashes the files names and sizes of the contents of the zip file, and compares that.
{
    /**
     * @param {string} str
     */
    function fastHash128(str) {
        const buf = new ArrayBuffer(str.length * 2);
        const view = new Uint16Array(buf);
        for (let i = 0; i < str.length; i++) view[i] = str.charCodeAt(i);
        let h1 = 0x9e3779b1 | 0;
        let h2 = 0x85ebca77 | 0;
        let h3 = 0xc2b2ae3d | 0;
        let h4 = 0x27d4eb2f | 0;
        for (let i = 0; i < view.length; i++) {
            const k = view[i];
            h1 = Math.imul(h1 ^ k, 0x1b873593);
            h2 = Math.imul(h2 + k, 0x5bd1e995);
            h3 = Math.imul(h3 ^ Math.imul(k, 0xcc9e2d51), 1);
            h4 = Math.imul(h4 + ((k << 5) | (k >>> 27)), 0x165667b1);
            h1 |= 0;
            h2 |= 0;
            h3 |= 0;
            h4 |= 0;
        }
        const len = view.length;
        h1 ^= len;
        h2 ^= len;
        h3 ^= len;
        h4 ^= len;
        h1 = Math.imul(h1 ^ (h1 >>> 16), 0x85ebca6b);
        h2 = Math.imul(h2 ^ (h2 >>> 13), 0xc2b2ae35);
        h3 = Math.imul(h3 ^ (h3 >>> 16), 0x27d4eb2f);
        h4 = Math.imul(h4 ^ (h4 >>> 13), 0x165667b1);
        h1 ^= h1 >>> 16;
        h2 ^= h2 >>> 16;
        h3 ^= h3 >>> 16;
        h4 ^= h4 >>> 16;
        return (
            (h1 >>> 0).toString(16).padStart(8, "0") +
            (h2 >>> 0).toString(16).padStart(8, "0") +
            (h3 >>> 0).toString(16).padStart(8, "0") +
            (h4 >>> 0).toString(16).padStart(8, "0")
        );
    }

    const versionFolders = globalifiedRendererImports.InstallationManager.getVersionFolders("VersionDescending");
    const vF_1 = versionFolders.filter((v) => v.getBackupFolderZipPath() !== undefined);
    const vF_2 = await Promise.all(
        vF_1.map(async (v) => {
            const zipFs = new zip.fs.FS();
            await zipFs.importUint8Array(new Uint8Array(require("fs").readFileSync(v.getBackupFolderZipPath()).buffer));
            return [
                v,
                v.getDisplayVersion(),
                v.installationStatus,
                v.installedVersion,
                fastHash128(
                    JSON.stringify(
                        zipFs.entries.toSorted((a, b) => a.getFullname().localeCompare(b.getFullname())).map((v) => [v.getFullname(), v.uncompressedSize])
                    )
                ),
            ];
        })
    );
    console.log("Version Folder Hash Data:", vF_2);
    console.log("Version Folder Hash Map Full:", Object.fromEntries([...new Set(vF_2.map((v) => v[4]))].map((v) => [v, vF_2.filter((v2) => v2[4] === v)])));
    console.log(
        "Version Folder Hash Map:",
        Object.fromEntries([...new Set(vF_2.map((v) => v[4]))].map((v) => [v, vF_2.filter((v2) => v2[4] === v).map((v2) => v2.slice(1))]))
    );
    console.log(
        "Version Folder Hash Map Full (Only Hashes With Multiple Matches):",
        Object.fromEntries([...new Set(vF_2.map((v) => v[4]))].map((v) => [v, vF_2.filter((v2) => v2[4] === v)]).filter((v) => v[1].length > 1))
    );
    console.log(
        "Version Folder Hash Map (Only Hashes With Multiple Matches):",
        Object.fromEntries(
            [...new Set(vF_2.map((v) => v[4]))].map((v) => [v, vF_2.filter((v2) => v2[4] === v).map((v2) => v2.slice(1))]).filter((v) => v[1].length > 1)
        )
    );
}

{
    /**
     * @param {string} str
     */
    function fastHash128(str) {
        const buf = new ArrayBuffer(str.length * 2);
        const view = new Uint16Array(buf);
        for (let i = 0; i < str.length; i++) view[i] = str.charCodeAt(i);
        let h1 = 0x9e3779b1 | 0;
        let h2 = 0x85ebca77 | 0;
        let h3 = 0xc2b2ae3d | 0;
        let h4 = 0x27d4eb2f | 0;
        for (let i = 0; i < view.length; i++) {
            const k = view[i];
            h1 = Math.imul(h1 ^ k, 0x1b873593);
            h2 = Math.imul(h2 + k, 0x5bd1e995);
            h3 = Math.imul(h3 ^ Math.imul(k, 0xcc9e2d51), 1);
            h4 = Math.imul(h4 + ((k << 5) | (k >>> 27)), 0x165667b1);
            h1 |= 0;
            h2 |= 0;
            h3 |= 0;
            h4 |= 0;
        }
        const len = view.length;
        h1 ^= len;
        h2 ^= len;
        h3 ^= len;
        h4 ^= len;
        h1 = Math.imul(h1 ^ (h1 >>> 16), 0x85ebca6b);
        h2 = Math.imul(h2 ^ (h2 >>> 13), 0xc2b2ae35);
        h3 = Math.imul(h3 ^ (h3 >>> 16), 0x27d4eb2f);
        h4 = Math.imul(h4 ^ (h4 >>> 13), 0x165667b1);
        h1 ^= h1 >>> 16;
        h2 ^= h2 >>> 16;
        h3 ^= h3 >>> 16;
        h4 ^= h4 >>> 16;
        return (
            (h1 >>> 0).toString(16).padStart(8, "0") +
            (h2 >>> 0).toString(16).padStart(8, "0") +
            (h3 >>> 0).toString(16).padStart(8, "0") +
            (h4 >>> 0).toString(16).padStart(8, "0")
        );
    }

    const versionFolders = globalifiedRendererImports.InstallationManager.getVersionFolders("VersionDescending");
    const vF_1 = versionFolders.filter((v) => v.getBackupFolderZipPath() !== undefined);
    const vF_2 = [];
    const vF_2B = [];
    for (const vF of vF_1) {
        const displayVersion = vF.getDisplayVersion();
        if (vF_2B.some((v) => v === displayVersion)) continue;
        vF_2.push(vF);
        vF_2B.push(displayVersion);
    }
    const vF_3 = await Promise.all(
        vF_2.map(async (v) => {
            const zipFs = new zip.fs.FS();
            await zipFs.importUint8Array(new Uint8Array(require("fs").readFileSync(v.getBackupFolderZipPath()).buffer));
            return [
                v,
                v.getDisplayVersion(),
                v.installationStatus,
                v.installedVersion,
                fastHash128(
                    JSON.stringify(
                        zipFs.entries.toSorted((a, b) => a.getFullname().localeCompare(b.getFullname())).map((v) => [v.getFullname(), v.uncompressedSize])
                    )
                ),
            ];
        })
    );
    console.log("Version Folder Hash Data:", vF_3);
    console.log("Version Folder Hash Map Full:", Object.fromEntries([...new Set(vF_3.map((v) => v[4]))].map((v) => [v, vF_3.filter((v2) => v2[4] === v)])));
    console.log(
        "Version Folder Hash Map:",
        Object.fromEntries([...new Set(vF_3.map((v) => v[4]))].map((v) => [v, vF_3.filter((v2) => v2[4] === v).map((v2) => v2.slice(1))]))
    );
    console.log(
        "Version Folder Hash Map Full (Only Hashes With Multiple Matches):",
        Object.fromEntries([...new Set(vF_3.map((v) => v[4]))].map((v) => [v, vF_3.filter((v2) => v2[4] === v)]).filter((v) => v[1].length > 1))
    );
    console.log(
        "Version Folder Hash Map (Only Hashes With Multiple Matches):",
        Object.fromEntries(
            [...new Set(vF_3.map((v) => v[4]))].map((v) => [v, vF_3.filter((v2) => v2[4] === v).map((v2) => v2.slice(1))]).filter((v) => v[1].length > 1)
        )
    );
}

// NOTE: Logs versions that do not have a backup.
{
    const versionFolders = globalifiedRendererImports.InstallationManager.getVersionFolders("VersionDescending");
    const versions = versionFolders.map((v) => v.getDisplayVersion());
    console.log("Versions Missing Backups:", versions.filter((v) => !versionFolders.some((v2) => v2.getDisplayVersion() === v && v2.getBackupFolderZipPath() !== undefined)));
}
