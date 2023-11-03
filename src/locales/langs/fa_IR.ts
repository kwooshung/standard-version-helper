/**
 * 波斯语：fa_IR
 * @description 波斯语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:07:31
 */

export default {
  common: {
    error: 'دستور اجرای انجام نشد: {0}',
    syncCompleted: 'کاملاً کامل',
    invalidChoice: 'انتخاب نامعتبر',
    executionSucceeded: 'اعدام موفق می شود',
    executionFailed: 'شکست',
    backToMenu: 'برگشت',
    exit: 'ترک'
  },
  loading: {
    revokingCurrent: 'نسخه فعلی در حال لغو است ...',
    revokingVersion: 'نسخه قابل تجدید نظر: v{0} ...',
    specificVersion: 'نسخه را به عنوان: v{0} ... مشخص کنید ...',
    upgradingVersion: 'ارتقاءv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'نسخه اصلی',
    minor: 'نسخه ثانویه',
    patch: 'پچ',
    tips: {
      firstTimePrompt: 'از آنجا که نسخه را منتشر نکرده اید ، باید برای اولین بار آن را منتشر کنید.',
      failedToIncrement: 'نمی تواند شماره نسخه را افزایش دهد',
      invalidVersionField: 'قسمت های نسخه در Package.json از دست رفته یا نامعتبر هستند',
      enterInitialVersion: 'لطفاً شماره نسخه اولیه خود را ، پیش فرض 0.0.1 وارد کنید:',
      error: 'لطفاً یک شماره نسخه معنایی مؤثر وارد کنید ، به عنوان مثال: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'چی کار می خوای بکنی؟',
      upgradeVersion: 'نسخه ی به روز شده',
      specificVersion: 'نسخه مشخص شده',
      revokeVersion: 'نسخه رد شده'
    },
    upgrade: {
      prompt: 'کدام نسخه را برای به روزرسانی برنامه ریزی می کنید',
      confirmPush: 'اینکه آیا نسخه را به انبار سوق دهید'
    },
    specificVersion: {
      prompt: 'لطفاً شماره نسخه را وارد کنید:',
      confirm: 'شماره نسخه فعلی شما: v{0} ، تأیید کنید که شماره نسخه مشخص شده را وارد می کنید: v{1}'
    },
    revoke: {
      prompt: 'قصد دارید کدام نسخه را لغو کنید',
      currentVersion: 'نسخه فعلی',
      specificVersion: 'نسخه مشخص شده'
    },
    revokeCurrentVersion: {
      retainChanges: 'تغییر پرونده ها را رزرو کنید ، فقط شماره نسخه باطل می شود',
      confirm: 'شماره نسخه فعلی شما: v{0} ، پس از لغو: v{1} ، آیا ادامه می دهید؟'
    },
    revokeSpecificVersion: {
      prompt: 'لطفاً شماره نسخه را برای ابطال وارد کنید:',
      retainChanges: 'تغییر پرونده ها را رزرو کنید ، فقط شماره نسخه باطل می شود',
      confirm: 'شماره نسخه فعلی شما: v{0} ، پس از لغو: v{1} ، آیا ادامه می دهید؟'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'این که آیا شماره نسخه موجود در پرونده pack.json: v{0} به عنوان شماره نسخه Revokedv{1} به روز می شود',
      failedToRetrieve: 'بازیابی شماره نسخه از ارسال قبلی غیرممکن است و شماره نسخه موجود در پرونده pack.json فعلاً اصلاح نشده است. در صورت لزوم ، لطفاً به صورت دستی اصلاح کنید.'
    }
  }
};
