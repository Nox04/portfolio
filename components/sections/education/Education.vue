<template>
  <section class="education-section section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="heading">
            <h3>
              <b>Educación</b>
            </h3>
            <h6 class="font-lite-black">
              <b>CARRERA ACADÉMICA</b>
            </h6>
          </div>
        </div>
        <!-- col-sm-3 -->

        <div class="col-sm-12 col-md-9">
          <div class="education-wrapper">
            <education-item
              title="INGENIERÍA DE SISTEMAS"
              institution="UNIVERSIDAD POPULAR DEL CESAR"
              date="Finalizado en el año 2013"
              info="Finalizada en tres años por homologación de título anterior."
            />
            <education-item
              title="ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN"
              institution="SERVICIO NACIONAL DE APRENDIZAJE"
              date="Finalizado en el año 2009"
              info="Exonerado por suficiencia y buenos resultados."
            />
          </div>
          <!-- education-wrapper -->
        </div>
        <!-- col-sm-9 -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>
<script>
import EducationItem from './EducationItem'
export default {
  components: {
    EducationItem
  }
}
</script>
