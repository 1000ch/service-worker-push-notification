self.addEventListener('install', e => {

  console.log('Service Worker oninstall: ', e);
});

self.addEventListener('activate', e => {

  console.log('Service Worker onactivate: ', e);

  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {

  console.log('Service Worker onfetch: ', e);
});

self.addEventListener('push', e => {

  console.log('Service Worker onpush: ', e);

  e.waitUntil(
    self.registration.showNotification('Push Notification Title', {
      body: '(・∀・)',
      icon: 'http://placehold.it/192x192',
      tag: 'push-notification-tag'
    })
  );
});
