const cacheName = 'tpJsSw';

const noCorsUrl = 'https://cors-anywhere.herokuapp.com/';

let calUrl = 'https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu';

let cacheResources = [
    '/tps/JS_SW/',
    noCorsUrl + calUrl
];

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheResources);
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log('fetched');
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
}); 