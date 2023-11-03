/**
 * 克罗地亚语：hr_HR
 * @description 克罗地亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:16:54
 */

export default {
  common: {
    error: 'Naredba izvršenja nije uspjela: {0}',
    syncCompleted: 'Potpuno cjelovito.',
    invalidChoice: 'Nevažeći izbor',
    executionSucceeded: 'Izvedba uspjela',
    executionFailed: 'Neuspjeh izvedbe',
    backToMenu: 'povratak',
    exit: 'prestati'
  },
  loading: {
    revokingCurrent: 'Trenutna verzija se opoziva ...',
    revokingVersion: 'Revidirana verzija: v{0} ...',
    specificVersion: 'Navedite verziju kao: v{0} ...',
    upgradingVersion: 'Nadogradite{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Glavna verzija',
    minor: 'Sekundarna verzija',
    patch: 'Zakrpa',
    tips: {
      firstTimePrompt: 'Budući da niste objavili verziju, prvo je morate objaviti.',
      failedToIncrement: 'Ne mogu povećati broj verzije',
      invalidVersionField: 'Polja verzije u paketu.json nedostaju ili nevažeća',
      enterInitialVersion: 'Unesite svoj početni broj verzije, zadani 0.0.1:',
      error: 'Unesite učinkovit semantički broj verzije, na primjer: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Što ćeš učiniti?',
      upgradeVersion: 'Ažurirana verzija',
      specificVersion: 'Navedena verzija',
      revokeVersion: 'Odbijena verzija'
    },
    upgrade: {
      prompt: 'Koju verziju planirate nadograditi',
      confirmPush: 'Hoće li verziju gurnuti u skladište'
    },
    specificVersion: {
      prompt: 'Unesite broj verzije:',
      confirm: 'Vaš trenutni broj verzije je: v{0}, potvrdite da unesete navedeni broj verzije: v{1}'
    },
    revoke: {
      prompt: 'Koju verziju planirate opozvati',
      currentVersion: 'Trenutna verzija',
      specificVersion: 'Navedena verzija'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rezervirajte promjenu datoteka, samo je broj verzije opozvan',
      confirm: 'Vaš trenutni broj verzije je: v{0}, nakon otkazivanja: v{1}, nastavljate li?'
    },
    revokeSpecificVersion: {
      prompt: 'Unesite broj verzije koji će se oduzeti:',
      retainChanges: 'Rezervirajte promjenu datoteka, samo je broj verzije opozvan',
      confirm: 'Vaš trenutni broj verzije je: v{0}, nakon otkazivanja: v{1}, nastavljate li?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Da li je broj verzije u paketu.json datoteku: v{0} ažuriran kao opozoreni broj verzijev{1}',
      failedToRetrieve: 'Nemoguće je preuzeti broj verzije iz prethodne prijave, a broj verzije u datoteci paketa.json zasad nije modificiran. Ako je potrebno, molimo ručno.'
    }
  }
};
