<template>
  <main class="bg-brand-gray text-white min-h-screen">
    <slot />
    <my-footer />
  </main>
</template>
<script>
import Footer from '~/components/layout/Footer.vue'
export default {
  components: {
    'my-footer': Footer,
  },
}
</script>
