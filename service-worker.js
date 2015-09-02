(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _lifecyclesInstallJs=require("./lifecycles/install.js"),_lifecyclesInstallJs2=_interopRequireDefault(_lifecyclesInstallJs),_lifecyclesActivateJs=require("./lifecycles/activate.js"),_lifecyclesActivateJs2=_interopRequireDefault(_lifecyclesActivateJs),_lifecyclesFetchJs=require("./lifecycles/fetch.js"),_lifecyclesFetchJs2=_interopRequireDefault(_lifecyclesFetchJs),_lifecyclesPushJs=require("./lifecycles/push.js"),_lifecyclesPushJs2=_interopRequireDefault(_lifecyclesPushJs);self.addEventListener("install",_lifecyclesInstallJs2["default"]),self.addEventListener("activate",_lifecyclesActivateJs2["default"]),self.addEventListener("fetch",_lifecyclesFetchJs2["default"]),self.addEventListener("push",_lifecyclesPushJs2["default"]);

},{"./lifecycles/activate.js":2,"./lifecycles/fetch.js":3,"./lifecycles/install.js":4,"./lifecycles/push.js":5}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e){e.waitUntil(self.clients.claim())},module.exports=exports["default"];

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e){console.log(e)},module.exports=exports["default"];

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e){console.log(e)},module.exports=exports["default"];

},{}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(t){t.waitUntil(self.registration.showNotification("Push Notification Title",{body:"(・∀・)",icon:"http://placehold.it/192x192",tag:"push-notification-tag"}))},module.exports=exports["default"];

},{}]},{},[1]);
