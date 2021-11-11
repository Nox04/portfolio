import { defineNuxtConfig } from 'nuxt3'
const config = defineNuxtConfig({
  nitro: {
    preset: 'server',
  },
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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00adb5' },
})

export default config
