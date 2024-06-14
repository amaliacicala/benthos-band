<script lang="ts" setup>
import icon from '@/assets/icons/bandsintown.svg'

const props = defineProps({
  notifyLink: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="d-flex flex-column align-self-center justify-center align-center text-center w-100 w-lg-75 pa-8"
    style="border: solid 1px #343221; border-radius: 8px"
  >
    <p class="text-h3 text-green-darken-3">Sorry, no upcoming shows for the moment.</p>
    <p class="text-body-1 mt-6 mt-md-2">
      But you can be the first to know when we're back on stage.
    </p>
    <v-btn
      :href="props.notifyLink"
      target="_blank"
      size="x-large"
      color="green-darken-3"
      class="mt-8 text-primary flat-shadow"
    >
      <img :src="icon" width="22px" class="mr-3" />
      Notify Me
    </v-btn>
  </div>
</template>
