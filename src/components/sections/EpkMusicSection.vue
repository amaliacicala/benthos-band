<script lang="ts" setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import epkData from '@/data/epkData.json'
import MarkdownText from '@/components/atoms/MarkdownText.vue'
import cover_lg from '/album_covers/large/benthos_fromnothing_cover-lg.avif'
import cover_sm from '/album_covers/small/benthos_fromnothing_cover-sm.avif'
import cordyceps_clip_lg from '/thumbnails/large/cordyceps_clip-lg.webm'
import cordyceps_clip_sm from '/thumbnails/small/cordyceps_clip-sm.webm'
import pure_clip_lg from '/thumbnails/large/pure_clip-lg.webm'
import pure_clip_sm from '/thumbnails/small/pure_clip-sm.webm'
import fossil_clip_lg from '/thumbnails/large/fossil_clip-lg.webm'
import fossil_clip_sm from '/thumbnails/small/fossil_clip-sm.webm'
import plunge_thumbnail from '/thumbnails/medium/plunge_thumbnail.jpg'
import cordyceps_thumbnail from '/thumbnails/medium/cordyceps_thumbnail.jpg'

const { mobile, mdAndDown } = useDisplay()

const isPlaying = ref([false])

const playVideo = (index: number) => {
  isPlaying.value[index] = true
}
</script>

<template>
  <div
    id="music"
    class="d-flex flex-column justify-center align-center bg-black-texture text-brown-lighten-5 px-4 py-8 pa-md-12"
  >
    <v-container>
      <div class="d-flex flex-column align-center">
        <p class="text-overline text-center">the upcoming sophomore album</p>
        <h1 class="text-md-h1 text-h2">From Nothing</h1>
      </div>

      <v-row class="pt-12">
        <v-col cols="12" md="6">
          <v-img
            :src="mdAndDown ? cover_sm : cover_lg"
            alt="Benthos - From Nothing"
            width="100%"
            eager
          />
          <p class="text-caption text-left mt-2">
            Artwork by
            <a
              href="https://www.instagram.com/silvermule/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alejandro Chavetta</a
            >
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1842516447%3Fsecret_token%3Ds-hXcsHitcMeV&color=%23b0493e&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" md="8">
          <div class="rounded bg-amber-lighten-1 text-dark font-weight-bold py-4 px-6 pb-7">
            <p class="text-overline font-weight-bold" style="font-size: 16px !important">
              behind the concept
            </p>
            <MarkdownText
              :source="epkData.albumConcept"
              :text-style="'text-body-1'"
              :style="{
                fontFamily: 'Open Sans, sans-serif'
              }"
            />
          </div>
        </v-col>

        <v-col cols="12" md="4" class="d-flex flex-column justify-center">
          <p class="text-h4">tracklist</p>

          <p
            v-for="(track, index) in epkData.albumTrackList"
            :key="index"
            class="text-body-2 text-md-body-1 mt-2"
          >
            <span style="opacity: 0.5"> {{ (index + 1).toString().padStart(2, '0') }}. </span>
            <span class="font-weight-bold">{{ track.songTitle }}</span>
            <span style="opacity: 0.5"> ({{ track.length }}) </span>
          </p>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-50 mt-14 mb-4" color="brown-lighten-5" />

      <!-- As a Cordyceps -->
      <v-row class="pt-8">
        <v-col cols="12">
          <div class="text-center mb-4">
            <h3 class="text-body-1 font-weight-bold">Benthos - As a Cordyceps (Official Video)</h3>
            <p class="text-overline text-center">Released on February, 7th 2025</p>
          </div>

          <div class="d-flex flex-column align-center">
            <a
              href="https://www.youtube.com/watch?v=YyU3vCAol-E"
              class="video-thumbnail"
              target="_blank"
            >
              <video
                autoplay
                muted
                loop
                :src="mdAndDown ? cordyceps_clip_sm : cordyceps_clip_lg"
                alt="Thumbnail for Benthos - As a Cordyceps (Official Video)"
                class="video-responsive"
              />
              <v-icon icon="fas fa-circle-play" class="play-icon" color="brown-lighten-5" />
            </a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-50 my-12" color="brown-lighten-5" />

      <!-- Pure -->
      <v-row class="pt-8">
        <v-col cols="12">
          <div class="text-center mb-4">
            <h3 class="text-body-1 font-weight-bold">Benthos - Pure (Official Video)</h3>
            <p class="text-overline text-center">Released on January, 13th 2025</p>
          </div>

          <div class="d-flex flex-column align-center">
            <a
              href="https://www.youtube.com/watch?v=GZorqyd95Zk"
              class="video-thumbnail"
              target="_blank"
            >
              <video
                autoplay
                muted
                loop
                :src="mdAndDown ? pure_clip_sm : pure_clip_lg"
                alt="Thumbnail for Benthos - Pure (Official Video)"
                class="video-responsive"
              />
              <v-icon icon="fas fa-circle-play" class="play-icon" color="brown-lighten-5" />
            </a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-50 my-12" color="brown-lighten-5" />

      <!-- Fossil -->
      <v-row class="pt-8">
        <v-col cols="12">
          <div class="text-center mb-4">
            <h3 class="text-body-1 font-weight-bold">Benthos - Fossil (Official Video)</h3>
            <p class="text-overline text-center">Released on November, 12th 2024</p>
          </div>

          <div class="d-flex flex-column align-center">
            <a
              href="https://www.youtube.com/watch?v=vtXFiFwSIy0"
              class="video-thumbnail"
              target="_blank"
            >
              <video
                autoplay
                muted
                loop
                :src="mdAndDown ? fossil_clip_sm : fossil_clip_lg"
                alt="Thumbnail for Benthos - Fossil (Official Video)"
                class="video-responsive"
              />
              <v-icon icon="fas fa-circle-play" class="play-icon" color="brown-lighten-5" />
            </a>
          </div>
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
  filter: saturate(50%);
  opacity: 0.6;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: saturate(100%);
    opacity: 1;
  }
}
</style>
