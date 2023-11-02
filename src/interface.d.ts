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
