define(['exports', './UNSAFE_keys', './PRIVATE_clientHints', '../clientHints-c6bd5473'], (function(e,t,n,r){"use strict";const l=e=>"number"===e.dataset.ojKeyType?Number(e.dataset.ojKey):e.dataset.ojKey,i=(e,t)=>{if(e){const n=e.querySelector(t);if(n){return l(n)}}return null},u=(e,t,n)=>{if(e){const r=e.querySelectorAll(n);for(let e=0;e<r.length;e++){if(t==l(r[e]))return r[e]}}return null};e.findElementByKey=u,e.getFirstVisibleKey=i,e.getPrevNextKey=(e,n,r,o)=>()=>{if(t.isKeyDefined(n)&&e){const t=u(e,n,o);if(t){const e=r?t.previousElementSibling:t.nextElementSibling;if(e){const t=l(e);if(null!=t)return t}return null}return i(e,o)}return null},e.getPrevNextKeyByCount=(e,t,n,r=0)=>{if(e&&null!=n){const l=e.findIndex((e=>t(e)===n))+r;return 0<=l&&l<e.length?t(e[l]):null}return null},e.getViewportConfig=(e,t)=>t??{scroller:()=>e.current},e.handleSelectionRange=(e,t,n)=>{const r=t.map((e=>n(e))),l=r.indexOf(e.value.start),i=r.indexOf(e.value.end),u=Math.min(l,i),o=Math.max(l,i);return-1===u?{offset:0,count:-1}:r.slice(u,o+1)},e.isMobile=function(){const e=r.getClientHints().deviceType;return"phone"===e||"tablet"===e},e.keyExtractor=(e,t)=>{const n=e.closest(t);if(n){const e=l(n);return void 0===e?null:e}return null},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_collectionUtils.js.map