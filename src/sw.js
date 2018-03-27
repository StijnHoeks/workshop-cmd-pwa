
self.addEventListener('install', event => event.waitUntil(
  caches.open('bs-v1-core')
      .then(cache => cache.addAll(
        'dist/css/fonts.css',
        'dist/css/bootstrap.css',
        'dist/font/glyphicons-halflings-regular.woff2',
        'offline/'
        ))
      .then(self.skipWaiting())
));

/* check in DevTools > Application > Cache Storage
 * or check in console using:
caches.open('bs-v1-core')
.then(cache => cache.match('/offline/'))
.then(res => res.text())
.then(text => console.log(text))
*/

self.addEventListener('fetch', event => {
  event.respondWith(
      fetch(event.request)
        console.log(err)
        .catch(err => fetchOfflinePage())
        .catch(err => fetchCoreFile('/offline'))
  );
});

function fetchOfflinePage() {
    return caches.open('bs-v1-core')
        .then(cache => cache.match(url));
        .then(response => response ? response : Promise.reject())
}