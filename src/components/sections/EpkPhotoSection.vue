<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { usePhotosetsStore } from '@/stores/photosets'
import { downloadImage } from '@/api/photosets'

const { mobile } = useDisplay()

const photosetStore = usePhotosetsStore()
const { loading, images } = storeToRefs(photosetStore)
const { loadAlbum } = photosetStore

const slide = ref(0)
const downloading = ref<Record<string, boolean>>({})

const isDownloading = computed(() => Object.values(downloading.value).some((status) => status))

const photoshoots = import.meta.env.VITE_FLICKR_EPK_PS_PHOTOSET
const livePhotos = import.meta.env.VITE_FLICKR_EPK_LIVE_PHOTOSET

const handleAlbumLoad = (albumId: string) => {
  slide.value = 0
  loadAlbum(albumId)
}

const handleDownload = (url: string, imageId: string) => {
  downloadImage(url, imageId, downloading)
}

onMounted(() => {
  handleAlbumLoad(photoshoots)
})
</script>

<template>
  <div
    id="photos"
    class="d-flex flex-column justify-center align-center bg-paper text-dark px-4 py-8 pa-md-12"
  >
    <v-container>
      <div class="d-flex flex-column align-center">
        <p class="text-overline text-center">From the archive</p>
        <h1 class="text-md-h1 text-h2">Photos</h1>

        <v-chip-group class="text-body-1 text-dark pt-4">
          <v-chip
            class="bg-amber-lighten-1 py-6 px-6 px-md-8"
            @click="handleAlbumLoad(photoshoots)"
          >
            photoshoots
          </v-chip>

          <v-chip class="bg-amber-lighten-1 py-6 px-6 px-md-8" @click="handleAlbumLoad(livePhotos)">
            live photos
          </v-chip>
        </v-chip-group>
      </div>

      <div class="pt-6 pt-md-8">
        <v-carousel
          v-model="slide"
          width="100%"
          :height="mobile ? '100%' : '700px'"
          show-arrows="hover"
          interval="5000"
          progress="amber-darken-1"
          hide-delimiters
          :cycle="!isDownloading"
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
          >
            <v-btn
              @click="() => handleDownload(image.url_o, image.id)"
              rounded="0"
              color="brown-lighten-5"
              class="position-absolute right-0 bottom-0"
              :width="mobile ? '35%' : '230px'"
              :height="mobile ? '35px' : '45px'"
            >
              <template v-if="downloading[image.id]">
                <v-progress-circular
                  color="amber-darken-1"
                  :size="24"
                  :width="4"
                  indeterminate
                  class="mr-4"
                />
                {{ mobile ? '' : 'downloading...' }}
              </template>

              <template v-else>
                <v-icon icon="mdi-download" class="mr-2" />
                {{ mobile ? 'download' : 'download hd photo' }}
              </template>
            </v-btn>
          </v-carousel-item>
        </v-carousel>
      </div>
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
