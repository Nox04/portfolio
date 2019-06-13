<template>
  <section class="experience-section section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="heading">
            <h3>
              <b>Exp. Laboral</b>
            </h3>
            <h6 class="font-lite-black">
              <b>TRABAJOS PREVIOS</b>
            </h6>
          </div>
        </div>
        <!-- col-sm-3 -->

        <div class="col-sm-12 col-md-9">
          <previous-job
            job="DESARROLLADOR FULL STACK"
            employer="ORION SOLUTIONS"
            dates="OCTUBRE 2017 - PRESENTE (2 años)"
            :activities="[
              'Desarrollador de aplicaciones móviles usando Android nativo y React native.',
              'Desarrollador de firmware para dispositivos linux usando Java, Kotlin y C++.',
              'Desarrollador backend usando PHP, Laravel y Postgresql.'
            ]"
          />
          <previous-job
            job="DESARROLLADOR BACK END"
            employer="ESISTEL"
            dates="ENERO 2014 - DICIEMBRE 2016 (3 años)"
            :activities="[
              'Desarrollador backend usando PHP, Laravel y Postgresql.'
            ]"
          />
          <previous-job
            job="DESARROLLADOR FULL STACK"
            employer="GIMSABER"
            dates="FEBRERO 2011 - DICIEMBRE 2013 (3 años)"
            :activities="[
              'Desarrollador backend usando PHP, Laravel y Postgresql.'
            ]"
          />
        </div>
        <!-- col-sm-9 -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
  <!-- experience-section -->
</template>
<script>
import PreviousJob from './PreviousJob'

export default {
  components: {
    PreviousJob
  }
}
</script>
