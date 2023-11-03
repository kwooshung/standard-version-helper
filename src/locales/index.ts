/**
 * 语言包
 * @description 语言包模块，用于提供多语言支持
 * @author KwooShung
 * @module locales
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-01 13:21:33
 */

import zh_CN from './zh_CN.json';

// 创建一个映射对象，将语言代码映射到对应的语言包
const locales = {
  zh_CN
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
