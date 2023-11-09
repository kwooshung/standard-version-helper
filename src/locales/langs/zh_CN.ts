/**
 * 简体中文：zh_CN
 * @description 简体中文语言包
 * @author KwooShung
 * @createat 2023-11-03 22:31:28
 */

export default {
  common: {
    error: '执行命令失败: {0}',
    syncCompleted: '同步完成。',
    invalidChoice: '无效选择',
    executionSucceeded: '执行成功',
    executionFailed: '执行失败',
    backToMenu: '返回',
    exit: '退出'
  },
  loading: {
    revokingCurrent: '正在撤销当前版本...',
    revokingVersion: '撤销版本：v{0} ...',
    specificVersion: '正在将版本指定为：v{0} ...',
    upgradingVersion: '正在升级{0}：v{1} > v{2} ...'
  },
  version: {
    major: '主要版本',
    minor: '次要版本',
    patch: '补丁版本',
    tips: {
      firstTimePrompt: '由于您还没有发布过版本，需要进行首次发布。',
      failedToIncrement: '无法增加版本号',
      invalidVersionField: 'package.json 中的版本字段缺失或无效',
      enterInitialVersion: '请输入您的初始版本号，默认 v{0}：',
      error: '请输入一个有效的语义版本号，例如：v{0}'
    }
  },
  menus: {
    main: {
      prompt: '您打算做什么呢？',
      upgradeVersion: '升级版本',
      specificVersion: '指定版本',
      revokeVersion: '撤销版本'
    },
    upgrade: {
      prompt: '您打算升级哪个版本',
      confirmPush: '是否推送版本到仓库'
    },
    specificVersion: {
      prompt: '请输入版本号：',
      confirm: '您当前的版本号为：v{0}，确认打入指定版本号：v{1}'
    },
    revoke: {
      prompt: '您打算撤销哪个版本',
      currentVersion: '当前版本',
      specificVersion: '指定版本'
    },
    revokeCurrentVersion: {
      retainChanges: '保留对文件的更改，仅撤销版本号',
      confirm: '您当前的版本号为：v{0}，撤销后：v{1}，是否继续？'
    },
    revokeSpecificVersion: {
      prompt: '请输入要撤销的版本号：',
      retainChanges: '保留对文件的更改，仅撤销版本号',
      confirm: '您当前的版本号为：v{0}，撤销后：v{1}，是否继续？'
    },
    revertToPreviousVersion: {
      updatePackageJson: '是否将 package.json 文件中的版本号：v{0} 更新为撤销后的版本号 v{1}',
      failedToRetrieve: '无法从先前的提交中检索版本号，暂时没有修改 package.json 文件中的版本号。如有需要，请手动修改。'
    }
  }
};
