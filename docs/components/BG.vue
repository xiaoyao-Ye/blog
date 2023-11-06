<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const boxShadow = ref('')
function RandomStars(num) {
  const windowHeight = document.body.clientHeight
  const windowWidth = document.body.clientWidth
  let stars = ''
  const colors = [
    '--vp-c-brand',
    '--vp-c-brand-light',
    '--vp-c-brand-lighter',
    '--vp-c-brand-dark',
    '--vp-c-brand-darker',
    '--vp-c-brand-next',
  ]
  for (let i = num; i >= 0; i--) {
    /* X轴坐标 */
    const x = Math.round(Math.random() * windowWidth)
    /* Y轴坐标 */
    const y = Math.round(Math.random() * windowHeight)
    /* 阴影大小 */
    const size = Math.round(Math.random() * 0.52)
    /* 随机透明度 */
    // let o = Math.random() * 0.5
    /* 添加阴影 */
    const index = Math.floor(Math.random() * 6)

    stars += `${x}px ${y}px 0 ${size}px var(${colors[index]}),`
    stars += `${x}px ${windowHeight + y}px 0 ${size}px var(${colors[index]}),`
  }
  /* 截掉最后多余的逗号 */
  stars = stars.slice(0, stars.length - 1)
  /* 添加到页面 */
  boxShadow.value = stars
}
onMounted(() => {
  RandomStars(240)
})
</script>

<template>
  <div class="stars" :style="`box-shadow: ${boxShadow}`" />
</template>

<style lang="scss" scoped>
/*背景星星*/
.stars {
  position: fixed;
  top: 0;
  left: 0;
  height: 1px;
  width: 1px;
  border-radius: 100%;
  background-color: transparent;
  z-index: 1000;
  // 循环翻转播放(向上播放完后向下播放)
  // animation: toTop 36s infinite linear alternate;
  // 反转播放(向下移动 下雪一样)
  // animation: toTop 36s infinite linear reverse;
  // 正常播放(向上移动)
  animation: toTop 36s infinite linear;
}

@keyframes toTop {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100vh);
  }
}
</style>
