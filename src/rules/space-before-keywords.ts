import { addSpaceForKeyword, createPluginRule } from '../utils';

export default createPluginRule({
  ruleName: 'space-before-keywords',
  type: 'layout',
  create: addSpaceForKeyword('before', ['satisfies', 'as']),
});
