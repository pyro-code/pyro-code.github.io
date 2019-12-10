export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    bodyAttrs: {
      class:
        'home-page home page page-id-4 page-template page-template-template-homepage page-template-template-homepage-php'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i'
      },
      { rel: 'stylesheet', href: './css/bootstrap.css' },
      { rel: 'stylesheet', href: './css/fontawesome-all.css' },
      { rel: 'stylesheet', href: './css/magnific-popup.css' },
      { rel: 'stylesheet', href: './css/styles.css' },
      { rel: 'stylesheet', href: './css/swiper.css' }
    ],
    script: [
      { src: "./js/jquery.min.js" }, // jQuery for Bootstrap's JavaScript plugins
      { src: "./js/bootstrap.min.js" }, // Bootstrap framework
      { src: "./js/jquery.easing.min.js" }, // jQuery Easing for smooth scrolling between anchors
      { src: "./js/morphext.min.js" }, // Morphtext rotating text in the header
      { src: "./js/swiper.min.js" }, // Swiper for image and text sliders
      { src: "./js/validator.min.js" }, // Validator.js - Bootstrap plugin that validates forms
      { src: "./js/scripts.js" } // Custom scripts
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    // vendor: [
    //     { src: "./js/jquery.min.js" }, // jQuery for Bootstrap's JavaScript plugins
    //     { src: "./js/bootstrap.min.js" }, // Bootstrap framework
    //     { src: "./js/jquery.easing.min.js" }, // jQuery Easing for smooth scrolling between anchors
    //     { src: "./js/morphext.min.js" }, // Morphtext rotating text in the header
    //     { src: "./js/swiper.min.js" }, // Swiper for image and text sliders
    //     { src: "./js/validator.min.js" }, // Validator.js - Bootstrap plugin that validates forms
    //     { src: "./js/scripts.js" } // Custom scripts
    //   ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    base: '/'
  }
}
