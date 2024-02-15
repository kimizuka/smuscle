import path from 'path';
import fs from 'fs';

export default {
  mode: 'spa',

  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'https/server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'https/server.crt'))
    // },
    port: 3000,
    host: '0.0.0.0'
  },

  router: {
    mode: "hash"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '💪😄' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '顔認識を使って腹筋をカウントします ＾＾' || process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: '💪😄' },
      { hid: 'og:title', property: 'og:title', content: '💪😄' || process.env.npm_package_name || '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://smile.kimizuka.fm' },
      { hid: 'og:image', property: 'og:image', content: 'https://smile.kimizuka.fm/og.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:site_name', property: 'og:site_name', content: '💪😄' || process.env.npm_package_name || '' },
      { hid: 'og:description', property: 'og:description', content: '顔認識を使って腹筋をカウントします ＾＾' || process.env.npm_package_description || '' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@ki_230' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: '@ki_230' },
      { hid: 'twitter:title', property: 'twitter:title', content: '💪😄' || process.env.npm_package_name || '' },
      { hid: 'twitter:description', name: 'twitter:description', content: '顔認識を使って腹筋をカウントします ＾＾' || process.env.npm_package_description || '' },
      { hid: 'twitter:image:src', property: 'twitter:image:src', content: 'https://smile.kimizuka.fm/og.png' },
      { hid: 'format-detection', property: 'format-detection', content: 'telephone=no' },
      { hid: 'canonical', property: 'canonical', content: 'https://smile.kimizuka.fm' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFF' },
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
  plugins: [],
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
      config.node = {
        fs: 'empty'
      };
    }
  }
}
