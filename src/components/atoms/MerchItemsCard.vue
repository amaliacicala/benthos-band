<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import type { Merch } from '@/types/Bigcartel'

const props = defineProps({
  merch: {
    type: Array<Merch>,
    required: false
  }
})

const { mobile } = useDisplay()

const navigateToUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <v-card
    v-for="(item, index) in props.merch"
    :key="index"
    elevation="0"
    class="d-flex flex-column align-center justify-space-between pa-4 cursor-pointer rounded-lg"
    @click="navigateToUrl(item.url)"
  >
    <v-chip
      v-if="item.onSale"
      variant="elevated"
      class="bg-green-lighten-2 text-dark text-overline font-weight-bold"
    >
      On sale
    </v-chip>

    <v-chip
      v-if="item.status === 'sold_out'"
      variant="elevated"
      class="bg-dark text-primary text-overline"
    >
      Sold out
    </v-chip>

    <v-img
      :src="item.imageUrl"
      :alt="item.description"
      :width="mobile ? 200 : 300"
      class="mb-4"
      :style="{ opacity: item.status === 'sold_out' ? 0.8 : 1 }"
    />

    <div class="d-flex flex-column justify-space-between text-primary text-center w-75 card-bottom">
      <h2
        class="text-body-1 text-uppercase"
        :style="{ opacity: item.status === 'sold_out' ? 0.8 : 1, height: '60px' }"
      >
        {{ item.name }}
      </h2>

      <h3
        class="text-h5"
        :style="{
          opacity: item.status === 'sold_out' ? 0.6 : 0.8,
          textDecoration: item.status === 'sold_out' ? 'line-through' : ''
        }"
      >
        {{ item.price }}
      </h3>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  background-color: transparent;
}
</style>
