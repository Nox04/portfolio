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
        />
      </div>

      <div class="text-center md:text-left lg:flex-grow">
        <h2 class="font-semibold text-4xl">Juan David Angarita</h2>
        <h4 class="text-brand text-xl">Software Developer</h4>
        <ul class="my-8 md:my-4">
          <li>
            <span class="font-bold text-brand">Born</span> : April 11, 1992 ({{
              yearsOld
            }})
          </li>
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
      <div class="w-full px-4 flex mt-2 lg:w-auto flex-col">
        <a
          class="w-full bg-brand-dark text-center rounded-sm flex justify-center items-center py-4 mb-10 font-medium hover:bg-brand-darker focus:bg-brand-darker transition duration-500 ease-in-out lg:px-10 lg:py-3 md:rounded-md"
          href="/documents/CV-Juan-David-Angarita.pdf"
          download
        >
          <i class="la la-cloud-download-alt text-2xl mr-2" />
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SocialIcons from './SocialIcons.vue'

const yearsOld = computed(() => {
  const birthday = new Date('1992-04-11')
  if (birthday instanceof Date) {
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
})
</script>
