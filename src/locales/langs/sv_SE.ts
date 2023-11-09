/**
 * 瑞典语：sv_SE
 * @description 瑞典语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:59:33
 */

export default {
  common: {
    error: 'Exekveringskommandot misslyckades: {0}',
    syncCompleted: 'Helt komplett.',
    invalidChoice: 'Ogiltig val',
    executionSucceeded: 'exekvering lyckas',
    executionFailed: 'Exekveringsfel',
    backToMenu: 'lämna tillbaka',
    exit: 'sluta'
  },
  loading: {
    revokingCurrent: 'Den nuvarande versionen återkallas ...',
    revokingVersion: 'Överenslig version: v{0} ...',
    specificVersion: 'Ange versionen som: v{0} ...',
    upgradingVersion: 'Uppgradering{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Huvudversion',
    minor: 'Sekundärversion',
    patch: 'Lappa',
    tips: {
      firstTimePrompt: 'Eftersom du inte har släppt versionen måste du släppa den för första gången.',
      failedToIncrement: 'Kan inte öka versionnumret',
      invalidVersionField: 'Versionsfälten i Package.json saknas eller ogiltig',
      enterInitialVersion: 'Ange ditt första versionnummer, standard v{0}:',
      error: 'Ange ett effektivt semantiskt versionnummer, till exempel: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Vad ska du göra?',
      upgradeVersion: 'uppdaterad version',
      specificVersion: 'Specificerad version',
      revokeVersion: 'Avvisad version'
    },
    upgrade: {
      prompt: 'Vilken version planerar du att uppgradera',
      confirmPush: 'Om man ska trycka på versionen till lagret'
    },
    specificVersion: {
      prompt: 'Ange versionnumret:',
      confirm: 'Ditt nuvarande versionnummer är: v{0}, bekräfta att du anger det angivna versionnumret: v{1}'
    },
    revoke: {
      prompt: 'Vilken version planerar du att återkalla',
      currentVersion: 'aktuell version',
      specificVersion: 'Specificerad version'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reservera ändringen av filer, endast versionnumret återkallas',
      confirm: 'Ditt nuvarande versionnummer är: v{0}, efter avbokningen: v{1}, fortsätter du?'
    },
    revokeSpecificVersion: {
      prompt: 'Ange versionnumret som ska återkallas:',
      retainChanges: 'Reservera ändringen av filer, endast versionnumret återkallas',
      confirm: 'Ditt nuvarande versionnummer är: v{0}, efter avbokningen: v{1}, fortsätter du?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Huruvida versionnumret i paketet.JSON -filen: v{0} uppdateras som det återkallade versionnumretv{1}',
      failedToRetrieve:
        'Det är omöjligt att hämta versionnumret från föregående inlämning, och versionnumret i Package.json -filen är inte modifierad för tillfället. Vid behov, vänligen ändra manuellt.'
    }
  }
};
