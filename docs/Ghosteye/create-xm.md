# create-xm

> 一个快速创建项目模板的 cli 工具

## 模板

UI 框架模板

```yaml
├─docs                              # 文档目录
│  │  index.md                      # 文档首页
│  │  vite.config.ts                # 文档配置文件
│  │
│  ├─.vitepress                     # 文档主题以及缓存文件
│  │  │  config.ts                  # 文档界面配置
│  │  │
│  │  ├─cache                       # 缓存文件
│  │  │  └─deps
│  │  │      package.json
│  │  │      vue.js
│  │  │      vue.js.map
│  │  │      _metadata.json
│  │  ├─demo                        # 在组件文档中需要展示的组件集合
│  │  │
│  │  └─theme                       # 主题相关
│  │      │  index.ts
│  │      │
│  │      └─style                   # 自定义主题样式文件
│  │         var.css
│  │
│  ├─components                     # 组件文档
│  │  └─button
│  │        index.md
│  │
│  └─guide                          # 文档入口
│       index.md
│
│─packages
│  │
│  │─kits-ui                        # 组件文件包
│  │  └─button                      # 按钮示例组件文件夹
│  │       index.vue                # vue组件示例
│  │
│  │─kits-ui-icons                  # icon文件包
│  │  ├─src                         # icon组件文件夹
│  │  ├─svg.ts                      # icon导出文件
│  │  └─index.ts                    # icon组件包主入口
│  │
│  └─kits-ui-theme                  # 样式文件包
│     ├─src                         # 各组件样式文件
│     └─index.scss                  # 样式文件主入口--包含部分全局变量
│
│─start                             # 预览页面(普通vue项目)
│  ├─src
│  │  ├─components                  # 预览页面需要调试的组件
│  │  ├─router                      # 当前路由文件
│  │  ├─app.vue
│  │  ├─main.ts                     # 主入口文件
│  │  └─style.css
│  │
│  └─index.html                     # 预览页面的主体
│
└─scripts
   └─publish.sh                     # 打包发布脚本
```
