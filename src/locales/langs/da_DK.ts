/**
 * 丹麦语：da_DK
 * @description 丹麦语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 19:59:48
 */

export default {
  common: {
    error: 'Udførelseskommandoen mislykkedes: {0}',
    syncCompleted: 'Helt komplet.',
    invalidChoice: 'Ugyldigt valg',
    executionSucceeded: 'henrettelse lykkes',
    executionFailed: 'Henrettelsesfejl',
    backToMenu: 'Vend tilbage',
    exit: 'Afslut'
  },
  loading: {
    revokingCurrent: 'Den aktuelle version ophæves ...',
    revokingVersion: 'Revisible version: v{0} ...',
    specificVersion: 'Angiv versionen som: v{0} ...',
    upgradingVersion: 'Opgrader{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Hovedversion',
    minor: 'Sekundær version',
    patch: 'Lappe',
    tips: {
      firstTimePrompt: 'Da du ikke har frigivet versionen, skal du frigive den for første gang.',
      failedToIncrement: 'Kan ikke øge versionnummeret',
      invalidVersionField: 'Versionsfelterne i Package.json mangler eller ugyldig',
      enterInitialVersion: 'Indtast dit oprindelige versionnummer, standard 0.0.1:',
      error: 'Indtast for eksempel et effektivt semantisk versionnummer: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Hvad vil du gøre?',
      upgradeVersion: 'Opdateret version',
      specificVersion: 'Specificeret version',
      revokeVersion: 'Afvist version'
    },
    upgrade: {
      prompt: 'Hvilken version planlægger du at opgradere',
      confirmPush: 'Om man skal skubbe versionen til lageret'
    },
    specificVersion: {
      prompt: 'Indtast versionnummeret:',
      confirm: 'Dit nuværende versionnummer er: v{0}, bekræft, at du indtaster det specificerede versionnummer: v{1}'
    },
    revoke: {
      prompt: 'Hvilken version planlægger du at tilbagekalde',
      currentVersion: 'nuværende version',
      specificVersion: 'Specificeret version'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserver ændringen af ​​filer, kun versionnummeret tilbagekaldes',
      confirm: 'Dit nuværende versionnummer er: v{0}, efter aflysningen: v{1}, fortsætter du?'
    },
    revokeSpecificVersion: {
      prompt: 'Indtast det versionnummer, der skal tilbagekaldes:',
      retainChanges: 'Reserver ændringen af ​​filer, kun versionnummeret tilbagekaldes',
      confirm: 'Dit nuværende versionnummer er: v{0}, efter aflysningen: v{1}, fortsætter du?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Om versionnummeret i pakken.json -filen: v{0} opdateres som det tilbagekaldte versionnummerv{1}',
      failedToRetrieve: 'Det er umuligt at hente versionnummeret fra den forrige indsendelse, og versionnummeret i pakken.json -filen er ikke ændret for tiden. Om nødvendigt skal du ændre manuelt.'
    }
  }
};
