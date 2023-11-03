/**
 * 工具函数
 * @description 工具函数，包含版本号验证、询问等，供其他模块调用
 * @author KwooShung
 * @module index
 * @createat 2023-11-03 09:49:12
 * @updateat 2023-11-03 09:49:12
 */

import inquirer, { DistinctChoice } from 'inquirer';

import { i18n } from './locales';

/**
 * 验证版本号输入内容
 * @description 验证版本号输入内容是否符合语义版本规范
 * @param {string} input 输入内容
 * @returns {boolean | string} 验证结果
 */
const versionValidate = (input: string): boolean | string => {
  const semverRegex = /^(\d+)\.(\d+)\.(\d+)(?:-([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))?(?:\+([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))?$/;
  if (semverRegex.test(input)) {
    return true;
  }

  return i18n(
    'version.tips.error',
    '\n\t0.0.1\n\t1.2.3\n\t1.0.0-alpha\n\t1.0.0-beta\n\t1.0.0-alpha.1\n\t1.0.0-beta.2\n\t1.0.0-rc.1\n\t1.0.0+001\n\t1.0.0+20130313144700\n\t1.0.0-alpha+001\n\t1.0.0-alpha.1+001\n\t2.1.0-rc.2+build.5'
  );
};

/**
 * 提问：通用
 * @description 提问，供其他模块调用
 * @param {string} type 问题类型
 * @param {string} name 问题名称
 * @param {string} message 问题内容
 * @param {Array<DistinctChoice<string>>} choices 问题选项
 * @param {(input: string) => string | boolean} validate 验证函数
 * @param {any} default 默认值
 * @returns {Promise<any>} 问题内容
 */
const questionCommon = async (type: string, name: string, message: string, choices?: Array<DistinctChoice>, validate?: (input: string) => string | boolean, _default?: any): Promise<any> => {
  const params = {
    type,
    name,
    message
  };

  validate && (params['validate'] = validate);
  choices && (params['choices'] = choices);
  _default && (params['default'] = _default);

  return await inquirer.prompt([params]);
};

/**
 * 提问，包含版本号验证
 * @description 提问，包含版本号验证，供其他模块调用
 * @param {string} type 问题类型
 * @param {string} name 问题名称
 * @param {string} key 询问内容，对应 i18n 中的 key
 * @returns {Promise<any>} 问题内容
 */
const questionVersionValidate = async (type: string, name: string, key: string): Promise<any> => await questionCommon(type, name, i18n(key), undefined, versionValidate);

/**
 * 提问：选项
 * @description 提问，供其他模块调用
 * @param {string} name 问题名称
 * @param {string} key 询问内容，对应 i18n 中的 key
 * @param {Array<DistinctChoice<string>>} choices 问题选项
 */
const questionList = async (name: string, key: string, choices: Array<DistinctChoice>): Promise<any> => await questionCommon('list', name, i18n(key), choices);

/**
 * 提问：输入
 * @description 提问，供其他模块调用
 * @param {string} key 询问内容，对应 i18n 中的 key
 * @param {string} message 问题内容
 * @param {any} _default 默认值
 * @returns {Promise<any>} 问题内容
 */
const questionInput = async (key: string, message: string, _default: string): Promise<any> => await questionCommon('input', key, message, undefined, undefined, _default);

/**
 * 询问是否推送
 * @description 询问是否继续
 * @param {string} key 询问内容，对应 i18n 中的 key
 * @returns {Promise<{ confirm: boolean }>} 询问结果
 */
const questionPush = async (key: string): Promise<{ confirm: boolean }> => {
  const { shouldPush } = await questionCommon('confirm', 'shouldPush', i18n(key));
  return shouldPush;
};

export { versionValidate, questionCommon, questionVersionValidate, questionList, questionInput, questionPush };
