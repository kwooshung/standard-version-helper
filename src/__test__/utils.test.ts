import inquirer from 'inquirer';

import { i18n } from '../locales';
import { versionValidate, questionCommon, questionVersionValidate, questionList, questionInput, questionPush } from '../utils';

// 模拟依赖项
jest.mock('inquirer', () => ({ prompt: jest.fn() }));
jest.mock('../locales', () => ({ i18n: jest.fn() }));

describe('versionValidate', () => {
  it('应该验证正确的语义版本号字符串', () => {
    const input = '1.0.0';
    expect(versionValidate(input)).toBe(true);
  });

  it('应该拒绝无效的语义版本号字符串', () => {
    (i18n as jest.MockedFunction<typeof i18n>).mockImplementationOnce((key, defaultValue) => defaultValue);

    const input = '1.0';
    expect(versionValidate(input)).toBe(
      '\n\t0.0.1\n\t1.2.3\n\t1.0.0-alpha\n\t1.0.0-beta\n\t1.0.0-alpha.1\n\t1.0.0-beta.2\n\t1.0.0-rc.1\n\t1.0.0+001\n\t1.0.0+20130313144700\n\t1.0.0-alpha+001\n\t1.0.0-alpha.1+001\n\t2.1.0-rc.2+build.5'
    );
  });
});

describe('questionCommon', () => {
  it('应该调用 inquirer.prompt', async () => {
    const mockPrompt = inquirer.prompt as jest.MockedFunction<typeof inquirer.prompt>;
    const type = 'input';
    const name = 'name';
    const message = 'message';

    await questionCommon(type, name, message);

    expect(mockPrompt).toHaveBeenCalledWith([{ type, name, message }]);
  });
});

describe('questionVersionValidate', () => {
  it('应该调用 questionCommon 并传递 versionValidate 作为验证函数', async () => {
    const spy = jest.spyOn(inquirer, 'prompt');
    const type = 'input';
    const name = 'version';
    const key = 'some.key';

    await questionVersionValidate(type, name, key);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('questionList', () => {
  it('应该调用 questionCommon 并传递正确的参数', async () => {
    const spy = jest.spyOn(inquirer, 'prompt');
    const name = 'choice';
    const key = 'some.key';
    const choices = ['choice1', 'choice2'];

    await questionList(name, key, choices);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('questionInput', () => {
  it('应该调用 questionCommon 并传递正确的参数', async () => {
    const spy = jest.spyOn(inquirer, 'prompt');
    const key = 'some.key';
    const message = 'Please input';
    const defaultValue = 'default';

    await questionInput(key, message, defaultValue);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('questionPush', () => {
  it('应该调用 questionCommon 并返回确认信息', async () => {
    (i18n as jest.MockedFunction<typeof i18n>).mockImplementationOnce((key) => key);
    const mockPrompt = inquirer.prompt as jest.MockedFunction<typeof inquirer.prompt>;
    mockPrompt.mockResolvedValue({ shouldPush: true });

    const key = 'some.key';
    const result = await questionPush(key);

    expect(result).toEqual(true);
    expect(mockPrompt).toHaveBeenCalledWith([{ type: 'confirm', name: 'shouldPush', message: key }]);
  });
});
