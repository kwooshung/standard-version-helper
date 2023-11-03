/**
 * 僧伽罗语：si_LK
 * @description 僧伽罗语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:54:08
 */

export default {
  common: {
    error: 'ක්රියාත්මක කිරීමේ විධානය අසමත් වූයේ: {0}',
    syncCompleted: 'සම්පූර්ණයෙන්ම සම්පූර්ණයි.',
    invalidChoice: 'අවලංගු තේරීම',
    executionSucceeded: 'ක්රියාත්මක කිරීම සාර්ථක වේ',
    executionFailed: 'ක්රියාත්මක කිරීමේ අසමත් වීම',
    backToMenu: 'ආපසු',
    exit: 'ඉවත්'
  },
  loading: {
    revokingCurrent: 'වත්මන් අනුවාදය අවලංගු කරන ...',
    revokingVersion: 'සංශෝධනය කළ හැකි අනුවාදය: v{0} ...',
    specificVersion: 'අනුවාදය මෙසේ සඳහන් කරන්න: v{0} ...',
    upgradingVersion: 'යාවත්කාලීන කිරීමv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'ප්රධාන අනුවාදය',
    minor: 'ද්විතීයික අනුවාදය',
    patch: 'පැච්',
    tips: {
      firstTimePrompt: 'ඔබ අනුවාදය නිකුත් කර නොමැති බැවින්, ඔබ එය පළමු වරට නිදහස් කළ යුතුය.',
      failedToIncrement: 'අනුවාද අංකය වැඩි කළ නොහැක',
      invalidVersionField: 'පැකේජයේ අනුවාද ක්ෂේත්ර. ජොනය අස්ථානගත වී හෝ අවලංගුය',
      enterInitialVersion: 'කරුණාකර ඔබේ ආරම්භක අනුවාද අංකය, පෙරනිමි 0.0.1:',
      error: 'කරුණාකර squ ලදායී අර්ථකථන අනුවාද අංකයක් ඇතුළත් කරන්න, උදාහරණයක් ලෙස: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'ඔයා කරන්න යන්නේ කුමක් ද?',
      upgradeVersion: 'යාවත්කාලීන කළ අනුවාදය',
      specificVersion: 'නිශ්චිත අනුවාදය',
      revokeVersion: 'ප්රතික්ෂේප කළ අනුවාදය'
    },
    upgrade: {
      prompt: 'ඔබ යාවත්කාලීන කිරීමට අදහස් කරන්නේ කුමන අනුවාදයද?',
      confirmPush: 'අනුවාදය ගබඩාවට තල්ලු කළ යුතුද යන්න'
    },
    specificVersion: {
      prompt: 'කරුණාකර අනුවාද අංකය ඇතුළත් කරන්න:',
      confirm: 'ඔබගේ වර්තමාන අනුවාද අංකය: v{0}, ඔබ නිශ්චිත අනුවාද අංකය ඇතුළත් කරන බව තහවුරු කරන්න: v{1}'
    },
    revoke: {
      prompt: 'ඔබ අවලංගු කිරීමට අදහස් කරන්නේ කුමන අනුවාදයද?',
      currentVersion: 'වත්මන් අනුවාදය',
      specificVersion: 'නිශ්චිත අනුවාදය'
    },
    revokeCurrentVersion: {
      retainChanges: 'ලිපිගොනු වෙනස් කිරීම වෙන් කර ගන්න, අනුවාද අංකය පමණක් අවලංගු කර ඇත',
      confirm: 'ඔබගේ වර්තමාන අනුවාද අංකය: v{0} අවලංගු කිරීමෙන් පසු: v{1}, ඔබ දිගටම කරගෙන යනවාද?'
    },
    revokeSpecificVersion: {
      prompt: 'අවලංගු කළ යුතු අනුවාද අංකය ඇතුළත් කරන්න:',
      retainChanges: 'ලිපිගොනු වෙනස් කිරීම වෙන් කර ගන්න, අනුවාද අංකය පමණක් අවලංගු කර ඇත',
      confirm: 'ඔබගේ වර්තමාන අනුවාද අංකය: v{0} අවලංගු කිරීමෙන් පසු: v{1}, ඔබ දිගටම කරගෙන යනවාද?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'පැකේජයේ අනුවාද අංකය වේවා. Json ගොනුව: V {0 the අවලංගු කළ අනුවාද අංකයv{1} ලෙස යාවත්කාලීන වේ',
      failedToRetrieve: 'පෙර ඉදිරිපත් කිරීමෙන් අනුවාද අංකය ලබා ගැනීමට නොහැකි අතර, පැකේජයේ අනුවාද අංකය. ජොසන් ගොනුව දැනට වෙනස් කර නොමැත. අවශ්ය නම්, කරුණාකර අතින් වෙනස් කරන්න.'
    }
  }
};
