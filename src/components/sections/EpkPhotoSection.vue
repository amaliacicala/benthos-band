<script lang="ts" setup>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { usePhotosetsStore } from '@/stores/photosets'

const { mobile } = useDisplay()

const photosetStore = usePhotosetsStore()
const { loading, images } = storeToRefs(photosetStore)
const { loadAlbum } = photosetStore

const photoshoots = import.meta.env.VITE_FLICKR_EPK_PS_PHOTOSET
const livePhotos = import.meta.env.VITE_FLICKR_EPK_LIVE_PHOTOSET

onMounted(() => {
  loadAlbum(photoshoots)
})
</script>

<template>
  <div
    class="d-flex flex-column justify-center align-center bg-brown-lighten-5 text-dark px-4 py-8 pa-md-12"
  >
    <p class="text-overline text-center">From the archive</p>
    <h1 class="text-md-h1 text-h2">Photos</h1>

    <p class="text-caption font-weight-bold text-decoration-underline pt-4">select type:</p>
    <v-chip-group class="text-body-1 text-dark">
      <v-chip class="bg-amber-lighten-1 py-6 px-6 px-md-8" @click="loadAlbum(photoshoots)">
        photoshoots
      </v-chip>

      <v-chip class="bg-amber-lighten-1 py-6 px-6 px-md-8" @click="loadAlbum(livePhotos)">
        live photos
      </v-chip>
    </v-chip-group>

    <v-container class="pt-6 pt-md-8">
      <v-carousel
        width="100%"
        :height="mobile ? '100%' : '700px'"
        show-arrows="hover"
        interval="5000"
        progress="amber-darken-1"
        hide-delimiters
        cycle
        class="elevation-24"
        :style="{ minHeight: mobile ? '230px' : '' }"
      >
        <div v-if="loading" class="d-flex flex-column h-100 align-center justify-center">
          <v-progress-circular
            color="amber-darken-1"
            :size="mobile ? 50 : 80"
            :width="mobile ? 4 : 7"
            class="self-center"
            indeterminate
          />
        </div>

        <v-carousel-item
          v-else
          v-for="image in images"
          :key="image.id"
          :src="mobile ? image.url_c : image.url_l"
          :cover="mobile ? false : true"
          eager
        />
      </v-carousel>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
:deep(.v-progress-linear) {
  height: 10px !important;

  @media screen and (max-width: 999px) {
    height: 6px !important;
  }
}
:deep(.v-progress-linear__background) {
  background-color: rgb(var(--v-theme-black)) !important;
}
:deep(.v-window__controls) {
  button {
    background-color: rgb(var(--v-theme-brown-lighten-5));
    color: rgb(var(--v-theme-brown-darken-2));
    width: 70px;
    height: 70px;

    @media screen and (max-width: 999px) {
      width: 40px;
      height: 40px;
    }
  }

  .v-btn__content {
    font-size: 22px;

    @media screen and (max-width: 999px) {
      font-size: 16px;
    }
  }
}
</style>
