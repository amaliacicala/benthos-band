<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import media from '@/data/media.json'
import PageHeader from '@/components/layout/PageHeader.vue'

const { mdAndDown } = useDisplay()
</script>

<template>
  <div class="bg-dark py-16 h-100">
    <v-container class="d-flex flex-column justify-center text-brown-lighten-5 px-6">
      <PageHeader :title="'Media'" :color="'brown-lighten-5'" />

      <section v-for="(item, index) in media" :key="index" class="d-flex flex-column">
        <v-fade-transition appear>
          <div>
            <h3 class="text-body-1 text-center" :style="{ fontSize: '18px !important' }">
              {{ 'Benthos - ' + item.title }}
            </h3>
            <p class="text-overline text-center opacity-70 mt-2 mb-8">{{ item.releaseDate }}</p>
          </div>
        </v-fade-transition>

        <v-fade-transition appear>
          <a :href="item.url" class="video-thumbnail" target="_blank">
            <video
              autoplay
              muted
              loop
              :src="mdAndDown ? item.coverSm : item.coverLg"
              :alt="`Thumbnail for Benthos - ${item.title}`"
              class="video-responsive opacity-50 rounded-lg flat-shadow"
            />
            <v-icon icon="fas fa-circle-play" class="play-icon" color="brown-lighten-5" />
          </a>
        </v-fade-transition>

        <v-divider
          v-if="index !== media.length - 1"
          color="brown-lighten-5"
          class="border-opacity-25 mt-12 pb-12"
        />
      </section>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.hover {
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
a:link,
a:visited,
a:active {
  color: rgb(var(--v-theme-red-darken-2)) !important;
}
a:hover {
  color: rgb(var(--v-theme-red-darken-2)) !important;
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
