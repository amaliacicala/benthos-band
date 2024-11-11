<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import type { StreamingLink } from '@/types/Streaming'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  backgroundImageLg: {
    type: String,
    required: true
  },
  backgroundImageSm: {
    type: String,
    required: true
  },
  overline: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  links: {
    type: Array<StreamingLink>,
    required: true
  },
  flip: {
    type: Boolean,
    default: false
  }
})

const { xs, sm, md, mdAndDown } = useDisplay()

const emit = defineEmits(['reportFlipState'])

const cardFlip = ref(0)
const pulseClass = ref(false)

const cardSize = computed(() => {
  if (sm.value || xs.value) return 300
  if (md.value) return 250
  return 350
})

const reportState = () => {
  emit('reportFlipState', props.index, cardFlip.value)
}

const handleCardClick = (newFlipValue: number) => {
  cardFlip.value = newFlipValue

  if (newFlipValue === 1) {
    pulseClass.value = true
    setTimeout(() => {
      pulseClass.value = false
    }, 500)
  }

  reportState()
}

watch(
  () => props.flip,
  () => {
    cardFlip.value = props.flip ? 1 : 0
    if (cardFlip.value === 1) {
      pulseClass.value = true
      setTimeout(() => {
        pulseClass.value = false
      }, 500)
    }
    reportState()
  }
)

onMounted(reportState)
</script>

<template>
  <v-window v-model="cardFlip" class="flat-shadow">
    <v-window-item>
      <v-card
        :min-width="cardSize"
        :max-width="cardSize"
        :min-height="cardSize"
        :max-height="cardSize"
        :image="mdAndDown ? props.backgroundImageSm : props.backgroundImageLg"
        class="flat-shadow"
        :rounded="0"
        @click="() => handleCardClick(1)"
      />
    </v-window-item>

    <v-window-item>
      <transition name="pulse">
        <v-card
          :min-width="cardSize"
          :max-width="cardSize"
          :min-height="cardSize"
          :max-height="cardSize"
          color="brown-lighten-5"
          :rounded="0"
          :class="['py-4 px-6 px-md-4 px-lg-8', { pulse: pulseClass }]"
          style="overflow-y: scroll"
          @click="() => handleCardClick(0)"
        >
          <div class="d-flex flex-column align-center text-dark pb-4 text-center">
            <p class="text-overline">{{ props.overline }}</p>
            <p class="text-lg-h3 text-md-h4 text-h4">{{ props.title }}</p>
            <p class="text-overline">{{ props.releaseDate }}</p>
          </div>

          <v-btn
            v-for="(link, index) in props.links"
            :key="index"
            :href="link.link"
            flat
            style="border-radius: 8px"
            class="d-flex bg-brown-lighten-5 outlined py-6 py-md-7 mb-2"
            target="_blank"
          >
            <div class="d-flex align-center">
              <v-img
                :src="`/icons/${link.icon}.svg`"
                :alt="link.name"
                width="20px"
                height="20px"
                eager
                style="filter: saturate(0%)"
              />
              <p class="text-body-2 ml-2">{{ link.name }}</p>
            </div>
            <v-icon icon="fas fa-arrow-up-right-from-square" color="dark" />
          </v-btn>
        </v-card>
      </transition>
    </v-window-item>
  </v-window>
</template>

<style lang="scss" scoped>
.outlined {
  border: solid 1px #97323e8a;
}
:deep(.v-card__overlay) {
  display: none;
}
:deep(.v-btn__content) {
  width: 100%;
  justify-content: space-between;
}
:deep(.v-img__img.v-img__img--cover) {
  filter: saturate(60%) brightness(80%);
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
}
</style>
