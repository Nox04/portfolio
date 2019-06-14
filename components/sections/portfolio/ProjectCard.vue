<template>
  <div class="col-sm-12 col-md-12 col-lg-6">
    <div class="card">
      <div class="card-header heading-footer" :style="background"></div>
      <div class="card-block">
        <img
          class="panel-profile-img rounded-circle"
          :src="project.icon"
          alt="Logo"
        />
        <p class="author-title">
          <strong>Proyecto: </strong> {{ project.title }}
        </p>
        <p class="author-title"><strong>Stack:</strong> {{ project.stack }}</p>
        <p class="author-title">
          <strong>Descripción:</strong>
          {{ project.description }}
        </p>
        <p class="author-title font-yellow">
          <a :href="project.link" target="_blank" rel="noopener">
            Link Externo <i class="ion-android-open"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Project from '~/models/Project'

@Component
export default class ProjectCard extends Vue {
  @Prop({ type: Object, required: true }) project!: Project
  get background() {
    return `background-image: url(${this.project.background});`
  }
}
</script>

<style type="text/css" scoped>
.heading-footer {
  background-size: cover;
  height: 175px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 0px;
}
.panel-profile-img {
  max-width: 150px;
  margin-top: -100px;
  margin-bottom: 5px;
  border: 3px solid #fff;
  border-radius: 50%;
}
.card {
  border: 1px solid #dadada;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
</style>
