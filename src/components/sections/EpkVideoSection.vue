<script lang="ts" setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import dragonfly_clip_lg from '/thumbnails/large/dragonfly_clip-lg.webm'
import dragonfly_clip_sm from '/thumbnails/small/dragonfly_clip-sm.webm'
import dragonfly from '/thumbnails/medium/dragonfly_thumbnail.avif'
import debris from '/thumbnails/medium/debris_thumbnail.avif'
import cartesio from '/thumbnails/medium/cartesio_thumbnail.avif'

const { mobile, mdAndDown } = useDisplay()

const isPlaying = ref([false, false, false, false])

const playVideo = (index: number) => {
  isPlaying.value[index] = true
}
</script>

<template>
  <div
    id="videos"
    class="d-flex flex-column justify-center align-center bg-black-grain text-brown-lighten-5 px-4 py-8 pa-md-12"
  >
    <v-container>
      <div class="d-flex flex-column align-center">
        <p class="text-overline text-center">From the archive</p>
        <h1 class="text-md-h1 text-h2">Videos</h1>
      </div>

      <!-- Talk to Me, Dragonfly! Live at Dissonance-->
      <v-row class="pt-8">
        <v-col cols="12">
          <div class="text-center mb-4">
            <h3 class="text-body-1 font-weight-bold">
              Benthos - Talk to Me, Dragonfly! (Live at Dissonance Festival)
            </h3>
            <p class="text-overline text-center">Released on July, 28th 2023</p>
          </div>

          <div v-if="!isPlaying[0]" class="video-thumbnail" @click="playVideo(0)">
            <video
              autoplay
              muted
              loop
              :src="mdAndDown ? dragonfly_clip_sm : dragonfly_clip_lg"
              alt="Thumbnail for Benthos - Talk to Me, Dragonly! (Live at Dissonance)"
              class="video-responsive"
            />
            <v-icon icon="fas fa-circle-play" class="play-icon" color="brown-lighten-5" />
          </div>

          <iframe
            v-else
            class="video-responsive"
            src="https://www.youtube.com/embed/ue1BDz156Z4?autoplay=1&si=KsNdpRai5xPGilx7"
            alt="Benthos - Talk to Me, Dragonly! (Live at Dissonance)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            :style="{ height: mobile ? '200px' : '550px' }"
          ></iframe>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-50 my-12" color="brown-lighten-5" />

      <h3 class="text-body-1 font-weight-bold text-center mb-8">
        2021 Debut Album Singles and Official Videos
      </h3>

      <v-row>
        <v-col cols="12" sm="4">
          <div v-if="!isPlaying[1]" class="video-thumbnail" @click="playVideo(1)">
            <img
              :src="dragonfly"
              alt="Thumbnail for Benthos - Talk to Me, Dragonfly! (Official Video)"
              class="thumbnail-responsive"
            />
            <v-icon icon="fas fa-circle-play" class="play-icon" />
          </div>

          <iframe
            v-else
            class="thumbnail-responsive"
            src="https://www.youtube.com/embed/iXOm0oeMGZc?autoplay=1&si=BHKahIdrBgEDgREF"
            title="Benthos - Talk to Me, Dragonfly! (Official Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            :style="{ height: mobile ? '100%' : '315px' }"
          ></iframe>
        </v-col>

        <v-col cols="12" sm="4">
          <div v-if="!isPlaying[2]" class="video-thumbnail" @click="playVideo(2)">
            <img
              :src="debris"
              alt="Thumbnail for Benthos - Debris // Essence (Official Video)"
              class="thumbnail-responsive"
            />
            <v-icon icon="fas fa-circle-play" class="play-icon" />
          </div>

          <iframe
            v-else
            class="thumbnail-responsive"
            src="https://www.youtube.com/embed/hzknSmWxw2I?autoplay=1&si=78Hin90JdMkjPtPO"
            title="Benthos - Debris // Essence (Official Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            :style="{ height: mobile ? '100%' : '315px' }"
          ></iframe>
        </v-col>

        <v-col cols="12" sm="4">
          <div v-if="!isPlaying[3]" class="video-thumbnail" @click="playVideo(3)">
            <img
              :src="cartesio"
              alt="Thumbnail for Benthos - Cartesio (Official Video)"
              class="thumbnail-responsive"
            />
            <v-icon icon="fas fa-circle-play" class="play-icon" />
          </div>

          <iframe
            v-else
            class="thumbnail-responsive"
            src="https://www.youtube.com/embed/TQuuQxOuI_k?autoplay=1&si=xkyP0d5y4zm9v_cJ"
            title="Benthos - Cartesio (Official Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            :style="{ height: mobile ? '100%' : '315px' }"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
a:link,
a:visited,
a:active {
  color: rgb(var(--v-theme-red-lighten-1)) !important;
}
a:hover {
  color: rgb(var(--v-theme-red-lighten-2)) !important;
}
.video-thumbnail {
  position: relative;
  cursor: pointer;
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 15px rgb(var(--v-theme-dark)));
  font-size: 48px;
  transition: all 0.2s ease-in-out;
  &:hover {
    font-size: 54px;
  }
}
iframe {
  min-height: 280px;
}
.video-responsive {
  width: 100%;
  position: relative;
}
.video-responsive iframe,
.video-responsive video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.thumbnail-responsive {
  width: 100%;
  height: auto;
}
</style>
