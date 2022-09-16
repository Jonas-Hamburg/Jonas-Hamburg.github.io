self.addEventListener('install', evt => console.log('[ServiceWorker] Install'));

self.addEventListener('activate', evt => console.log('[ServiceWorker] Activate'));

self.addEventListener('fetch', evt => console.log('[ServiceWorker] Fetch'));
