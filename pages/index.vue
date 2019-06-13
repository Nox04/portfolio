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
import About from '~/components/sections/About'
import Experience from '~/components/sections/Experience'
import Portfolio from '~/components/sections/Portfolio'
import Education from '~/components/sections/Education'

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
  }
}
</script>
