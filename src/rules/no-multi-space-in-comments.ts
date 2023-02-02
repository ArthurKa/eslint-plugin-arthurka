import { createPluginRule, makeCommentsCheckRule } from '../utils';

export default createPluginRule({
  ruleName: 'no-multi-space-in-comments',
  type: 'layout',
  create: makeCommentsCheckRule({
    reportMessage: 'There should be no multiple spaces.',
    regExp: /\s{2,}/g,
    replaceWith: ' ',
  }),
});
