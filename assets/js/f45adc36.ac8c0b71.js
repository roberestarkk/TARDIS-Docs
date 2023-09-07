"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[7571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"TARDIS Keyboard"},i="TARDIS keyboard",l={unversionedId:"keyboard",id:"keyboard",title:"TARDIS Keyboard",description:"You can add a TARDIS keyboard to set destinations.",source:"@site/docs/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/keyboard",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/keyboard.md",tags:[],version:"current",frontMatter:{layout:"default",title:"TARDIS Keyboard"},sidebar:"docs",previous:{title:"Crafting Biome and Preset Disks",permalink:"/crafting-disks"},next:{title:"Malfunctions",permalink:"/malfunction"}},p={},c=[{value:"Video",id:"video",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-keyboard"},"TARDIS keyboard"),(0,a.kt)("p",null,"You can add a TARDIS keyboard to set destinations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Keyboard sign",src:r(22260).Z,width:"600",height:"338"})),(0,a.kt)("p",null,"To use it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Place a sign in the TARDIS control room")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardis update keyboard"),", then click the sign")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Right-click the sign to start editing")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a destination on the first line or coordinates (world,x,y,z) on four lines. The destination can be:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("em",{parentName:"li"},"save")," name"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("em",{parentName:"li"},"area")," name"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("em",{parentName:"li"},"player")," name"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("em",{parentName:"li"},"biome")," name"),(0,a.kt)("li",{parentName:"ul"},"\u2018home\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018cave\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018village\u2019")),(0,a.kt)("p",{parentName:"li"},"You will need to ",(0,a.kt)("em",{parentName:"p"},"change the sign")," to trigger a sign change event")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click done and the destination will be set (providing it is a valid destination)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Release the handbrake to travel"))),(0,a.kt)("h3",{id:"video"},"Video"),(0,a.kt)("iframe",{src:"https://player.vimeo.com/video/66056277#t=16s",width:"600",height:"365",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}m.isMDXComponent=!0},22260:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/keyboard-3c93ed6dbd68865611825093af44ab6f.jpg"}}]);