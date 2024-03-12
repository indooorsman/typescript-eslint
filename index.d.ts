import { Linter, ESLint } from 'eslint';

export declare const parser: Linter.FlatConfigParserModule;
export declare const plugin: ESLint.Plugin;
export declare const configs: {
  all: Linter.FlatConfig[];
  base: Linter.FlatConfig;
  disableTypeChecked: Linter.FlatConfig;
  eslintRecommended: Linter.FlatConfig;
  recommended: Linter.FlatConfig[];
  recommendedTypeChecked: Linter.FlatConfig[];
  recommendedTypeCheckedOnly: Linter.FlatConfig[];
  strict: Linter.FlatConfig[];
  strictTypeChecked: Linter.FlatConfig[];
  strictTypeCheckedOnly: Linter.FlatConfig[];
  stylistic: Linter.FlatConfig[];
  stylisticTypeChecked: Linter.FlatConfig[];
  stylisticTypeCheckedOnly: Linter.FlatConfig[];
};

interface ConfigWithExtends extends Linter.FlatConfig {
  extends?: Linter.FlatConfig[];
}

export declare function config(...configs: ConfigWithExtends[]): Linter.FlatConfig[];
