import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#151515' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-flags'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/axios'],
    ['@nuxtjs/pwa'],
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
          { code: 'es', iso: 'es-CO', file: 'es.js', name: 'Spanish' }
        ],
        langDir: 'i18n/',
        lazy: true,
        defaultLocale: 'es',
        vueI18n: { fallbackLocale: 'es' },
        vuex: false
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
