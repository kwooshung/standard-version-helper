// 引入相关的模块和方法
import fs from 'fs';
import { readPackageJson, writePackageJson } from '../packageJson';

// 使用 jest.mock 来模拟 fs 模块
jest.mock('fs');

jest.mock('detect-indent', () => ({
  default: () => ({ indent: '  ' })
}));

// 开始编写测试用例
describe('测试 readPackageJson 和 writePackageJson 函数', () => {
  // 定义一个样例的 package.json 内容和缩进
  const mockPackageJsonContent = `{
  "name": "test",
  "version": "1.0.0"
}`;
  const mockPackageJson = {
    data: {
      name: 'test',
      version: '1.0.0'
    },
    indentation: '  '
  };

  // 在每个测试用例开始前，设置 fs.readFileSync 的模拟实现
  beforeEach(() => {
    (fs.readFileSync as jest.Mock).mockReturnValue(mockPackageJsonContent);
  });

  // 清除所有模拟实现和实例
  afterEach(() => {
    jest.clearAllMocks();
  });

  // 测试 readPackageJson 函数在遇到无效 JSON 时的表现
  it('在 package.json 文件包含无效 JSON 时应该抛出异常', () => {
    (fs.readFileSync as jest.Mock).mockReturnValue('invalid json');
    expect(() => readPackageJson()).toThrow(SyntaxError);
  });

  // 测试 writePackageJson 函数
  it('应该正确地将数据写回 package.json 文件', () => {
    // 设置 fs.writeFileSync 的模拟实现
    const writeFileSyncMock = (fs.writeFileSync as jest.Mock).mockImplementation();

    // 调用 writePackageJson
    writePackageJson(mockPackageJson);

    // 验证 fs.writeFileSync 是否被正确调用
    expect(writeFileSyncMock).toHaveBeenCalledWith('./package.json', JSON.stringify(mockPackageJson.data, null, mockPackageJson.indentation));
  });

  // 测试 writePackageJson 在遇到写入错误时的表现
  it('在写入 package.json 文件时遇到错误应该抛出异常', () => {
    (fs.writeFileSync as jest.Mock).mockImplementation(() => {
      throw new Error('write error');
    });

    expect(() => writePackageJson(mockPackageJson)).toThrow('write error');
  });

  // 测试 readPackageJson 在文件不存在时的表现
  it('在 package.json 文件不存在时应该抛出异常', () => {
    (fs.readFileSync as jest.Mock).mockImplementation(() => {
      throw new Error('file not found');
    });

    expect(() => readPackageJson()).toThrow('file not found');
  });

  // 你还可以继续添加更多的测试用例来覆盖其他的逻辑和边缘情况
});
