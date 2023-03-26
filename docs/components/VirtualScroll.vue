<template>
  <div ref="wrapper" class="wrapper" @scroll="onScroll">
    <div class="placeholder" :style="{ height: totalHeight + 'px' }"></div>
    <div class="content" :style="{ transform: 'translateY(' + offsetY + 'px)' }">
      <div v-for="(item, index) in visibleItems" :key="index" class="item" :style="{ height: item.height + 'px' }">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue'

interface ListItem {
  text: string
  height: number
}

export default defineComponent({
  name: 'VirtualScroll',
  setup() {
    const wrapper = ref<HTMLDivElement | null>(null)
    const scrollTop = ref(0)
    const viewportHeight = ref(0)
    const items = reactive<ListItem[]>([])
    const visibleItems = computed(() => {
      const start = Math.floor(scrollTop.value / itemHeight)
      const end = Math.min(start + visibleCount + overscanCount, items.length)
      return items.slice(start, end)
    })
    // const visibleItems = computed(() => {
    //   const start = Math.floor(scrollTop.value / itemHeight)
    //   const end = Math.min(start + visibleCount + overscanCount, items.length) - overscanCount // 在这里减去 overscanCount
    //   return items.slice(start, end)
    // })

    const totalHeight = computed(() => {
      const start = Math.floor(scrollTop.value / itemHeight)
      const end = Math.min(start + visibleCount + overscanCount * 2, items.length)
      const visibleItems = items.slice(start, end)
      return visibleItems.reduce((acc, cur) => acc + cur.height, 0)
    })
    const offsetY = computed(() => {
      return scrollTop.value - overscanCount * itemHeight
    })

    const itemHeight = 30
    const visibleCount = 10
    const overscanCount = 5

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
