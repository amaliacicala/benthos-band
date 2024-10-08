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

      <div v-if="releases.length > 0">
        <ReleaseBlock :release="releases[0]" />

        <v-divider color="primary" class="border-opacity-25 my-12" />

        <ReleaseBlock :release="releases[1]" />

        <v-divider color="primary" class="border-opacity-25 my-12" />

        <ReleaseBlock :release="releases[2]" />
      </div>
    </v-container>
  </div>
</template>
