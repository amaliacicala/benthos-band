<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const props = defineProps({
  release: {
    type: Object,
    required: true
  }
})

const { mobile, mdAndDown } = useDisplay()
</script>

<template>
  <v-main class="bg-black text-primary w-100 pt-3 pb-6 px-6 px-md-0">
    <v-row :style="{ minHeight: mdAndDown ? '' : '400px', minWidth: mdAndDown ? '' : '400px' }">
      <v-col
        cols="12"
        md="12"
        lg="4"
        class="d-flex justify-center justify-lg-start bg-black pb-md-8 pb-lg-0"
      >
        <v-card
          :min-width="mdAndDown ? 300 : 350"
          :max-width="mdAndDown ? 300 : 350"
          :min-height="mdAndDown ? 300 : 350"
          :max-height="mdAndDown ? 300 : 350"
          width="100%"
          height="100%"
          :image="mdAndDown ? props.release.coverSm : props.release.coverLg"
          :rounded="0"
        />
      </v-col>

      <v-col cols="12" md="6" lg="6" class="text-primary bg-black pr-md-12">
        <h2 class="text-h3 text-center text-md-left text-md-h">{{ release.title }}</h2>

        <div v-if="mobile" class="text-green-lighten-2 text-center text-md-right py-4">
          <p class="text-overline">{{ release.releaseType }}</p>
          <p class="text-overline">{{ release.releaseDate }}</p>
        </div>

        <v-list class="text-primary bg-black pa-0 mt-2">
          <v-list-item
            v-for="(track, index) in release.setlist"
            :key="index"
            :class="[mobile ? 'text-body-3' : 'text-body-2', 'pa-0']"
          >
            <span style="opacity: 0.5">{{ `0${index + 1}. ` }}</span>
            <span class="font-weight-bold">{{ track.title }}</span>
            <span style="opacity: 0.5">{{ ` (${track.length})` }}</span>
            <v-btn v-if="track.video" icon variant="text" :href="track.video" target="_blank">
              <v-icon icon="mdi-youtube" />
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col
        cols="12"
        md="6"
        lg="2"
        class="d-flex flex-column justify-space-between bg-black pa-0 pa-md-3"
      >
        <div v-if="!mobile" class="text-primary text-center text-md-right pr-0 pr-md-4">
          <p class="text-overline">{{ release.releaseType }}</p>
          <p class="text-overline">{{ release.releaseDate }}</p>
        </div>

        <div class="d-flex flex-column pt-6">
          <p class="text-primary text-overline text-center text-md-right pr-0 pr-md-4">Stream on</p>

          <div class="d-flex flex-wrap justify-center justify-md-end">
            <v-btn
              v-for="(link, index) in release.links"
              :key="index"
              :href="link.link"
              :alt="`Benthos - ${release.title} on ${link.name}`"
              :aria-label="`Benthos - ${release.title} on ${link.name}`"
              icon
              flat
              variant="text"
              rounded="circle"
              class="pa-0"
              target="_blank"
            >
              <v-img
                :src="`src/assets/icons/white/${link.icon}.png`"
                :alt="link.name"
                width="32px"
                height="32px"
                eager
              />
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>
