<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchInstagramPosts } from '@/api/instagram'
import type { InstagramPost } from '@/types/Instagram'

const instagramPosts = ref<InstagramPost[]>([])

const truncateCaption = (caption: string, maxLength: number) => {
  return caption.length > maxLength ? caption.slice(0, maxLength) + '...' : caption
}

onMounted(async () => {
  const res = await fetchInstagramPosts()

  instagramPosts.value = res.data
})
</script>

<template>
  <v-row dense>
    <v-col v-for="post in instagramPosts" :key="post.id" cols="12" md="4" sm="6">
      <v-card class="hover-card" elevation="2">
        <v-img :src="post.media_url" :alt="`Instagram post: ${post.caption}`" aspect-ratio="1" />
        <v-card-text>
          <p class="caption">{{ truncateCaption(post.caption, 100) }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.hover {
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
.hover-card {
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
}
.caption {
  font-size: 14px;
  color: #666;
  text-align: center;
}
</style>
