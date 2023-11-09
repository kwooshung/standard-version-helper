/**
 * 北库尔德语：kmr_IQ
 * @description 北库尔德语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:28:41
 */

export default {
  common: {
    error: 'Fermandariya darvekirinê têk çû: {0',
    syncCompleted: 'Bi tevahî temam.',
    invalidChoice: 'Hilbijartina nederbasdar',
    executionSucceeded: 'darvekirin serketin',
    executionFailed: 'Têkçûna darvekirinê',
    backToMenu: 'vegerr',
    exit: 'devjêberdan'
  },
  loading: {
    revokingCurrent: 'Guhertoya heyî hate revandin ...',
    revokingVersion: 'Guhertoya Revisible: v{0} ...',
    specificVersion: 'Guhertoya wekî: v{0} ...',
    upgradingVersion: 'Upgradev{1}: v{1}> v {2} ...'
  },
  version: {
    major: 'Guhertoya sereke',
    minor: 'Guhertoya Duyemîn',
    patch: 'Pîne',
    tips: {
      firstTimePrompt: 'Ji ber ku we guhertoya serbest nekiriye, hûn hewce ne ku ew ji bo cara yekem azad bikin.',
      failedToIncrement: 'NIKARI DIKARIN NUMBER',
      invalidVersionField: 'Zeviyên guhertoyê di pakêtê de.json winda ne an betal in',
      enterInitialVersion: 'Ji kerema xwe hejmara guhertoya destpêkê, Default v{0} binivîse:',
      error: 'Ji kerema xwe hejmarê guhertoyek semantîk a bandor binivîse, ji bo nimûne: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Hûn ê çi bikin?',
      upgradeVersion: 'Guhertoya nûvekirî',
      specificVersion: 'Guhertoya diyarkirî',
      revokeVersion: 'Guhertoya redkirî'
    },
    upgrade: {
      prompt: 'Kîjan guhertoya ku hûn nûvekirinê dikin plan dikin',
      confirmPush: 'Gelo guhertoya li ser wargehê bar bikin'
    },
    specificVersion: {
      prompt: 'Ji kerema xwe hejmara guhertoyê binivîse:',
      confirm: 'Hejmara guhertoya weya niha ev e: v{0}, piştrast bikin ku hûn hejmara guhertoya diyarkirî binivîsin: v{1}'
    },
    revoke: {
      prompt: 'Kîjan guhertoya hûn plan dikin ku hûn betal bikin',
      currentVersion: 'guhertoya niha',
      specificVersion: 'Guhertoya diyarkirî'
    },
    revokeCurrentVersion: {
      retainChanges: 'Guhertina pelan biparêzin, tenê hejmara guhertoyê ve hatî revandin',
      confirm: 'Hejmara guhertoya weya niha ev e: v{0}, piştî betalkirinê: v{1}, hûn berdewam dikin?'
    },
    revokeSpecificVersion: {
      prompt: 'Ji kerema xwe hejmara guhertoyê binivîse ku were revandin:',
      retainChanges: 'Guhertina pelan biparêzin, tenê hejmara guhertoyê ve hatî revandin',
      confirm: 'Hejmara guhertoya weya niha ev e: v{0}, piştî betalkirinê: v{1}, hûn berdewam dikin?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Ka hejmara guhertoya di pakson.JSON de pelê: v{0} wekî hejmarek guhertoya revokkirî v {1} nûve dike',
      failedToRetrieve: 'Ne gengaz e ku meriv hejmarê guhertoyê ji radestkirina berê bigire, û hejmara guhertoya di pakêtê de were şandin. Heke hewce be, ji kerema xwe bi destan biguherînin.'
    }
  }
};
