// service-worker.js
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("plant-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html" //
      ]);
    })
  );
});
