import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { parser, plugin } = require('./index.cjs');

export {
  parser,
  plugin
}