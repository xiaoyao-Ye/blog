# ES6

<!-- 代码是个熟练工种,光看不敲转眼就忘. -->

es6 最好的学习方式应该是跟着阮一峰的《ECMAScript 6 入门教程》一路敲过去.

## set

- set 结构类似数组
- set 的值都是唯一的, 内部元素都是强类型, 会进行类型检查
- 可以使用 set 快速求得数组的合集, 差集, 并集
- 方法

  - `new Set(Array|具有iterable接口的其他数据结构)`  创建
  - `Set.has(value)`  判断这个 set 合集中是否存在某个值,返回 Boolean 值
  - `Set.add()`   给 set 添加一个成员
  - `Set.delete()`  删除某个值,返回布偶值,表示是否删除成功
  - `Set.size` set 当前成员数,size 不是函数不用()
  - `Set.clear()`  清除所有成员,没有返回值

- 实用案例

```javascript
// set去重Array
[...new Set(arr)]
// set去重String
[...new Set(str)].join('')
```

## map

- map 结构类似对象,是一个键值对的集合
- 区别是 map 的 `键`  不限于字符串,  各种类型的值都可以当键(包括对象).
- 方法
  - `new Map([[key, value], [key, value]])`  创建
  - `xx.set(key, value)`  给 map 合集设置键值对
  - `xx.get(key)`  通过键名去匹配获取对应的值
  - `xx.has(key)`  判断是否存在这个键的属性
  - `xx.size` set 当前成员数,size 不是函数不用()
  - `xx.delete()`  删除某个值,返回布偶值,表示是否删除成功

### set 和 map 都有的 4 个遍历方法

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

## Proxy

- `proxy` 可以在目标对象架设一层 拦截 ,外界对该对象的访问,都会先通过这层拦截,因此可以对外界的访问进行过滤和改写.
- `Proxy` 代理的情况下,目标对象内部的 `this` 关键字指向 `Proxy` 代理,目标对象的 `this` 指向如果发生变化可能导致 `Proxy` 无法代理目标对象!
- `Proxy` 拦截函数内部的 `this` 指向是 `handler` 对象.示例-> `new Proxy(target, handler);`

- **Proxy 和 Object.defineProperty 的区别:**
- `Object.defineProperty`  只能监听对象,不能监听数组的变化,无法触发 pop,push,unshift,shift,reverse,sort,splice(vue 的 2.x 版本可以触发 splice,reverse 是因为这几个方法被重写了),而 `proxy`  都可以监听
- `Object.defineProperty`  必须遍历对象的每个属性,只能劫持当前对象属性,如果要深度劫持,必须要深层次遍历嵌套的对象.

### 基础使用

```javascript
// set/get的函数参数,最后一个receiver都是可选,receiver指向proxy对象
let obj = new Proxy(
  {},
  {
    // 目标对象{},设置时的健名(属性名), 设置时的值, proxy对象
    set(target, propKey, value, receiver) {
      console.log("set-target:", target);
      console.log("set-propKey:", propKey);
      console.log("set-value:", value);
      console.log("set-receiver:", receiver);
      return Reflect.set(target, propKey, value, receiver);
    },
    // 目标对象{},获取时的健名(属性名), proxy对象
    get(target, propKey, receiver) {
      console.log("get-target:", target);
      console.log("get-propKey:", propKey);
      console.log("get-receiver:", receiver);
      return Reflect.get(target, propKey, receiver);
    },
  },
);
obj.name = "hehe";
// set-target: {}
// set-propKey: name
// set-value: hehe
// set-receiver: Proxy {}               (这里打印proxy对象)

console.log(obj.name);
// get-target: {name: "hehe"}
// get-propKey: name
// get-receiver: Proxy {name: "hehe"}    (这里打印proxy对象)

console.log(obj);
// Proxy {name: "hehe"}                  (这里打印proxy对象)
```

#### proxy 相对于 Object.defineProperty 有哪些优点?

- 可以监听数组变化
- 可以劫持整个对象
- 操作时不是对原对象操作, 是 new Proxy 返回的一个新对象
- 可以劫持的操作有 13 种

## Reflet

- 理解为对象内部方法的一种新写法,
- 可以把 Object 的一些命令式操作变为函数式行为.
- 具体需要查看 es6 阮一峰...

## Promise 对象

### promise 对象有两个特点:

- 对象不受外界影响. 有三种状态: `pending` `fulfilled` 和 `rejected` ,只有异步操作的结果可以改变这个状态
- 一旦状态改变,不会有再次变更 (promise 状态改变只有两种 `pending->fulfilled` 或 `pending->rejected` )

> promise 也有缺点:

- 首先是一旦创建它就会立即执行,无法中途取消.
- 其次就是如果不设置回调函数,promise 内部抛出的错误是不会反应到外部的.
- 当处于 pending 状态时,无法得知目前到哪个阶段了(刚开始还是即将完成?)

### 应用场景-异步操作

加载图片

```javascript
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

### 基本用法

```javascript
const promise = new Promise((resolve, reject) => {
  // ...进行异步操作
  if (true) {
    // 根据异步结果更改promise状态
    resolve();
  } else {
    reject();
  }
});
promise.then(
  resolveResult => {
    console.log(resolveResult);
  },
  rejectErr => {
    console.log(rejectErr);
  },
);
```

### Promise.then

- Promise 的实例具有 `then` 方法( `then` 方法定义在原型对象 `Promise.prototype` 上), `then` 方法的两个参数分别是 `resolved` 和 `rejected` 状态的回调函数
- 每个 `then` 方法返回的都是新的 promise 实例,可以用链式写法,每个 `then` 都是前面 `then` 的返回值(前面 then 的返回值,还有可能是 promise 对象,既有异步操作!)

### Promise.catch

- `Promise.prototype.catch()` 方法是 `.then((null/undefined其中一个), rejection)` 的别名.
- `rejected` 状态会调用 `catch` 方法的回调函数,另外 `then` 方法的回调函数如果抛出了错误也会触发 `catch`
- promise 对象的错误具有 `冒泡性质` 会一直向后传递,直到被捕获,也就是说总在下一个 `catch` 语句捕获, 实际使用一般不要在 `then` 方法的第二个参数定义 reject 状态的回调函数,而是总是使用 `catch` 方法
- 如果不使用 `catch` 方法指定错误回调函数,promise 对象抛出的错误不会传递到外层代码->不会有任何反应
- `catch` 后可接 `then` 方法,如果前面没抛出错误会跳过 `catch` 执行后面的 `then` ,后面 `then` 的抛出的错误跟前面的 `catch` 无关,最后还需要一个 `catch` 捕获错误.
- `catch` 方法中还能再抛出错误.

### Promise.finally

- 不管 promise 的状态,在执行完 `then` 和 `catch` 方法以后都会执行 `finally` 回调函数
- `finally` 函数不接受任何参数,也就是说这个函数里的操作必须是不依赖 `promise` 执行结果的.

### Promise.all

- `all` 方法用于将多个 promise 实例,包装成一个新的 promise 实例.接收一个数组(或 Iterator 接口)作为参数.且数组每项需要是 promise 实例,如果不是,默认会调用 promise.resolve 方法将参数转为 promise 实例,后进一步处理.
- `const p = Promise.all()` 方法的返回值状态分两种情况
  - 数组每项返回值都为 `fulfilled` 状态, `p` 的状态才是 `fulfilled` ,返回值组成数组给到 `p` 的回调函数
  - 数组每项中有一个 `rejected` 状态, `p` 的状态就会变成 `rejected` ,第一个被 `reject` 的值给到回调函数
- `all` 方法的数组参数(promise 对象)如果有自己的 `catch` 方法,不会触发 `all` 函数的 `catch` 方法,因为数组实例参数的 `catch` 函数执行完后返回的是一个新的 promise 实例,也会是 `resolved`

### Promise.race

- 跟 `all` 方法类似,不同的是,数组参数只要有一个改变状态, `p` 就会跟着改变状态.并返回改变状态实例的那个值给 p 的回调函数

### Promise.any

- 只要有一个参数实例变成 `fulfilled`状态,包装实例就会变成 `fulfilled` 状态,所有参数实例变成 `rejected`状态  ,包装实例就会变成 `rejected` 状态
- 跟 `race` 方法很像,但不会因为某个 `promise` 变成 `rejected` 状态而结束!

### Promise.allSettled

- 跟 `all` 方法类似,但只有数组所有实例都返回结果,才会结束, 此方法`主要用于确保所有异步操作都已结束`

### Promise.resolve

- 将现有对象转为 promise 对象,状态为 `rejected`

### 实现一个 sleep 函数,可以从 Promise,Generator,Async/Await 考虑

- Promise

```javascript
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ...这里开始你的骚操作
      resolve();
    }, ms);
  });
}
```

## async await

- async 语句往下的其他语句都会变成 `微任务`

## 最新提案(尚未进入标准、但很有希望的最新提案)

### do 表达式

- 本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。
- `do`表达式的逻辑非常简单：封装的是什么，就会返回什么。
- `do`块级作用域提供了单独的作用域，内部操作可以与全局作用域隔绝。
- `do`表达式的好处是可以封装多个语句，让程序更加模块化，就像乐高积木那样一块块拼装起来。
- `do`表达式在 jsx 语法上非常好用,可以代替逻辑复杂,可读性差的三元运算符 去拼接组件等.

```javascript
// 等同于 <表达式>
do { <表达式>; }

// 等同于 <语句>
do { <语句> }


// 下面代码的本质，就是根据函数foo的执行结果，调用不同的函数，将返回结果赋给变量x。
// 使用do表达式，就将这个操作的意图表达得非常简洁清晰。
let x = do {
  if (foo()) { f() }
  else if (bar()) { g() }
  else { h() }
};
```

### throw 表达式

- JavaScript 语法规定`throw`是一个命令，用来抛出错误，不能用于表达式之中。

```javascript
// console.log的参数必须是一个表达式,是throw语句会报错
console.log(throw new Error());
```

- 新提案是允许 throw 用于表达式

```javascript
// 参数的默认值
function save(filename = throw new TypeError("Argument required")) {}

// 逻辑表达式
class Product {
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || throw new Error("Invalid value");
  }
}

// 条件表达式

// 箭头函数的返回值
```

### 管道符

- 新提案,让 JavaScript 也拥有管道机制。

```javascript
// JavaScript管道运算符: |>

// ----------------------------- 基础使用 -----------------------------
x |> f  // 等同于f(x)


// ----------------------------- 链式表达式 -----------------------------
function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}

'hello'
  |> doubleSay
  |> capitalize
  |> exclaim
// "Hello, hello!"

// ----------------------------- 支持await函数 -----------------------------
const userAge = userId |> await fetchUserById |> getAgeFromUser;
// 等同于
const userAge = getAgeFromUser(await fetchUserById(userId));

```

### 双冒号运算符

- 函数绑定运算符是并排的两个冒号（`::`），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即`this`对象），绑定到右边的函数上面.

```javascript
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);
```

- 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。

```javascript
var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);
```

- 如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法。

```javascript
import { map, takeWhile, forEach } from "iterlib";

getPlayers()
  ::map(x => x.character())
  ::takeWhile(x => x.strength > 100)
  ::forEach(x => console.log(x));
```

### ?.(链式判断运算符)

- 短路机制,`?.`运算符相当于一种短路机制，只要不满足条件，就不再往下执行。

```javascript
delete obj?.name;
// obj为假则不执行,为真则删除obj.name属性.
```

### ??运算符

- 理解跟逻辑或||类似,不同的是,逻辑或不能区分出 `0` `false` `''`
- `??`  运算符找到第一个不为 `null`  或 `undefined`  的值

```javascript
let num = 0;
num ?? 100; // 0
num || 100; // 100

false ?? 100; // false
false || 100; // 100
"" ?? 100; // ''
"" || 100; // 100
```
