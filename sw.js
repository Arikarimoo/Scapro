self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : "Ново возило во системот!",
        icon: 'Icon.jpg',
        badge: 'Icon.jpg',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification("Scania Pro", options));
});
