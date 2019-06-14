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
              <spinner :progress="93">
                <p class="progress-title">Laravel</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="91">
                <p class="progress-title">Vue.js</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="85">
                <p class="progress-title">R. Native</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="84">
                <p class="progress-title">Java</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="70">
                <p class="progress-title">Kotlin</p>
              </spinner>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-2 text-center">
              <spinner :progress="55">
                <p class="progress-title">C++</p>
              </spinner>
            </div>
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
