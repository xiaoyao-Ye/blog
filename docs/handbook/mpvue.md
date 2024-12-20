# mpvue

```bash
# 项目结构
|-build                 # 打包构建相关配置文件
|-config                # 用于打包的一些变量文件
|-dist                  # 小程序页面文件
|-src                   # mpvue源代码
|-static                # 一些静态资源
|-test                  # 测试相关
| .babelrc              # js的编译配置
| .editorconfig         # 编辑器风格
| .gitignore            # git文件忽略清单
| .postcssrc.js         # 转换css到wxss的文件
| index.html            # 入口模板
| package-lock.json     # node包版本说明文件
| package.json          # 项目描述文件,项目依赖项描述
| project.config.json   # 小程序开发者工具配置文件
| README.md             # 项目说明文件
```

## 注意事项

用 mpvue 进行小程序开发对符号,空格很敏感.需要把`eslint关掉`.

![1584624837968](/images/1584624837968.png)

## vue 生命周期

![1584694458666](/images/1584694458666.png)

## 小程序生命周期

![1584694481833](/images/1584694481833.png)

## mpvue 生命周期

- mpvue 生命周期就是 vue 的生命周期与小程序的生命周期结合.
- `mpvue`会在小程序`onReady`后,再去触发 vue mounted 生命周期
- 不建议使用小程序的生命周期钩子(`所以mpvue项目大多情况下直接用vue的生命周期就可以了,注意:也有例外!`)

## mpvue 语法

![1584697077698](/images/1584697077698.png)
