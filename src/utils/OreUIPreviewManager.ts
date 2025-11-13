import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

export class OreUIPreviewManager {
    public static activePreviews: OreUIPreview[] = [];
    public static createPreview(...args: ConstructorParameters<typeof OreUIPreview>): OreUIPreview {
        const preview: OreUIPreview = new OreUIPreview(...args);
        this.activePreviews.push(preview);
        return preview;
    }
}

declare global {
    interface Window {
        logOreUIPreviewLoadedResourceLocations?: boolean | undefined;
    }
}

export class OreUIPreview {
    public readonly previewOptions: {
        /**
         * @default `/play`
         */
        readonly pathname?: string;
        /**
         * @default `/hbui/index.html`
         */
        readonly file?: string;
        /**
         * @default `chase-the-skies`
         */
        readonly panorama?: string;
        /**
         * @default `true`
         */
        readonly use_translation?: boolean;
        /**
         * @default `en_US`
         */
        readonly locale?: string;
        /**
         * Other options.
         */
        readonly [option: string]: any;
    };
    #status: "loading" | "running" | "closed" | "error" = "loading";
    public get status(): "loading" | "running" | "closed" | "error" {
        return this.#status;
    }
    private httpServer?: import("node:http").Server;
    private window?: Electron.BrowserWindow;
    public constructor(
        /**
         * @example 8927
         */
        public readonly port: number,
        public readonly paths: {
            readonly guiDistPath: string;
            readonly textsPath?: string | undefined;
            readonly vanillaResourcePacksContainerFolderPath?: string | undefined;
        },
        previewOptions: OreUIPreview["previewOptions"] = {}
    ) {
        this.previewOptions = {
            ...previewOptions,
            pathname: previewOptions.pathname ?? "/play",
            file: previewOptions.file ?? "/hbui/index.html",
            panorama: previewOptions.panorama ?? "chase-the-skies",
            use_translation: !!paths.textsPath && (previewOptions.use_translation ?? true),
            locale: previewOptions.locale ?? "en_US",
        };
        const { app, BrowserWindow, globalShortcut, Menu } = require("@electron/remote") as typeof import("@electron/remote");
        const express = require("express") as typeof import("express");
        const server = express();
        server.use(express.static(path.join(process.env.resourcesPath ?? process.resourcesPath, "ore-ui-viewer")));
        server.use(express.static(paths.guiDistPath));
        if (paths.vanillaResourcePacksContainerFolderPath) {
            server.get(/rp\/.+/, (req, res) => {
                const folders = readdirSync(paths.vanillaResourcePacksContainerFolderPath!, { withFileTypes: true })
                    .filter((dirent) => dirent.isDirectory())
                    .toSorted((a, b) =>
                        a.name.startsWith("vanilla") && !b.name.startsWith("vanilla")
                            ? 1
                            : b.name.startsWith("vanilla") && !a.name.startsWith("vanilla")
                            ? -1
                            : a.name.startsWith("vanilla") && b.name.startsWith("vanilla")
                            ? a.name === "vanilla"
                                ? 1
                                : b.name === "vanilla"
                                ? -1
                                : -a.name.localeCompare(b.name)
                            : a.name.localeCompare(b.name)
                    );
                for (const folder of folders) {
                    if (!existsSync(path.join(paths.vanillaResourcePacksContainerFolderPath!, folder.name, req.path.replace("/rp/", "")))) continue;
                    res.sendFile(path.join(paths.vanillaResourcePacksContainerFolderPath!, folder.name, req.path.replace("/rp/", "")));
                    if (window.logOreUIPreviewLoadedResourceLocations)
                        console.debug(folder.name, path.join(paths.vanillaResourcePacksContainerFolderPath!, folder.name, req.path.replace("/rp/", "")));
                    return;
                }
                for (const folder of folders) {
                    for (const extension of [
                        ".tga",
                        ".svg",
                        ".gif",
                        ".apng",
                        ".png",
                        ".jpg",
                        ".jpeg",
                        ".jfif",
                        ".pjpeg",
                        ".pjp",
                        ".webp",
                        ".avif",
                        ".bmp",
                        ".ico",
                        ".cur",
                        ".tif",
                        ".tiff",
                    ]) {
                        if (!existsSync(path.join(paths.vanillaResourcePacksContainerFolderPath!, folder.name, req.path.replace("/rp/", "") + extension)))
                            continue;
                        res.sendFile(path.join(paths.vanillaResourcePacksContainerFolderPath!, folder.name, req.path.replace("/rp/", "") + extension));
                        if (window.logOreUIPreviewLoadedResourceLocations)
                            console.debug(folder.name, path.join(paths.vanillaResourcePacksContainerFolderPath!, folder.name, req.path.replace("/rp/", "")));
                        return;
                    }
                }
                res.sendStatus(404);
            });
        }

        const debug = true;
        // console.log("\x1B[0m" + new Date().toLocaleTimeString() + " \x1B[33m\x1B[1m[INFO] \x1B[0m- Starting.");

        if (!debug) registerShortcuts();
        this.httpServer = server.listen(port, (error?: Error): void => {
            // console.log(
            //     "\x1B[0m" +
            //         new Date().toLocaleTimeString() +
            //         " \x1B[33m\x1B[1m[INFO] \x1B[0m- The server is now running on port \x1B[33m" +
            //         port +
            //         "\x1B[0m!"
            // );

            if (error) {
                console.error(error);
                this.#status = "error";
                return;
            }

            this.#status = "running";

            Object.assign(this, { port });

            createWindow();
        });

        function registerShortcuts() {
            globalShortcut.register("Control+R", () => false);
            globalShortcut.register("Control+Shift+R", () => false);
        }

        const createWindow = () => {
            // console.log("\x1B[0m" + new Date().toLocaleTimeString() + " \x1B[33m\x1B[1m[INFO] \x1B[0m- Creating the window");

            this.window = new BrowserWindow({
                minWidth: 1010,
                minHeight: 640,
                width: 1070,
                height: 648,
                title: "Preview - Ore UI Customizer",
                icon: require("path").join(process.env.resourcesPath ?? process.resourcesPath, "ore-ui-viewer/src/assets/mcpreview.png"), // IDEA: Make a custom icon, maybe like a version of the Ore UI Customizer icon but with an eye icon on it.
                autoHideMenuBar: true,
                resizable: true,
                titleBarStyle: "default",
                webPreferences: {
                    preload: require("path").join(process.env.resourcesPath ?? process.resourcesPath, "ore-ui-viewer/engine.js"),
                    devTools: debug,
                    webgl: true,
                    webSecurity: true,
                    nodeIntegration: true,
                    contextIsolation: false,
                    additionalArguments: [
                        `--config-data=${JSON.stringify(JSON.stringify(this.previewOptions))}`,
                        `--cubemap-images-path=${JSON.stringify("resource://images/cubemap/")}`,
                        ...(paths.textsPath ? [`--texts-path=${JSON.stringify(paths.textsPath)}`] : []),
                        ...(paths.vanillaResourcePacksContainerFolderPath ? [`--ddui-path=${JSON.stringify(paths.vanillaResourcePacksContainerFolderPath)}`] : []),
                    ],
                },
            });

            const baseMenu = Menu.getApplicationMenu();

            const newMenu = Menu.buildFromTemplate([
                {
                    role: "fileMenu",
                    submenu: [
                        {
                            role: "toggleDevTools",
                            visible: false,
                            accelerator: "F12",
                        },
                        ...(baseMenu?.items[0]?.submenu?.items ?? []),
                    ],
                },
                ...(baseMenu?.items.slice(1) ?? []),
            ] as Electron.MenuItemConstructorOptions[]);

            this.window.setMenu(newMenu);

            // require("@electron/remote/main").enable(win.webContents);
            app.setAppUserModelId("Minecraft - OreUI");

            this.window.show();
            this.window.loadURL(`http://localhost:${port}/hbui`);
            this.window.on("closed", (): void => {
                this.httpServer?.close((error?: Error): void => {
                    if (error) {
                        console.error(error);
                        this.#status = "error";
                        return;
                    }
                    this.#status = "closed";
                });
            });
        };
    }
    public close(): void {
        this.window?.close();
    }
    public forceClose(): void {
        this.window?.destroy();
    }
}

window.addEventListener("beforeunload", (): void => {
    OreUIPreviewManager.activePreviews.forEach((preview: OreUIPreview): void => void (preview.status === "running" && preview.forceClose()));
});

getCurrentWindow().on("closed", (): void => {
    OreUIPreviewManager.activePreviews.forEach((preview: OreUIPreview): void => void (preview.status === "running" && preview.forceClose()));
});
