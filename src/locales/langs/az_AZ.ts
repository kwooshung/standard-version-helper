/**
 * 阿塞拜疆语：az_AZ
 * @description 阿塞拜疆语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 19:58:59
 */

export default {
  common: {
    error: 'İcra əmri uğursuz oldu: {0}',
    syncCompleted: 'Tamamilə tamamlayın.',
    invalidChoice: 'Etibarsız seçim',
    executionSucceeded: 'İcra müvəffəq ol',
    executionFailed: 'İcra uğursuzluğu',
    backToMenu: 'qayıtmaq',
    exit: 'çıxmaq'
  },
  loading: {
    revokingCurrent: 'Cari versiya ləğv edilir ...',
    revokingVersion: 'Yenidənqurma versiya: v{0} ...',
    specificVersion: 'Version kimi göstərin: v{0} ...',
    upgradingVersion: 'v{0} təkmilləşdirmək: v{1} > v{2} ...'
  },
  version: {
    major: 'Əsas versiya',
    minor: 'Orta versiya',
    patch: 'Yamaq',
    tips: {
      firstTimePrompt: 'Version buraxmadığınız üçün ilk dəfə onu buraxmalısınız.',
      failedToIncrement: 'Versiya nömrəsini artıra bilmir',
      invalidVersionField: 'Paketdəki versiya sahələri.jsonda yoxdur və ya etibarsızdır',
      enterInitialVersion: 'Zəhmət olmasa ilkin versiya nömrənizi daxil edin, standart 0.0.1:',
      error: 'Zəhmət olmasa effektiv semantik versiya nömrəsini daxil edin, məsələn: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Nə edəcəksən?',
      upgradeVersion: 'Yenilənmiş versiya',
      specificVersion: 'Göstərilən versiya',
      revokeVersion: 'Rədd edilmiş versiya'
    },
    upgrade: {
      prompt: 'Hansı versiyanı təkmilləşdirməyi planlaşdırırsınız',
      confirmPush: 'Versiyanı anbara itələməyiniz'
    },
    specificVersion: {
      prompt: 'Zəhmət olmasa versiya nömrəsini daxil edin:',
      confirm: 'Cari versiyanız nömrəniz: v{0}, göstərilən versiya nömrəsini daxil etdiyinizi təsdiqləyin: v{1}'
    },
    revoke: {
      prompt: 'Hansı versiyanı ləğv etməyi planlaşdırırsınız',
      currentVersion: 'cari versiya',
      specificVersion: 'Göstərilən versiya'
    },
    revokeCurrentVersion: {
      retainChanges: 'Faylların dəyişdirilməsini rezerv edin, yalnız versiya nömrəsi ləğv edildi',
      confirm: 'Cari versiyanız nömrəniz: v{0}, ləğvdən sonra: v{1}, davam edirsiniz?'
    },
    revokeSpecificVersion: {
      prompt: 'Zəhmət olmasa ləğv ediləcək versiya nömrəsini daxil edin:',
      retainChanges: 'Faylların dəyişdirilməsini rezerv edin, yalnız versiya nömrəsi ləğv edildi',
      confirm: 'Cari versiyanız nömrəniz: v{0}, ləğvdən sonra: v{1}, davam edirsiniz?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Paketdəki versiya nömrəsi olub-olmaması.',
      failedToRetrieve: 'Əvvəlki təqdimatdan versiya nömrəsini almaq mümkün deyil və paketdəki versiya nömrəsi.json faylı bu müddət üçün dəyişdirilmir. Lazım gələrsə, lütfən əl ilə dəyişdirin.'
    }
  }
};
