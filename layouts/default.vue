<template>
  <main class="bg-brand-gray text-white min-h-screen">
    <slot />
    <my-footer />
  </main>
</template>
<script setup lang="ts">
import MyFooter from '~/components/layout/Footer.vue'
</script>
