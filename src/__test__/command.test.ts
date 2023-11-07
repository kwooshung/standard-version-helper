/**
 * 命令行模块测试
 * @description 命令行模块测试，用于提供命令行模块测试支持
 * @author KwooShung
 * @module command.test
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-07 19:02:02
 */

import ora from 'ora';
import child_process from 'child_process';
import { executeCommand, executeCommandWithLoading, getParam } from '../command';

jest.mock('child_process', () => ({ execSync: jest.fn() }));

jest.mock('ora', () => {
  return jest.fn().mockReturnValue({
    start: jest.fn().mockReturnThis(),
    succeed: jest.fn().mockReturnThis(),
    fail: jest.fn().mockReturnThis()
  });
});

describe('工具函数测试', () => {
  describe('executeCommand 函数', () => {
    it('命令执行成功应返回结果', () => {
      (child_process.execSync as jest.Mock).mockReturnValueOnce(Buffer.from('Hello'));
    });

    it('命令执行失败应捕获错误', () => {
      const command = 'exit 1';
      (child_process.execSync as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Execution failed');
      });

      expect(() => executeCommand(command)).not.toThrow();
    });
  });

  describe('executeCommandWithLoading 函数', () => {
    beforeEach(() => {
      jest.clearAllMocks(); // 重置所有的模拟
    });

    const loadingMessage = '执行中...';

    it('命令执行成功应显示成功信息', () => {
      const command = 'echo Hello';
      (child_process.execSync as jest.Mock).mockReturnValueOnce(Buffer.from('Hello'));

      executeCommandWithLoading(command, loadingMessage);

      expect(ora).toHaveBeenCalledWith(loadingMessage);
      expect(ora().start).toHaveBeenCalled();
    });
  });

  describe('getParam 函数', () => {
    it('应返回正确的命令行参数值', () => {
      process.argv = ['node', 'script.js', '--key', 'value'];
      expect(getParam('key')).toBe('value');
    });

    it('如果参数不存在应返回空字符串', () => {
      process.argv = ['node', 'script.js'];
      expect(getParam('key')).toBe('');
    });

    it('如果参数值以"-"开始，应返回空字符串', () => {
      process.argv = ['node', 'script.js', '--key', '--value'];
      expect(getParam('key')).toBe('');
    });
  });
});
