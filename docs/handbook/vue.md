# Vue

## vue 的生命周期

- before create data 和 methods 中的数据还没有初始化,不能使用 data 中的数据和 methods 中的方法
- created data 和 methods 已经初始化完毕了,可以使用 data 中的数据和 methods 中的方法
- before mount template 模板已经编译好了,但是还没有挂载到页面上
- mounted DOM 挂载完毕了,可以操作 dom 元素了.
- before update data 中的数据已经更新了.但是还没有同步到页面上
- updated data 中的数据和页面都已经更新完成了.
- before destroy vue 实例进入销毁阶段,这个阶段 data,methods,指令,过滤器等都是可以用的.
- destroyed 此时组件已经销毁了.data.methods 都不可用.

## vue 常用指令

- v-cloak 配合 css 的[v-cloak] {display: none} 来隐藏未编译的 Mustache(胡子)标签
- v-bind 用于响应式的更新 HTML 属性(绑定属性)
- v-on 用户监听 DOM 事件(绑定事件)
- v-model 双向绑定
- v-if 根据表达式的值是 true 还是 false 来决定 创建/移除元素
- v-show 根据表达式的值是 true 还是 false 来决定 显示/隐藏元素
- v-for 循环
- v-html 插入 html 内容
- v-text 插入文本内容

## vue 常用修饰符

- .sync 实现双向绑定
- .stop 阻止冒泡事件
- .self 事件绑定的元素本身触发时才调用
- .prevent 阻止默认事件
- .once 事件只能触发一次
- .native 触发组件的原生标签事件

表单修饰符

- .lazy 在输入框输入完内容，光标离开时才更新视图
- .trim 过滤首尾空格
- .number 如果先输入数字，那它就会限制你输入的只能是数字;如果先输入字符串，那就相当于没有加.number

## .sync

```html
// children 更新方式 this.$emit('update:data', newVal); // parent 使用方式
<Component :data.sync="data"></Component>
// 等同于↓: 父组件节省了一个函数声明↑
<Component :data="data" @update:data="e => data = e"></Component>
```

## vue 组件间的通信

- bus 模式,既通过发布订阅的方式
- vuex 集中式储存管理所有组件的状态.
- 父子组件传值
  - 父传子: 父组件绑定一个自定义的变量=需要传的数据 -> 子组件 props: ['父组件绑定的变量']
  - 子传父: 子组件通过$emit('自定义一个变量', 提交给父组件的数据) -> 父组件给子组件定义的变量绑定一个事件=接受传递过来的值

## 注册全局组件更好的方法

```javascript
const globalCompoes = require.context(
  // 其组件目录的相对路径
  "./components/global",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[a-zA-Z]+\-[a-zA-Z]+\.vue$/,
);
//遍历并注册全局组件
globalCompoes.keys().forEach(fileName => {
  // 获取组件配置
  // ./article-button.vue
  const componentConfig = requireComponent(fileName);
  //去除文件名中的 './'和'.vue'字符
  const componentName = fileName.replace(/\.\/|\.vue/g, "");
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig,
  );
});
```

## vue-自定义图片懒加载指令

- imgLazy.js

```javascript
import baseImg from "@/assets/logo.png"; // 默认加载图片
// 创建一个监听器
let observer = new IntersectionObserver(entries => {
  // entries是所有被监听对象的集合
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当被监听元素到临界值且未加载图片时触发。
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src);
    }
  });
});

function showImage(el, imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  };
}
export default {
  // 这里用inserted和bind都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点
  // inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。
  inserted(el, binding) {
    // 初始化时展示默认图片
    el.src = baseImg;
    // 将需要加载的图片地址绑定在dom上
    el.data_src = binding.value;
    observer.observe(el);
  },
  unbind() {
    // 停止监听
    observer.disconnect();
  },
};
```

- 使用

```vue
<template>
  <div id="pic">
    <div class="container">
      <div v-for="(item, index) in imgSrc" :key="index">
        <img v-imgLazy="item" />
      </div>
    </div>
  </div>
</template>

<script>
import imgLazy from "@/directives/imgLazy.js";
export default {
  data() {
    return {
      imgSrc: [
        require("../../assets/img/000846-15763397267e73.jpg"),
        require("../../assets/img/004348-1587314628f09b.jpg"),
        require("../../assets/img/01.jpg"),
        require("../../assets/img/1751409cw4v2lk7xlypbsn.jpg"),
        require("../../assets/img/175141wpllyfapb7ni1t74.jpeg"),
        require("../../assets/img/183634-1568716594f366.jpg"),
        require("../../assets/img/20180302213716_PFimT.png"),
        require("../../assets/img/204554-1560516354e91c.jpg"),
        require("../../assets/img/205524-1566651324f88b.jpg"),
        require("../../assets/img/213207-156665352785d3.jpg"),
        require("../../assets/img/213246-1586525566c099.jpg"),
        require("../../assets/img/223248-1587393168c0ea.jpg"),
        require("../../assets/img/224324-15888626046f80.jpg"),
        require("../../assets/img/230431-15854078717b4e.jpg"),
        require("../../assets/img/230543-15651903432d35.jpg"),
        require("../../assets/img/231118-1586704278f13e.jpg"),
        require("../../assets/img/233900-1579621140c81d.jpg"),
        require("../../assets/img/234703-1584114423c3de.jpg"),
        require("../../assets/img/235000-1584114600db79.jpg"),
        require("../../assets/img/376bd4d1abd8d88567bd3f8117d0bc9e.png"),
        require("../../assets/img/3e498b158cd39730a471aa1c1fb96966d9175bf1.jpg"),
        require("../../assets/img/5d68d603daf16.jpg"),
        require("../../assets/img/5ddb867c4250c.jpg"),
      ],
    };
  },
  // 组件内注册指令
  directives: {
    imgLazy: imgLazy,
  },
};
</script>

<style></style>
```

## 优雅注册插件

一般在使用组件库时，为了减小包体积，都是采用按需加载的方式。如果在入口文件内逐个引入组件会让 `main.js` 越来越庞大，基于模块化开发的思想，最好是单独封装到一个配置文件中。配合上 `Vue.use`，在入口文件使用能让人一目了然

- vant.config.js(按需导入 element-ui 和 ant-design-vue 也是这样)

```javascript
import { Toast, Button } from "vant";

const components = {
  Toast,
  Button,
};

const componentsHandler = {
  install(Vue) {
    Object.keys(components).forEach(key => Vue.use(components[key]));
  },
};

export default componentsHandler;
```

- main.js

```javascript
import Vue from "vue";
import vantCompoents from "@/config/vant.config";

Vue.config.productionTip = false;

Vue.use(vantCompoents);

new Vue({
  render: h => h(App),
}).$mount("#app");
```

## 自动注册全局组件

- 全局需要用到的,并且轻量的组件才适合注册为全局组件.表单,文本编辑器这种最好还是懒加载
- 全局组件应该有一个单独的命名规范,阅读代码就知道这是个全局组件例如: global-user-select

```javascript
// 通过webpack的require.context导入.Object.keys()循环注册.
// 后续找资料补充
```

## 过滤器复用

- 选项配置都会被存储在实例的 `$options` 中，所以只需要获取 `this.$options.filters` 就可以拿到实例中的过滤器
- `this.$options.filters` 会顺着 `__proto__` 向上查找,所以还能获取到全局的过滤器

```html
<div>{{ text | capitalize }}</div>
```

```javascript
export default {
  data() {
    return {
      text: "hello",
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    getDetail() {
      this.$api
        .getDetail({
          id: this.id,
        })
        .then(res => {
          // this.$options.filters可以找到实例中过滤器钩子里面的函数.
          let capitalize = this.$options.filters.capitalize;
          this.title = capitalize(res.data.title);
        });
    },
  },
};
```

## $attrs && $listeners

- props 没有定义的属性会被$attrs传递,没有$emit()的方法会被$listeners 传递.
- 封装第三方组件的时候,一般只会根据业务封装传递一些需要用到属性/方法的 prop.
- 有一些特殊情况可能需要用到第三方组件的一些属性或者方法,但是你的封装没有传递,这个时候可以使用:

```html
// children
<el-input :$attrs @$listeners />

// parent
<Children type="textarea" placeholder="请输入内容"></Children>
// 上面两个属性和下面方法都能触发element-ui input组件的属性和方法
<Children @change="xxx"></Children>
```

## computed

- 使用 get 和 set 的经典操作: 一个 v-model 绑定表单的值需要随时存到 vuex 中,

```javascript
computed: {
  msg: {
    get() {
      return this.$store.store.msg;
    },
    set(val) {
      this.$store.commit('updateMsg', val)
    }
  }
}
```

## watch

- watch 监听对象中的单个属性

```javascript
watch: {
   'obj.a': {
      handler (newName, oldName) {
        console.log('obj.a changed')
      },
      deep: true    // 深度监控
   }
}
```

- 另一种达到同样效果的方法是通过 computed 属性

```javascript
computed: {
    newObjA() {
      return this.obj.a
    }
}
```

## hook

- 组件使用,子组件在某个声明周期需要触发父组件的一个函数.需要在这个声明周期$emit()去触发父组件的函数.
  - 而使用 hook 之后不再需要子组件$emit,

```vue
// parent
<Component @hook:mounted="can"></Component>
```

- 生命周期里使用,注册事件后销毁事件 ↓

```javascript
// 正常销毁resize事件
mounted() {
  window.addEventListener('resize', this.resizeHandler);
},
beforeDestroy() {
  window.removeEventListener('resize', this.resizeHandler);
}

// hook方式销毁resize事件
mount() {
  window.addEventListener('resize', this.resizeHandler);
  this.$on('hook:destroyed', () => {
    window.removeEventListener('resize', this.resizeHandler);
  })
}
```

## 调试 template

```javascript
// main.js
Vue.prototype.$log = window.console.log;

// 使用
<div>{{$log(info)}}</div>
```

## 动态组件

```vue
<template>
  <div>
    <component :is="isToggle ? one : two"></component>
  </div>
</template>

<script>
import One from "../components/One.vue";
import Two from "../components/Two.vue";
export default {
  data() {
    return {
      isToggle: false,
      one: "One",
      two: "Two",
    };
  },
  components: {
    One,
    Two,
  },
};
</script>
```

## vue 可拖拽改变大小组件

```javascript
export class Drag {
  //构造函数
  constructor(el) {
    this.el = el;
    //鼠标摁下时的元素位置
    this.startOffset = {};
    //鼠标摁下时的鼠标位置
    this.startPoint = {};
    let move = e => {
      this.move(e);
    };
    let end = e => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
    };
    el.addEventListener("mousedown", e => {
      this.start(e);
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", end);
    });
  }
  //摁下时的处理函数
  start(e) {
    let { el } = this;
    this.startOffset = {
      x: el.offsetLeft,
      y: el.offsetTop,
    };
    this.startPoint = {
      x: e.clientX,
      y: e.clientY,
    };
  }
  //鼠标移动时的处理函数
  move(e) {
    let { el, startOffset, startPoint } = this;
    let newPoint = {
      x: e.clientX,
      y: e.clientY,
    };
    let dis = {
      x: newPoint.x - startPoint.x,
      y: newPoint.y - startPoint.y,
    };
    el.style.left = dis.x + startOffset.x + "px";
    el.style.top = dis.y + startOffset.y + "px";
  }
}

// 使用时,导入Drag函数
// new Drag(el)即可
```

## vuex

```js
// 创建vuex
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

// 使用vuex需要注入到vue实例
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
```

- 通过 `store.state` 来获取状态对象
- 通过 `store.commit` 来提交 mutations 里的方法来改变状态对象
- 通过 `store.dispatch` 来提交 actions 中的方法来改变状态对象
- state: 储存数据
- mutations: 提交更改 state 的方法,mutation 是同步的
- actions: 提交的是 mutation,而不是直接更改数据,action 可以包括任意异步操作
- getters 可以理解为 vuex 中的计算属性
- modules 当 vuex 数据过多时,为了方便管理,可以用 module 划分出模块,每个模块都有对应的(`state` , `mutations` , `actions` ,`getter`)

## vue-router

```js
// router.ts
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/admin/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      beforeEnter: (to, from, next) => {
        next();
      },
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: "",
          name: "header",
          component: () => import(/* webpackChunkName: "header" */ "./views/admin/subPage/Header.vue"),
        },

        {
          path: "/banner",
          name: "banner",
          component: () => import(/* webpackChunkName: "banner" */ "./views/admin/subPage/Banner.vue"),
        },
        {
          path: "/admin",
          name: "admin",
          component: () => import(/* webpackChunkName: "admin" */ "./views/admin/Admin.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "./views/Login.vue"),
      meta: {
        keepAlive: false, //不需要被缓存的组件
      },
    },
    {
      path: "*",
      name: "404",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
    },
  ],
});

// 路由导航钩子的用法
router.beforeEach((to, from, next) => {
  if (from.path.indexOf("/preview") < 0) {
    sessionStorage.setItem("prevToPreviewPath", from.path);
  }
  next();
});

export default router;
```

vue-router 的跳转方式?

- 声明式导航. router-link
- 编程式导航. push
- router.replace(...)或 `<router-link :to="..." replace>` 不可以返回原页面
- router.go(n) n 是整数,意思是在 history 记录中向前或者向后退多少步,类似`window.history.go(n)`

## vue 按需加载组件

按需加载组件可以优化项目的性能,减少首屏渲染时间,更改 router 的导入组件方式如下任一种即可:

- 使用 `() => import('导入组件的路劲')`
- 使用 `resolve => require(['导入组件的路径'], resolve)`

## vue data 中无法检测到 arr 和 obj 的注意事项

vue 无法检测到 data 属性值为数组或对象的修改，所以我们需要用原对象与要混合进去的对象的属性一起创建一个新的对象。可以使用 this.$set 或者对象的深拷贝，如果是数组则可以使用 splice，扩展运算符等方法来更新。

## vue 中怎么在下次 DOM 更新循环结束之后执行延迟回调?

使用 this.$nextTick();

## vue.3.3

- 新增 `defineOptions` 在 `script setup` 中使用这个函数配置 options , 不在需要单独的 `script`
- defineProps 现在允许使用导入的类型或全局的类型(之前只能在当前的 vue 文件声明类型或者直接写在 `defineProps<T>` 上)
- 使用 `<script setup>` 的组件现在可以通过 `generic` 属性接受通用类型参数：

```vue
<script setup lang="ts" generic="T">
defineProps<{
  items: T[];
  selected: T;
}>();
</script>
```

- defineEmits 语法变更

  ```vue
  <script setup>
  // BEFORE
  const emit = defineEmits<{
  (e: 'foo', id: number): void
  (e: 'bar', name: string, ...rest: any[]): void
  }>()
  // AFTER
  const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
  }>()
  </script>
  ```

- 新增 `defineSlots` 带类型的插槽, 用于为 IDE 提供插槽名称和 props 类型检查的类型提示
- `toValue` 和 `toRef` 新特性

实验功能(实验性功能都需要明确选择使用, 使用 vite 的话在 vite.config.ts 中配置)

- 解构可以保持数据的响应式
- 简化了父子组件的 v-model 响应式语法, 不再需要定义 defineProps(['modelValue']) 和 defineEmits('update:modelValue'), 直接使用 `defineModel` 返回的变量就相当于一个 ref
