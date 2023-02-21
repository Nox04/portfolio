<template>
  <intro />
  <about />
  <hr />
  <experience />
  <hr />
  <portfolio />
</template>
<script lang="ts" setup>
import Intro from '~/components/sections/intro/Intro.vue'
import About from '~/components/sections/about/About.vue'
import Experience from '~/components/sections/experience/Experience.vue'
import Portfolio from '~/components/sections/portfolio/Portfolio.vue'
import '~/assets/styles/styles.scss'

useHead({
  title: 'Juan Angarita - Portfolio',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'theme-color', content: '#151515' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Juan David Angarita personal website',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
</script>
