/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['index.html', './src/**/*.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
