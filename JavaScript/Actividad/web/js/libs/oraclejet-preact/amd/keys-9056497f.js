define(['exports', './_curry1-ac60a4b6', './_has-7afcc05e'], (function(t,r,e){"use strict";var n=e._has_1,o=Object.prototype.toString,u=function(){return"[object Arguments]"===o.call(arguments)?function(t){return"[object Arguments]"===o.call(t)}:function(t){return n("callee",t)}}(),c=u,i=r._curry1_1,f=e._has_1,l=c,a=!{toString:null}.propertyIsEnumerable("toString"),s=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],g=function(){return arguments.propertyIsEnumerable("length")}(),p=function(t,r){for(var e=0;e<t.length;){if(t[e]===r)return!0;e+=1}return!1},y="function"!=typeof Object.keys||g?i((function(t){if(Object(t)!==t)return[];var r,e,n=[],o=g&&l(t);for(r in t)!f(r,t)||o&&"length"===r||(n[n.length]=r);if(a)for(e=s.length-1;e>=0;)f(r=s[e],t)&&!p(n,r)&&(n[n.length]=r),e-=1;return n})):i((function(t){return Object(t)!==t?[]:Object.keys(t)}));t.keys_1=y}));
//# sourceMappingURL=keys-9056497f.js.map
