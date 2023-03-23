<template>
  <div>
    <div class="meteor">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
    <div class="bg">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bg,
.meteor {
  position: fixed;
  width: 100vw;
  height: 100vh;
  transform: rotate(45deg);
}

.meteor {
  .star {
    position: absolute;
    height: 2px;
    background: linear-gradient(-45deg, #5f91ff, rgba(255, 255, 255, 0));
    filter: drop-shadow(0 0 4px #fff);
    border-radius: 2px;
    animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;

    &:nth-child(1) {
      left: -30%;
      top: 30%;
      filter: drop-shadow(0 0 2px #fff);
    }

    &:nth-child(2),
    &:nth-child(6) {
      left: 20%;
      top: 70%;
      animation-delay: 8s;
      animation-duration: 4s;
      filter: drop-shadow(0 0 10px #fff);

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 4px;
        content: '';
        border-radius: 10px;
        background: linear-gradient(-45deg, #fff, rgba(255, 255, 255, 0));
        filter: drop-shadow(0 0 10px #fff);
      }
    }

    &:nth-child(3) {
      left: -15%;
      top: 40%;
      animation-delay: 4s;
      animation-duration: 6s;
    }

    &:nth-child(4) {
      left: 10%;
      top: 50%;
      animation-delay: 2s;
      animation-duration: 7s;
      filter: drop-shadow(0 0 8px #fff);
    }

    &:nth-child(5) {
      left: 10%;
      top: 10%;
      animation-delay: 6s;
      animation-duration: 5s;
    }
  }
}

.bg {
  > div:nth-child(1) {
    width: 2px;
    height: 2px;
    border-radius: 2px;
    box-shadow: -110px 10vh #fff, -90px 20vh #fff, -200px 30vh #fff, 0px 30vh #fff, -100px 40vh #fff, 0px 45vh #fff,
      300px 85vh #fff, 100px 80vh #fff, 400px 70vh #fff, 200px 60vh #fff, 400px 50vh #fff, 200px 38vh #fff,
      -210px 10vh #fff, -190px 20vh #fff, -400px 30vh #fff, -100px 30vh #fff, -300px 40vh #fff, -90px 45vh #fff,
      -300px 85vh #fff, -200px 80vh #fff, -400px 70vh #fff, -700px 60vh #fff, -400px 50vh #fff, -300px 38vh #fff;
    animation: shooting 80s linear infinite;
  }

  > div:nth-child(2) {
    width: 4px;
    height: 4px;
    border-radius: 4px;
    box-shadow: 100px 70vh #fff, 200px 80vh #fff, 400px 60vh #fff, 300px 90vh #fff, 200px 60vh #fff, 100px 50vh #fff,
      -120px 40vh #fff, 100px 30vh #fff, -180px 70vh #fff, -200px 81vh #fff, -400px 63vh #fff, -300px 88vh #fff,
      -200px 63vh #fff, -100px 55vh #fff, -220px 42vh #fff, -100px 33vh #fff;
    animation: shooting 100s linear infinite;
  }

  > div:nth-child(3) {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    box-shadow: 100px 60vh 2px #fff, 0px 8vh 4px #fff, -50px 18vh 4px #fff, -130px 37vh 4px #fff, 130px 36vh 4px #fff,
      430px 76vh 6px #fff, -100px 62vh 2px #fff, -110px 9vh 4px #fff, -500px 28vh 4px #fff, -300px 38vh 2px #fff,
      -130px 17vh 4px #fff, -430px 77vh 4px #fff;
    animation: shooting 140s linear infinite;
  }
}

@keyframes tail {
  0% {
    width: 0;
  }

  30% {
    width: 80vw;
  }

  to {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(-20vw);
  }

  to {
    transform: translateX(140vw);
  }
}

// TODO: 伪元素+
@keyframes shining {
  0% {
    width: 0;
  }

  50% {
    width: 1.875rem;
  }

  to {
    width: 0;
  }
}
</style>
