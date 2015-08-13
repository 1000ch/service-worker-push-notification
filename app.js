navigator.serviceWorker.register('service-worker.js').then(registration => {

  console.log('Service Worker Scope:', registration.scope);

  registration.pushManager.subscribe({
    userVisibleOnly: true
  }).then(subscription => {

    console.log("subscription.subscriptionId: ", subscription.subscriptionId);
    console.log("subscription.endpoint:       ", subscription.endpoint);
  });

}).catch(error => console.log(error));
