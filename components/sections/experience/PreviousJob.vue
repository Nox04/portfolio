<template>
  <div class="mb-10">
    <h4 class="font-bold text-xl uppercase">
      {{ job }}
    </h4>
    <h5 class="font-bold text-brand uppercase">
      {{ employer }}
    </h5>
    <h6 class="text-sm text-gray-300 mt-3 mb-4">
      {{ dates }}
    </h6>
    <ul class="list-custom-disc mb-10">
      <li v-for="(activity, index) in activities" :key="index">
        {{ activity }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  job: string
  employer: string
  dates: string
  activities: string[]
}>()
</script>
