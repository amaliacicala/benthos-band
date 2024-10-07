<script lang="ts" setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import epkData from '@/data/epkData.json'
import MarkdownText from '@/components/atoms/MarkdownText.vue'
import cover_lg from '@/assets/album_covers/large/benthos_fromnothing_cover-lg.avif'
import cover_sm from '@/assets/album_covers/small/benthos_fromnothing_cover-sm.avif'
import plunge_thumbnail from '@/assets/thumbnails/medium/plunge_thumbnail.jpg'

const { mobile, mdAndDown } = useDisplay()

const isPlaying = ref([false])

const playVideo = (index: number) => {
  isPlaying.value[index] = true
}
</script>

<template>
  <div
    id="music"
    class="d-flex flex-column justify-center align-center bg-pattern text-brown-lighten-5 px-4 py-8 pa-md-12"
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
            >.
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

      <v-row class="mt-md-12">
        <v-col cols="12" md="6">
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

        <v-col cols="12" md="6" class="d-flex align-center">
          <div v-if="!isPlaying[0]" class="video-thumbnail" @click="playVideo(0)">
            <img
              :src="plunge_thumbnail"
              alt="Thumbnail for Benthos - Let Me Plunge (Official Video)"
              class="thumbnail-responsive"
              height="100%"
            />
            <v-icon icon="mdi-play-circle" class="play-icon" color="white" />
          </div>

          <iframe
            v-else
            class="video-responsive"
            src="https://www.youtube-nocookie.com/embed/UxDaC-RhwNk?autoplay=1&si=uK7R80xJ0KP7GLBz"
            alt="Benthos - Let Me Plunge (Official Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            :style="{ height: mobile ? '200px' : '550px' }"
          ></iframe>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" class="d-flex flex-column justify-center align-center">
          <p class="text-h4">tracklist</p>

          <p class="text-body-2 text-md-body-1 text-center mt-2">
            <template v-for="(track, index) in epkData.albumTrackList" :key="index">
              <span v-if="index > 0"> // </span>
              <span style="opacity: 0.5"> {{ (index + 1).toString().padStart(2, '0') }}. </span>
              <span class="font-weight-bold">{{ track.songTitle }}</span>
              <span style="opacity: 0.5"> ({{ track.length }}) </span>
            </template>
          </p>
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
  font-size: 64px;
  transition: all 0.2s ease-in-out;
  &:hover {
    font-size: 70px;
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
