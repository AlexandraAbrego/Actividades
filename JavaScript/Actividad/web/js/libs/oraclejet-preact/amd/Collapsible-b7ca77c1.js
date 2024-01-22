define(['exports', 'preact/jsx-runtime', 'preact/hooks', './hooks/UNSAFE_useId', 'preact', './utils/UNSAFE_classNames', './hooks/UNSAFE_useComponentTheme', './UNSAFE_Flex', './UNSAFE_Divider', './PRIVATE_ThemedIcons/ExpandIcon', './PRIVATE_ThemedIcons/CollapseIcon', './PRIVATE_ThemedIcons/CollapseUpIcon', './index-138388c6', './index-1e210279', './hooks/UNSAFE_usePress', './UNSAFE_Collapsible/themes/redwood/CollapsibleTheme', './classNames-b19002dd', './Flex-efac04c8', './Divider-b360e23b', './hooks/UNSAFE_useAnimation', './useAnimation-45498bc0'], (function(e,n,s,i,a,o,t,l,d,r,c,u,h,b,p,x,m,g,v,E,S){"use strict";const C=({isExpanded:e,isDisabled:s,iconPosition:i})=>{const a=s?"disabled":"primary",o="start"===i&&e?h.SvgChevronDown:c.CollapseIcon,t="end"===i&&e?b.SvgChevronUp:h.SvgChevronDown,l="start"===i?o:t;return n.jsx(l,{size:"6x",color:a})},j=({children:e,id:i,contentId:o,isDisabled:l,isExpanded:d,iconPosition:r,variant:c="basic",toggleHandler:u,accessibleLabel:h,accessibleLabelId:b})=>{const[E,S]=s.useState(!1),j=s.useRef(!1),{classes:I,styles:f}=t.useComponentTheme(x.CollapsibleRedwoodTheme,{disabled:l?"isDisabled":"notDisabled",divider:"horizontal-rule"===c?"hasDivider":"noDivider",focused:E?"isFocused":"notFocused"}),F=m.classNames([f.headerChildrenStyle,"end"===r&&f.iconEndStyle,"start"===r&&f.iconStartStyle]),D=s.useCallback((e=>{if(u(e.target),E){(window&&"PointerEvent"in window&&e instanceof PointerEvent||e instanceof MouseEvent)&&S(!1)}}),[u]),{pressProps:N}=p.usePress(D,{isDisabled:l,isRepeat:!1}),T=s.useCallback((e=>{"focusin"!==e.type||j.current?S(!1):S(!0)}),[]),y=()=>{j.current=!0},A=()=>{j.current=!1},P=h?{"aria-label":h}:b?{"aria-labelledby":b}:{"aria-labelledby":i};return n.jsxs(n.Fragment,{children:[n.jsx("div",{id:i,className:I,...N,children:n.jsx(g.Flex,{align:"center",justify:"start"===r?"start":"between",children:n.jsxs(a.Fragment,{children:["end"===r&&n.jsx("div",{className:F,children:e}),n.jsx("div",{tabIndex:0,role:"button","aria-controls":o,"aria-expanded":d,onFocus:T,onBlur:T,onMouseDown:y,onMouseUp:A,className:f.chevronStyle,...P,children:n.jsx(C,{iconPosition:r,isExpanded:d,isDisabled:l})}),"start"===r&&n.jsx("div",{className:F,children:e})]})})}),"horizontal-rule"===c&&n.jsx(v.Divider,{})]})},I=({children:e,id:i,isExpanded:a,onTransitionEnd:o})=>{const[l,d]=s.useState(a?"expanding":"unmounted"),{styles:r}=t.useComponentTheme(x.CollapsibleRedwoodTheme),c=s.useRef({overflowY:"hidden",maxHeight:a?"none":"0"});s.useEffect((()=>{("unmounted"!==l||a)&&d(a?"expanding":"collapsing")}),[a,l]);const{nodeRef:u}=S.useAnimation(l,{animationStates:f,onAnimationEnd:({animationState:e})=>{"collapsing"===e&&d("unmounted"),o?.()}});return n.jsx("div",{className:r.contentChildrenStyle,ref:u,id:i,tabIndex:-1,style:c.current,"aria-hidden":!a||void 0,children:"unmounted"!==l&&e})},f={expanding:e=>({to:{maxHeight:`${e.scrollHeight}px`},options:{duration:400},end:{maxHeight:"none"}}),collapsing:e=>({..."none"===e.style.maxHeight&&{from:{maxHeight:`${e.scrollHeight}px`}},to:{maxHeight:"0"},options:{duration:400}})};e.Collapsible=({header:e,children:a,isDisabled:o=!1,isExpanded:t=!1,iconPosition:l="start",variant:d="basic",onToggle:r,onTransitionEnd:c,"aria-label":u,"aria-labelledby":h})=>{const b=i.useId(),p=`oj-collapsible-header-${b}`,x=`oj-collapsible-content-${b}`,m=s.useCallback((e=>{o||r?.({value:!t,target:e})}),[o,r,t]),g=s.useCallback((()=>{c?.({value:t})}),[c,t]);return n.jsxs(n.Fragment,{children:[n.jsx(j,{id:p,contentId:x,toggleHandler:m,isDisabled:o,isExpanded:t,iconPosition:l,variant:d,accessibleLabel:u,accessibleLabelId:h,children:e}),n.jsx(I,{id:x,isExpanded:t,onTransitionEnd:g,children:a})]})}}));
//# sourceMappingURL=Collapsible-b7ca77c1.js.map