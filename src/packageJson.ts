import fs from 'fs';
import detectIndent from 'detect-indent';
import { IPackageJson } from './interface';

/**
 * package.json 文件路径
 */
const packageJsonPath = './package.json';

/**
 * 读取 package.json 文件
 * @description 读取 package.json 文件内容，并返回 package.json 文件内容 和 缩进
 * @returns {object} package.json 文件内容
 */
const readPackageJson = (): IPackageJson => {
  const content = fs.readFileSync(packageJsonPath, 'utf-8');

  return {
    data: JSON.parse(content),
    indentation: detectIndent(content).indent
  };
};

/**
 * 写入 package.json 文件
 * @description 将 package.json 文件内容写入 package.json 文件
 * @returns {void} 无返回值
 */
const writePackageJson = (values: IPackageJson): void => {
  const jsonContent = JSON.stringify(values.data, null, values.indentation);
  fs.writeFileSync(packageJsonPath, jsonContent);
};

export { readPackageJson, writePackageJson };
