<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { fetchStreamingLinks } from '@/api/streaming'
import type { Album } from '@/types/Streaming'
import CardFlip from '@/components/atoms/CardFlip.vue'

const { mobile } = useDisplay()

const albums = ref<Album[]>([])
const flipCards = ref(false)

onMounted(() => {
  const data = fetchStreamingLinks()
  albums.value = Object.values(data) as Album[]
})

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
</script>

<template>
  <div
    class="d-flex flex-column align-center bg-debris bg-red-darken-4 pt-16 px-16 pb-16 pb-md-4"
    :style="{ gap: '48px' }"
  >
    <div v-if="albums.length" class="text-center">
      <p class="text-overline">{{ albums[0].overline }}</p>
      <h1 class="text-md-h1 text-h2">{{ albums[0].title }}</h1>
      <h2
        class="text-body-1 text-decoration-underline"
        :style="{ textUnderlineOffset: '4px !important' }"
      >
        out now
      </h2>
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
        :background-image="album.cover"
        :overline="album.overline"
        :title="album.title"
        :links="album.links"
        :flip="flipCards"
        @reportFlipState="reportFlipState"
      />
    </div>

    <div class="d-flex flex-column align-center w-100">
      <v-btn size="x-large" class="mb-4 w-md-25 w-100" @click="handleStreamClick">Stream</v-btn>
      <v-btn size="x-large" class="w-md-25 w-100">Buy</v-btn>
    </div>

    <iframe
      v-if="!mobile"
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/playlist/7avBMe93BdNzoSuCUdXATW?utm_source=generator&theme=0"
      width="30%"
      height="200"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
</template>

<style lang="scss" scoped>
.outline {
  border: solid 2px rgb(var(--v-theme-green-lighten-1));
}
</style>
