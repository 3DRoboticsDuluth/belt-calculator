const CACHE = 'belt-calc-v4';
const ASSETS = ['./', './index.html', './guide.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
const GUIDE_PATH = new URL('./guide.html', self.location.href).pathname;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('belt-calc-') && key !== CACHE).map(key => caches.delete(key))
  )));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    const page = url.pathname === GUIDE_PATH ? './guide.html' : './index.html';
    event.respondWith(fetch(event.request).catch(async () => {
      const cache = await caches.open(CACHE);
      return cache.match(page);
    }));
    return;
  }

  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
