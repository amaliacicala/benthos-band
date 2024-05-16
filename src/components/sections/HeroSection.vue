<script setup lang="ts"></script>

<template>
  <div class="background w-100" />
</template>

<style lang="scss" scoped>
.background {
  height: 100vh;
  background-image: url('@/assets/hero_image_desktop.avif');
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  animation: animatedBackground 15s ease-in-out infinite alternate;

  @media screen and (max-width: 600px) {
    background-image: url('@/assets/hero_image_mobile.avif');
    opacity: 1;
    animation: none;
  }
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
