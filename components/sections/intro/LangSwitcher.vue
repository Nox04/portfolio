<template>
  <div class="language-switch">
    <nuxt-link
      :to="switchLocalePath('es')"
      aria-label="Cambie el idioma a español"
    >
      <span class="flag"><img src="/images/es-co-flag.jpg"/></span>
    </nuxt-link>
    <nuxt-link
      :to="switchLocalePath('en')"
      aria-label="Switch language to english"
    >
      <span class="flag"><img src="/images/en-gb-flag.jpg"/></span>
    </nuxt-link>
  </div>
</template>
