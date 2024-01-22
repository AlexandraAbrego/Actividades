define(['exports', './ReadonlyTextFieldInput-2cbf05ea', 'preact/jsx-runtime', './hooks/UNSAFE_useFormContext', './UNSAFE_LabelValueLayout', './utils/UNSAFE_classNames', './hooks/UNSAFE_useFormFieldContext', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useInputGroupContext', './hooks/UNSAFE_useUser', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './classNames-b19002dd', './UNSAFE_Flex', './Flex-efac04c8', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './TextFieldInput-06f5b95f', 'preact', './hooks/UNSAFE_useDebounce', './hooks/UNSAFE_useTranslationBundle', './UNSAFE_LiveRegion', './hooks/UNSAFE_useAccessibleContext', 'preact/hooks', './hooks/UNSAFE_useTabbableMode', './utils/UNSAFE_interpolations/text', 'module', './index-4eb1409c', './utils/UNSAFE_mergeInterpolations', './_curry1-ac60a4b6', './_curry3-b78b1282', './_curry2-ec75f17a', './_has-7afcc05e', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldInputStyles.css', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-a956c8b7', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-15310d3e', './Common/themes/themeContract.css', 'css!./LabelValueLayoutStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioTheme', './UNSAFE_Radio/themes/RadioStyles.css', 'css!./RadioStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioVariants.css', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_arrayUtils', './utils/UNSAFE_interpolations/boxalignment', './keys-9056497f', './utils/UNSAFE_interpolations/flexbox', './flexbox-24902623', './utils/UNSAFE_interpolations/flexitem', './flexitem-c04ece48', './utils/UNSAFE_logger', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', 'module', './index-ef313fdb', './Common', './Common/themes', './Common/themes/redwood/theme', 'preact/compat', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles.css', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './hooks/UNSAFE_useTextFieldInputHandlers', './utils/PRIVATE_clientHints', './clientHints-c6bd5473', './utils/UNSAFE_mergeProps', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css'], (function(e,s,t,o,n,a,i,l,d,r,m,u,h,c,F,x,T,S,y,b,p,N,E,A,L,U,_,C,R,g,w,I,f,v,j,V,k,M,B,G,D,W,z,H,P,Z,K,O,$,X,q,J,Q,Y,ee,se,te,oe,ne,ae,ie,le,de,re,me,ue,he,ce,Fe,xe,Te,Se,ye,be,pe,Ne,Ee,Ae,Le,Ue,_e,Ce,Re,ge,we,Ie,fe,ve,je,Ve,ke,Me,Be,Ge,De,We){"use strict";const ze=({outerClassNames:e,innerClassNames:s,label:o,labelEdge:a,labelStartWidth:i,compactUserAssistance:l,inlineUserAssistance:d,children:r,...m})=>t.jsxs("div",{...m,class:e,children:[l,t.jsx(n.LabelValueLayout,{label:o,labelEdge:a,labelStartWidth:i,children:t.jsx("div",{class:s,children:r})}),d]}),He=({outerClassNames:e,innerClassNames:s,compactUserAssistance:o,inlineUserAssistance:n,children:a,...i})=>t.jsxs("div",{...i,class:e,children:[o,t.jsx("div",{class:s,children:a}),n]}),Pe=({contentVariant:e="input",insideLabel:s,mainContent:o,startContent:n,statusVariant:a="none",styleVariant:u="default",endContent:h,resize:c,rootRef:x,hasZeroStartMargin:S})=>{const{isDisabled:y,isFocused:b,isLoading:p}=i.useFormFieldContext(),{direction:N}=r.useUser(),E="ltr"===N,A=void 0!==s,L=d.useInputGroupContext(),U=null!==L,_=L?L.last?E?"groupRight":"groupLeft":0===L.index?E?"groupLeft":"groupRight":"groupMiddle":void 0,{variantClasses:C,styles:{textFieldContainerBase:R}}=l.useComponentTheme(m.TextFieldRedwoodTheme,{statusVariant:a,styleVariant:u,contentVariant:e,insideLabel:A?"hasInsideLabel":"noInsideLabel",focused:b?"isFocused":"notFocused",disabled:y?"isDisabled":"notDisabled",loading:p?"isLoading":"notLoading",resize:c??"none",withinGroup:U?"isWithinGroup":void 0,inputGroupPosition:_}),{variantClasses:g}=l.useComponentTheme(m.TextFieldRedwoodTheme,{startContent:A?"hasInsideLabel":"noInsideLabel",startContentMargin:S?"noStartMargin":"hasStartMargin",startContentDisabled:y?"isDisabled":"notDisabled"}),{variantClasses:w}=l.useComponentTheme(m.TextFieldRedwoodTheme,{middleContent:e}),{variantClasses:I}=l.useComponentTheme(m.TextFieldRedwoodTheme,{endContent:A?"hasInsideLabel":"noInsideLabel"});return t.jsxs("div",{role:"presentation",class:F.classNames([C,R]),ref:x,children:[n&&t.jsx("span",{class:g,children:t.jsx(T.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:n})}),t.jsxs("div",{class:w,children:[s,o]}),h&&t.jsx("span",{class:I,children:t.jsx(T.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:h})})]})},Ze=({hasInsideLabel:e=!1,variant:s="default",...o})=>{const n=d.useInputGroupContext(),{isReadonly:a}=i.useFormFieldContext(),{baseTheme:r}=l.useComponentTheme(h.FormLayoutRedwoodTheme),{baseTheme:c}=l.useComponentTheme(u.LabelRedwoodTheme),{classes:x,styles:T}=l.useComponentTheme(m.TextFieldRedwoodTheme,{readonly:a?"isReadonly":"notReadonly",formControlInsideLabel:e?"hasInsideLabel":"noInsideLabel",withinGroup:null!==n?"isWithinGroup":void 0}),{formControlBase:y,textFieldBase:b,textFieldEmbedded:p}=T,{baseTheme:N}=l.useComponentTheme(S.SkeletonRedwoodTheme),E=F.classNames([N,y,b,"embedded"===s&&p,x,r,c]);return t.jsx("div",{...o,class:E})};e.ReadonlyTextFieldInput=s.ReadonlyTextFieldInput,e.TextFieldInput=y.TextFieldInput,e.getInputId=y.getInputId,e.MaxLengthLiveRegion=function({isMaxLengthExceeded:e,maxLength:s,valueLength:o=0}){const n=p.useDebounce(s-o,500),a=N.useTranslationBundle("@oracle/oraclejet-preact"),i=a.formControl_maxLengthExceeded({MAX_LENGTH:`${s}`}),l=a.formControl_maxLengthRemaining({CHARACTER_COUNT:`${n}`});return t.jsxs(b.Fragment,{children:[t.jsx(E.LiveRegion,{children:l}),e&&t.jsx(E.LiveRegion,{type:"assertive",children:i})]})},e.ReadonlyTextField=({label:e,labelEdge:s,children:n,variant:a,...x})=>{const{isFormLayout:T,isReadonly:S}=o.useFormContext(),{isLoading:y}=i.useFormFieldContext(),b=void 0!==e&&"inside"===s,p=T&&!S,{direction:N}=r.useUser(),E="ltr"===N,A=d.useInputGroupContext(),L=null!==A,U=A?A.last?E?"groupRight":"groupLeft":0===A.index?E?"groupLeft":"groupRight":"groupMiddle":void 0,{classes:_,styles:C}=l.useComponentTheme(m.TextFieldRedwoodTheme,{readonly:"isReadonly"}),{baseTheme:R}=l.useComponentTheme(u.LabelRedwoodTheme),{baseTheme:g}=l.useComponentTheme(h.FormLayoutRedwoodTheme),{classes:w}=l.useComponentTheme(c.ReadonlyTextFieldRedwoodTheme,{insideNonReadonlyForm:p?"isInsideNonReadonlyForm":"notInsideNonReadonlyForm",insideLabel:b?"hasInsideLabel":"noInsideLabel",textarea:"textarea"===a?"isTextArea":"notTextArea",loading:y?"isLoading":"notLoading",withinGroup:L?"isWithinGroup":void 0,inputGroupPosition:U}),{formControlBase:I}=C,f=F.classNames([_,I,g,R]);return void 0===e||"start"!==s&&"top"!==s?t.jsxs(He,{outerClassNames:f,innerClassNames:w,...x,children:[e,n]}):t.jsx(ze,{outerClassNames:f,innerClassNames:w,label:e,labelEdge:s,...x,children:n})},e.TextField=({contentVariant:e,id:s,endContent:o,mainContent:a,startContent:i,compactUserAssistance:l,inlineUserAssistance:d,label:r,labelEdge:m,labelStartWidth:u,mainFieldRef:h,resize:c,statusVariant:F,styleVariant:x,hasZeroStartMargin:T,onFocus:S,onBlur:y,onKeyDown:b,onMouseDown:p,onMouseEnter:N,onMouseLeave:E})=>{const A=void 0!==r&&("start"===m||"top"===m),L=t.jsx(Pe,{contentVariant:e,endContent:o,mainContent:a,resize:c,rootRef:h,startContent:i,statusVariant:F,styleVariant:x,hasZeroStartMargin:T,...A?{}:{insideLabel:r}}),U=t.jsxs(t.Fragment,{children:[l,L,d]}),_=A?t.jsx(n.LabelValueLayout,{label:r,labelEdge:m,labelStartWidth:u,children:U}):U;return t.jsx(Ze,{id:s,hasInsideLabel:void 0!==r&&"inside"===m,onfocusin:S,onfocusout:y,onKeyDown:b,onMouseDown:p,onMouseEnter:N,onMouseLeave:E,variant:x,children:_})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_TextField.js.map