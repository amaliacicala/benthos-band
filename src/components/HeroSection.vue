<script setup lang="ts"></script>

<template>
  <div class="background" />
</template>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/hero_image.avif');
  background-position: center;
  opacity: 0.4;
  animation: animatedBackground 10s ease-in-out infinite alternate;
}

@keyframes animatedBackground {
  from {
    background-size: 100%;
  }
  to {
    background-size: 105%;
  }
}
</style>
