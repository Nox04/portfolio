<template>
  <div>
    <intro-section />
    <about-section />
    <experience-section />
    <portfolio-section />
    <education-section />
    <my-footer />
  </div>
</template>
<script>
import Footer from '~/components/layout/Footer'
import Intro from '~/components/sections/intro/Intro'
import About from '~/components/sections/about/About'
import Experience from '~/components/sections/experience/Experience'
import Portfolio from '~/components/sections/Portfolio'
import Education from '~/components/sections/education/Education'

export default {
  components: {
    'my-footer': Footer,
    'intro-section': Intro,
    'about-section': About,
    'experience-section': Experience,
    'portfolio-section': Portfolio,
    'education-section': Education
  },
  data() {
    return {
      title: 'Nox - Portafolio'
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
