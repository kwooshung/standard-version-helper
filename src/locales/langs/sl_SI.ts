/**
 * 斯洛文尼亚语：sl_SI
 * @description 斯洛文尼亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:58:16
 */

export default {
  common: {
    error: 'Ukaz izvedbe ni uspel: {0}',
    syncCompleted: 'Popolnoma dokončano.',
    invalidChoice: 'Neveljavna izbira',
    executionSucceeded: 'Izvedba uspe',
    executionFailed: 'Odpoved izvajanja',
    backToMenu: 'vrnitev',
    exit: 'prenehati'
  },
  loading: {
    revokingCurrent: 'Trenutna različica se prekliče ...',
    revokingVersion: 'Revidible različica: v{0} ...',
    specificVersion: 'Navedite različico kot: v{0} ...',
    upgradingVersion: 'Nadgradite{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Glavna različica',
    minor: 'Sekundarna različica',
    patch: 'Obliž',
    tips: {
      firstTimePrompt: 'Ker različice niste izdali, jo morate prvič izdati.',
      failedToIncrement: 'Ne morem povečati številke različice',
      invalidVersionField: 'Polja različice v packalu.json manjkajo ali neveljavna',
      enterInitialVersion: 'Vnesite svojo prvotno številko različice, privzeto v{0}:',
      error: 'Vnesite učinkovito semantično številko različice, na primer: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Kaj boš naredil?',
      upgradeVersion: 'posodobljena različica',
      specificVersion: 'Določena različica',
      revokeVersion: 'Zavrnjena različica'
    },
    upgrade: {
      prompt: 'Katero različico nameravate nadgraditi',
      confirmPush: 'Ali pritiskati različico v skladišče'
    },
    specificVersion: {
      prompt: 'Vnesite številko različice:',
      confirm: 'Vaša trenutna številka različice je: v{0}, potrdite, da vnesete določeno številko različice: v{1}'
    },
    revoke: {
      prompt: 'Katero različico nameravate preklicati',
      currentVersion: 'trenutna verzija',
      specificVersion: 'Določena različica'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rezervirajte spremembo datotek, preklicana je samo številka različice',
      confirm: 'Vaša trenutna številka različice je: v{0}, po preklicu: v{1}, ali nadaljujete?'
    },
    revokeSpecificVersion: {
      prompt: 'Prosimo, vnesite številko različice, ki jo želite preklicati:',
      retainChanges: 'Rezervirajte spremembo datotek, preklicana je samo številka različice',
      confirm: 'Vaša trenutna številka različice je: v{0}, po preklicu: v{1}, ali nadaljujete?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Ali je številka različice v datoteki paketa.json: v{0} je posodobljena kot preklicana številka različicev{1}',
      failedToRetrieve: 'Številka različice ni mogoče pridobiti iz prejšnje oddaje, številka različice v datoteki paket.json pa zaenkrat ni spremenjena. Po potrebi spreminjajte ročno.'
    }
  }
};
