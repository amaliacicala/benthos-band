<script lang="ts" setup>
import cover_ii from '@/assets/benthos_ii_cover.jpg'
import cover_debris from '@/assets/benthos_debris_cover.jpg'
</script>

<template>
  <div
    class="d-flex flex-column align-center bg-debris bg-red-darken-4 pa-16"
    :style="{ gap: '48px' }"
  >
    <div class="text-center">
      <p class="text-overline">The debut album</p>
      <h1 class="text-h1">Benthos - II</h1>
      <h2
        class="text-body-1 text-decoration-underline"
        :style="{ textUnderlineOffset: '4px !important' }"
      >
        out now
      </h2>
    </div>
    <div class="d-flex" :style="{ gap: '80px' }">
      <v-img
        :src="cover_ii"
        width="300"
        alt="Benthos - II"
        :style="{ boxShadow: 'rgb(74 72 61 / 27%) 10px 10px 0px' }"
      />

      <v-img
        :src="cover_debris"
        width="300"
        alt="Benthos - Debris / Essence B-Side"
        :style="{ boxShadow: 'rgb(74 72 61 / 27%) 10px 10px 0px' }"
      />
    </div>

    <div class="d-flex flex-column align-center w-100">
      <v-btn size="x-large" class="mb-4 w-25">Stream</v-btn>
      <v-btn size="x-large" class="w-25">Buy</v-btn>
    </div>

    <iframe
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/album/5jLm0U00y9utdjUPT88B1l?utm_source=generator"
      width="500px"
      height="200"
      frameBorder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>
