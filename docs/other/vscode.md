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

## vim

模式:

- normal
  - 语法: `operation + num(可选) + range`
- insert
- visual
  - 语法: `select + num(可选) + operation`
  - v 基于字符
  - V 行
  - control + v 块

- `esc` 回到 normal 模式
- `control + [` 回到 normal 模式

### 命令

#### 移动

- `0` 到行首
- `$` 到行尾
- `^` 到行首(不包含blank)
- `g_` 到行尾(不包含blank)

基于单词:

- `e` 移动到单词结尾(往后移动)
- `ge` 移动到单词结尾(往前移动)
- `w` 移动到单词开头(往后移动)
- `b` 移动到单词开头(往前移动)

> blank 包含 空格 tab 回车

visual 模式:

- `o` 切换当前选中区的光标位置(选中区的开始和结尾)

屏幕滚动:

- `zz` 将光标所在行滚动至屏幕中间
- `zt` (top)置顶
- `zb` (bottom)置底
- `gg` 跳转到文件首
- `G` 跳转到文件尾
- `control + f` 往下(forword)滚动一屏
- `control + b` 往上(backword)滚动一屏
- `control + e` 往下滚动一行
- `control + y` 往上滚动一行
- `行数 + gg(G)` 跳转到指定行

#### 插入

- `i` 光标前
- `a` 光标后
- `I` 行首
- `A` 行尾
- `O` 上一行
- `o` 下一行

#### 操作

- `d` 删除
- `c` 删除并进入 insert
- `y` 复制
- `yy` 复制当前行(并放到寄存器)
- `dd` 删除当前行(并放到寄存器)
- `p` 粘贴寄存器的内容
- `cw` 删除当前(光标往后的)单词并进入 insert 模式
- `ea` 在当前单词结尾插入
- `control + r + 0` 在 insert 模式粘贴寄存器的内容
- `u` 撤销操作
- `.` 重复上一次的修改, 需要注意移动操作是不算的(适合进行一些需要重复的操作, 可以将很多操作简化)
- `gh` 悬浮提示(跟鼠标悬浮是一样的)
- `gd` 跳转定义
- `gu(gU) + range(iw这种)` normal 模式下将当前选中内容切换大小写
- `u(U)` visual 模式下将当前选中内容切换大小写
- `~` 当前字符切换大小写
- `gc` 单行注释和取消单行注释
- `gC` 批量注释和取消批量注释
- `x` 删除当前光标所在字符
- `s` 删除当前光标所在字符并进入insert模式
- `S` 删除当前行并进入insert模式
- `u` 撤回一次操作
- `control + r` 恢复上一步被撤回的操作
- `operator + aI` 该操作的范围是当前块{}的首行和尾行，常用于操作整个函数
- `operator + ai` 该操作的范围是当前块{的首行和}的前面，该操作不实用建议映射为`o + aI` 减少按键量
- `operator + a + e` 该操作的范围是当前文件所有内容，常用于删除所有内容重写，或者复制所有内容

批量操作

- 可视化模式选中多行使用 A 或者 I 去批量操作多行的行尾和行首
- 可视化块模式选中 多行的中间 + operation 去批量处理

### 搜索

单行搜索

- `f` 将光标移动至下一个符合的字符
- `F` 将光标移动至上一个符合的字符
- `t` 将光标移动至下一个符合字符的前一个字符(配合c,d这种操作会好用)
- `T` 将光标移动至上一个符合字符的后一个字符(配合c,d这种操作会好用)
- `;` 重复上一个搜索操作
- `,` 反方向重复上一个搜索操作

全局搜索

- `/` 查找下一个符合的字符(回车跳转)
- `?` 查找上一个符合的字符(回车跳转)
- `n` 重复上一个搜索操作
- `N` 重复上一个搜索操作(反方向)
- `/ + up(down)` 查看搜索历史
- `word + *` 查找下一个相同的 word
- `word + #` 查找上一个相同的 word

vim-easymotion

> 通过组合键实现更多功能, vscode 的 vim 默认有这个插件, 需要通过配置开启

::: tip

\<leader> 键可以通过 `vim.leader` 修改为别的键

:::

- `<leader> + <leader> + w` 跳转到往下的单词的开头
- `<leader> + <leader> + e` 跳转到往下的单词的结尾
- `<leader> + <leader> + b` 跳转到往上的单词的开头
- `<leader> + <leader> + ge` 跳转到往上的单词的结尾
- `<leader> + <leader> + j(k)` 根据行去进行跳转
- `<leader> + <leader> + h(l)` ...
- `<leader> + <leader> + <leader> + j` all word

```json
{
  "vim.easymotion": true,
  "vim.leader": "<Space>"
}
```

vim-sneak

> f 搜索只能搜索一个字符, 局限性比较高, 通过这个插件可以使用 s 代替 f 的功能, 这个搜索可以搜索两个字符并且是全局的. vscode 的 vim 默认有这个插件, 需要通过配置开启. 同时存在一个问题就是插件的s会将默认的s功能替换掉. 需要通过键映射处理.

```json
{
  "vim.sneak": true,
  // 在非递归模式下的配置, 避免递归映射
  "vim.normalModeKeyBindingsNonRecursive": [
    // 将 vim-sneak 的 s 搜索映射为 f 替代默认的单行搜索
    { "before": ["f"], "after": ["s"] },
    { "before": ["F"], "after": ["S"] },
    // 模拟实现 s 和 S (被 vim-sneak 占用)
    { "before": ["s"], "after": ["c", "l"] },
    { "before": ["S"], "after": ["^", "C"] }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    // 将 vim-sneak 的 s 搜索映射为 f 替代默认的单行搜索. 在 visual 模式下 S 本身就不支持搜索, 所以不配置了.
    { "before": ["f"], "after": ["s"] }
  ],
  "vim.operatorPendingModeKeyBindingsNonRecursive": [
    { "before": ["f"], "after": ["z"] },
    { "before": ["F"], "after": ["Z"] }
  ]
}
```

### 寄存器

使用 dd 或者 yy 这种都会将处理的内容放到寄存器里面, 然后使用 p 的时候会将寄存器里的内容取出粘贴. 也就意味着 p 之后寄存器就空了?

### 文本对象

> vscode vim 好像默认启用了 vim-surround 插件(通过cs/ys/ds/S触发处理包裹字符)

语法: `operation(normal模式) + (内/外) + 文本` 操作内容
语法: `v(visual模式) + (内/外) + 文本` 选中内容

- `i` 内部
- `a` 外部

- `v + i + (` 选中括号内的文本(选中`{}、[]、""、''`都是一样的)
- `v + i + b` 选中括号内的文本(`b` 比 `(` 更好按)
- `v + i + B` 选中大括号内的文本(`B` 比 `{` 更好按)
- `v + i + w` 选中(光标所在)单词
- `v + i + s` 选中一个句子, 以`. ! ?`结尾
- `v + i + p` 选中一个段落, 以一个换行间隔为一个段落
- `v + i + t` 选中 xml 标签的内容, a 的话就是选中包括标签在内的所有
- `d + i + a` (光标在arg2附近)删除下方示例的 arg2
- `d + a + a` (光标在arg2附近)删除下方示例的 arg2, 包括`,`符号
- `d + i + e` 删除所有内容(不包括首尾的blank)
- `d + a + e` 删除所有内容(包括首尾的blank)
- `c + s + " + '` 将成对的 " 替换为 ' (``,"", '', [], {}, (), <> 等也是一样的)
- `d + s + "` 删除成对的 "
- `V + S + {` 在选中的内容外添加 {} 包裹(可视化模式使用大写S. 可以将{}换成其他符号)
- `y + s + i(a) + w + (` 在当前文本外添加 () 包裹, 这个 w 应该就是一个文本跟单独的 w 一致.
- `y + s + i + w + t + div`  在当前文本外添加 div 包裹

```js
function fn(arg1, arg2) {

}
```

::: tip

文本对象`v/y/c/d`操作只要在同一行即可不是一定要在文本范围内. 例如光标在func的位置键入 `cib` 可以删除下方 fn 的参数并进入插入模式, 光标在 { 的位置也可以!

:::

### vim 插件相关设置

```json
{
  // 切换为 normal 模式时会自动切换输入法为 EN
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.defaultIM": "1033",
  "vim.autoSwitchInputMethod.obtainIMCmd": "D:\\GitHub\\im-select.exe",
  "vim.autoSwitchInputMethod.switchIMCmd": "D:\\GitHub\\im-select.exe {im}",
  // normal 模式下的映射
  "vim.normalModeKeyBindings": [
    { "before": ["H"], "after": ["^"] },
    { "before": ["L"], "after": ["g", "_"] },
    { "before": ["J"], "after": ["5", "j"] },
    { "before": ["K"], "after": ["5", "k"] },
    { "before": ["<C-j>"], "after": ["<C-f>"] },
    { "before": ["<C-k>"], "after": ["<C-b>"] }
  ],
  // visual 模式下的映射
  "vim.visualModeKeyBindings": [
    { "before": ["H"], "after": ["^"] },
    { "before": ["L"], "after": ["g", "_"] },
    { "before": ["J"], "after": ["5", "j"] },
    { "before": ["K"], "after": ["5", "k"] },
    { "before": ["<C-j>"], "after": ["<C-f>"] },
    { "before": ["<C-k>"], "after": ["<C-b>"] }
  ],
  // operatorPending 模式下的映射
  "vim.operatorPendingModeKeyBindings": [
    { "before": ["H"], "after": ["^"] },
    { "before": ["L"], "after": ["g", "_"] }
  ],

  "vim.handleKeys": {
    "<C-a>": false,
    "<C-f>": false,
    "<C-c>": false // 让 control + c 不会退出 insert 模式
    // "<C-v>": false, // 让 control + v 能正常粘贴, 会导致无法使用 visual 的块模式
  },

  "vim.easymotion": true, // 开启 vim-easymotion 插件
  "vim.leader": "<Space>",

  "vim.sneak": true,
  // 在非递归模式下的配置, 避免递归映射
  "vim.normalModeKeyBindingsNonRecursive": [
    // 将 vim-sneak 的 s 搜索映射为 f 替代默认的单行搜索
    { "before": ["f"], "after": ["s"] },
    { "before": ["F"], "after": ["S"] },
    // 模拟实现 s 和 S (被 vim-sneak 占用)
    { "before": ["s"], "after": ["c", "l"] },
    { "before": ["S"], "after": ["^", "C"] }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    // 将 vim-sneak 的 s 搜索映射为 f 替代默认的单行搜索. 在 visual 模式下 S 本身就不支持搜索, 所以不配置了.
    { "before": ["f"], "after": ["s"] }
  ],
  "vim.operatorPendingModeKeyBindingsNonRecursive": [
    { "before": ["f"], "after": ["z"] },
    { "before": ["F"], "after": ["Z"] }
  ]
}
```

### normal 模式自动切换输入法(windows)

1. 下载 [im-select.exe](https://github.com/daipeihust/im-select) 放置到一个你喜欢的目录(例如: `D:\GitHub\im-select.exe`)

2. 获取当前当前输入法的key

    ```bash
     # 在你放置的目录使用 git bash 运行 `im-select.exe`会返回你当前使用的输入法的ID编号
     ./im-select.exe # 1033 我这里使用的是默认的英文输入法
    ```

3. vscode vim 配置切换到 normal 模式时使用的输入法

```json
{
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.defaultIM": "1033",
  "vim.autoSwitchInputMethod.obtainIMCmd": "D:\\GitHub\\im-select.exe",
  "vim.autoSwitchInputMethod.switchIMCmd": "D:\\GitHub\\im-select.exe {im}"
}
```

> 运行 `./im-select.exe locale` 的作用就是切换输入法, 把 locale 换成指定 ID 就是切换为指定输入法
