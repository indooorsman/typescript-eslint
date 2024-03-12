import esbuild from 'esbuild';
import { copyFileSync } from 'node:fs';

/** @type {import('esbuild').BuildOptions} */
const cjsBuildConfig = {
  entryPoints: {
    index: './index.cjs'
  },
  treeShaking: true,
  target: 'node18.18.0',
  platform: 'node',
  format: 'cjs',
  minify: true,
  sourcemap: false,
  bundle: true,
  external: ['typescript', 'eslint', '@eslint/*', '@eslint-community/*', 'eslint-*'],
  write: true,
  allowOverwrite: true,
  outdir: './dist',
  outExtension: {
    '.js': '.cjs'
  }
};
await esbuild.build(cjsBuildConfig);

copyFileSync('./index.js', './dist/index.js');
copyFileSync('./parser.js', './dist/parser.js');
copyFileSync('./parser.cjs', './dist/parser.cjs');
copyFileSync('./index.d.ts', './dist/index.d.ts');
