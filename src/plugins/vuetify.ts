import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#f4f2e4',
          white: '#ffffff',
          black: '#111',
          dark: '#1f211e',
          grey: '#797979',
          background: '#111111',
          'red-darken-4': '#8f2732',
          'red-darken-3': '#2c1615',
          'red-darken-2': '#97323d',
          'red-darken-1': '#45151c',
          'red-lighten-1': '#d27d70',
          'red-lighten-2': '#bd776e',
          'red-lighten-3': '#97574e',
          'red-lighten-4': '#f7bdab',
          'green-darken-4': '#312f28',
          'green-darken-3': '#343221',
          'green-darken-2': '#5d6656',
          'green-lighten-2': '#aab5a1',
          'green-lighten-1': '#bec3b3',
          'teal-darken-4': '#546061',
          'teal-darken-2': '#809290',
          'brown-lighten-5': '#f6f2de',
          'brown-lighten-4': '#ab9164',
          'brown-darken-4': '#282423',
          'brown-darken-3': '#734427',
          'brown-darken-2': '#411e17',
          'amber-darken-1': '#e8b72b',
          'amber-lighten-1': '#fde6a5',
          'purple-lighten-1': '#bf9ab6',
          'purple-lighten-2': '#956c8b',
          'pink-lighten-4': '#c09a9d'
        }
      }
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi
    }
  },
  display: {
    mobileBreakpoint: 'md'
  }
})
