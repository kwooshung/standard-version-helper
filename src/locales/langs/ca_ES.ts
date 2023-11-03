/**
 * 加泰罗尼亚语：ca_ES
 * @description 加泰罗尼亚语语言包
 * @author KwooShung，Google Translate
 * @createat undefined
 */

export default {
  common: {
    error: "L'ordre d'execució ha fallat: {0}",
    syncCompleted: 'Completament complet.',
    invalidChoice: 'Elecció no vàlida',
    executionSucceeded: "L'execució té èxit",
    executionFailed: "Fallada d'execució",
    backToMenu: 'retornar',
    exit: 'abandonar'
  },
  loading: {
    revokingCurrent: 'S’està revocant la versió actual ...',
    revokingVersion: 'Versió revisible: v{0} ...',
    specificVersion: 'Especifiqueu la versió com: v{0} ...',
    upgradingVersion: 'Actualitzacióv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versió principal',
    minor: 'Versió secundària',
    patch: 'Apedaçar',
    tips: {
      firstTimePrompt: 'Com que no heu publicat la versió, heu de llançar -la per primera vegada.',
      failedToIncrement: 'No es pot augmentar el número de versió',
      invalidVersionField: 'Els camps de versió de Package.json falten o no són vàlids',
      enterInitialVersion: 'Introduïu el vostre número de versió inicial, predeterminat 0.0.1:',
      error: 'Introduïu un número de versió semàntic efectiu, per exemple: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Què faràs?',
      upgradeVersion: 'Versió actualitzada',
      specificVersion: 'Versió especificada',
      revokeVersion: 'Versió rebutjada'
    },
    upgrade: {
      prompt: 'Quina versió teniu previst actualitzar',
      confirmPush: 'Si heu d’empènyer la versió al magatzem'
    },
    specificVersion: {
      prompt: 'Introduïu el número de versió:',
      confirm: 'El vostre número de versió actual és: v{0}, confirmeu que introduïu el número de versió especificat: v{1}'
    },
    revoke: {
      prompt: 'Quina versió teniu previst revocar',
      currentVersion: 'versió actual',
      specificVersion: 'Versió especificada'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserva el canvi de fitxers, només es revoca el número de versió',
      confirm: 'El vostre número de versió actual és: v{0}, després de la cancel·lació: v{1}, continueu?'
    },
    revokeSpecificVersion: {
      prompt: 'Introduïu el número de versió per revocar:',
      retainChanges: 'Reserva el canvi de fitxers, només es revoca el número de versió',
      confirm: 'El vostre número de versió actual és: v{0}, després de la cancel·lació: v{1}, continueu?'
    },
    revertToPreviousVersion: {
      updatePackageJson: "Si el número de versió del fitxer Package.json: v{0} s'actualitza com el número de versió revocatv{1}",
      failedToRetrieve: 'És impossible recuperar el número de versió de l’enviament anterior i el número de versió del fitxer Package.json no es modifica de moment. Si cal, modifiqueu manualment.'
    }
  }
};
