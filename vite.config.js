import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Farkle&Friends',
        short_name: 'Farkle&Friends',
        start_url: '.',
        display: 'standalone',
        background_color: '#212121',
        theme_color: '#212121',
        icons: [
          {
            src: 'dice-black.svg',
            sizes: '192x192',
            type: 'svg'
          },
          {
            src: 'dice-black.svg',
            sizes: '512x512',
            type: 'svg'
          }
        ]
      }
    })
  ],
  base: '/Farkle-Friends/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/assets/styles/variables.less";`,
        javascriptEnabled: true,
      },
    },
  },
})
