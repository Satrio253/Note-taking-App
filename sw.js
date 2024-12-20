const CACHE_NAME = "notes-app-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css", // If you have an external CSS file
  "./script.js", // If you have an external JavaScript file
  "./manifest.json",
  "./icon-192x192.png",
  "./icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});