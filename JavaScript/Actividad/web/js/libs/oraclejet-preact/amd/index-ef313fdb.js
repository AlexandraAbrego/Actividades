define(['exports', 'preact', './Common', './Common/themes/redwood/theme', 'preact/jsx-runtime', 'preact/hooks', 'preact/compat'], (function(e,t,r,o,n,c,s){"use strict";const i={user:{locale:document.documentElement.getAttribute("lang")||"en",direction:"rtl"===document.documentElement.getAttribute("dir")?.toLowerCase()?"rtl":"ltr",forcedColors:window.matchMedia?.("(forced-colors: active)")?.matches?"active":"none"},theme:o.Redwood,colorScheme:"light",scale:"lg",currentBgColor:void 0},a=t.createContext(i),l=t.createContext({}),u=s.forwardRef(((e,t)=>n.jsx("div",{id:"__oj_layerhost_container",ref:t})));function d({children:e}){const[t,r]=s.useState(),o=s.useCallback((e=>{null!==e&&r(e)}),[]);return n.jsx(l.Consumer,{children:r=>{const c=t?{getHost:()=>t}:{},s=r.getHost?r:c;return n.jsxs(l.Provider,{value:s,children:[e,!r.getHost&&n.jsx(u,{ref:o})]})}})}function m(e,t){const r=Object.assign({},e.user,t?.user),o=Object.assign({},e.theme,t?.theme),n=Object.assign({},e.translations),c=t?.translations||{};return Object.keys(c).forEach((e=>{let t=c[e];n[e]&&(t=Object.assign({},n[e],t)),n[e]=t})),{user:r,theme:o,translations:n,colorScheme:t?.colorScheme??e.colorScheme,scale:t?.scale??e.scale,currentBgColor:t?.currentBgColor??e.currentBgColor}}u.displayName="Forwarded<LayerHost>",e.DefaultEnvironment=i,e.EnvironmentContext=a,e.EnvironmentProvider=function({children:e,environment:t}){const r=c.useContext(a),o=c.useMemo((()=>m(r,t)),[r,t]);return n.jsx(a.Provider,{value:o,children:e})},e.LayerContext=l,e.LayerManager=d,e.RootEnvironmentProvider=function({children:e,environment:t}){const r=c.useMemo((()=>m(i,t)),[t]);return n.jsx(a.Provider,{value:r,children:n.jsx(d,{children:e})})}}));
//# sourceMappingURL=index-ef313fdb.js.map
