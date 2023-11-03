/**
 * 立陶宛语：lt_LT
 * @description 立陶宛语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:34:27
 */

export default {
  common: {
    error: 'Nugalėjo vykdymo komanda: {0}',
    syncCompleted: 'Visiškai baigtas.',
    invalidChoice: 'Neteisingas pasirinkimas',
    executionSucceeded: 'Vykdyti sėkmę',
    executionFailed: 'Vykdymo nesėkmė',
    backToMenu: 'grįžti',
    exit: 'mesti'
  },
  loading: {
    revokingCurrent: 'Dabartinė versija atšaukiama ...',
    revokingVersion: 'Peržiūrėkite versiją: v{0} ...',
    specificVersion: 'Nurodykite versiją kaip: v{0} ...',
    upgradingVersion: 'Atnaujinimas{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Pagrindinė versija',
    minor: 'Antrinė versija',
    patch: 'Pleistras',
    tips: {
      firstTimePrompt: 'Kadangi neišleidote versijos, turite ją paleisti pirmą kartą.',
      failedToIncrement: 'Negalima padidinti versijos numerio',
      invalidVersionField: 'Versijos laukai „Package.json“ trūksta arba negalioja',
      enterInitialVersion: 'Įveskite pradinį versijos numerį, numatytąją 0,0,1:',
      error: 'Įveskite veiksmingą semantinio versijos numerį, pavyzdžiui: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Ką ketini daryti?',
      upgradeVersion: 'Atnaujinta versija',
      specificVersion: 'Nurodyta versija',
      revokeVersion: 'Atmesta versija'
    },
    upgrade: {
      prompt: 'Kurią versiją planuojate atnaujinti',
      confirmPush: 'Ar stumti versiją į sandėlį'
    },
    specificVersion: {
      prompt: 'Įveskite versijos numerį:',
      confirm: 'Dabartinis versijos numeris yra: v{0}, patvirtinkite, kad įvedate nurodytą versijos numerį: v{1}'
    },
    revoke: {
      prompt: 'Kurią versiją planuojate atšaukti',
      currentVersion: 'Dabartinė versija',
      specificVersion: 'Nurodyta versija'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rezervuokite failų pakeitimą, atšaukiamas tik versijos numeris',
      confirm: 'Jūsų dabartinis versijos numeris yra: v{0}, po atšaukimo: v{1}, ar tęsite?'
    },
    revokeSpecificVersion: {
      prompt: 'Įveskite atšauktą versijos numerį:',
      retainChanges: 'Rezervuokite failų pakeitimą, atšaukiamas tik versijos numeris',
      confirm: 'Jūsų dabartinis versijos numeris yra: v{0}, po atšaukimo: v{1}, ar tęsite?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Ar versijos numeris „Package.json“ faile: v{0} atnaujinamas kaip atšauktas versijos numerisv{1}',
      failedToRetrieve: 'Neįmanoma nuskaityti versijos numerio iš ankstesnio pateikimo, o „Package.json“ failo versijos numeris šiuo metu nėra modifikuotas. Jei reikia, pakeiskite rankiniu būdu.'
    }
  }
};
