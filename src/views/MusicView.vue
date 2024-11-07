<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { fetchStreamingLinks } from '@/api/streaming'
import type { Release } from '@/types/Streaming'
import PageHeader from '@/components/layout/PageHeader.vue'
import ReleaseBlock from '@/components/atoms/ReleaseBlock.vue'

const releases = ref<Release[]>([])

onMounted(() => {
  const data = fetchStreamingLinks()
  releases.value = Object.values(data) as Release[]
})
</script>

<template>
  <div class="bg-black py-16 h-100">
    <v-container>
      <PageHeader :title="'Music Catalogue'" />

      <v-fade-transition appear>
        <div v-if="releases.length > 0">
          <div v-for="(release, index) in releases" :key="index">
            <ReleaseBlock :release="release" />

            <v-divider
              v-if="index !== releases.length - 1"
              color="primary"
              class="border-opacity-25 my-12"
            />
          </div>
        </div>
      </v-fade-transition>
    </v-container>
  </div>
</template>
