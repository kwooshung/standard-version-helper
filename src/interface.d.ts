/**
 * 类型声明
 * @description 类型声明模块，用于提供类型声明支持
 * @author KwooShung
 * @module command
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-01 13:21:33
 */

/**
 * @interface IPackageJsonData
 * @description package.json 文件的数据结构
 */
interface IPackageJsonData {
  [key: string]: any;
}

/**
 * @interface IPackageJson
 * @description package.json 文件的数据结构 和 缩进
 */
interface IPackageJson {
  /**
   * @property {IPackageJsonData} data package.json 文件的内容
   */
  data: IPackageJsonData;
  /**
   * @property {string} indentation package.json 文件的缩进
   */
  indentation: string;
}

export { IPackageJson };
