import { Linter, ESLint } from 'eslint';

export declare const parser: Linter.Parser;
export declare const plugin: ESLint.Plugin;
export declare const configs: {
  all: Linter.Config[];
  base: Linter.Config;
  disableTypeChecked: Linter.Config;
  eslintRecommended: Linter.Config;
  recommended: Linter.Config[];
  recommendedTypeChecked: Linter.Config[];
  recommendedTypeCheckedOnly: Linter.Config[];
  strict: Linter.Config[];
  strictTypeChecked: Linter.Config[];
  strictTypeCheckedOnly: Linter.Config[];
  stylistic: Linter.Config[];
  stylisticTypeChecked: Linter.Config[];
  stylisticTypeCheckedOnly: Linter.Config[];
};

interface ConfigWithExtends extends Linter.Config {
  extends?: Linter.Config[];
}

export declare function config(...configs: ConfigWithExtends[]): Linter.Config[];
