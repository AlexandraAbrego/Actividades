define(['exports', 'preact/hooks', './UNSAFE_useAnimation', '../useAnimation-45498bc0'], (function(n,i,t,e){"use strict";n.useAnimationStatus=function({isOpen:n,isAnimatedOnMount:t,animationStates:s,onTransitionEnd:a}){const[u,o]=i.useState(n?"initial":"unmounted"),l=i.useRef(null),[m,c]=i.useState(null),{nodeRef:d}=e.useAnimation(u,{animationStates:s,isAnimatedOnMount:t,onAnimationEnd:i.useCallback((()=>{"opening"===u?a?.(!0):n||(Object.assign(m.style,{visibility:null}),o("unmounted"),a?.(!1))}),[u,n,a,m])}),r=i.useCallback((n=>{l.current!==n&&(l.current=n,null!=n&&"initial"==u&&Object.assign(n.style,{visibility:"hidden"}),d(n),c(n))}),[u,d]);return i.useEffect((()=>{("unmounted"!==u||n)&&("unmounted"===u&&n?o("initial"):"initial"===u&&n?o("opening"):"opening"===u&&n?Object.assign(m.style,{visibility:"visible"}):n||o("closing"))}),[n,m,u]),{status:u,animationElementRef:l,setAnimationElementRef:r}},Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_useAnimationStatus.js.map
