(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3286:function(e,t,n){Promise.resolve().then(n.bind(n,5343)),Promise.resolve().then(n.t.bind(n,1371,23)),Promise.resolve().then(n.t.bind(n,2853,23))},5343:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return v}});var r=n(7437),o=n(2265);let l=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,o.createContext)(void 0),c=e=>(0,o.useContext)(i)?o.createElement(o.Fragment,null,e.children):o.createElement(d,e),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:a="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:v="data-theme",value:_,children:$,nonce:b})=>{let[p,g]=(0,o.useState)(()=>f(a,d)),[S,E]=(0,o.useState)(()=>f(a)),w=_?Object.values(_):c,k=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=y());let s=_?_[o]:o,a=t?h():null,i=document.documentElement;if("class"===v?(i.classList.remove(...w),s&&i.classList.add(s)):s?i.setAttribute(v,s):i.removeAttribute(v),r){let e=l.includes(d)?d:null,t=l.includes(o)?o:e;i.style.colorScheme=t}null==a||a()},[]),T=(0,o.useCallback)(e=>{g(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),C=(0,o.useCallback)(t=>{let r=y(t);E(r),"system"===p&&n&&!e&&k("system")},[p,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,o.useEffect)(()=>{let e=e=>{e.key===a&&T(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,o.useEffect)(()=>{k(null!=e?e:p)},[e,p]);let O=(0,o.useMemo)(()=>({theme:p,setTheme:T,forcedTheme:e,resolvedTheme:"system"===p?S:p,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[p,T,e,S,n,c]);return o.createElement(i.Provider,{value:O},o.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:a,themes:c,defaultTheme:d,attribute:v,value:_,children:$,attrs:w,nonce:b}),$)},u=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:a,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=a?l.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let o=c?c[e]:e,s=t?e+"|| ''":`'${o}'`,i="";return a&&r&&!t&&l.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||o?`c.add(${s})`:"null":o&&(i+=`d[s](n,${s})`),i},v=e?`!function(){${f}${y(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${h}}catch(t){}}();`;return o.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),f=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");function v(e){let{children:t,...n}=e;return(0,r.jsx)(c,{...n,children:t})}},2853:function(){},1371:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,i={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:m,props:i,_owner:s.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=3286)}),_N_E=e.O()}]);