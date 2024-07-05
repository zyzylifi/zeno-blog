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
    "revision": "0ae8cdae1d6ed7e5bcb7bf4ecd120bcc"
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
    "url": "assets/js/10.04390c87.js",
    "revision": "7b498a3bc13a237423278b039938d053"
  },
  {
    "url": "assets/js/11.e5336b03.js",
    "revision": "19e9cbb10278fc15fbc185d8c2d9ed4b"
  },
  {
    "url": "assets/js/12.5663ed58.js",
    "revision": "859cf212fd41a086e0f2298cedcdb053"
  },
  {
    "url": "assets/js/13.189b6a7a.js",
    "revision": "654e75c3746968c64db14b8c230ce653"
  },
  {
    "url": "assets/js/14.711d9684.js",
    "revision": "2b8084ad61a77d5a75434efba1cfd929"
  },
  {
    "url": "assets/js/15.c2ce1fef.js",
    "revision": "6c4f146241c34de4cf6113c414ada9bb"
  },
  {
    "url": "assets/js/16.977465c4.js",
    "revision": "52347c4cba1b25f86263291da2d965e4"
  },
  {
    "url": "assets/js/17.66d8c795.js",
    "revision": "28e3083d77972e323e7bc24bb5080eb6"
  },
  {
    "url": "assets/js/18.6bdd9baa.js",
    "revision": "f681072f811ec9d631f39a2888e36624"
  },
  {
    "url": "assets/js/19.815cb295.js",
    "revision": "93fa883834717bb7b8efcc79413a6fec"
  },
  {
    "url": "assets/js/20.ee71a9a0.js",
    "revision": "140810ab7efa4c3945022d46235144a1"
  },
  {
    "url": "assets/js/21.2b5b09c2.js",
    "revision": "184fc3b6ad5138bf4a7dccfd00beb4b5"
  },
  {
    "url": "assets/js/22.9734a503.js",
    "revision": "a0b32f55a5c4b252991b1edf543e682c"
  },
  {
    "url": "assets/js/23.1475c307.js",
    "revision": "d09bf006d0da12a617bf01edfae7f78e"
  },
  {
    "url": "assets/js/24.8dee7392.js",
    "revision": "37d275ba69348c638d700ebde216c8d1"
  },
  {
    "url": "assets/js/25.58dfc138.js",
    "revision": "41ccbaa89e134d6c229f3bea1a7ed3bf"
  },
  {
    "url": "assets/js/26.5326878a.js",
    "revision": "c5b0b0ac337bc8afe338040b7d3bfef4"
  },
  {
    "url": "assets/js/27.4be984be.js",
    "revision": "a5ab44d03eb70e3abeaa3454d06ba608"
  },
  {
    "url": "assets/js/28.903942bf.js",
    "revision": "905864982468d8c26af119a54f72b4a0"
  },
  {
    "url": "assets/js/29.0f30f0ab.js",
    "revision": "70c3f94ab3684d3e43a67e62f15e067c"
  },
  {
    "url": "assets/js/3.3b039ebf.js",
    "revision": "826e95505ccb0c3137f70a28cffea094"
  },
  {
    "url": "assets/js/30.9fbea95c.js",
    "revision": "0f6be51b23e73d302d6260008c328dbc"
  },
  {
    "url": "assets/js/31.1a05277e.js",
    "revision": "50f973fa9df53dcc44afad49123802f0"
  },
  {
    "url": "assets/js/32.cf412315.js",
    "revision": "792538746109382e0263b39f7ada4aac"
  },
  {
    "url": "assets/js/33.0a09b078.js",
    "revision": "1a3792641d66dea0aa311ba7381b697e"
  },
  {
    "url": "assets/js/34.bc35e353.js",
    "revision": "28ca3e8193913b7b5f8549a4aed255fd"
  },
  {
    "url": "assets/js/35.95b848cb.js",
    "revision": "692dd46f3f4453885f5101e9e3729b0b"
  },
  {
    "url": "assets/js/36.6e87a83a.js",
    "revision": "17acbf34e5c78ebfa9a3860204866a45"
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
    "url": "assets/js/app.9211a5da.js",
    "revision": "780c6f32e7555fc2d6cafed43a655043"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "58550fb400b983c511096d2b60f0b425"
  },
  {
    "url": "categories/index.html",
    "revision": "d1ec32bb736bef6951a2df37ffbfb763"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "38dcefb363f816759861b32b6f42c2a0"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "bba64757f56d3fbdd60678ad9fa184cf"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2d0e58f27d5ba55b7408540a28e063ff"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "97ad56df4d88063c71301faf1b933494"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "3ae37b5c813a82741d57ae181fd40cd2"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "d7a8bca7ab4de6f50f4e5e73e7d46b85"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "ea4c182e9e51de28ec281483550522f7"
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
    "revision": "ffe5e1841ef0392e57e1d7c0a0d174c5"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "1e0c981e3a65f089827c67f26b6aaafa"
  },
  {
    "url": "tag/index.html",
    "revision": "49c938fc44ca810d5a0a7032eb825aee"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9dad861d8ba104ef3d977643c7a35c4d"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "ba6707daaf42f7cc3c9960552a6f9e8a"
  },
  {
    "url": "tag/React/index.html",
    "revision": "f3adda495bb7fff85b7e5372e1327d2a"
  },
  {
    "url": "tag/Tools/index.html",
    "revision": "643eb59d0b9db26e19e168959981ee83"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "dbc7041d2d79eca9c60a2cb6788d4d54"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "999eed6e3ce4fdaac5b7bfaabd59296f"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "8494775cec665d2fc7bae1a4f5f9acf0"
  },
  {
    "url": "timeline/index.html",
    "revision": "d7f9f219998752eca254da2c4cd8dac1"
  },
  {
    "url": "views/docker/docker.html",
    "revision": "afb95a3bff4e4d95c2c4123ffa117bc6"
  },
  {
    "url": "views/javascript/javascript.html",
    "revision": "e26f8e69dae91b99ce5ef843ee7fd3a1"
  },
  {
    "url": "views/nginx/nginx.html",
    "revision": "c8c471f786563f3ca5fd85a6e4236503"
  },
  {
    "url": "views/qi-ta/echartszi-ding-yi-tu-biao-yan-se-zi-ding-yi-jian-bian-se.html",
    "revision": "e1188e3c68ed30fd6018bb1891986be6"
  },
  {
    "url": "views/qi-ta/freesslzheng-shu-shen-qing-ji-nginxpei-zhi.html",
    "revision": "551385ff36fb9e2e220303f8a547eb6f"
  },
  {
    "url": "views/qi-ta/jenkins-zi-dong-hua-bu-shu.html",
    "revision": "0c58bd3b42f7cb20f8e2f350d7ae84d2"
  },
  {
    "url": "views/qi-ta/jie-jue-echartszi-gua-ying-wen-ti.html",
    "revision": "13f21c9d368821da7895a8d3107dd8cb"
  },
  {
    "url": "views/qi-ta/mathjax-rang-qian-duan-zhi-chi-shu-xue-gong-shi.html",
    "revision": "b90bc505765e71f31f8fad04203aac58"
  },
  {
    "url": "views/qi-ta/pan-duan-ieliu-lan-qi-he-qi-ta-liu-lan-qi.html",
    "revision": "8fa1b730367a8a890dc8e2bd34cde69f"
  },
  {
    "url": "views/qi-ta/vuezhan-shi-3dmo-xing.html",
    "revision": "5a65ca94aec168d664b3b8d202f30567"
  },
  {
    "url": "views/qi-ta/webstormshe-zhi-eslintge-shi-hua.html",
    "revision": "a67602af6fbf94d85040edc40dd4c1d4"
  },
  {
    "url": "views/react/react-jiao-shou-jia-pei-zhi-dai-li.html",
    "revision": "6a7c34af90ca1e80504793d5a34fcd6a"
  },
  {
    "url": "views/react/react-jiao-shou-jia.html",
    "revision": "7d12c096e73c429c42db0a21b72c8d4d"
  },
  {
    "url": "views/react/react-kuo-zhan-zhi-shi.html",
    "revision": "18282fca4e9f521f63dec8132de61921"
  },
  {
    "url": "views/react/react-lu-you.html",
    "revision": "611bbd9e760a041856753e63fd98f460"
  },
  {
    "url": "views/react/react-redux.html",
    "revision": "df2a027ac505c8462c28a49d85ee74c5"
  },
  {
    "url": "views/react/react-ru-men-ji-chu.html",
    "revision": "755c35c0ebf20558408703776e27c9f7"
  },
  {
    "url": "views/react/react-sheng-ming-zhou-qi.html",
    "revision": "c451afec376a1b56d80baba9027ff390"
  },
  {
    "url": "views/react/react-xiao-xi-ding-yue-yu-fa-bu-ji-zhi-pubsubjs.html",
    "revision": "43f8845bc408a47d1326c8606220d567"
  },
  {
    "url": "views/react/reduxjstoolkit.html",
    "revision": "a26ea50293ce889b444663f4ec380382"
  },
  {
    "url": "views/tools/nvman-zhuang-yu-shi-yong.html",
    "revision": "aefbb98bc8ce5f3715a838e620569112"
  },
  {
    "url": "views/tools/typorashi-yong.html",
    "revision": "68f8f8d19bfdeaef5b230cd3fb143772"
  },
  {
    "url": "views/tools/vscode-chang-yong-cha-jian.html",
    "revision": "98a6f28bdc334424f781dead103461a1"
  },
  {
    "url": "views/typescript/typescript.html",
    "revision": "d970c4b3476ef4b2c7bab07384059ad5"
  },
  {
    "url": "views/vite/vite.html",
    "revision": "aa1847618c23e89bd9279cc30cd256cf"
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
