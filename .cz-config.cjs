/* eslint-disable no-undef */
module.exports = {
  // https://gitmoji.dev/ emoji表情
  releaseCommitMessageFormat: 'release: 🎉 v{{currentTag}}',
  types: require('./tools/commitTypes.cjs'),
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['arco-design', '对 arco-design 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['test', '测试相关'],
    ['config', '配置相关'],
    ['changelog', '更新日志'],
    ['auth', '对 auth 修改'],
    ['egg', '小彩蛋，小惊喜'],
    ['experiments', '实验性功能'],
    ['workflows', '工作流相关文件更改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),
  messages: {
    type: '选择一种你的提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '短说明:',
    body: '长说明，使用"|"换行(可选)：',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 100
};
