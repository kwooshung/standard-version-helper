/**
 * 加利西亚语（西班牙）：gl_ES
 * @description 加利西亚语（西班牙）语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:13:19
 */

export default {
  common: {
    error: 'Fallou o comando de execución: {0}',
    syncCompleted: 'Completamente completo.',
    invalidChoice: 'Elección non válida',
    executionSucceeded: 'a execución ten éxito',
    executionFailed: 'Falla de execución',
    backToMenu: 'Volver',
    exit: 'deixar de fumar'
  },
  loading: {
    revokingCurrent: 'A versión actual está a revogarse ...',
    revokingVersion: 'Versión revisible: v{0} ...',
    specificVersion: 'Especifique a versión como: v{0} ...',
    upgradingVersion: 'Actualización{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versión principal',
    minor: 'Versión secundaria',
    patch: 'Parche',
    tips: {
      firstTimePrompt: 'Como non lanzou a versión, ten que lanzala por primeira vez.',
      failedToIncrement: 'Non se pode aumentar o número de versión',
      invalidVersionField: 'Os campos de versión en paquete.json faltan ou non son válidos',
      enterInitialVersion: 'Insira o seu número de versión inicial, predeterminado 0.0.1:',
      error: 'Insira un número de versión semántica eficaz, por exemplo: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Que vas facer?',
      upgradeVersion: 'Versión actualizada',
      specificVersion: 'Versión especificada',
      revokeVersion: 'Versión rexeitada'
    },
    upgrade: {
      prompt: 'Que versión ten pensado actualizar',
      confirmPush: 'Se hai que empuxar a versión ao almacén'
    },
    specificVersion: {
      prompt: 'Introduza o número de versión:',
      confirm: 'O seu número de versión actual é: v{0}, confirma que introduce o número de versión especificada: v{1}'
    },
    revoke: {
      prompt: 'Que versión ten pensado revogar',
      currentVersion: 'Versión actual',
      specificVersion: 'Versión especificada'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserva o cambio de ficheiros, só se revoca o número de versión',
      confirm: 'O seu número de versión actual é: v{0}, despois da cancelación: v{1}, continúas?'
    },
    revokeSpecificVersion: {
      prompt: 'Insira o número de versión a revogar:',
      retainChanges: 'Reserva o cambio de ficheiros, só se revoca o número de versión',
      confirm: 'O seu número de versión actual é: v{0}, despois da cancelación: v{1}, continúas?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Se o número de versión no ficheiro paquete.json: v{0} actualízase como a versión revocada númerov{1}',
      failedToRetrieve:
        'É imposible recuperar o número de versión da presentación anterior e o número de versión do ficheiro paquete.json non se modifica polo momento. Se é necesario, modifique manualmente.'
    }
  }
};
