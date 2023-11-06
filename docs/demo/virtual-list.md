---
# layout: home
# layout: false
layout: page
aside: false
editLink: false
# lastUpdated: false
title: case
titleTemplate: 虚拟列表
description: 一个不定高的虚拟列表示例, 由 ChatGPT 编写
---

<script setup>
import VirtualScroll from '../components/VirtualScroll.vue'
</script>

<VirtualScroll />

- items: 响应式数组，存储所有的列表项数据
- visibleItems: 通过 computed 计算属性实现，根据 scrollTop 和可视区域高度计算出当前可见的列表项，并返回一个新数组。使用 Math.floor 函数将浮点数转换为整数，从而计算出第一个可见项的索引 start。end 表示可见区域最后一个项的索引，为 start + visibleCount + overscanCount 和 items.length 的最小值。返回的数组包含 items 数组中的 start 到 end 之间的元素。
- totalHeight: 通过 computed 计算属性实现，根据 scrollTop 和可视区域高度计算出当前可见的列表项的高度总和，作为整个列表的高度。与 visibleItems 类似，使用 Math.floor 计算出第一个可见项的索引和最后一个可见项的索引，同时添加额外的 overscanCount 预加载项。在计算高度时，遍历 visibleItems 数组，将每个项的高度相加，返回最终的高度。
- offsetY: 通过 computed 计算属性实现，根据 scrollTop 和 overscanCount 计算出 content 元素的 transform: translateY 属性值。如果 scrollTop 不为 0，则将 overscanCount 个项的高度减去，保证视图顶部有额外的预加载空间。
- generateRandomItems: 随机生成一组列表项数据，将其设置为 items 数组的新值。
- onScroll: 监听 wrapper 元素的滚动事件，并将滚动条距离顶部的距离设置为 scrollTop 变量的值。
- watch: 监听 wrapper 变量的变化。当 wrapper 变量从 null 变为真实 DOM 元素时，初始化 viewportHeight 变量的值，调用 generateRandomItems 函数生成随机列表项数据。

```vue
<script lang="ts">
// 导入 Vue 相关的 API
import { computed, defineComponent, reactive, ref, watch } from 'vue'

// 声明列表项的数据类型
interface ListItem {
  text: string
  height: number
}

// 定义组件
export default defineComponent({
  // 组件名称
  name: 'VirtualScroll',

  // 设置组件的各项数据和函数
  setup() {
    // 滚动容器的 DOM 引用
    const wrapper = ref<HTMLDivElement | null>(null)
    // 当前滚动位置
    const scrollTop = ref(0)
    // 可见区域的高度
    const viewportHeight = ref(0)
    // 列表中的所有项
    // const items = reactive<ListItem[]>([])
    const items = reactive<any>([])
    // 可见的列表项
    const visibleItems = computed(() => {
      // 计算出可见的起始和结束位置
      const start = Math.floor(scrollTop.value / itemHeight)
      const end = Math.min(start + visibleCount + overscanCount, items.length)
      // 返回可见的列表项数组
      return items.slice(start, end)
    })
    // 计算所有可见项的总高度
    const totalHeight = computed(() => {
      const start = Math.floor(scrollTop.value / itemHeight)
      const end = Math.min(start + visibleCount + overscanCount * 2, items.length)
      const visibleItems = items.slice(start, end)
      return visibleItems.reduce((acc, cur) => acc + cur.height, 0)
    })
    // 计算当前滚动位置需要移动的偏移量
    const offsetY = computed(() => {
      return scrollTop.value ? scrollTop.value - overscanCount * itemHeight : 0
    })

    // 列表项的高度
    const itemHeight = 30
    // 可见区域内可容纳的列表项个数
    const visibleCount = 10
    // 预渲染的列表项数量
    const overscanCount = 5

    // 生成随机列表项的函数
    const generateRandomItems = () => {
      const newItems: ListItem[] = []
      for (let i = 0; i < 1000; i++) {
        newItems.push({
          text: `Item ${i}`,
          height: Math.floor(Math.random() * 50) + 30,
        })
      }
      items.length = 0
      items.push(...newItems)
    }

    const onScroll = () => {
      scrollTop.value = wrapper.value?.scrollTop || 0
    }

    watch(wrapper, (wrapperEl) => {
      if (wrapperEl) {
        viewportHeight.value = wrapperEl.clientHeight
        generateRandomItems()
      }
    })

    return {
      wrapper,
      visibleItems,
      totalHeight,
      offsetY,
      onScroll,
    }
  },
})
</script>

<template>
  <!-- 整个组件的容器 -->
  <div ref="wrapper" class="wrapper" @scroll="onScroll">
    <!-- 占位元素，用于撑开高度 -->
    <div class="placeholder" :style="{ height: `${totalHeight}px` }" />
    <!-- 可见的元素列表，位于滚动容器内部 -->
    <div class="content" :style="{ transform: `translateY(${offsetY}px)` }">
      <!-- 遍历可见元素列表，渲染每个元素 -->
      <div v-for="(item, index) in visibleItems" :key="index" class="item" :style="{ height: `${item.height}px` }">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  overflow: auto;
  height: 300px;
  border: 1px solid gray;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.content {
  position: relative;
  width: 100%;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
}
</style>
```
