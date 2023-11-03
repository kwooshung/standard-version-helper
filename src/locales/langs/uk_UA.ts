/**
 * 乌克兰语：uk_UA
 * @description 乌克兰语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 21:07:31
 */

export default {
  common: {
    error: 'Команда виконання не вдалася: {0}',
    syncCompleted: 'Повністю завершений.',
    invalidChoice: 'Недійсний вибір',
    executionSucceeded: 'виконання досягне успіху',
    executionFailed: 'Невдача виконання',
    backToMenu: 'повернення',
    exit: 'кинути'
  },
  loading: {
    revokingCurrent: 'Поточна версія скасовується ...',
    revokingVersion: 'Переглянута версія: v{0} ...',
    specificVersion: 'Вкажіть версію як: v{0} ...',
    upgradingVersion: 'Оновленняv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Основна версія',
    minor: 'Вторинна версія',
    patch: 'Петля',
    tips: {
      firstTimePrompt: 'Оскільки ви не випустили версію, вам потрібно вперше випустити її.',
      failedToIncrement: 'Не вдається збільшити номер версії',
      invalidVersionField: 'Поля версії в Package.json відсутні або недійсні',
      enterInitialVersion: 'Введіть свій початковий номер версії, за замовчуванням 0.0.1:',
      error: 'Введіть ефективний номер семантичної версії, наприклад: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Що ти збираєшся робити?',
      upgradeVersion: 'Оновлена ​​версія',
      specificVersion: 'Вказана версія',
      revokeVersion: 'Відхилена версія'
    },
    upgrade: {
      prompt: 'Яку версію ви плануєте оновити',
      confirmPush: 'Чи підштовхувати версію до складу'
    },
    specificVersion: {
      prompt: 'Введіть номер версії:',
      confirm: 'Ваш поточний номер версії: v{0}, підтвердьте, що ви вводите вказаний номер версії: v{1}'
    },
    revoke: {
      prompt: 'Яку версію ви плануєте відкликати',
      currentVersion: 'Поточна версія',
      specificVersion: 'Вказана версія'
    },
    revokeCurrentVersion: {
      retainChanges: 'Забронюйте зміну файлів, відкликано лише номер версії',
      confirm: 'Ваш поточний номер версії: v{0}, після скасування: v{1}, ви продовжуєте?'
    },
    revokeSpecificVersion: {
      prompt: 'Введіть номер версії, який потрібно скасувати:',
      retainChanges: 'Забронюйте зміну файлів, відкликано лише номер версії',
      confirm: 'Ваш поточний номер версії: v{0}, після скасування: v{1}, ви продовжуєте?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Чи номер версії у файлі package.json: v{0} оновлено як відкликаний номер версіїv{1}',
      failedToRetrieve: 'Неможливо отримати номер версії з попереднього подання, а номер версії у файлі package.json на даний момент не змінений. Якщо потрібно, будь ласка, змініть вручну.'
    }
  }
};
