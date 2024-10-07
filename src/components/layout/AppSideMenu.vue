<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchNavigation } from '@/api/navigation'
import type { NavigationItem } from '@/types/Navigation'
import SocialMediaButtons from '@/components/atoms/SocialMediaButtons.vue'

const props = defineProps({
  navLinks: {
    type: Array<NavigationItem>,
    required: true
  }
})

const router = useRouter()
const route = useRoute()

const navigation = ref<Array<NavigationItem>>([])

const emits = defineEmits(['close'])

const isActive = (link: string) => {
  return route.path === link
}

const handleNavigation = (link: string) => {
  router.push(link).then(() => {
    const targetElement = document.getElementById(link.substring(1))
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    emits('close')
  })
}

onMounted(() => {
  navigation.value = fetchNavigation(props.navLinks)
})

watch(
  () => route.fullPath,
  (newFullPath) => {
    if (!newFullPath) return
    emits('close')
  }
)
</script>

<template>
  <v-btn
    icon="mdi-close"
    :rounded="0"
    variant="text"
    color="black"
    class="d-flex ml-auto px-4"
    width="24px"
    @click="$emit('close')"
  />

  <v-list-item
    v-for="item in navigation"
    :key="item.name"
    link
    height="70"
    class="d-flex justify-center text-lowercase text-h4"
    :class="{ 'active font-weight-bold': isActive(item.link) }"
    @click="handleNavigation(item.link)"
  >
    {{ item.name }}
  </v-list-item>

  <div class="align-self-center mt-auto pb-2">
    <v-divider class="border-opacity-40 pb-1" />

    <SocialMediaButtons />
  </div>
</template>

<style lang="scss" scoped>
.active {
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}
.v-list-item {
  &:hover {
    text-decoration: underline !important;
    text-underline-offset: 2px !important;
    text-decoration-style: dotted !important;
  }
}
:deep(.mdi-close::before) {
  font-size: 32px !important;
}
</style>
