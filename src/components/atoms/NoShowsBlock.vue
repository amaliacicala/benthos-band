<script lang="ts" setup>
import icon from '/icons/bandsintown.svg'

const props = defineProps({
  notifyLink: {
    type: String,
    required: true
  },
  primaryColor: {
    type: String,
    default: 'red-darken-2'
  },
  secondaryColor: {
    type: String,
    default: 'red-lighten-2'
  },
  textColor: {
    type: String,
    default: 'brown-lighten-5'
  }
})
</script>

<template>
  <div
    class="d-flex flex-column align-self-center justify-center align-center text-center w-100 w-lg-75 pa-8"
    :style="{
      border: `solid 1px rgba(var(--v-theme-${props.primaryColor}), 0.5)`,
      borderRadius: '8px'
    }"
  >
    <p class="text-h4 text-brown-lighten-5">Sorry, no upcoming shows for the moment.</p>
    <p :class="`text-body-1 text-${props.secondaryColor} mt-6 mt-md-2`">
      But you can be the first to know when we're back on stage,<br />or request a show in your
      city.
    </p>
    <v-row class="d-flex flex-column flex-md-row pb-8 mt-2 align-center">
      <v-btn
        :href="props.notifyLink"
        target="_blank"
        size="large"
        :color="props.primaryColor"
        :class="`mt-8 text-${props.textColor} flat-shadow`"
      >
        <img :src="icon" width="20px" class="mr-3" />
        Notify Me
      </v-btn>
      <v-btn
        :href="props.notifyLink"
        target="_blank"
        size="large"
        variant="outlined"
        :color="props.primaryColor"
        :class="`ml-0 ml-md-12 mt-8 text-${props.textColor} flat-shadow`"
      >
        <img :src="icon" width="20px" class="mr-3" />
        Request a show
      </v-btn>
    </v-row>
  </div>
</template>
