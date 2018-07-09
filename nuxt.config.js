const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  mode: 'spa',
  router: {
    base: '/github-viewer/',
  },
  plugins: [
    { src: '~/plugins/nuxt-client-init.ts', ssr: false },
    { src: '~plugins/element-ui' },
    { src: '~plugins/font-awesome' },
  ],
  env: {
    baseUrl:
    process.env.BASE_URL ||
    `http://${host}:${port}`
  },
  head: {
    title: "GitHub Viewer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/github-viewer/favicon.ico",
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [
    "~/assets/css/main.css",
    "element-ui/lib/theme-chalk/index.css",
  ],
  build: {
    vendor: ['element-ui'],
    extend (config, { isDev, isClient }) {
      // TODO: Add tslint
      // if (isDev && isClient) {
      //   // Run ESLint on save
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      // Extend only webpack config for client-bundle
      if (isClient) { config.target = 'electron-renderer' }
    }
  },
  dev: process.env.NODE_ENV === 'DEV',
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {},
}
