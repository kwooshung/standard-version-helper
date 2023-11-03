/**
 * 俄罗斯语：ru_RU
 * @description 俄罗斯语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:52:47
 */

export default {
  common: {
    error: 'Команда выполнения не удалась: {0}',
    syncCompleted: 'Полностью завершен.',
    invalidChoice: 'Неверный выбор',
    executionSucceeded: 'исполнение успешно',
    executionFailed: 'Неудача исполнения',
    backToMenu: 'возвращаться',
    exit: 'покидать'
  },
  loading: {
    revokingCurrent: 'Текущая версия отозвана ...',
    revokingVersion: 'Пересмотренная версия: v{0} ...',
    specificVersion: 'Укажите версию как: v{0} ...',
    upgradingVersion: 'Обновление{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Основная версия',
    minor: 'Вторичная версия',
    patch: 'Пластырь',
    tips: {
      firstTimePrompt: 'Поскольку вы не выпустили версию, вам нужно выпустить ее в первый раз.',
      failedToIncrement: 'Не могу увеличить номер версии',
      invalidVersionField: 'Поля версии в package.json отсутствуют или недействительны',
      enterInitialVersion: 'Пожалуйста, введите свой первоначальный номер версии, по умолчанию 0.0.1:',
      error: 'Пожалуйста, введите эффективный номер семантической версии, например: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Чем ты планируешь заняться?',
      upgradeVersion: 'обновленная версия',
      specificVersion: 'Указанная версия',
      revokeVersion: 'Отвергнутая версия'
    },
    upgrade: {
      prompt: 'Какую версию вы планируете обновить',
      confirmPush: 'Столкнуть ли версию на склад'
    },
    specificVersion: {
      prompt: 'Пожалуйста, введите номер версии:',
      confirm: 'Ваш текущий номер версии: v{0}, подтвердите, что вы вводите указанный номер версии: v{1}'
    },
    revoke: {
      prompt: 'Какую версию вы планируете отозвать',
      currentVersion: 'текущая версия',
      specificVersion: 'Указанная версия'
    },
    revokeCurrentVersion: {
      retainChanges: 'Зарезервируйте изменение файлов, отменен только номер версии',
      confirm: 'Ваш текущий номер версии: v{0}, после отмены: v{1}, вы продолжаете?'
    },
    revokeSpecificVersion: {
      prompt: 'Пожалуйста, введите номер версии, который будет отозван:',
      retainChanges: 'Зарезервируйте изменение файлов, отменен только номер версии',
      confirm: 'Ваш текущий номер версии: v{0}, после отмены: v{1}, вы продолжаете?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Независимо от того, обновляется ли номер версии в файле Package.json: v{0} как отображенный номер версииv{1}',
      failedToRetrieve:
        'Невозможно получить номер версии из предыдущего представления, а номер версии в файле Package.json не изменяется в настоящее время. При необходимости, пожалуйста, измените вручную.'
    }
  }
};
