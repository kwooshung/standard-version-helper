#!/usr/bin/env node

import semver from 'semver';
import inquirer from 'inquirer';

import { i18n, set as i18nSet } from './locales';
import { executeCommand, executeCommandWithLoading, getParam } from './command';
import revertToPreviousVersion from './revertToPreviousVersion';
import { readPackageJson, writePackageJson } from './packageJson';

/**
 * 验证版本号输入内容
 * @description 验证版本号输入内容是否符合语义版本规范
 * @param {string} input 输入内容
 * @returns {boolean | string} 验证结果
 */
const versionValidate = (input) => {
  const semverRegex = /^(\d+)\.(\d+)\.(\d+)(?:-([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))?(?:\+([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))?$/;
  if (semverRegex.test(input)) {
    return true;
  }

  return i18n(
    'version.tips.error',
    '\n\t0.0.1\n\t1.2.3\n\t1.0.0-alpha\n\t1.0.0-beta\n\t1.0.0-alpha.1\n\t1.0.0-beta.2\n\t1.0.0-rc.1\n\t1.0.0+001\n\t1.0.0+20130313144700\n\t1.0.0-alpha+001\n\t1.0.0-alpha.1+001\n\t2.1.0-rc.2+build.5'
  );
};

/**
 * 菜单：撤销指定版本
 * @description 三级 > 撤销指定版本，并询问是否保留更改
 * @returns {Promise<void>} 无返回值
 */
const revokeSpecificVersionMenu = async (): Promise<void> => {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.data.version;

  const specificVersion = await inquirer.prompt([
    {
      type: 'input',
      name: 'version',
      message: i18n('menus.revokeSpecificVersion.prompt'),
      validate: versionValidate
    }
  ]);

  const { retainChanges } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'retainChanges',
      message: `${i18n('menus.revokeSpecificVersion.retainChanges')}: v${currentVersion}`
    }
  ]);

  const { confirmRevoke } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmRevoke',
      message: i18n('menus.revokeSpecificVersion.confirm', currentVersion, specificVersion.version)
    }
  ]);

  if (confirmRevoke) {
    const command = (retainChanges ? `git tag -d v${currentVersion}` : `git reset --hard~1`) + ` && git push --force && git push origin :refs/tags/v${specificVersion.version}`;
    executeCommandWithLoading(command, i18n('loading.revokingVersion', specificVersion.version));

    // 如果保留更改，则需要将 package.json 中的版本号更新为指定版本的前一个版本
    if (retainChanges) {
      revertToPreviousVersion(`v${specificVersion.version}~1`, packageJson);
    }
  } else {
    await revokeVersionMenu();
  }
};

/**
 * 菜单：撤销当前版本
 * @description 三级 > 撤销当前版本，并询问是否保留更改
 * @returns {Promise<void>} 无返回值
 */
const revokeCurrentVersionMenu = async (): Promise<void> => {
  const packageJsonInfo = readPackageJson();
  const currentVersion = packageJsonInfo.data.version;

  const previousCommitPackageJsonBuffer = executeCommand(`git show HEAD~1:package.json`);
  const previousCommitPackageJson = JSON.parse(previousCommitPackageJsonBuffer.toString());
  const previousVersion = previousCommitPackageJson.version;

  if (typeof currentVersion !== 'string') {
    console.error(i18n('version.tips.invalidVersionField'));
    return;
  }

  const { retainChanges } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'retainChanges',
      message: `${i18n('menus.revokeCurrentVersion.prompt')}: v${currentVersion} > v${previousVersion}`
    }
  ]);

  const command = (retainChanges ? `git tag -d v${currentVersion}` : `git reset --hard~1 && `) + `git push --force && git push origin :refs/tags/v${previousVersion}`;
  executeCommandWithLoading(command, i18n('loading.revokingCurrent'));

  // 如果保留更改，则需要将 package.json 中的版本号更新为先前的版本
  if (retainChanges) {
    revertToPreviousVersion('HEAD~1', packageJsonInfo);
  }
};

/**
 * 菜单：撤销版本
 * @description 二级 > 撤销版本
 * @returns {Promise<void>} 无返回值
 */
const revokeVersionMenu = async (): Promise<void> => {
  const { revokeType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'revokeType',
      message: i18n('menus.revoke.prompt'),
      choices: [
        { name: `1. ${i18n('menus.revoke.currentVersion')}`, value: '1' },
        { name: `2. ${i18n('menus.revoke.specificVersion')}`, value: '2' },
        { name: `3. ${i18n('common.backToMenu')}`, value: '3' }
      ]
    }
  ]);

  switch (revokeType) {
    case '1':
      await revokeCurrentVersionMenu();
      break;
    case '2':
      await revokeSpecificVersionMenu();
      break;
    case '3':
      await mainMenu();
      return;
  }
};

/**
 * 菜单：指定版本
 * @description 二级 > 指定版本
 * @returns {Promise<void>} 无返回值
 */
const specificVersionMenu = async (): Promise<void> => {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.data.version;

  const { forcedVersion } = await inquirer.prompt([
    {
      type: 'input',
      name: 'forcedVersion',
      message: i18n('menus.specificVersion.prompt'),
      validate: versionValidate
    }
  ]);

  const { confirmSpecificVersion } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmSpecificVersion',
      message: i18n('menus.specificVersion.confirm', currentVersion, forcedVersion)
    }
  ]);

  if (confirmSpecificVersion) {
    const { shouldPush } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldPush',
        message: i18n('menus.upgrade.confirmPush')
      }
    ]);

    packageJson.data.version = forcedVersion;
    writePackageJson(packageJson);
    executeCommandWithLoading(`npx standard-version --release-as ${forcedVersion}${shouldPush ? ' && git push --follow-tags' : ''}`, i18n('loading.specificVersion', forcedVersion));
  } else {
    await mainMenu();
  }
};

/**
 * 菜单：升级版本
 * @description 二级 > 升级版本
 * @returns {Promise<void>} 无返回值
 */
const upgradeVersionMenu = async (): Promise<void> => {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.data.version;
  const nextMajorVersion = semver.inc(currentVersion, 'major');
  const nextMinorVersion = semver.inc(currentVersion, 'minor');
  const nextPatchVersion = semver.inc(currentVersion, 'patch');

  if (!nextMajorVersion || !nextMinorVersion || !nextPatchVersion) {
    console.error(i18n('version.tips.failedToIncrement'));
    return;
  }

  const prompt = i18n('menus.upgrade.prompt');

  const { upgradeType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'upgradeType',
      message: prompt,
      choices: [
        { name: `1. ${i18n('version.major')}: v${currentVersion} > v${nextMajorVersion}`, value: '1' },
        { name: `2. ${i18n('version.minor')}: v${currentVersion} > v${nextMinorVersion}`, value: '2' },
        { name: `3. ${i18n('version.patch')}: v${currentVersion} > v${nextPatchVersion}`, value: '3' },
        { name: `4. ${i18n('common.backToMenu')}`, value: '4' }
      ]
    }
  ]);

  let releaseType: string;
  let nextVersion: string;
  switch (upgradeType) {
    case '1':
      releaseType = 'major';
      nextVersion = nextMajorVersion;
      break;
    case '2':
      releaseType = 'minor';
      nextVersion = nextMinorVersion;
      break;
    case '3':
      releaseType = 'patch';
      nextVersion = nextPatchVersion;
      break;
    case '4':
      await mainMenu();
      return;
  }

  const { shouldPush } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldPush',
      message: i18n('menus.upgrade.confirmPush')
    }
  ]);

  const params = getParam('cmds');
  const command = `npx standard-version --release-as ${releaseType}${params && ` && ${params}`}${shouldPush ? ' && git push --follow-tags' : ''}`;
  executeCommandWithLoading(command, i18n('loading.upgradingVersion', i18n(`version.${releaseType}`), nextVersion));
};

/**
 * 菜单：发布版本
 * @description 一级 > 发布版本
 * @returns {Promise<void>} 无返回值
 */
const publishVersionMenu = async (): Promise<void> => {
  console.clear();
  i18nSet(getParam('locale'));
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: i18n('menus.main.prompt'),
      choices: [
        { value: '1', name: i18n('menus.main.upgradeVersion') },
        { value: '2', name: i18n('menus.main.specificVersion') },
        { value: '3', name: i18n('menus.main.revokeVersion') },
        { value: '4', name: i18n('common.exit') }
      ]
    }
  ]);

  switch (action) {
    case '1':
      await upgradeVersionMenu();
      break;
    case '2':
      await specificVersionMenu();
      break;
    case '3':
      await revokeVersionMenu();
      break;
    case '4':
      console.clear();
      return;
  }
};

/**
 * 首次发布版本
 * @description 首次发布版本，需要手动输入初始版本号，或者直接回车使用默认版本号 0.0.1
 * @returns {Promise<void>} 无返回值
 */
const firstTimePublish = async (): Promise<void> => {
  console.clear();
  const { initialVersion } = await inquirer.prompt([
    {
      type: 'input',
      name: 'initialVersion',
      message: i18n('version.tips.enterInitialVersion'),
      default: '0.0.1'
    }
  ]);

  const packageJson = readPackageJson();
  packageJson.data.version = initialVersion;
  writePackageJson(packageJson);

  const { shouldPush } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldPush',
      message: i18n('menus.upgrade.confirmPush')
    }
  ]);

  if (shouldPush) {
    executeCommandWithLoading(`npx standard-version --release-as ${initialVersion} && git push --follow-tags`, i18n('loading.forcingVersion', initialVersion));
  } else {
    executeCommandWithLoading(`npx standard-version --release-as ${initialVersion}`, i18n('loading.forcingVersion', initialVersion));
  }
};

/**
 * 菜单：入口
 * @description 一级 > 入口 > 发布版本，如果能够获取到 tag，则说明已经发布过版本，否则说明是首次发布，则调用 firstTimePublish
 * @returns {Promise<void>} 无返回值
 */
const mainMenu = async (): Promise<void> => {
  // 如果能够获取到 tag，则说明已经发布过版本
  if (executeCommandWithLoading('git tag', i18n('loading.revokingCurrent')).toString().trim()) {
    publishVersionMenu();
  }
  // 否则说明是首次发布
  else {
    firstTimePublish();
  }
};

/**
 * 入口
 * @description 入口，设置语言并调用 main
 * @returns {void} 无返回值
 */
(() => {
  i18nSet(getParam('locale'));
  mainMenu();
})();
