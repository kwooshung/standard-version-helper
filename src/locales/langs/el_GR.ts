/**
 * 希腊语：el_GR
 * @description 希腊语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:01:59
 */

export default {
  common: {
    error: 'Η εντολή εκτέλεσης απέτυχε: {0}',
    syncCompleted: 'Πλήρης πλήρης.',
    invalidChoice: 'Μη έγκυρη επιλογή',
    executionSucceeded: 'Η εκτέλεση επιτυγχάνει',
    executionFailed: 'Αποτυχία εκτέλεσης',
    backToMenu: 'ΕΠΙΣΤΡΟΦΗ',
    exit: 'εγκαταλείπω'
  },
  loading: {
    revokingCurrent: 'Η τρέχουσα έκδοση ανακαλείται ...',
    revokingVersion: 'Αναθετική έκδοση: v{0} ...',
    specificVersion: 'Καθορίστε την έκδοση ως: v{0} ...',
    upgradingVersion: 'Αναβάθμιση{0}: v{1} > v{2} ...'
  },
  version: {
    major: 'Κύρια έκδοση',
    minor: 'Δευτερεύουσα έκδοση',
    patch: 'Κηλίδα',
    tips: {
      firstTimePrompt: 'Δεδομένου ότι δεν έχετε κυκλοφορήσει την έκδοση, πρέπει να την κυκλοφορήσετε για πρώτη φορά.',
      failedToIncrement: 'Δεν μπορώ να αυξήσω τον αριθμό έκδοσης',
      invalidVersionField: 'Τα πεδία έκδοσης στο package.json λείπουν ή δεν είναι έγκυρα',
      enterInitialVersion: 'Εισαγάγετε τον αρχικό σας αριθμό έκδοσης, προεπιλογή v{0}:',
      error: 'Εισαγάγετε έναν αποτελεσματικό αριθμό σημασιολογικής έκδοσης, για παράδειγμα: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'Τι θα κάνεις?',
      upgradeVersion: 'αναβαθμισμένη έκδοση',
      specificVersion: 'Καθορισμένη έκδοση',
      revokeVersion: 'Απόρριψη της έκδοσης'
    },
    upgrade: {
      prompt: 'Ποια έκδοση σκοπεύετε να αναβαθμίσετε',
      confirmPush: 'Αν θα ωθήσει την έκδοση στην αποθήκη'
    },
    specificVersion: {
      prompt: 'Εισαγάγετε τον αριθμό έκδοσης:',
      confirm: 'Ο τρέχων αριθμός έκδοσης σας είναι: v{0}, επιβεβαιώστε ότι εισάγετε τον καθορισμένο αριθμό έκδοσης: v{1}'
    },
    revoke: {
      prompt: 'Ποια έκδοση σκοπεύετε να ανακαλέσετε',
      currentVersion: 'τρέχουσα έκδοση',
      specificVersion: 'Καθορισμένη έκδοση'
    },
    revokeCurrentVersion: {
      retainChanges: 'Κρατήστε την αλλαγή των αρχείων, αναφέρεται μόνο ο αριθμός έκδοσης',
      confirm: 'Ο τρέχων αριθμός έκδοσης σας είναι: v{0}, μετά την ακύρωση: v{1}, συνεχίζετε;'
    },
    revokeSpecificVersion: {
      prompt: 'Εισαγάγετε τον αριθμό έκδοσης που θα ανακληθεί:',
      retainChanges: 'Κρατήστε την αλλαγή των αρχείων, αναφέρεται μόνο ο αριθμός έκδοσης',
      confirm: 'Ο τρέχων αριθμός έκδοσης σας είναι: v{0}, μετά την ακύρωση: v{1}, συνεχίζετε;'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'Είτε ο αριθμός έκδοσης στο αρχείο package.json: v{0} ενημερώνεται ως ο ανακληθέντος αριθμός έκδοσηςv{1}',
      failedToRetrieve:
        'Είναι αδύνατο να ανακτήσετε τον αριθμό έκδοσης από την προηγούμενη υποβολή και ο αριθμός έκδοσης στο αρχείο package.json δεν τροποποιείται προς το παρόν. Εάν είναι απαραίτητο, τροποποιήστε με το χέρι.'
    }
  }
};
