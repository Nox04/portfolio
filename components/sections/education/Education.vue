<template>
  <section class="education-section section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="heading">
            <h3>
              <b>{{ $t('education') }}</b>
            </h3>
            <h6 class="font-lite-black">
              <b>{{ $t('academicCareer') }}</b>
            </h6>
          </div>
        </div>
        <!-- col-sm-3 -->

        <div class="col-12 col-md-9">
          <div class="education-wrapper">
            <education-item
              :title="$t('degree1')"
              :institution="$t('university1')"
              :date="$t('educationDate1')"
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
