<template>
  <div>
    <nuxt />
    <my-footer />
  </div>
</template>
<script>
import Footer from '~/components/layout/Footer'
export default {
  components: {
    'my-footer': Footer
  }
}
</script>
<style lang="scss">
@import '~/static/css/bootstrap.css';
@import '~/static/css/ionicons.css';
@import '~/static/css/responsive.css';
@import '~/static/css/styles.css';
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
</style>
