import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/axios',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: 'me',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'auth/logout',
            method: 'get',
          },
          home: {
            url: '/',
            method: 'get'
          }
        },
        tokenType: 'bearer'
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/'
    },
    plugins: [
      './plugins/auth'
    ]
  },


  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],
  /*
   ** Axios Module COnfiguration
   */
  axios: {
    baseURL: 'http://php72.one/lv-jwt/api',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
}
