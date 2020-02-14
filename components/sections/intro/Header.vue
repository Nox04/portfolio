<template>
  <div class="heading-wrapper">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="info">
          <a href="https://goo.gl/maps/LPWAZivrhPPJtuHL8">
            <i class="icon ion-ios-location-outline"></i>
            <div class="right-area">
              <h5>{{ $t('address') }}</h5>
              <h5>BOGOTÁ, CO</h5>
            </div>
          </a>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="info">
          <a href="tel:+573168819879">
            <i class="icon ion-ios-telephone-outline"></i>
            <div class="right-area">
              <h5>+57 316 881 98 79</h5>
              <h6>{{ $t('callDays') }}</h6>
            </div>
          </a>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="info">
          <a href="mailto:juan.angarita.11@gmail.com">
            <i class="icon ion-ios-chatboxes-outline"></i>
            <div class="right-area">
              <h5>juan.angarita.11@gmail.com</h5>
              <h6>{{ $t('replyTime') }}</h6>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
