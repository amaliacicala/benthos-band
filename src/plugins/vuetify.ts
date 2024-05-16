import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import type { ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    white: '#f4f2e4',
    black: '#111111',
    background: '#111111',
    'red-darken-4': '#2c1615',
    'green-darken-4': '#312f28',
    'green-darken-3': '#343221',
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
    'purple-lighten-1': '#956c8b',
    'pink-lighten-4': '#c09a9d'
  },
  variables: {
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 0.74,
    'disabled-opacity': 0.5
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  display: {
    mobileBreakpoint: 'md'
  }
})
