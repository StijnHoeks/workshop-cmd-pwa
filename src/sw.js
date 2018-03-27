

/* check in DevTools > Application > Cache Storage
 * or check in console using:
caches.open('bs-v1-core')
.then(cache => cache.match('/offline/'))
.then(res => res.text())
.then(text => console.log(text))
*/





self.addEventListener('fetch', function(event) {
  // We only want to call event.respondWith() if this is a GET request for an HTML document.
  if (event.request.method === 'GET' &&
      event.request.headers.get('accept').indexOf('text/html') !== -1) {
    event.respondWith(
      fetch(event.request).catch(function(e) {
        return caches.open(OFFLINE_CACHE).then(function(cache) {
          return cache.match(OFFLINE_URL);
        });
      })
    );
  }
});