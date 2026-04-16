import { writeFileSync } from "node:fs";
import { codegen } from "shiki-codegen";

const { code } = await codegen({
    langs: ["typescript", "javascript", "vue"],
    themes: ["light-plus", "dark-plus"],
    engine: "javascript",
    typescript: true,
});

writeFileSync("./shiki.bundle.ts", code);
