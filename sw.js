// 오프라인에서도 열리게: 앱 파일은 '새것 먼저, 안 되면 저장본', 잠수네 자료는 버전별로 한 번만 받음
const V = 'jamsu-shell-1254a2a5';
const DATA = 'jamsu-data';
const SHELL = ['./', './index.html', './app.js?v=1254a2a5', './preact.mjs', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V && k !== DATA).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (u.pathname.endsWith('/data/db.enc')) {
    e.respondWith(caches.open(DATA).then(async (c) => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const r = await fetch(e.request);
      if (r.ok) { for (const k of await c.keys()) await c.delete(k); await c.put(e.request, r.clone()); }
      return r;
    }));
    return;
  }
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok) { const cl = r.clone(); caches.open(V).then((c) => c.put(e.request, cl)); }
    return r;
  }).catch(() => caches.match(e.request).then((r) => r || caches.match(e.request, { ignoreSearch: true })).then((r) => r || caches.match('./index.html'))));
});
