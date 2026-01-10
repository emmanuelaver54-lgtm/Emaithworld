// Simple service worker to enable PWA install
self.addEventListener("install", () => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  // For now, do nothing. All requests go online.
  event.respondWith(fetch(event.request));
});
