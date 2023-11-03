/**
 * 意大利语：it_IT
 * @description 意大利语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:22:06
 */

export default {
  common: {
    error: 'Il comando di esecuzione non riuscito: {0}',
    syncCompleted: 'Completamente completo.',
    invalidChoice: 'Scelta non valida',
    executionSucceeded: "L'esecuzione ha successo",
    executionFailed: "Fallimento dell'esecuzione",
    backToMenu: 'ritorno',
    exit: 'esentato'
  },
  loading: {
    revokingCurrent: 'La versione attuale viene revocata ...',
    revokingVersion: 'Versione revisibile: v{0} ...',
    specificVersion: 'Specifica la versione come: v{0} ...',
    upgradingVersion: 'Aggiorna{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versione principale',
    minor: 'Versione secondaria',
    patch: 'Toppa',
    tips: {
      firstTimePrompt: 'Dato che non hai rilasciato la versione, devi rilasciarla per la prima volta.',
      failedToIncrement: 'Non può aumentare il numero di versione',
      invalidVersionField: 'I campi della versione in pack.json sono mancanti o non validi',
      enterInitialVersion: 'Inserisci il numero di versione iniziale, predefinito 0.0.1:',
      error: 'Inserisci un numero di versione semantica efficace, ad esempio: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Che cosa hai intenzione di fare?',
      upgradeVersion: 'versione aggiornata',
      specificVersion: 'Versione specificata',
      revokeVersion: 'Versione rifiutata'
    },
    upgrade: {
      prompt: 'Quale versione prevedi di aggiornare',
      confirmPush: 'Se spingere la versione al magazzino'
    },
    specificVersion: {
      prompt: 'Inserisci il numero di versione:',
      confirm: 'Il tuo numero di versione corrente è: v{0}, conferma di immettere il numero di versione specificato: v{1}'
    },
    revoke: {
      prompt: 'Quale versione prevedi di revocare',
      currentVersion: 'Versione attuale',
      specificVersion: 'Versione specificata'
    },
    revokeCurrentVersion: {
      retainChanges: 'Riserva la modifica dei file, viene revocato solo il numero di versione',
      confirm: 'Il tuo numero di versione corrente è: v{0}, dopo la cancellazione: v{1}, continui?'
    },
    revokeSpecificVersion: {
      prompt: 'Inserisci il numero di versione da revocare:',
      retainChanges: 'Riserva la modifica dei file, viene revocato solo il numero di versione',
      confirm: 'Il tuo numero di versione corrente è: v{0}, dopo la cancellazione: v{1}, continui?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Se il numero di versione nel file package.json: v{0} è aggiornato come numero di versione revocatav{1}',
      failedToRetrieve:
        'È impossibile recuperare il numero di versione dal precedente invio e il numero di versione nel file package.json non viene modificato per il momento. Se necessario, si prega di modificare manualmente.'
    }
  }
};
