!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=3)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=l(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:p(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function v(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,y=0;function p(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r,o=document.querySelector("#add-form"),i=document.querySelector("#new-list"),a=document.querySelector("#playlistMenu"),l=document.querySelector(".overlay"),c=o.querySelector(".add-form__input"),s=o.querySelector(".add-form"),u=document.querySelector("body"),d=a.querySelectorAll(".playlistItem"),f=function(e){e.preventDefault(),h(o),m(),s.classList.add("add-form_animation"),o.classList.add("overlay_visible"),setTimeout((function(){c.focus(),c.selectionStart=c.value.length}),0)},v=function(){u.style.overflow="",s.classList.remove("add-form_animation"),o.classList.remove("overlay_visible")},m=function(){l.classList.remove("overlay_visible"),a.classList.remove("playlistMenu_visible"),a.classList.remove("playlistMenu_animation")},y=function(){u.style.overflow="",alert("trackId ".concat(r," and Playlist titlt - ").concat(c.value)),v()},p=function(){d.forEach((function(e){"new-list"!=e.id&&e.addEventListener("click",b)}))},b=function(e){e.preventDefault(),alert("trackId ".concat(r," and Playlist id - ").concat(this.dataset.playlistId)),m()},h=function(e){console.log("asd");var t=e.querySelectorAll('a[href], input:not([disabled]), button:not([disabled]), [tabindex="0"]'),n=(t=Array.prototype.slice.call(t))[0],r=t[t.length-1];e.addEventListener("keydown",(function(e){27===e.keyCode&&(v(),m()),9===e.keyCode&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus()))}))},g=function(){p(),r=this.dataset.songId,u.style.overflow="hidden",l.classList.add("overlay_visible"),a.classList.add("playlistMenu_animation"),setTimeout((function(){i.focus()}),1e3),h(a),i.addEventListener("click",f),l.addEventListener("click",(function(e){e.target===l&&(m(),u.style.overflow="")})),document.getElementById("cancel").addEventListener("click",v),document.getElementById("send").addEventListener("click",y)},S=document.querySelector(".add-more-btn");S&&S.addEventListener("click",g)}]);