<template>
  <!-- Contact -->
  <div id="contact" class="form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>{{ $t('contact.title') }}</h2>
          <ul class="list-unstyled li-space-lg">
            <li class="address">
              {{ $t('contact.description') }}
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>Cajazeiras, Paraíba, PB -
              Brazil
            </li>
            <!-- <li><i class="fas fa-phone"></i><a class="blue" href="tel:5583998345513">+55 83 99834-5513</a></li> -->
            <li>
              <i class="fas fa-envelope"></i
              ><a class="blue" href="email:contact.pyrocode@gmail.com"
                >contact.pyrocode@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <!-- end of col -->
      </div>
      <!-- end of row -->
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <!-- Contact Form -->
          <form id="contactForm" data-toggle="validator" data-focus="false">
            <div class="form-group">
              <input
                id="cname"
                type="text"
                class="form-control-input"
                required
              />
              <label class="label-control" for="cname">
                {{ $t('contact.form_input_01') }}
              </label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input
                id="cemail"
                type="email"
                class="form-control-input"
                required
              />
              <label class="label-control" for="cemail">
                {{ $t('contact.form_input_02') }}
              </label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <textarea
                id="cmessage"
                class="form-control-textarea"
                required
              ></textarea>
              <label class="label-control" for="cmessage">
                {{ $t('contact.form_input_03') }}
              </label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <button type="submit" class="form-control-submit-button">
                {{ $t('contact.form_button') }}
              </button>
            </div>
            <div class="form-message">
              <div id="cmsgSubmit" class="h3 text-center hidden"></div>
            </div>
          </form>
          <!-- end of contact form -->
        </div>
        <!-- end of col -->
      </div>
      <!-- end of row -->
    </div>
    <!-- end of container -->
  </div>
  <!-- end of form -->
  <!-- end of contact -->
</template>
