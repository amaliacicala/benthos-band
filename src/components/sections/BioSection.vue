<script lang="ts" setup>
import BiographyBlock from '@/components/atoms/BiographyBlock.vue'
import BandMembersBlock from '@/components/atoms/BandMembersBlock.vue'
import EpkContactsBlock from '@/components/atoms/EpkContactsBlock.vue'
import FFOBlock from '@/components/atoms/FFOBlock.vue'
</script>

<template>
  <div
    id="bio"
    class="d-flex flex-column justify-center align-center bg-paper text-dark px-4 py-8 pa-md-12"
  >
    <v-container>
      <div class="d-flex flex-column align-center">
        <p class="text-overline text-center text-dark">Progressive Metal band from Italy</p>
        <h1 class="text-md-h1 text-h2 text-dark">Benthos</h1>
      </div>

      <v-row class="pt-12">
        <v-col cols="12" md="8">
          <BiographyBlock :bio="'longBio'" />
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
</template>
