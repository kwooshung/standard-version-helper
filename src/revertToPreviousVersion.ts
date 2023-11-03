/**
 * 回滚版本
 * @description 回滚版本，并询问是否更新 package.json 文件
 * @author KwooShung
 * @module revertToPreviousVersion
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-01 13:21:33
 */
import { i18n } from './locales';
import { IPackageJson } from './interface';
import { executeCommand } from './command';
import { questionCommon } from './utils';
import { readPackageJson, writePackageJson } from './packageJson';

/**
 * 回滚版本
 * @description 回滚版本，并询问是否更新 package.json 文件
 * @param {string} reference 要回滚到的引用
 * @param {IPackageJson} packageJsonRef package.json 文件的引用
 * @returns {void} 无返回值
 */
const revertToPreviousVersion = async (reference: string, packageJsonRef: IPackageJson): Promise<void> => {
  const previousCommitPackageJsonBuffer = executeCommand(`git show ${reference}:package.json`);
  const previousCommitPackageJson = JSON.parse(previousCommitPackageJsonBuffer.toString());
  const previousVersion = previousCommitPackageJson.version;

  if (previousVersion) {
    const packageJsonInfo = readPackageJson();
    const currentVersion = packageJsonInfo.data.version;

    const shouldUpdate = await questionCommon('confirm', 'shouldUpdate', i18n('menus.revertToPreviousVersion.updatePackageJson', currentVersion, previousVersion), undefined, undefined, true);

    if (shouldUpdate.shouldUpdate) {
      packageJsonRef.data.version = previousVersion;
      writePackageJson(packageJsonRef);
    }
  } else {
    console.error(i18n('menus.revertToPreviousVersion.failedToRetrieve'));
  }
};

export default revertToPreviousVersion;
