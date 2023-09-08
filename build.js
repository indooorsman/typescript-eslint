import esbuild from 'esbuild';
import { copyFileSync } from 'node:fs';

/** @type {import('esbuild').BuildOptions} */
const cjsBuildConfig = {
  entryPoints: {
    index: './index.cjs'
  },
  treeShaking: true,
  target: 'node18',
  platform: 'node',
  format: 'cjs',
  minify: true,
  sourcemap: false,
  bundle: true,
  external: ['typescript', 'eslint', '@eslint/*', 'eslint-*'],
  write: true,
  allowOverwrite: true,
  outdir: './dist',
  outExtension: {
    '.js': '.cjs'
  }
};
await esbuild.build(cjsBuildConfig);

copyFileSync('./index.js', './dist/index.js');
copyFileSync('./index.d.ts', './dist/index.d.ts');
copyFileSync('./parser.js', './dist/parser.js');
copyFileSync('./parser.cjs', './dist/parser.cjs');
