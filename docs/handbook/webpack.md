# webpack

## 安装

- **全局安装 webpack**

`npm i webpack webpack-cli -g`

- **项目中安装 webpack (推荐)**

`npm i webpack webpack-cli -D`

- **自动编译**: webpack-dev-server 依赖 webpack

`npm i webpack-dev-server -D`

- **自动编译**的另一种(这种编译依赖较多,用的较少,具体配置官网查询)

`npm i express webpack-dev-middleware -D`

- **处理 css**(css-loader: 解析 css 文件,style-loader: 将解析出来的结果 放到 html 中, 使其生效)

`npm i css-loader style-loader -D`

- **处理图片和字体**(url-loader 封装了 file-loader, 所以使用 url-loader 时需要安装 file-loader)

`npm i file-loader url-loader -D`

- **babel**

`npm i babel-loader @babel/core @babel/preset-env -D`

- 如果需要支持更高级的 ES6 语法, 可以继续安装插件: (也可以根据需要在 babel 官网找插件进行安装)

`npm i @babel/plugin-proposal-class-properties -D`

- **build 前清除 dist**的插件

`npm i clean-webpack-plugin -D`

## 运行

运行的两种方式

- npx： node 高版本新出的命令,原理是找到 node_modules->.bin 目录里的 webpack 命令运行后会找到 webpack 文件夹去执行相应的命令
- npm run : 需要在 package.json 里的 scripts 对象中配置对应的命令

- `npx webpack`
- `npx webpack-dev-server`
- `npx webpack-dev-server --hot --open --port 8888`

## webpack 配置

### 四大核心概念

- 入口(entry): 程序的入口 js
- 输出(output): 打包后存放的位置
- loader: 用于对模块的源代码进行转换
- 插件(plugins): 插件目的在于解决 loader 无法实现的**其他事**

### 基础配置

```js
const path = require('node:path')

module.exports = {
  // 入口文件配置
  entry: './src/index.js',
  // 出口文件配置项
  output: {
    // 输出的路径，webpack2起就规定必须是绝对路径
    path: path.join(__dirname, 'dist'),
    // 输出文件名字
    filename: 'bundle.js',
  },
  mode: 'development', // 默认为production, 可以手动设置为development, 区别就是是否进行压缩混淆
}
```

### html 配置项

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的html文件的名字,未定义默认为index.html
      template: 'template.html', // 根据这个模板进行打包,未定义使用默认模板
    }),
  ],
}
```

### css 配置项

```js
module.exports = {
  module: {
    rules: [
      // 配置的是用来解析.css文件的loader(style-loader和css-loader)
      {
        // 用正则匹配当前访问的文件的后缀名是  .css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // webpack底层调用这些包的顺序是从右到左
      },
      // 处理less
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 处理sass
      // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ],
  },
}
```

### 图片和字体配置项

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式展示
              limit: 5 * 1024,
              // 打包输出目录
              outputPath: 'images',
              // 打包输出图片名称
              name: '[name]-[hash:4].[ext]',
            },
          },
        ],
      },
    ],
  },
}
```

### babel 配置项

```js
module.exports = {
  module: {
    rules: [
      // 官方更建议的做法是在项目根目录下新建一个`.babelrc`的babel配置文件
      // {
      //  test: /\.js$/,
      //  use: {
      //    loader: 'babel-loader',
      //    options: {
      //      presets: ['@babel/env'],
      //      plugins: ['@babel/plugin-proposal-class-properties']
      //    }
      //  },
      //  exclude: /node_modules/
      // }
    ],
  },
}
```

```json
// .babelrc
{
  "presets": ["@babel/env"],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime" // 使用`generator`,需要
  ]
}
```

- 如果需要使用`generator`,需要安装插件:

`npm i @babel/plugin-transform-runtime -D`

- 同时还需安装运行时依赖:

`npm i @babel/runtime -D`

- 如果需要使用 ES6/7 中对象原型提供的新方法，babel 默认情况无法转换，即使用了`transform-runtime`的插件也不支持转换原型上的方法
- 需要使用另一个模块:

​ `npm i @babel/polyfill -S`

- 该模块需要在使用新方法的地方直接引入:

​ `import '@babel/polyfill'`

### 自动编译配置项

```js
module.exports = {
  devServer: {
    port: 8090, // 运行端口
    open: true, // 自动打开网页
    hot: true, // 热更新
  },
}
```

### build 前自动清除 dist 目录

```js
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    // 在plugins中直接创建对象即可
    new CleanWebpackPlugin(),
  ],
}
```

### vue-loader

- 打包 vue 本质是跟打包 css 是一样的，都是要先下载一个 loader, 然后改配置文件

```bash
npm install -D vue-loader vue-template-compiler
yarn add -D vue-loader vue-template-compiler
```

### 模拟出 vue-cli

- 创建一个项目文件夹，进来输入 npm init -y
- 创建 src 文件夹，里面放 main.js
- 创建 public 文件夹，里面放 index.html
- 下载 webpack 和 webpack-cli
- 写 webpack.config.js
  - 配置入口 （./src/main.js）
  - 配置出口
  - 配置使用自己的 html
    - 下载 html 插件
    - 改配置，配置的 template 里面写./public/index.html
- 下载 css-loader
- 下载 vue-loader
- main.js 里写以前那些 vue 的初始化代码

### -dev-server(热更新)

安装:

```bash
npm install --save-dev webpack-dev-server
yarn add -D webpack-dev-server
```

webpack.config.js

```js
module.exports = {
  devServer: {
    contentBase: './dist'
  },
}
```

运行

```bash
npx webpack-dev-server --open
```

- 每次这么运行非常麻烦，所以这个命令写在 package.json 的`scripts`里面
- 我们就用 npm run xxx 运行

### 完整配置项

```js
// TODO
// package.json
```

```js
// TODO
// webpack.config.js
```

## 自动化引入模块

- 需要注意 `require.context` 并不是天生的而是由 `webpack` 提供。在构建时，`webpack` 在代码中解析它。

```javascript
// 这个示例是导入api文件夹里的所有js文件
let importAll = require.context('./modules', false, /\.js$/)

class Api extends Request {
  constructor() {
    super()
    //importAll.keys()为模块路径数组
    importAll.keys().map((path) => {
      //兼容处理：.default获取ES6规范暴露的内容; 后者获取commonJS规范暴露的内容
      let api = importAll(path).default || importAll(path)
      Object.keys(api).forEach((key) => (this[key] = api[key]))
    })
  }
}

export default new Api()
```

- `require.context` 参数
  - 文件夹路径
  - 是否递归查找子文件夹下的模块
  - 模块匹配规则，一般匹配文件后缀名
- 只要是需要批量引入的场景，都可以使用这种方法。包括一些公用的全局组件，只需往文件夹内新增组件即可使用，不需要再去注册。如果还没用上的小伙伴，一定要了解下，简单实用又能提高效率。
