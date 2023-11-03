/**
 * 爱尔兰语：ga_IE
 * @description 爱尔兰语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:11:48
 */

export default {
  common: {
    error: 'Theip ar an ordú forghníomhaithe: {0}',
    syncCompleted: 'Go hiomlán críochnaithe.',
    invalidChoice: 'Rogha neamhbhailí',
    executionSucceeded: 'éiríonn le forghníomhú',
    executionFailed: 'Teip forghníomhaithe',
    backToMenu: 'tar ar ais',
    exit: 'éirí as'
  },
  loading: {
    revokingCurrent: 'Tá an leagan reatha á chúlghairm ...',
    revokingVersion: 'Leagan Athbhreithnithe: v{0} ...',
    specificVersion: 'Sonraigh an leagan mar: v{0} ...',
    upgradingVersion: 'Uasghrádú{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Príomhleagaisc',
    minor: 'Leagan tánaisteach',
    patch: 'Paicheaeal',
    tips: {
      firstTimePrompt: 'Ós rud é nach bhfuil an leagan scaoilte agat, ní mór duit é a scaoileadh den chéad uair.',
      failedToIncrement: 'Ní féidir uimhir an leagan a mhéadú',
      invalidVersionField: 'Tá na réimsí leagan i bpacáiste.json ar iarraidh nó neamhbhailí',
      enterInitialVersion: 'Iontráil d’uimhir tosaigh leagan, réamhshocrú 0.0.1:',
      error: 'Iontráil uimhir leagan semantic éifeachtach, mar shampla: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Céard a dhéanfas tú?',
      upgradeVersion: 'Leagan Nuashonraithe',
      specificVersion: 'Leagan sonraithe',
      revokeVersion: 'Leagan diúltaithe'
    },
    upgrade: {
      prompt: 'Cén leagan atá beartaithe agat a uasghrádú',
      confirmPush: 'Cibé acu an leagan a bhrú chuig an stóras'
    },
    specificVersion: {
      prompt: 'Iontráil uimhir an leagan le do thoil:',
      confirm: 'Is é d’uimhir leagan reatha: v{0}, Deimhnigh go gcuireann tú an uimhir leagan sonraithe isteach: v{1}'
    },
    revoke: {
      prompt: 'Cén leagan atá beartaithe agat a chúlghairm',
      currentVersion: 'leagan reatha',
      specificVersion: 'Leagan sonraithe'
    },
    revokeCurrentVersion: {
      retainChanges: 'Cuir an t -athrú comhad in áirithe, ní dhéantar ach uimhir an leagan a chúlghairm',
      confirm: 'Is é d’uimhir leagan reatha: v{0}, tar éis an chealú: v{1}, an leanann tú ar aghaidh?'
    },
    revokeSpecificVersion: {
      prompt: 'Iontráil uimhir an leagain le cúlghairm:',
      retainChanges: 'Cuir an t -athrú comhad in áirithe, ní dhéantar ach uimhir an leagan a chúlghairm',
      confirm: 'Is é d’uimhir leagan reatha: v{0}, tar éis an chealú: v{1}, an leanann tú ar aghaidh?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Cibé an ndéantar an uimhir leagan sa chomhad pacáiste.json a nuashonrú: v{0} a nuashonrú mar an uimhir leagan cúlghairthev{1}',
      failedToRetrieve:
        'Tá sé dodhéanta uimhir an leagan a aisghabháil ón aighneacht roimhe seo, agus ní athraítear uimhir an leagan sa chomhad pacáiste.json de thuras na huaire. Más gá, athraigh de láimh le do thoil.'
    }
  }
};
