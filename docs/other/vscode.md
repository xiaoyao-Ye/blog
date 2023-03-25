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

## 调试代码

1. JavaScript debug terminal

   vscode 中打开终端, 命令行右上角新增终端, 选择 `JavaScript 调试终端`
   ![debug](/other/JavaScript-debug.png)

   在 `JavaScript 调试终端` 使用的命令运行的代码都会进入调试模式, 给对应代码加上断点即可.

   配置: 可以打开 `settings.json`

   ```json
   "debug.javascript.terminalOptions": {
      // 这里的配置项等同于 launch.json 文件
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
         // 使用terminal调试
         "console": "integratedTerminal",
         "runtimeArgs": ["-r", "ts-node/register"],
         // 设置环境
         "env": {}
       }
     ]
   }
   ```
