/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-e501f73d'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/dist/web/NotFoundPage.js",
    "revision": "08596b9e279b9fc36b8dda28c7bccfeb"
  }, {
    "url": "/dist/web/icons/android/icon_144x144.png",
    "revision": "719eb9bd45321fa944c89bc1b4354e39"
  }, {
    "url": "/dist/web/icons/android/icon_192x192.png",
    "revision": "f00f244e3a88a97bc69091469487db44"
  }, {
    "url": "/dist/web/icons/android/icon_36x36.png",
    "revision": "442c270faeb0c3b0f10127233a527b67"
  }, {
    "url": "/dist/web/icons/android/icon_48x48.png",
    "revision": "80bc8e0000e81a0fa876ebb1ee5a64f8"
  }, {
    "url": "/dist/web/icons/android/icon_512x512.png",
    "revision": "58f70b7032c233d6ccee5dbb30dca2d9"
  }, {
    "url": "/dist/web/icons/android/icon_72x72.png",
    "revision": "665844cccedac368cf04136da3f894f2"
  }, {
    "url": "/dist/web/icons/android/icon_96x96.png",
    "revision": "e1c605f907b8cc5e319e858afda8376a"
  }, {
    "url": "/dist/web/icons/favicon/icon_16x16.png",
    "revision": "55cb03c6e89498e2a3c781aa44157c9b"
  }, {
    "url": "/dist/web/icons/favicon/icon_32x32.png",
    "revision": "9c95430cffd8bf492d041fd4cb1414b3"
  }, {
    "url": "/dist/web/icons/favicon/icon_96x96.png",
    "revision": "e1c605f907b8cc5e319e858afda8376a"
  }, {
    "url": "/dist/web/icons/ios/icon_1024x1024.png",
    "revision": "b347db94925a60e45e3dddb484917e48"
  }, {
    "url": "/dist/web/icons/ios/icon_114x114.png",
    "revision": "c7f77a98a72aacd134ba49f5bdb6b298"
  }, {
    "url": "/dist/web/icons/ios/icon_120x120.png",
    "revision": "c1cd2f4b215857f8af8cdb30513f2047"
  }, {
    "url": "/dist/web/icons/ios/icon_144x144.png",
    "revision": "719eb9bd45321fa944c89bc1b4354e39"
  }, {
    "url": "/dist/web/icons/ios/icon_152x152.png",
    "revision": "d2f06179d432fa5e772eb4d561c287a9"
  }, {
    "url": "/dist/web/icons/ios/icon_167x167.png",
    "revision": "3d6cfacdfbd973f9037e7bb1408e4a69"
  }, {
    "url": "/dist/web/icons/ios/icon_180x180.png",
    "revision": "ba9112fe9b0426c69c318dd2d92c2a4d"
  }, {
    "url": "/dist/web/icons/ios/icon_57x57.png",
    "revision": "3a03ced6aa65cd0d59c8e2c2a07f9954"
  }, {
    "url": "/dist/web/icons/ios/icon_60x60.png",
    "revision": "0ab82239c0c14fb55304f92160fbb76b"
  }, {
    "url": "/dist/web/icons/ios/icon_72x72.png",
    "revision": "665844cccedac368cf04136da3f894f2"
  }, {
    "url": "/dist/web/icons/ios/icon_76x76.png",
    "revision": "7875368c93e74ccad8d0b66c2a0fe877"
  }, {
    "url": "/dist/web/icons/msIcon/icon_144x144.png",
    "revision": "719eb9bd45321fa944c89bc1b4354e39"
  }, {
    "url": "/dist/web/loadable-stats.json",
    "revision": "bc7acc0e6b23966c333749e8b5438083"
  }, {
    "url": "/dist/web/main.css",
    "revision": "9f87eadb6ec9f1469b5c5359da4bb0e4"
  }, {
    "url": "/dist/web/manifest.json",
    "revision": "f2507d0820626c7f3fec95f32a28b19d"
  }, {
    "url": "/dist/web/vendors~date-fns.js",
    "revision": "87e2a5de621fdb8f781cb0de123f2f1d"
  }], {});
  workbox.registerRoute(/https:\/\/hn.algolia.com\/api\//, new workbox.StaleWhileRevalidate(), 'GET');
  workbox.registerRoute(/.css$/, new workbox.CacheFirst(), 'GET');
  workbox.registerRoute(/.(png|svg|jpg|jpeg)$/, new workbox.CacheFirst(), 'GET');

});
//# sourceMappingURL=sw.js.map
