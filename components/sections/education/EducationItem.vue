<template>
  <div class="education margin-b-50">
    <h4>
      <b>{{ title }}</b>
    </h4>
    <h5 class="font-yellow">
      <b>{{ institution }}</b>
    </h5>
    <h6 class="font-lite-black margin-t-10">
      {{ date }}
    </h6>
    <p class="margin-tb-30">
      {{ info }}
    </p>
  </div>
</template>
<script>
export default {
  props: ['title', 'institution', 'date', 'info']
}
</script>
