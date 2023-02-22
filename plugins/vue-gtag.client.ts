import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: 'G-L4E64XESQK',
      },
    },
    nuxtApp.$router
  )
})
