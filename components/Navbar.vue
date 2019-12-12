<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      <!-- Text Logo - Use this if you don't have a graphic logo -->
      <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Leno</a> -->

      <!-- Image Logo -->
      <nuxt-link class="navbar-brand logo-image" to="/">
        <img src="images/logo.svg" alt="alternative" />
      </nuxt-link>

      <!-- Mobile Menu Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>
      <!-- end of mobile menu toggle button -->

      <div id="navbarsExampleDefault" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#header">
              {{ $t('nav.home') }}
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#our-team">
              {{ $t('nav.our_team') }}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link page-scroll" href="#contact">
              {{ $t('nav.contact_us') }}
            </a>
          </li>
        </ul>
        <span class="nav-item social-icons">
          <!-- <span class="fa-stack">
            <a href="https://instagram.com/pyrocodesoftware">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-instagram fa-stack-1x"></i>
            </a>
          </span>
          <span class="fa-stack">
            <a href="https://twitter.com/pyrocodesoft">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-twitter fa-stack-1x"></i>
            </a>
          </span> -->

          <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
            🇺🇸
          </nuxt-link>

          <nuxt-link v-if="$i18n.locale !== 'pt'" :to="switchLocalePath('pt')">
            🇧🇷
          </nuxt-link>
        </span>
      </div>
    </nav>
    <!-- end of navbar -->
    <!-- end of navigation -->
  </div>
</template>
