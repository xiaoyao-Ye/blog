<script setup lang="ts">
import { useData } from 'vitepress'

// 获取当前配色方案
const { isDark } = useData()

const el = 'script'
</script>

<template>
  <div class="comment">
    <component
      :is="el"
      v-if="isDark"
      src="https://giscus.app/client.js"
      data-repo="xiaoyao-Ye/blog"
      data-repo-id="R_kgDOHzY7HA"
      data-category="General"
      data-category-id="DIC_kwDOHzY7HM4CYAQ9"
      data-mapping="title"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="dark"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
    <component
      :is="el"
      v-else
      src="https://giscus.app/client.js"
      data-repo="xiaoyao-Ye/blog"
      data-repo-id="R_kgDOHzY7HA"
      data-category="General"
      data-category-id="DIC_kwDOHzY7HM4CYAQ9"
      data-mapping="title"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="light"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<style lang="scss" scoped>
.comment {
  margin-top: 16px;
}
</style>
