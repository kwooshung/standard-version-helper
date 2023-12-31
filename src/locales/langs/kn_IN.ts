/**
 * 卡纳达语：kn_IN
 * @description 卡纳达语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:30:05
 */

export default {
  common: {
    error: 'ಮರಣದಂಡನೆ ಆಜ್ಞೆ ವಿಫಲವಾಗಿದೆ: {0}',
    syncCompleted: 'ಸಂಪೂರ್ಣವಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.',
    invalidChoice: 'ಅಮಾನ್ಯ ಆಯ್ಕೆ',
    executionSucceeded: 'ಮರಣದಂಡನೆ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ',
    executionFailed: 'ಮರಣದಂಡನೆ ವೈಫಲ್ಯ',
    backToMenu: 'ಮರಳಿ',
    exit: 'ಬಿಟ್ಟು'
  },
  loading: {
    revokingCurrent: 'ಪ್ರಸ್ತುತ ಆವೃತ್ತಿಯನ್ನು ಹಿಂತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತಿದೆ ...',
    revokingVersion: 'ಮರುಹಂಚಿಕೆ ಆವೃತ್ತಿ: v{0} ...',
    specificVersion: 'ಆವೃತ್ತಿಯನ್ನು ಹೀಗೆ ಸೂಚಿಸಿ: v{0} ...',
    upgradingVersion: '{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'ಮುಖ್ಯ ಆವೃತ್ತಿ',
    minor: 'ದ್ವಿತೀಯ ಆವೃತ್ತಿಯು',
    patch: 'ತೇಪೆ',
    tips: {
      firstTimePrompt: 'ನೀವು ಆವೃತ್ತಿಯನ್ನು ಬಿಡುಗಡೆ ಮಾಡದ ಕಾರಣ, ನೀವು ಅದನ್ನು ಮೊದಲ ಬಾರಿಗೆ ಬಿಡುಗಡೆ ಮಾಡಬೇಕಾಗುತ್ತದೆ.',
      failedToIncrement: 'ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
      invalidVersionField: 'ಪ್ಯಾಕೇಜ್.ಜೆಸನ್‌ನಲ್ಲಿನ ಆವೃತ್ತಿ ಕ್ಷೇತ್ರಗಳು ಕಾಣೆಯಾಗಿವೆ ಅಥವಾ ಅಮಾನ್ಯವಾಗಿವೆ',
      enterInitialVersion: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆರಂಭಿಕ ಆವೃತ್ತಿ ಸಂಖ್ಯೆ, ಡೀಫಾಲ್ಟ್ v{0} ಅನ್ನು ನಮೂದಿಸಿ:',
      error: 'ದಯವಿಟ್ಟು ಪರಿಣಾಮಕಾರಿ ಶಬ್ದಾರ್ಥದ ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ, ಉದಾಹರಣೆಗೆ: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'ನೀನು ಏನು ಮಾಡಲು ಹೊರಟಿರುವೆ?',
      upgradeVersion: 'ನವೀಕರಿಸಿದ ಆವೃತ್ತಿ',
      specificVersion: 'ನಿರ್ದಿಷ್ಟ ಆವೃತ್ತಿ',
      revokeVersion: 'ತಿರಸ್ಕರಿಸಿದ ಆವೃತ್ತಿ'
    },
    upgrade: {
      prompt: 'ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಲು ನೀವು ಯಾವ ಆವೃತ್ತಿಯನ್ನು ಯೋಜಿಸುತ್ತೀರಿ',
      confirmPush: 'ಆವೃತ್ತಿಯನ್ನು ಗೋದಾಮಿಗೆ ತಳ್ಳಬೇಕೆ'
    },
    specificVersion: {
      prompt: 'ದಯವಿಟ್ಟು ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ:',
      confirm: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಆವೃತ್ತಿ ಸಂಖ್ಯೆ: v{0}, ನೀವು ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸುತ್ತೀರಿ ಎಂದು ದೃ irm ೀಕರಿಸಿ: v{1}'
    },
    revoke: {
      prompt: 'ನೀವು ಯಾವ ಆವೃತ್ತಿಯನ್ನು ಹಿಂತೆಗೆದುಕೊಳ್ಳಲು ಯೋಜಿಸುತ್ತೀರಿ',
      currentVersion: 'ಪ್ರಸ್ತುತ ಆವೃತ್ತಿ',
      specificVersion: 'ನಿರ್ದಿಷ್ಟ ಆವೃತ್ತಿ'
    },
    revokeCurrentVersion: {
      retainChanges: 'ಫೈಲ್‌ಗಳ ಬದಲಾವಣೆಯನ್ನು ಕಾಯ್ದಿರಿಸಿ, ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ಮಾತ್ರ ಹಿಂತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ',
      confirm: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಆವೃತ್ತಿ ಸಂಖ್ಯೆ: v{0}, ರದ್ದತಿಯ ನಂತರ: v{1}, ನೀವು ಮುಂದುವರಿಸುತ್ತೀರಾ?'
    },
    revokeSpecificVersion: {
      prompt: 'ಹಿಂತೆಗೆದುಕೊಳ್ಳಲು ದಯವಿಟ್ಟು ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ:',
      retainChanges: 'ಫೈಲ್‌ಗಳ ಬದಲಾವಣೆಯನ್ನು ಕಾಯ್ದಿರಿಸಿ, ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ಮಾತ್ರ ಹಿಂತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ',
      confirm: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಆವೃತ್ತಿ ಸಂಖ್ಯೆ: v{0}, ರದ್ದತಿಯ ನಂತರ: v{1}, ನೀವು ಮುಂದುವರಿಸುತ್ತೀರಾ?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'ಪ್ಯಾಕೇಜ್.ಜೆಸನ್ ಫೈಲ್‌ನಲ್ಲಿನ ಆವೃತ್ತಿ ಸಂಖ್ಯೆ: ವಿ {0} ಅನ್ನು ಹಿಂತೆಗೆದುಕೊಂಡ ಆವೃತ್ತಿ ಸಂಖ್ಯೆv{1} ಆಗಿ ನವೀಕರಿಸಲಾಗಿದೆಯೆ?',
      failedToRetrieve:
        'ಹಿಂದಿನ ಸಲ್ಲಿಕೆಯಿಂದ ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ಹಿಂಪಡೆಯುವುದು ಅಸಾಧ್ಯ, ಮತ್ತು ಪ್ಯಾಕೇಜ್.ಜೆಸನ್ ಫೈಲ್‌ನಲ್ಲಿನ ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯನ್ನು ಸದ್ಯಕ್ಕೆ ಮಾರ್ಪಡಿಸಲಾಗಿಲ್ಲ. ಅಗತ್ಯವಿದ್ದರೆ, ದಯವಿಟ್ಟು ಹಸ್ತಚಾಲಿತವಾಗಿ ಮಾರ್ಪಡಿಸಿ.'
    }
  }
};
