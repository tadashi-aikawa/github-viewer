importScripts('/github-viewer/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/github-viewer/_nuxt/2777855b26b0bd098551.js",
    "revision": "90d9827861b443c559b2e8b25441d996"
  },
  {
    "url": "/github-viewer/_nuxt/2833c46cdb599ebf9301.js",
    "revision": "4d78539a0fbf4b7409b635ff6f506da2"
  },
  {
    "url": "/github-viewer/_nuxt/349e36f690e163f0c0dd.js",
    "revision": "d0d5a42e456f88c1e54fe8e2e22871ea"
  },
  {
    "url": "/github-viewer/_nuxt/5463e37e6dacbf7347d8.js",
    "revision": "a06fd08f1d7799bea3c15b8fad5c771e"
  },
  {
    "url": "/github-viewer/_nuxt/9da4606eb99e57f75794.js",
    "revision": "a8c669cf3036dca954220126e74f4e98"
  }
], {
  "cacheId": "github-viewer",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/github-viewer/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/github-viewer/.*'), workbox.strategies.networkFirst({}), 'GET')
