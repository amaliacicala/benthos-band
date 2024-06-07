import { ref } from 'vue'
import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js'

const password = import.meta.env.VITE_EPK_PASSWORD
const encryptedPassword = CryptoJS.AES.encrypt(password, 'SECRET_KEY').toString()

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  const login = (username: string, password: string) => {
    const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, 'SECRET_KEY').toString(
      CryptoJS.enc.Utf8
    )
    if (username === import.meta.env.VITE_EPK_USERNAME && password === decryptedPassword) {
      isAuthenticated.value = true
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
  }

  return { isAuthenticated, login, logout }
})
