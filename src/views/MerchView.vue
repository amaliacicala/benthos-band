<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useBigcartelStore } from '@/stores/bigcartel'
import MerchItemsCard from '@/components/atoms/MerchItemsCard.vue'

const { mobile } = useDisplay()

const bigcartelStore = useBigcartelStore()
const { loading, merch } = storeToRefs(bigcartelStore)

const selectedCategory = ref('all')
const showAvailableOnly = ref(false)
const sortBy = ref('Price: Low to High')

const parsePrice = (price: string) => {
  return parseFloat(price.replace(/[^\d.-]/g, '')) || 0
}

const filteredMerch = computed(() => {
  let filteredItems = [...merch.value]

  // filter by category
  if (selectedCategory.value !== 'all') {
    filteredItems = filteredItems.filter((item) =>
      selectedCategory.value === 'Apparel'
        ? item.category.includes('T-shirt')
        : item.category.includes(selectedCategory.value)
    )
  }

  // filter by availability
  if (showAvailableOnly.value) {
    filteredItems = filteredItems.filter((item) => item.status !== 'sold_out')
  }

  // sort by price
  filteredItems.sort((a, b) => {
    const priceA = parsePrice(a.price)
    const priceB = parsePrice(b.price)

    if (sortBy.value === 'Price: Low to High') return priceA - priceB
    if (sortBy.value === 'Price: High to Low') return priceB - priceA
    return 0
  })

  return filteredItems
})

onMounted(() => {
  bigcartelStore.loadMerch()
})
</script>

<template>
  <div :class="[mobile ? 'bg-red-darken-1' : 'bg-red', 'py-16 h-100']">
    <v-container>
      <v-row class="d-flex align-end px-4 px-md-0">
        <v-col cols="12" md="4" class="py-0">
          <v-checkbox v-model="showAvailableOnly" hide-details label="show available only" />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="selectedCategory"
            hide-details
            :items="['all', 'Apparel', 'Music']"
            label="Filter by Category"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="sortBy"
            hide-details
            :items="['Price: Low to High', 'Price: High to Low']"
            label="Sort by Price"
          />
        </v-col>
      </v-row>

      <v-row class="mt-8 mb-4 my-md-8 mx-4 mx-md-4 justify-end font-weight-bold">
        <p>
          {{ filteredMerch.length + ' ' + (filteredMerch.length === 1 ? 'product' : 'products') }}
        </p>
      </v-row>

      <div v-if="loading" class="d-flex align-center justify-center my-16">
        <v-progress-circular color="primary" size="50" indeterminate />
      </div>

      <div
        v-else
        class="d-flex justify-center flex-wrap"
        :style="{ gap: mobile ? '18px' : '32px' }"
      >
        <MerchItemsCard :merch="filteredMerch" />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.v-card {
  background-color: transparent;
}
:deep(.v-field-label--floating) {
  text-transform: uppercase !important;
}
</style>
