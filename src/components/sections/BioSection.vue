<script lang="ts" setup>
import BiographyBlock from '../atoms/BiographyBlock.vue'
import BandMembersBlock from '../atoms/BandMembersBlock.vue'
import EpkContactsBlock from '../atoms/EpkContactsBlock.vue'
import FFOBlock from '../atoms/FFOBlock.vue'
</script>

<template>
  <v-lazy transition="fade-transition">
    <div
      id="bio"
      class="d-flex flex-column justify-center align-center bg-paper text-dark px-4 py-8 pa-md-12"
    >
      <p class="text-overline text-center text-dark">Progressive Metal band from Italy</p>
      <h1 class="text-md-h1 text-h2 text-dark">Benthos</h1>

      <v-container class="pt-12">
        <v-row>
          <v-col cols="12" md="8">
            <BiographyBlock />
          </v-col>

          <v-col id="contacts" cols="12" md="4" class="col-sm-10">
            <BandMembersBlock />

            <v-divider class="my-6" inset color="brown-darken-4" />

            <EpkContactsBlock />

            <v-divider class="my-6" inset color="brown-darken-4" />

            <FFOBlock />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-lazy>
</template>
