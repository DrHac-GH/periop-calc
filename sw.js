// オフラインで使うためのサービスワーカー。
// 版（pwa/version.json）が変わると CACHE の名前が変わり、古いキャッシュを捨てて取り直す（build.sh が書き換える）。
const CACHE = 'periop-calc-0.1.0-2026-09-13';

const FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './engine.js',
  './version.json',
  './manifest.webmanifest',
  './data/gamma.json',
  './data/parenteral.json',
  './data/enteral_electrolyte.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// 画面の中の「更新する」から呼ばれる。
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

// 取り出しはキャッシュを先に見る（計算とデータは端末の中だけで動く）。
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((hit) => hit || fetch(event.request)),
  );
});
