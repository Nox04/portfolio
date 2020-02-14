import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#151515' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap',
        defer: true
      }
    ]
  },

  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-158523703-1'
      }
    ]
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00adb5' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.ts', name: 'English' },
          { code: 'es', iso: 'es-CO', file: 'es.ts', name: 'Spanish' }
        ],
        langDir: 'i18n/',
        lazy: true,
        defaultLocale: 'en',
        vueI18n: { fallbackLocale: 'en' },
        vuex: false
      }
    ]
  ],

  manifest: {
    name: 'Juan Angarita',
    lang: 'es-CO'
  }
}

export default config
