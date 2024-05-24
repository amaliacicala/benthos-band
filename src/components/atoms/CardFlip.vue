<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import type { StreamingLink } from '@/types/Streaming'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  backgroundImage: {
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
  links: {
    type: Array<StreamingLink>,
    required: true
  },
  flip: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['reportFlipState'])

const cardFlip = ref(0)
const pulseClass = ref(false)

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
        min-width="300"
        max-width="300"
        min-height="300"
        max-height="300"
        :image="props.backgroundImage"
        class="flat-shadow"
        @click="() => handleCardClick(1)"
      />
    </v-window-item>
    <v-window-item>
      <transition name="pulse">
        <v-card
          min-width="300"
          max-width="300"
          min-height="300"
          max-height="300"
          color="green-lighten-1"
          :class="['py-4 px-8', { pulse: pulseClass }]"
          style="overflow-y: scroll"
          @click="() => handleCardClick(0)"
        >
          <div class="d-flex flex-column align-center text-green-darken-4 pb-4">
            <p class="text-overline">{{ props.overline }}</p>
            <p class="text-h4">{{ props.title }}</p>
          </div>
          <v-btn
            v-for="(link, index) in props.links"
            :key="index"
            :href="link.link"
            flat
            style="border-radius: 8px"
            class="d-flex outlined py-5 mb-2"
            target="_blank"
          >
            <div class="d-flex align-center">
              <v-img
                :src="`src/assets/icons/${link.icon}.svg`"
                :alt="link.name"
                width="20px"
                height="20px"
              />
              <p class="text-body-2 ml-2">{{ link.name }}</p>
            </div>
            <v-icon icon="mdi-open-in-new" color="grey" />
          </v-btn>
        </v-card>
      </transition>
    </v-window-item>
  </v-window>
</template>

<style lang="scss" scoped>
.bg-green-lighten-1 {
  color: rgb(var(--v-green-lighten-1)) !important;
}
.outlined {
  border: solid 1px rgb(var(--v-theme-grey));
}
:deep(.v-btn__content) {
  width: 100%;
  justify-content: space-between;
}
</style>
