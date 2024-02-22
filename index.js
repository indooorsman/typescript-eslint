import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { parser, plugin, config, configs  } = require('./index.cjs');

export {
  parser,
  plugin,
  config,
  configs
}