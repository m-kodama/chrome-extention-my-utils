/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { themes } from './src/theme/theme'

export default {
  content: ['index.html', './src/**/*.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes,
  },
}
