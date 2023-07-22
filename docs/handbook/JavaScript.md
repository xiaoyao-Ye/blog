# JavaScript

## 深拷贝

JavaScript 自带的拷贝，都是浅拷贝，现在浏览器引入一个全局函数 `structuredClone()`，用来深拷贝。

```JavaScript
structuredClone(value)
structuredClone(value, { transfer })
```

## 函数柯里化

```javascript
function currying(fn) {
  let func = (...args) => {
    // console.log(fn.length,`打印输出fn的形参个数`)
    if (args.length == fn.length) return fn(...args);
    return (...arg) => func(...args, ...arg);
  };
  return func;
}

function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));
add = currying(add);
console.log(add(1)(2)(3));
```

## 节流

```javascript
function throttle(fn, interval = 500) {
  let flag = true;
  return function (...args) {
    let context = this;
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, interval);
  };
}

// 写成下面的方式也是一样的意思
const throttle = function (fn, interval = 500) {
  let last = 0;
  return function (...args) {
    let context = this;
    let now = +new Date();
    // 还没到时间
    if (now - last < interval) return;
    last = now;
    fn.apply(this, args);
  };
};
```

## 防抖

```javascript
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
```

## 加强版节流

> 防抖 + 节流

```javascript
function throttle(fn, delay = 500) {
  let last = 0,
    timer = null;
  return function (...args) {
    let context = this;
    let now = new Date();
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 时间到了必须给响应
      last = now;
      fn.apply(context, args);
    }
  };
}
```

## 判断请求超时

```javascript
if (error.code == "ECONNABORTED" && error.message.indexOf("timeout") != -1 && !error.config._retry) {
  log("网络较差,请稍后重试!");
}
```

## 检查日期是否为工作日

```javascript
const isWeekday = date => date.getDay() % 6 !== 0;
```

## 判断当前元素是否为聚焦状态

```javascript
const elementIsInFocus = el => el === document.activeElement;
```

## 检查浏览器是否支持触摸事件

```javascript
const touchSupported = () => {
  ontouchstart in window || (window.DocumentTouch && document instanceof window.DocumentTouch);
};
console.log(touchSupported());
```

## 判断设配是 ios/android

```javascript
var ua = navigator.userAgent.toLowerCase();
if (/iphone|ipad|ipod/.test(ua)) {
  console.log("iphone");
} else if (/android/.test(ua)) {
  console.log("android");
}
```

```javascript
// 判断当前是否是ios设备
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

## 判断微信浏览器

```javascript
function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
```

## 运算符

- ~~

```javascript
Math.floor(9.4565); // 9
~~9.4565; // 9
```

- \*\*

```javascript
Math.pow(2, 3); // 8
2 ** 3; // 8
```

- \+

```javascript
parseInt("9"); // 9
+"9"; // 9
```

## 反转字符串

你可以使用 split、reverse 和 join 方法轻松反转字符串。

```javascript
const reverse = str => str.split("").reverse().join("");

reverse("hello world");
// Result: 'dlrow olleh'
```

## 正则替换字符串

```javascript
deadDay.replace(/-/g, ""); //"-"全部去掉
```

## 解析 url 地址参数

```javascript
let url = "https://www.baidu.com/s?name=joker&age=18";
function queryURLParameter(url) {
  let reg = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};
  url.replace(reg, (...args) => {
    obj[args[1]] = args[2];
  });
  return obj;
}
console.log(queryURLParameter(url));
```

## 随机生成 16 进制 color

```javascript
let randomColor = "#" + Math.random().toString(16).slice(2, 8);
```

## 数组扁平化

```javascript
let arr = [1, 2, [3, [4, 5, [6, [7]], 8]]];
arr
  .toString()
  .split(",")
  .map(item => +item);
```

## 求数组并集: 合并去重 Set(),Array.from()

```javascript
let a = [1, 2, 5];
let b = [2, 5, 7];
let c = new Set([...a, ...b]);
console.log(Array.from(c)); //[1,2,5,7]
```

## 求数组交集: 找数组中相同的元素 filter(),has()

```javascript
let a = [1, 2, 5];
let b = [2, 5, 7];
let c = a.filter(x => new Set(b).has(x));
console.log(c); //[2,5]
```

## 遍历数组

- keys()

```javascript
//未转化成Set()时，结果item是key值也就是数组的下标
console.log("未转化Set()");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of arr.keys()) {
  console.log(item);
}
//转化成Set()时，结果item就是数组的元素
console.log("转化Set()");
arr = new Set(arr);
for (let item of arr.keys()) {
  console.log(item);
}
```

- entries()

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 未转化成Set()时，结果item是一个数组[key,value];key是从0开始
for (let item of arr.entries()) {
  console.log(item);
}

// 转化成Set()时，结果item是一个数组[key,value];key的值与value值相同
arr = new Set(arr);
for (let item of arr.entries()) {
  console.log(item);
}
```

- forEach():     箭头函数参数有三个(键值：value、键名：key、集合：array)

```javascript
let arr = ["vue", "angular", "react"];
arr.forEach((value, key) => console.log(value, key));

// 转化成Set()时，key的值与value值相同
new Set(arr).forEach((value, key) => console.log(value, key));
```

## 数组的: 最大值/总和

```javascript
// 寻找数组中的最大值
const max = arr => Math.max(...arr);
max([123, 321, 32]); // outputs: 321
// 计算数组的总和
const sum = arr => arr.reduce((a, b) => a + b, 0);
sum([1, 2, 3, 4]); // output: 10
```

## 展开运算符

- 取代 concat 进行数组拼接

```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const result = [...a, ...b, ...c];
```

- 实现数组和对象的浅拷贝

```javascript
const newObj = { ...oldObj };
const newArr = [...oldArr];
```

## Object.freeze

- 冻结对象,这个方法不是 vue 专属的.
- 场景: 进行大量数据渲染处理的表格等,

- 当 this.msg = res.data;的时候 Vue 将遍历此对象所有的属性，
- 并使用 Object.defineProperty 把这些属性全部转为 getter/setter，
- 它们让 Vue 能进行追踪依赖，在属性被访问和修改时通知变化

```javascript
// 使用方式
this.item = Object.freeze(Object.assign({}, this.item));

// 使用了 Object.freeze 之后，不仅可以减少 observer 的开销，还能减少不少内存开销。
```

## 性能优化相关

- 获取 DOM 切记避免使用  `document.querySelector()`等一系列的全局选择器。你应该使用`this.$el`或者`this.refs.xxx.$el`的方式来选择 DOM。这样就能将你的操作局限在当前的组件内，能避免很多问题。
- 不可避免的需要注册一些全局性的事件，比如监听页面窗口的变化`window.addEventListener('resize', this.__resizeHandler)`，但再声明了之后一定要在 `beforeDestroy`或者`destroyed`生命周期注销它。`window.removeEventListener('resize', this.__resizeHandler)`避免造成不必要的消耗。
- 全局状态管理 vuex.尽量避免过多状态. 非全局或者部分需要状态管理使用 bus 模式.
- css 除了必要的初始化样式和一些特殊的覆盖样式,其他的应该尽量避免全局,写在 scoped 中.

## indexOf

- indexOf 可以不用再判断数字,当然也可以用 es6 的 includes,如果写框架那种需要考虑兼容的话还是建议 indexOf

```javascript
const arr = [1, 2, 3];

// 存在，等效于 > -1
if (~arr.indexOf(1)) {
  console.log("xxx");
} // 'xxx'

// 不存在，等效于 === -1
!~arr.indexOf(1);
```

## 判断{} === {}

```javascript
{} === {}    // false, ===比较的是内存地址

let obj = {};
let obj1 = obj;
obj === obj1  // true, 内存地址一致

{} >= {}  // true, >=比较会进行隐式转换toString()
```

## arguments

- 但是您可以用  `use strict`  严格模式来避免这一行为，这样  `arguments`  就只是个副本了。

```javascript
function test(a, b) {
  console.log(a, b); // 2, 3

  arguments[0] = 100;
  arguments[1] = 200;

  console.log(a, b); // 100, 200
}
test(2, 3);
```

## 获取浏览器 Cookie 的值

通过使用 document.cookie 访问来检索 cookie 的值。

```javascript
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(";").shift();

cookie("_ga");
// Result: "GA1.2.1929736587.1601974046"
```

## 将 RGB 转换为十六进制

```javascript
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);
// Result: #0033ff
```

## 复制到剪贴板

使用 navigator.clipboard.writeText 可以轻松将文本复制到剪贴板。

```javascript
const copyToClipboard = text => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");
```

## 检查日期是否有效

使用以下代码段检查给定日期是否有效。

```javascript
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");
// Result: true
```

## 查找一年中的某一天

查找给定日期。

```javascript
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());
// Result: 272
```

## 大写字符串

```javascript
Javascript没有内置的大写函数，但是我们可以使用以下代码实现大写。
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

capitalize("follow for more")
// Result: Follow for more
```

## 查找两个日期之间的天数

使用以下代码段查找给定两个日期之间的天数。

```javascript
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// Result: 366
```

## 清除所有 Cookie

你可以通过使用 document.cookie 访问 cookie 并清除它，从而轻松地清除存储在网页中的所有 cookie。

```javascript
const clearCookies = document.cookie
  .split(";")
  .forEach(
    cookie => (document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)),
  );
```

## 生成随机十六进制

你可以使用 Math.random 和 padEnd 属性生成随机的十六进制颜色。

```javascript
const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

console.log(randomHex());
// Result: #92b008
```

## 从数组中删除重复项

你可以使用 JavaScript 中的 Set 轻松删除重复项。这是救命稻草。

```javascript
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]
```

## 从 URL 获取查询参数

你可以通过传递 window.location 或原始 URLgoole.com?search=easy&page=3 从 url 轻松检索查询参数。

```javascript
const getParameters = URL => {
  URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  return JSON.stringify(URL);
};
```

## 从日期输出时间

我们可以从给定日期以 hour::minutes::seconds 的格式输出时间。

```javascript
const timeFromDate = date => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
```

## 检查数字是偶数还是奇数

```javascript
const isEven = num => num % 2 === 0;

console.log(isEven(2));
// Result: True
```

## 求数字的平均值

使用 reduce 方法查找多个数字的平均值。

```javascript
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

average(1, 2, 3, 4);
// Result: 2.5
```

## 滚动到顶部

你可以使用 window.scrollTo(0, 0)方法自动滚动到顶部。将 x 和 y 都设置为 0。

```javascript
const goToTop = () => window.scrollTo(0, 0);

goToTop();
```

## 检查数组是否为空

只要简简单单的一行代码就可以检查数组是否为空，返回 true 或 false。

```javascript
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);
// Result: true
```

## 获取选定的文本

使用内置的 getSelection 属性获取用户选择的文本。

```javascript
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
```

## 打乱数组

使用 sort 和 random 方法打乱数组非常容易。

```javascript
const shuffleArray = arr => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]
```

## 检测暗模式

使用以下代码可以检查用户的设备是否处于暗模式。

```javascript
const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(isDarkMode); // Result: True or False
```
