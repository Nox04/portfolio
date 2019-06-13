<template>
  <section class="about-section section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="heading">
            <h3>
              <b>Sobre mí</b>
            </h3>
            <h6 class="font-lite-black">
              <b>TRAYECTORIA PROFESIONAL</b>
            </h6>
          </div>
        </div>
        <!-- col-sm-3 -->
        <div class="col-sm-12 col-md-9">
          <p class="margin-b-50">
            Desarrollador de Software Fullstack, con amplios conocimientos en
            diversas plataformas y más de 8 años de experiencia,
            amante de la tecnología,
            innovador y en proceso constante de actualización.
            Especializado en la programación web
            y móvil usando los tecnologías.
          </p>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3">
              <vue-circle
                :progress="95"
                :size="120"
                :fill="fill"
                insert-mode="append"
                :start-angle="0"
                :show-percent="true"
                @vue-circle-progress="progress"
                @vue-circle-end="progress_end"
              >
                <p class="progress-title">PHP</p>
              </vue-circle>
            </div>
            <!-- col-sm-6-->

            <div class="col-sm-6 col-md-6 col-lg-3">
              <vue-circle
                :progress="85"
                :size="120"
                :fill="fill"
                insert-mode="append"
                :start-angle="0"
                :show-percent="true"
                @vue-circle-progress="progress"
                @vue-circle-end="progress_end"
              >
                <p class="progress-title">Java</p>
              </vue-circle>
            </div>
            <!-- col-sm-6-->

            <div class="col-sm-6 col-md-6 col-lg-3">
              <vue-circle
                :progress="75"
                :size="120"
                :fill="fill"
                insert-mode="append"
                :start-angle="0"
                :show-percent="true"
                @vue-circle-progress="progress"
                @vue-circle-end="progress_end"
              >
                <p class="progress-title">Kotlin</p>
              </vue-circle>
            </div>
            <!-- col-sm-6-->

            <div class="col-sm-6 col-md-6 col-lg-3">
              <vue-circle
                :progress="85"
                :size="120"
                :fill="fill"
                insert-mode="append"
                :start-angle="0"
                :show-percent="true"
                @vue-circle-progress="progress"
                @vue-circle-end="progress_end"
              >
                <p class="progress-title">Java</p>
              </vue-circle>
            </div>
            <!-- col-sm-6-->
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
import VueCircle from 'vue2-circle-progress/src/index.vue'

export default {
  components: {
    VueCircle
  },
  data() {
    return {
      fill: '#ffa804'
    }
  },
  methods: {
    progress(event, progress, stepValue) {
      // console.log(stepValue)
    },
    progress_end(event) {
      // console.log("Circle progress end");
    }
  }
}
</script>
