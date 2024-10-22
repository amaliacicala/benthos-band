<script setup lang="ts">
import { useDisplay } from 'vuetify'
import SocialMediaButtons from '@/components/atoms/SocialMediaButtons.vue'

const { mobile } = useDisplay()
</script>

<template>
  <v-footer absolute app class="d-flex align-center bg-dark text-primary text-body-2 px-12">
    <v-container>
      <v-row class="bg-dark">
        <v-col cols="12" md="3" class="d-flex align-center justify-center justify-md-start py-0">
          <p class="pt-2 pt-md-0" :style="{ fontSize: '12px' }">
            Benthos © {{ new Date().getFullYear() }}
          </p>
        </v-col>

        <v-col cols="12" md="6" class="d-flex align-center justify-center py-0">
          <SocialMediaButtons :color="'text-primary'" />
        </v-col>

        <v-col cols="12" md="3" class="d-flex align-center justify-center justify-md-end py-0 pl-0">
          <p :style="{ fontSize: mobile ? '10px' : '12px' }">website by Amalia Cicala</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
.v-footer {
  border-top: solid 3px;
  @media screen and (max-width: 959px) {
    border-image: url('@/assets/backgrounds/small/pattern-sm.avif') 20 round;
  }
  @media screen and (min-width: 960px) and (max-width: 1279px) {
    border-image: url('@/assets/backgrounds/medium/pattern-md.avif') 40 round;
  }
  @media screen and (min-width: 1280px) {
    border-image: url('@/assets/backgrounds/large/pattern-lg.avif') 50 round;
  }
}
</style>
