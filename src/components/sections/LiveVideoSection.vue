<script lang="ts" setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import type { SingleStreamingLink } from '@/types/Streaming'
import dragonfly_clip_lg from '@/assets/thumbnails/large/dragonfly_clip-lg.webm'
import dragonfly_clip_sm from '@/assets/thumbnails/small/dragonfly_clip-sm.webm'

const props = defineProps({
  overline: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  fanLink: {
    type: String,
    required: true
  },

  videoLink: {
    type: String,
    required: true
  }
})

const { mobile, mdAndDown } = useDisplay()

const isPlaying = ref([false])

const playVideo = (index: number) => {
  isPlaying.value[index] = true
}
</script>

<template>
  <div class="bg-red">
    <v-lazy transition="fade-transition">
      <v-container>
        <div class="d-flex flex-column align-center py-16 px-10 px-md-16" :style="{ gap: '24px' }">
          <div class="text-center">
            <p class="text-overline">{{ props.overline }}</p>
            <h1 class="text-md-h1 text-h2">{{ props.title }}</h1>
          </div>

          <div class="d-flex justify-center align-center w-100">
            <v-btn
              variant="outlined"
              class="text-body-2 text-md-body-1 mr-4 w-50 w-md-25"
              :size="mobile ? 'large' : 'x-large'"
              :href="props.videoLink"
              target="_blank"
            >
              Watch video
            </v-btn>

            <v-btn
              variant="outlined"
              class="text-body-2 text-md-body-1 w-50 w-md-25"
              :size="mobile ? 'large' : 'x-large'"
              :href="props.fanLink"
              target="_blank"
            >
              Stream song
            </v-btn>
          </div>

          <div v-if="!isPlaying[0]" class="video-thumbnail pt-8" @click="playVideo(0)">
            <video
              autoplay
              muted
              loop
              :src="mdAndDown ? dragonfly_clip_sm : dragonfly_clip_lg"
              alt="Thumbnail for Benthos - Talk to Me, Dragonly! (Live at Dissonance)"
              class="video-responsive opacity-90 rounded-lg flat-shadow"
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
        </div>
      </v-container>
    </v-lazy>
  </div>
</template>

<style lang="scss" scoped>
.hover {
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
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
