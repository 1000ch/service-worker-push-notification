'use strict';

let projectId = 'AIzaSyCvzDdEXqud80d2Z4CBeOk-YHyP_6qNRsU';
let registrationId = '';

document.addEventListener('DOMContentLoaded', e => {

  let endpoint = document.querySelector('#subscription-endpoint');
  let curlURL = document.querySelector('#curl-url');
  let push = document.querySelector('#send-push-notification');

  push.addEventListener('click', e => {
    fetch('https://android.googleapis.com/gcm/send', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=${projectId}'
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

    registration.pushManager.subscribe({
      userVisibleOnly: true
    }).then(subscription => {
      endpoint.value = subscription.endpoint;
      registrationId = endpoint.value.replace('https://android.googleapis.com/gcm/send/', '');
      curlURL.value = `curl --header "Authorization: key=${projectId}" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"${registrationId}\"]}"`;
      push.removeAttribute('disabled');
    });

  }).catch(error => console.log(error));
});