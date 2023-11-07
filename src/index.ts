#!/usr/bin/env node

/**
 * 入口文件
 * @description 入口文件，用于提供菜单选项
 * @author KwooShung
 * @module index
 * @createat 2023-11-02 15:00:00
 * @updateat 2023-11-03 10:42:20
 */

import semver from 'semver';

import { i18n, set as i18nSet } from './locales';
import { executeCommand, executeCommandWithLoading, getParam } from './command';
import revertToPreviousVersion from './revertToPreviousVersion';
import { readPackageJson, writePackageJson } from './packageJson';
import { questionCommon, questionVersionValidate, questionList, questionInput, questionPush } from './utils';

/**
 * 菜单：撤销指定版本
 * @description 三级 > 撤销指定版本，并询问是否保留更改
 * @returns {Promise<void>} 无返回值
 */
const revokeSpecificVersionMenu = async (): Promise<void> => {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.data.version;
  const { version: specificVersion } = await questionVersionValidate('input', 'version', 'menus.revokeSpecificVersion.prompt');
  const { retainChanges } = await questionCommon('confirm', 'retainChanges', `${i18n('menus.revokeSpecificVersion.retainChanges')}: v${currentVersion}`);
  const { confirmRevoke } = await questionCommon('confirm', 'confirmRevoke', i18n('menus.revokeSpecificVersion.confirm', currentVersion, specificVersion));

  if (confirmRevoke) {
    if (retainChanges) {
      // 如果保留更改，回退到指定版本的前一个提交，并更新 package.json 的版本号
      const command = `git reset v${specificVersion}~1 --hard && git push --force`;
      executeCommandWithLoading(command, i18n('loading.revokingVersion', specificVersion));
      revertToPreviousVersion(`v${specificVersion}~1`, packageJson);
    }

    // 删除本地和远程的标签
    const deleteTagCommand = `git tag -d v${specificVersion} && git push origin :refs/tags/v${specificVersion}`;
    executeCommandWithLoading(deleteTagCommand, i18n('loading.revokingVersion', specificVersion));
  } else {
    console.clear();
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

  const { confirmRevoke } = await questionCommon('confirm', 'confirmRevoke', i18n('menus.revokeCurrentVersion.confirm', currentVersion, previousVersion));

  if (confirmRevoke) {
    const { retainChanges } = await questionCommon('confirm', 'retainChanges', `${i18n('menus.revokeCurrentVersion.retainChanges')}: v${currentVersion}`);

    const command =
      (retainChanges ? `git tag -d v${currentVersion}` : `git reset --hard HEAD~1 && git push --force && git push origin :refs/tags/v${currentVersion}`) +
      (retainChanges ? ` && git push --force && git push origin :refs/tags/v${currentVersion}` : ``);
    executeCommandWithLoading(command, i18n('loading.revokingCurrent'));

    // 如果保留更改，则需要将 package.json 中的版本号更新为先前的版本
    if (retainChanges) {
      revertToPreviousVersion('HEAD~1', packageJsonInfo);
    }
  } else {
    console.clear();
    revokeVersionMenu();
  }
};
/**
 * 菜单：撤销版本
 * @description 二级 > 撤销版本
 * @returns {Promise<void>} 无返回值
 */
const revokeVersionMenu = async (): Promise<void> => {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.data.version;
  const { revokeType } = await questionList('revokeType', 'menus.revoke.prompt', [
    { name: `1. ${i18n('menus.revoke.currentVersion')}: v${currentVersion}`, value: '1' },
    { name: `2. ${i18n('menus.revoke.specificVersion')}`, value: '2' },
    { name: `3. ${i18n('common.backToMenu')}`, value: '3' }
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
  const { version: forcedVersion } = await questionVersionValidate('input', 'version', 'menus.specificVersion.prompt');
  const { confirmSpecificVersion } = await questionCommon('confirm', 'confirmSpecificVersion', i18n('menus.specificVersion.confirm', currentVersion, forcedVersion));

  if (confirmSpecificVersion) {
    const shouldPush = await questionPush('menus.upgrade.confirmPush');
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

  const { upgradeType } = await questionList('upgradeType', 'menus.upgrade.prompt', [
    { name: `1. ${i18n('version.major')}: v${currentVersion} > v${nextMajorVersion}`, value: '1' },
    { name: `2. ${i18n('version.minor')}: v${currentVersion} > v${nextMinorVersion}`, value: '2' },
    { name: `3. ${i18n('version.patch')}: v${currentVersion} > v${nextPatchVersion}`, value: '3' },
    { name: `4. ${i18n('common.backToMenu')}`, value: '4' }
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

  const shouldPush = await questionPush('menus.upgrade.confirmPush');
  const params = getParam('cmd');
  const command = `npx standard-version --verbose --release-as ${releaseType}${params && ` && ${params}`}${shouldPush ? ' && git push --follow-tags' : ''}`;
  executeCommandWithLoading(command, i18n('loading.upgradingVersion', i18n(`version.${releaseType}`), currentVersion, nextVersion));
};

/**
 * 菜单：发布版本
 * @description 一级 > 发布版本
 * @returns {Promise<void>} 无返回值
 */
const publishVersionMenu = async (): Promise<void> => {
  console.clear();
  i18nSet(getParam('locale'));

  const { action } = await questionList('action', 'menus.main.prompt', [
    { value: '1', name: i18n('menus.main.upgradeVersion') },
    { value: '2', name: i18n('menus.main.specificVersion') },
    { value: '3', name: i18n('menus.main.revokeVersion') },
    { value: '4', name: i18n('common.exit') }
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

  const { initialVersion } = await questionInput('initialVersion', i18n('version.tips.enterInitialVersion'), '0.0.1');

  const packageJson = readPackageJson();
  packageJson.data.version = initialVersion;
  writePackageJson(packageJson);

  if (await questionPush('menus.upgrade.confirmPush')) {
    executeCommandWithLoading(`npx standard-version --verbose --release-as ${initialVersion} && git push --follow-tags`, i18n('loading.forcingVersion', initialVersion));
  } else {
    executeCommandWithLoading(`npx standard-version --verbose --release-as ${initialVersion}`, i18n('loading.forcingVersion', initialVersion));
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
