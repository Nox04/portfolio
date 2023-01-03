<template>
  <section
    class="px-5 my-10 flex flex-col max-w-6xl md:px-10 md:flex-row md:justify-center md:space-x-6 lg:space-x-12 mx-auto"
  >
    <div class="mb-10">
      <div class="h-3 w-14 bg-brand-dark rounded-full mb-5 mt-2" />
      <h3 class="font-bold text-3xl mb-1.5 whitespace-normal">Portfolio</h3>
      <h6 class="font-bold text-sm">MY WORK</h6>
    </div>
    <div class="md:flex-grow md:pt-2 grid gap-4 grid-cols-1 lg:grid-cols-2">
      <project-card
        v-for="(project, index) in Projects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import Projects from '~/data/Projects'
import ProjectCard from './ProjectCard.vue'
</script>
