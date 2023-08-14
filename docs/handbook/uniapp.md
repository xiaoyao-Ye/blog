# uniapp

## 禁止弹窗遮罩层下的页面滚动

给弹窗的最外层 view 添加 `@touchmove.stop.prevent` 事件, 主要是为了设置 touchmove 的 `.stop.prevent`
事件本身如果没有使用到可以不绑定函数

```vue
<template>
  <view>
    <view class="mask" @touchmove.stop.prevent="moveHandle"></view>
    <!-- or -->
    <view class="mask" @touchmove.stop.prevent></view>
  </view>
</template>

<script>
export default {
  methods: {
    moveHandle() {},
  },
};
</script>
```

## input 光标颜色

```css
input {
  color: #fff;
  caret-color: #fff;
}
```

在 ios 上光标的颜色是绿色的设置 color 和 caret-color 都不生效, 可以自己写一个光标模拟或者当前页面使用 webview
