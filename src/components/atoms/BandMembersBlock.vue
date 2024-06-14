<script lang="ts" setup>
import epkData from '@/data/epkData.json'
</script>

<template>
  <h2
    class="text-body-1 font-weight-bold text-right text-decoration-underline text-dark"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    band members
  </h2>

  <v-list class="d-flex flex-column align-end bg-transparent pt-6">
    <v-list-item
      v-for="(bandMember, index) in epkData.bandMembers"
      :key="index"
      class="bg-green-lighten-1 text-body-2 rounded-lg mb-1"
    >
      <p>{{ bandMember.name }} - {{ bandMember.instrument }}</p>
    </v-list-item>
  </v-list>
</template>
