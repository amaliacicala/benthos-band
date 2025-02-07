<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import cover_lg from '/album_covers/large/benthos_fromnothing_cover-lg.avif'
import cover_sm from '/album_covers/small/benthos_fromnothing_cover-sm.avif'

const props = defineProps({
  overline: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})

const { mobile, mdAndDown } = useDisplay()
</script>

<template>
  <div class="bg-paper text-dark">
    <v-lazy transition="fade-transition">
      <v-container class="d-flex flex-column align-center py-16">
        <div class="px-10 px-md-16" :style="{ gap: '24px' }">
          <div class="text-center">
            <p class="text-overline">{{ props.overline }}</p>
            <h1 class="text-md-h1 text-h2">{{ props.title }}</h1>
            <p class="text-body font-weight-bold">{{ props.subtitle }}</p>
          </div>
        </div>

        <v-btn
          variant="outlined"
          class="text-body-2 text-md-body-1 mr-4 w-50 w-md-25 mt-6 mb-8"
          :size="mobile ? 'large' : 'x-large'"
          :href="'https://benthos.lnk.to/FromNothing-Bio'"
          target="_blank"
        >
          Pre-order now
        </v-btn>

        <v-img
          :src="mdAndDown ? cover_sm : cover_lg"
          :width="mdAndDown ? '100%' : '50%'"
          :class="[mdAndDown ? 'px-4' : '']"
          alt="Benthos - From Nothing"
          eager
        />
      </v-container>
    </v-lazy>
  </div>
</template>
