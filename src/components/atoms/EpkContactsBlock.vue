<script lang="ts" setup>
import epkData from '@/data/epkData.json'
import MarkdownText from '../atoms/MarkdownText.vue'
</script>

<template>
  <h2
    class="text-body-1 font-weight-bold text-right text-decoration-underline"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    contacts
  </h2>

  <v-list class="d-flex flex-column align-end bg-primary pt-6">
    <v-list-item class="bg-red-lighten-1 text-black rounded-lg mb-1">
      <p>{{ epkData.contacts.email }}</p>
    </v-list-item>
    <!--
    <v-list-item class="bg-primary text-overline">
      <MarkdownText :source="epkData.contacts.address" :text-style="'text-overline text-right'" />
    </v-list-item> -->
  </v-list>
</template>
