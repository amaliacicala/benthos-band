<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import logo from '/logos/benthos_logo_white.png'

const username = ref('')
const password = ref('')

const router = useRouter()
const route = useRoute()

const authStore = useAuthStore()

const handleLogin = () => {
  if (authStore.login(username.value, password.value)) {
    router.push(route.query.redirect as string)
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
  <div class="d-flex align-center h-100 bg-pattern">
    <div class="d-flex flex-column align-center w-100">
      <v-img :src="logo" :width="180" alt="Benthos band" class="pb-12" eager />

      <v-form @submit.prevent="handleLogin()" class="w-50">
        <v-text-field
          v-model="username"
          label="Username"
          variant="outlined"
          required
          autofocus
          bg-color="dark"
          base-color="amber-darken-1"
        />

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          variant="outlined"
          required
          bg-color="dark"
          base-color="amber-darken-1"
        />

        <v-btn :disabled="isLoginDisabled" type="submit" color="primary" size="large">
          Login
        </v-btn>
      </v-form>
    </div>
  </div>
</template>
