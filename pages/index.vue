<template>
  <div class="container">
    <!-- <Preloader /> -->
    <Header />
    <Team />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// import Preloader from '~/components/Preloader'
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

<style></style>
