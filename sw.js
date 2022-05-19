const VERSION = "v1";
self.addEventListener('install', event => { 
    event.waitUntil(precache()) 
})

self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method !== "GET"){
        return;
    }
    //search cache
    event.respondWith(cachedResponse(request));
    // cache update
    event.waitUntil(updateCache(request));
})
async function precache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        './',
        './index.html',
        './assets/js/main.js',
        './assets/css/style.css',
        './assets/css/cover.css',
        './assets/img/cpu.svg',
        './assets/img/logo.svg',
        './assets/img/logo1.svg',
        './assets/img/player.svg',
        './assets/img/vs.svg',
        './assets/img/cpuPaper.png',
        './assets/img/cpuRock.png',
        './assets/img/cpuScissors.png',
        './assets/img/playerPaper.png',
        './assets/img/playerRock.png',
        './assets/img/playerScissors.png',
    ]);
}
async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}
async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}
