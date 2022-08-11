# Vue

## 注册全局组件更好的方法

```javascript
const globalCompoes = require.context(
  // 其组件目录的相对路径
  "./components/global",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[a-zA-Z]+\-[a-zA-Z]+\.vue$/
);
//遍历并注册全局组件
globalCompoes.keys().forEach((fileName) => {
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
    componentConfig.default || componentConfig
  );
});
```

## vue-自定义图片懒加载指令

- imgLazy.js

```javascript
import baseImg from "@/assets/logo.png"; // 默认加载图片
// 创建一个监听器
let observer = new IntersectionObserver((entries) => {
  // entries是所有被监听对象的集合
  entries.forEach((entry) => {
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
    Object.keys(components).forEach((key) => Vue.use(components[key]));
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
  render: (h) => h(App),
}).$mount("#app");
```

## 自动注册全局组件

- 全局需要用到的,并且轻量的组件才适合注册为全局组件.表单,文本编辑器这种最好还是懒加载
- 全局组件应该有一个单独的命名规范,阅读代码就知道这是个全局组件例如: globel-user-select

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
        .then((res) => {
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

## .sync

```html
// children  更新方式
this.$emit('update:data', newVal);

// parent    使用方式
<Component :data.sync="data"></component>
// 等同于↓:  父组件节省了一个函数声明↑
<Component :data="data" @update:data="e => data = e"></component>
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
import Two from '../components/Two.vue'
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
    let move = (e) => {
      this.move(e);
    };
    let end = (e) => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
    };
    el.addEventListener("mousedown", (e) => {
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
