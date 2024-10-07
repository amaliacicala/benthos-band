<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { fetchStreamingLinks } from '@/api/streaming'
import type { Album } from '@/types/Streaming'
import CardFlip from '@/components/atoms/CardFlip.vue'

const { mobile } = useDisplay()

const router = useRouter()

const albums = ref<Album[]>([])
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
  albums.value = Object.values(data) as Album[]
})
</script>

<template>
  <v-lazy transition="fade-transition">
    <div
      class="d-flex flex-column align-center bg-debris bg-red-darken-4 py-16 px-8 px-md-16"
      :style="{ gap: mobile ? '24px' : '48px' }"
    >
      <v-container>
        <div v-if="albums.length" class="text-center pb-8">
          <p class="text-overline">Benthos Catalogue</p>
          <h1 class="text-md-h1 text-h2">Past Releases</h1>
        </div>

        <div v-if="mobile" class="d-flex justify-center align-center w-100 mb-6">
          <v-btn
            variant="outlined"
            :height="50"
            :width="150"
            class="rounded-pill mr-4"
            @click="handleStreamClick"
            >Stream</v-btn
          >
          <v-btn
            :height="50"
            :width="150"
            class="rounded-pill bg-green-lighten-2"
            @click="router.push({ path: 'Merch' })"
            >Buy</v-btn
          >
        </div>

        <div
          v-if="albums.length"
          class="d-flex flex-md-row flex-column"
          :style="{ gap: mobile ? '60px' : '80px' }"
        >
          <CardFlip
            v-for="(album, index) in albums"
            :key="album.title"
            :index="index"
            :background-image-lg="album.coverLg"
            :background-image-sm="album.coverSm"
            :overline="album.overline"
            :title="album.title"
            :release-date="album.releaseDate"
            :links="album.links"
            :flip="flipCards"
            @reportFlipState="reportFlipState"
          />
        </div>

        <div v-if="!mobile" class="d-flex flex-column align-center w-100 mt-6 mt-md-8">
          <v-btn
            variant="outlined"
            size="x-large"
            :height="60"
            class="rounded-pill mb-6 w-25"
            @click="handleStreamClick"
            >Stream</v-btn
          >
          <v-btn
            size="x-large"
            :height="60"
            class="rounded-pill bg-green-lighten-2 w-25"
            @click="router.push({ path: 'Merch' })"
            >Buy</v-btn
          >
        </div>
      </v-container>
    </div>
  </v-lazy>
</template>

<style lang="scss" scoped>
.outline {
  border: solid 2px rgb(var(--v-theme-green-lighten-1));
}
</style>
