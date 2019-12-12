<template>
  <div>
    <Navbar />
    <!-- Header -->
    <header id="header" class="header">
      <div class="header-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-container">
                <h2>
                  {{ $t('header.our_service') }}
                  <br />
                  <span id="js-rotating">
                    {{ $t('header.service_01') }},
                    {{ $t('header.service_02') }},
                    {{ $t('header.service_03') }},
                    {{ $t('header.more') }}
                  </span>
                </h2>
                <p class="p-large">{{ $t('header.description') }}</p>
                <a class="btn-solid-lg page-scroll" href="#contact">
                  {{ $t('header.contact_button') }}
                </a>
              </div>
            </div>
            <!-- end of col -->
            <div class="col-lg-6">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="/images/header-bg.png"
                  alt="alternative"
                />
              </div>
              <!-- end of image-container -->
            </div>
            <!-- end of col -->
          </div>
          <!-- end of row -->
        </div>
        <!-- end of container -->
      </div>
      <!-- end of header-content -->
    </header>
    <!-- end of header -->
    <!-- end of header -->
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
