<template>
  <div>
    <!-- <Preloader /> -->
    <Header />
    <Team />
    <Contact />
    <Footer />
    <script src="js/jquery.min.js"></script>
    <!-- jQuery for Bootstrap's JavaScript plugins -->
    <script src="js/popper.min.js"></script>
    <!-- Popper tooltip library for Bootstrap -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Bootstrap framework -->
    <script src="js/jquery.easing.min.js"></script>
    <!-- jQuery Easing for smooth scrolling between anchors -->
    <script src="js/swiper.min.js"></script>
    <!-- Swiper for image and text sliders -->
    <script src="js/jquery.magnific-popup.js"></script>
    <!-- Magnific Popup for lightboxes -->
    <script src="js/morphext.min.js"></script>
    <!-- Morphtext rotating text in the header -->
    <script src="js/validator.min.js"></script>
    <!-- Validator.js - Bootstrap plugin that validates forms -->
    <script src="js/scripts.js"></script>
    <!-- Custom scripts -->
  </div>
</template>

<script>
// import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    // Preloader,
    Header,
    Team,
    Contact,
    Footer
  }
}
</script>
