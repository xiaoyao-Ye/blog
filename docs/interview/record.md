# 记录一些面试题

1. position 的值， relative 和 absolute 分别是相对于谁进行定位的？

   - absolute :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。
   - fixed （老 IE 不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。
   - relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。
   - static 默认值。没有定位，元素出现在正常的流中

2. XML 和 JSON 的区别？

   - 数据体积方面: JSON 相对于 XML 来讲，数据的体积小，传递的速度更快些。
   - 数据交互方面: JSON 与 JavaScript 的交互更加方便，更容易解析处理，更好的数据交互。
   - 数据描述方面: JSON 对数据的描述性比 XML 较差。
   - 传输速度方面: JSON 的速度要远远快于 XML。

3. 清除浮动的几种方式，各自的优缺点

   - 使用空标签清除浮动 clear:both（理论上能清楚任何标签，，，增加无意义的标签）
   - 使用 overflow:auto（空标签元素清除浮动而不得不增加无意代码的弊端,,使用 zoom:1 用于兼容 IE）
   - 是用 after 伪元素清除浮动(用于非 IE 浏览器)

4. 浏览器的垃圾回收机制（方法说出来，然后听听候选人自己能讲多少即可）

   垃圾收集器必须跟踪哪个变量有用哪个变量没用，对于不再有用的变量打上标记，以备将来收回其占用的内存，内存泄露和浏览器实现的垃圾回收机制息息相关，而浏览器实现标识无用变量的策略主要有下两个方法：

   1. 引用计数法跟踪记录每个值被引用的次数

      当声明一个变量并将引用类型的值赋给该变量时，则这个值的引用次数就是 1.

      如果同一个值又被赋给另一个变量，则该值的引用次数加 1.

      相反，如果包含对这个值引用的变量又取得另外一个值，则这个值的引用次数减 1.

      当这个值的引用次数变成 0 时，则说明没有办法访问这个值了，因此就 可以将其占用的内存空间回收回来。
      如：

      ```JavaScript
      var a = {}; //对象{}的引用计数为 1
      b = a;      //对象{}的引用计数为 1+1
      a = null;   //对象{}的引用计数为 2-1
      ```

      所以这时对象{}不会被回收;

      IE 6, 7 对 DOM 对象进行引用计数回收，这样简单的垃圾回收机制，非常容易出现循环引用问题导致内存不能被回收，进行导致内存泄露等问题，一般不用引用计数法。

   2. 标记清除法

      到 2008 年为止，IE,Firefox,Opera,Chrome 和 Safari 的 javascript 实现使用的都是标记清除式的垃圾收集策略（或类似的策略），只不过垃圾收集的时间间隔互有不同。

      标记清除的算法分为两个阶段，标记(mark)和清除(sweep). 第一阶段从引用根节点开始标记所有被引用的对象，第二阶段遍历整个堆，把未标记的对象清除。

5. 哪些常见操作会造成内存泄漏？

   > 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。概念）

   垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

   - setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
   - 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）。

6. 前端优化（提高网页的加载速度） ？

   1. 减少 http 请求数
   2. 使用缓存
   3. 压缩 js，css 文件，减小文件体积
   4. 使用 cdn，减小服务器负担
   5. 懒加载图片
   6. 预加载 css，js 文件
   7. 避免 dom 结构的深层次嵌套
   8. 给 DOM 元素添加样式时，把样式放到类中，直接给元素添加类，减少重构，回流

7. this 对象的理解？

   - this 总是指向函数的直接调用者（而非间接调用者）；
   - 如果有 new 关键字，this 指向 new 出来的那个对象；
   - 在事件中，this 指向触发这个事件的对象，特殊的是，IE 中的 attachEvent 中的 this 总是指向全局对象 Window。

8. Javascript 如何实现继承？

   > 听到这几个关键词就行，后面让候选人自己展开讲，越多一般能说明基础越扎实，理解越深

   1. 构造继承
   2. 原型继承
   3. 实例继承
   4. 拷贝继承

9. 如何放 sql 注入

   > 防 sql 注入基本所有页面都会做，就算没做过，概念也会听过

   sql 注入原理:

   就是通过把 SQL 命令插入到 Web 表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的 SQL 命令。

   总的来说有以下几点：

   1. 永远不要信任用户的输入，要对用户的输入进行校验，`可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等`。
   2. 永远不要使用动态拼装 SQL，可以使用参数化的 SQL 或者直接使用存储过程进行数据查询存取。
   3. 永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
   4. `不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息`。

10. 选择器有哪些?

    - id 选择器.
    - 类选择器.
    - 标签选择器.
    - 伪类选择器.
    - 伪元素选择器.
    - 通配符
    - 属性选择器.
    - 组合选择器.

11. js 判断数组的方法?

    ```JavaScript
    let arr = [];
    // 1.instanceof 操作符判断===instanceof 主要是用来判断某个实例是否属于某个对象
    // arr instanceof Array;
    console.log(arr instanceof Array);          //true

    // 2.对象构造函数的 constructor判断===Object的每个实例都有构造函数 constructor，用于保存着用于创建当前对象的函数
    // arr.constructor === Array;
    console.log(arr.constructor === Array);     // true

    // 3.Array 原型链上的 isPrototypeOf===Array.prototype  属性表示 Array 构造函数的原型===其中有一个方法是 isPrototypeOf() 用于测试一个对象是否存在于另一个对象的原型链上。
    Array.prototype.isPrototypeOf(arr);
    console.log(Array.prototype.isPrototypeOf(arr));    // true

    // 4.Object.getPrototypeOf===Object.getPrototypeOf() 方法返回指定对象的原型
    Object.getPrototypeOf(arr) === Array.prototype
    console.log(Object.getPrototypeOf(arr) === Array.prototype);    // true

    // 5.Object.prototype.toString===虽然Array也继承自Object，但js在Array.prototype上重写了toString，而我们通过toString.call(arr)实际上是通过原型链调用了。
    Object.prototype.toString.call(arr) === '[object Array]'
    console.log(Object.prototype.toString.call(arr) === '[object Array]');

    // 6.Array.isArray===用法：Array.isArray(arr) ,ES5中新增了Array.isArray方法,IE8及以下不支持
    Array.isArray(arr);
    console.log(Array.isArray(arr));
    ```

12. 用 JS 实现把两个数组合并，并删除元素

    合并 js 数组用 concat 方法，array1.concat(array2)。
    删除元素用 splice 方法，splice(1,1)，函数原型 splice(index,count)，指从数组索引 1 处开始删除 1 个元素，索引从 0 开始，即删除第二个元素。

13. CSS 之左右固定，中间自适应

    ① 运用 float,左右浮动,中间采用 margin-left 和 margin-right (三个 div 的顺序：center 必须是最后一个)
    ② 左右两侧采用绝对定位 中间同样采用 margin-left margin-right 方法 (不需要考虑 div 的顺序)
    ③flex 左右设定固定宽度 中间设置 flex:1 (按顺序写)

14. 怎么看 Vue3.0(对 vue3.0 的了解)

    Vue3.0 和 Vue2.0 的区别? vue3.0 主要优化的几点大概是:

    - 实现了数组的全方面监听，数据的监听方式由 getter/setter 改为了 proxy 代理，以及可以对目标对象选择监听
    - 默认进行懒观察（lazy observation）。在 2.0 版本里，不管数据多大，都会在一开始就为其创建观察者。当数据很大时，这可能会在页面载入时造成明显的性能压力。3.x 版本，只会对 `被用于渲染初始可见部分的数据` 创建观察者，而且 3.x 的观察者更高效。
    - 更精准的变更通知。 比例来说：2.x 版本中，你使用 Vue.set 来给对象新增一个属性时，这个对象的所有 watcher 都会重新运行；3.x 版本中，只有依赖那个属性的 watcher 才会重新运行。
    - 版本 3.0 新加入了 TypeScript 以及 PWA 的支持: 布局的新技术,在网页应用中实现和原生应用相近的用户体验的渐进式网页应用
    - 新增 .browserslistrc 文件部分命令发生了变化,做浏览器的兼容
    - 命令改变

    下载安装 npm install -g vue@cli 删除了 vue list

    创建项目 vue create

    启动项目 npm run serve

    默认项目目录结构也发生了变化： 移除了配置文件目录，config 和 build 文件夹 移除了 static 文件夹，

    新增 public 文件夹，并且 index.html 移动到 public 中 在 src 文件夹中新增了 views 文件夹，用于分类 视图组件 和 公共组件

15. 异步请求要得到结果后才能进行下一步操作该怎么做?
