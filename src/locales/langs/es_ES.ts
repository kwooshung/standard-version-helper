/**
 * 西班牙语：es_ES
 * @description 西班牙语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:03:27
 */

export default {
  common: {
    error: 'El comando de ejecución falló: {0}',
    syncCompleted: 'Completamente completo.',
    invalidChoice: 'Elección no válida',
    executionSucceeded: 'Ejecución',
    executionFailed: 'Falla de ejecución',
    backToMenu: 'devolver',
    exit: 'abandonar'
  },
  loading: {
    revokingCurrent: 'La versión actual se está revocando ...',
    revokingVersion: 'Versión revisible: v{0} ...',
    specificVersion: 'Especifique la versión como: v{0} ...',
    upgradingVersion: 'Actualización{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versión principal',
    minor: 'Versión secundaria',
    patch: 'Parche',
    tips: {
      firstTimePrompt: 'Como no ha lanzado la versión, debe lanzarla por primera vez.',
      failedToIncrement: 'No se puede aumentar el número de versión',
      invalidVersionField: 'Los campos de la versión en paquete.json están faltando o no son válidos',
      enterInitialVersion: 'Ingrese su número de versión inicial, predeterminado 0.0.1:',
      error: 'Ingrese un número de versión semántico efectivo, por ejemplo: v{0}'
    }
  },
  menus: {
    main: {
      prompt: '¿Qué vas a hacer?',
      upgradeVersion: 'Versión actualizada',
      specificVersion: 'Versión especificada',
      revokeVersion: 'Versión rechazada'
    },
    upgrade: {
      prompt: '¿Qué versión planea actualizar?',
      confirmPush: 'Si empujar la versión al almacén'
    },
    specificVersion: {
      prompt: 'Ingrese el número de versión:',
      confirm: 'Su número de versión actual es: v{0}, confirme que ingresa el número de versión especificado: v{1}'
    },
    revoke: {
      prompt: '¿Qué versión planea revocar?',
      currentVersion: 'versión actual',
      specificVersion: 'Versión especificada'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserve el cambio de archivos, solo se revoca el número de versión',
      confirm: 'Su número de versión actual es: v{0}, después de la cancelación: v{1}, ¿continúa?'
    },
    revokeSpecificVersion: {
      prompt: 'Ingrese el número de versión que se revocará:',
      retainChanges: 'Reserve el cambio de archivos, solo se revoca el número de versión',
      confirm: 'Su número de versión actual es: v{0}, después de la cancelación: v{1}, ¿continúa?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Si el número de versión en el archivo Packle.json: v{0} se actualiza como el número de versión revocadov{1}',
      failedToRetrieve:
        'Es imposible recuperar el número de versión del envío anterior, y el número de versión en el archivo Packle.json no se modifica por el momento. Si es necesario, modifique manualmente.'
    }
  }
};
