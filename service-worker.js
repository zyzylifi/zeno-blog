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
    "revision": "7199e5e65f782ce4f1e4796d0c25736e"
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
    "url": "assets/js/1.8ae41a42.js",
    "revision": "1e555823003a1b0e72a8e35200408d8d"
  },
  {
    "url": "assets/js/10.12c47a00.js",
    "revision": "6e8b2fe3b7491689c1cb3cb3183630d4"
  },
  {
    "url": "assets/js/11.7e2d6da5.js",
    "revision": "6c58b671fc1772a1c28361195240f98e"
  },
  {
    "url": "assets/js/12.af9960bd.js",
    "revision": "fabae1b1c94a5ca09f4678fb8c3dd557"
  },
  {
    "url": "assets/js/13.a9f1a483.js",
    "revision": "e953bd9f898596984bebb760d4782dba"
  },
  {
    "url": "assets/js/14.4d062e5c.js",
    "revision": "1ab6f018d92bc032bd8c8c30c007403b"
  },
  {
    "url": "assets/js/15.591249b4.js",
    "revision": "371f87e192287ca134d542987343b3ac"
  },
  {
    "url": "assets/js/16.eae4457e.js",
    "revision": "0368eff0b3054789f676a7e755a8ff62"
  },
  {
    "url": "assets/js/17.41d1c381.js",
    "revision": "02d876123e5ab89089a5f30ac6135797"
  },
  {
    "url": "assets/js/18.a8d379ba.js",
    "revision": "8b7a9e79691f7a5ee704aca7ede75759"
  },
  {
    "url": "assets/js/19.61375484.js",
    "revision": "46c833c8522a18f65f7e55b4d2ab3506"
  },
  {
    "url": "assets/js/20.2ce3d27b.js",
    "revision": "54df0b23ccf952c901586e926cfcb8d8"
  },
  {
    "url": "assets/js/21.17009217.js",
    "revision": "3118c3704a114aad274997f67ea38b65"
  },
  {
    "url": "assets/js/22.9734a503.js",
    "revision": "a0b32f55a5c4b252991b1edf543e682c"
  },
  {
    "url": "assets/js/23.36742562.js",
    "revision": "e276d158724caae4c54bda7c460553a3"
  },
  {
    "url": "assets/js/24.b224a767.js",
    "revision": "36655c46e1e669627cfe146f7fe01bbf"
  },
  {
    "url": "assets/js/25.87d828f6.js",
    "revision": "1c89ff68d8e626e7b8fe55b41ffadcb2"
  },
  {
    "url": "assets/js/26.5326878a.js",
    "revision": "c5b0b0ac337bc8afe338040b7d3bfef4"
  },
  {
    "url": "assets/js/27.7794d2f3.js",
    "revision": "1ef89e314e8b30676d96b96a926b2470"
  },
  {
    "url": "assets/js/28.2ccad5c8.js",
    "revision": "0ce351071306d55908eac4cd494a5930"
  },
  {
    "url": "assets/js/29.f642ca83.js",
    "revision": "29244e1a104067d4c8bd0839682bae67"
  },
  {
    "url": "assets/js/3.3b039ebf.js",
    "revision": "826e95505ccb0c3137f70a28cffea094"
  },
  {
    "url": "assets/js/30.5254cecc.js",
    "revision": "757f937eb7ee1280738a7eb0fa8d129e"
  },
  {
    "url": "assets/js/31.969a20b8.js",
    "revision": "b65577edd66c317dbf0c8bd183285b88"
  },
  {
    "url": "assets/js/32.9ea86ef3.js",
    "revision": "2191a4251fd6b82cd77b41e76619eecf"
  },
  {
    "url": "assets/js/33.d0077ad4.js",
    "revision": "975b6933c3300a086e5576bae2f05cb9"
  },
  {
    "url": "assets/js/34.d3fbe484.js",
    "revision": "e61f0b50fc02727bbaa40af4e85767ab"
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
    "url": "assets/js/9.54de9460.js",
    "revision": "feef71cc7423f66d77a53fccc4c3990f"
  },
  {
    "url": "assets/js/app.4f8ba206.js",
    "revision": "66b25c80b41c3f9879cc6b21fa3f5375"
  },
  {
    "url": "categories/index.html",
    "revision": "42a1f4d6ce51f30ff480dc5f14517fe6"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "dd9d2c1322291f537eefe2ad7618e2de"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "c56eb9002f89e0ecba3148dc9ca6a6d9"
  },
  {
    "url": "categories/React/index.html",
    "revision": "cfd63987005d8d8c0f3224c7d13c43f2"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "74bbd9ef4964169c5c73f4737f3b9e90"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "98d68c16c8bcb50b3b460e593eae96ec"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "6fd761b81cf34ae8ccaaf72ff36431d6"
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
    "revision": "cb1a8cbc97f1b9311a9ed9d6d36524a3"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "tag/index.html",
    "revision": "8729a808da263b9f11fa474908cd508c"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "600107db38fa38154a2efb1f95f66979"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "da01af02be1f058061aa49f9a94d249e"
  },
  {
    "url": "tag/React/index.html",
    "revision": "f1b61088a7be6d05b304e85b5285a4dd"
  },
  {
    "url": "tag/Tools/index.html",
    "revision": "c426d170d621222cfcb86c9015fc0c7a"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "b41836302ff3cc4c475e9037f5d69056"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "aa73f6bd57cc47ca26091c34910fad64"
  },
  {
    "url": "timeline/index.html",
    "revision": "03bf25e7c0d5ac0917bb479ada18fb7c"
  },
  {
    "url": "views/javascript/javascript.html",
    "revision": "28bd1038e163e7c3c5bacb34c3ea0410"
  },
  {
    "url": "views/nginx/nginx.html",
    "revision": "94bb766c25b5452ccbc98782e5ef2dff"
  },
  {
    "url": "views/qi-ta/echartszi-ding-yi-tu-biao-yan-se-zi-ding-yi-jian-bian-se.html",
    "revision": "5a4bdf1f6b5328d821c9ad9339f931f3"
  },
  {
    "url": "views/qi-ta/freesslzheng-shu-shen-qing-ji-nginxpei-zhi.html",
    "revision": "818bfd44384242700d5b8aef9d0fd1ad"
  },
  {
    "url": "views/qi-ta/jenkins-zi-dong-hua-bu-shu.html",
    "revision": "6a1e1e5dfc1a7d03632ed6f7087ba575"
  },
  {
    "url": "views/qi-ta/jie-jue-echartszi-gua-ying-wen-ti.html",
    "revision": "d06406b9c6bc7ec4dbd200222e547a8a"
  },
  {
    "url": "views/qi-ta/mathjax-rang-qian-duan-zhi-chi-shu-xue-gong-shi.html",
    "revision": "b52bfef6163a5e0973dc93a90fe7101a"
  },
  {
    "url": "views/qi-ta/pan-duan-ieliu-lan-qi-he-qi-ta-liu-lan-qi.html",
    "revision": "20978aee27e80795410a827e180fffd5"
  },
  {
    "url": "views/qi-ta/vuezhan-shi-3dmo-xing.html",
    "revision": "8460ec3b7f98170175867399710a8a7c"
  },
  {
    "url": "views/qi-ta/webstormshe-zhi-eslintge-shi-hua.html",
    "revision": "9f261167705f65d999a191e367796e0b"
  },
  {
    "url": "views/react/react-jiao-shou-jia-pei-zhi-dai-li.html",
    "revision": "a03a9716792a244fbc999a403778ea02"
  },
  {
    "url": "views/react/react-jiao-shou-jia.html",
    "revision": "1a548c0bb93d7b4677bb2cacff3a738f"
  },
  {
    "url": "views/react/react-kuo-zhan-zhi-shi.html",
    "revision": "e9d0c4c8d3402e0a6a27ac145cb05ad4"
  },
  {
    "url": "views/react/react-lu-you.html",
    "revision": "c08df7be499fff9e7cf6eb58bd5ad8d6"
  },
  {
    "url": "views/react/react-redux.html",
    "revision": "2849152bd64de330b5e8f0a0dc54eb5d"
  },
  {
    "url": "views/react/react-ru-men-ji-chu.html",
    "revision": "d86e08e7ce2980f8f68308e2b4da264d"
  },
  {
    "url": "views/react/react-sheng-ming-zhou-qi.html",
    "revision": "3b0a3b74b9bbf17d3e04be40ed9c92ef"
  },
  {
    "url": "views/react/react-xiao-xi-ding-yue-yu-fa-bu-ji-zhi-pubsubjs.html",
    "revision": "bccf11fcda34fc03469aa2e8970a997e"
  },
  {
    "url": "views/react/reduxjstoolkit.html",
    "revision": "67d95931fb424708cecfa2c5cea2e270"
  },
  {
    "url": "views/tools/nvman-zhuang-yu-shi-yong.html",
    "revision": "7556c0a37b373ca5c5bb212d094ffd16"
  },
  {
    "url": "views/tools/typorashi-yong.html",
    "revision": "f3c2755eceb6f65aa14a2849bf361a0c"
  },
  {
    "url": "views/tools/vscode-chang-yong-cha-jian.html",
    "revision": "f618dc2585a05ac982fd869d84cb4a2f"
  },
  {
    "url": "views/typescript/typescript.html",
    "revision": "6675c923abdb526ed3edfa6adb90d76b"
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
