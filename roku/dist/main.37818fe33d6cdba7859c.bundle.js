(()=>{var t={517:()=>{function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function o(t){var n="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return i(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function i(t,n,e){return(i=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(y,t);var o,i,l,f,s,p=(o=y,i=c(),function(){var t,n=a(o);if(i){var e=a(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return r(this,t)});function y(){return n(this,y),p.apply(this,arguments)}return l=y,(f=[{key:"connectedCallback",value:function(){this.title=this.getAttribute("title")||null,this.description=this.getAttribute("description")||null,this.buttonCaption=this.getAttribute("button-caption")||null,this.render()}},{key:"render",value:function(){this.innerHTML='<div class="hero-container">\n        <h2 tabindex = "6">'.concat(this.title,'</h2>\n        <h3 tabindex = "7">').concat(this.description,'</h3>\n        <button aria-label="Tombol Download" tabindex = "8">').concat(this.buttonCaption,"</button>\n        </div>")}}])&&e(l.prototype,f),s&&e(l,s),y}(o(HTMLElement));customElements.define("hero-container",l)},165:()=>{function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function o(t){var n="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return i(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function i(t,n,e){return(i=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(y,t);var o,i,l,f,s,p=(o=y,i=c(),function(){var t,n=a(o);if(i){var e=a(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return r(this,t)});function y(){return n(this,y),p.apply(this,arguments)}return l=y,(f=[{key:"navbarLink",set:function(t){this._navbarLink=t,this.render()}},{key:"render",value:function(){this.innerHTML=" <li class ='hover-underline-animation'>\n            <a tabindex = \"".concat(this._navbarLink.tabindex,'" href = "').concat(this._navbarLink.href,'"> ').concat(this._navbarLink.caption," </a>\n          </li>\n        ")}}])&&e(l.prototype,f),s&&e(l,s),y}(o(HTMLElement));customElements.define("navbar-item",l)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}(()=>{"use strict";e(165);function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(y,t);var e,i,c,f,s,p=(e=y,i=u(),function(){var t,n=l(e);if(i){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return o(this,t)});function y(){return n(this,y),p.apply(this,arguments)}return c=y,(f=[{key:"navbarLinks",set:function(t){console.log("set"),this._navbarLinks=t,this.render()}},{key:"render",value:function(){var t=this;this._navbarLinks.forEach((function(n){var e=document.createElement("navbar-item");e.navbarLink=n,t.appendChild(e)}));var n='\n        <div class = "logo">\n            <h1 tabindex = "1">ROKU</h1>\n        </div> \n            <ul class = \'nav-links\'>\n                '.concat(this.innerHTML,'\n            </ul>\n        <div class="burger" tabindex = "2" aria-label="Menuju Navigasi">\n            <div class="line1"></div>\n            <div class="line2"></div>\n            <div class="line3"></div>\n        </div>\n        ');this.innerHTML=n}}])&&r(c.prototype,f),s&&r(c,s),y}(i(HTMLElement));customElements.define("navbar-list",f);e(517);var s,p,y;!function(t){var n=document.getElementById("nav-container"),e=document.createElement("navbar-list");e.navbarLinks=t,console.log(e),n.appendChild(e)}([{id:1,href:"#home",caption:"Home",tabindex:3},{id:2,href:"#",caption:"Favorites",tabindex:4},{id:3,href:"https://github.com/adityanegara",caption:"About",tabindex:5}]),s=document.querySelector(".burger"),p=document.querySelector(".nav-links"),y=document.querySelectorAll(".nav-links li"),s.addEventListener("focus",(function(){p.classList.toggle("nav-active"),y.forEach((function(t,n){t.style.animation?t.style.animation="":t.style.animation="navLinkFade 0.5s ease forwards ".concat(n/7+.5,"s")})),s.classList.toggle("toggle")})),s.addEventListener("click",(function(){p.classList.toggle("nav-active"),y.forEach((function(t,n){t.style.animation?t.style.animation="":t.style.animation="navLinkFade 0.5s ease forwards ".concat(n/7+.5,"s")})),s.classList.toggle("toggle")}))})()})();