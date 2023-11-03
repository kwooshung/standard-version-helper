/**
 * 语言包
 * @description 语言包模块，用于提供多语言支持
 * @author KwooShung
 * @module locales
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-01 13:21:33
 */

import ar_EG from './langs/ar_EG';
import az_AZ from './langs/az_AZ';
import bg_BG from './langs/bg_BG';
import bn_BD from './langs/bn_BD';
import by_BY from './langs/by_BY';
import ca_ES from './langs/ca_ES';
import cs_CZ from './langs/cs_CZ';
import da_DK from './langs/da_DK';
import de_DE from './langs/de_DE';
import el_GR from './langs/el_GR';
import en_GB from './langs/en_GB';
import en_US from './langs/en_US';
import es_ES from './langs/es_ES';
import et_EE from './langs/et_EE';
import eu_ES from './langs/eu_ES';
import fa_IR from './langs/fa_IR';
import fi_FI from './langs/fi_FI';
import fr_BE from './langs/fr_BE';
import fr_CA from './langs/fr_CA';
import fr_FR from './langs/fr_FR';
import ga_IE from './langs/ga_IE';
import gl_ES from './langs/gl_ES';
import he_IL from './langs/he_IL';
import hi_IN from './langs/hi_IN';
import hr_HR from './langs/hr_HR';
import hu_HU from './langs/hu_HU';
import hy_AM from './langs/hy_AM';
import id_ID from './langs/id_ID';
import is_IS from './langs/is_IS';
import it_IT from './langs/it_IT';
import ja_JP from './langs/ja_JP';
import ka_GE from './langs/ka_GE';
import kk_KZ from './langs/kk_KZ';
import km_KH from './langs/km_KH';
import kmr_IQ from './langs/kmr_IQ';
import kn_IN from './langs/kn_IN';
import ko_KR from './langs/ko_KR';
import lt_LT from './langs/lt_LT';
import lv_LV from './langs/lv_LV';
import mk_MK from './langs/mk_MK';
import ml_IN from './langs/ml_IN';
import mn_MN from './langs/mn_MN';
import ms_MY from './langs/ms_MY';
import my_MM from './langs/my_MM';
import nb_NO from './langs/nb_NO';
import ne_NP from './langs/ne_NP';
import nl_BE from './langs/nl_BE';
import nl_NL from './langs/nl_NL';
import pl_PL from './langs/pl_PL';
import pt_BR from './langs/pt_BR';
import pt_PT from './langs/pt_PT';
import ro_RO from './langs/ro_RO';
import ru_RU from './langs/ru_RU';
import si_LK from './langs/si_LK';
import sk_SK from './langs/sk_SK';
import sl_SI from './langs/sl_SI';
import sr_RS from './langs/sr_RS';
import sv_SE from './langs/sv_SE';
import ta_IN from './langs/ta_IN';
import th_TH from './langs/th_TH';
import tk_TK from './langs/tk_TK';
import tr_TR from './langs/tr_TR';
import uk_UA from './langs/uk_UA';
import ur_PK from './langs/ur_PK';
import vi_VN from './langs/vi_VN';
import zh_CN from './langs/zh_CN';
import zh_HK from './langs/zh_HK';
import zh_MO from './langs/zh_MO';
import zh_TW from './langs/zh_TW';

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
  kmr_IQ,
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
  zh_HK,
  zh_MO,
  zh_TW
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
