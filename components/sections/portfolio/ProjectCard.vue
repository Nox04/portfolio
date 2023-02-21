<template>
  <div class="rounded-md border shadow-xl mx-0 sm:mx-4 md:mx-0">
    <div :style="background" class="bg-cover overflow-hidden h-44"></div>
    <div class="px-4">
      <img
        :src="logo"
        class="rounded-full h-32 w-32 border-2 -mt-16 mb-4"
        alt="Logo"
        loading="lazy"
      />
      <p class="leading-7">
        <span class="font-bold text-brand">Project: </span>
        {{ validProject.title }}
      </p>
      <p class="leading-7">
        <span class="font-bold text-brand">Stack:</span>
        {{ validProject.stack }}
      </p>
      <p class="leading-7">
        <span class="font-bold text-brand">Description:</span>
        {{ validProject.description }}
      </p>
      <p class="leading-7 text-brand font-semibold" v-if="validProject.link">
        <a :href="validProject.link" target="_blank" rel="noopener"
          >View More</a
        >
      </p>
      <p class="pb-8"></p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Project from '~~/models/Project'
const props = defineProps<{
  project: Project
}>()

const validProject = computed(() => props.project || {})
const background = computed(
  () => `background-image: url(${validProject.value.background});`
)
const logo = computed(() => validProject.value.icon)
</script>
