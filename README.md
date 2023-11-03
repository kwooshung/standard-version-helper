# standard-version-helper

![GitHub License](https://img.shields.io/github/license/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![Github CI/CD](https://github.com/kwooshung/standard-version-helper/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/coveralls/github/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
[![Maintainability](https://api.codeclimate.com/v1/badges/325d0881b1ca19165d35/maintainability)](https://codeclimate.com/github/kwooshung/standard-version-helper/maintainability)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/standard-version-helper?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![Npm.js Downloads/Week](https://img.shields.io/npm/dw/%40kwooshung%2Fstandard-version-helper?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)
![NPM Version](https://img.shields.io/npm/v/@kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
[![Gitee Repo](https://img.shields.io/badge/Gitee-standard--version--helper-165dff?logo=gitee)](https://gitee.com/kwooshung/standard-version-helper)

## 介绍

`standard-version-helper` 是一个基于 [standard-version](https://github.com/conventional-changelog/standard-version/) 的帮助工具，可以在控制台中提供简单的菜单选择。

## 为什么开发它？

- 我厌倦了命令行式的版本升级，每次都要记住命令，记住参数，记住各种规则，这些都是我不想记住的，我只想专注于业务开发，所以我开发了这个工具。
- 既然存在 `standard-version`，为何不能再有一个帮助工具呢？

## 特点

- **无需记忆** 命令
- **无需记忆** 参数
- **无需记忆** 语义化版本号
- **无需记忆** 版本号规则
- **无需记忆** 版本号撤销规则
- **无需记忆** 版本号强制规则
- **无需记忆** 版本号次要规则
- **无需记忆** 版本号补丁规则
- 版本号不怕写错，有验证提示
- 对新手友好
- 提升老手工作效率

## 安装

### npm

```bash
npm install standard-version standard-version-helper --save-dev
```

### yarn

```bash
yarn add standard-version standard-version-helper -D
```

### pnpm

```bash
pnpm add standard-version standard-version-helper -D
```

## 菜单演示

假设您当前的项目版本是：`v2.0.0`；

- 以下菜单演示的是所有流程，即每个分支流程所应该显示的内容；
- 实际使用时，并不会像下方那样都展开，而是选择什么就显示什么，就像你使用其他的命令行菜单一样。

```
- 主菜单
  ├── 升级版本
  │ ├── 您打算撤销哪个版本？
  │ ├── 主要版本：v2.0.0 > 3.0.0
  │ │ └── 是否推送到仓库？
  │ │ │ ├── Y（默认）：npx standard-version --release-as major && --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as major
  │ ├── 次要版本：v2.0.0 > 2.1.0
  │ │ └── 是否推送到仓库？
  │ │ │ ├── Y（默认）：npx standard-version --release-as minor && git push --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as minor
  │ ├── 补丁版本：v2.0.0 > 2.0.1
  │ │ └── 是否推送到仓库？
  │ │ │ ├── Y（默认）：npx standard-version --release-as patch && git push --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as patch
  │ └── 返回
  ├── 指定版本
  │ ├── 请输入版本号: 4.0.0
  │ │ └── 你当前的版本号为：v2.0.0，确认打入指定版本号：v4.0.0 Yes
  │ │ └── 是否推送到仓库？
  │ │ │ ├── Y（默认）：npx standard-version --release-as 4.0.0 && git push --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as 4.0.0
  ├── 撤销版本
  │ ├── 您打算撤销哪个版本？
  │ ├── 当前版本
  │ │ ├── 保留对文件的更改，仅撤销版本号？
  │ │ │ ├── 是
  │ │ │ │ └── 是否将 package.json 文件中的版本号：v2.0.0 更新为撤销后的版本号 v1.9.9？
  │ │ │ │ ├── 是
  │ │ │ │ │ └── 当前版本更新为：1.9.9
  │ │ │ │ └── 否
  │ │ │ └── 否
  │ ├── 撤销指定版本
  │ │ ├── 输入要撤销的版本号: 1.5.0
  │ │ │ ├── 保留对文件的更改，仅撤销版本号？
  │ │ │ │ ├── 是
  │ │ │ │ │ └── 是否将 package.json 文件中的版本号：v2.0.0 更新为撤销后的版本号 v1.4.9？
  │ │ │ │ │ ├── 是
  │ │ │ │ │ │ └── 当前版本更新为：1.4.9
  │ │ │ │ │ └── 否
  │ │ │ │ └── 否
  │ └── 返回
  └── 退出
```
