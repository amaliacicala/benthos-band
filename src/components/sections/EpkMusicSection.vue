<script lang="ts" setup>
import epkData from '@/data/epkData.json'
import MarkdownText from '../atoms/MarkdownText.vue'
import cover from '@/assets/album_covers/benthos_from_nothing_cover.avif'
</script>

<template>
  <v-lazy transition="fade-transition">
    <div
      id="music"
      class="d-flex flex-column justify-center align-center bg-pattern text-brown-lighten-5 px-4 py-8 pa-md-12"
    >
      <p class="text-overline text-center">the upcoming sophomore album</p>
      <h1 class="text-md-h1 text-h2">From Nothing</h1>

      <v-container class="pt-12">
        <v-row>
          <v-col cols="12" md="6">
            <v-img :src="cover" alt="Benthos - From Nothing" width="100%" eager />
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
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1835121567%3Fsecret_token%3Ds-e3ygbkWanpY&color=%23e8b72b&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
            ></iframe>

            <div class="bg-amber-lighten-1 text-dark font-weight-bold pa-4 mt-6">
              <p class="text-overline">behind the concept</p>
              <MarkdownText
                :source="epkData.albumConcept"
                :text-style="'text-body-2'"
                :style="{
                  fontFamily: 'Open Sans, sans-serif'
                }"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-lazy>
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
</style>
