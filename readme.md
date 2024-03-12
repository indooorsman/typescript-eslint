# @indooorsman/typescript-eslint

This is a bundled esm package of `@typescript-eslint/eslint-plugin` & `@typescript-eslint/parser`, it's super fast to be resolved & downloaded ⚡️⚡️⚡️

## Installation

```bash
npm i -D @indooorsman/typescript-eslint
# or
yarn add -D @indooorsman/typescript-eslint
```

## Usage

please use in new eslint config file (<https://eslint.org/docs/latest/use/configure/configuration-files-new>)

```js
// eslint.config.js
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import {
  parser as tsParser,
  plugin as tsPlugin,
  configs as tslintConfigs
} from '@indooorsman/typescript-eslint';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module',
        lib: ['ESNext', 'DOM', 'DOM.Iterable'],
        project: ['./tsconfig.json']
      }
    },
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tsPlugin
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.jsx', '.cjs', '.mjs'],
        // use with eslint-plugin-import
        '@indooorsman/typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
      }
    },
    rules: {
      // recommended rules
      ...tslintConfigs.recommended.reduce((ret, item) => Object.assign(ret, item.rules ?? {}), {}),

      // your own rules
      '@typescript-eslint/consistent-type-exports': 'error'
    }
  }
];
```
