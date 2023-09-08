import type { Linter, ESLint } from 'eslint';

declare const parser: Linter.ParserModule;
declare const plugin: ESLint.Plugin;

export {
  parser,
  plugin
}
