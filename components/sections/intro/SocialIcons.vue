<template>
  <ul class="flex w-full justify-center my-4 md:justify-start">
    <li v-for="sm in socialMedia" :key="sm.icon">
      <a
        :aria-label="sm.icon"
        :href="sm.url"
        target="_blank"
        rel="noreferrer"
        class="p-1 rounded-full mx-2 md:mx-0 md:mr-2 flex items-center"
      >
        <img :src="`/social/${sm.icon}.svg`" class="w-6 h-6" />
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
const socialMedia = [
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/juan-david-angarita-a1ab7217a/',
  },
  {
    icon: 'github',
    url: 'https://github.com/Nox04',
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/NoxKlax',
  },
]
</script>
