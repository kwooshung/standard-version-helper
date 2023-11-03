/**
 * 英语（美式）：en_US
 * @description 英语（美式）语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:02:14
 */

export default {
  common: {
    error: 'The execution command failed: {0}',
    syncCompleted: 'Completely complete.',
    invalidChoice: 'Invalid choice',
    executionSucceeded: 'execution succeed',
    executionFailed: 'Execution failure',
    backToMenu: 'return',
    exit: 'quit'
  },
  loading: {
    revokingCurrent: 'The current version is being revoked ...',
    revokingVersion: 'Revisible version: v{0} ...',
    specificVersion: 'Specify the version as: v{0} ...',
    upgradingVersion: 'Upgradev{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Main version',
    minor: 'Secondary version',
    patch: 'Patch',
    tips: {
      firstTimePrompt: 'Since you have not released the version, you need to release it for the first time.',
      failedToIncrement: "Can't increase the version number",
      invalidVersionField: 'The version fields in Package.json are missing or invalid',
      enterInitialVersion: 'Please enter your initial version number, default 0.0.1:',
      error: 'Please enter an effective semantic version number, for example: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'What are you going to do?',
      upgradeVersion: 'updated version',
      specificVersion: 'Specified version',
      revokeVersion: 'Rejected version'
    },
    upgrade: {
      prompt: 'Which version do you plan to upgrade',
      confirmPush: 'Whether to push the version to the warehouse'
    },
    specificVersion: {
      prompt: 'Please enter the version number:',
      confirm: 'Your current version number is: v{0}, confirm that you enter the specified version number: v{1}'
    },
    revoke: {
      prompt: 'Which version do you plan to revoke',
      currentVersion: 'current version',
      specificVersion: 'Specified version'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserve the change of files, only the version number is revoked',
      confirm: 'Your current version number is: v{0}, after the cancellation: v{1}, do you continue?'
    },
    revokeSpecificVersion: {
      prompt: 'Please enter the version number to be revoked:',
      retainChanges: 'Reserve the change of files, only the version number is revoked',
      confirm: 'Your current version number is: v{0}, after the cancellation: v{1}, do you continue?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Whether the version number in the Package.json file: v{0} is updated as the revoked version numberv{1}',
      failedToRetrieve:
        'It is impossible to retrieve the version number from the previous submission, and the version number in the Package.json file is not modified for the time being. If necessary, please modify manually.'
    }
  }
};
