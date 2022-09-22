<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const theme = window.localStorage.getItem('vitepress-theme-appearance')
  if (theme === null) {
    window.localStorage.setItem('vitepress-theme-appearance', 'dark')
    window.location.reload()
  }
})
</script>

<style scoped></style>
