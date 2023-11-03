<div align="center">

It is based on [standard version](https://github.com/conventional-changelog/standard-version/)The help tool can provide simple menu selection in the console.

![GitHub License](https://img.shields.io/github/license/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/standard-version-helper?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![NPM Version](https://img.shields.io/npm/v/@kwooshung/standard-version-helper?labelColor=272e3b&color=165dff)
![Npm.js Downloads/Week](https://img.shields.io/npm/dw/%40kwooshung%2Fstandard-version-helper?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)
[![Github CI/CD](https://github.com/kwooshung/standard-version-helper/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/standard-version-helper/actions/)
[![Coverage](https://img.shields.io/coveralls/github/kwooshung/standard-version-helper?label=Coverage&labelColor=272e3b&color=00b42A)](https://coveralls.io/github/kwooshung/standard-version-helper/)
[![Maintainability](https://api.codeclimate.com/v1/badges/325d0881b1ca19165d35/maintainability)](https://codeclimate.com/github/kwooshung/standard-version-helper/maintainability/)
[![Gitee Repo](https://img.shields.io/badge/Gitee-standard--version--helper-165dff?logo=gitee)](https://gitee.com/kwooshung/standard-version-helper/)

<p align="center">
    <span>English</span> | 
    <a href="README.zh-CN.md">中文</a>
</p>
</div>

## Why?

- I am tired of command line version upgrades and have to remember commands, parameters, and various rules every time. These are all things I don't want to remember. I just want to focus on business development, so I developed this tool.
- Since there is a 'standard version', why not have another help tool?

## Features

- **No need to remember** commands
- **No need to remember** parameters
- **No need to remember** Semantic version number
- **No need to remember** version number rules
- **No need to remember** version number cancellation rules
- **No need to remember** version number enforcement rules
- **No need to remember** Version number minor rules
- **No need to remember** version number patch rules
- You are not afraid of making mistakes in version number, there are verification prompts
- Newbie friendly
- Improve veteran work efficiency

## Menu Preivew

Assume that your current project version is: `v2.0.0`;

- The following menu demonstrates all processes, that is, what each branch process should display;
- In actual use, it will not be expanded as shown below, but whatever you select will be displayed, just like you use other command line menus.

```
- main menu
  ├── Upgraded version
  │ ├── Which version do you want to undo?
  │ ├── Major version: v2.0.0 > 3.0.0
  │ │ └── Push to the warehouse?
  │ │ │ ├── Y (default): npx standard-version --release-as major && --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as major
  │ ├── Minor version: v2.0.0 > 2.1.0
  │ │ └── Push to the warehouse?
  │ │ │ ├── Y (default): npx standard-version --release-as minor && git push --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as minor
  │ ├── Patch version: v2.0.0 > 2.0.1
  │ │ └── Push to the warehouse?
  │ │ │ ├── Y (default): npx standard-version --release-as patch && git push --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as patch
  │ └── Return
  ├──Specified version
  │ ├── Please enter the version number: 4.0.0
  │ │ └── Your current version number is: v2.0.0, confirm to enter the specified version number: v4.0.0 Yes
  │ │ └── Push to the warehouse?
  │ │ │ ├── Y (default): npx standard-version --release-as 4.0.0 && git push --follow-tags origin master
  │ │ │ └── N：npx standard-version --release-as 4.0.0
  ├── Cancel version
  │ ├── Which version do you want to undo?
  │ ├── Current version
  │ │ ├── Keep changes to the file and only undo the version number?
  │ │ │ ├── Yes
  │ │ │ │ └── Do you want to update the version number in the package.json file: v2.0.0 to the revoked version number v1.9.9?
  │ │ │ │ ├── Yes
  │ │ │ │ │ └── The current version is updated to: 1.9.9
  │ │ │ │ └── No
  │ │ │ └── No
  │ ├── Cancel the specified version
  │ │ ├── Enter the version number to be revoked: 1.5.0
  │ │ │ ├── Keep changes to the file and only undo the version number?
  │ │ │ │ ├── Yes
  │ │ │ │ │ └── Do you want to update the version number in the package.json file: v2.0.0 to the revoked version number v1.4.9?
  │ │ │ │ │ ├── Yes
  │ │ │ │ │ │ └── The current version is updated to: 1.4.9
  │ │ │ │ │ └── No
  │ │ │ │ └── No
  │ └── Return
  └── Exit
```

## Install

### npm

```bash
npm install standard-version @kwooshung/standard-version-helper --save-dev
```

### yarn

```bash
yarn add standard-version @kwooshung/standard-version-helper -D
```

### pnpm

```bash
pnpm add standard-version @kwooshung/standard-version-helper -D
```

## recommend

### Add the `scripts` script in `package.json` as follows:

```json
{
  "scripts": {
    "release": "standard-version-helper"
  }
}
```

### Two parameters are supported: `--locale` and `--cmd`:

#### `--locale`

- Default is Simplified Chinese
- Change the language, such as English `en_US` or `--locale en_US`, as shown in the code below
- For other languages, Google Translate is used. Its accuracy cannot be guaranteed. If there are any inaccuracies in the translation, please submit `issue` & `PR`
- See the table below for the list of languages

```json
{
  "scripts": {
    "release": "standard-version-helper --locale en_US"
  }
}
```

#### `--cmd`

> You can add some custom commands, such as `ls -l`, this command

```json
{
  "scripts": {
    "release": "standard-version-helper --cmd ls -l"
  }
}
```

#### Comprehensive usage

```json
{
  "scripts": {
    "release": "standard-version-helper --locale en_US --cmd ls -l"
  }
}
```

#### Version number support rules are as follows:

Verified version number regular format: `/^(\d+)\.(\d+)\.(\d+)(?:-([\w-]+(?:\.[\w-]+)*))?(?:\+([\w-]+(?:\.[\w-]+)*))?$/`

- 0.0.1
- 0.1.2
- 1.0.0-alpha
- 1.0.0-beta
- 1.0.0-alpha.1
- 1.0.0-beta.2
- 1.0.0-rc.1
- 1.0.0+001
- 1.0.0+20130313144700
- 1.0.0-alpha+001
- 1.0.0-alpha.1+001
- 2.1.0-rc.2+build.5

## Supported languages

| 语言                            | 代码   |
| ------------------------------- | ------ |
| Arabic                          | ar_EG  |
| Azerbaijani                     | az_AZ  |
| Bulgarian                       | bg_BG  |
| Bengali (Bangladesh)            | bn_BD  |
| Belarusian                      | by_BY  |
| Catalan                         | ca_ES  |
| Czech                           | cs_CZ  |
| Danish                          | da_DK  |
| German                          | de_DE  |
| Greek                           | el_GR  |
| English                         | en_GB  |
| English (US)                    | en_US  |
| Spanish                         | es_ES  |
| Basque                          | eu_ES  |
| Estonian                        | et_EE  |
| Persian                         | fa_IR  |
| Finnish                         | fi_FI  |
| French (Belgium)                | fr_BE  |
| French (Canada)                 | fr_CA  |
| French (France)                 | fr_FR  |
| Irish                           | ga_IE  |
| Galician (Spain)                | gl_ES  |
| Hebrew                          | he_IL  |
| Hindi                           | hi_IN  |
| Croatian                        | hr_HR  |
| Hungarian                       | hu_HU  |
| Armenian                        | hy_AM  |
| Indonesian                      | id_ID  |
| Italian                         | it_IT  |
| Icelandic                       | is_IS  |
| Japanese                        | ja_JP  |
| Georgian                        | ka_GE  |
| Khmer                           | km_KH  |
| Northern Kurdish                | kmr_IQ |
| Kannada                         | kn_IN  |
| Kazakh                          | kk_KZ  |
| Korean/Korean                   | ko_KR  |
| Lithuanian                      | lt_LT  |
| Latvian                         | lv_LV  |
| Macedonian                      | mk_MK  |
| Malayalam                       | ml_IN  |
| Mongolian                       | mn_MN  |
| Malay (Malaysia)                | ms_MY  |
| Burmese                         | my_MM  |
| Norwegian                       | nb_NO  |
| Nepali                          | ne_NP  |
| Dutch (Belgium)                 | nl_BE  |
| Dutch                           | nl_NL  |
| Polish                          | pl_PL  |
| Portuguese (Brazil)             | pt_BR  |
| Portuguese                      | pt_PT  |
| Romanian                        | ro_RO  |
| Russian                         | ru_RU  |
| Sinhala                         | si_LK  |
| Slovak                          | sk_SK  |
| Serbian                         | sr_RS  |
| Slovenian                       | sl_SI  |
| Swedish                         | sv_SE  |
| Tamil                           | ta_IN  |
| Thai                            | th_TH  |
| Turkish                         | tr_TR  |
| Turkmen                         | tk_TK  |
| Urdu (Pakistan)                 | ur_PK  |
| Ukrainian                       | uk_UA  |
| Vietnamese                      | vi_VN  |
| Simplified Chinese              | zh_CN  |
| Traditional Chinese (Hong Kong) | zh_HK  |
| Traditional Chinese (Macau)     | zh_MO  |
| Traditional Chinese (Taiwan)    | zh_TW  |

## Open source projects used

> Thanks to the project authors for their selfless contributions to the open source community, making our work easier! ! !

- [standard-version：A tool to automatically manage versions and generate CHANGELOG files that comply with agreed submission standards.](https://github.com/conventional-changelog/standard-version)
- [semver：A library that implements semantic versioning specifications and provides version number parsing, comparison and satisfaction detection functions.](https://github.com/semver/semver)
- [detect-indent：A useful library that can intelligently detect and infer the indentation style of given text.](https://github.com/sindresorhus/detect-indent)
- [inquirer：A powerful, user-friendly command line interface interaction library for creating interactive command line user interfaces.](https://github.com/SBoudrias/Inquirer.js)
- [ora：A lightweight and elegant command line loading indicator (spinner) used to display loading status on the command line.](https://github.com/sindresorhus/ora)
- [Translate tools：A powerful translation project](https://github.com/translate-tools/core)

## LICENSE

[MIT](LICENSE)
