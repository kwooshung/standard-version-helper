/**
 * 乌尔都语 (巴基斯坦)：ur_PK
 * @description 乌尔都语 (巴基斯坦)语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 21:05:56
 */

export default {
  common: {
    error: 'عملدرآمد کمانڈ ناکام: {0}',
    syncCompleted: 'مکمل طور پر مکمل.',
    invalidChoice: 'غلط انتخاب',
    executionSucceeded: 'پھانسی کامیاب',
    executionFailed: 'پھانسی کی ناکامی',
    backToMenu: 'واپس',
    exit: 'چھوڑ دیں'
  },
  loading: {
    revokingCurrent: 'موجودہ ورژن منسوخ کیا جارہا ہے ...',
    revokingVersion: 'نظرثانی والا ورژن: v{0} ...',
    specificVersion: 'ورژن کی وضاحت کریں جیسے: v{0} ...',
    upgradingVersion: 'اپ گریڈv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'مرکزی ورژن',
    minor: 'ثانوی ورژن',
    patch: 'پیچ',
    tips: {
      firstTimePrompt: 'چونکہ آپ نے ورژن جاری نہیں کیا ہے ، لہذا آپ کو پہلی بار اسے جاری کرنے کی ضرورت ہے۔',
      failedToIncrement: 'ورژن نمبر میں اضافہ نہیں کرسکتا',
      invalidVersionField: 'پیکیج.جسن میں ورژن فیلڈز غائب یا غلط ہیں',
      enterInitialVersion: 'براہ کرم اپنا ابتدائی ورژن نمبر درج کریں ، پہلے سے طے شدہ 0.0.1:',
      error: 'براہ کرم ایک موثر سیمنٹک ورژن نمبر درج کریں ، مثال کے طور پر: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'تم کیا کرنے جا رہے ہو؟',
      upgradeVersion: 'تازہ ترین ورژن',
      specificVersion: 'مخصوص ورژن',
      revokeVersion: 'مسترد ورژن'
    },
    upgrade: {
      prompt: 'آپ کس ورژن کو اپ گریڈ کرنے کا ارادہ رکھتے ہیں',
      confirmPush: 'چاہے اس ورژن کو گودام میں دھکیلیں'
    },
    specificVersion: {
      prompt: 'براہ کرم ورژن نمبر درج کریں:',
      confirm: 'آپ کا موجودہ ورژن نمبر یہ ہے: v{0} ، تصدیق کریں کہ آپ مخصوص ورژن نمبر درج کرتے ہیں: v{1}'
    },
    revoke: {
      prompt: 'آپ کون سا ورژن منسوخ کرنے کا ارادہ رکھتے ہیں',
      currentVersion: 'موجودہ ورژن',
      specificVersion: 'مخصوص ورژن'
    },
    revokeCurrentVersion: {
      retainChanges: 'فائلوں کی تبدیلی کو محفوظ رکھیں ، صرف ورژن نمبر منسوخ کردیا گیا ہے',
      confirm: 'آپ کا موجودہ ورژن نمبر یہ ہے: v{0} ، منسوخی کے بعد: v{1} ، کیا آپ جاری رکھتے ہیں؟'
    },
    revokeSpecificVersion: {
      prompt: 'براہ کرم منسوخ ہونے کے لئے ورژن نمبر درج کریں:',
      retainChanges: 'فائلوں کی تبدیلی کو محفوظ رکھیں ، صرف ورژن نمبر منسوخ کردیا گیا ہے',
      confirm: 'آپ کا موجودہ ورژن نمبر یہ ہے: v{0} ، منسوخی کے بعد: v{1} ، کیا آپ جاری رکھتے ہیں؟'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'چاہے پیکیج میں ورژن نمبر',
      failedToRetrieve:
        'پچھلے جمع کرانے سے ورژن نمبر بازیافت کرنا ناممکن ہے ، اور پیکیج میں ورژن نمبر۔ JSON فائل کو وقت کے لئے تبدیل نہیں کیا گیا ہے۔ اگر ضروری ہو تو ، براہ کرم دستی طور پر ترمیم کریں۔'
    }
  }
};
