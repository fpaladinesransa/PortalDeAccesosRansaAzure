'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73aab6cf4cb33010edb3b3fb260f242d",
"assets/AssetManifest.json": "141f3a62e406d81c6a4b03184a8565b5",
"assets/assets/Aceptar.json": "770ea5b580d9fedb5175a930a139465e",
"assets/assets/Bota_de_seguridad.png": "8e15e3ac6697c11f298c01c9f2881d43",
"assets/assets/comunicaci%25C3%25B3n%2520emergencia.jpg": "5100e662aa86306489882c10c41d17dc",
"assets/assets/Diapositiva1.JPG": "29bbdd1f674ff0e2f368c4eded8b0f28",
"assets/assets/Diapositiva10.JPG": "74f7cf43886cc5dba1fcab20cdfc18cf",
"assets/assets/Diapositiva11.JPG": "9252f2fabc3b0887c718a503f4613277",
"assets/assets/Diapositiva12.JPG": "c5cda8eb8ed44eeaf0589296ed6334de",
"assets/assets/Diapositiva13.JPG": "2ed4b81f9d65a4a99cdb9f2ab04dde03",
"assets/assets/Diapositiva14.JPG": "645a4302a62acdcf94773ebd377c6aee",
"assets/assets/Diapositiva15.JPG": "9e248da9dd2bce34fc881d505fc2f7df",
"assets/assets/Diapositiva16.JPG": "b3aaef5ee0b27ff3149a1c340ac91217",
"assets/assets/Diapositiva17.JPG": "be3a34d8c9640b7d402cefde6a9970a4",
"assets/assets/Diapositiva18.JPG": "640de310401d7cb923b5be626bd2be95",
"assets/assets/Diapositiva19.JPG": "668ce2c1b353399fdf35b34a9dfb78c5",
"assets/assets/Diapositiva2.JPG": "1872055fc4d30d95f820c28c40753ff0",
"assets/assets/Diapositiva20.JPG": "27be34896ac2595d639f64731e447fd0",
"assets/assets/Diapositiva21.JPG": "e6622625f47ed6fd1540a345c9ac6679",
"assets/assets/Diapositiva22.JPG": "0f31e50d4739cc4faeb8c1aa39efc38a",
"assets/assets/Diapositiva23.JPG": "82fe46389fb0fbe5970cf6b664e79064",
"assets/assets/Diapositiva24.JPG": "db84ea26851f9293e4b529c460b796d2",
"assets/assets/Diapositiva25.JPG": "2bcb543edf3b982e37a387d40367a1ed",
"assets/assets/Diapositiva26.JPG": "52cdaa58b5d2bd4ea8cf73077dda50b6",
"assets/assets/Diapositiva27.JPG": "8288caa71f7ca4b0db594d7880330b65",
"assets/assets/Diapositiva28.JPG": "773672958f93fa56f495b6db58a4a0ba",
"assets/assets/Diapositiva29.JPG": "65557476fa4f1945198964906dbcf74c",
"assets/assets/Diapositiva3.JPG": "c6cd68fd65c5b24a0e781ee0fd7a52e6",
"assets/assets/Diapositiva30.JPG": "d198fbb627d1b4bd845aaef9c5d8ebce",
"assets/assets/Diapositiva31.JPG": "a597b00711b1ee515d244748664b834a",
"assets/assets/Diapositiva32.JPG": "4bcd40c81566d754de05c30669ee77ec",
"assets/assets/Diapositiva33.JPG": "30c12ba0a7e5afddbd09e5b464d8a224",
"assets/assets/Diapositiva34.JPG": "aa93b1aefa1e50a8b5bcde69ad3b81c0",
"assets/assets/Diapositiva35.JPG": "c30b14bf9d1288514fbb9ee7a4668225",
"assets/assets/Diapositiva36.JPG": "19e5b8015e83de2e706c2d70ba78ddae",
"assets/assets/Diapositiva37.JPG": "b1e69ed97399daa9c236a83cb04eb214",
"assets/assets/Diapositiva38.JPG": "2b42816791c54ff381645d1d44e51c0f",
"assets/assets/Diapositiva39.JPG": "ec3cd6e77886076a6ca45598c33405cd",
"assets/assets/Diapositiva4.JPG": "2ca20b48cfad637aba070178d5b669c7",
"assets/assets/Diapositiva40.JPG": "bd1a526a2ef568eaa01f4f54e43d8eb6",
"assets/assets/Diapositiva41.JPG": "02153361eccb87a55856127aa793f260",
"assets/assets/Diapositiva42.JPG": "3a2d63398b8b26eb04ce2a304e109426",
"assets/assets/Diapositiva43.JPG": "b8f58e5aa558c54dc36388f8109c1514",
"assets/assets/Diapositiva44.JPG": "29bbdd1f674ff0e2f368c4eded8b0f28",
"assets/assets/Diapositiva5.JPG": "ebeee21a796f318fc474f7e0507fccfe",
"assets/assets/Diapositiva6.JPG": "7bf9edcf4992d8c4316b7e99b2f20ef7",
"assets/assets/Diapositiva7.JPG": "b63fe2655a4378b5d368bcfee3fb2277",
"assets/assets/Diapositiva8.JPG": "fd1708430b3e2293957f27706cd96db8",
"assets/assets/Diapositiva9.JPG": "afd24214fe389eb0d9f0111828b8266f",
"assets/assets/GH_CamisasSeguridad.png": "7cf6d75a83007600b31a236f9e3a1e5e",
"assets/assets/GH_CamisetaOficina.png": "a287274f00b514570a4bda6a3bf8e73e",
"assets/assets/GH_Casco.png": "6ce9afbf001defe01a7593688e2a73d3",
"assets/assets/GH_Chaleco.png": "42f3584a1dfdaa0887b161648e409b2a",
"assets/assets/Imagen24.png": "7a660bb337e59d0f1e26c92952e7b96b",
"assets/assets/imagenhome.jpg": "7e5df27f14da229038c6f0911d8e430b",
"assets/assets/LogoIcono.png": "b95a8cd34165266e2917b5d508557bdd",
"assets/assets/Logo_Ransa.png": "a65d54675fc4973f81384ae7c83be662",
"assets/assets/Logo_Ransa_Blanco.png": "dc4f2a0fbd6bee3cdb545e5993fd410d",
"assets/assets/Recomendaciones.jpg": "aaed7ef93d894ebee7645d3a5feea498",
"assets/assets/SeguridadPG2.jpg": "9d7849a751495522ddfee1068a0534a2",
"assets/assets/SeguridadPG8.jpg": "db9d312dbfa2ffd0d8dc58841dd41f22",
"assets/FontManifest.json": "b19625d2d97624227d7c06202683e985",
"assets/fonts/MaterialIcons-Regular.otf": "b27fdafdcd1ecd14afcfece50c4346ff",
"assets/fonts/UniviaPro-Bold.ttf": "f231270a13f93ffcdea1ddc8aeab34bf",
"assets/fonts/UniviaPro-Book.ttf": "0cc7a29b6d20f97480d411c0dab82f35",
"assets/fonts/UniviaPro-Light.ttf": "58c30351f2d57d5f9c256b1a0457d533",
"assets/fonts/UniviaPro-Regular.ttf": "441fbf184f57884270f215193dabd19c",
"assets/NOTICES": "c8803fd1d33dd236e14f8047cf111af8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "56e1ecfab80964e84b60f66f2774b859",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "24f1fbf8ea64744078b880f69329b237",
"icons/Icon-512.png": "b95a8cd34165266e2917b5d508557bdd",
"icons/Icon-maskable-192.png": "24f1fbf8ea64744078b880f69329b237",
"icons/Icon-maskable-512.png": "b95a8cd34165266e2917b5d508557bdd",
"index.html": "56f2371a8e08dda5a4d061c75bd0a40f",
"/": "56f2371a8e08dda5a4d061c75bd0a40f",
"main.dart.js": "ac74cb8d27afdd1e3d46785c1898a841",
"manifest.json": "ba60c9b5154271a56ae344dfdf12c76c",
"version.json": "a237903b204c8b99014064c54e00f2ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
