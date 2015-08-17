'use strict';

document.addEventListener('DOMContentLoaded', e => {

  let endpoint = document.querySelector('#subscription-endpoint');
  let push = document.querySelector('#send-push-notification');

  push.addEventListener('click', e => {

    let registrationId = endpoint.value.replace('https://android.googleapis.com/gcm/send/', '');

    fetch('https://android.googleapis.com/gcm/send', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AIzaSyCvzDdEXqud80d2Z4CBeOk-YHyP_6qNRsU'
      },
      body: JSON.stringify({
        registration_ids: [registrationId]
      }),
      credentials: 'cors'
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  });

  navigator.serviceWorker.register('service-worker.js').then(registration => {

    registration.pushManager.subscribe().then(subscription => {
      endpoint.value = subscription.endpoint;
      push.removeAttribute('disabled');
    });

  }).catch(error => console.log(error));
});
