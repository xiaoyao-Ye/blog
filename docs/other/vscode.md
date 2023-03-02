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

## vscode 调试代码

1. 调试 nest.js 项目

   > vscode 开发 nest.js 项目, 使用`npm run start:debug` 调试时, 是不能直接打断点的, 想要让 vscode 支持断点调试, 需要以下配置:

   - 打开命令面板(command + shift + p), 搜索`Toggle Auto Attach` , 选中回车
   - 选择调试附加模式为始终, 然后运行`npm run debug`

2. 调试 TypeScript 项目

   - 根目录下创建 .vscode/launch.json 文件
   - F5 进入调试模式, 需要调试的代码打断点就好了

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Launch Program",
         "type": "node",
         "request": "launch",
         "skipFiles": ["<node_internals>/**"],
         // 入口文件
         "program": "${workspaceFolder}\\src\\main.ts",
         // 运行时参数
         "args": ["cross-env NODE_ENV=development"],
         // "cwd": "${workspaceFolder}",
         "console": "integratedTerminal",
         "runtimeArgs": ["-r", "ts-node/register"]
       }
     ]
   }
   ```
