/**
 * 冰岛语：is_IS
 * @description 冰岛语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:23:22
 */

export default {
  common: {
    error: 'Framkvæmisskipunin mistókst: {0}',
    syncCompleted: 'Alveg heill.',
    invalidChoice: 'Ógilt val',
    executionSucceeded: 'Framkvæmd ná árangri',
    executionFailed: 'Framkvæmd bilun',
    backToMenu: 'snúa aftur',
    exit: 'Hættu'
  },
  loading: {
    revokingCurrent: 'Verið er að afturkalla núverandi útgáfu ...',
    revokingVersion: 'Revisible útgáfa: v{0} ...',
    specificVersion: 'Tilgreindu útgáfuna sem: v{0} ...',
    upgradingVersion: 'Uppfærðuv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Aðalútgáfa',
    minor: 'Aukaútgáfa',
    patch: 'Plástur',
    tips: {
      firstTimePrompt: 'Þar sem þú hefur ekki sent frá sér útgáfuna þarftu að gefa hana út í fyrsta skipti.',
      failedToIncrement: 'Get ekki aukið útgáfunúmerið',
      invalidVersionField: 'Útgáfusviðin í pakka.json vantar eða ógilt',
      enterInitialVersion: 'Vinsamlegast sláðu inn upphafsnúmerið þitt, sjálfgefið 0.0.1:',
      error: 'Vinsamlegast sláðu inn áhrifaríkt merkingarnúmer, til dæmis: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Hvað ætlarðu að gera?',
      upgradeVersion: 'uppfærð útgáfa',
      specificVersion: 'Tilgreind útgáfa',
      revokeVersion: 'Hafnað útgáfa'
    },
    upgrade: {
      prompt: 'Hvaða útgáfu ætlar þú að uppfæra',
      confirmPush: 'Hvort ýta á útgáfuna í vöruhúsið'
    },
    specificVersion: {
      prompt: 'Vinsamlegast sláðu inn útgáfunúmerið:',
      confirm: 'Núverandi útgáfunúmer þitt er: v{0}, staðfestu að þú slærð inn tilgreind útgáfu númer: v{1}'
    },
    revoke: {
      prompt: 'Hvaða útgáfu ætlar þú að afturkalla',
      currentVersion: 'núverandi útgáfa',
      specificVersion: 'Tilgreind útgáfa'
    },
    revokeCurrentVersion: {
      retainChanges: 'Bókaðu breytingu á skrám, aðeins útgáfunúmerið er afturkallað',
      confirm: 'Núverandi útgáfunúmer þitt er: v{0}, eftir afpöntunina: v{1}, heldurðu áfram?'
    },
    revokeSpecificVersion: {
      prompt: 'Vinsamlegast sláðu inn útgáfunúmerið sem á að afturkalla:',
      retainChanges: 'Bókaðu breytingu á skrám, aðeins útgáfunúmerið er afturkallað',
      confirm: 'Núverandi útgáfunúmer þitt er: v{0}, eftir afpöntunina: v{1}, heldurðu áfram?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Hvort útgáfunúmerið í pakkanum.json skrá: v{0} er uppfært sem afturkallaða útgáfunúmerv{1}',
      failedToRetrieve:
        'Það er ómögulegt að sækja útgáfunúmerið frá fyrri framlagningu og útgáfunúmerinu í pakkanum.json skrá er ekki breytt í bili. Ef nauðsyn krefur, vinsamlegast breyttu handvirkt.'
    }
  }
};
