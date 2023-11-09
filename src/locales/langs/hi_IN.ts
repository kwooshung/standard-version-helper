/**
 * 印地语：hi_IN
 * @description 印地语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:15:43
 */

export default {
  common: {
    error: 'निष्पादन कमांड विफल हो गया: {0}',
    syncCompleted: 'पूरी तरह से पूरा।',
    invalidChoice: 'अमान्य विकल्प',
    executionSucceeded: 'निष्पादन सफल',
    executionFailed: 'निष्पादन विफलता',
    backToMenu: 'वापस करना',
    exit: 'छोड़ना'
  },
  loading: {
    revokingCurrent: 'वर्तमान संस्करण को रद्द किया जा रहा है ...',
    revokingVersion: 'Revisible संस्करण: v{0} ...',
    specificVersion: 'संस्करण को निर्दिष्ट करें: v{0} ...',
    upgradingVersion: '{0}: v{1} > v{2} को अपग्रेड करें ...'
  },
  version: {
    major: 'मुख्य संस्करण',
    minor: 'द्वितीयक संस्करण',
    patch: 'पैबंद',
    tips: {
      firstTimePrompt: 'चूंकि आपने संस्करण जारी नहीं किया है, इसलिए आपको इसे पहली बार जारी करने की आवश्यकता है।',
      failedToIncrement: 'संस्करण संख्या में वृद्धि नहीं कर सकते',
      invalidVersionField: 'Package.json में संस्करण फ़ील्ड गायब या अमान्य हैं',
      enterInitialVersion: 'कृपया अपना प्रारंभिक संस्करण संख्या दर्ज करें, डिफ़ॉल्ट v{0}:',
      error: 'कृपया एक प्रभावी अर्थ संस्करण संख्या दर्ज करें, उदाहरण के लिए: v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'आप क्या करने जा रहे हैं?',
      upgradeVersion: 'अपडेट किया गया वर्ज़न',
      specificVersion: 'निर्दिष्ट संस्करण',
      revokeVersion: 'अस्वीकृत संस्करण'
    },
    upgrade: {
      prompt: 'आप किस संस्करण को अपग्रेड करने की योजना बनाते हैं',
      confirmPush: 'क्या संस्करण को गोदाम में धकेलना है'
    },
    specificVersion: {
      prompt: 'कृपया संस्करण संख्या दर्ज करें:',
      confirm: 'आपका वर्तमान संस्करण संख्या है: v{0}, पुष्टि करें कि आप निर्दिष्ट संस्करण संख्या दर्ज करें: v{1}'
    },
    revoke: {
      prompt: 'आप किस संस्करण को रद्द करने की योजना बनाते हैं',
      currentVersion: 'वर्तमान संस्करण',
      specificVersion: 'निर्दिष्ट संस्करण'
    },
    revokeCurrentVersion: {
      retainChanges: 'फ़ाइलों के परिवर्तन को आरक्षित करें, केवल संस्करण संख्या रद्द कर दी गई है',
      confirm: 'आपका वर्तमान संस्करण संख्या है: v{0}, रद्दीकरण के बाद: v{1}, क्या आप जारी रखते हैं?'
    },
    revokeSpecificVersion: {
      prompt: 'कृपया रद्द करने के लिए संस्करण संख्या दर्ज करें:',
      retainChanges: 'फ़ाइलों के परिवर्तन को आरक्षित करें, केवल संस्करण संख्या रद्द कर दी गई है',
      confirm: 'आपका वर्तमान संस्करण संख्या है: v{0}, रद्दीकरण के बाद: v{1}, क्या आप जारी रखते हैं?'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'क्या पैकेज में संस्करण संख्या।',
      failedToRetrieve:
        'पिछले सबमिशन से संस्करण संख्या को पुनः प्राप्त करना असंभव है, और पैकेज में संस्करण संख्या। JSON फ़ाइल को समय के लिए संशोधित नहीं किया गया है। यदि आवश्यक हो, तो कृपया मैन्युअल रूप से संशोधित करें।'
    }
  }
};
