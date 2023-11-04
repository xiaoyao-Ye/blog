<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'

interface ListItem {
  text: string
  height: number
}

export default defineComponent({
  name: 'VirtualScroll',
  setup() {
    const itemHeight = 30
    const visibleCount = 10
    const overscanCount = 5

    const wrapper = ref<HTMLDivElement | null>(null)
    const scrollTop = ref(0)
    const viewportHeight = ref(0)
    const items = reactive<ListItem[]>([])
    const visibleItems = computed(() => {
      const start = Math.floor(scrollTop.value / itemHeight)
      const end = Math.min(start + visibleCount + overscanCount, items.length)
      return items.slice(start, end)
    })
    const totalHeight = computed(() => {
      return visibleItems.value.reduce((acc, cur) => acc + cur.height, 0)
    })
    const offsetY = computed(() => {
      return scrollTop.value ? scrollTop.value - overscanCount * itemHeight : 0
    })

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
  <div ref="wrapper" class="wrapper" @scroll="onScroll">
    <div class="placeholder" :style="{ height: `${totalHeight}px` }" />
    <div class="content" :style="{ transform: `translateY(${offsetY}px)` }">
      <div v-for="(item, index) in visibleItems" :key="index" class="item" :style="{ height: `${item.height}px` }">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
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
