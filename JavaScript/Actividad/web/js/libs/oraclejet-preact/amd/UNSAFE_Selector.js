define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_classNames', './utils/UNSAFE_keys', './hooks/PRIVATE_useSelection', './hooks/UNSAFE_useTabbableMode', './PRIVATE_ThemedIcons/CheckboxOffIcon', './PRIVATE_ThemedIcons/CheckboxOnIcon', './PRIVATE_ThemedIcons/CheckboxMixedIcon', './UNSAFE_Flex', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useInteractionStyle', './UNSAFE_Selector/themes/SelectorStyles.css', './UNSAFE_Radio/themes/redwood/RadioIconTheme', './classNames-b19002dd', './PRIVATE_Icons/CheckboxMixed', './PRIVATE_Icons/CheckboxOn', './PRIVATE_Icons/CheckboxOff', './Flex-efac04c8', 'preact/hooks', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useUser', './index-ef313fdb', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './utils/PRIVATE_collectionUtils', './utils/PRIVATE_clientHints', './clientHints-c6bd5473', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-15310d3e', './_curry1-ac60a4b6', './utils/UNSAFE_mergeInterpolations', './_curry3-b78b1282', './_curry2-ec75f17a', './_has-7afcc05e', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-9056497f', './utils/UNSAFE_interpolations/flexbox', './flexbox-24902623', './utils/UNSAFE_interpolations/flexitem', './flexitem-c04ece48', './utils/UNSAFE_logger', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', 'css!./SelectorStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-a956c8b7', './UNSAFE_Radio/themes/RadioIconStyles.css', 'css!./RadioIconStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconVariants.css', 'css!./RadioIconVariants.styles.css', './UNSAFE_Icon', './Icon-a3f88841', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-db18e245', './index-08fc7a13', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-737f3b10', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-f84f1968', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-45498bc0', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles.css', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css'], (function(e,s,o,t,i,l,n,c,a,h,r,d,S,m,F,A,_,u,E,U,N,k,T,x,y,b,I,p,C,f,g,R,P,V,w,v,j,O,M,B,H,K,z,L,q,D,G,J,Q,W,X,Y,Z,$,ee,se,oe,te,ie,le,ne,ce,ae,he,re,de,Se,me,Fe,Ae,_e,ue,Ee,Ue,Ne,ke,Te,xe,ye,be,Ie,pe,Ce,fe,ge,Re,Pe,Ve,we,ve,je,Oe,Me,Be,He,Ke,ze,Le){"use strict";function qe(e){const{isTabbable:o}=l.useTabbableMode(),{interactionProps:t,applyActiveStyle:i}=d.useInteractionStyle(),{classes:n}=r.useComponentTheme(m.RadioIconRedwoodTheme,{iconSize:"4xUnits"}),c=S.multiVariantStyles({checked:e.checked?e.isPartial?"isPartiallyChecked":"isChecked":"notChecked",active:i?"isActive":"notActive"}),a=F.classNames([n,S.styles.checkbox,c]),h=e.checked?e.isPartial?"mixed":"true":"false";return s.jsx("div",{...t,class:a,tabIndex:o?0:-1,role:"checkbox","aria-label":e["aria-label"],"aria-checked":h,onClick:e.onClick,children:e.checked?e.isPartial?s.jsx(A.CheckboxMixed,{}):s.jsx(_.CheckboxOn,{}):s.jsx(u.CheckboxOff,{})})}const De=e=>{e.stopPropagation()},Ge=e=>{const s=e.onClick;return s?(e.onClick=e=>{s(e),De(e)},e):{onClick:De}};e.Checkbox=qe,e.Selector=function({"aria-label":e,rowKey:o,selectedKeys:l,isPartial:n,selectionMode:c="multiple",onChange:a}){const{selectionProps:h}=i.useSelection((()=>o),l,c,!1,"toggle",!1,a);return s.jsx("div",{class:S.styles.container,...Ge(h),children:s.jsx("div",{class:S.styles.base,children:s.jsx(E.Flex,{align:"center",justify:"center",width:"11x",height:"11x",children:s.jsx(qe,{checked:t.containsKey(l,o),"aria-label":e,isPartial:n})})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Selector.js.map
