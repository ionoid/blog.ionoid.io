/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/06/15/first-post/index.html",
    "revision": "dc5eef3328dfba3c3c03ac9f71b9a8d8"
  },
  {
    "url": "2020/06/16/second-post/index.html",
    "revision": "303d997a782a747b6ef237f52e17d44a"
  },
  {
    "url": "2020/06/26/third-post/index.html",
    "revision": "c2723f58ee71165e225bae025ff7ab84"
  },
  {
    "url": "404.html",
    "revision": "64a92d85fbbeacf4fa457e16050a0f85"
  },
  {
    "url": "assets/css/0.styles.33503f42.css",
    "revision": "5c14aac83dbf5701a8ddda57667180c1"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df392906.js",
    "revision": "11a675796d0b3b7a6dcbcbc7afef7121"
  },
  {
    "url": "assets/js/11.4459d478.js",
    "revision": "9828078c8ab85b0e3c009dbbcf6306cd"
  },
  {
    "url": "assets/js/12.172ea14f.js",
    "revision": "b91e8d8f824e4378ff2cfd0b12fa03a1"
  },
  {
    "url": "assets/js/13.4148e7d4.js",
    "revision": "85a744311411d4dd1ce326f96f7552de"
  },
  {
    "url": "assets/js/14.0fd95f07.js",
    "revision": "fdaa6a040027bef1dfaa6b0e6f1dea1e"
  },
  {
    "url": "assets/js/15.76ec5c73.js",
    "revision": "57b2ebb90641520976a6a0ae9f5386a1"
  },
  {
    "url": "assets/js/16.5a8e467d.js",
    "revision": "94f378f6e623ee78e49cbd31a7af274c"
  },
  {
    "url": "assets/js/3.f89127d0.js",
    "revision": "ed8e5990839e583461fb68d2eefb9aec"
  },
  {
    "url": "assets/js/4.97695048.js",
    "revision": "c3a7021f87405d7c5a447f546149a6b4"
  },
  {
    "url": "assets/js/5.9f5c14d0.js",
    "revision": "85d4ce588582eab730bb2e6e5ccae5e0"
  },
  {
    "url": "assets/js/6.54b2f5e0.js",
    "revision": "892a3c3b866dba61e918e38c826f8a43"
  },
  {
    "url": "assets/js/7.2ad9f039.js",
    "revision": "2e9a277edbd71a3f65104e13fdf5c1d8"
  },
  {
    "url": "assets/js/8.4343536f.js",
    "revision": "b0bf5523e06351f67aca3ae5bfe5589a"
  },
  {
    "url": "assets/js/9.4fe8639d.js",
    "revision": "a5701651c5a65bedb2ffc1607183dabd"
  },
  {
    "url": "assets/js/app.8ae2d1e7.js",
    "revision": "908818c863829cf3f90b259acde7913b"
  },
  {
    "url": "assets/js/vuejs-paginate.0e1f68e4.js",
    "revision": "d571ad1340239599ea6a5fb5b2ef4078"
  },
  {
    "url": "brand.png",
    "revision": "17127744e0e1e152340e0a5f97a62eda"
  },
  {
    "url": "index.html",
    "revision": "0cfdf967fc4b017099c5c4e32d7fe044"
  },
  {
    "url": "logo.png",
    "revision": "f3a56cce4abe18fa4d89892ed0c9d3d0"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "27a0fdab5c386d20c5abeb6fa5cbfa9e"
  },
  {
    "url": "tag/index.html",
    "revision": "2caeaa94dca4b0a37ce8ada5299f7cfc"
  },
  {
    "url": "tag/IoT/index.html",
    "revision": "acc37684ec8a8461a3b266658f534c7c"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "0060da4cbf6886ecd54cc298fc501a89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
