<template>
  <section
    class="px-5 my-10 flex flex-col max-w-6xl md:px-10 md:flex-row md:justify-center md:space-x-6 lg:space-x-12 mx-auto"
  >
    <div class="mb-10">
      <div class="h-3 w-14 bg-brand-dark rounded-full mb-5 mt-2" />
      <h3 class="font-bold text-3xl mb-1.5 whitespace-normal">
        Work Experience
      </h3>
      <h4 class="font-bold text-sm">PREVIOUS JOBS</h4>
    </div>
    <div class="md:flex-grow md:pt-2">
      <previous-job
        job="Principal Software Engineer"
        :dates="`SEPTEMBER 2019 - PRESENT (${howManyYearsInCurrentJob} years)`"
        :activities="[
          'Developed the Frontend for Okeanos, a platform to to deliver real-time monitoring, predictive threat detection, and proactive defense against physical risks for fiber optic cables.',
          'Developed critical pieces of the Mural app (blockchain powered platform for instant payments) as Virtual Accounts, LATAM OffRamp integrations, invoicing, etc.',
          'Developed the full experience of the AFL Mint system. A system that allows users to collect, trade and play with digital cards.',
          'Lead the development of prediction making applications using Next.js/Tailwind to +2M users.',
          'Developed from scratch a React Native mobile app for prediction making, with real time results, leaderboards, challenges, public profiles, chat, etc.',
        ]"
        employer="Devbase/GameOn/BeMedia/Mural/Lumetec"
      />
      <previous-job
        job="Senior Frontend Developer"
        dates="JUNE 2019 - AUGUST 2019 (2 months)"
        :activities="['Mobile apps developer using React native.']"
        employer="Vendty"
      />
      <previous-job
        job="Full Stack Developer"
        dates="OCTOBER 2017 - JUNE 2019 (2 years)"
        :activities="[
          'Mobile apps developer using Native Android and React native.',
          'Embedded linux devices firmware developer using Java, Kotlin and C++.',
          'Backend developer using PHP, Laravel and Postgresql.',
        ]"
        employer="ORION SOLUTIONS"
      />
      <previous-job
        job="Full Stack Developer"
        dates="JANUARY 2014 - DECEMBER 2016 (3 years)"
        :activities="['Backend developer using PHP, Laravel and Postgresql.']"
        employer="ESISTEL"
      />
      <previous-job
        job="Software Developer"
        dates="FEBRUARY 2011 - DECEMBER 2013 (3 years)"
        :activities="['Backend developer using PHP, Laravel and Postgresql.']"
        employer="GIMSABER"
      />
    </div>
  </section>
</template>
<script setup>
import PreviousJob from './PreviousJob'
const howManyYearsInCurrentJob = computed(() => {
  const startDate = new Date('2019-09-04')
  if (startDate instanceof Date) {
    const ageDifMs = Date.now() - startDate.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
})
</script>
