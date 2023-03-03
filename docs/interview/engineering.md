# 工程化

## webpack

### 如何解决开发时的跨域问题?

- 在 `webpack.config.js` 添加配置

```JavaScript
module.exports = {
    // ...
    devServer: {
        proxy: {
            '/api': {
                // 所有请求 /api 的接口都会代理到 target 的地址
                target: 'https://yexiaoyao.com/api',
                // 发出去的请求地址是否使用target的地址而不是localhost:8080
                changeOrigin: true,
                // 不配置证书, 且忽略https证书报错
                secure: false
            }
        }
    }
}
```

### tree-shaking 是什么? 如何实现?

> tree-shaking 也就是我们常说的摇树, 主要作用是让没有使用到的 js 不进行打包, 减小包的体积.

- 在 `webpack.config.js` 中配置 `mode: production` 开启. (开发环境下没必要开启 tree-shaking)
- 实现方式:
  - CommonJS 语法无法 tree-shaking
  - 使用 import 和 export 语法, 进行按需引入.
- 不需要 tree-shaking 的代码怎么处理:
  - 在 `package.json` 中配置 `sideEffects`, 比如所有被 import 的 CSS 都可以放到 `sideEffects` 里

### 常用的 loader 有哪些?

| 名称                    | 作用                                                                     |
| ----------------------- | ------------------------------------------------------------------------ |
| html-loader             | 将 HTML 导出为字符串                                                     |
| markdown-loader         | 将 Markdown 编译为 HTML                                                  |
| ts-loader               | 像加载 JavaScript 一样加载 [TypeScript](https://www.typescriptlang.org/) |
| babel-loader            | 将 ES2015+ 代码并将其转换为 ES5                                          |
| css-loader              | 处理 css 文件, 输出 JavaScript 模块                                      |
| style-loader            | 将 css-loader 处理完的 JavaScript 模块转为 style 标签插入 html 中        |
| less-loader/scss-loader | 加载并编译 LESS / SASS/SCSS 文件                                         |
| vue-loader              | 加载并编译 [Vue 组件](https://vuejs.org/v2/guide/components.html)        |

### 常用的 plugin 有哪些?

| 名称                  | 作用                                     |
| --------------------- | ---------------------------------------- |
| html-webpack-plugin   | 创建 HTML 文件(webpack 本身是处理 js 的) |
| clean-webpack-plugin  | 清理之前打包的残余文件                   |
| copy-webpack-plugin   | 拷贝静态文件到 dist 目录                 |
| eslint-webpack-plugin | 检查代码中的错误                         |

### loader 和 plugin 的区别?

- loader 是文件加载器, plugin 是 webpack 插件.
- loader 能够对文件进行编译, 优化, 混淆等, 比如 `babel-loader` `vue-loader` 等, plugin 能够实现更多功能, 比如定义全局变量, Code split, 加速编译等.
- loader 是在最终产物之前运行的, plugin 是在整个打包过程都能运行.

### webpack 怎么配置多页应用?

- 在 `webpack.config.js` 的 entry 属性中配置多个入口(js)文件

```JavaScript
module.exports = {
  entry: {
    app: './src/index.js',
    admin: './src/main.js',
  }
}

```

- entry 中配置多个入口(js)文件会有重复打包的问题! 如果多个入口文件都引用了 vue.js, 那么 vue.js 会被打包到两个入口文件中
- 使用 `optimization.splitChunks` 将共同依赖打包成 `common.js` (`html-webpack-plugin` 插件会自动引入 `common.js`)

### 如何提高 webpack 的构建速度?

- 使用 DllPlugin 将不经常变化的代码进行提前打包, 并复用, 如 vue, react
- 使用插件进行多线程打包
- 关闭 source map

### swc 和 esbuild 是什么?

- 它们都是用来编译/打包 JS/TS 文件的打包工具, 都能集成到 webpack
- 它们都无法对`ts`代码进行类型检查, 无法打包 `css` `svg` 等
- 它们都比 babel 快很多(swc 快 20 倍以上, esbuild 快 10~100 倍)

### webpack 和 vite 的区别是什么?

- 开发环境: vite 在开发环境中不进行打包, 充分利用浏览器对 `<script type=module>` 的支持(让浏览器去 `/node_modules/.vite/` 找对应文件), 而 `webpack-dev-server` 使用 `babel-loader` 基于内存打包, 比 vite 慢很多很多.
- 生产环境: vite 使用 rollup + esbuild 来打包 js 代码, webpack 使用 babel 打包 js 代码会比 esbuild 慢很多. (webpack 也可以使用 esbuild 打包, 但是需要自己配置, 非常麻烦)
- 文件处理时机: webpack 是构建好所有文件, 等你请求的时候把对应文件输出给你, 而 vite 是在你请求某个文件的时候处理这个文件并输出给你.

## vite

### vite 有哪些缺点?

- 热更新经常失败, 原因不清楚
- 有些功能 rollup 不支持, 需要自己写 rollup 插件
- 不支持非现代浏览器

### 常用的 plugin 有哪些?

| 名称                   | 作用                          |
| ---------------------- | ----------------------------- |
| unplugin-auto-import   | 按需自动导入 Vue 等框架的 API |
| unplugin-component-vue | 自动按需导入 Vue 的组件       |
