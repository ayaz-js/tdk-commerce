(()=>{var o={815:(o,t)=>{function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e(o)}!function(){"use strict";function l(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===o.__forceSmoothScrollPolyfill__){var l,r=o.HTMLElement||o.Element,n={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},i=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):n.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!==e(arguments[0])?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?n.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!==e(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==e(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var e=d(this),l=e.getBoundingClientRect(),r=this.getBoundingClientRect();e!==t.body?(h.call(this,e,e.scrollLeft+r.left-l.left,e.scrollTop+r.top-l.top),"fixed"!==o.getComputedStyle(e).position&&o.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!==e(o)||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"===e(o)&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function u(t,e){var l=o.getComputedStyle(t,null)["overflow"+e];return"auto"===l||"scroll"===l}function p(o){var t=a(o,"Y")&&u(o,"Y"),e=a(o,"X")&&u(o,"X");return t||e}function d(o){for(;o!==t.body&&!1===p(o);)o=o.parentNode||o.host;return o}function v(t){var e,l,r,n,c=(i()-t.startTime)/468;n=c=c>1?1:c,e=.5*(1-Math.cos(Math.PI*n)),l=t.startX+(t.x-t.startX)*e,r=t.startY+(t.y-t.startY)*e,t.method.call(t.scrollable,l,r),l===t.x&&r===t.y||o.requestAnimationFrame(v.bind(o,t))}function h(e,l,r){var c,f,a,u,p=i();e===t.body?(c=o,f=o.scrollX||o.pageXOffset,a=o.scrollY||o.pageYOffset,u=n.scroll):(c=e,f=e.scrollLeft,a=e.scrollTop,u=s),v({scrollable:c,method:u,startTime:p,startX:f,startY:a,x:l,y:r})}}"object"===e(t)?o.exports={polyfill:l}:l()}()}},t={};function e(l){var r=t[l];if(void 0!==r)return r.exports;var n=t[l]={exports:{}};return o[l](n,n.exports,e),n.exports}(()=>{"use strict";e(815);var o=document.querySelector(".menu__mobile"),t=document.querySelector(".menu__container"),l=document.querySelector(".menu__list"),r=document.querySelector(".menu__overlay"),n=document.querySelectorAll(".menu__link");function i(){t.classList.remove("menu__container_opened")}o.addEventListener("click",(function(){t.classList.add("menu__container_opened")})),l.addEventListener("click",(function(o){var t=o.target;t&&t.classList.contains("menu__link")&&i()})),r.addEventListener("click",i),n.forEach((function(o){o.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(o.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})}))}))})()})();