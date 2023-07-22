<template>
  <div class="stars" :style="`box-shadow: ${boxShadow}`"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const boxShadow = ref("");
const RandomStars = num => {
  let windowHeight = document.body.clientHeight;
  let windowWidth = document.body.clientWidth;
  let stars = "";
  const colors = [
    "--vp-c-brand",
    "--vp-c-brand-light",
    "--vp-c-brand-lighter",
    "--vp-c-brand-dark",
    "--vp-c-brand-darker",
    "--vp-c-brand-next",
  ];
  for (let i = num; i >= 0; i--) {
    /*X轴坐标*/
    let x = Math.round(Math.random() * windowWidth);
    /*Y轴坐标*/
    let y = Math.round(Math.random() * windowHeight);
    /*阴影大小*/
    let size = Math.round(Math.random() * 0.52);
    /*随机透明度*/
    // let o = Math.random() * 0.5
    /*添加阴影*/
    const index = Math.floor(Math.random() * 6);

    stars += `${x}px ${y}px 0 ${size}px var(${colors[index]}),`;
    stars += `${x}px ${windowHeight + y}px 0 ${size}px var(${colors[index]}),`;
  }
  /*截掉最后多余的逗号*/
  stars = stars.slice(0, stars.length - 1);
  /*添加到页面*/
  boxShadow.value = stars;
};
onMounted(() => {
  RandomStars(240);
});
</script>

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
