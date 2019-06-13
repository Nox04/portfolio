<template>
  <section class="experience-section section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <div class="heading">
            <h3>
              <b>{{ $t('workExperience') }}</b>
            </h3>
            <h6 class="font-lite-black">
              <b>{{ $t('previousJobs') }}</b>
            </h6>
          </div>
        </div>
        <!-- col-sm-3 -->

        <div class="col-sm-12 col-md-9">
          <previous-job
            :job="$t('fullStack').toUpperCase()"
            employer="ORION SOLUTIONS"
            :dates="$t('date1')"
            :activities="[
              $t('mobileExperience'),
              $t('firmwareExperience'),
              $t('backEndExperience')
            ]"
          />
          <previous-job
            :job="$t('backEnd').toUpperCase()"
            employer="ESISTEL"
            :dates="$t('date2')"
            :activities="[$t('backEndExperience')]"
          />
          <previous-job
            :job="$t('fullStack').toUpperCase()"
            employer="GIMSABER"
            :dates="$t('date3')"
            :activities="[$t('backEndExperience')]"
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
