
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('bs-v1-core')
      .then(cache => cache.add('/offline'))
      .then(self.skipWaiting())
  );
});

