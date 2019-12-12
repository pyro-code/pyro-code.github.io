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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
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

  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['pt', 'en'],
        defaultLocale: 'pt',
        vueI18n: {
          fallbackLocale: 'pt',
          messages: {
            pt: {
              nav: {
                home: "INÍCIO",
                our_team: "NOSSA EQUIPE",
                contact_us: "CONTATO"
              },
              header: {
                our_service: "Nossos serviços são",
                service_01: "Desenvolvimento Web",
                service_02: "Consultoria",
                service_03: "Designer de produto",
                more: "e muito mais!",
                description: "Codificamos produtos digitais com tecnologias criativas e focamos na qualidade de back-end até o front-end!",
                contact_button: "ENTRE EM CONTATO AGORA!"
              },
              team: {
                title: "Equipe"
              },
              contact: {
                title: "Contato",
                description: "Não hesite em nos enviar um e-mail ou use o formulário de contato abaixo",
                form_input_01: "Nome",
                form_input_02: "Email",
                form_input_03: "Sua mensagem",
                form_button: "ENVIAR MENSAGEM"
              },
              footer: {
                title: "Sobre a PyroCode",
                about: "PyroCode é uma inovação digital, criamos projetos para empresas que visam criar produtos de próximo nível.",
                social_media: "Redes Sociais"
              }
            },
            en: {
              nav: {
                home: "HOME",
                our_team: "OUR TEAM",
                contact_us: "CONTACT US"
              },
              header: {
                our_service: "Our services are",
                service_01: "Web Development",
                service_02: "Tech Consulting",
                service_03: "Product Designer",
                more: "and more!",
                description: "We coding digital products with creative technologies and focus in quality from backend to frontend!",
                contact_button: "CONTACT US NOW!"
              },
              team: {
                title: "Team"
              },
              contact: {
                title: "Contact",
                description: "Don't hesitate to send us a email or just use the contact form below",
                form_input_01: "Name",
                form_input_02: "Email",
                form_input_03: "You message",
                form_button: "SUBMIT MESSAGE"
              },
              footer: {
                title: "About PyroCode",
                about: "PyroCode is a digital innovation, we build projects for for companies that aim to build next level products.",
                social_media: "Social Media"
              }
            }

          }
        }
      }
    ]
  ],
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
