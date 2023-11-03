/**
 * 巴斯克语：eu_ES
 * @description 巴斯克语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:04:46
 */

export default {
  common: {
    error: 'Exekuzio komandoak huts egin du: {0}',
    syncCompleted: 'Guztiz osatua.',
    invalidChoice: 'Aukera baliogabea',
    executionSucceeded: 'Exekuzioa arrakasta izan',
    executionFailed: 'Exekuzio porrota',
    backToMenu: 'itzulera',
    exit: 'laga'
  },
  loading: {
    revokingCurrent: 'Egungo bertsioa baliogabetzen ari da ...',
    revokingVersion: 'Bertsio berrikusgarria: v{0} ...',
    specificVersion: 'Zehaztu bertsioa: v{0} ...',
    upgradingVersion: 'Bertsio berritu{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Bertsio nagusia',
    minor: 'Bigarren mailako bertsioa',
    patch: 'Betatxu',
    tips: {
      firstTimePrompt: 'Bertsioa kaleratu ez zenuenez, lehen aldiz askatu behar duzu.',
      failedToIncrement: 'Ezin da bertsio zenbakia handitu',
      invalidVersionField: 'Paketearen bertsio eremuak falta dira edo baliogabeak dira',
      enterInitialVersion: 'Mesedez, sartu zure hasierako bertsio zenbakia, lehenetsia 0.0.1:',
      error: 'Mesedez, idatzi bertsio semantikoaren zenbaki eraginkorra, adibidez: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Zer egingo duzu?',
      upgradeVersion: 'Bertsio eguneratua',
      specificVersion: 'Zehaztutako bertsioa',
      revokeVersion: 'Bertsio baztertua'
    },
    upgrade: {
      prompt: 'Zein bertsio berritzeko asmoa duzu',
      confirmPush: 'Bertsioa biltegira bultzatu ala ez'
    },
    specificVersion: {
      prompt: 'Mesedez, sartu bertsio zenbakia:',
      confirm: 'Uneko bertsio zenbakia hau da: v{0}, baieztatu zehaztutako bertsio zenbakia sartzen duzula: v{1}'
    },
    revoke: {
      prompt: 'Zein bertsiok erreserbatzeko asmoa duzu',
      currentVersion: 'Egungo bertsioa',
      specificVersion: 'Zehaztutako bertsioa'
    },
    revokeCurrentVersion: {
      retainChanges: 'Erreserbatu fitxategien aldaketa, bertsio zenbakia soilik ezeztatzen da',
      confirm: 'Zure bertsio zenbakia da: v{0}, ezeztapenaren ondoren: v{1}, jarraitzen al duzu?'
    },
    revokeSpecificVersion: {
      prompt: 'Idatzi ezeztatu beharreko bertsio zenbakia:',
      retainChanges: 'Erreserbatu fitxategien aldaketa, bertsio zenbakia soilik ezeztatzen da',
      confirm: 'Zure bertsio zenbakia da: v{0}, ezeztapenaren ondoren: v{1}, jarraitzen al duzu?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Paketearen bertsio zenbakia duen ala ez: v{0} bertsio ezeztatu gisa eguneratu dav{1}',
      failedToRetrieve: 'Ezinezkoa da bertsioaren zenbakia aurreko bidalketatik berreskuratzea, eta paketearen bertsioaren zenbakia ez da aldatzen. Beharrezkoa bada, aldatu eskuz.'
    }
  }
};
