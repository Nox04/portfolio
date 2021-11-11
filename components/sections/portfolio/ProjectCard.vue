<template>
  <div class="rounded-md border shadow-xl mx-0 sm:mx-4 md:mx-0">
    <div :style="background" class="bg-cover overflow-hidden h-44"></div>
    <div class="px-4">
      <img
        :src="`/static/${project.icon}`"
        class="rounded-full h-32 w-32 border-2 -mt-16 mb-4"
        alt="Logo"
      />
      <p class="leading-7">
        <span class="font-bold text-brand">Project: </span> {{ project.title }}
      </p>
      <p class="leading-7">
        <span class="font-bold text-brand">Stack:</span> {{ project.stack }}
      </p>
      <p class="leading-7">
        <span class="font-bold text-brand">Description:</span>
        {{ project.description }}
      </p>
      <p class="leading-7 text-brand font-semibold" v-if="project.link">
        <a :href="project.link" target="_blank" rel="noopener">View More</a>
      </p>
      <p class="pb-8"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: Object,
  },
  computed: {
    background() {
      return `background-image: url(/static/${this.project.background});`
    },
    shouldRedirect() {
      return this.project.images.length > 1
    },
  },
}
</script>
