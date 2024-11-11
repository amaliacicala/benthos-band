<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import epkData from '@/data/epkData.json'
import PageHeader from '@/components/layout/PageHeader.vue'
import BiographyBlock from '@/components/atoms/BiographyBlock.vue'
import about_img from '/backgrounds/large/about_img-lg.avif'
import about_img_sm from '/backgrounds/small/about_img-sm.avif'

const { mobile } = useDisplay()
</script>

<template>
  <div class="bg-red py-16 h-100">
    <v-container class="d-flex flex-column justify-center px-6">
      <PageHeader :title="'About'" :color="'brown-lighten-5'" />
    </v-container>

    <v-fade-transition appear>
      <v-parallax v-if="mobile" :src="about_img_sm" position="top" height="15rem" />
      <v-parallax v-else :src="about_img" height="23rem" position="top" />
    </v-fade-transition>

    <v-container class="px-8">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="8" class="mt-6 text-center">
          <BiographyBlock :text-color="'text-brown-lighten-5'" :bio="'shortBio'" />
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center mt-8">
        <v-col cols="12" sm="6" class="text-center">
          <h2
            class="text-body-1 font-weight-bold text-decoration-underline text-brown-lighten-5 pb-6"
            :style="{ textUnderlineOffset: '4px !important' }"
          >
            band members
          </h2>
          <v-list-item
            v-for="(bandMember, index) in epkData.bandMembers"
            :key="index"
            class="text-body-2 rounded-lg py-2 mb-2"
          >
            <p>{{ bandMember.name }} - {{ bandMember.instrument }}</p>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.v-img {
  opacity: 0.9;
}
</style>
