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
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap',
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
    },
  ],
})
</script>
