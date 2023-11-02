# standard-version-helper

一个standard-version的帮助工具，可以在控制台中提供简单的菜单选择。

- 主菜单
  ├── 升级版本
  │ ├── 主要版本
  │ │ └── 当前版本更新为：3.0.0
  │ ├── 次要版本
  │ │ └── 当前版本更新为：2.1.0
  │ ├── 补丁版本
  │ │ └── 当前版本更新为：2.0.1
  │ └── 返回上一级
  ├── 强制版本
  │ ├── 输入版本号: 1.5.0
  │ │ └── 确认强制版本号
  │ │ └── 当前版本更新为：1.5.0
  ├── 撤销版本
  │ ├── 撤销当前版本
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
  │ │ │ └── 确认撤销
  │ │ │ └── 是否将 package.json 文件中的版本号：v2.0.0 更新为撤销后的版本号 v1.4.9？
  │ │ │ ├── 是
  │ │ │ │ └── 当前版本更新为：1.4.9
  │ │ │ └── 否
  │ └── 返回上一级
  └── 退出

蒙古族 - Mongolian
藏族 - Tibetan
维吾尔族 - Uighur
哈萨克族 - Kazakh
柯尔克孜族 - Kyrgyz
朝鲜族 - Korean
彝族 - Yi
傣族 - Dai
拉祜族 - Lahu
景颇族 - Jingpo
锡伯族 - Xibo
俄罗斯族 - Russian
