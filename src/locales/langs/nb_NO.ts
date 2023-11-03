/**
 * 挪威语：nb_NO
 * @description 挪威语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:44:05
 */

export default {
  common: {
    error: 'Utførelseskommandoen mislyktes: {0}',
    syncCompleted: 'Helt komplett.',
    invalidChoice: 'Ugyldig valg',
    executionSucceeded: 'henrettelse lykkes',
    executionFailed: 'Utførelsesfeil',
    backToMenu: 'komme tilbake',
    exit: 'slutte'
  },
  loading: {
    revokingCurrent: 'Den nåværende versjonen blir opphevet ...',
    revokingVersion: 'Revisible versjon: v{0} ...',
    specificVersion: 'Spesifiser versjonen som: v{0} ...',
    upgradingVersion: 'Oppgrader{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Hovedversjon',
    minor: 'Sekundærversjon',
    patch: 'Lapp',
    tips: {
      firstTimePrompt: 'Siden du ikke har gitt ut versjonen, må du gi den ut for første gang.',
      failedToIncrement: 'Kan ikke øke versjonsnummeret',
      invalidVersionField: 'Versjonsfeltene i pakken.json mangler eller ugyldig',
      enterInitialVersion: 'Vennligst skriv inn det første versjonsnummeret, standard 0.0.1:',
      error: 'Vennligst skriv inn et effektivt semantisk versjonsnummer, for eksempel: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Hva skal du gjøre?',
      upgradeVersion: 'oppdatert versjon',
      specificVersion: 'Spesifisert versjon',
      revokeVersion: 'Avvist versjon'
    },
    upgrade: {
      prompt: 'Hvilken versjon planlegger du å oppgradere',
      confirmPush: 'Om du skal skyve versjonen til lageret'
    },
    specificVersion: {
      prompt: 'Vennligst skriv inn versjonsnummeret:',
      confirm: 'Det nåværende versjonsnummeret ditt er: v{0}, bekreft at du skriver inn det spesifiserte versjonsnummeret: v{1}'
    },
    revoke: {
      prompt: 'Hvilken versjon planlegger du å tilbakekalle',
      currentVersion: 'gjeldende versjon',
      specificVersion: 'Spesifisert versjon'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserver endring av filer, bare versjonsnummeret blir opphevet',
      confirm: 'Ditt nåværende versjonsnummer er: v{0}, etter kanselleringen: v{1}, fortsetter du?'
    },
    revokeSpecificVersion: {
      prompt: 'Vennligst skriv inn versjonsnummeret som skal oppheves:',
      retainChanges: 'Reserver endring av filer, bare versjonsnummeret blir opphevet',
      confirm: 'Ditt nåværende versjonsnummer er: v{0}, etter kanselleringen: v{1}, fortsetter du?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Hvorvidt versjonsnummeret i pakken.json -filen: v{0} blir oppdatert som det tilbakekalte versjonsnummeretv{1}',
      failedToRetrieve: 'Det er umulig å hente versjonsnummeret fra forrige innsending, og versjonsnummeret i pakken.json -filen er ikke endret foreløpig. Om nødvendig, vennligst endre manuelt.'
    }
  }
};
