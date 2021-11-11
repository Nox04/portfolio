import { defineNuxtConfig } from 'nuxt3'
const config = defineNuxtConfig({
  target: 'static',
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

  buildModules: [
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-158523703-1'
    //   }
    // ]
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00adb5' },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // [
    //   'nuxt-i18n',
    //   {
    //     locales: [
    //       { code: 'en', iso: 'en-US', file: 'en.ts', name: 'English' },
    //       { code: 'es', iso: 'es-CO', file: 'es.ts', name: 'Spanish' }
    //     ],
    //     langDir: 'i18n/',
    //     lazy: true,
    //     defaultLocale: 'en',
    //     vueI18n: { fallbackLocale: 'en' },
    //     vuex: false
    //   }
    // ],
    // '@nuxtjs/sitemap'
  ],
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'https://juanangarita.com',
  //   cacheTime: 1000 * 60 * 60 * 2,
  //   trailingSlash: true,
  //   gzip: true
  // },
  // manifest: {
  //   name: 'Juan Angarita',
  //   lang: 'es-CO'
  // }
})

export default config
