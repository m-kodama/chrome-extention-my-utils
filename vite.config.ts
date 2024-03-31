import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import Components from 'unplugin-vue-components/vite'
import { manifest } from './manifest.config'
import { r } from './config/utils'

// https://vitejs.dev/config/
export default defineConfig({
  // root: r('src'),
  plugins: [
    vue(),
    crx({ manifest }),
    Components({
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '~/': `${r('src')}/`,
    },
  },
})
