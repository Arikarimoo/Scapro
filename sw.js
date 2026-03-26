// Service Worker за Scania Pro
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Слушач за пораки (ако праќаме преку сервер во иднина)
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "Scania Pro";
    const options = {
        body: data.body || "Ново известување",
        icon: 'Icon.jpg',
        badge: 'Icon.jpg',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
