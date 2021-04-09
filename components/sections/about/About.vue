<template>
  <section class="about-section section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="heading">
            <h3>
              <b>{{ $t('aboutMe') }}</b>
            </h3>
            <h6 class="font-lite-black">
              <b>{{ $t('professionalPath') }}</b>
            </h6>
          </div>
        </div>
        <!-- col-sm-3 -->
        <div class="col-sm-12 col-md-9">
          <p class="margin-b-30">{{ $t('bio') }}</p>
          <p class="margin-b-30">{{ $t('bio2') }}</p>
          <div class="experience">
            <ul class="list">
              <li>React</li>
              <li>React Native</li>
              <li>Typescript</li>
              <li>Graphql</li>
              <li>Vue</li>
              <li>Nuxt.js</li>
              <li>Next.js</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Java</li>
              <li>AWS</li>
              <li>RabbitMQ</li>
              <li>D3</li>
            </ul>
          </div>
          <h4 class="margin-tb-30">{{ $t('currentlyLearning') }}</h4>
          <div class="experience">
            <ul class="list">
              <li>{{ $t('learning2') }}</li>
              <li>{{ $t('learning3') }}</li>
            </ul>
          </div>
          <!-- row -->
        </div>
        <!-- col-sm-9 -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>
