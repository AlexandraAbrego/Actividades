define(['exports', 'css!./boxalignment.css', '../../keys-9056497f', '../UNSAFE_size', '../UNSAFE_arrayUtils', '../../_curry1-ac60a4b6', '../../_has-7afcc05e', '../../UNSAFE_Theme', '../../utils-15310d3e', '../../Common/themes/themeContract.css'], (function(e,t,i,n,s,a,r,o,c,l){"use strict";const _={baseline:"_1ptn2nz",center:"fuhw49",end:"_1cik1ro",start:"dcdpad",inherit:"n9zm0j",initial:"_89a03o",stretch:"_9ivknl"},u={center:"_17xjpqf",end:"_191v4ou",start:"_1vxgrfq",inherit:"_31d0u4",initial:"_107ka1u",around:"wdt1o4",between:"et31n3",evenly:"lw4t86"},d={align:({align:e})=>void 0===e?{}:{class:_[e]},justify:({justify:e})=>void 0===e?{}:{class:u[e]},gap:({gap:e})=>{if(void 0===e)return{};{const[t,i=t]=s.coerceArray(e);return{gap:`${n.sizeToCSS(t)} ${n.sizeToCSS(i)}`}}}},f=i.keys_1(_),y=i.keys_1(u);e.aligns=f,e.boxAlignmentInterpolations=d,e.justifies=y,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=boxalignment.js.map