(this["webpackJsonpphoto-grid"]=this["webpackJsonpphoto-grid"]||[]).push([[0],{10:function(e,n,i){},12:function(e,n,i){"use strict";i.r(n);var c,t=i(1),s=i.n(t),a=i(4),r=i.n(a),l=(i(9),i(2)),o=(i(10),i(0)),d=function(e){var n=e.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"body",children:n})})},j=function(){var e=Object(t.useState)(!1),n=Object(l.a)(e,2),i=n[0],c=n[1],s=[{name:"Men"},{name:"Women"},{name:"Kids"},{name:"Sport"},{name:"Hiking"}];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)("div",{className:"nav-brand",children:"Feets"}),Object(o.jsx)("div",{className:"nav-items",children:s.map((function(e,n){return Object(o.jsx)("div",{className:"nav-link__cover",children:Object(o.jsx)("a",{href:"/",className:"nav-links",children:e.name})},n)}))}),Object(o.jsxs)("div",{className:"nav-activity",children:[Object(o.jsx)("div",{className:"nav-icon",children:Object(o.jsx)("ion-icon",{name:"heart-outline"})}),Object(o.jsx)("div",{className:"nav-icon",children:Object(o.jsx)("ion-icon",{name:"cart-outline"})}),Object(o.jsx)("div",{className:"nav-menu__btn",onClick:function(){c(!0)},children:Object(o.jsx)("ion-icon",{name:"menu-outline"})})]})]}),Object(o.jsx)("div",{className:i?"backdrop":"disable",onClick:function(){return c(!1)}}),Object(o.jsx)("div",{className:i?"mobile-nav":"disable",onClick:function(){return c(!1)},children:s.map((function(e,n){return Object(o.jsx)("div",{className:"mobile-link__cover",children:Object(o.jsx)("a",{href:"",className:"mobile-links",children:e.name})},n)}))})]})},h=i.p+"static/media/nike.71a6a751.png",m=i.p+"static/media/usain.b6bb4122.png";var b=function(){var e=Object(t.useState)(!1),n=Object(l.a)(e,2),i=n[0],s=n[1];return Object(t.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),c=e,s(!0),console.log("'beforeinstallprompt' event was fired.")})),window.addEventListener("appinstalled",(function(){console.log("INSTALL: Success")}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(d,{children:[i&&Object(o.jsx)("button",{className:"install-button",onClick:function(e){s(!1),c.prompt(),c.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))},children:"INSTALL ME"}),Object(o.jsxs)("div",{className:"hero-cover",style:{marginTop:"100px"},children:[Object(o.jsx)("div",{className:"hero-title",children:"the Bold Walk"}),Object(o.jsx)("div",{className:"hero-caption",children:"define your way foward"}),Object(o.jsx)("div",{className:"hero-btn",children:Object(o.jsx)("div",{children:"Shop"})})]}),Object(o.jsxs)("div",{className:"new-btn__cover",children:[Object(o.jsxs)("div",{className:"btns",children:[Object(o.jsx)("div",{className:"new-btn__nav",onClick:function(){},children:Object(o.jsx)("ion-icon",{name:"arrow-back-outline"})}),Object(o.jsx)("div",{className:"new-btn__nav",onClick:function(){},children:Object(o.jsx)("ion-icon",{name:"arrow-forward-outline"})})]}),Object(o.jsx)("div",{className:"new-cover",children:Object(o.jsx)("div",{className:"new-item__scroll",children:[1,2,3,4,5,6].map((function(e,n){return Object(o.jsxs)("div",{className:"new-item",children:[Object(o.jsx)("div",{className:"new-item__image",children:Object(o.jsx)("img",{src:h,alt:""})}),Object(o.jsxs)("div",{className:"new-item__details",children:[Object(o.jsxs)("div",{className:"new-item__left",children:[Object(o.jsx)("div",{className:"new-item__name",children:"Nike Air XRPlus"}),Object(o.jsx)("div",{className:"new-item__title",children:"Men's Shoes"})]}),Object(o.jsx)("div",{className:"new-item__right",children:Object(o.jsx)("div",{className:"new-item__price",children:"N23,455.99"})})]})]},n)}))})})]}),Object(o.jsxs)("div",{className:"hero-cover",style:{marginTop:"20px"},children:[Object(o.jsx)("div",{className:"hero-title",children:"Just Sneak IT"}),Object(o.jsx)("div",{className:"hero-caption",children:"define your path"}),Object(o.jsx)("div",{className:"hero-btn",children:Object(o.jsx)("div",{children:"Shop"})})]}),Object(o.jsx)("div",{className:"gallery",children:[1,2,3,4,5,6].map((function(e,n){return Object(o.jsxs)("div",{className:"gallery-item",children:[Object(o.jsx)("div",{className:"gallery-image",children:Object(o.jsx)("div",{style:{width:"80%",height:"80%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)("img",{src:m,alt:"usain shoes"})})}),Object(o.jsxs)("div",{className:"gallery__details",children:[Object(o.jsxs)("div",{className:"gallery__left",children:[Object(o.jsx)("div",{className:"gallery__name",children:"Nike Air XRPlus"}),Object(o.jsx)("div",{className:"gallery__title",children:"Men's Shoes"})]}),Object(o.jsx)("div",{className:"gallery__right",children:Object(o.jsx)("div",{className:"gallery__price",children:"N23,455.99"})})]})]},n)}))})]})]})},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(n){var i=n.getCLS,c=n.getFID,t=n.getFCP,s=n.getLCP,a=n.getTTFB;i(e),c(e),t(e),s(e),a(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shoestores-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/shoestores-pwa","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var c=i.headers.get("content-type");404===i.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):u(n,e)}))}}(),O()},9:function(e,n,i){}},[[12,1,2]]]);
//# sourceMappingURL=main.88c2ba92.chunk.js.map