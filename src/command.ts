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
    return child_process.execSync(command, { stdio: 'inherit' });
    // return child_process.execSync(`echo "code: ${command}"`, { stdio: 'inherit' });
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
  try {
    const result = executeCommand(command);
    spinner.succeed(`${command} ... ${i18n('common.executionSucceeded')}`);
    return result || Buffer.from('');
  } catch (error) {
    spinner.fail(`${command} ... ${i18n('common.executionFailed')}`);
    return Buffer.from('');
  }
};

/**
 * 获取命令行参数
 * @description 获取命令行参数
 * @param {string} key 参数名
 * @returns {string} 参数值
 */
const getParam = (key: string): string => {
  const argIndex = process.argv.indexOf(`-${key}`);

  if (argIndex !== -1 && argIndex < process.argv.length - 1) {
    const potentialValue = process.argv[argIndex + 1];
    if (!potentialValue.startsWith('-')) {
      return potentialValue.toString();
    }
  }

  return '';
};

export { executeCommand, executeCommandWithLoading, getParam };
