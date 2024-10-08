<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useBigcartelStore } from '@/stores/bigcartel'
import bg_lg from '@/assets/backgrounds/large/bg_red-lg.avif'
import bg_sm from '@/assets/backgrounds/small/bg_red-sm.avif'
import MerchItemsCard from '@/components/atoms/MerchItemsCard.vue'

const bigcartelStore = useBigcartelStore()
const { loading, merch } = storeToRefs(bigcartelStore)

const router = useRouter()

const { mobile } = useDisplay()

const model = ref(0)

onMounted(() => {
  bigcartelStore.loadMerch()
})
</script>

<template>
  <v-lazy transition="fade-transition">
    <v-parallax :src="mobile ? bg_sm : bg_lg" :style="{ maxHeight: '860px' }">
      <v-container>
        <div class="d-flex flex-column align-center pt-16" :style="{ gap: '24px' }">
          <div class="text-center">
            <p class="text-overline">Supporter 101</p>
            <h1 class="text-md-h1 text-h2">Merchandise</h1>
          </div>

          <v-progress-circular
            v-if="loading"
            color="primary"
            size="50"
            class="my-16"
            indeterminate
          />

          <v-slide-group
            v-else
            v-model="model"
            show-arrows
            mandatory
            center-active
            :style="{ maxWidth: '100%', gap: '24px' }"
          >
            <v-slide-group-item v-for="(item, index) in merch" :key="index">
              <MerchItemsCard :merch="[item]" />
            </v-slide-group-item>
          </v-slide-group>
        </div>

        <div class="d-flex justify-center py-8">
          <v-btn
            variant="outlined"
            class="text-body-2 text-md-body-1 mr-4 w-50 w-md-25"
            :size="mobile ? 'large' : 'x-large'"
            @click="router.push({ name: 'Merch' })"
          >
            Shop Merch
          </v-btn>
        </div>
      </v-container>
    </v-parallax>
  </v-lazy>
</template>

<style lang="scss" scoped>
:deep(.mdi) {
  font-size: 40px !important;
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
