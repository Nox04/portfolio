<template>
  <section
    class="
      px-5
      my-10
      flex flex-col
      max-w-6xl
      md:px-10 md:flex-row md:justify-center md:space-x-6
      lg:space-x-12
      mx-auto
    "
  >
    <div class="mb-10">
      <div class="h-3 w-14 bg-brand-dark rounded-full mb-5 mt-2" />
      <h3 class="font-bold text-3xl mb-1.5 whitespace-normal">
        Work Experience
      </h3>
      <h6 class="font-bold text-sm">PREVIOUS JOBS</h6>
    </div>
    <div class="md:flex-grow md:pt-2">
      <previous-job
        job="Frontend Leader"
        dates="SEPTEMBER 2019 - PRESENT"
        :activities="[
          'Lead and Scale predictions making applications using Next.js/Tailwind to +2M users.',
          'Developed from scratch a React Native mobile app for predictions making, with real time results, leaderboards, challenges, public profiles, chat, etc.',
        ]"
        employer="Devbase/GameOn"
      />
      <previous-job
        job="Full Stack Developer"
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
        job="Full Stack Developer"
        dates="FEBRUARY 2011 - DECEMBER 2013 (3 years)"
        :activities="['Backend developer using PHP, Laravel and Postgresql.']"
        employer="GIMSABER"
      />
    </div>
  </section>
</template>
<script>
import PreviousJob from './PreviousJob'

export default {
  components: {
    PreviousJob,
  },
}
</script>
