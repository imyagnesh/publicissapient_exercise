if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-c4c61989"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/dist/web/NotFoundPage-bundle-5c23afbf.js",revision:"c1f1191f51f30a4c80f6e24bc07d0583"},{url:"/dist/web/loadable-stats.json",revision:"e4e4cd46f9d136db663c1c1477ce0256"},{url:"/dist/web/main-bundle-6a161131.js",revision:"df65db15ea37b631cc7d31537afd4485"},{url:"/dist/web/main.css",revision:"e0622c5478d3a11f28da21b150bdd4da"}],{}),e.registerRoute(/https:\/\/hn.algolia.com\/api\//,new e.StaleWhileRevalidate,"GET")}));
