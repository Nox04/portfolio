<template>
  <footer class="w-full flex justify-center py-6">
    <p><span class="copyleft">&copy;</span>Juan Angarita {{ year }}</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
