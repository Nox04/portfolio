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
          <div class="row">
            <project-card
              v-for="(project, index) in projects"
              :key="index"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Project from '~/models/Project'

@Component({
  components: {
    ProjectCard: () => import('~/components/sections/portfolio/ProjectCard.vue')
  }
})
export default class Portfolio extends Vue {
  projects: Project[] = [
    {
      title: 'Tempo',
      stack: 'PHP, Laravel, Vue.js, Postgresql.',
      link: 'https://demo.tempo.orioncol.com/login',
      icon: '/images/tempo_icon.jpg',
      background: '/images/tempo.jpg',
      auth: { required: true, user: 'admin@orioncol.com', password: 'secret' }
    }
  ]
}
</script>
