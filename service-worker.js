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
    "url": "404.html",
    "revision": "d6ca789919aa9b69bcee5e60cbb8bbd1"
  },
  {
    "url": "assets/css/0.styles.2a2e5ad3.css",
    "revision": "00c1111a3ff0fca6795626f9d3409c96"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.c787cdb1.js",
    "revision": "15d9215442f0e309674ad7924aaa7a43"
  },
  {
    "url": "assets/js/10.049b1d28.js",
    "revision": "6f0d6db52792ac8f53c7ad387e55773c"
  },
  {
    "url": "assets/js/11.5a7a5198.js",
    "revision": "b6742f5aaec08781442f9d47cc4d4a64"
  },
  {
    "url": "assets/js/12.3b67f25b.js",
    "revision": "6e346d3f331af01bbbcaa010c8cfcdb7"
  },
  {
    "url": "assets/js/13.24de71a7.js",
    "revision": "f8d5ce3e87724b84d970a28e65bfa4fd"
  },
  {
    "url": "assets/js/14.0ab886a4.js",
    "revision": "ed6badc42585c05d10a5e39a898b8b08"
  },
  {
    "url": "assets/js/15.9ec0a3bc.js",
    "revision": "f52e41e4297e41eb49ad037f06442830"
  },
  {
    "url": "assets/js/16.9421938f.js",
    "revision": "411ff0085d1cb8aa0915fc830e5a7882"
  },
  {
    "url": "assets/js/17.bf4fd1c2.js",
    "revision": "90b76a0fb8be4e6fc9f034d42bbf4377"
  },
  {
    "url": "assets/js/18.53430de2.js",
    "revision": "b0f220fa93d25c7a77637db6e1febced"
  },
  {
    "url": "assets/js/19.b71f7f1f.js",
    "revision": "0feecc40c2b0606c10df36c786343535"
  },
  {
    "url": "assets/js/3.3b039ebf.js",
    "revision": "826e95505ccb0c3137f70a28cffea094"
  },
  {
    "url": "assets/js/4.fb2513d9.js",
    "revision": "0f9c140d48e63fe14f906b2ab1c135fe"
  },
  {
    "url": "assets/js/5.76a1324f.js",
    "revision": "982d8c90bab8b7dd2dd92095579167ef"
  },
  {
    "url": "assets/js/6.a28c1884.js",
    "revision": "d6e8d6d3d8a78222d03d2dffadfc6a45"
  },
  {
    "url": "assets/js/7.aa3ab8d4.js",
    "revision": "c2a922b35d3759fde33ef343c65264bb"
  },
  {
    "url": "assets/js/8.e45da13b.js",
    "revision": "002889eb72e73e0c5838784aaa944d9b"
  },
  {
    "url": "assets/js/9.7567899e.js",
    "revision": "d2861c1a389ffd5dc6efbcb81ddd79cc"
  },
  {
    "url": "assets/js/app.4546debf.js",
    "revision": "8f8d3ec8a24548f0236fbb0dc5a3d043"
  },
  {
    "url": "categories/index.html",
    "revision": "5b26976aaa1dacd1827c5ea03450b4b0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "819923a171980f30a97772c1bef46dab"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "515bdeb3abfb37feb93919d3375a4d01"
  },
  {
    "url": "icons/pwa_icon_192.png",
    "revision": "ee7ed175fde3c1b19d5d5e47331fc253"
  },
  {
    "url": "images/head.jpg",
    "revision": "2796290545556bcca85072265041fe87"
  },
  {
    "url": "images/post-bg-universe.png",
    "revision": "d8f3690102a6323bd2bb8dddbb340425"
  },
  {
    "url": "images/post-bg-universe1.png",
    "revision": "98331581c51c9cca2560223c805daccd"
  },
  {
    "url": "index.html",
    "revision": "b7080191420925bef27ef5e607068677"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "tag/index.html",
    "revision": "4310b9857cb94fd052a4011fc5a08cae"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8355134a76f3c42ab44d54a2354198d8"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "89ca4892063614e843d82e5bb27488ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "22cd0d1b51f31cf4a6ad6d80a129b4eb"
  },
  {
    "url": "views/js_doc/javascript.html",
    "revision": "219e941ed29d1dfad8699ed394431790"
  },
  {
    "url": "views/qi-ta/echartszi-ding-yi-tu-biao-yan-se-zi-ding-yi-jian-bian-se.html",
    "revision": "87c78f60bd21c15999342cf20c617619"
  },
  {
    "url": "views/qi-ta/freesslzheng-shu-shen-qing-ji-nginxpei-zhi.html",
    "revision": "6d05ab0384c43f6ad46026b8c54b420b"
  },
  {
    "url": "views/qi-ta/jie-jue-echartszi-gua-ying-wen-ti.html",
    "revision": "e0dfd22791a395809d43faf9cfb7a267"
  },
  {
    "url": "views/qi-ta/mathjax-rang-qian-duan-zhi-chi-shu-xue-gong-shi.html",
    "revision": "0f0d890a35836ebc7fb331289b806df6"
  },
  {
    "url": "views/qi-ta/pan-duan-ieliu-lan-qi-he-qi-ta-liu-lan-qi.html",
    "revision": "5bae45f3ffd4ca06070187d8aaed41f6"
  },
  {
    "url": "views/qi-ta/vuezhan-shi-3dmo-xing.html",
    "revision": "5fd0a94447d779e61900520160ef9e12"
  },
  {
    "url": "views/qi-ta/webstormshe-zhi-eslintge-shi-hua.html",
    "revision": "20537182f3b1c4db4ca3db12d3282ae3"
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
