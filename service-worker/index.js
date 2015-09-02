import onInstall  from './lifecycles/install.js';
import onActivate from './lifecycles/activate.js';
import onFetch    from './lifecycles/fetch.js';
import onPush     from './lifecycles/push.js';

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);
self.addEventListener('push', onPush);