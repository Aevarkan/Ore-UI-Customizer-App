/* Generate by @shikijs/codegen */
import type { DynamicImportLanguageRegistration, DynamicImportThemeRegistration, HighlighterGeneric } from "@shikijs/types";
import { createBundledHighlighter, createSingletonShorthands, createHighlighterCoreSync } from "@shikijs/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";
import rewritePattern from "regexpu-core";

type BundledLanguage = "typescript" | "ts" | "cts" | "mts" | "javascript" | "js" | "cjs" | "mjs" | "vue";
type BundledTheme = "light-plus" | "dark-plus";
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>;

const bundledLanguages = {
    typescript: () => import("@shikijs/langs/typescript"),
    ts: () => import("@shikijs/langs/typescript"),
    cts: () => import("@shikijs/langs/typescript"),
    mts: () => import("@shikijs/langs/typescript"),
    javascript: () => import("@shikijs/langs/javascript"),
    js: () => import("@shikijs/langs/javascript"),
    cjs: () => import("@shikijs/langs/javascript"),
    mjs: () => import("@shikijs/langs/javascript"),
    vue: () => import("@shikijs/langs/vue"),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>;

const bundledThemes = {
    "light-plus": () => import("@shikijs/themes/light-plus"),
    "dark-plus": () => import("@shikijs/themes/dark-plus"),
} as Record<BundledTheme, DynamicImportThemeRegistration>;

const createHighlighter = /* @__PURE__ */ createBundledHighlighter<BundledLanguage, BundledTheme>({
    langs: bundledLanguages,
    themes: bundledThemes,
    engine: () => createJavaScriptRegexEngine(),
});

const { codeToHtml, codeToHast, codeToTokensBase, codeToTokens, codeToTokensWithThemes, getSingletonHighlighter, getLastGrammarState } =
    /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(createHighlighter);
const shiki = {
    bundledLanguages,
    bundledThemes,
    codeToHast,
    codeToHtml,
    codeToTokens,
    codeToTokensBase,
    codeToTokensWithThemes,
    createHighlighter,
    getLastGrammarState,
    getSingletonHighlighter,
    rewritePattern,
    createJavaScriptRegexEngine,
};
// shiki.codeToHtml("let a = 5;", { lang: "javascript",theme: "dark-plus" });
export {
    bundledLanguages,
    bundledThemes,
    codeToHast,
    codeToHtml,
    codeToTokens,
    codeToTokensBase,
    codeToTokensWithThemes,
    createHighlighter,
    getLastGrammarState,
    getSingletonHighlighter,
    rewritePattern,
    createJavaScriptRegexEngine,
};
export type { BundledLanguage, BundledTheme, Highlighter };

