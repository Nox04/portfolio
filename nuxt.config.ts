export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-gtag', '@nuxt/image'],
  gtag: {
    id: 'G-L4E64XESQK',
  },
  devtools: { enabled: true },
})
