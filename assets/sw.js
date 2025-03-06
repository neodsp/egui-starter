var cacheName = "egui-template-pwa";
var filesToCache = [
  "./",
  "./index.html",
  "./egui-starter-2c4f329c7cb8aea3.js",
  "./egui-starter-2c4f329c7cb8aea3_bg.wasm",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    }),
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
