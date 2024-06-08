<script lang="ts" setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import epkData from '@/data/epkData.json'
import SocialMediaButtons from '../atoms/SocialMediaButtons.vue'

const source = ref(epkData.contacts.email)

const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <h2
    class="text-body-1 font-weight-bold text-right text-decoration-underline"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    contacts
  </h2>

  <v-list class="d-flex flex-column align-end bg-primary pt-6">
    <v-list-item v-if="isSupported" class="d-flex flex-column pa-0">
      <v-btn
        elevation="0"
        size="large"
        color="red-lighten-1"
        class="text-body-2 text-black rounded-lg px-4 py-1"
        @click="copy(source)"
      >
        <span class="font-weight-light">{{ epkData.contacts.email }}</span>
      </v-btn>
      <p v-if="copied" class="text-caption font-weight-light text-right pt-2">
        Email copied to clipboard.
      </p>
    </v-list-item>

    <v-list-item v-else class="bg-red-lighten-1 text-body-2 text-black rounded-lg">
      <p>{{ epkData.contacts.email }}</p>
    </v-list-item>
  </v-list>

  <div class="d-flex justify-end">
    <SocialMediaButtons />
  </div>
</template>
