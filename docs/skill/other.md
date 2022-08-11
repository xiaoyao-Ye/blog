# other

## 白屏时间

- 在 `</head>` 前输入以下代码可以获得白屏时间

```javascript
console.log(new Date() - performance.timing.navigationStart)
```

## rem 适配大屏展示

- rem.js

```javascript
function resize() {
  let designSize = 1920 // 设计图尺寸
  let html = document.documentElement
  let wW = html.clientWidth // 窗口宽度
  if (wW < 1440) {
    wW = 1440
  }
  let rem = (wW * 100) / designSize
  // console.log(rem)
  document.documentElement.style.fontSize = rem + 'px'
  // document.documentElement.style.height = 100 + '%';
}
resize()
window.onresize = resize
```

- main.js 导入即可(使用)

## GoTop

```vue
<template>
  <div id="GoTop" @click="GoTop()">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </div>
</template>

// methods
<script>
GoTop() {
  (function smoothscroll() {
    var currentScroll =
       document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
       window.scrollTo(0, currentScroll - currentScroll / 10);
    }
  })();
}
</script>

<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99999999;
  cursor: pointer;
}
#GoTop > span {
  display: block;
  width: 100%;
  height: 100%;
  color: rgb(8, 162, 233);
  font-size: 30px;
}
</style>
```

## 完整 ESLint 文件配置属性解释

```javascript
/*
 * ESLint的JSON文件是允许JavaScript注释的，但在gist里显示效果不好，所以我把.json文件后缀改为了.js
 */

/*
 * ESLint 配置文件优先级：
 * .eslintrc.js(输出一个配置对象)
 * .eslintrc.yaml
 * .eslintrc.yml
 * .eslintrc.json（ESLint的JSON文件允许JavaScript风格的注释）
 * .eslintrc（可以是JSON也可以是YAML）
 *  package.json（在package.json里创建一个eslintConfig属性，在那里定义你的配置）
 */

/*
 * 你可以通过在项目根目录创建一个.eslintignore文件告诉ESLint去忽略特定的文件和目录
 * .eslintignore文件是一个纯文本文件，其中的每一行都是一个glob模式表明哪些路径应该忽略检测
 */

{
  //ESLint默认使用Espree作为其解析器
  //同时babel-eslint也是用得最多的解析器
  "parser": "espree",

  //parser解析代码时的参数
  "parserOption": {
    //指定要使用的ECMAScript版本，默认值5
    "ecmaVersion": 5,
    //设置为script(默认)或module（如果你的代码是ECMAScript模块)
    "sourceType": "script",
    //这是个对象，表示你想使用的额外的语言特性,所有选项默认都是false
    "ecmafeatures": {
      //允许在全局作用域下使用return语句
      "globalReturn": false,
      //启用全局strict模式（严格模式）
      "impliedStrict": false,
      //启用JSX
      "jsx": false,
      //启用对实验性的objectRest/spreadProperties的支持
      "experimentalObjectRestSpread": false
    }
  },

  //指定环境，每个环境都有自己预定义的全局变量，可以同时指定多个环境，不矛盾
  "env": {
    //效果同配置项ecmaVersion一样
    "es6": true,
    "browser": true,
    "node": true,
    "commonjs": false,
    "mocha": true,
    "jquery": true,
     //如果你想使用来自某个插件的环境时，确保在plugins数组里指定插件名
     //格式为：插件名/环境名称（插件名不带前缀）
    "react/node": true
  },

  //指定环境为我们提供了预置的全局变量
  //对于那些我们自定义的全局变量，可以用globals指定
  //设置每个变量等于true允许变量被重写，或false不允许被重写
  "globals": {
    "globalVar1": true,
    "globalVar2": false
  },

  //ESLint支持使用第三方插件
  //在使用插件之前，你必须使用npm安装它
  //全局安装的ESLint只能使用全局安装的插件
  //本地安装的ESLint不仅可以使用本地安装的插件还可以使用全局安装的插件
  //plugin与extend的区别：extend提供的是eslint现有规则的一系列预设
  //而plugin则提供了除预设之外的自定义规则，当你在eslint的规则里找不到合适的的时候
  //就可以借用插件来实现了
  "plugins": [
    "eslint-plugin-airbnb",
    //插件名称可以省略eslint-plugin-前缀
    "react"
  ],

  //具体规则配置
  //off或0--关闭规则
  //warn或1--开启规则，警告级别(不会导致程序退出)
  //error或2--开启规则，错误级别(当被触发的时候，程序会退出)
  "rules": {
    "eqeqeq": "warn",
    //你也可以使用对应的数字定义规则严重程度
    "curly": 2,
    //如果某条规则有额外的选项，你可以使用数组字面量指定它们
    //选项可以是字符串，也可以是对象
    "quotes": ["error", "double"],
    "one-var": ["error", {
      "var": "always",
      "let": "never",
      "const": "never"
    }],
    //配置插件提供的自定义规则的时候，格式为：不带前缀插件名/规则ID
    "react/curly": "error"
  },

  //ESLint支持在配置文件添加共享设置
  //你可以添加settings对象到配置文件，它将提供给每一个将被执行的规则
  //如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置
  "settings": {
    "sharedData": "Hello"
  },

  //Eslint检测配置文件步骤：
  //1.在要检测的文件同一目录里寻找.eslintrc.*和package.json
  //2.紧接着在父级目录里寻找，一直到文件系统的根目录
  //3.如果在前两步发现有root：true的配置，停止在父级目录中寻找.eslintrc
  //4.如果以上步骤都没有找到，则回退到用户主目录~/.eslintrc中自定义的默认配置
  "root": true,

  //extends属性值可以是一个字符串或字符串数组
  //数组中每个配置项继承它前面的配置
  //可选的配置项如下
  //1.字符串eslint：recommended，该配置项启用一系列核心规则，这些规则报告一些常见问题，即在(规则页面)中打勾的规则
  //2.一个可以输出配置对象的可共享配置包，如eslint-config-standard
    //可共享配置包是一个导出配置对象的简单的npm包，包名称以eslint-config-开头，使用前要安装
    //extends属性值可以省略包名的前缀eslint-config-
  //3.一个输出配置规则的插件包，如eslint-plugin-react
    //一些插件也可以输出一个或多个命名的配置
    //extends属性值为，plugin：包名/配置名称
  //4.一个指向配置文件的相对路径或绝对路径
  //5.字符串eslint：all，启用当前安装的ESLint中所有的核心规则
    //该配置不推荐在产品中使用，因为它随着ESLint版本进行更改。使用的话，请自己承担风险
  "extends": [
    "eslint:recommended",
    "standard",
    "plugin:react/recommended",
    "./node_modules/coding-standard/.eslintrc-es6",
    "eslint:all"
  ]
}
```

## vscode 快捷键补充

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2442689/1646127881810-cc4e4bca-6299-4af1-8908-cd2ffc0dccc5.png#clientId=u1c903304-ebb6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=74&id=u09e065b9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=74&originWidth=471&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6700&status=done&style=none&taskId=u8513ff32-d678-4e26-9f0c-cecc95ae341&title=&width=471)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2442689/1646127886928-308cb7f5-60a1-4862-bbf2-0fa4e10d6b13.png#clientId=u1c903304-ebb6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=79&id=ua30c0499&margin=%5Bobject%20Object%5D&name=image.png&originHeight=79&originWidth=512&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5179&status=done&style=none&taskId=u42659c3e-ae28-44b9-91a5-6ad2747ebbf&title=&width=512)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2442689/1646127894166-0a858a5c-98d0-4a46-bb18-6449a2ee7ce4.png#clientId=u1c903304-ebb6-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=251&id=uf8c47a1f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=251&originWidth=630&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21823&status=done&style=none&taskId=u2068d2e7-3516-492a-b80d-dc2262544f2&title=&width=630)

## js 写个方法生成 a-z 的数组

- String.fromCharCode('65') // A
- String.fromCodePoint('65') // A

```javascript
// 大写的
;[...Array(26)].map((e, i) => String.fromCharCode(i + 65))
// 小写的
;[...Array(26)].map((e, i) => String.fromCharCode(i + 97))
```

## 获取屏幕像素比 window.devicePixelRatio

[Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 接口的**devicePixelRatio**返回当前显示设备的*物理像素*分辨率与*CSS 像素*分辨率之比。 此值也可以解释为像素大小的比率：一个 CSS 像素的大小与一个物理像素的大小。 简单来说，它告诉浏览器应使用多少屏幕实际像素来绘制单个 CSS 像素。
当处理标准显示器与 HiDPI 或 Retina 显示器之间的差异时，这很有用，后者使用更多的屏幕像素绘制相同的对象，从而获得更清晰的图像。
您可以使用[window.matchMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia) 检查 devicePixelRatio 的值是否发生更改（例如，如果用户将窗口拖动到带有 不同的像素密度）

> PS:说白了，获得设备物理像素与 CSS 像素比例

- [canvas](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)可能在视网膜屏幕上显得太模糊。 使用 window.devicePixelRatio 确定应添加多少额外的像素密度以使图像更清晰。

## performance

**performance.now()** 方法返回一个精确到毫秒的 [DOMHighResTimeStamp](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp) 。
