<template>
  <section class="bg-intro bg-cover bg-no-repeat lg:px-5">
    <div
      class="flex flex-col pt-10 justify-center md:flex-row md:flex-wrap md:justify-start lg:space-x-5 lg:flex-nowrap lg:py-10 lg:pt-20 max-w-7xl mx-auto"
    >
      <div class="mb-10 px-4 flex justify-center">
        <img
          alt="profile picture"
          src="/images/profile_400x400.jpg"
          class="rounded-xl max-h-[250px] md:max-h-[275px] lg:max-h-[250px]"
          height="250"
          width="250"
        />
      </div>

      <div class="text-center md:text-left lg:flex-grow">
        <h2 class="font-semibold text-4xl">Juan David Angarita</h2>
        <h3 class="text-brand text-xl">Software Developer</h3>
        <ul class="my-8 md:my-4">
          <li>
            <span class="font-bold text-brand">Email</span> :
            <a href="mailto:contact@juanangarita.com">
              contact@juanangarita.com
            </a>
          </li>
          <li><span class="font-bold text-brand">Nickname</span> : Nox</li>
          <li>
            <span class="font-bold text-brand">Web3</span> : noxklax.eth |
            noxklax.sol
          </li>
          <li><span class="font-bold text-brand">TimeZone</span> : (GMT-5)</li>
        </ul>
        <social-icons />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SocialIcons from './SocialIcons.vue'
</script>
