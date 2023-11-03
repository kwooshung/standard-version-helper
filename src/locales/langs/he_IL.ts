/**
 * 希伯来语：he_IL
 * @description 希伯来语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:14:36
 */

export default {
  common: {
    error: 'פקודת הביצוע נכשלה: {0}',
    syncCompleted: 'שלם לחלוטין.',
    invalidChoice: 'בחירה לא חוקית',
    executionSucceeded: 'הביצוע מצליח',
    executionFailed: 'כישלון ביצוע',
    backToMenu: 'לַחֲזוֹר',
    exit: 'לְהַפְסִיק'
  },
  loading: {
    revokingCurrent: 'הגרסה הנוכחית מבוטלת ...',
    revokingVersion: 'גרסה בלתי אפשרית: v{0} ...',
    specificVersion: 'ציין את הגרסה כ: v{0} ...',
    upgradingVersion: 'שדרג{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'גרסה ראשית',
    minor: 'גרסה משנית',
    patch: 'תיקון',
    tips: {
      firstTimePrompt: 'מכיוון שלא הוצאת את הגרסה, עליך לשחרר אותה לראשונה.',
      failedToIncrement: 'לא ניתן להגדיל את מספר הגרסה',
      invalidVersionField: 'שדות הגרסה ב- Packation.json חסרים או לא חוקיים',
      enterInitialVersion: 'אנא הזן את מספר הגרסה הראשוני שלך, ברירת מחדל 0.0.1:',
      error: 'אנא הזן מספר גרסה סמנטי יעיל, לדוגמה: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'מה אתה הולך לעשות?',
      upgradeVersion: 'גרסה מעודכנת',
      specificVersion: 'גרסה שצוינה',
      revokeVersion: 'גרסה נדחית'
    },
    upgrade: {
      prompt: 'איזו גרסה אתה מתכנן לשדרג',
      confirmPush: 'האם לדחוף את הגרסה למחסן'
    },
    specificVersion: {
      prompt: 'אנא הזן את מספר הגרסה:',
      confirm: 'מספר הגרסה הנוכחי שלך הוא: v{0}, אשר שאתה מזין את מספר הגרסה שצוין: v{1}'
    },
    revoke: {
      prompt: 'איזו גרסה אתה מתכנן לבטל',
      currentVersion: 'גרסה נוכחית',
      specificVersion: 'גרסה שצוינה'
    },
    revokeCurrentVersion: {
      retainChanges: 'שמור את שינוי הקבצים, רק מספר הגרסה מבוטל',
      confirm: 'מספר הגרסה הנוכחי שלך הוא: v{0}, לאחר הביטול: v{1}, האם אתה ממשיך?'
    },
    revokeSpecificVersion: {
      prompt: 'אנא הכנס את מספר הגרסה לביטול:',
      retainChanges: 'שמור את שינוי הקבצים, רק מספר הגרסה מבוטל',
      confirm: 'מספר הגרסה הנוכחי שלך הוא: v{0}, לאחר הביטול: v{1}, האם אתה ממשיך?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'בין אם מספר הגרסה בקובץ Packation.json: v{0} מתעדכן כמספר הגרסה שבוטלv{1}',
      failedToRetrieve: 'אי אפשר לאחזר את מספר הגרסה מההגשה הקודמת, ומספר הגרסה בקובץ Packation.json אינו משתנה בינתיים. במידת הצורך, אנא שנה ידנית.'
    }
  }
};
