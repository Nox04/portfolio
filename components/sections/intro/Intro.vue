<template>
  <section class="intro-section">
    <div class="container">
      <intro-header />
      <div class="intro">
        <div class="row">
          <div class="col-sm-8 col-md-4 col-lg-3">
            <div class="profile-img margin-b-30">
              <img src="/images/profile-1-250x250.jpg" />
            </div>
          </div>

          <div class="col-sm-10 col-md-5 col-lg-6">
            <h2>
              <b>Juan David Angarita</b>
            </h2>
            <h4 class="font-yellow">Full Stack Developer</h4>
            <ul class="information margin-tb-30">
              <li><b class="font-yellow">NACIMIENTO</b> : Abril 11, 1992</li>
              <li>
                <b class="font-yellow">EMAIL</b> : juan.angarita.11@gmail.com
              </li>
              <li><b class="font-yellow">NACIONALIDAD</b> : Colombiano</li>
              <li><b class="font-yellow">NICKNAME</b> : Nox</li>
            </ul>
            <ul class="social-icons">
              <li>
                <a href="#">
                  <i class="ion-social-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-10 col-md-3 col-lg-3">
            <a class="downlad-btn" href="#">Descargar CV</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Header from './Header'

export default {
  components: {
    'intro-header': Header
  }
}
</script>
