"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[9158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"Temporal Locator"},i="Temporal Locator",l={unversionedId:"temporal-locator",id:"temporal-locator",title:"Temporal Locator",description:"The Temporal Locator lets players set their time relative to the server time. The Temporal Locator is accessible via the",source:"@site/docs/temporal-locator.md",sourceDirName:".",slug:"/temporal-locator",permalink:"/TARDIS-Docs/temporal-locator",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/temporal-locator.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Temporal Locator"}},c={},s=[{value:"Huh, what?",id:"huh-what",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"temporal-locator"},"Temporal Locator"),(0,a.kt)("p",null,"The Temporal Locator lets players set their time relative to the server time. The Temporal Locator is accessible via the\nTARDIS Control Menu GUI, or you can place a sign and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardis update temporal")," command."),(0,a.kt)("p",null,"In the Control Menu click the ",(0,a.kt)("em",{parentName:"p"},"Time")," button (or if using a separate Temporal Locator sign, right-click it)\nto open the inventory based GUI. You will see a screen like the one below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click a clock to set your time to the one displayed"),(0,a.kt)("li",{parentName:"ul"},"Time is set when exiting the TARDIS and reset back to server time when re-entering the TARDIS"),(0,a.kt)("li",{parentName:"ul"},"When players are temporally located, the perception filter is added to them"),(0,a.kt)("li",{parentName:"ul"},"Player time can be reset at any time by right-clicking air with a clock"),(0,a.kt)("li",{parentName:"ul"},"Players need ",(0,a.kt)("inlineCode",{parentName:"li"},"tardis.temporal")," permission to use it")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Temporal Locator",src:r(83846).Z,width:"600",height:"353"})),(0,a.kt)("h3",{id:"huh-what"},"Huh, what?"),(0,a.kt)("p",null,"This doesn\u2019t change the server time, that runs as normal, this just sets the player\u2019s time on the client, e.g.:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"server time is 7000 ticks (morning)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eccentric_nz")," has Temporal Location of 20000 ticks he will see the world at night"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eccentric_nz")," will NOT see zombie\u2019s spawning because the server time is morning"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenosefairy")," is standing next to ",(0,a.kt)("inlineCode",{parentName:"li"},"eccentric_nz")," and is NOT temporally located"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenosefairy")," will see the world in the same time as the server i.e. morning")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Temporal Locator",src:r(54407).Z,width:"600",height:"353"})))}u.isMDXComponent=!0},83846:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/temporal1-77a0682efff05b93c4e679294db77424.png"},54407:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/temporal2-76d54883692f7cdbe92335173010b944.png"}}]);