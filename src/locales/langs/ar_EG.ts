/**
 * 阿拉伯语：ar_EG
 * @description 阿拉伯语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 19:58:51
 */

export default {
  common: {
    error: 'فشل الأمر التنفيذ: {0}',
    syncCompleted: 'كاملة تماما.',
    invalidChoice: 'اختيار غير صالح',
    executionSucceeded: 'ينجح التنفيذ',
    executionFailed: 'فشل التنفيذ',
    backToMenu: 'يعود',
    exit: 'يترك'
  },
  loading: {
    revokingCurrent: 'يتم إلغاء الإصدار الحالي ...',
    revokingVersion: 'الإصدار المرئي: v{0} ...',
    specificVersion: 'حدد الإصدار على النحو التالي: v{0} ...',
    upgradingVersion: 'الترقية{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'النسخة الرئيسية',
    minor: 'نسخة ثانوية',
    patch: 'رقعة',
    tips: {
      firstTimePrompt: 'نظرًا لأنك لم تصدر الإصدار ، فأنت بحاجة إلى إطلاقه لأول مرة.',
      failedToIncrement: 'لا يمكن زيادة رقم الإصدار',
      invalidVersionField: 'حقول الإصدار في package.json مفقودة أو غير صالحة',
      enterInitialVersion: 'الرجاء إدخال رقم الإصدار الأولي الخاص بك ، الافتراضي v{0}:',
      error: 'الرجاء إدخال رقم إصدار دلالي فعال ، على سبيل المثال: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'ما كنت تنوي القيام به؟',
      upgradeVersion: 'نسخة محدثة',
      specificVersion: 'نسخة محددة',
      revokeVersion: 'النسخة المرفوضة'
    },
    upgrade: {
      prompt: 'ما هو الإصدار الذي تخطط للترقية',
      confirmPush: 'ما إذا كان يجب دفع الإصدار إلى المستودع'
    },
    specificVersion: {
      prompt: 'الرجاء إدخال رقم الإصدار:',
      confirm: 'رقم الإصدار الحالي هو: v{0} ، تأكد من إدخال رقم الإصدار المحدد: v{1}'
    },
    revoke: {
      prompt: 'ما هو الإصدار الذي تخطط لإلغاء',
      currentVersion: 'النسخة الحالية',
      specificVersion: 'نسخة محددة'
    },
    revokeCurrentVersion: {
      retainChanges: 'حجز تغيير الملفات ، يتم إلغاء رقم الإصدار فقط',
      confirm: 'رقم الإصدار الحالي هو: v{0} ، بعد الإلغاء: v{1} ، هل تتابع؟'
    },
    revokeSpecificVersion: {
      prompt: 'الرجاء إدخال رقم الإصدار ليتم إلغاؤه:',
      retainChanges: 'حجز تغيير الملفات ، يتم إلغاء رقم الإصدار فقط',
      confirm: 'رقم الإصدار الحالي هو: v{0} ، بعد الإلغاء: v{1} ، هل تتابع؟'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'ما إذا كان رقم الإصدار في ملف package.json: v{0} يتم تحديثه كرقم الإصدار الذي تم إلغاؤهv{1}',
      failedToRetrieve: 'من المستحيل استرداد رقم الإصدار من التقديم السابق ، ولا يتم تعديل رقم الإصدار في ملف Package.json في الوقت الحالي. إذا لزم الأمر ، يرجى التعديل يدويًا.'
    }
  }
};
