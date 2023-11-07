/**
 * 命令行模块
 * @description 命令行模块，用于提供命令行相关功能
 * @author KwooShung
 * @module command
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-01 13:21:33
 */

import ora from 'ora';
import child_process from 'child_process';

import { i18n } from './locales/index';

/**
 * 执行命令
 * @description 执行命令并返回结果，如果命令执行失败则退出进程
 * @param command 要执行的命令
 * @returns {Buffer} 命令执行结果
 */
const executeCommand = (command: string): Buffer => {
  try {
    return child_process.execSync(command);
    // return child_process.execSync(`echo "code: ${command}"`);
    // return Buffer.from('');
  } catch (error) {
    console.error(i18n('common.error', command));
    return Buffer.from('');
  }
};

/**
 * 执行命令并显示 loading
 * @description 执行命令并显示 loading，如果命令执行失败则退出进程
 * @param {string} command 要执行的命令
 * @param {string} loadingMessage loading 时显示的信息
 * @returns {Buffer} 命令执行结果
 */
const executeCommandWithLoading = (command: string, loadingMessage: string): Buffer => {
  const spinner = ora(loadingMessage).start();
  const result = executeCommand(command);
  spinner.succeed(`${command} ... ${i18n('common.executionSucceeded')}`);
  return result;
};

/**
 * 获取命令行参数
 * @description 获取命令行参数
 * @param {string} key 参数名
 * @returns {string} 参数值
 */
const getParam = (key: string): string => {
  const argIndex = process.argv.indexOf(`--${key}`);

  if (argIndex !== -1 && argIndex < process.argv.length - 1) {
    const args = process.argv.slice(argIndex + 1);
    let endOfValueIndex = args.findIndex((arg) => arg.startsWith('--'));

    if (endOfValueIndex === -1) {
      endOfValueIndex = args.length;
    }

    const value = args.slice(0, endOfValueIndex).join(' ');
    return value;
  }

  return '';
};

export { executeCommand, executeCommandWithLoading, getParam };
