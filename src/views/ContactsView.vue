<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import PageHeader from '@/components/layout/PageHeader.vue'

const sourceOne = ref('benthos@amaliacicala.com')
const sourceTwo = ref('benthos.milano@gmail.com')

const { isSupported } = useClipboard()
const { copy: copyOne, copied: copiedOne } = useClipboard()
const { copy: copyTwo, copied: copiedTwo } = useClipboard()
</script>

<template>
  <div class="bg-paper py-16 h-100">
    <v-container class="d-flex flex-column justify-center px-6">
      <PageHeader :title="'Contacts'" :color="'dark'" />

      <v-fade-transition appear>
        <v-list
          class="d-flex flex-column justify-center align-center align-self-center bg-transparent text-dark pt-2 w-100 w-lg-75 h-100"
        >
          <v-list-item class="text-center pa-0 w-100 w-sm-50">
            <h2
              class="text-overline font-weight-bold mb-4 mb-md-0"
              :style="{ fontSize: '16px !important' }"
            >
              Management
            </h2>
            <p
              class="text-body-2 font-weight-bold bg-red-darken-2 text-brown-lighten-5 py-1 mt-2 mb-4"
            >
              Amalia Cicala
            </p>
            <span
              v-if="!copiedOne"
              :class="[
                isSupported ? 'cursor-pointer' : '',
                'text-body-2 text-dark border-rounded py-2 px-4'
              ]"
              @click="isSupported ? copyOne(sourceOne) : ''"
            >
              {{ sourceOne }}
            </span>
            <span
              v-if="copiedOne"
              class="text-body-2 text-red-lighten-3 font-weight-bold py-2 px-2"
            >
              Email copied to clipboard.
            </span>

            <v-divider class="border-opacity-25 mt-10 mb-5" />
          </v-list-item>

          <v-list-item class="text-center pa-0 w-100 w-sm-50">
            <h2
              class="text-overline font-weight-bold mb-4 mb-md-0"
              :style="{ fontSize: '16px !important' }"
            >
              The Band
            </h2>
            <p
              class="text-body-2 font-weight-bold bg-red-darken-2 text-brown-lighten-5 py-1 mt-2 mb-4"
            >
              Benthos
            </p>
            <span
              v-if="!copiedTwo"
              :class="[
                isSupported ? 'cursor-pointer' : '',
                'text-body-2 text-dark border-rounded py-2  px-4'
              ]"
              @click="isSupported ? copyTwo(sourceTwo) : ''"
            >
              {{ sourceTwo }}
            </span>
            <span
              v-if="copiedTwo"
              class="text-body-2 text-red-lighten-3 font-weight-bold py-2 px-2"
            >
              Email copied to clipboard.
            </span>

            <div class="mt-2" />
          </v-list-item>
        </v-list>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.border-rounded {
  border: solid 1px #666;
  border-radius: 0.5rem;
}
.text-overline {
  @media screen and (max-width: 899px) {
    line-height: 1.5;
  }
}
</style>
