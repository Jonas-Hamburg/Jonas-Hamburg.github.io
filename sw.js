const staticCacheName = 'Update-08/25/2021, 12:25';
const assets = [
    '/',
    '/index.html',
    '/index.js',
    '/index.css',
    '/header.css',
    '/about/index.css',
    '/about/index.js',
    '/about/languages.json',
    '/projects/index.js',
    '/projects/index.css',
    '/projects/project.json',
    '/projects/jquery-3.5.1.min.js',
    '/projects/owl.carousel.min.css',
    '/projects/owl.carousel.min.js',
    '/contact/index.css',
    '/pwa/app.js',
    
    '/images/logo/192.png',
    '/images/logo/512.png',
    '/images/background/background.svg',
    '/images/contact/email.svg',
    '/images/languages/Assembler.png',
    '/images/languages/C.png',
    '/images/languages/CSS3.png',
    '/images/languages/Haskell.png',
    '/images/languages/HTML5.png',
    '/images/languages/java.png',
    '/images/languages/JavaScript.png',
    '/images/languages/SQL.png',
    '/images/projects/bumm.png',
    '/images/projects/galerie.png',
    '/images/projects/goToSchool.png',
    '/images/projects/homepage.png',
    '/images/projects/screen-content-phone.jpg',
    '/images/projects/tictactoe.png',
    '/images/projects/zeitschleife.png',
    
    'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap',
    'https://de.wikipedia.org/api/rest_v1/page/summary/Java_(Programmiersprache)',
    'https://de.wikipedia.org/api/rest_v1/page/summary/C_(Programmiersprache)',
    'https://de.wikipedia.org/api/rest_v1/page/summary/Haskell_(Programmiersprache)',
    'https://de.wikipedia.org/api/rest_v1/page/summary/SQL',
    'https://de.wikipedia.org/api/rest_v1/page/summary/HTML',
    'https://de.wikipedia.org/api/rest_v1/page/summary/Cascading%20Style%20Sheets',
    'https://de.wikipedia.org/api/rest_v1/page/summary/JavaScript',
    'https://de.wikipedia.org/api/rest_v1/page/summary/Assemblersprache'
];

self.addEventListener('install', evt => {
    evt.waitUntil(    
        caches.open(staticCacheName).then(cache => {
        cache.addAll(assets);
    }));
    self.skipWaiting();
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});