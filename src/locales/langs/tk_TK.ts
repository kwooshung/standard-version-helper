/**
 * 土库曼：tk_TK
 * @description 土库曼语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 21:04:35
 */

export default {
  common: {
    error: 'Ýerine ýetiriş buýrugy şowsuz: {0}',
    syncCompleted: 'Doly tamamlaň.',
    invalidChoice: 'Nädogry saýlaw',
    executionSucceeded: 'TERJIMEGI',
    executionFailed: 'Ýerine ýetiriş şowsuzlygy',
    backToMenu: 'gaýdyp gel',
    exit: 'taşla'
  },
  loading: {
    revokingCurrent: 'Häzirki wersiýa ýatyrylýar ...',
    revokingVersion: 'Gaýtap boljak wersiýa: v{0} ...',
    specificVersion: 'Wersörite wersiýasyny görkeziň: v{0} ...',
    upgradingVersion: '"Prové 0 S_}": v{1} > v{2} {2}}'
  },
  version: {
    major: 'Esasy wersiýa',
    minor: 'Ikinji derejeli wersiýasy',
    patch: 'Patch',
    tips: {
      firstTimePrompt: 'Wersiýasyny çykarmadyňyz, ilkinji gezek boşadylmaly.',
      failedToIncrement: 'Wersiýa belgisini köpeldip bilemok',
      invalidVersionField: 'Paketdäki wersiýa meýdanlary .json ýok ýa-da nädogry',
      enterInitialVersion: 'Başlangyç wersiýanyň belgisini, adaty v{0}:',
      error: 'Mysal üçin täsirli semantik wersiýa belgisini giriziň, mysal üçin: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Näme etjek?',
      upgradeVersion: 'Täzelenen wersiýa',
      specificVersion: 'Görkezilen wersiýa',
      revokeVersion: 'Ret edildi'
    },
    upgrade: {
      prompt: 'Haýsy wersiýany täzelemegi meýilleşdirýärsiňiz?',
      confirmPush: 'Wersiýasyny ammaryna itergi bermek'
    },
    specificVersion: {
      prompt: 'Wersiýa belgisini giriziň:',
      confirm: 'Häzirki wersiýa belgiňiz: v{0}, Görkezilen wersiýa belgisini girizendigiňizi tassyklaň: v{1}'
    },
    revoke: {
      prompt: 'Ýatyrmak üçin haýsy wersiýany meýilleşdirýärsiňiz?',
      currentVersion: 'häzirki wersiýasy',
      specificVersion: 'Görkezilen wersiýa'
    },
    revokeCurrentVersion: {
      retainChanges: 'Faýllaryň üýtgemegini ätiýaçlandyryň, diňe wersiýa belgisi ýatyryldy',
      confirm: 'Häzirki wersiýa belgiňiz: v{0}, ýatyrylandan soň: v{1}, dowam edýärsiňizmi?'
    },
    revokeSpecificVersion: {
      prompt: 'Rewlenilmedik wersiýa belgisini ýazmagyňyzy haýyş edýäris:',
      retainChanges: 'Faýllaryň üýtgemegini ätiýaçlandyryň, diňe wersiýa belgisi ýatyryldy',
      confirm: 'Häzirki wersiýa belgiňiz: v{0}, ýatyrylandan soň: v{1}, dowam edýärsiňizmi?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Bukjanyň faýly.',
      failedToRetrieve: 'Öňki tabşyrykdan wersiýa belgisini almak mümkin däl we bukjanyň faýlyndaky wersiýa belgisi, bu döwürde üýtgedilmeýär. Zerur bolsa, el bilen üýtgediň.'
    }
  }
};
