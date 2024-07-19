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
    "revision": "2ef2cfa33a29f2d6bbedea400d94feb5"
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
    "url": "assets/js/10.d23ac256.js",
    "revision": "2dffab69a03d25e29231d37b7c9ed41e"
  },
  {
    "url": "assets/js/11.5a7a5198.js",
    "revision": "b6742f5aaec08781442f9d47cc4d4a64"
  },
  {
    "url": "assets/js/12.97804d64.js",
    "revision": "6e346d3f331af01bbbcaa010c8cfcdb7"
  },
  {
    "url": "assets/js/13.4dc120e1.js",
    "revision": "e4789e9448848690456a6fc748f9ebb1"
  },
  {
    "url": "assets/js/14.c1a00834.js",
    "revision": "b1d8cc1a9ee8c6d062bfc4ebe8896a93"
  },
  {
    "url": "assets/js/15.4a2b3824.js",
    "revision": "efa35f9c205216e663fb7f67016a333e"
  },
  {
    "url": "assets/js/16.e24f2f2f.js",
    "revision": "b72af6348afd18d492dce25a724235a1"
  },
  {
    "url": "assets/js/17.9664ebb4.js",
    "revision": "ee2da90d500bab4c836bde9200bc2d50"
  },
  {
    "url": "assets/js/18.83e5c9e0.js",
    "revision": "d57a0dca1f4e68589b335c9400ba514e"
  },
  {
    "url": "assets/js/19.9b5b61cf.js",
    "revision": "484ba1777e4778fcec9ee6e72f96d008"
  },
  {
    "url": "assets/js/20.ab477e1d.js",
    "revision": "c11d76e5484bd08144b1559516fb36ff"
  },
  {
    "url": "assets/js/21.e8a35783.js",
    "revision": "7b65b4c917a3703c7cfe503024d40699"
  },
  {
    "url": "assets/js/22.fee4f00c.js",
    "revision": "f64ca599836d521012c9f4ecff472146"
  },
  {
    "url": "assets/js/23.af321c9f.js",
    "revision": "422c2f4df8942fb67a36230b74ff3557"
  },
  {
    "url": "assets/js/24.f172a350.js",
    "revision": "18a5968e0fe37abaa489e0d8bea678a8"
  },
  {
    "url": "assets/js/25.a8a68f50.js",
    "revision": "e8a4f41184c9bb9dbbba35ce97306a25"
  },
  {
    "url": "assets/js/26.fe9fff6b.js",
    "revision": "59b2bc8d58d519570405286152585eb4"
  },
  {
    "url": "assets/js/27.99317524.js",
    "revision": "66729e2eda8039444b0edf6a29797ec3"
  },
  {
    "url": "assets/js/28.3912919e.js",
    "revision": "9401ebe8f00a24d72b88a54662473654"
  },
  {
    "url": "assets/js/29.63e0fad7.js",
    "revision": "308dda6e343aa51caea627da670beee5"
  },
  {
    "url": "assets/js/3.3b039ebf.js",
    "revision": "826e95505ccb0c3137f70a28cffea094"
  },
  {
    "url": "assets/js/30.ab692565.js",
    "revision": "4b186180267b7f4d449e958713ec8a0d"
  },
  {
    "url": "assets/js/31.8413c69a.js",
    "revision": "5fa500d24259b18d8ccfea503e74cb66"
  },
  {
    "url": "assets/js/32.a3afd322.js",
    "revision": "49a5de4b0889ec723c9dcfb2f6ed62ae"
  },
  {
    "url": "assets/js/33.5f1528bf.js",
    "revision": "29ae3c835687e884d8c13b90a79a0118"
  },
  {
    "url": "assets/js/34.ccc7f69a.js",
    "revision": "8c0b7b5b1c56b1d1a67fc275f85bb684"
  },
  {
    "url": "assets/js/35.f22c0190.js",
    "revision": "d0662d3058b8535a27972be386971ba6"
  },
  {
    "url": "assets/js/36.e521d96f.js",
    "revision": "7e5e26d9238d93d9dfecd13720bdeb3a"
  },
  {
    "url": "assets/js/37.b10530ae.js",
    "revision": "9c0c6bb927adc74044255ba239e9d985"
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
    "url": "assets/js/app.baaaf02d.js",
    "revision": "021fffa042e8ecd14f172ea9b920131d"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "1e5c652ae70af67134eb140e4b92aed3"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "2a6379907dc2a6ae6fc54a409202e56c"
  },
  {
    "url": "categories/index.html",
    "revision": "f25e1cb9d4a1327d2ae2f82904b843f0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4c9caa8e3a6e0721258778585e932d06"
  },
  {
    "url": "categories/NestJS/index.html",
    "revision": "2aeab5ab3a2c91b63f98d2f23c95a4ac"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "8b9b0b13f4982a656232c658aafd2a7f"
  },
  {
    "url": "categories/React/index.html",
    "revision": "860d5edc9d514851fc3ec954e07506ac"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "3d5d8d549cee48c501e56fcd030c1a25"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "f290432d4908f611f28d937b465e5a45"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "6f785ade882d2e863fb6e02bfe2ee525"
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
    "revision": "4a5a2d7d7111108341ca89ff11924ef7"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "bec513714b81247a097917d3af83a59d"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "9046744bfa955e214fa7c44607be684f"
  },
  {
    "url": "tag/index.html",
    "revision": "37dca0ea317222b83b722cae5a1b26ba"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "370b457564d877494cf1907ad544b4fe"
  },
  {
    "url": "tag/NestJS/index.html",
    "revision": "911ae420cb038f0d565632cf922de306"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "d5fec60fc7b9a105ab79a2fd207203ee"
  },
  {
    "url": "tag/React/index.html",
    "revision": "d221d4b1f385015d96b64544b0176fdf"
  },
  {
    "url": "tag/Tools/index.html",
    "revision": "e8b7a51677d082d45d731f424bd702b1"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "34c389a3894d5391beac41eb3a31181e"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "15553bb787be5cc5ffedc342bc1cc584"
  },
  {
    "url": "timeline/index.html",
    "revision": "9eb8c2009cc8cd18c1aaebad48ab7c22"
  },
  {
    "url": "views/docker/docker.html",
    "revision": "1294459f72b092fdce2369f22d94de4a"
  },
  {
    "url": "views/javascript/javascript.html",
    "revision": "973362419a4824cbee349c09bced126e"
  },
  {
    "url": "views/nestjs/nest.html",
    "revision": "31f37bcc5a00b233901fc63eb891914b"
  },
  {
    "url": "views/nginx/nginx.html",
    "revision": "2dc9f6c9d5d41ca509aa70717117ae05"
  },
  {
    "url": "views/qi-ta/echartszi-ding-yi-tu-biao-yan-se-zi-ding-yi-jian-bian-se.html",
    "revision": "1203ae0c09a93a341f05fcf61218b400"
  },
  {
    "url": "views/qi-ta/freesslzheng-shu-shen-qing-ji-nginxpei-zhi.html",
    "revision": "0547f0ccb6d6503338193f557e12e6ed"
  },
  {
    "url": "views/qi-ta/jenkins-zi-dong-hua-bu-shu.html",
    "revision": "619169f488e745d3d5f01f99704e4543"
  },
  {
    "url": "views/qi-ta/jie-jue-echartszi-gua-ying-wen-ti.html",
    "revision": "762410a7f36a5dc830a7e9921983008d"
  },
  {
    "url": "views/qi-ta/mathjax-rang-qian-duan-zhi-chi-shu-xue-gong-shi.html",
    "revision": "787ee1225ce5d83090ff24d0e188cd96"
  },
  {
    "url": "views/qi-ta/pan-duan-ieliu-lan-qi-he-qi-ta-liu-lan-qi.html",
    "revision": "3c38904614ccaa3528a0926fc2fb30c4"
  },
  {
    "url": "views/qi-ta/vuezhan-shi-3dmo-xing.html",
    "revision": "de61e67e6807b2ddca80e77595b8404d"
  },
  {
    "url": "views/qi-ta/webstormshe-zhi-eslintge-shi-hua.html",
    "revision": "e53f283b9f26b0d133486db758d01eb0"
  },
  {
    "url": "views/react/react-jiao-shou-jia-pei-zhi-dai-li.html",
    "revision": "91dec9f4b031f45bf31713efaea30697"
  },
  {
    "url": "views/react/react-jiao-shou-jia.html",
    "revision": "9b391c49029c54fcc6a05df382929301"
  },
  {
    "url": "views/react/react-kuo-zhan-zhi-shi.html",
    "revision": "38f6f9da87b5ded41ea979aee1f186e9"
  },
  {
    "url": "views/react/react-lu-you.html",
    "revision": "4a0ef8c51d1b0ba0d72d9c3f167a7810"
  },
  {
    "url": "views/react/react-redux.html",
    "revision": "21feae8d20057207f4ba336a805bdceb"
  },
  {
    "url": "views/react/react-ru-men-ji-chu.html",
    "revision": "279cbed230161da2d56d96027f424ed7"
  },
  {
    "url": "views/react/react-sheng-ming-zhou-qi.html",
    "revision": "7adb01d75d4fb76a2453a72d590b58f8"
  },
  {
    "url": "views/react/react-xiao-xi-ding-yue-yu-fa-bu-ji-zhi-pubsubjs.html",
    "revision": "0055f0568cc84d332509f6c90cefc3c2"
  },
  {
    "url": "views/react/reduxjstoolkit.html",
    "revision": "4baa146b93c072e1b8f92808396e9725"
  },
  {
    "url": "views/tools/nvman-zhuang-yu-shi-yong.html",
    "revision": "56628b6445d84a3dfb743edbdc2b4cd6"
  },
  {
    "url": "views/tools/typorashi-yong.html",
    "revision": "22c26dbf521d43d2086e13dada60a396"
  },
  {
    "url": "views/tools/vscode-chang-yong-cha-jian.html",
    "revision": "0210bccab371e7e8f5cfda7d021058ba"
  },
  {
    "url": "views/typescript/typescript.html",
    "revision": "4dca51144bbc57df4a36761d68efdeb7"
  },
  {
    "url": "views/vite/vite.html",
    "revision": "adf7e7b9062556926810385cba9a24bf"
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
