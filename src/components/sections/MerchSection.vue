<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useBigcartelStore } from '@/stores/bigcartel'
import bg_lg from '@/assets/backgrounds/large/bg_red-lg.avif'
import bg_sm from '@/assets/backgrounds/small/bg_red-sm.avif'

const bigcartelStore = useBigcartelStore()
const { loading, merch } = storeToRefs(bigcartelStore)

const { mobile } = useDisplay()

const model = ref(0)

const navigateToUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}

onMounted(() => {
  bigcartelStore.loadMerch()
})
</script>

<template>
  <v-parallax :src="mobile ? bg_sm : bg_lg" :style="{ maxHeight: '760px' }">
    <div class="d-flex flex-column align-center py-16 px-2 px-md-16" :style="{ gap: '24px' }">
      <div class="text-center">
        <p class="text-overline">Supporter 101</p>
        <h1 class="text-md-h1 text-h2">Merchandise</h1>
      </div>

      <v-progress-circular v-if="loading" color="primary" size="50" class="my-16" indeterminate />

      <v-slide-group
        v-else
        v-model="model"
        show-arrows
        mandatory
        center-active
        :style="{ maxWidth: '100%', gap: '24px' }"
      >
        <v-slide-group-item v-for="(item, index) in merch" :key="index">
          <v-card
            elevation="0"
            class="d-flex flex-column align-center justify-space-between py-md-4 mx-md-2 cursor-pointer w-100"
            @click="navigateToUrl(item.url)"
          >
            <v-chip
              v-if="item.onSale"
              variant="elevated"
              class="bg-green-lighten-2 text-black text-overline font-weight-bold"
            >
              On sale
            </v-chip>
            <v-chip
              v-if="item.status === 'sold_out'"
              variant="elevated"
              class="bg-black text-primary text-overline"
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

            <div
              class="d-flex flex-column justify-space-between text-primary text-center w-75 card-bottom"
            >
              <h2
                class="text-body-1 text-uppercase"
                :style="{ opacity: item.status === 'sold_out' ? 0.8 : 1, height: '80px' }"
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
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </v-parallax>
</template>

<style lang="scss" scoped>
:deep(.mdi) {
  font-size: 40px !important;
  color: rgb(var(--v-theme-primary)) !important;
}
.v-card {
  background-color: transparent;
}
</style>
