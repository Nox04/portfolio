<template>
  <section class="intro-section">
    <div class="container">
      <lang-switcher />
      <div class="intro">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div class="profile-img margin-b-30">
              <img
                :alt="$t('profilePicture')"
                src="/images/profile-1-250x250.jpg"
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col-12 col-md-6 text-center text-md-left">
            <h2>
              <b>Juan David Angarita</b>
            </h2>
            <h4 class="font-yellow">{{ $t('fullStack') }}</h4>
            <ul class="information margin-tb-30">
              <li>
                <b class="font-yellow">{{ $t('born') }}</b> :
                {{ $t('bornDate') }} ({{ yearsOld }})
              </li>
              <li>
                <b class="font-yellow">EMAIL</b> :
                <a href="mailto:juan.angarita.11@gmail.com">
                  juan.angarita.11@gmail.com
                </a>
              </li>
              <li><b class="font-yellow">NICKNAME</b> : Nox</li>
              <li><b class="font-yellow">OS</b> : Linux / OSX</li>
              <li><b class="font-yellow">LOCATION</b> : Colombia (GMT-5)</li>
            </ul>
            <social-icons />
          </div>
          <div class="col-12 col-lg-3">
            <a
              class="downlad-btn"
              href="/documents/CV-Juan-David-Angarita.pdf"
              download
            >
              <i class="ion-ios-cloud-download-outline s30"></i>
              {{ $t('download') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LangSwitcher from './LangSwitcher'
import SocialIcons from './SocialIcons'

export default {
  components: {
    LangSwitcher,
    SocialIcons
  },
  computed: {
    yearsOld() {
      return this.calculateYearsOld(new Date('1992-04-11'))
    }
  },
  methods: {
    calculateYearsOld(birthday) {
      if (birthday instanceof Date) {
        const ageDifMs = Date.now() - birthday
        const ageDate = new Date(ageDifMs)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
      }
    }
  }
}
</script>
