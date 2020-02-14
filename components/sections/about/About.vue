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
          <p class="margin-b-50">{{ $t('bio2') }}</p>
          <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="94">
                <p class="progress-title">Laravel</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="92">
                <p class="progress-title">Vue.js</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="90">
                <p class="progress-title">React</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="84">
                <p class="progress-title">Java</p>
              </spinner>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="75">
                <p class="progress-title">NodeJS</p>
              </spinner>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="70">
                <p class="progress-title">Kotlin</p>
              </spinner>
            </div>
          </div>
          <h4 class="margin-b-30">{{ $t('currentlyLearning') }}</h4>
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
<script>
import Spinner from './Spinner'

export default {
  components: {
    Spinner
  }
}
</script>
