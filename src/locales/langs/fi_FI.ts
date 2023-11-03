/**
 * 芬兰语：fi_FI
 * @description 芬兰语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:08:46
 */

export default {
  common: {
    error: 'Suorituskomento epäonnistui: {0}',
    syncCompleted: 'Täysin täydellinen.',
    invalidChoice: 'Virheellinen valinta',
    executionSucceeded: 'Suoritus onnistuu',
    executionFailed: 'Suoritusvirhe',
    backToMenu: 'palata',
    exit: 'lopettaa'
  },
  loading: {
    revokingCurrent: 'Nykyistä versiota peruutetaan ...',
    revokingVersion: 'Uudelleenversio: v{0} ...',
    specificVersion: 'Määritä versio nimellä: v{0} ...',
    upgradingVersion: 'Päivitys{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Pääversio',
    minor: 'Toissijainen versio',
    patch: 'Laastari',
    tips: {
      firstTimePrompt: 'Koska et ole julkaissut versiota, sinun on julkaistava se ensimmäistä kertaa.',
      failedToIncrement: 'Versionumeroa ei voi lisätä',
      invalidVersionField: 'Package.jsonin versiokentät puuttuvat tai virheelliset',
      enterInitialVersion: 'Anna alkuperäinen versionumerosi, oletus 0.0.1:',
      error: 'Anna esimerkiksi tehokas semanttinen versionumero: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Mitä aiot tehdä?',
      upgradeVersion: 'päivitetty versio',
      specificVersion: 'Määritelty versio',
      revokeVersion: 'Hylätty versio'
    },
    upgrade: {
      prompt: 'Minkä version aiot päivittää',
      confirmPush: 'Työntää versio varastoon'
    },
    specificVersion: {
      prompt: 'Anna versionumero:',
      confirm: 'Nykyinen versionumerosi on: v{0}, varmista, että kirjoitat määritetyn versionumeron: v{1}'
    },
    revoke: {
      prompt: 'Minkä version aiot peruuttaa',
      currentVersion: 'nykyinen versio',
      specificVersion: 'Määritelty versio'
    },
    revokeCurrentVersion: {
      retainChanges: 'Varaa tiedostojen muutos, vain versionumero peruutetaan',
      confirm: 'Nykyinen versionumerosi on: v{0}, peruutuksen jälkeen: v{1}, jatkat?'
    },
    revokeSpecificVersion: {
      prompt: 'Anna peruutettava versionumero:',
      retainChanges: 'Varaa tiedostojen muutos, vain versionumero peruutetaan',
      confirm: 'Nykyinen versionumerosi on: v{0}, peruutuksen jälkeen: v{1}, jatkat?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Onko paketin.json -tiedoston versionumero: v{0} päivitetään peruutettuna versionumeronav{1}',
      failedToRetrieve: 'Versionumeroa on mahdotonta noutaa edellisestä lähetyksestä, eikä package.json -tiedoston versionumeroa ole muokattu toistaiseksi. Muokkaa tarvittaessa manuaalisesti.'
    }
  }
};
