/**
 * 缅甸语：my_MM
 * @description 缅甸语语言包
 * @author KwooShung，Google Translate
 * @createat 2023-11-03 20:42:46
 */

export default {
  common: {
    error: 'ကွပ်မျက် command ကိုပျက်ကွက်: {0}',
    syncCompleted: 'လုံးဝပြည့်စုံ။',
    invalidChoice: 'မမှန်ကန်သောရွေးချယ်မှု',
    executionSucceeded: 'Execution အောင်မြင်',
    executionFailed: 'Execution ပျက်ကွက်',
    backToMenu: 'ပြန်လာ',
    exit: 'ထွက်သည်'
  },
  loading: {
    revokingCurrent: 'လက်ရှိဗားရှင်းကိုပြန်လည်ရုပ်သိမ်းနေသည် ...',
    revokingVersion: 'ပြန်လည်သုံးသပ်ဗားရှင်း: v{0} ...',
    specificVersion: 'v{0} ... v as ဗားရှင်းကိုသတ်မှတ်ပါ။',
    upgradingVersion: 'အဆင့်မြှင့်တင်ခြင်းv{0}: v{1}> v} ...'
  },
  version: {
    major: 'အဓိကဗားရှင်း',
    minor: 'အလယ်တန်းဗားရှင်း',
    patch: 'ဖါ',
    tips: {
      firstTimePrompt: 'ဗားရှင်းကိုသင်ဖြန့်ချိကြပြီမဟုတ်ကတည်းက၎င်းကိုပထမဆုံးအကြိမ်ထုတ်ပြန်ရန်လိုအပ်သည်။',
      failedToIncrement: 'ဗားရှင်းနံပါတ်ကိုတိုးမြှင့်လို့မရပါဘူး',
      invalidVersionField: 'packet.json ရှိဗားရှင်းကွက်လပ်များသည်ပျောက်ဆုံးနေသည်သို့မဟုတ်မမှန်ကန်ပါ',
      enterInitialVersion: 'ကျေးဇူးပြု. သင်၏ကန ဦး ဗားရှင်းနံပါတ်ကိုရိုက်ထည့်ပါ။ ပုံမှန် 0.0.1:',
      error: 'ကျေးဇူးပြု. ထိရောက်သော semantic version နံပါတ်ကိုထည့်ပါ။ ဥပမာ -v{0}'
    }
  },
  menus: {
    main: {
      prompt: 'မင်းဘာလုပ်မလို့လဲ?',
      upgradeVersion: 'updated ဗားရှင်း',
      specificVersion: 'သတ်မှတ်ထားသောဗားရှင်း',
      revokeVersion: 'version'
    },
    upgrade: {
      prompt: 'အဆင့်မြှင့်တင်ရန်မည်သည့်ဗားရှင်းကိုသင်စီစဉ်ထားသနည်း',
      confirmPush: 'ဂိုဒေါင်မှဗားရှင်းကိုတွန်းရန်ဖြစ်စေ'
    },
    specificVersion: {
      prompt: 'ကျေးဇူးပြု. ဗားရှင်းနံပါတ်ကိုရိုက်ထည့်ပါ။',
      confirm: 'သင်၏လက်ရှိဗားရှင်းနံပါတ်မှာ - V ith 0 +}, သတ်မှတ်ထားသောဗားရှင်းနံပါတ်ကိုထည့်သွင်းပါ။v{1}'
    },
    revoke: {
      prompt: 'ဘယ်ဗားရှင်းကိုသင်ပြန်လည်ရုပ်သိမ်းရန်စီစဉ်ထားသနည်း',
      currentVersion: 'လက်ရှိဗားရှင်း',
      specificVersion: 'သတ်မှတ်ထားသောဗားရှင်း'
    },
    revokeCurrentVersion: {
      retainChanges: 'ဖိုင်များ၏ပြောင်းလဲမှုကိုကြိုတင်စာရင်းသွင်းပါ, ဗားရှင်းနံပါတ်ကိုသာရုပ်သိမ်းသည်',
      confirm: 'သင်၏လက်ရှိဗားရှင်းနံပါတ်သည် V {0 0}}},v{0},v{1} > v{1}, မင်းဆက်လုပ်ပါ ဦး ။'
    },
    revokeSpecificVersion: {
      prompt: 'ကျေးဇူးပြုပြီးပြန်လည်ရုပ်သိမ်းမည့် version နံပါတ်ကိုရိုက်ထည့်ပါ။',
      retainChanges: 'ဖိုင်များ၏ပြောင်းလဲမှုကိုကြိုတင်စာရင်းသွင်းပါ, ဗားရှင်းနံပါတ်ကိုသာရုပ်သိမ်းသည်',
      confirm: 'သင်၏လက်ရှိဗားရှင်းနံပါတ်သည် V {0 0}}},v{0},v{1} > v{1}, မင်းဆက်လုပ်ပါ ဦး ။'
    },
    revertToPreviousVersion: {
      updatePackageJson: 'packet.json file ထဲရှိဗားရှင်းနံပါတ်ရှိပါသလား။v{0} သည်ပြန်လည်ရုပ်သိမ်းထားသောဗားရှင်းနံပါတ်v{1} အဖြစ် update လုပ်သည်။',
      failedToRetrieve: 'ယခင်တင်သွင်းမှုမှဗားရှင်းနံပါတ်ကိုပြန်လည်ရယူရန်မဖြစ်နိုင်ပါ။ Package.json ဖိုင်ရှိဗားရှင်းနံပါတ်ကိုယခုအချိန်တွင်မပြုပြင်ပါ။ လိုအပ်ပါက ကျေးဇူးပြု. လက်ဖြင့်ပြုပြင်ပါ။'
    }
  }
};
