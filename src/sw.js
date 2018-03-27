
self.addEventListener('install', function(event) {
  caches.open('bs-v1-core')
    .then(cache => cache.add('/offline'))
  event.waitUntil(self.skipWaiting());
});

/*self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));*/

self.addEventListener('fetch', event => {
    //event.respondWith(new Response('hijacked directly!'));
});