<template>
  <ul class="flex w-full justify-center my-4 md:justify-start">
    <li v-for="sm in socialMedia" :key="sm.icon">
      <a
        :aria-label="sm.icon"
        :href="sm.url"
        target="_blank"
        rel="noreferrer"
        class="p-2 bg-gray-600 rounded-full mx-2 md:mx-0 md:mr-4 flex items-center focus:bg-brand-dark hover:bg-brand-dark transition duration-500 ease-in-out"
      >
        <i
          :class="`la la-${sm.icon} text-xl w-6 h-6 -mt-0.5 mb-0.5 md:-mr-0.5 md:ml-0.5`"
        />
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
  {
    icon: 'rss',
    url: 'https://dev.to/noxklax',
  },
  {
    icon: 'envelope',
    url: 'mailto:contacto@juanangarita.com',
  },
]
</script>
