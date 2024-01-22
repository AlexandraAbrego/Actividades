define(['exports', 'preact/jsx-runtime', 'preact/hooks', './PRIVATE_Collection', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useViewportIntersect', './Collection-fff87b50'], (function(e,t,o,n,r,i,c){"use strict";r.stringLiteralArray(["topPlaceholder","bottomPlaceholder"]);const l="oj-collection-placeholder",s=({context:e,placeholderHeight:o})=>{const{fromIndex:n,toIndex:r,which:i,estimateItemSize:c}=e;let s=0;if(o)s=o(e);else{const e=0===c?48:c;s=Math.max(0,r-n)*e}const a="topPlaceholder"===i?"_topPlaceholder":"_bottomPlaceholder",d={height:s+"px"};return 0===s&&(d.display="none"),t.jsx("div",{className:l,style:d},a)};function a(e){return function({itemSize:t,viewportHeight:o,scrollOffset:n,overscan:r=0}){if(void 0===t||0===t||void 0===o||void 0===n)return{offset:0,count:e};const i=Math.ceil(n/t),c=Math.ceil(o/t);return{offset:Math.max(0,i-r),count:c+r*(i>0?2:1)}}}const d=(e,t,o,n,r)=>{let i,c;if(e&&t){const o=t.getBoundingClientRect(),n=(e=>{let t,o;if(e===document.documentElement)t=0,o=document.documentElement.clientHeight;else{const n=e.getBoundingClientRect();t=n.top,o=n.bottom}return{top:t,bottom:o}})(e);o&&n&&(i=n.top-o.top-1,c=n.bottom-n.top+1)}if(void 0!==i&&void 0!==c){return n({scrollOffset:i,viewportHeight:c,overscan:o,itemSize:r})}return null},u=`.oj-collection-loadmore, .${l}`,h=a(25);e.PLACEHOLDER_STYLE_CLASS=l,e.VirtualizedCollection=function({data:e,children:n,viewportConfig:r,itemSelector:l,placeholderHeight:a,rangeExtractor:f=h,overscan:m=1,onLoadRange:g,loadMoreIndicator:p,suggestions:x}){const v=o.useRef(null),S=o.useRef(0);if(i.useViewportIntersect(r,1,0,u,(()=>{const e=d(r.scroller(),v.current,m,f,S.current??0);e&&g(e)})),o.useEffect((()=>{if(0===S.current){let e=0;const t=v.current.querySelectorAll(l);t.length>0&&(t.forEach((t=>{e+=t.offsetHeight})),S.current=e/t.length)}})),!(e&&(I=e,I&&I.data&&I.offset>=0&&I.totalSize>=0)))return t.jsx("div",{ref:v});var I;const E=e.data,z=e.offset,P=z+E.length,j=e.totalSize,w=z>=0?{fromIndex:0,toIndex:z,which:"topPlaceholder",estimateItemSize:S.current??0}:void 0,C=P&&P<=j?{fromIndex:P,toIndex:j,which:"bottomPlaceholder",estimateItemSize:S.current??0}:void 0,H=p&&"atLeast"===e.sizePrecision&&P<=j;return t.jsxs("div",{ref:v,style:"will-change: contents",children:[x,w&&t.jsx(s,{context:w,placeholderHeight:a}),t.jsx(c.Collection,{items:E,children:(R=z,e=>{const t={index:R+e.index,data:e.data};return n(t)})}),C&&t.jsx(s,{context:C,placeholderHeight:a}),H&&p]});var R},e.getVirtualizedRangeExtractor=a}));
//# sourceMappingURL=VirtualizedCollection-e41dbdce.js.map
