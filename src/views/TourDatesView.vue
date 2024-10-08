<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'
import TourDatesBlock from '@/components/atoms/TourDatesBlock.vue'
</script>

<template>
  <div class="bg-paper-green py-16 h-100">
    <v-container class="px-6">
      <PageHeader :title="'Tour Dates'" :color="'black'" />

      <TourDatesBlock />
    </v-container>
  </div>
</template>
