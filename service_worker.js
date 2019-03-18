const cacheVersion = 'v5';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheVersion).then(function(cache) {
            console.log(cacheVersion)
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/service_worker_controller.js',
                '/data/restaurants.json'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    console.log(event.request)
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});
