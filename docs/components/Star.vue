<script setup lang="ts"></script>

<template>
  <div class="wave-sine" />
</template>

<style scoped>
@keyframes star {
  0% {
    background-position-x: 10px;
  }
  100% {
    background-position-x: -10px;
  }
}
.wave-sine {
  /* background-image: url('https://viteconf.org/images/icons/wave-sine.svg'); */
  background-image: url('/img/wave-sine.svg');
  background-position-x: 10px;
  background-position-y: center;
  background-repeat: repeat-x;
  background-size: 20px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 8px 2px #00c6ab, 0 0 0 1px #00c6ab;
  box-shadow: 0 0 8px 2px #00c6ab, 0 0 0 1px #00c6ab;
  height: 12px;
  width: 12px;
  animation: star 2s linear infinite;
}
</style>
