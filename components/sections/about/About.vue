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
          <div class="row">
            <div
              :key="index"
              v-for="(skill, index) in skills"
              class="col-12 text-center p-3"
            >
              <progress-bar
                :val="skill.strength"
                :text="skill.name"
                :title="skill.name"
                :bar-border-radius="10"
                :font-size="16"
                :size="10"
                bg-color="#bbbbbb"
                bar-color="#00adb5"
                text-fg-color="#ffffff"
                text-position="top"
                text-align="left"
              />
            </div>
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
<script>
import ProgressBar from 'vue-simple-progress'

export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      skills: [
        { name: 'Laravel', strength: 96 },
        { name: 'Vue.js', strength: 94 },
        { name: 'React', strength: 94 },
        { name: 'React Native', strength: 92 },
        { name: 'Java', strength: 84 }
      ]
    }
  }
}
</script>
