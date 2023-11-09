/**
 * 德语：de_DE
 * @description 德语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:00:39
 */

export default {
  common: {
    error: 'Der Befehl Ausführung ist fehlgeschlagen: {0}',
    syncCompleted: 'Komplett vollständig.',
    invalidChoice: 'Ungültige Auswahl',
    executionSucceeded: 'Ausführung erfolgreich',
    executionFailed: 'Ausführungsfehler',
    backToMenu: 'zurückkehren',
    exit: 'aufhören'
  },
  loading: {
    revokingCurrent: 'Die aktuelle Version wird widerrufen ...',
    revokingVersion: 'Revisible Version: v{0} ...',
    specificVersion: 'Geben Sie die Version als: v{0} an ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Hauptversion',
    minor: 'Sekundärversion',
    patch: 'Patch',
    tips: {
      firstTimePrompt: 'Da Sie die Version nicht veröffentlicht haben, müssen Sie sie zum ersten Mal veröffentlichen.',
      failedToIncrement: 'Die Versionsnummer kann nicht erhöht werden',
      invalidVersionField: 'Die Versionsfelder in package.json fehlen oder ungültig',
      enterInitialVersion: 'Bitte geben Sie Ihre anfängliche Versionsnummer ein, Standardwert v{0}:',
      error: 'Bitte geben Sie eine effektive semantische Versionsnummer ein, zum Beispiel: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Was werden Sie tun?',
      upgradeVersion: 'aktualisierte Version',
      specificVersion: 'Angegebene Version',
      revokeVersion: 'Abgelehnte Version'
    },
    upgrade: {
      prompt: 'Welche Version planen Sie ein Upgrade?',
      confirmPush: 'Ob Sie die Version in das Lagerhaus drücken sollen'
    },
    specificVersion: {
      prompt: 'Bitte geben Sie die Versionsnummer ein:',
      confirm: 'Ihre aktuelle Versionsnummer lautet: v{0}, bestätigen Sie, dass Sie die angegebene Versionsnummer eingeben: v{1}'
    },
    revoke: {
      prompt: 'Welche Version planen Sie zu widerrufen?',
      currentVersion: 'aktuelle Version',
      specificVersion: 'Angegebene Version'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reservieren Sie die Änderung der Dateien, nur die Versionsnummer wird widerrufen',
      confirm: 'Ihre aktuelle Versionsnummer lautet: v{0}, nach der Stornierung: v{1}, fahren Sie fort?'
    },
    revokeSpecificVersion: {
      prompt: 'Bitte geben Sie die zu widerrufene Versionsnummer ein:',
      retainChanges: 'Reservieren Sie die Änderung der Dateien, nur die Versionsnummer wird widerrufen',
      confirm: 'Ihre aktuelle Versionsnummer lautet: v{0}, nach der Stornierung: v{1}, fahren Sie fort?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Ob die Versionsnummer in der Datei package.json: v{0} als widerrufene Versionsnummerv{1} aktualisiert wird',
      failedToRetrieve:
        'Es ist unmöglich, die Versionsnummer aus der vorherigen Einreichung abzurufen, und die Versionsnummer in der Datei package.json wird vorerst nicht geändert. Bitte ändern Sie manuell.'
    }
  }
};
