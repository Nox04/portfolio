<template>
  <div class="experience margin-b-50">
    <h4>
      <b>{{ job }}</b>
    </h4>
    <h5 class="font-yellow">
      <b>{{ employer }}</b>
    </h5>
    <h6 class="font-lite-black margin-t-10 margin-b-30">
      {{ dates }}
    </h6>
    <ul class="list margin-b-30">
      <li v-for="(activity, index) in activities" :key="index">
        {{ activity }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    job: {
      type: String,
      default: ''
    },
    employer: {
      type: String,
      default: ''
    },
    dates: {
      type: String,
      default: ''
    },
    activities: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
