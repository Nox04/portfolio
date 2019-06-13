<template>
  <div class="language-switch">
    <nuxt-link :to="switchLocalePath('es')">
      <country-flag country="co" size="normal" />
    </nuxt-link>
    <nuxt-link :to="switchLocalePath('en')">
      <country-flag country="gb" size="normal" />
    </nuxt-link>
  </div>
</template>
<script>
import CountryFlag from 'vue-country-flag'

export default {
  components: {
    CountryFlag
  }
}
</script>
