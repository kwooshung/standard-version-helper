/**
 * 爱沙尼亚语：et_EE
 * @description 爱沙尼亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:06:09
 */

export default {
  common: {
    error: 'Käsk täitmisel ebaõnnestus: {0}',
    syncCompleted: 'Täiesti täielik.',
    invalidChoice: 'Kehtetu valik',
    executionSucceeded: 'täitmine õnnestub',
    executionFailed: 'Täitmisrikkumine',
    backToMenu: 'tagastamine',
    exit: 'loobuma'
  },
  loading: {
    revokingCurrent: 'Praegune versioon tühistatakse ...',
    revokingVersion: 'Versiooniline versioon: v{0} ...',
    specificVersion: 'Määrake versioon järgmiselt: v{0} ...',
    upgradingVersion: 'Täiendus{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Põhiversioon',
    minor: 'Teisene versioon',
    patch: 'Laik',
    tips: {
      firstTimePrompt: 'Kuna te pole versiooni välja andnud, peate selle esimest korda vabastama.',
      failedToIncrement: 'Ei saa versiooni numbrit suurendada',
      invalidVersionField: 'Paketi.json versiooni väljad puuduvad või on kehtetud',
      enterInitialVersion: 'Sisestage oma esialgne versiooninumber, vaikimisi v{0}:',
      error: 'Sisestage tõhus semantiline versiooninumber, näiteks: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Mida sa kavatsed teha?',
      upgradeVersion: 'värskendatud versioon',
      specificVersion: 'Määratud versioon',
      revokeVersion: 'Tagasilükatud versioon'
    },
    upgrade: {
      prompt: 'Millist versiooni kavatsete uuendada',
      confirmPush: 'Kas versiooni lattu lükata'
    },
    specificVersion: {
      prompt: 'Sisestage versiooni number:',
      confirm: 'Teie praegune versiooninumber on: v{0}, kinnitage, et sisestate määratud versiooni numbri: v{1}'
    },
    revoke: {
      prompt: 'Millise versiooni kavatsete tühistada',
      currentVersion: 'praegune versioon',
      specificVersion: 'Määratud versioon'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserveerige failide vahetamine, tühistatakse ainult versiooninumber',
      confirm: 'Teie praegune versiooninumber on: v{0}, pärast tühistamist: v{1}, kas jätkate?'
    },
    revokeSpecificVersion: {
      prompt: 'Sisestage tühistatud versiooninumber:',
      retainChanges: 'Reserveerige failide vahetamine, tühistatakse ainult versiooninumber',
      confirm: 'Teie praegune versiooninumber on: v{0}, pärast tühistamist: v{1}, kas jätkate?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Ükskõik, kas faili paketi.json versiooninumber: v{0} värskendatakse kui tühistatud versiooninumbritv{1}',
      failedToRetrieve: 'Versiooninumbrit eelmisest esitamisest on võimatu hankida ja faili paketi.json versiooninumbrit ei muudeta praegu. Vajadusel muutke käsitsi.'
    }
  }
};
