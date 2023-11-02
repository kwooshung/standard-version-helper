import ar_EG from './ar_EG.json';
import az_AZ from './az_AZ.json';
import bg_BG from './bg_BG.json';
import bn_BD from './bn_BD.json';
import by_BY from './by_BY.json';
import ca_ES from './ca_ES.json';
import cs_CZ from './cs_CZ.json';
import da_DK from './da_DK.json';
import de_DE from './de_DE.json';
import el_GR from './el_GR.json';
import en_GB from './en_GB.json';
import en_US from './en_US.json';
import es_ES from './es_ES.json';
import et_EE from './et_EE.json';
import eu_ES from './eu_ES.json';
import fa_IR from './fa_IR.json';
import fi_FI from './fi_FI.json';
import fr_BE from './fr_BE.json';
import fr_CA from './fr_CA.json';
import fr_FR from './fr_FR.json';
import ga_IE from './ga_IE.json';
import gl_ES from './gl_ES.json';
import he_IL from './he_IL.json';
import hi_IN from './hi_IN.json';
import hr_HR from './hr_HR.json';
import hu_HU from './hu_HU.json';
import hy_AM from './hy_AM.json';
import id_ID from './id_ID.json';
import is_IS from './is_IS.json';
import it_IT from './it_IT.json';
import ja_JP from './ja_JP.json';
import ka_GE from './ka_GE.json';
import kk_KZ from './kk_KZ.json';
import km_KH from './km_KH.json';
import kmr_I from './kmr_I.json';
import kn_IN from './kn_IN.json';
import ko_KR from './ko_KR.json';
import lt_LT from './lt_LT.json';
import lv_LV from './lv_LV.json';
import mk_MK from './mk_MK.json';
import ml_IN from './ml_IN.json';
import mn_MN from './mn_MN.json';
import ms_MY from './ms_MY.json';
import my_MM from './my_MM.json';
import nb_NO from './nb_NO.json';
import ne_NP from './ne_NP.json';
import nl_BE from './nl_BE.json';
import nl_NL from './nl_NL.json';
import pl_PL from './pl_PL.json';
import pt_BR from './pt_BR.json';
import pt_PT from './pt_PT.json';
import ro_RO from './ro_RO.json';
import ru_RU from './ru_RU.json';
import si_LK from './si_LK.json';
import sk_SK from './sk_SK.json';
import sl_SI from './sl_SI.json';
import sr_RS from './sr_RS.json';
import sv_SE from './sv_SE.json';
import ta_IN from './ta_IN.json';
import th_TH from './th_TH.json';
import tk_TK from './tk_TK.json';
import tr_TR from './tr_TR.json';
import uk_UA from './uk_UA.json';
import ur_PK from './ur_PK.json';
import vi_VN from './vi_VN.json';
import zh_CN from './zh_CN.json';
import zh_Dai from './zh_Dai.json';
import zh_HK from './zh_HK.json';
import zh_Jingpo from './zh_Jingpo.json';
import zh_Kazakh from './zh_Kazakh.json';
import zh_Korean from './zh_Korean.json';
import zh_Kyrgyz from './zh_Kyrgyz.json';
import zh_Lahu from './zh_Lahu.json';
import zh_MO from './zh_MO.json';
import zh_Mongolian from './zh_Mongolian.json';
import zh_Russian from './zh_Russian.json';
import zh_SG from './zh_SG.json';
import zh_Tibetan from './zh_Tibetan.json';
import zh_TW from './zh_TW.json';
import zh_Uighur from './zh_Uighur.json';
import zh_Xibo from './zh_Xibo.json';
import zh_Yi from './zh_Yi.json';

// 创建一个映射对象，将语言代码映射到对应的语言包
const locales = {
  ar_EG,
  az_AZ,
  bg_BG,
  bn_BD,
  by_BY,
  ca_ES,
  cs_CZ,
  da_DK,
  de_DE,
  el_GR,
  en_GB,
  en_US,
  es_ES,
  et_EE,
  eu_ES,
  fa_IR,
  fi_FI,
  fr_BE,
  fr_CA,
  fr_FR,
  ga_IE,
  gl_ES,
  he_IL,
  hi_IN,
  hr_HR,
  hu_HU,
  hy_AM,
  id_ID,
  is_IS,
  it_IT,
  ja_JP,
  ka_GE,
  kk_KZ,
  km_KH,
  kmr_I,
  kn_IN,
  ko_KR,
  lt_LT,
  lv_LV,
  mk_MK,
  ml_IN,
  mn_MN,
  ms_MY,
  my_MM,
  nb_NO,
  ne_NP,
  nl_BE,
  nl_NL,
  pl_PL,
  pt_BR,
  pt_PT,
  ro_RO,
  ru_RU,
  si_LK,
  sk_SK,
  sl_SI,
  sr_RS,
  sv_SE,
  ta_IN,
  th_TH,
  tk_TK,
  tr_TR,
  uk_UA,
  ur_PK,
  vi_VN,
  zh_CN,
  zh_Dai,
  zh_HK,
  zh_Jingpo,
  zh_Kazakh,
  zh_Korean,
  zh_Kyrgyz,
  zh_Lahu,
  zh_MO,
  zh_Mongolian,
  zh_Russian,
  zh_SG,
  zh_Tibetan,
  zh_TW,
  zh_Uighur,
  zh_Xibo,
  zh_Yi
};

let currentLocale = zh_CN; // 默认使用中文

function i18n(key: string, ...params: string[]): string {
  const keys = key.split('.');
  let result: any = currentLocale;
  for (const k of keys) {
    result = result[k];
    if (result === undefined) {
      return key;
    }
  }

  if (typeof result === 'string') {
    return result.replace(/\{(\d+)\}/g, (_, index: number) => params[index]);
  } else {
    console.warn(`警告: "${key}" 不是一个有效的字符串值。\nWarning: "${key}" is not a valid string value.`);
    return key;
  }
}

function set(locale: string): void {
  // 使用映射对象进行查找，如果找不到则默认使用中文
  currentLocale = locales[locale] || zh_CN;
  if (locale && !locales[locale]) {
    console.warn(`警告: 不支持的语言 ${locale}，将使用默认语言包 zh_CN。\nUnsupported locale: ${locale}, fallback to zh_CN.`);
  }
}

export { i18n, set };
