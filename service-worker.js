"use strict";var precacheConfig=[["/lindsaymulhollen/index.html","27206c0f3caba0cd4b4dfa8c54e15b4c"],["/lindsaymulhollen/static/css/main.9e7693d8.css","3e93545f3eaf7323975b1b01fd82c64c"],["/lindsaymulhollen/static/js/main.b8a6a3dd.js","d649bdbd81cb865a5b5e608cdb31dfa9"],["/lindsaymulhollen/static/media/ArtInvestigator.a307b67b.jpg","a307b67bb7c4dc0aaeec0466a27c4db6"],["/lindsaymulhollen/static/media/EHsquare.47f645ac.jpg","47f645acd9a28d1b196ce3538cc55155"],["/lindsaymulhollen/static/media/LindsayMulhollenResume.88a84575.png","88a8457576798b0b9e92a9d9de114dc7"],["/lindsaymulhollen/static/media/Single.ff3f1dfc.jpg","ff3f1dfc2b6c3c45b2ed64e7c5f5ff05"],["/lindsaymulhollen/static/media/Trio.5768a8c0.jpg","5768a8c0481db943d3f01f8a1b9e8707"],["/lindsaymulhollen/static/media/artlens.8d599f18.JPG","8d599f18f1b5c75bab5db93b0f3569f6"],["/lindsaymulhollen/static/media/challenge.30323ece.jpg","30323ece2ee79c03073917156cb00548"],["/lindsaymulhollen/static/media/interview.c30ad25f.png","c30ad25f27cca043476d73d182ea127f"],["/lindsaymulhollen/static/media/kristen.d56fda4d.jpg","d56fda4dda81484949509e2045f01fdc"],["/lindsaymulhollen/static/media/lindsay.e5c5e030.jpg","e5c5e03063cc7a3e2500641464913321"],["/lindsaymulhollen/static/media/liv_app_2.d2d5b119.jpg","d2d5b11993951ce82aa411b26dc30e5f"],["/lindsaymulhollen/static/media/lmlogo.6e4d347d.gif","6e4d347d771b429dbb6244fe8d5f01b3"],["/lindsaymulhollen/static/media/lmlogostill.8c316427.png","8c3164271db4d78e8c5bfc99140bbf6f"],["/lindsaymulhollen/static/media/mainscreen.ee371b4b.jpg","ee371b4bfbf2076c3c5a7b603963e6b4"],["/lindsaymulhollen/static/media/neos.97613746.jpg","97613746af139c4764f281cb332c9cac"],["/lindsaymulhollen/static/media/persona.b587826f.jpeg","b587826f0fa851e43dd7e9e7d955eec8"],["/lindsaymulhollen/static/media/photostrip.8b396066.jpg","8b396066c6f2b1dfb9b1da11416d50ef"],["/lindsaymulhollen/static/media/search.5ee59037.jpg","5ee5903749138c103373b5e92d16f112"],["/lindsaymulhollen/static/media/soundsuit-square.41dc38a7.jpg","41dc38a77c105cb8cfe30f5b455d1dc8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,a,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return a.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),c=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,a=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var c="/lindsaymulhollen/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});