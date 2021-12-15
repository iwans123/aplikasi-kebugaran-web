export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kebugaran-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'vendor/jquery/jquery.min.js' },
      { src: 'vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: 'vendor/jquery-easing/jquery.easing.min.js' },
      { src: 'js/sb-admin-2.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/style.css',
    '~/assets/vendor/fontawesome-free/css/all.min.css',
    '~/assets/css/sb-admin-2.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    '~/api/index.js'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/user/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url: '/api/user/view',
            method: 'get',
            propertyName: 'user'
          },
          register: {
            url: '/api/user/register',
            method: 'post',
            propertyName: 'newUser'
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/Login',
      logout: '/',
      home: '/'
    },
    rewriteRedirects: true
  }
}
