define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_classNames', './PRIVATE_ThemedIcons/MessageConfirmationIcon', './PRIVATE_ThemedIcons/MessageErrorIcon', './PRIVATE_ThemedIcons/MessageInfoIcon', './PRIVATE_ThemedIcons/MessageWarningIcon', './UNSAFE_Flex', './PRIVATE_Message/themes/MessageStyles.css', './Flex-efac04c8', './classNames-b19002dd'], (function(e,s,n,a,t,r,o,c,i,l,I){"use strict";const g={confirmation:a.MessageConfirmationIcon,error:t.MessageErrorIcon,info:r.MessageInfoIcon,warning:o.MessageWarningIcon};e.MessageStartIcon=function({severity:e,variant:n="banner",translations:a}){const t=g[e],r="inline"!==n?s.jsx(l.Flex,{align:"center",height:"100%",children:s.jsx("span",{class:i.startIconContainerStyles[n],role:"img",title:a?.[e],children:s.jsx(t,{})})}):s.jsx("span",{class:i.startIconContainerStyles.inline,role:"img",title:a?.[e],children:s.jsx(t,{})});return s.jsx("div",{class:I.classNames(["banner"===n&&"oj-c-messagebanner-start-icon",i.messageStartIconStyles.base,i.messageStartIconStyles[n],i.severityIconStyles[n]]),role:"presentation",children:r})}}));
//# sourceMappingURL=MessageStartIcon-537853a5.js.map
