import { readdirSync, writeFileSync } from "node:fs";

const imports: string[] = [];

for (const entry of readdirSync("node_modules/regenerate-unicode-properties", { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const file of readdirSync(`node_modules/regenerate-unicode-properties/${entry.name}`)) {
        imports.push(`    ["${entry.name}/${file.replace(/\.js$/, "")}"]: require("regenerate-unicode-properties/${entry.name}/${file}"),`);
    }
}

writeFileSync("./imports.cts", "const unicodeProperties = {\n" + imports.join("\n") + "\n};");
