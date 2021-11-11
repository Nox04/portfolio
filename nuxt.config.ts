import { defineNuxtConfig } from 'nuxt3'
export default defineNuxtConfig({
  css: ['~/static/styles/styles.scss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
