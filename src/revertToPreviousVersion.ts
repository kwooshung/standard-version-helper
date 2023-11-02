import inquirer from 'inquirer';

import { i18n } from './locales';
import { IPackageJson } from './interface';
import { executeCommand } from './command';
import { readPackageJson, writePackageJson } from './packageJson';

/**
 * 回滚版本
 * @description 回滚版本，并询问是否更新 package.json 文件
 * @param {string} reference 要回滚到的引用
 * @param {IPackageJson} packageJsonRef package.json 文件的引用
 * @returns {void} 无返回值
 */
const revertToPreviousVersion = (reference: string, packageJsonRef: IPackageJson): void => {
  const previousCommitPackageJsonBuffer = executeCommand(`git show ${reference}:package.json`);
  const previousCommitPackageJson = JSON.parse(previousCommitPackageJsonBuffer.toString());
  const previousVersion = previousCommitPackageJson.version;

  if (previousVersion) {
    const packageJsonInfo = readPackageJson();
    const currentVersion = packageJsonInfo.data.version;

    const questions = [
      {
        type: 'confirm',
        name: 'shouldUpdate',
        message: i18n('menus.revertToPreviousVersion.updatePackageJson', currentVersion, previousVersion),
        default: true
      }
    ];

    inquirer.prompt(questions).then((answers) => {
      const { shouldUpdate } = answers;
      if (shouldUpdate) {
        packageJsonRef.data.version = previousVersion;
        writePackageJson(packageJsonRef);
      }
    });
  } else {
    console.error(i18n('menus.revertToPreviousVersion.failedToRetrieve'));
  }
};

export default revertToPreviousVersion;
