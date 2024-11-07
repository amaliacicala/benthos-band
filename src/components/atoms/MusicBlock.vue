<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { fetchStreamingLinks } from '@/api/streaming'
import type { Release } from '@/types/Streaming'
import CardFlip from '@/components/atoms/CardFlip.vue'

const router = useRouter()
const { mobile } = useDisplay()

const releases = ref<Release[]>([])
const flipCards = ref(false)

const cardFlips = ref<number[]>([])

const handleStreamClick = () => {
  const anyNotFlipped = cardFlips.value.some((flip) => flip === 0)
  if (anyNotFlipped) {
    flipCards.value = true
  } else {
    flipCards.value = false
  }
}

const reportFlipState = (index: number, flipState: number) => {
  cardFlips.value[index] = flipState
}

onMounted(() => {
  const data = fetchStreamingLinks()

  // filter music released before 2024"
  releases.value = (Object.values(data) as Release[]).filter(
    (release) => !release.releaseDate.includes('2024')
  )
})
</script>

<template>
  <div v-if="mobile" class="d-flex justify-center align-center w-100 mb-12">
    <v-btn
      variant="outlined"
      color="red-darken-2"
      class="text-body-2 text-md-body-1 mr-4 w-50 w-md-25"
      size="large"
      @click="handleStreamClick"
    >
      Stream
    </v-btn>
    <v-btn
      class="text-body-2 text-md-body-1 bg-red-darken-2 text-brown-lighten-5 w-50 w-md-25"
      size="large"
      @click="router.push({ name: 'Merch' })"
    >
      Buy
    </v-btn>
  </div>

  <div
    v-if="releases.length"
    class="d-flex flex-md-row flex-column align-center justify-center"
    :style="{ gap: '60px' }"
  >
    <CardFlip
      v-for="(release, index) in releases"
      :key="release.title"
      :index="index"
      :background-image-lg="release.coverLg"
      :background-image-sm="release.coverSm"
      :overline="release.overline"
      :title="release.title"
      :release-date="release.releaseDate"
      :links="release.links"
      :flip="flipCards"
      @reportFlipState="reportFlipState"
    />
  </div>

  <div v-if="!mobile" class="d-flex flex-column align-center w-100 pt-8 mt-md-8">
    <v-btn
      variant="outlined"
      size="x-large"
      color="red-darken-2"
      class="text-body-2 text-md-body-1 mb-6 w-25"
      @click="handleStreamClick"
    >
      Stream
    </v-btn>
    <v-btn
      size="x-large"
      class="text-body-2 text-md-body-1 bg-red-darken-2 w-25"
      @click="router.push({ name: 'Merch' })"
    >
      Buy
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.outline {
  border: solid 2px rgb(var(--v-theme-green-lighten-1));
}
</style>
