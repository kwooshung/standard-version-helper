import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { GoogleTranslator } from '@translate-tools/core/translators/GoogleTranslator/index.js';

const translateDelay = 10; // 翻译延迟毫秒数，设定适当的停留时间

/**
 * 特殊语言
 */
const specialLangs = {
  zh_CN: '简体中文',
  zh_HK: '香港繁体',
  zh_MO: '澳门繁体',
  zh_TW: '台湾省繁体',
  zh_SG: '新加坡中文'
};

/**
 * 语言列表
 * @type {Array<[string, string]>}
 */
const languages = [
  ['ar_EG', '阿拉伯语'],
  ['az_AZ', '阿塞拜疆语'],
  ['bg_BG', '保加利亚语'],
  ['bn_BD', '孟加拉语（孟加拉国）'],
  ['by_BY', '白俄罗斯语'],
  ['ca_ES', '加泰罗尼亚语'],
  ['cs_CZ', '捷克语'],
  ['da_DK', '丹麦语'],
  ['de_DE', '德语'],
  ['el_GR', '希腊语'],
  ['en_GB', '英语'],
  ['en_US', '英语（美式）'],
  ['es_ES', '西班牙语'],
  ['eu_ES', '巴斯克语'],
  ['et_EE', '爱沙尼亚语'],
  ['fa_IR', '波斯语'],
  ['fi_FI', '芬兰语'],
  ['fr_BE', '法语（比利时）'],
  ['fr_CA', '法语（加拿大）'],
  ['fr_FR', '法语（法国）'],
  ['ga_IE', '爱尔兰语'],
  ['gl_ES', '加利西亚语（西班牙）'],
  ['he_IL', '希伯来语'],
  ['hi_IN', '印地语'],
  ['hr_HR', '克罗地亚语'],
  ['hu_HU', '匈牙利语'],
  ['hy_AM', '亚美尼亚语'],
  ['id_ID', '印度尼西亚语'],
  ['it_IT', '意大利语'],
  ['is_IS', '冰岛语'],
  ['ja_JP', '日语'],
  ['ka_GE', '格鲁吉亚语'],
  ['km_KH', '高棉语'],
  ['kmr_IQ', '北库尔德语'],
  ['kn_IN', '卡纳达语'],
  ['kk_KZ', '哈萨克语'],
  ['ko_KR', '韩语/朝鲜语'],
  ['lt_LT', '立陶宛语'],
  ['lv_LV', '拉脱维亚语'],
  ['mk_MK', '马其顿语'],
  ['ml_IN', '马拉雅拉姆语'],
  ['mn_MN', '蒙古语'],
  ['ms_MY', '马来语 (马来西亚)'],
  ['my_MM', '缅甸语'],
  ['nb_NO', '挪威语'],
  ['ne_NP', '尼泊尔语'],
  ['nl_BE', '荷兰语（比利时）'],
  ['nl_NL', '荷兰语'],
  ['pl_PL', '波兰语'],
  ['pt_BR', '葡萄牙语(巴西)'],
  ['pt_PT', '葡萄牙语'],
  ['ro_RO', '罗马尼亚语'],
  ['ru_RU', '俄罗斯语'],
  ['si_LK', '僧伽罗语'],
  ['sk_SK', '斯洛伐克语'],
  ['sr_RS', '塞尔维亚语'],
  ['sl_SI', '斯洛文尼亚语'],
  ['sv_SE', '瑞典语'],
  ['ta_IN', '泰米尔语'],
  ['th_TH', '泰语'],
  ['tr_TR', '土耳其语'],
  ['tk_TK', '土库曼'],
  ['ur_PK', '乌尔都语 (巴基斯坦)'],
  ['uk_UA', '乌克兰语'],
  ['vi_VN', '越南语']
];

/**
 * Google 翻译器
 * @type {GoogleTranslator}
 */
const translator = new GoogleTranslator();

/**
 * 停留时间
 * @type {number}
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 格式化日期
 * @returns {string} 格式化后的日期
 */
const formatDate = () => {
  const date = new Date();
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

/**
 * 标准化变量占位符
 * @param {string} text 要标准化的文本
 * @returns {string} 标准化后的文本
 */
const normalizeVariables = (text) => {
  // 保证变量占位符前后有空格
  text = text.replace(/ *v *\{(\d+)\}/gi, 'v{$1}');

  // 替换英文冒号后面，保留一个空格
  text = text.replace(/:v\{(\d+)\}/gi, ': v{$1}');

  // 使用 $1 > $5 来确保两个表达式之间有空格和大于符号
  text = text.replace(/(v\{.*\})([^\s>])?(>?)([^\s>])?(v\{.*\})/, '$1 > $5');

  return text;
};

/**
 * 翻译字符串
 * @description 递归翻译对象中的字符串，之所以单句翻译，是为了保证翻译结果的准确性
 * @param {string} fromLang 源语言
 * @param {string} toLang 目标语言
 * @param {object} obj 要翻译的对象
 * @param {number} translatedInx 已翻译的句子索引
 * @returns {Promise<void>} 翻译结果
 */
async function translateStrings(fromLang, toLang, obj, translatedInx = 0) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      const translatedString = await translator.translate(obj[key], fromLang, toLang);
      obj[key] = normalizeVariables(translatedString);
      await delay(translateDelay);
      console.log(`已翻译第${++translatedInx}句：${key} => ${obj[key]}`);
    } else if (typeof obj[key] === 'object') {
      translatedInx = await translateStrings(fromLang, toLang, obj[key], translatedInx);
    }
  }

  return translatedInx;
}

/**
 * 翻译 JSON 文件
 * @param {string} inputPath 输入路径
 * @param {string} outputPath 输出路径
 * @param {string} fromLang 源语言
 * @param {string} toLang 目标语言
 * @param {string} langName 语言名称
 * @returns {Promise<void>} 翻译结果
 */
async function translateJSON(inputPath, outputPath, fromLang, toLang, langName) {
  let content;

  if (fromLang === toLang || specialLangs[toLang]) {
    content = await fs.readFile(inputPath, 'utf8');
    langName = specialLangs[toLang] || langName;
  } else {
    const jsonContent = JSON.parse(await fs.readFile(inputPath, 'utf8'));
    const translatedContent = JSON.parse(JSON.stringify(jsonContent));

    await translateStrings(fromLang, toLang, translatedContent);
    content = JSON.stringify(translatedContent, null, 2);
  }

  const now = new Date();
  const createAt = formatDate(now);

  const tsContent = `/**
 * ${langName}：${toLang}
 * @description ${langName}语言包
 * @author KwooShung，Google Translate
 * @createat ${createAt}
 */

export default ${content};
`;

  const outputDir = path.dirname(outputPath);

  try {
    await fs.access(outputDir);
  } catch {
    await fs.mkdir(outputDir, { recursive: true });
  }

  await fs.writeFile(outputPath, tsContent, 'utf8');
}

/**
 * 使用 ESLint 格式化
 */
const formatJSONByESlint = () => {
  exec('pnpm eslint', (err) => {
    if (err) {
      console.error(`执行 eslint 时出错: ${err}`);
      return;
    }
  });
};

/**
 * 主函数
 */
(async () => {
  translator.translate('Test whether the translation is valid!', 'en_US', 'zh_CN').then(async (translate) => {
    console.log('测试结果：', translate);
    console.log('\n--------------------------------\n');

    const srcDir = path.resolve('src', 'locales', 'langs');
    await fs.rm(srcDir, { recursive: true, force: true });

    if (translate) {
      const templateDir = path.resolve('src', 'locales');
      const inputFile = 'zh_CN.json';
      const fromLang = 'zh_CN';

      for (const [langCode, langName] of languages) {
        console.log(`翻译中：${langName}...`);
        const outputPath = path.join(srcDir, `${langCode}.ts`);
        await translateJSON(path.join(templateDir, inputFile), outputPath, fromLang, langCode, langName);
        console.log(`翻译版本：${langName} 已保存至 ${outputPath}`);
        console.log('\n--------------------------------\n');
      }

      formatJSONByESlint();

      console.log('翻译完成！你应该手动处理【香港繁体（zh_HK），澳门繁体（zh_MO），台湾省繁体（zh_TW），新加坡中文（zh_SG）】语言包。');
    }
  });
})();
