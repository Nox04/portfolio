<template>
  <div class="card">
    <div class="card-header heading-footer"></div>
    <div class="card-block">
      <img
        class="panel-profile-img rounded-circle"
        src="/images/tempo_icon.jpg"
        alt="Logo"
      />
      <p class="author-title"><strong>Proyecto: </strong> Tempo</p>
      <p class="author-title">
        <strong>Stack: </strong> PHP, Laravel, Vue.js, Postgresql.
      </p>
      <p class="author-title font-yellow">
        <a href="https://tempo.orioncol.com">
          Link Externo <i class="ion-android-open" />
        </a>
      </p>
    </div>
  </div>
</template>

<style type="text/css" scoped>
.heading-footer {
  background-image: url(/images/tempo.jpg);
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
