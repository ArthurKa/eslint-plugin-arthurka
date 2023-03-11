import { Linter } from 'eslint';
import * as rules from './rules';

export const recommended: Linter.Config = {
  rules: Object.fromEntries(
    Object.values(rules).map(({ ruleName, ruleEntry }) => [`arthurka/${ruleName}`, ruleEntry]),
  ),
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'arthurka/no-unused-imports': 'off',
      },
    },
  ],
};
