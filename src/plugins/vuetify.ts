import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import type { ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    white: '#FFFDFC',
    black: '#252522',
    background: '#FFFDFC',
    primary: '#b2464e',
    secondary: '#f18257',
    tertiary: '#75ba86',
    accent: '#cf6895',
    error: '#E7004C',
    'on-primary': '#FFFDFC'
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
