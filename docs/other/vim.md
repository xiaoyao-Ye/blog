# vim

## vscode vim

vim 插件相关设置

```json
{
  // 切换为 normal 模式时会自动切换输入法为 EN
  "vim.autoSwitchInputMethod.defaultIM": "1033",
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.obtainIMCmd": "E:\\xiaoyao-Ye/im-select.exe",
  "vim.autoSwitchInputMethod.switchIMCmd": "E:\\xiaoyao-Ye/im-select.exe {im}",
  // normal 模式下的快捷键
  "vim.normalModeKeyBindings": [
    { "before": ["H"], "after": ["^"] },
    { "before": ["L"], "after": ["g", "_"] },
    { "before": ["J"], "after": ["5", "j"] },
    { "before": ["K"], "after": ["5", "k"] }
  ],
  // visual 模式下的快捷键
  "vim.visualModeKeyBindings": [
    { "before": ["H"], "after": ["^"] },
    { "before": ["L"], "after": ["g", "_"] },
    { "before": ["J"], "after": ["5", "j"] },
    { "before": ["K"], "after": ["5", "k"] }
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
