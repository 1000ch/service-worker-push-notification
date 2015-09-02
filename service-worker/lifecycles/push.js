export default e => {
  e.waitUntil(
    self.registration.showNotification('Push Notification Title', {
      body: '(・∀・)',
      icon: 'http://placehold.it/192x192',
      tag: 'push-notification-tag'
    })
  );
};