
export default {
  mode: 'spa',

  server: {
    host: '0.0.0.0'
  },

  router: {
    mode: "hash"
    // base: __dirname + '/electron/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'og:title', property: 'og:title', content: process.env.npm_package_name || '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.npm_package_name || '' },
      { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: '' },
      { hid: 'twitter:title', property: 'twitter:title', content: process.env.npm_package_name || '' },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:image:src', property: 'twitter:image:src', content: '' },
      { hid: 'format-detection', property: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/assets/css/reset.scss',
    '~/assets/css/common.scss'
  ],

  styleResources: {
   scss: [
      '~/assets/css/variable.scss',
      '~/assets/css/extend.scss',
      '~/assets/css/mixin.scss',
      '~/assets/css/keyframe.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],

  generate: {
    dir: 'docs'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
