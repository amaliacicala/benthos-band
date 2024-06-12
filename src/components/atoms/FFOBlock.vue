<script lang="ts" setup>
import epkData from '@/data/epkData.json'
</script>

<template>
  <h2
    class="text-body-1 font-weight-bold text-right text-decoration-underline text-dark"
    :style="{ textUnderlineOffset: '4px !important' }"
  >
    for fans of
  </h2>

  <div class="d-flex justify-end pt-4" style="margin-right: -8px">
    <v-chip-group column class="w-md-75 self-end">
      <v-chip
        v-for="(band, index) in epkData.ffoBands"
        :key="index"
        class="bg-amber-lighten-1 text-black text-caption cursor-default"
      >
        {{ band }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<style lang="scss" scoped>
:deep(.v-slide-group__content) {
  display: flex;
  justify-content: end;
}
</style>
