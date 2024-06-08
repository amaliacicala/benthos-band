<script lang="ts" setup>
import BiographyBlock from '../atoms/BiographyBlock.vue'
import BandMembersBlock from '../atoms/BandMembersBlock.vue'
import EpkContactsBlock from '../atoms/EpkContactsBlock.vue'
</script>

<template>
  <div class="d-flex flex-column justify-center align-center bg-brown-lighten-5 px-4 py-8 pa-md-12">
    <p class="text-overline text-center">Progressive Metal band from Italy</p>
    <h1 class="text-md-h1 text-h2">Benthos</h1>

    <v-container class="pt-12">
      <v-row>
        <v-col cols="12" md="8">
          <BiographyBlock />
        </v-col>

        <v-col cols="12" md="4" class="col-sm-10">
          <BandMembersBlock />

          <v-divider class="my-6" inset color="brown-darken-4" />

          <EpkContactsBlock />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
