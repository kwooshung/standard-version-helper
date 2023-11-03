/**
 * 波兰语：pl_PL
 * @description 波兰语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:48:20
 */

export default {
  common: {
    error: 'Polecenie wykonania nie powiodło się: {0}',
    syncCompleted: 'Całkowicie kompletne.',
    invalidChoice: 'Nieprawidłowy wybór',
    executionSucceeded: 'Wykonanie się powiodło',
    executionFailed: 'Awaria wykonania',
    backToMenu: 'powrót',
    exit: 'zrezygnować '
  },
  loading: {
    revokingCurrent: 'Obecna wersja jest cofnięta ...',
    revokingVersion: 'Wersja zmieniona: v{0} ...',
    specificVersion: 'Podaj wersję jako: v{0} ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Wersja główna',
    minor: 'Wersja drugorzędna',
    patch: 'Skrawek',
    tips: {
      firstTimePrompt: 'Ponieważ nie wydałeś wersji, musisz ją wydać po raz pierwszy.',
      failedToIncrement: 'Nie można zwiększyć numeru wersji',
      invalidVersionField: 'Pola wersji w pakiet.json brakuje lub jest nieprawidłowa',
      enterInitialVersion: 'Wprowadź swój początkowy numer wersji, domyślnie 0.0.1:',
      error: 'Wprowadź skuteczny numer wersji semantyczny, na przykład: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Co zamierzasz zrobić?',
      upgradeVersion: 'zaktualizowana wersja',
      specificVersion: 'Określona wersja',
      revokeVersion: 'Odrzucona wersja'
    },
    upgrade: {
      prompt: 'Którą wersję planujesz uaktualnić',
      confirmPush: 'Czy popchnąć wersję do magazynu'
    },
    specificVersion: {
      prompt: 'Wprowadź numer wersji:',
      confirm: 'Twój bieżący numer wersji to: v{0}, potwierdź, że wprowadź określony numer wersji: v{1}'
    },
    revoke: {
      prompt: 'Którą wersję planujesz odwołać',
      currentVersion: 'obecna wersja',
      specificVersion: 'Określona wersja'
    },
    revokeCurrentVersion: {
      retainChanges: 'Zarezerwuj zmianę plików, tylko numer wersji jest cofnięty',
      confirm: 'Twój bieżący numer wersji to: v{0}, po anulowaniu: v{1}, czy kontynuujesz?'
    },
    revokeSpecificVersion: {
      prompt: 'Wprowadź numer wersji do odwołania:',
      retainChanges: 'Zarezerwuj zmianę plików, tylko numer wersji jest cofnięty',
      confirm: 'Twój bieżący numer wersji to: v{0}, po anulowaniu: v{1}, czy kontynuujesz?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Czy numer wersji w pliku pakietu.json: v{0} jest aktualizowany jako cofnięty numer wersjiv{1}',
      failedToRetrieve: 'Nie można pobrać numeru wersji z poprzedniego przesłania, a numer wersji w pliku Package.json nie jest zmodyfikowany na razie. W razie potrzeby zmodyfikuj ręcznie.'
    }
  }
};
