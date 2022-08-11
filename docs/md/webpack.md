### --save和--save-dev

```js
--save 会把你下载的第三方包信息保存到 `dependencies`
--save-dev 会把你下载的第三方包保存到 `devDependencies`
npm i 插件名 默认相当于  npm i --save 插件名
// ---------------------------------------------
yarn add 			会在	`dependencies`		中安装一个包
yarn add -D/-dev	会在	`devDependencies`	中安装一个包
```



### dependencies 和 devdependencies区别

- dependencies： 里面的插件代表开发打包后也会要用

  - 直接npm i 就行了，因为npm i 默认就是 --save
  - 如果是cnpm i 那么必须自己加 --save

  

- devDependencies ：开发时需要，正式上线不需要

  - 所以对于这类插件，记得下载时一定要用 --save-dev 的命令





### vue-cli打包项目

命令:

```js
npm run build
yarn build
```



### webpack

下载webpack模块

```js
npm i -D webpack webpack-cli
yarn add -D webpack webpack-cli
```



### 入口

- 在文件里写以下代码

```js
  module.exports = {
      // 打包入口,以src里面的xx.js为入口
      entry:"./src/xx.js"
}
```

- 打包时要带上这个配置文件

```js
npx webpack --config webpack.config.js
// 默认它其实就会去找 webpack.config.js 这个文件来作为配置
// 在webpack老版本的时候，必须自己制定这个配置文件
```

- 这个意思是打包，并且用webpack.config.js的配置来打包
- 也可以不叫 `webpack.config.js` 叫别的名字，叫别的名字必须制定配置文件的名字
  - (就是命令的时候把webpack.config.js换成那个名字)



### 出口

```js
output:{
    //绝对路径
    path:'',
    //导出后的文件名
    filename:''
}
```



### 出入口最终配置代码

```js
const path = require('path')	
module.exports = {
    //打包入口
    entry:"./src/index.js",
    
    //打包出口
    output:{
        // 打包后的路径，默认是./dist
        // 打包后的路径必须写绝对路径
        path: path.resolve(__dirname,'./dist'),
        //打包后的文件名，默认叫main.js
        filename:'index.js'
    }
}
```





### package.json中的scripts

作用:scripts的作用就是把复杂命令打包起来,运行只要`npm run xxx` 或 `yarn xxx`就行了

- npm run 后面要接 scripts 里面的名字
- npm run build 它就相当于找到 package.json 里面的 scripts 里面的 build ，再把 build 对应的代码执行起来

```js
// 例:这里就是把,webpack的打包命令给打包成qiemng,需要用到这个命令时直接yarn qimeng 就可以了;
"scripts":{
    "qimeng": "npx webpack --config webpack.config.js"
  }
```





### 打包html

- webpack默认只能打包js
- 如果要打包html，还得下载一个html的插件`loader`
- 首先安装插件，并且调整 `webpack.config.js` 文件：

```js
npm install --save-dev html-webpack-plugin
yarn add -D html-webpack-plugin
```

- 并且要修改配置文件(修改`webpack.config.js`)，不能只是独立的html，还得给一个js的入口文件

```js
// 打包html.完整webpack.config.js配置
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    // 入口需要改为需要打包的html文件地址
    entry: {
        app: './src/index.js'
    },
    output: {
        // 出口名字,这里是默认会是app.js.
        filename: '[name].bundle.js',	// 可以直接写main.js
        path: path.resolve(__dirname, 'dist')
    },
    // plugins跟出入口平级
    plugins: [
        new HtmlWebpackPlugin({
            //title设置打包后的html标题
            title: '测试'
        })
    ],
}
```

- 会自动把入口文件的js  打包后的js文件 导入到打包后的html里面来
- 如果只是写title，它会帮你创建新的空的html,并导入js依赖
- 如果写template跟路径，就代表找到template对应的路径的html文件，把它打包起来，并添加依赖
- 不写template的话,会自动在dist中创建一个新的html文件,你在自己的html中写的内容就没了



### 清空dist文件夹

为什么要清空dist文件夹?	因为发现,每次打包的时候同名文件会覆盖,不同名文件不会进行处理.

会导致比较杂乱,推荐每次打包之前都清空一下

下载:

```js
npm install clean-webpack-plugin --save-dev
yarn add -D clean-webpack-plugin
```

webpack.config.js

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 出口中加入这行代码:
plugins:[
    new CleanWebpackPlugin()	// 清空dist文件夹
]
```





### 打包css

webpack默认只认识.js文件，如果想打包解析别的文件格式，就需要对应的loader

下载loader:

```js
npm install --save-dev style-loader css-loader
yarn add -D style-loader css-loader
```

webpack.config.js

```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ]
}
```

原理是:

把base.css文件解析出来,解析得到一个字符串,在创建一个style标签(createElement),把这个字符串写入到style标签里,再把这个style标签添加到head里面(appendChild),



### 打包图片

webpack默认只认识.js文件，如果想打包解析别的文件格式，就需要对应的loader

下载loader:

```js
npm install --save-dev file-loader
yarn add -D file-loader
```

webpack.config.js

```diff
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
  };
```



### webpack打包vue

- 本质是跟打包css是一样的，都是要先下载一个loader
- 然后改配置文件



### 用webpack模拟出vue-cli

- 创建一个项目文件夹，进来输入 npm init -y
- 创建src文件夹，里面放main.js
- 创建public文件夹，里面放index.html
- 下载webpack和webpack-cli
- 写 webpack.config.js
  - 配置入口 （./src/main.js）
  - 配置出口
  - 配置使用自己的html
    - 下载html插件
    - 改配置，配置的template里面写./public/index.html
- 下载css-loader
- 下载vue-loader
- main.js里写以前那些vue的初始化代码



### webpack -dev-server(热更新)

安装:

```js
npm install --save-dev webpack-dev-server
yarn add -D webpack-dev-server
```

webpack.config.js

```js
devServer: {
   contentBase: './dist'
 },
```

运行

```js
npx webpack-dev-server --open
```

- 每次这么运行非常麻烦，所以这个命令写在package.json的`scripts`里面
- 我们就用 npm run xxx 运行



### vue-loader

```js
npm install -D vue-loader vue-template-compiler
yarn add -D vue-loader vue-template-compiler
```

