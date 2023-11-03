/**
 * 罗马尼亚语：ro_RO
 * @description 罗马尼亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:51:33
 */

export default {
  common: {
    error: 'Comanda de execuție a eșuat: {0}',
    syncCompleted: 'Complet complet.',
    invalidChoice: 'Alegere nevalide',
    executionSucceeded: 'execuția reușește',
    executionFailed: 'Eșec de execuție',
    backToMenu: 'întoarcere',
    exit: 'părăsi'
  },
  loading: {
    revokingCurrent: 'Versiunea actuală este revocată ...',
    revokingVersion: 'Versiune revizibilă: v{0} ...',
    specificVersion: 'Specificați versiunea ca: v{0} ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versiunea principală',
    minor: 'Versiune secundară',
    patch: 'Plasture',
    tips: {
      firstTimePrompt: 'Deoarece nu ați lansat versiunea, trebuie să o eliberați pentru prima dată.',
      failedToIncrement: 'Nu se poate crește numărul versiunii',
      invalidVersionField: 'Câmpurile de versiune din pachet.json lipsesc sau sunt invalide',
      enterInitialVersion: 'Vă rugăm să introduceți numărul de versiune inițială, implicit 0.0.1:',
      error: 'Vă rugăm să introduceți un număr eficient de versiune semantică, de exemplu: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Ceea ce ai de gând să faci?',
      upgradeVersion: 'versiune actualizata',
      specificVersion: 'Versiune specificată',
      revokeVersion: 'Versiunea respinsă'
    },
    upgrade: {
      prompt: 'Ce versiune intenționați să faceți upgrade',
      confirmPush: 'Dacă să împingeți versiunea în depozit'
    },
    specificVersion: {
      prompt: 'Vă rugăm să introduceți numărul versiunii:',
      confirm: 'Numărul de versiune curentă este: v{0}, confirmați că introduceți numărul de versiune specificat: v{1}'
    },
    revoke: {
      prompt: 'Ce versiune intenționați să revocați',
      currentVersion: 'Versiune curentă',
      specificVersion: 'Versiune specificată'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rezervați schimbarea fișierelor, numai numărul versiunii este revocat',
      confirm: 'Numărul versiunii dvs. curente este: v{0}, după anulare: v{1}, continuați?'
    },
    revokeSpecificVersion: {
      prompt: 'Vă rugăm să introduceți numărul de versiune pentru a fi revocat:',
      retainChanges: 'Rezervați schimbarea fișierelor, numai numărul versiunii este revocat',
      confirm: 'Numărul versiunii dvs. curente este: v{0}, după anulare: v{1}, continuați?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Dacă numărul versiunii din fișierul pachet.json: v{0} este actualizat ca număr de versiune revocatv{1}',
      failedToRetrieve:
        'Este imposibil să preiați numărul de versiune din trimiterea anterioară, iar numărul de versiune din fișierul pachet.json nu este modificat deocamdată. Dacă este necesar, vă rugăm să modificați manual.'
    }
  }
};
