<template>
  <footer>
    <p><span class="copyleft">&copy;</span>Nox {{ year }}</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
