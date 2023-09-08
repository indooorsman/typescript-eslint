import esbuild from 'esbuild';
import { copyFileSync } from 'node:fs';

/** @type {import('esbuild').BuildOptions} */
const buildConfig = {
  entryPoints: {
    index: './index.js'
  },
  splitting: false,
  treeShaking: true,
  banner: {
    js: `import { createRequire } from 'node:module';\nimport { fileURLToPath } from 'node:url';\nconst require = createRequire(import.meta.url);\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = fileURLToPath(new URL('.', import.meta.url));`
  },
  chunkNames: 'shared/[name]-[hash]',
  target: 'node18',
  platform: 'node',
  format: 'esm',
  minify: true,
  sourcemap: false,
  bundle: true,
  external: ['typescript', 'eslint', '@eslint/*', 'eslint-*'],
  write: true,
  allowOverwrite: true,
  outdir: './dist'
};
await esbuild.build(buildConfig);

copyFileSync('./index.d.ts', './dist/index.d.ts');
copyFileSync('./parser.js', './dist/parser.js');
