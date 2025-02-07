<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import type { SingleStreamingLink } from '@/types/Streaming'
import insideout_logo from '/logos/insideout_logo_white.png'
import fossil_clip_lg from '/thumbnails/large/fossil_clip-lg.webm'
import fossil_clip_sm from '/thumbnails/small/fossil_clip-sm.webm'
import pure_clip_lg from '/thumbnails/large/pure_clip-lg.webm'
import pure_clip_sm from '/thumbnails/small/pure_clip-sm.webm'
import cordyceps_clip_lg from '/thumbnails/large/cordyceps_clip-lg.webm'
import cordyceps_clip_sm from '/thumbnails/small/cordyceps_clip-sm.webm'

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
  singleLinks: {
    type: Array as () => SingleStreamingLink[],
    required: true
  },
  videoLink: {
    type: String,
    required: true
  }
})

const { mobile, mdAndDown } = useDisplay()

const videoSources: Record<string, { lg: string; sm: string }> = {
  fossil: {
    lg: fossil_clip_lg,
    sm: fossil_clip_sm
  },
  pure: {
    lg: pure_clip_lg,
    sm: pure_clip_sm
  },
  'as a cordyceps': {
    lg: cordyceps_clip_lg,
    sm: cordyceps_clip_sm
  }
}

const videoSrc = computed(() => {
  const key = props.title.toLowerCase()
  return mdAndDown.value ? videoSources[key]?.sm : videoSources[key]?.lg
})
</script>

<template>
  <div class="bg-black-grain">
    <v-lazy transition="fade-transition">
      <v-container>
        <div class="d-flex flex-column align-center py-16 px-10 px-md-16" :style="{ gap: '24px' }">
          <div class="text-center text-brown-lighten-5">
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

          <div class="d-flex py-4" :style="{ gap: mobile ? '' : '24px' }">
            <v-btn
              v-for="(service, index) in singleLinks"
              icon
              variant="text"
              class="text-dark hover"
              :key="index"
              :href="service.link"
              target="_blank"
            >
              <v-img :src="`/icons/white/${service.name}.png`" :width="mobile ? 30 : 40" />
            </v-btn>
          </div>

          <a :href="props.videoLink" class="video-thumbnail" target="_blank">
            <video
              autoplay
              muted
              loop
              :src="videoSrc"
              :alt="`Thumbnail for Benthos - ${props.title}`"
              class="video-responsive opacity-90 rounded-lg flat-shadow"
            />

            <v-icon icon="fas fa-circle-play" class="play-icon" color="brown-lighten-5" />
          </a>

          <footer class="d-flex flex-column justify-center align-center">
            <v-img :src="insideout_logo" :width="150" alt="InsideOut Music" />
          </footer>
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
