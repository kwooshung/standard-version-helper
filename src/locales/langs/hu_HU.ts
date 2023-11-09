/**
 * 匈牙利语：hu_HU
 * @description 匈牙利语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:18:21
 */

export default {
  common: {
    error: 'A végrehajtási parancs sikertelen: {0}',
    syncCompleted: 'Teljesen teljes.',
    invalidChoice: 'Érvénytelen választás',
    executionSucceeded: 'A végrehajtás sikere',
    executionFailed: 'Végrehajtási hiba',
    backToMenu: 'Visszatérés',
    exit: 'Kilépés'
  },
  loading: {
    revokingCurrent: 'A jelenlegi verziót visszavonják ...',
    revokingVersion: 'Megújítható verzió: v{0} ...',
    specificVersion: 'Adja meg a verziót: v{0} ...',
    upgradingVersion: 'Frissítse{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Fő változat',
    minor: 'Másodlagos változat',
    patch: 'Tapasz',
    tips: {
      firstTimePrompt: 'Mivel még nem adta ki a verziót, először ki kell engednie.',
      failedToIncrement: 'Nem tudja növelni a verziószámot',
      invalidVersionField: 'A package.json verziómezők hiányoznak vagy érvénytelenek',
      enterInitialVersion: 'Kérjük, írja be a kezdeti verziószámát, az alapértelmezett v{0}:',
      error: 'Kérjük, adjon meg egy hatékony szemantikai verziószámot, például: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Mit fogsz tenni?',
      upgradeVersion: 'frissített verzió',
      specificVersion: 'Megadott verzió',
      revokeVersion: 'Elutasított verzió'
    },
    upgrade: {
      prompt: 'Melyik verziót tervezi frissíteni',
      confirmPush: 'Hogy a verziót a raktárba tolja -e'
    },
    specificVersion: {
      prompt: 'Kérjük, írja be a verziószámot:',
      confirm: 'A jelenlegi verziószáma: v{0}, erősítse meg, hogy megadja -e a megadott verziószámot: v{1}'
    },
    revoke: {
      prompt: 'Melyik verziót tervezi visszavonni',
      currentVersion: 'jelenlegi verzió',
      specificVersion: 'Megadott verzió'
    },
    revokeCurrentVersion: {
      retainChanges: 'Fenntartja a fájlok megváltoztatását, csak a verziószámot vonják vissza',
      confirm: 'A jelenlegi verziószáma: v{0}, a lemondás után: v{1}, folytatja?'
    },
    revokeSpecificVersion: {
      prompt: 'Kérjük, írja be a visszavonandó verziószámot:',
      retainChanges: 'Fenntartja a fájlok megváltoztatását, csak a verziószámot vonják vissza',
      confirm: 'A jelenlegi verziószáma: v{0}, a lemondás után: v{1}, folytatja?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Hogy a package.json fájlban szereplő verziószám: v{0} frissítve van -e a V visszavonott verziószámv{1}',
      failedToRetrieve: 'Lehetetlen letölteni a verziószámot az előző benyújtásból, és a package.json fájl verziószámát egyelőre nem módosítják. Ha szükséges, kérjük, módosítsa manuálisan.'
    }
  }
};
