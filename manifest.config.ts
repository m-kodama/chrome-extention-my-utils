// manifest.config.ts
import { defineManifest } from '@crxjs/vite-plugin'
import { isProd } from './config/utils'

export const manifest = defineManifest({
  manifest_version: 3,
  name: 'My utils',
  version: '1.0.0',
  icons: {
    '16': 'src/assets/icons/icon-16.png',
    '32': 'src/assets/icons/icon-32.png',
    '48': 'src/assets/icons/icon-48.png',
    '128': 'src/assets/icons/icon-128.png',
  },
  permissions: [],
  action: { default_popup: 'index.html' },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      // matches: ['https://www.google.co.jp/*'],
      js: ['src/contentScripts/script'],
    },
  ],
  web_accessible_resources: [
    {
      matches: ['<all_urls>'],
      // matches: ['https://www.google.co.jp/*'],
      resources: isProd
        ? ['assets/style.css', 'assets/MaterialSymbolsRounded.woff2']
        : ['src/assets/tailwind.css', 'src/style.css'],
    },
  ],
})
