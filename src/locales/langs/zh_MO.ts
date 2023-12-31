/**
 * 澳門繁體：zh_MO
 * @description 澳門繁體語言包
 * @author KwooShung
 * @createat 2023-11-03 22:31:28
 */

export default {
  common: {
    error: '執行命令失敗: {0}',
    syncCompleted: '同步完成。',
    invalidChoice: '無效選擇',
    executionSucceeded: '執行成功',
    executionFailed: '執行失敗',
    backToMenu: '返回',
    exit: '退出'
  },
  loading: {
    revokingCurrent: '正在撤銷當前版本...',
    revokingVersion: '撤銷版本：v{0} ...',
    specificVersion: '正在將版本指定為：v{0} ...',
    upgradingVersion: '正在升級{0}：v{1} > v{2} ...'
  },
  version: {
    major: '主要版本',
    minor: '次要版本',
    patch: '補丁版本',
    tips: {
      firstTimePrompt: '由於您還沒有發佈過版本，需要進行首次發佈。',
      failedToIncrement: '無法增加版本號',
      invalidVersionField: 'package.json 中的版本字段缺失或無效',
      enterInitialVersion: '請輸入您的初始版本號，預設 v{0}：',
      error: '請輸入一個有效的語義版本號，例如：v{0}'
    }
  },
  menus: {
    main: {
      prompt: '您打算做什麼呢？',
      upgradeVersion: '升級版本',
      specificVersion: '指定版本',
      revokeVersion: '撤銷版本'
    },
    upgrade: {
      prompt: '您打算升級哪個版本',
      confirmPush: '是否推送版本到倉庫'
    },
    specificVersion: {
      prompt: '請輸入版本號：',
      confirm: '您當前的版本號為：v{0}，確認打入指定版本號：v{1}'
    },
    revoke: {
      prompt: '您打算撤銷哪個版本',
      currentVersion: '當前版本',
      specificVersion: '指定版本'
    },
    revokeCurrentVersion: {
      retainChanges: '保留對文件的更改，僅撤銷版本號',
      confirm: '您當前的版本號為：v{0}，撤銷後：v{1}，是否繼續？'
    },
    revokeSpecificVersion: {
      prompt: '請輸入要撤銷的版本號：',
      retainChanges: '保留對文件的更改，僅撤銷版本號',
      confirm: '您當前的版本號為：v{0}，撤銷後：v{1}，是否繼續？'
    },
    revertToPreviousVersion: {
      updatePackageJson: '是否將 package.json 文件中的版本號：v{0} 更新為撤銷後的版本號 v{1}',
      failedToRetrieve: '無法從先前的提交中檢索版本號，暫時沒有修改 package.json 文件中的版本號。如有需要，請手動修改。'
    }
  }
};
