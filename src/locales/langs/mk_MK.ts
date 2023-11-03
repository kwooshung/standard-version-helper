/**
 * 马其顿语：mk_MK
 * @description 马其顿语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:36:58
 */

export default {
  common: {
    error: 'Командата за извршување не успеа: {0}',
    syncCompleted: 'Целосно комплетно.',
    invalidChoice: 'Невалиден избор',
    executionSucceeded: 'извршувањето успева',
    executionFailed: 'Неуспех на извршувањето',
    backToMenu: 'враќање',
    exit: 'откажете се'
  },
  loading: {
    revokingCurrent: 'Тековната верзија е отповикана ...',
    revokingVersion: 'Резултатска верзија: v{0} ...',
    specificVersion: 'Наведете ја верзијата како: v{0} ...',
    upgradingVersion: 'Надградба{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Главна верзија',
    minor: 'Секундарна верзија',
    patch: 'Лепенка',
    tips: {
      firstTimePrompt: 'Бидејќи не ја објавивте верзијата, треба да ја ослободите за прв пат.',
      failedToIncrement: 'Не може да го зголеми бројот на верзијата',
      invalidVersionField: 'Полињата со верзија во пакетот.json недостасуваат или неважечки',
      enterInitialVersion: 'Внесете го вашиот почетен број на верзијата, стандардно 0.0.1:',
      error: 'Внесете ефикасен број на семантичка верзија, на пример: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Што ќе правиш?',
      upgradeVersion: 'Ажурирана верзија',
      specificVersion: 'Наведена верзија',
      revokeVersion: 'Отфрлена верзија'
    },
    upgrade: {
      prompt: 'Која верзија планирате да ја надградите',
      confirmPush: 'Дали да ја истурка верзијата во магацин'
    },
    specificVersion: {
      prompt: 'Внесете го бројот на верзијата:',
      confirm: 'Вашиот тековен број на верзија е: v{0}, потврдете дека го внесувате наведениот број на верзијата: v{1}'
    },
    revoke: {
      prompt: 'Која верзија планирате да ја отповикате',
      currentVersion: 'сегашна верзија',
      specificVersion: 'Наведена верзија'
    },
    revokeCurrentVersion: {
      retainChanges: 'Резервирајте ја промената на датотеките, само бројот на верзијата е отповикан',
      confirm: 'Вашиот тековен број на верзија е: v{0}, по откажувањето: v{1}, дали продолжувате?'
    },
    revokeSpecificVersion: {
      prompt: 'Внесете го бројот на верзијата што треба да се отповика:',
      retainChanges: 'Резервирајте ја промената на датотеките, само бројот на верзијата е отповикан',
      confirm: 'Вашиот тековен број на верзија е: v{0}, по откажувањето: v{1}, дали продолжувате?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Дали бројот на верзијата во датотеката Package.json: v{0} е ажуриран како отпорен број на верзијатаv{1}',
      failedToRetrieve:
        'Невозможно е да се поврати бројот на верзијата од претходниот поднесок, а бројот на верзијата во датотеката Package.json не е изменет засега. Доколку е потребно, ве молиме изменете рачно.'
    }
  }
};
