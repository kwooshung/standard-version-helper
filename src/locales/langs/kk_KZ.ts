/**
 * 哈萨克语：kk_KZ
 * @description 哈萨克语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:32:09
 */

export default {
  common: {
    error: 'Орындау пәрмені сәтсіз аяқталды: {0}',
    syncCompleted: 'Толығымен аяқталды.',
    invalidChoice: 'Жарамсыз таңдау',
    executionSucceeded: 'Орындау сәтті аяқталды',
    executionFailed: 'Орындау сәтсіздігі',
    backToMenu: 'қайтару',
    exit: 'тастау'
  },
  loading: {
    revokingCurrent: 'Ағымдағы нұсқа жойылуда ...',
    revokingVersion: 'Қайта қайта қарау нұсқасы: v{0} ...',
    specificVersion: 'Нұсқаны келесідей көрсетіңіз: v{0} ...',
    upgradingVersion: '{0} жаңарту: v{1} > v{2} ...'
  },
  version: {
    major: 'Негізгі нұсқа',
    minor: 'Қосымша нұсқа',
    patch: 'Жамау салу',
    tips: {
      firstTimePrompt: 'Сіз нұсқаны жарияламағандықтан, оны бірінші рет босатуыңыз керек.',
      failedToIncrement: 'Нұсқа нөмірін көбейту мүмкін емес',
      invalidVersionField: 'Packet.json-дағы нұсқалар өрістері жоқ немесе жарамсыз',
      enterInitialVersion: 'Бастапқы нұсқа нөмірін енгізіңіз, әдепкі 0.0.1:',
      error: 'Тиімді семантикалық нұсқа нөмірін енгізіңіз, мысалы: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Сен не істемекшісің?',
      upgradeVersion: 'Жаңартылған нұсқа',
      specificVersion: 'Көрсетілген нұсқа',
      revokeVersion: 'Қабылданбаған нұсқа'
    },
    upgrade: {
      prompt: 'Сіз қандай нұсқасын жаңартуды жоспарлап отырсыз',
      confirmPush: 'Нұсқаны қоймаға итеру керек пе'
    },
    specificVersion: {
      prompt: 'Нұсқа нөмірін енгізіңіз:',
      confirm: 'Сіздің ағымдағы нұсқа нөміріңіз: v{0}, көрсетілген нұсқа нөмірін енгізгеніңізді растаңыз: v{1}'
    },
    revoke: {
      prompt: 'Сіз қандай нұсқасын жоюды жоспарлап отырсыз',
      currentVersion: 'Ағымдағы нұсқа',
      specificVersion: 'Көрсетілген нұсқа'
    },
    revokeCurrentVersion: {
      retainChanges: 'Файлдардың өзгеруін өзіңіз, тек нұсқа нөмірі қайтарып алынады',
      confirm: 'Сіздің ағымдағы нұсқа нөміріңіз: v{0}, жоюдан кейін: v{1}, сіз жалғастырасыз ба?'
    },
    revokeSpecificVersion: {
      prompt: 'Қайтарып алу үшін нұсқа нөмірін енгізіңіз:',
      retainChanges: 'Файлдардың өзгеруін өзіңіз, тек нұсқа нөмірі қайтарып алынады',
      confirm: 'Сіздің ағымдағы нұсқа нөміріңіз: v{0}, жоюдан кейін: v{1}, сіз жалғастырасыз ба?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Packet.json файлындағы нұсқа нөмірі ма,v{0} қарамастанv{0} {1} нұсқасы',
      failedToRetrieve: 'Алдыңғы жіберуден нұсқа нөмірін алу мүмкін емес, ал Packet.json файлындағы нұсқа нөмірі уақыт аралығында өзгертілмеген. Қажет болса, қолмен өзгертіңіз.'
    }
  }
};
