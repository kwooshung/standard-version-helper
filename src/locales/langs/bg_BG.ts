/**
 * 保加利亚语：bg_BG
 * @description 保加利亚语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 19:59:06
 */

export default {
  common: {
    error: 'Командата за изпълнение не успя: {0}',
    syncCompleted: 'Напълно завършен.',
    invalidChoice: 'Невалиден избор',
    executionSucceeded: 'Изпълнението успя',
    executionFailed: 'Неуспех на изпълнението',
    backToMenu: 'връщане',
    exit: 'напусна'
  },
  loading: {
    revokingCurrent: 'Текущата версия се отменя ...',
    revokingVersion: 'Прецизна версия: v{0} ...',
    specificVersion: 'Посочете версията като: v{0} ...',
    upgradingVersion: 'Надстройкаv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Основна версия',
    minor: 'Вторична версия',
    patch: 'Пластир',
    tips: {
      firstTimePrompt: 'Тъй като не сте пуснали версията, трябва да я пуснете за първи път.',
      failedToIncrement: 'Не може да увеличи номера на версията',
      invalidVersionField: 'Полетата на версията в Package.json липсват или невалидни',
      enterInitialVersion: 'Моля, въведете първоначалния си номер на версия, по подразбиране 0.0.1:',
      error: 'Моля, въведете ефективен номер на семантична версия, например: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Какво ще правиш?',
      upgradeVersion: 'Актуализирана версия',
      specificVersion: 'Посочена версия',
      revokeVersion: 'Отхвърлена версия'
    },
    upgrade: {
      prompt: 'Коя версия планирате да надстроите',
      confirmPush: 'Дали да натиснете версията в склада'
    },
    specificVersion: {
      prompt: 'Моля, въведете номера на версията:',
      confirm: 'Текущият ви номер на версия е: v{0}, потвърдете, че въвеждате посочения номер на версия: v{1}'
    },
    revoke: {
      prompt: 'Коя версия планирате да оттеглите',
      currentVersion: 'сегашна версия',
      specificVersion: 'Посочена версия'
    },
    revokeCurrentVersion: {
      retainChanges: 'Резервирайте промяната на файловете, само номерът на версията се отменя',
      confirm: 'Текущият ви номер на версия е: v{0}, след анулирането: v{1}, продължавате ли?'
    },
    revokeSpecificVersion: {
      prompt: 'Моля, въведете номера на версията, който ще бъде отменен:',
      retainChanges: 'Резервирайте промяната на файловете, само номерът на версията се отменя',
      confirm: 'Текущият ви номер на версия е: v{0}, след анулирането: v{1}, продължавате ли?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Дали номерът на версията във файла package.json: v{0} се актуализира като отменен номер на версияv{1}',
      failedToRetrieve:
        'Невъзможно е да извлечете номера на версията от предишното подаване, а номерът на версията във файла package.json не е модифициран за момента. Ако е необходимо, моля, променете ръчно.'
    }
  }
};
