/**
 * 荷兰语（比利时）：nl_BE
 * @description 荷兰语（比利时）语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:46:47
 */

export default {
  common: {
    error: 'De opdracht uitvoering is mislukt: {0}',
    syncCompleted: 'Volledig compleet.',
    invalidChoice: 'Ongeldige keuze',
    executionSucceeded: 'Uitvoering slagen',
    executionFailed: 'Uitvoeringsstoring',
    backToMenu: 'opbrengst',
    exit: 'ontslag nemen'
  },
  loading: {
    revokingCurrent: 'De huidige versie wordt ingetrokken ...',
    revokingVersion: 'Revisible versie: v{0} ...',
    specificVersion: 'Geef de versie op als: v{0} ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Hoofdversie',
    minor: 'Secundaire versie',
    patch: 'Lapje',
    tips: {
      firstTimePrompt: 'Omdat je de versie niet hebt uitgebracht, moet je deze voor het eerst uitbrengen.',
      failedToIncrement: 'Kan het versienummer niet verhogen',
      invalidVersionField: 'De versievelden in pakket.json ontbreken of ongeldig',
      enterInitialVersion: 'Voer uw eerste versienummer in, standaard v{0}:',
      error: 'Voer een effectief semantisch versienummer in, bijvoorbeeld: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Wat ga je doen?',
      upgradeVersion: 'geupdate versie',
      specificVersion: 'Gespecificeerde versie',
      revokeVersion: 'Afgewezen versie'
    },
    upgrade: {
      prompt: 'Welke versie ben je van plan om te upgraden',
      confirmPush: 'Of de versie naar het magazijn moet duwen'
    },
    specificVersion: {
      prompt: 'Voer het versienummer in:',
      confirm: 'Uw huidige versienummer is: v{0}, bevestig dat u het opgegeven versienummer invoert: v{1}'
    },
    revoke: {
      prompt: 'Welke versie ben je van plan om in te trekken',
      currentVersion: 'huidige versie',
      specificVersion: 'Gespecificeerde versie'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserveer de wijziging van bestanden, alleen het versienummer wordt ingetrokken',
      confirm: 'Uw huidige versienummer is: v{0}, na de annulering: v{1}, gaat u verder?'
    },
    revokeSpecificVersion: {
      prompt: 'Voer het te herroepen versienummer in dat moet worden ingetrokken:',
      retainChanges: 'Reserveer de wijziging van bestanden, alleen het versienummer wordt ingetrokken',
      confirm: 'Uw huidige versienummer is: v{0}, na de annulering: v{1}, gaat u verder?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Of het versienummer in het pakket.json -bestand: v{0} wordt bijgewerkt als het ingetrokken versienummerv{1}',
      failedToRetrieve:
        'Het is onmogelijk om het versienummer uit de vorige inzending op te halen en het versienummer in het pakket.json -bestand is voorlopig niet gewijzigd. Indien nodig, wijzig handmatig wijzigen.'
    }
  }
};
