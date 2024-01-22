define(['exports', 'preact/jsx-runtime', './hooks/UNSAFE_useUser', 'preact/hooks', './utils/UNSAFE_mergeProps', './utils/UNSAFE_classNames', './PRIVATE_Meter', './utils/PRIVATE_meterUtils', './utils/UNSAFE_dvtCommonUtils', './UNSAFE_MeterCircle/themes/MeterCircleStyles.css', './classNames-b19002dd', './UNSAFE_MeterCircle/themes/MeterCircleContract.css', './Common/themes/themeContract.css', './utils-15310d3e', './hooks/PRIVATE_useDvtMeterEvents', './hooks/UNSAFE_useTabbableMode', './hooks/UNSAFE_useComponentTheme', './UNSAFE_MeterCircle/themes/redwood/MeterCircleTheme', './index-ef313fdb', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', 'preact/compat', 'css!./MeterCircleStyles.styles.css', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-db18e245', './index-08fc7a13', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './utils/UNSAFE_arrayUtils', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-a956c8b7', './vanilla-extract-dynamic.esm-737f3b10', './UNSAFE_Floating/themes/FloatingContract.css', './utils/UNSAFE_logger', './_curry1-ac60a4b6', './_curry2-ec75f17a', './UNSAFE_Layer', './useThemeInterpolations-f84f1968', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './UNSAFE_Theme', './utils/UNSAFE_mergeInterpolations', './_curry3-b78b1282', './_has-7afcc05e', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-45498bc0', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles.css', './UNSAFE_MeterCircle/themes/redwood/MeterCircleBaseTheme.css', 'module', './UNSAFE_MeterCircle/themes/redwood/MeterCircleVariants.css', 'css!./MeterCircleVariants.styles2.css'], (function(e,t,s,n,r,o,i,l,a,c,u,h,d,m,f,g,C,S,p,F,A,E,_,R,x,N,U,y,T,M,$,b,k,v,w,P,I,z,V,B,j,O,q,L,D,H,W,K,X,Y,G,J,Q,Z,ee,te,se,ne,re,oe,ie,le,ae,ce,ue,he,de,me,fe,ge,Ce,Se,pe){"use strict";function Fe({color:e,angle:s,radius:n,length:r,section:o="full"}){const i=l.getCenterCoord(o),h=`calc(${100*i.y}% - ((${Math.sin(2*s*Math.PI/360)} * ${n})))`,d=`calc(${100*i.x}%  + ((${Math.cos(2*s*Math.PI/360)} * ${n})))`;return t.jsx("div",{class:u.classNames([c.styles.referenceBaseLineStyle,e?void 0:c.styles.referenceBorderStyle]),style:{left:d,top:h,width:`calc(${r})`,transform:`translate(0, -1px) rotate(${360-s}deg)`,backgroundColor:e?a.getDvtThresholdColor(e):void 0}})}function Ae(e,t){if(!e)return{width:0,height:0,innerRadius:0,outerRadius:0};const s=e.children[0],n=s.getBoundingClientRect();return{width:Math.round(n.width),height:Math.round(n.height),...Ee(s,n,t)}}function Ee(e,t,s){const n=e.clientWidth,r=e.clientHeight;return"bottom"===s||"top"===s?{outerRadius:t.width/2,innerRadius:r}:"left"===s||"right"===s?{outerRadius:t.height/2,innerRadius:n}:{innerRadius:n/2,outerRadius:t.width/2}}function _e(e,t,s,n){return e*n/(s-t)}function Re(e,t,s,n,r,o){return n+(o?1:-1)*_e(e-t,t,s,r)}function xe(e){return e?h.meterCircleVars.sizes[e]:h.meterCircleVars.size}function Ne(e){return e?h.meterCircleVars.trackSizes[e]:h.meterCircleVars.trackSize}function Ue(e,t){return null!=t?`(${xe(e)} * ${t/2})`:`(${xe(e)} * 0.5 - ${Ne(e)})`}function ye(e,t){return null!=t?`(${xe(e)} * ${1-t} / 2)`:Ne(e)}function Te(e,t){return`${ye(e,t)} +  ${m.xUnits(2)}`}function Me(e,t,s,n,r){const{min:o,max:i,startAngle:c,angleExtent:u,size:h,section:d,isRtl:m,innerRadius:f}=e,g=`calc(${ye(h,r)})`,C=[],S=t.filter((e=>e.max>o&&e.max<=i)).sort(((e,t)=>e.max-t.max)),p=S.length;for(let e=0;e<p;e++){const t=S[e],r=0===e?o:S[e-1].max,h=0===e?t.max:t.max-S[e-1].max;let F=Re(r,o,i,c,u,m),A=_e(h,o,i,u);const{startOffset:E,extentOffset:_}=ve(f,u,0===e,t.max===i,m),R=l.getClipPath(F+E,A+_,m,d);if(C.push({clipPath:R,color:a.getDvtThresholdColor(t.color),size:g,section:d}),e===p-1&&t.max<i&&s){F+=(m?1:-1)*A,A=_e(i-t.max,o,i,u);const{startOffset:e,extentOffset:s}=ve(f,u,!1,!0,m);C.push({clipPath:l.getClipPath(F+e,A+s,m,d),color:n,size:g,section:d})}}return C}function $e(e,t,s){const{min:n,max:r,startAngle:o,angleExtent:i,size:l,isRtl:a}=e;return{radius:Ue(l,s),length:Te(l,s),angle:Re(t.value,n,r,o,i,a),color:t.color}}function be(e,t,s,n,r,o){const{startAngle:i,angleExtent:a,size:c,section:u,isRtl:h}=e;return{section:u,color:t?"all"===s&&o?`${d.colorSchemeVars.dvt.contrastLine}`:n:"transparent",clipPath:l.getClipPath(i,a,h,u),size:`calc(${ye(c,r)})`}}function ke(e,t,s){const{value:n,min:r,max:o,startAngle:i,angleExtent:a,size:c,section:u,isRtl:h}=e,d=(n-r)*a/(o-r),m=Math.min(Math.max(0,t),1),f="left"===u||"right"===u,g="top"===u||"bottom"===u,C=`calc(${ye(c,s)} * ${m})`,S=`${xe(c)} - ((1 - ${m}) * ${ye(c,s)})`,p=`(${S}) / 2`;return{section:u,width:f?`calc(${p})`:`calc(${S})`,height:g?`calc(${p})`:`calc(${S})`,size:C,clipPath:l.getClipPath(i,d,h,u)}}function ve(e,t,s,n,r){if(!e)return{startOffset:0,extentOffset:0};const o=360/(2*Math.PI*e);let i=o/2*(r?1:-1),l=-1*o;return s&&t<360&&(i=0,l=-.5*o),n&&t<360&&(l=-.5*o),{startOffset:i,extentOffset:l}}e.MeterCircle=function({max:e=100,min:o=0,value:a=0,step:c=1,size:h,startAngle:d=90,angleExtent:m=360,isTrackRendered:p=!0,thresholdDisplay:F="all",indicatorSize:A=1,...E}){l.validateRange(o,e,a,c);const _=n.useRef(),{direction:R}=s.useUser(),x="rtl"===R,N=l.getCircleSection(d,m,x),U=n.useRef(Ae(null,N)),y=n.useRef(null),[T,M]=n.useState(!1);n.useEffect((()=>{(E.onCommit||E.onInput||E.children)&&(U.current=Ae(y.current,N),M(!0))}),[h,E.onCommit,E.onInput,E.children]);const $=f.usePointerEvents(a,(t=>{const s=y.current;if(t.target==s)return function(e,t,s,n,r,o,i,a,c){const u=r.current;if(!u)return;const h=l.getCenterCoord(a),{angle:d}=l.convertToPolar(u.width*h.x,u.height*h.y,e.offsetX,e.offsetY),m=l.getPositiveAngle(d);let f;if(c&&o+i>m&&(f=l.getPositiveAngle(d-o)/i*(s-t)),!c){const e=l.getPositiveAngle(o-m);e<=i&&(f=e*(s-t)/i)}return null!=f&&(f=Math.round(f/n)*n),f}(t,o,e,c,U,d,m,N,x)}),y,_,E.onCommit,E.onInput),b=f.useKeyboardEvents(a,o,e,c,_,E.onCommit,E.onInput),{datatipContent:k,datatipProps:v}=f.useMeterDatatip(a,E.datatip,E["aria-describedby"]),w=l.getMeterAriaProps(a,o,e,E["aria-label"],E["aria-labelledby"],E.thresholds),P=r.mergeProps($,b,v,w),{trackColor:I,indicatorColor:z}=l.getTrackAndIndicatorColor(a,F,E.trackColor,E.indicatorColor,E.thresholds),V="bottom"===N||"top"===N?"Horizontal":"left"===N||"right"===N?"Vertical":"Full",B={min:o,max:e,value:a,startAngle:d,angleExtent:m,size:h,section:N,isRtl:x,innerRadius:U.current.innerRadius},j=E.onCommit||E.onInput,{classes:O,styles:q}=C.useComponentTheme(S.MeterCircleRedwoodTheme,{size:h,interaction:j?"isInteractive":void 0}),{isTabbable:L}=g.useTabbableMode(),D=function(e,t){const s=e.current;if(!s)return;const n=l.getCenterCoord(t),r=n.x*s.width,o=n.y*s.height;let i,a,c,u,h,d,m,f;return"top"===t||"bottom"===t||"full"===t?(m=2*s.innerRadius,f="full"===t?2*s.innerRadius:s.innerRadius,h=r-s.innerRadius,d="bottom"===t?0:o-s.innerRadius,c=Math.sqrt(2)*s.innerRadius,u="full"===t?c:s.innerRadius/Math.sqrt(2),i=r-s.innerRadius/Math.sqrt(2),a="bottom"===t?0:o-s.innerRadius/Math.sqrt(2)):(f=2*s.innerRadius,m=s.innerRadius,h="left"===t?r-s.innerRadius:0,d=o-s.innerRadius,u=Math.sqrt(2)*s.innerRadius,c=s.innerRadius/Math.sqrt(2),i="left"===t?r-s.innerRadius/Math.sqrt(2):0,a=o-s.innerRadius/Math.sqrt(2)),{outerBounds:{x:h,y:d,width:m,height:f},innerBounds:{x:i,y:a,width:c,height:u}}}(U,N);return t.jsxs(t.Fragment,{children:[t.jsx("div",{class:u.classNames([O]),tabIndex:L?0:-1,...P,children:t.jsxs(i.CircleWrapper,{wrapperRef:y,class:u.classNames([q.circleWrapperBaseStyle,E.referenceLines&&E.referenceLines.length>0?h&&q[`${h}${N}Style`]:"",q[`meterCircle${V}SizeStyle`]]),children:[t.jsx(i.CircleInner,{class:u.classNames([q.circleTrackBaseStyle,q[`${N}Style`]]),...be(B,p,F,I,E.innerRadius,E.thresholds)}),"all"===F&&E.thresholds&&Me(B,E.thresholds,p,I,E.innerRadius).map((e=>t.jsx(i.CircleInner,{class:u.classNames([q.circleTrackBaseStyle,q[`${N}Style`]]),...e}))),t.jsx(i.CircleInner,{color:z,class:u.classNames([q.circleValueBaseStyle,q[`circleValue${N}Style`],q[`${N}Style`]]),...ke(B,A,E.innerRadius)}),E.referenceLines?.map((e=>t.jsx(Fe,{...$e(B,e,E.innerRadius),section:N}))),T&&E.children&&D&&t.jsx("div",{class:u.classNames([q.meterCircleCenterContent]),children:E.children(D)})]})}),k]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_MeterCircle.js.map
