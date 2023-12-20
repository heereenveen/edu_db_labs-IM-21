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
    "revision": "3fc447a188029734b72c285043da72e0"
  },
  {
    "url": "assets/css/0.styles.c1fd8c69.css",
    "revision": "6122eea76c36ed4c363d90011b42eb79"
  },
  {
    "url": "assets/img/business_actors.541b7f52.jpg",
    "revision": "541b7f521c8d5af28423294fb1c7a3eb"
  },
  {
    "url": "assets/img/ckan.78bddb68.png",
    "revision": "78bddb68dcd27ea45b695b00956a6434"
  },
  {
    "url": "assets/img/cloude.b48a1c44.jpg",
    "revision": "b48a1c443f1f03e26e278576b8bd44ca"
  },
  {
    "url": "assets/img/crowdsourcing.abc54512.jpg",
    "revision": "abc545121419715bb1bf3e4b2de91384"
  },
  {
    "url": "assets/img/data_gov.0a1216bd.png",
    "revision": "0a1216bda60133bf7e84f798dddfbf87"
  },
  {
    "url": "assets/img/database.aba810cd.jpg",
    "revision": "aba810cd53c228329a5c00e6ee060b99"
  },
  {
    "url": "assets/img/delete_id1.ba305810.png",
    "revision": "ba305810135d15e05cc2620b9155ab36"
  },
  {
    "url": "assets/img/delete_id2.d57431df.png",
    "revision": "d57431df0282c83b30188b462a9a47e4"
  },
  {
    "url": "assets/img/delete_id3.7f2b444d.png",
    "revision": "7f2b444dd735623980b4ffdf4d8c2a0a"
  },
  {
    "url": "assets/img/ERR_Diagram.eaa9b24b.png",
    "revision": "eaa9b24b80e9a9dcd975e15d9cc23b6c"
  },
  {
    "url": "assets/img/get_1.5bb0daf7.png",
    "revision": "5bb0daf76f654164a7003796b93ff613"
  },
  {
    "url": "assets/img/get_2.ea1aac09.png",
    "revision": "ea1aac090b01f36e48c82cba0fc3dbe0"
  },
  {
    "url": "assets/img/get_3.662ce865.png",
    "revision": "662ce865a06045bbb9844fe15f96a9a5"
  },
  {
    "url": "assets/img/get_id1.98416813.png",
    "revision": "9841681324d917c8e00d846e9836b488"
  },
  {
    "url": "assets/img/get_id2.2b239fcb.png",
    "revision": "2b239fcbfda95e853cc9453bf4a0a7c8"
  },
  {
    "url": "assets/img/machine_learning.31b771f2.jpg",
    "revision": "31b771f2debbfff781cf573473788a37"
  },
  {
    "url": "assets/img/opendatasoft.bbab4790.png",
    "revision": "bbab4790100e26097cadd67de1ddbeee"
  },
  {
    "url": "assets/img/other_1.fccf7df9.png",
    "revision": "fccf7df902ecf562cbe93a98a222c2ba"
  },
  {
    "url": "assets/img/other_2.a741cbe2.png",
    "revision": "a741cbe25f7a30cfcd8530f42e9131e9"
  },
  {
    "url": "assets/img/other_3.df608334.png",
    "revision": "df608334b09eaf481925b31ec38de696"
  },
  {
    "url": "assets/img/post_org1.c73a7b04.png",
    "revision": "c73a7b04e0635b2e037af377b5800802"
  },
  {
    "url": "assets/img/post_org2.80a9992f.png",
    "revision": "80a9992fcfc755c88e03a08f6c28c761"
  },
  {
    "url": "assets/img/put_id1.1860d6e3.png",
    "revision": "1860d6e337d7b9bdf2318b3b143a7f1f"
  },
  {
    "url": "assets/img/put_id2.5c2ce49a.png",
    "revision": "5c2ce49ab246a7438eb1fe7acd3af185"
  },
  {
    "url": "assets/img/put_id3.5cb67c23.png",
    "revision": "5cb67c23c276a01fc826744a15e738d2"
  },
  {
    "url": "assets/img/rbac.0a226d39.jpg",
    "revision": "0a226d39b61a5e540e6d408b2e656997"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/socrata.34930cdd.png",
    "revision": "34930cddd7c17fd3ccfce8e0a08e4cb2"
  },
  {
    "url": "assets/img/webscrapping.688f5706.jpg",
    "revision": "688f570695020ea6ee0d402bd5542cbf"
  },
  {
    "url": "assets/js/10.a2169d7a.js",
    "revision": "45f6f1aa925e8e07597d2f49dc7bfd98"
  },
  {
    "url": "assets/js/11.04e10247.js",
    "revision": "495fd47a847b900cbc3700e95c746997"
  },
  {
    "url": "assets/js/12.48e1637f.js",
    "revision": "912b8d430aa2cc300ff0ee6a4e2bdae6"
  },
  {
    "url": "assets/js/13.feb1ae43.js",
    "revision": "90b4aaca7edad398a820c79b4b0cac56"
  },
  {
    "url": "assets/js/14.d033cae2.js",
    "revision": "089d979c658b781e8b0cb45d30fa8d32"
  },
  {
    "url": "assets/js/15.9fea43ae.js",
    "revision": "58a02024bcd0b512a2356823768f4c25"
  },
  {
    "url": "assets/js/16.79138e2d.js",
    "revision": "32270ccb881e07f1155ec11faf50db63"
  },
  {
    "url": "assets/js/17.af3f4133.js",
    "revision": "f77d4e2275cc5dfec72bd5e532c545a0"
  },
  {
    "url": "assets/js/18.5c75829f.js",
    "revision": "91ee8e14898dd46ff811e446a8b29e04"
  },
  {
    "url": "assets/js/19.764ea94a.js",
    "revision": "e8550ab691d8b59f3664938d3bc2ccfd"
  },
  {
    "url": "assets/js/2.b25f4375.js",
    "revision": "c9ee1eb2f4c40dc8014fca9ce3a8cb23"
  },
  {
    "url": "assets/js/20.f34d4461.js",
    "revision": "c830c8216817136a3882bc85d7ed0a70"
  },
  {
    "url": "assets/js/21.2dc1baa3.js",
    "revision": "4cc2f3c4be5cfdbfa029f280136c1b25"
  },
  {
    "url": "assets/js/22.4cf8b6f4.js",
    "revision": "7a244c968ddc2b0cf1c8a58b4dcac0bd"
  },
  {
    "url": "assets/js/23.b6efabe7.js",
    "revision": "122102d36efd27e7935709fb4bc78720"
  },
  {
    "url": "assets/js/24.6a5ac66d.js",
    "revision": "2b9558458ae35cb1c087382936cf30b5"
  },
  {
    "url": "assets/js/26.91787ee4.js",
    "revision": "0d03f6ee520c3f69deb8b7eae1cfb1c5"
  },
  {
    "url": "assets/js/3.fc197a4e.js",
    "revision": "5acec847e205c2c118bb8961cb7b05ca"
  },
  {
    "url": "assets/js/4.35ac69cf.js",
    "revision": "5af940271af9245bf20a546d2de66165"
  },
  {
    "url": "assets/js/5.6fba138d.js",
    "revision": "db75fd0a4c99345c8e030d91018b12c1"
  },
  {
    "url": "assets/js/6.aac7c1bd.js",
    "revision": "c0a8b58d8a1fe80176fd38423aa6e07a"
  },
  {
    "url": "assets/js/7.769bd365.js",
    "revision": "4c4721b2c6eaf3e99ac23fa26297d0d0"
  },
  {
    "url": "assets/js/8.e193256f.js",
    "revision": "bab593c094ad8810f225741d943e2faf"
  },
  {
    "url": "assets/js/9.776426bf.js",
    "revision": "f2d89e4113ddae7b4d0387465bc12bb5"
  },
  {
    "url": "assets/js/app.530e83b0.js",
    "revision": "ab580a7e662ce7f27cbe7588ecc05dbf"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b200b0a889e5f2054a90f8e20f0d1e3d"
  },
  {
    "url": "design/index.html",
    "revision": "117c916c9d1076f6102b60e1af7fcaef"
  },
  {
    "url": "index.html",
    "revision": "3c6475aa3da5b9b1627400d8c945a104"
  },
  {
    "url": "intro/index.html",
    "revision": "78e52c16577bff53359849143ea14108"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "857e6d10c74adf63b7562fc54542832e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "69d5bac6f28b7e31312b69eafab80be3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "93e3f7a6ac4de504dceed9b0762c87ac"
  },
  {
    "url": "software/index.html",
    "revision": "b4fa06a8eaeb6e692cd9e35a424dc034"
  },
  {
    "url": "test/index.html",
    "revision": "78503cab32d2a6be26d8e18da5122782"
  },
  {
    "url": "use cases/index.html",
    "revision": "bf6bd45f9adcb6329b0b61d2ae09e17d"
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
