!function(){self.__precacheManifest=[{url:"./",revision:"35c5d481"},{url:"./favicon.c4be99fb.ico",revision:"c4be99fb"},{url:"./index.97cb1786.css",revision:"97cb1786"},{url:"./index.05bd46e2.js",revision:"05bd46e2"},{url:"./workers.10b52208.js",revision:"10b52208"}];var e=self,n=e.__precacheManifest.map((function(e){return e.revision})).join(""),t=e.__precacheManifest.map((function(e){return e.url})).filter((function(e){return/\.(ico)$/.test(e)})),c=function(){return caches.open(n)};e.addEventListener("install",(function(e){e.waitUntil(c().then((function(e){return e.addAll(t)})))})),e.addEventListener("activate",(function(t){t.waitUntil(caches.keys().then((function(e){return Promise.all(e.filter((function(e){return e!==n})).map((function(e){return caches.delete(e)})))})).then((function(){return e.clients.claim()})))})),e.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(n){return n||c().then((function(n){return fetch(e.request).then((function(t){return n.put(e.request,t.clone()).then((function(){return t}))}))}))})))}))}();
//# sourceMappingURL=sw.js.map
