<template>
  <section class="intro-section">
    <div class="container">
      <lang-switcher />
      <intro-header />
      <div class="intro">
        <div class="row">
          <div class="col-sm-8 col-md-4 col-lg-3">
            <div class="profile-img margin-b-30">
              <img
                src="/images/profile-1-250x250.jpg"
                :alt="$t('profilePicture')"
              />
            </div>
          </div>

          <div class="col-sm-10 col-md-5 col-lg-6">
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
            </ul>
            <social-icons />
          </div>
          <div class="col-sm-10 col-md-3 col-lg-3">
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
import Header from './Header'
import LangSwitcher from './LangSwitcher'
import SocialIcons from './SocialIcons'

export default {
  components: {
    'intro-header': Header,
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
