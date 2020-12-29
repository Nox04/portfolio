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
            :dates="$t('date5')"
            :activities="[
              $t('backEndExperience'),
              $t('frontEndExperience'),
              $t('mobileExperience2')
            ]"
            employer="Nucleus Studio"
          />
          <previous-job
            :job="$t('mobile').toUpperCase()"
            :dates="$t('date4')"
            :activities="[$t('mobileExperience2')]"
            employer="Vendty"
          />
          <previous-job
            :job="$t('fullStack').toUpperCase()"
            :dates="$t('date1')"
            :activities="[
              $t('mobileExperience'),
              $t('firmwareExperience'),
              $t('backEndExperience')
            ]"
            employer="ORION SOLUTIONS"
          />
          <previous-job
            :job="$t('backEnd').toUpperCase()"
            :dates="$t('date2')"
            :activities="[$t('backEndExperience')]"
            employer="ESISTEL"
          />
          <previous-job
            :job="$t('fullStack').toUpperCase()"
            :dates="$t('date3')"
            :activities="[$t('backEndExperience')]"
            employer="GIMSABER"
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
