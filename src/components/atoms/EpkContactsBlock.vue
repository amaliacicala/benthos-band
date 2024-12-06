<script lang="ts" setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import epkData from '@/data/epkData.json'
import SocialMediaButtons from '@/components/atoms/SocialMediaButtons.vue'

const sourceOne = ref('benthos@amaliacicala.com')
const sourceTwo = ref('benthos.milano@gmail.com')

const { isSupported } = useClipboard()
const { copy: copyOne, copied: copiedOne } = useClipboard()
const { copy: copyTwo, copied: copiedTwo } = useClipboard()
</script>

<template>
  <h2
    class="text-body-1 font-weight-bold text-right text-decoration-underline text-dark"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    contacts
  </h2>

  <v-list class="d-flex flex-column align-end bg-transparent pt-6">
    <v-list-item v-if="isSupported" class="d-flex flex-column pa-0">
      <p class="text-overline font-weight-bold text-right">Management – Amalia Cicala</p>
      <v-btn
        elevation="0"
        size="large"
        :color="copiedOne ? 'transparent' : 'red-lighten-2'"
        class="text-body-2 text-dark rounded-lg px-4 py-1"
        @click="copyOne(sourceOne)"
      >
        <span class="font-weight-regular">
          {{ copiedOne ? 'Email copied to clipboard.' : sourceOne }}
        </span>
      </v-btn>
    </v-list-item>

    <v-list-item v-else class="bg-red-lighten-2 text-body-2 text-dark rounded-lg">
      <p>{{ sourceOne }}</p>
    </v-list-item>

    <v-list-item v-if="isSupported" class="d-flex flex-column pa-0 my-4">
      <p class="text-overline font-weight-bold text-right">The Band</p>
      <v-btn
        elevation="0"
        size="large"
        :color="copiedTwo ? 'transparent' : 'red-lighten-2'"
        class="text-body-2 text-dark rounded-lg px-4 py-1"
        @click="copyTwo(sourceTwo)"
      >
        <span class="font-weight-regular">
          {{ copiedTwo ? 'Email copied to clipboard.' : sourceTwo }}
        </span>
      </v-btn>
    </v-list-item>

    <v-list-item v-else class="bg-red-lighten-1 text-body-2 text-dark rounded-lg">
      <p>{{ sourceTwo }}</p>
    </v-list-item>
  </v-list>

  <div class="d-flex justify-end">
    <SocialMediaButtons />
  </div>
</template>
