export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i' }
    ],
    script: [
      { src: "~/assets/js/jquery.min.js" }, // jQuery for Bootstrap's JavaScript plugins
      { src: "~/assets/js/bootstrap.min.js" }, // Bootstrap framework
      { src: "~/assets/js/jquery.easing.min.js" }, // jQuery Easing for smooth scrolling between anchors
      { src: "~/assets/js/morphext.min.js" }, // Morphtext rotating text in the header
      { src: "~/assets/js/swiper.min.js" }, // Swiper for image and text sliders
      { src: "~/assets/js/validator.min.js" }, // Validator.js - Bootstrap plugin that validates forms
      { src: "~/assets/js/scripts.js" } // Custom scripts
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/fontawesome-all.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/styles.css',
    '~/assets/css/swiper.css'
  ],
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    base: '/'
  }
}
