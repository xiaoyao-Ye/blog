# 更快速的 console.log

[项目地址](https://github.com/xiaoyao-Ye/vs-quick-log)

<br>

一个比较实用的 vscode 插件, 用于快速创建调试`console.log`, 目前已有900+下载量, 不妨试试?

[![version](https://img.shields.io/visual-studio-marketplace/v/ghosteye.vs-quick-log?color=%232ba1f1&logo=visual-studio-code&logoColor=%232ba1f1)](https://marketplace.visualstudio.com/items?itemName=ghosteye.vs-quick-log)
[![installs](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/ghosteye.vs-quick-log?label=Installs)](https://marketplace.visualstudio.com/items?itemName=ghosteye.vs-quick-log)
[![star](https://img.shields.io/github/stars/xiaoyao-Ye/vs-quick-log)](https://github.com/xiaoyao-Ye/vs-quick-log/stargazers)

## Why?

写代码调试时经常需要输入 `log` 生成 `console.log('|', |)` 的代码片段然后输入需要打印的内容。这太麻烦了！

## Features

目前已有的同类型扩展需要将光标移动到`变量附近`, 本插件的`优势是光标在当前行或者下一行`就能自己识别打印, 不需要刻意移动光标

![Guide.png](https://s2.loli.net/2023/10/31/kMy7bhTZgGOaVYw.png)

使用时将光标移动至打印目标所在行(或打印目标的下一行)

- `Ctrl + Shift + L` 创建 `console.log`
  - ✨ 可打印 if 语句中的条件判断
  - ✨ 可打印函数参数
  - ✨ 可打印变量
  - ✨ 支持选中大块区域批量打印
  - ✨ 设置中可配置打印当前文件名称(多文件打印同变量名称时可快速定位)
  - ✨ ...
- `Ctrl + Shift + DELETE` 删除该插件创建的 `console.log`

> 支持 `ts` `tsx` `js` `jsx` `vue` `html` 等文件内使用。🍺enjoying!

<style>
  p > a {
    float: left;
    margin-right: 10px;
  }
</style>
