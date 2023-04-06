<template>
  <section class="bg-cover bg-no-repeat lg:px-5" :style="background">
    <div
      class="flex flex-col pt-10 justify-center md:flex-row md:flex-wrap md:justify-start lg:space-x-5 lg:flex-nowrap lg:py-10 lg:pt-20 max-w-7xl mx-auto"
    >
      <div class="mb-10 px-4 flex justify-center relative">
        <nuxt-img
          alt="profile picture"
          src="/images/profile_400x400.jpg"
          class="rounded-xl"
          :height="250"
          :width="250"
          format="webp"
        />
        <AuroraBorealis />
      </div>

      <div class="text-center md:text-left lg:flex-grow">
        <GlitchedText text="Juan David Angarita" />
        <h3 class="text-brand text-xl">Software Developer</h3>
        <ul class="my-6 md:my-4">
          <li>
            <span class="font-bold text-brand">Email</span>
            :
            <a href="mailto:contact@juanangarita.com">
              contact@juanangarita.com
            </a>
          </li>
          <li>
            <span class="font-bold text-brand">Nickname</span>
            : Nox
          </li>
          <li>
            <span class="font-bold text-brand">TimeZone</span>
            : (GMT-5)
          </li>
        </ul>
        <social-icons />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SocialIcons from './SocialIcons.vue'
import AuroraBorealis from './AuroraBorealis.vue'
import GlitchedText from './GlitchedText.vue'
const $img = useImage()

const background = computed(
  () =>
    `background-image: url(${$img('/images/header-bg.jpg', {
      format: 'webp',
    })});`
)
</script>
<style lang="scss">
//
</style>
