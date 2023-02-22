<template>
  <section class="bg-cover bg-no-repeat lg:px-5" :style="background">
    <div
      class="flex flex-col pt-10 justify-center md:flex-row md:flex-wrap md:justify-start lg:space-x-5 lg:flex-nowrap lg:py-10 lg:pt-20 max-w-7xl mx-auto"
    >
      <div class="mb-10 px-4 flex justify-center">
        <nuxt-img
          alt="profile picture"
          src="/images/profile_400x400.jpg"
          class="rounded-xl"
          :height="250"
          :width="250"
          format="webp"
        />
      </div>

      <div class="text-center md:text-left lg:flex-grow">
        <div class="w-full relative flex justify-center md:justify-start">
          <div
            class="glitch relative font-semibold text-4xl w-full"
            data-text="Juan David Angarita"
          >
            Juan David Angarita
          </div>
        </div>
        <h3 class="text-brand text-xl">Software Developer</h3>
        <ul class="my-6 md:my-4">
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
const $img = useImage()

const background = computed(
  () =>
    `background-image: url(${$img('/images/header-bg.jpg', {
      format: 'webp',
    })});`
)
</script>
<style lang="scss">
.glitch {
  animation: glitch 5s 5s infinite;
  max-width: 351px;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -1px;
  text-shadow: -1px 0 magenta;
  overflow: hidden;
  top: 0;
  animation: noise-1 3s linear infinite alternate-reverse,
    glitch 5s 5.05s infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 1px;
  text-shadow: -1px 0 lightgreen;
  overflow: hidden;
  top: 0;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(10deg) skewX(75deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;
  @for $i from 1 through $steps {
    #{percentage($i*calc(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i*calc(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}
</style>
