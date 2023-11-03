/**
 * 土耳其语：tr_TR
 * @description 土耳其语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 21:03:06
 */

export default {
  common: {
    error: 'Yürütme komutu başarısız oldu: {0}',
    syncCompleted: 'Tamamen tamamlandı.',
    invalidChoice: 'Geçersiz seçim',
    executionSucceeded: 'İcra başarılı',
    executionFailed: 'Yürütme hatası',
    backToMenu: 'geri dönmek',
    exit: 'çıkış yapmak'
  },
  loading: {
    revokingCurrent: 'Mevcut sürüm iptal ediliyor ...',
    revokingVersion: 'Revize edilebilir Sürüm: v{0} ...',
    specificVersion: 'Sürümü şu şekilde belirtin: v{0} ...',
    upgradingVersion: 'Yükseltmev{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Ana versiyon',
    minor: 'İkincil versiyon',
    patch: 'Yama',
    tips: {
      firstTimePrompt: 'Sürümü yayınlamadığınız için, ilk kez yayınlamanız gerekir.',
      failedToIncrement: 'Sürüm numarasını artıramıyorum',
      invalidVersionField: "Package.json'daki sürüm alanları eksik veya geçersiz",
      enterInitialVersion: 'Lütfen ilk sürüm numaranızı girin, varsayılan 0.0.1:',
      error: 'Lütfen etkili bir semantik sürüm numarası girin, örneğin: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Ne yapacaksın?',
      upgradeVersion: 'Güncellenmiş versiyon',
      specificVersion: 'Belirtilen sürüm',
      revokeVersion: 'Reddedilen sürüm'
    },
    upgrade: {
      prompt: 'Hangi sürümü yükseltmeyi planlıyorsunuz',
      confirmPush: 'Sürümü depoya itip itme'
    },
    specificVersion: {
      prompt: 'Lütfen sürüm numarasını girin:',
      confirm: 'Mevcut sürüm numaranız: v{0}, belirtilen sürüm numarasını girdiğinizi onaylayın: v{1}'
    },
    revoke: {
      prompt: 'Hangi versiyonu iptal etmeyi planlıyorsunuz',
      currentVersion: 'şimdiki versiyonu',
      specificVersion: 'Belirtilen sürüm'
    },
    revokeCurrentVersion: {
      retainChanges: 'Dosya değişikliğini ayırın, yalnızca sürüm numarası iptal edilir',
      confirm: 'Mevcut sürüm numaranız: v{0}, iptal sonra: v{1}, devam ediyor musunuz?'
    },
    revokeSpecificVersion: {
      prompt: 'Lütfen iptal edilecek sürüm numarasını girin:',
      retainChanges: 'Dosya değişikliğini ayırın, yalnızca sürüm numarası iptal edilir',
      confirm: 'Mevcut sürüm numaranız: v{0}, iptal sonra: v{1}, devam ediyor musunuz?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Package.json dosyasındaki sürüm numarası olup olmadığı: v{0}, iptal edilen sürüm numarası olarak güncellenmiştir.',
      failedToRetrieve: 'Sürüm numarasını önceki gönderimden almak imkansızdır ve Package.json dosyasındaki sürüm numarası şu an için değiştirilmez. Gerekirse, lütfen manuel olarak değiştirin.'
    }
  }
};
