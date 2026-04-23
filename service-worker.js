self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("plant-app").then(cache => {
      return cache.addAll([
        "/plant-app/index.html"
      ]);
    })
  );
});
