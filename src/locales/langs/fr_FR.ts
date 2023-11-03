/**
 * 法语（法国）：fr_FR
 * @description 法语（法国）语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:10:23
 */

export default {
  common: {
    error: "La commande d'exécution a échoué: {0}",
    syncCompleted: 'Complètement complet.',
    invalidChoice: 'Choix non valide',
    executionSucceeded: "L'exécution réussit",
    executionFailed: "Échec de l'exécution",
    backToMenu: 'retour',
    exit: 'quitter'
  },
  loading: {
    revokingCurrent: 'La version actuelle est révoquée ...',
    revokingVersion: 'Version revisible: v{0} ...',
    specificVersion: 'Spécifiez la version comme: v{0} ...',
    upgradingVersion: 'Mise à niveauv{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Version principale',
    minor: 'Version secondaire',
    patch: 'Correctif',
    tips: {
      firstTimePrompt: "Comme vous n'avez pas publié la version, vous devez le publier pour la première fois.",
      failedToIncrement: "Impossible d'augmenter le numéro de version",
      invalidVersionField: 'Les champs de version de package.json sont manquants ou non valides',
      enterInitialVersion: 'Veuillez saisir votre numéro de version initiale, par défaut 0.0.1:',
      error: 'Veuillez saisir un numéro de version sémantique efficace, par exemple: v{0}'
    }
  },
  menus: {
    main: {
      prompt: "Qu'est-ce que tu vas faire?",
      upgradeVersion: 'Version mise à jour',
      specificVersion: 'Version spécifiée',
      revokeVersion: 'Version rejetée'
    },
    upgrade: {
      prompt: 'Quelle version prévoyez-vous de mettre à niveau',
      confirmPush: "S'il faut pousser la version à l'entrepôt"
    },
    specificVersion: {
      prompt: 'Veuillez saisir le numéro de version:',
      confirm: 'Votre numéro de version actuel est: v{0}, confirmez que vous entrez le numéro de version spécifié: v{1}'
    },
    revoke: {
      prompt: 'Quelle version prévoyez-vous de révoquer',
      currentVersion: 'version actuelle',
      specificVersion: 'Version spécifiée'
    },
    revokeCurrentVersion: {
      retainChanges: 'Réserver le changement de fichiers, seul le numéro de version est révoqué',
      confirm: "Votre numéro de version actuel est: v{0}, après l'annulation: v{1}, continuez-vous?"
    },
    revokeSpecificVersion: {
      prompt: 'Veuillez saisir le numéro de version à révoquer:',
      retainChanges: 'Réserver le changement de fichiers, seul le numéro de version est révoqué',
      confirm: "Votre numéro de version actuel est: v{0}, après l'annulation: v{1}, continuez-vous?"
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Si le numéro de version dans le fichier package.json: v{0} est mis à jour comme le numéro de version révoquév{1}',
      failedToRetrieve:
        "Il est impossible de récupérer le numéro de version à partir de la soumission précédente, et le numéro de version dans le fichier package.json n'est pas modifié pour le moment. Si nécessaire, veuillez modifier manuellement."
    }
  }
};
