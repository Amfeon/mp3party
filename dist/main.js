!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=3)}([function(e,t,n){var i=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},s=(i(a,r),a.locals?a.locals:{});e.exports=s},function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function o(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],a=0;a<e.length;a++){var r=e[a],c=t.base?r[0]+t.base:r[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=o(d),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(m)):s.push({identifier:d,updater:h(m,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var r=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,p=0;function h(e,t){var n,i,a;if(t.singleton){var r=p++;n=v||(v=l(t)),i=m.bind(null,n,r,!1),a=m.bind(null,n,r,!0)}else n=l(t),i=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=o(n[i]);s[a].references--}for(var r=c(e,t),l=0;l<n.length;l++){var d=o(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playlistMass=[{title:"В дальнюю дорогу",id:2,trackCount:10},{title:"Для пробежки",id:2,trackCount:10}],this.trackMass=[{id:"10",title:"НАзвание трека",author:"автор трека",logo:"images/Art.png",bitrate:"320",size:"2.7",time:"3:10"},{id:"11",title:"НАзвание трека2",author:"автор трека2",logo:"images/Art.png",bitrate:"320",size:"2.5",time:"2:10"}],this.addForm=document.querySelector("#add-form"),this.addForm.querySelector("#cancel").addEventListener("click",this.cancelAddForm.bind(this)),this.addForm.querySelector("#send").addEventListener("click",this.submitNewPlayList.bind(this)),document.querySelector(".header__icon").addEventListener("click",this.addNewPlaylist.bind(this)),this.playlistBody=document.querySelector("#playlist-body"),this.playlist=document.querySelectorAll(".other-playlist-item"),this.playlist.forEach((function(e){console.log(e),e.addEventListener("click",t.renderTracks.bind(t))}))}var t,n,a;return t=e,(n=[{key:"addNewPlaylist",value:function(){this.addForm.classList.add("add-to-playlist_visible");var e=this.addForm.querySelector("input");e.focus(),e.selectionStart=e.value.length}},{key:"cancelAddForm",value:function(){this.addForm.classList.remove("add-to-playlist_visible")}},{key:"submitNewPlayList",value:function(){var e={title:this.addForm.querySelector("input").value,id:10,trackCount:1};this.playlistMass.push(e),this.cancelAddForm(),this.renderPlaylist()}},{key:"renderTracks",value:function(){console.log(this),this.playlistBody.innerHTML="";for(var e=0;e<this.trackMass.length;e++){var t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("img"),a=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div");t.dataset.songId=this.trackMass[e].id,t.classList.add("track-item"),n.classList.add("track__logo"),a.classList.add("track-body"),r.classList.add("track__title"),s.classList.add("track__author"),o.classList.add("track-info"),c.classList.add("track__time"),l.classList.add("track__size"),d.classList.add("track__bitrate"),c.innerHTML=this.trackMass[e].time,l.innerHTML="".concat(this.trackMass[e].size," Мб"),d.innerHTML="".concat(this.trackMass[e].bitrate," Кб/с"),o.append(c,l,d),i.setAttribute("src",this.trackMass[e].logo),r.innerHTML=this.trackMass[e].title,s.innerHTML=this.trackMass[e].author,a.append(r,s,o),n.append(i),t.append(n,a),this.playlistBody.append(t)}}},{key:"renderPlaylist",value:function(){var e=document.querySelector(".other-playlist");e.innerHTML="";for(var t=0;t<this.playlistMass.length;t++){var n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div");n.classList.add("other-playlist-item"),i.classList.add("item__icon"),a.classList.add("item__body"),r.classList.add("item__title"),s.classList.add("item__count"),n.addEventListener("click",this.renderTracks.bind(this)),r.innerText=this.playlistMass[t].title,s.innerText=this.playlistMass[t].trackCount,a.append(r,s),n.append(i,a),e.append(n)}}}])&&i(t.prototype,n),a&&i(t,a),e}());var a,r=document.querySelector(".add-to-playlist"),s=document.querySelector("#add-form"),o=document.querySelector("#new-list"),c=s.querySelector("input"),l=document.querySelector(".playlist__list"),d=document.querySelector("#favorit_item");d.addEventListener("click",p);var u=[{title:"Избранное",id:1,trackCount:10},{title:"Для пробежки",id:2,trackCount:10}],m=function(){r.classList.remove("add-to-playlist_visible"),s.classList.add("add-to-playlist_visible"),c.focus(),c.selectionStart=c.value.length},f=function(){s.classList.remove("add-to-playlist_visible")},v=function(){var e={title:c.value,id:10,trackCount:1};u.push(e),console.log(e,u),f()},p=function(){var e=this.dataset.playlistId;u.forEach((function(t,n){t.id==e&&(t.trackCount=t.trackCount+1)})),r.classList.remove("add-to-playlist_visible")},h=function(){l.innerHTML="",l.append(d);for(var e=1;e<u.length;e++){var t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");t.classList.add("playlist__item"),n.classList.add("item__icon"),i.classList.add("item__text"),a.classList.add("item__count"),t.dataset.playlistId=u[e].id,t.addEventListener("click",p),n.innerHTML='<i class="fa fa-heart-o" aria-hidden="true"></i>',i.innerText=u[e].title,a.innerText=u[e].trackCount,t.append(n,i,a),l.append(t)}},y=function(){this.dataset.songId&&(a=this.dataset.songId),r.classList.add("add-to-playlist_visible"),o.addEventListener("click",m),h(a),r.addEventListener("click",(function(e){e.target===r&&r.classList.remove("add-to-playlist_visible")})),document.getElementById("cancel").addEventListener("click",f),document.getElementById("send").addEventListener("click",v)};document.querySelector(".add-favorites-btn").addEventListener("click",y)}]);