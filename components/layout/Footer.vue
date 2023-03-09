<template>
  <footer class="w-full flex justify-center py-6">
    <p>
      <span class="copyleft">&copy;</span>
      Juan Angarita {{ year }}
    </p>
  </footer>
</template>
<script setup lang="ts">
const year = ref(new Date().getFullYear())
</script>
