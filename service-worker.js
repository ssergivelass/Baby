const CACHE = 'babylog-cache-v1';
const ASSETS = [
  './babylog_pwa.html',
  './manifest.webmanifest',
  './service-worker.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k===CACHE ? null : caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  e.respondWith(
    caches.match(req).then(res => res || fetch(req).then(net => {
      // Cache new GET responses
      if(req.method === 'GET' && net.status === 200){
        const copy = net.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return net;
    }).catch(()=> caches.match('./babylog_pwa.html')))
  );
});
