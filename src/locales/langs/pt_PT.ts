/**
 * 葡萄牙语：pt_PT
 * @description 葡萄牙语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:49:44
 */

export default {
  common: {
    error: 'O comando de execução falhou: {0}',
    syncCompleted: 'Completamente completo.',
    invalidChoice: 'Escolha inválida',
    executionSucceeded: 'execução é bem -sucedida',
    executionFailed: 'Falha de execução',
    backToMenu: 'retornar',
    exit: 'desistir'
  },
  loading: {
    revokingCurrent: 'A versão atual está sendo revogada ...',
    revokingVersion: 'Versão revisível: v{0} ...',
    specificVersion: 'Especifique a versão como: v{0} ...',
    upgradingVersion: 'Upgrade{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Versão principal',
    minor: 'Versão secundária',
    patch: 'Correção',
    tips: {
      firstTimePrompt: 'Como você não lançou a versão, precisa lançá -la pela primeira vez.',
      failedToIncrement: 'Não posso aumentar o número da versão',
      invalidVersionField: 'Os campos de versão em package.json estão ausentes ou inválidos',
      enterInitialVersion: 'Por favor, insira o número da versão inicial, padrão v{0}:',
      error: 'Por favor, insira um número de versão semântica eficaz, por exemplo: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'O que você vai fazer?',
      upgradeVersion: 'versão atualizada',
      specificVersion: 'Versão especificada',
      revokeVersion: 'Versão rejeitada'
    },
    upgrade: {
      prompt: 'Qual versão você planeja atualizar',
      confirmPush: 'Se deve empurrar a versão para o armazém'
    },
    specificVersion: {
      prompt: 'Por favor, insira o número da versão:',
      confirm: 'Seu número de versão atual é: v{0}, confirme que você digita o número da versão especificada: v{1}'
    },
    revoke: {
      prompt: 'Qual versão você planeja revogar',
      currentVersion: 'Versão Atual',
      specificVersion: 'Versão especificada'
    },
    revokeCurrentVersion: {
      retainChanges: 'Reserve a alteração dos arquivos, apenas o número da versão é revogado',
      confirm: 'Seu número de versão atual é: v{0}, após o cancelamento: v{1}, você continua?'
    },
    revokeSpecificVersion: {
      prompt: 'Por favor, insira o número da versão a ser revogado:',
      retainChanges: 'Reserve a alteração dos arquivos, apenas o número da versão é revogado',
      confirm: 'Seu número de versão atual é: v{0}, após o cancelamento: v{1}, você continua?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Se o número da versão no arquivo package.json: v{0} é atualizado como o número da versão revogadav{1}',
      failedToRetrieve: 'É impossível recuperar o número da versão do envio anterior e o número da versão no arquivo package.json não é modificado por enquanto. Se necessário, modifique manualmente.'
    }
  }
};
