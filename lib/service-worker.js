"use strict";

var _CacheableResponsePlugin = require("workbox-cacheable-response/CacheableResponsePlugin");

var _CacheFirst = require("workbox-strategies/CacheFirst");

var _createHandlerForURL = require("workbox-precaching/createHandlerForURL");

var _ExpirationPlugin = require("workbox-expiration/ExpirationPlugin");

var _NavigationRoute = require("workbox-routing/NavigationRoute");

var _precacheAndRoute = require("workbox-precaching/precacheAndRoute");

var _registerRoute = require("workbox-routing/registerRoute");

/* eslint-disable no-restricted-globals */
(0, _precacheAndRoute.precacheAndRoute)(self.__WB_MANIFEST);
(0, _registerRoute.registerRoute)(new _NavigationRoute.NavigationRoute((0, _createHandlerForURL.createHandlerForURL)('react/dist/index.html'), {
  blacklist: [/\/activate\b/]
}));
(0, _registerRoute.registerRoute)(/^https:\/\/mylibrary\.io\/graphql\?.+cache%22:1/, new _CacheFirst.CacheFirst({
  cacheName: 'short-cache',
  matchOptions: {
    ignoreVary: true
  },
  plugins: [new _ExpirationPlugin.ExpirationPlugin({
    maxEntries: 500,
    maxAgeSeconds: 300,
    purgeOnQuotaError: true
  }), new _CacheableResponsePlugin.CacheableResponsePlugin({
    statuses: [0, 200]
  })]
}));
(0, _registerRoute.registerRoute)(/^https:\/\/mylibrary\.io\/graphql\?.+cache%22:5/, new _CacheFirst.CacheFirst({
  cacheName: 'medium-cache',
  matchOptions: {
    ignoreVary: true
  },
  plugins: [new _ExpirationPlugin.ExpirationPlugin({
    maxEntries: 500,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: true
  }), new _CacheableResponsePlugin.CacheableResponsePlugin({
    statuses: [0, 200]
  })]
}));
(0, _registerRoute.registerRoute)(/^https:\/\/mylibrary\.io\/graphql\?.+cache%22:9/, new _CacheFirst.CacheFirst({
  cacheName: 'max-cache',
  matchOptions: {
    ignoreVary: true
  },
  plugins: [new _ExpirationPlugin.ExpirationPlugin({
    maxEntries: 500,
    maxAgeSeconds: 63072e3,
    purgeOnQuotaError: true
  }), new _CacheableResponsePlugin.CacheableResponsePlugin({
    statuses: [0, 200]
  })]
}));
(0, _registerRoute.registerRoute)(/^https:\/\/s3.amazonaws.com\/my-library-cover-uploads/, new _CacheFirst.CacheFirst({
  cacheName: 'local-images1',
  matchOptions: {
    ignoreVary: true
  },
  plugins: [new _ExpirationPlugin.ExpirationPlugin({
    maxEntries: 500,
    maxAgeSeconds: 63072e3,
    purgeOnQuotaError: true
  }), new _CacheableResponsePlugin.CacheableResponsePlugin({
    statuses: [0, 200]
  })]
}));
(0, _registerRoute.registerRoute)(/^https:\/\/my-library-cover-uploads.s3.amazonaws.com/, new _CacheFirst.CacheFirst({
  cacheName: 'local-images2',
  matchOptions: {
    ignoreVary: true
  },
  plugins: [new _ExpirationPlugin.ExpirationPlugin({
    maxEntries: 500,
    maxAgeSeconds: 63072e3,
    purgeOnQuotaError: true
  }), new _CacheableResponsePlugin.CacheableResponsePlugin({
    statuses: [0, 200]
  })]
}));
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});