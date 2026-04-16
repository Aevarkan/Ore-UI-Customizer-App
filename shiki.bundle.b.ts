/* Generate by @shikijs/codegen */
import type {
  DynamicImportLanguageRegistration,
  DynamicImportThemeRegistration,
  HighlighterGeneric,
} from '@shikijs/types'
import {
  createBundledHighlighter,
  createSingletonShorthands,
} from '@shikijs/core'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'

type BundledLanguage =
  | 'typescript'
  | 'ts'
  | 'cts'
  | 'mts'
  | 'javascript'
  | 'js'
  | 'cjs'
  | 'mjs'
  | 'html'
  | 'xml'
  | 'json'
  | 'diff'
  | 'dotenv'
  | 'css'
  | 'json5'
  | 'jsonc'
  | 'jsonl'
  | 'regexp'
  | 'regex'
type BundledTheme = 'light-plus' | 'dark-plus'
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>

const bundledLanguages = {
  typescript: () => import('@shikijs/langs/typescript'),
  ts: () => import('@shikijs/langs/typescript'),
  cts: () => import('@shikijs/langs/typescript'),
  mts: () => import('@shikijs/langs/typescript'),
  javascript: () => import('@shikijs/langs/javascript'),
  js: () => import('@shikijs/langs/javascript'),
  cjs: () => import('@shikijs/langs/javascript'),
  mjs: () => import('@shikijs/langs/javascript'),
  html: () => import('@shikijs/langs/html'),
  xml: () => import('@shikijs/langs/xml'),
  json: () => import('@shikijs/langs/json'),
  diff: () => import('@shikijs/langs/diff'),
  dotenv: () => import('@shikijs/langs/dotenv'),
  css: () => import('@shikijs/langs/css'),
  json5: () => import('@shikijs/langs/json5'),
  jsonc: () => import('@shikijs/langs/jsonc'),
  jsonl: () => import('@shikijs/langs/jsonl'),
  regexp: () => import('@shikijs/langs/regexp'),
  regex: () => import('@shikijs/langs/regexp'),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>

const bundledThemes = {
  'light-plus': () => import('@shikijs/themes/light-plus'),
  'dark-plus': () => import('@shikijs/themes/dark-plus'),
} as Record<BundledTheme, DynamicImportThemeRegistration>

const createHighlighter = /* @__PURE__ */ createBundledHighlighter<
  BundledLanguage,
  BundledTheme
>({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createJavaScriptRegexEngine(),
})

const {
  codeToHtml,
  codeToHast,
  codeToTokensBase,
  codeToTokens,
  codeToTokensWithThemes,
  getSingletonHighlighter,
  getLastGrammarState,
} = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(
  createHighlighter,
)

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
}
export type { BundledLanguage, BundledTheme, Highlighter }
