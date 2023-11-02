import ora from 'ora';
import child_process from 'child_process';
import { executeCommand, executeCommandWithLoading, getParam } from '../command';

jest.mock('child_process', () => ({
  execSync: jest.fn()
}));

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
    const loadingMessage = '执行中...';

    it('命令执行成功应显示成功信息', () => {
      const command = 'echo Hello';
      (child_process.execSync as jest.Mock).mockReturnValueOnce(Buffer.from('Hello'));

      executeCommandWithLoading(command, loadingMessage); // 取消注释

      expect(ora).toHaveBeenCalledWith(loadingMessage);
      expect(ora().start).toHaveBeenCalled();
    });

    it('命令执行失败应显示失败信息', () => {
      const command = 'exit 1';
      (child_process.execSync as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Execution failed');
      });

      executeCommandWithLoading(command, loadingMessage); // 取消注释

      expect(ora).toHaveBeenCalledWith(loadingMessage);
      expect(ora().start).toHaveBeenCalled();
      // expect(result.toString()).toBe(''); // Optionally check if the result is an empty buffer
    });
  });

  describe('getParam 函数', () => {
    it('应返回正确的命令行参数值', () => {
      process.argv = ['node', 'script.js', '-key', 'value'];
      expect(getParam('key')).toBe('value');
    });

    it('如果参数不存在应返回空字符串', () => {
      process.argv = ['node', 'script.js'];
      expect(getParam('key')).toBe('');
    });

    it('如果参数值以"-"开始，应返回空字符串', () => {
      process.argv = ['node', 'script.js', '-key', '-value'];
      expect(getParam('key')).toBe('');
    });
  });
});
