<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
  heroLg: {
    type: String,
    required: true
  },
  heroSm: {
    type: String,
    required: true
  }
})

const { mobile } = useDisplay()

const isButtonVisible = ref(true)

const heroHeight = ref('100vh')

const setHeroHeight = () => {
  heroHeight.value = `${window.innerHeight}px`
}

const handleScroll = () => {
  if (window.scrollY > 150) {
    isButtonVisible.value = false
  } else {
    isButtonVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  setHeroHeight()

  window.addEventListener('resize', setHeroHeight)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', setHeroHeight)
})
</script>

<template>
  <v-fade-transition appear>
    <v-parallax v-if="!mobile" :src="props.heroLg" :height="heroHeight" class="position-relative">
      <div class="w-100 h-100" />

      <div
        :class="[
          isButtonVisible ? '' : 'fade-out',
          'text-center position-absolute bottom-15 w-100  pulse'
        ]"
      >
        <span class="text-body-1">explore</span>
        <v-icon icon="fa fa-arrow-down" color="brown-lighten-5" size="18" class="ml-2" />
      </div>
    </v-parallax>

    <div v-else class="position-relative w-100">
      <v-img :src="props.heroSm" alt="Benthos" />

      <div
        :class="[
          isButtonVisible ? '' : 'fade-out',
          'text-center position-absolute bottom-5 w-100  pulse'
        ]"
      >
        <span class="text-body-1">explore</span>
        <v-icon icon="fa fa-arrow-down" color="brown-lighten-5" size="18" class="ml-2" />
      </div>
    </div>
  </v-fade-transition>
</template>

<style lang="scss" scoped>
.pulse {
  animation: pulse-animation 2.5s infinite ease-in-out;
}
@keyframes pulse-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
.bottom-15 {
  bottom: 15vh;
}
.bottom-5 {
  bottom: 5vh;
}
.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
  pointer-events: none;
}
</style>
