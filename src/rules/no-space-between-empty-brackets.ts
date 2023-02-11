import { createPluginRule, makeBracketsIdentifier } from '../utils';

export default createPluginRule({
  ruleName: 'no-space-between-empty-brackets',
  type: 'layout',
  create: ruleCtx => ({
    Identifier: makeBracketsIdentifier({
      ruleCtx,
      reportMessage: 'There should be no space between brackets.',
      brackets: ['[', ']'],
    }),
  }),
});
