<template>
  <div class="wrapper absolute rounded-xl w-[250px] h-[250px] overflow-hidden">
    <div
      class="absolute overflow-hidden rounded-lg bg-black bg-opacity-90 w-full h-full slide -top-full"
    >
      <div
        class="bg relative w-full h-full m-auto overflow-hidden rounded-lg flex justify-center items-center will-change-transform"
      >
        <a
          href="/videos/aurora_borealis.mp4"
          target="_blank"
          class="z-10 absolute"
        >
          Aurora Borealis - 1:17
        </a>
        <div class="aur_cont">
          <span class="aur aur_1"></span>
          <span class="aur aur_2"></span>
          <span class="aur aur_3"></span>
          <span class="aur aur_4"></span>
          <span class="aur aur_5"></span>
          <span class="aur aur_6"></span>
          <span class="aur aur_7"></span>
          <span class="aur aur_8"></span>
          <span class="aur aur_9"></span>
          <span class="aur aur_10"></span>
          <span class="aur aur_11"></span>
          <span class="aur aur_12"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.slide {
  transition: 1s;
}
.wrapper:hover .slide {
  transition: 1s;
  top: 0;
}

$aur-number: get-vw(72px);

.aur_cont {
  margin: -65px auto 0;
  display: table;
  height: auto;
  .aur {
    transform: skew(-0.06turn, 18deg);
    display: block;
    width: 0;
    min-height: 50px;
    float: left;
    margin-left: 40px;
    border-radius: 5% 52% 30px 20px;
    opacity: 0.6;

    @for $i from 1 through 12 {
      &.aur_#{$i} {
        box-shadow: rgb(75, random(255) + 100, random(255) + 60)
          0px
          0px
          100px
          20px;
        margin-top: random(140) - 40 + px;
        animation: topup random(10000) + 3000 + ms infinite linear;
      }
    }
  }
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

@keyframes topup {
  0%,
  100% {
    transform: translatey(30px);
  }
  50% {
    transform: translatey(100px);
  }
}

@keyframes northern {
  0% {
    transform: translate(5%, -2%);
  }
  25% {
    transform: translate(10%, 7%);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: translate(7%, -2%);
  }
  85% {
    transform: translate(6%, 3%) rotate(12deg);
  }
  100% {
    transform: none;
  }
}
</style>
