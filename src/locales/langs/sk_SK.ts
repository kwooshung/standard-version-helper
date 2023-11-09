/**
 * 斯洛伐克语：sk_SK
 * @description 斯洛伐克语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:55:46
 */

export default {
  common: {
    error: 'Príkaz na vykonanie zlyhal: {0}',
    syncCompleted: 'Úplne kompletné.',
    invalidChoice: 'Neplatný výber',
    executionSucceeded: 'Vykonanie uspieť',
    executionFailed: 'Zlyhanie',
    backToMenu: 'návrat',
    exit: 'prestať'
  },
  loading: {
    revokingCurrent: 'Aktuálna verzia sa zrušuje ...',
    revokingVersion: 'Revisible Version: v{0} ...',
    specificVersion: 'Zadajte verziu ako: v{0} ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Hlavná verzia',
    minor: 'Sekundárna verzia',
    patch: 'Záplata',
    tips: {
      firstTimePrompt: 'Keďže ste verziu nevydali, musíte ju vydať prvýkrát.',
      failedToIncrement: 'Nemôžem zvýšiť číslo verzie',
      invalidVersionField: 'Polia verzie v balíku.json sú chýbajúce alebo neplatné',
      enterInitialVersion: 'Zadajte svoje počiatočné číslo verzie, predvolené v{0}:',
      error: 'Zadajte účinné sémantické číslo verzie, napríklad: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Čo budeš robiť?',
      upgradeVersion: 'aktualizovaná verzia',
      specificVersion: 'Určená verzia',
      revokeVersion: 'Odmietnutá verzia'
    },
    upgrade: {
      prompt: 'Ktorú verziu plánujete upgradovať',
      confirmPush: 'Či tlačiť verziu do skladu'
    },
    specificVersion: {
      prompt: 'Zadajte číslo verzie:',
      confirm: 'Vaše aktuálne číslo verzie je: v{0}, potvrďte, že zadáte zadané číslo verzie: v{1}'
    },
    revoke: {
      prompt: 'Ktorú verziu plánujete odvolať',
      currentVersion: 'aktuálna verzia',
      specificVersion: 'Určená verzia'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rezervujte si zmenu súborov, iba číslo verzie je zrušené',
      confirm: 'Vaše aktuálne číslo verzie je: v{0}, po zrušení: v{1}, pokračujete?'
    },
    revokeSpecificVersion: {
      prompt: 'Zadajte číslo verzie, ktoré sa chcete odvolať:',
      retainChanges: 'Rezervujte si zmenu súborov, iba číslo verzie je zrušené',
      confirm: 'Vaše aktuálne číslo verzie je: v{0}, po zrušení: v{1}, pokračujete?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Či je číslo verzie v súbore Package.json: v{0} aktualizované ako zrušené číslo verziev{1}',
      failedToRetrieve: 'Nie je možné načítať číslo verzie z predchádzajúceho predloženia a číslo verzie v súbore balíčka.json sa zatiaľ nie je upravené. Ak je to potrebné, upravte ručne.'
    }
  }
};
