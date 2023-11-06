# vscode

## 快捷键

| 快捷键           | 作用                                |
| ---------------- | ----------------------------------- |
| Ctrl + Shift + N | (new window) 新建 vscode 窗口       |
| Ctrl + Shift + W | (close window) 关闭窗口             |
| Ctrl + P         | (quick open) 快速打开               |
| Ctrl + Shift + P | (show command palette) 显示命令面板 |
| Ctrl + Shift + [ | 折叠区域                            |
| Ctrl + Shift + ] | 展开区域                            |
| Ctrl + K + [     | 折叠所有子区域                      |
| Ctrl + K + ]     | 展开所有子区域                      |
| Ctrl + K + 0     | 折叠所有区域                        |
| Ctrl + K + J     | 展开所有区域                        |

## 快捷键+代码片段

`ctrl+shift+p` 输入 `Open Keyboard Shortcuts(JSON)` 打开 `keybindings.json`, 配置自己的快捷键

```json
// 将键绑定放在此文件中以覆盖默认值auto[]
[
  {
    "key": "alt+d",
    "command": "editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+d",
    "command": "-editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+d",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+k",
    "command": "-editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    // 自定义快捷键
    "key": "ctrl+shift+l",
    // 运行多个命令
    "command": "runCommands",
    "args": {
      "commands": [
        // 复制选中文本
        { "command": "editor.action.clipboardCopyAction" },
        // 光标移动到最后
        { "command": "cursorEnd" },
        // 插入片段
        {
          "command": "editor.action.insertSnippet",
          // 调用自己配置的用户代码片段, 这里是代码片段里定义的值
          "args": { "name": "Print Selected variable" }
        }
      ]
    }
  }
]
```

## 生成批量标签

```vue
<template>
  <!-- div{我要$个}*8 -->
  <!-- result: -->
  <div>我要1个</div>
  <div>我要2个</div>
  <div>我要3个</div>
  <div>我要4个</div>
  <div>我要5个</div>
  <div>我要6个</div>
  <div>我要7个</div>
  <div>我要8个</div>
</template>
```

## 调试代码

1. JavaScript debug terminal

   vscode 中打开终端, 命令行右上角新增终端, 选择 `JavaScript 调试终端`
   ![debug](/other/JavaScript-debug.png)

   在 `JavaScript 调试终端` 使用的命令运行的代码都会进入调试模式, 给对应代码加上断点即可.

   配置: 可以打开 `settings.json`

   ```json
   {
     "debug.javascript.terminalOptions": {
       // 这里的配置项等同于 launch.json 文件
     }
   }
   ```

2. launch.json

   根目录创建 `.vscode/launch.json` 并配置, 具体配置项请自行搜索.
   配置完成后对应代码打上断点并使用 `F5` 开启调试.

3. vscode 插件

   例如 vitest 框架有 vitest 插件可以使用

4. 调试 nest.js 项目

   > vscode 开发 nest.js 项目, 使用 `npm run start:debug` 调试时, 是不能直接打断点的, 想要让 vscode 支持断点调试, 需要以下配置:

   打开命令面板(command + shift + p), 搜索 `Toggle Auto Attach` , 选中回车

   选择调试附加模式为始终, 然后运行 `npm run debug`

5. 调试 TypeScript 项目

   > `package.json` 中 `type="module"` 需要去掉

   根目录下创建 .vscode/launch.json 文件

   F5 进入调试模式, 需要调试的代码打断点就好了

   ```json
   {
     "version": "0.2.0",
     // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
     "configurations": [
       {
         "name": "Launch Program",
         "type": "node",
         "request": "launch",
         // 跳过调试
         "skipFiles": ["<node_internals>/**"],
         // 入口文件
         "program": "${workspaceFolder}\\src\\main.ts",
         // 运行时参数
         "args": ["cross-env NODE_ENV=development"],
         // "cwd": "${workspaceFolder}",
         // 在何处启用调试, integratedTerminal 是 vscode 集成终端
         // 使用 terminal 调试, 默认使用的是 DEBUG CONSOLE
         "console": "integratedTerminal",
         "runtimeArgs": ["-r", "ts-node/register"],
         // 设置环境
         "env": {}
       }
     ]
   }
   ```

## Copilot x

### 安装

使用 copilot chat 需要满足以下几个条件：

1. 有正在生效的 copilot 订阅（听说学生包的不可以，不确定，我自己是付费订阅的）
2. 加入并通过了 copilot chat 的 waitList GitHub · Where software is built
3. 安装 VS code Insider 版本
4. 安装 GitHub Copilot Nightly 和 Github Chat 插件

都安装好之后使用自己的 copilot 订阅账号登录就可以激活了，这时可以看到侧边栏的 copilot 聊天窗口，同时使用 `ctrl + I` 可以在行内调出对话栏

### usage

在对话框内输入/可以快捷输入已经内置的命令，分别是：

- `/vscode` - 关于 VS code 的问题
- `/tests` - 为选中代码生成单元测试
- `/simplify` - 简化选中代码
- `/fix` - 修复选中代码可能存在的 bug
- `/explain` - step by step 的解释选中代码
- `/ext` - 关于 VS Code 扩展开发的问题
- `/help` - 帮助

copilot chat 还支持通过 ctrl + I 调出行内对话模式，生成的代码会直接以 diff 的形式显示在文件内，方便对比，如果没问题就可以一键接受修改。
