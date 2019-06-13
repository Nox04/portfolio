<template>
  <section class="portfolio-section section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="heading">
            <h3>
              <b>{{ $t('portfolio') }}</b>
            </h3>
            <h6 class="font-lite-black">
              <b>{{ $t('myWork') }}</b>
            </h6>
          </div>
        </div>
        <div class="col-sm-12 col-md-9">
          <div class="col-sm-6 col-md-6 col-lg-3 ">
            <card />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 ">
            <card />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from './Card'

export default {
  components: {
    Card
  }
}
</script>
