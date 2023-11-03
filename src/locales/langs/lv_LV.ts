/**
 * 拉脱维亚语：lv_LV
 * @description 拉脱维亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:35:44
 */

export default {
  common: {
    error: 'Izpildes komanda neizdevās: {0}',
    syncCompleted: 'Pilnīgi pabeigts.',
    invalidChoice: 'Nederīga izvēle',
    executionSucceeded: 'Izpildīšana izdodas',
    executionFailed: 'Izpildes kļūme',
    backToMenu: 'atgriezties',
    exit: 'atmest'
  },
  loading: {
    revokingCurrent: 'Pašreizējā versija tiek atsaukta ...',
    revokingVersion: 'Pārskatāma versija: v{0} ...',
    specificVersion: 'Norādiet versiju kā: v{0} ...',
    upgradingVersion: 'Jauniniet{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Galvenā versija',
    minor: 'Sekundārā versija',
    patch: 'Plākstenis',
    tips: {
      firstTimePrompt: 'Tā kā jūs neesat izlaidis versiju, jums tā jāatbrīvo pirmo reizi.',
      failedToIncrement: 'Nevar palielināt versijas numuru',
      invalidVersionField: 'Versijas lauki vietnē Package.json trūkst vai ir nederīgi',
      enterInitialVersion: 'Lūdzu, ievadiet savu sākotnējo versijas numuru, noklusējuma 0.0.1:',
      error: 'Lūdzu, ievadiet efektīvu semantiskās versijas numuru, piemēram: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Ko tu darīsi?',
      upgradeVersion: 'Atjaunināta versija',
      specificVersion: 'Norādītā versija',
      revokeVersion: 'Noraidīta versija'
    },
    upgrade: {
      prompt: 'Kuru versiju plānojat jaunināt',
      confirmPush: 'Vai virzīt versiju uz noliktavu'
    },
    specificVersion: {
      prompt: 'Lūdzu, ievadiet versijas numuru:',
      confirm: 'Jūsu pašreizējais versijas numurs ir: v{0}, apstipriniet, ka ievadāt norādīto versijas numuru: v{1}'
    },
    revoke: {
      prompt: 'Kuru versiju jūs plānojat atsaukt',
      currentVersion: 'pašreizējā versija',
      specificVersion: 'Norādītā versija'
    },
    revokeCurrentVersion: {
      retainChanges: 'Rezervējiet failu maiņu, tiek atcelts tikai versijas numurs',
      confirm: 'Jūsu pašreizējais versijas numurs ir: v{0}, pēc atcelšanas: v{1}, vai jūs turpināt?'
    },
    revokeSpecificVersion: {
      prompt: 'Lūdzu, ievadiet atsaukšanas versijas numuru:',
      retainChanges: 'Rezervējiet failu maiņu, tiek atcelts tikai versijas numurs',
      confirm: 'Jūsu pašreizējais versijas numurs ir: v{0}, pēc atcelšanas: v{1}, vai jūs turpināt?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Vai versijas numurs failā pakotnē.json: v{0} tiek atjaunināts kā atsaukts versijas numursv{1}',
      failedToRetrieve: 'No iepriekšējā iesniegšanas nav iespējams iegūt versijas numuru, un versijas numurs.json failā pagaidām netiek modificēts. Ja nepieciešams, lūdzu, modificējiet manuāli.'
    }
  }
};
