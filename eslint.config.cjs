// This file is just to translate the `.eslintrc.json` file for eslint v9.0.0 and above.
/* eslint-disable */
{
    // This is to require from every possible place until one works.
    const originalRequirePaths = [...require.main.paths];
    let globalPath = "";
    function loadGlobalPath() {
        if (globalPath) return globalPath;
        const { execSync } = require("node:child_process");
        return (globalPath = execSync("npm root -g")
            .toString()
            .split(/[\n\r]+/g)
            .find((v) => v.includes("\\") || v.includes("/")));
    }
    /**
     * @template {string} T
     * @param {T} id
     * @returns {T extends "eslint/config" ? typeof import("eslint/config") : T extends "@eslint/js" ? typeof import("@eslint/js") : T extends "@eslint/eslintrc" ? typeof import("@eslint/eslintrc") : unknown}
     */
    function attemptRequire(id) {
        for (const path of originalRequirePaths) {
            require.main.paths = [path];
            try {
                return require(id);
            } catch {}
        }
        require.main.paths = [loadGlobalPath()];
        try {
            return require(id);
        } catch {
            throw new Error(`Cannot find module '${id}' in any of the following paths:\n${originalRequirePaths.map((v) => `${" ".repeat(4)}${v}`).join("\n")}`);
        }
    }
    var { defineConfig } = attemptRequire("eslint/config");
    var js = attemptRequire("@eslint/js");
    var { FlatCompat } = attemptRequire("@eslint/eslintrc");
    require.main.paths = globalPath ? [...originalRequirePaths, globalPath] : originalRequirePaths;
}

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const { readFileSync } = require("node:fs");

try {
    var config = JSON.parse(readFileSync("./.eslintrc.json", "utf8"));
} catch {
    var config = JSON.parse(readFileSync("./.eslintrc", "utf8"));
}

module.exports = defineConfig([
    ...compat.config(config) /* ,
    {
        plugins: {
            "no-restricted-syntax": require("./eslint-alt-no-restricted-syntax-plugin.cjs"),
        },
        rules: {
            "no-restricted-syntax/error": [
                "error",
                { selector: "VariableDeclaration[kind='using']", message: "The `using` keyword is not supported by CoHTML (Ore UI)." },
            ],
            "no-restricted-syntax/warn": ["warn", { selector: "Literal[regex.flags=/y/]", message: "The `y` regex flag is not supported by CoHTML (Ore UI)." }],
        },
    } */,
]);
