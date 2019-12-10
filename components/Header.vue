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
                  Our services are <br /><span id="js-rotating"
                    >Web Development, Tech Consulting, Product Designer, and
                    more!</span
                  >
                </h2>
                <p class="p-large">
                  We coding digital products with creative technologies and
                  focus in quality from backend to frontend!
                </p>
                <a class="btn-solid-lg page-scroll" href="#contact"
                  >CONTACT US NOW!</a
                >
              </div>
            </div>
            <!-- end of col -->
            <div class="col-lg-6">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="https://307693.smushcdn.com/1164224/wp-content/uploads/2019/06/Landing1f.png?lossy=0&strip=1&webp=1"
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
