/**
 * 日语：ja_JP
 * @description 日语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:24:15
 */

export default {
  common: {
    error: '実行コマンドが失敗しました：{0}',
    syncCompleted: '完全に完了します。',
    invalidChoice: '無効な選択',
    executionSucceeded: '実行は成功します',
    executionFailed: '実行障害',
    backToMenu: '戻る',
    exit: 'やめる'
  },
  loading: {
    revokingCurrent: '現在のバージョンは取り消されています...',
    revokingVersion: '再検討可能なバージョン：v{0} ...',
    specificVersion: 'バージョンを指定します：v{0} ...',
    upgradingVersion: 'アップグレードv{0}：v{1} > v{2} ...'
  },
  version: {
    major: 'メインバージョン',
    minor: '二次バージョン',
    patch: 'パッチ',
    tips: {
      firstTimePrompt: 'バージョンをリリースしていないため、初めてリリースする必要があります。',
      failedToIncrement: 'バージョン番号を増やすことはできません',
      invalidVersionField: 'package.jsonのバージョンフィールドは欠落または無効です',
      enterInitialVersion: '最初のバージョン番号、デフォルト0.0.1を入力してください。',
      error: 'たとえば、効果的なセマンティックバージョン番号を入力してください：v{0}'
    }
  },
  menus: {
    main: {
      prompt: '何をする？',
      upgradeVersion: '更新版',
      specificVersion: '指定バージョン',
      revokeVersion: '拒否バージョン'
    },
    upgrade: {
      prompt: 'どのバージョンをアップグレードする予定ですか',
      confirmPush: 'バージョンを倉庫にプッシュするかどうか'
    },
    specificVersion: {
      prompt: 'バージョン番号を入力してください：',
      confirm: '現在のバージョン番号は次のとおりです。v{0}、指定されたバージョン番号を入力することを確認してください：v{1}'
    },
    revoke: {
      prompt: 'どのバージョンを取り消す予定ですか',
      currentVersion: '現行版',
      specificVersion: '指定バージョン'
    },
    revokeCurrentVersion: {
      retainChanges: 'ファイルの変更を予約すると、バージョン番号のみが取り消されます',
      confirm: '現在のバージョン番号は次のとおりです。v{0}、キャンセル後：v{1}、続行しますか？'
    },
    revokeSpecificVersion: {
      prompt: '取り消されるバージョン番号を入力してください：',
      retainChanges: 'ファイルの変更を予約すると、バージョン番号のみが取り消されます',
      confirm: '現在のバージョン番号は次のとおりです。v{0}、キャンセル後：v{1}、続行しますか？'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'package.jsonファイルのバージョン番号：v{0}が撤回されたバージョン番号v{1}として更新されるかどうか',
      failedToRetrieve: '以前の提出からバージョン番号を取得することは不可能であり、Package.jsonファイルのバージョン番号は当面は変更されていません。必要に応じて、手動で変更してください。'
    }
  }
};
