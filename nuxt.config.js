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
        href: "/favicon.ico"
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
    publicPath: 'https://tadashi-aikawa.github.io/github-viewer/'
  },
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {},
}
