/**
 * 捷克语：cs_CZ
 * @description 捷克语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 19:59:40
 */

export default {
  common: {
    error: 'Příkaz provádění selhal: {0}',
    syncCompleted: 'Zcela kompletní.',
    invalidChoice: 'Neplatná volba',
    executionSucceeded: 'provedení uspět',
    executionFailed: 'Selhání provedení',
    backToMenu: 'vrátit se',
    exit: 'přestat'
  },
  loading: {
    revokingCurrent: 'Aktuální verze je zrušena ...',
    revokingVersion: 'Revizibilní verze: v{0} ...',
    specificVersion: 'Určete verzi jako: v{0} ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Hlavní verze',
    minor: 'Sekundární verze',
    patch: 'Náplast',
    tips: {
      firstTimePrompt: 'Protože jste verzi nevydali, musíte ji poprvé uvolnit.',
      failedToIncrement: 'Nelze zvýšit číslo verze',
      invalidVersionField: 'Pole verze v Package.json chybí nebo neplatí',
      enterInitialVersion: 'Zadejte své počáteční číslo verze, výchozí v{0}:',
      error: 'Zadejte například efektivní číslo sémantické verze: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Co budeš dělat?',
      upgradeVersion: 'aktualizovaná verze',
      specificVersion: 'Zadaná verze',
      revokeVersion: 'Odmítnutá verze'
    },
    upgrade: {
      prompt: 'Kterou verzi plánujete upgradovat',
      confirmPush: 'Zda tlačit verzi do skladu'
    },
    specificVersion: {
      prompt: 'Zadejte číslo verze:',
      confirm: 'Vaše aktuální číslo verze je: v{0}, potvrďte, že zadáte určené číslo verze: v{1}'
    },
    revoke: {
      prompt: 'Kterou verzi plánujete zrušit',
      currentVersion: 'současná verze',
      specificVersion: 'Zadaná verze'
    },
    revokeCurrentVersion: {
      retainChanges: 'Zarezervujte si změnu souborů, je zrušeno pouze číslo verze',
      confirm: 'Vaše aktuální číslo verze je: v{0}, Po zrušení: v{1} pokračujete?'
    },
    revokeSpecificVersion: {
      prompt: 'Zadejte číslo verze, která má být zrušena:',
      retainChanges: 'Zarezervujte si změnu souborů, je zrušeno pouze číslo verze',
      confirm: 'Vaše aktuální číslo verze je: v{0}, Po zrušení: v{1} pokračujete?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Zda je číslo verze v souboru package.json: v{0} aktualizováno jako zrušené číslo verzev{1}',
      failedToRetrieve: 'Je nemožné získat číslo verze z předchozího odeslání a číslo verze v souboru Package.json není prozatím upraveno. V případě potřeby upravte prosím ručně.'
    }
  }
};
