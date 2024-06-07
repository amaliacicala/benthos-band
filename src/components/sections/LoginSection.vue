<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import logo from '@/assets/benthos_logo_new_light.png'

const username = ref('')
const password = ref('')

const router = useRouter()
const authStore = useAuthStore()

const handleLogin = () => {
  if (authStore.login(username.value, password.value)) {
    router.push('/')
  } else {
    alert(
      'Invalid credentials. Please try again. \n\nIf the error persists, contact benthos.milano@gmail.com.'
    )
  }
}

const isLoginDisabled = computed(() => {
  return username.value === '' || password.value === ''
})
</script>

<template>
  <v-main class="bg-pattern">
    <v-container class="d-flex align-center h-100">
      <div class="d-flex flex-column align-center w-100">
        <v-img :src="logo" :width="180" alt="Benthos band" class="pb-12" />

        <v-form @submit.prevent="handleLogin()" class="w-50">
          <v-text-field
            v-model="username"
            label="Username"
            variant="outlined"
            required
            autofocus
            bg-color="black"
            base-color="amber-darken-1"
          />

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            variant="outlined"
            required
            bg-color="black"
            base-color="amber-darken-1"
          />

          <v-btn :disabled="isLoginDisabled" type="submit" color="primary" size="large">
            Login
          </v-btn>
        </v-form>
      </div>
    </v-container>
  </v-main>
</template>
<!--
<style lang="scss" scoped>
:deep(.v-input__details) {
  display: none !important;
}
</style> -->
