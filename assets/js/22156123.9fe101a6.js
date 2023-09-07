"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,h=c["".concat(s,".").concat(d)]||c[d]||y[d]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={layout:"default",title:"Flying the TARDIS"},l="Flying the TARDIS",a={unversionedId:"flying",id:"flying",title:"Flying the TARDIS",description:"From version 5 of the TARDIS plugin, you can fly the TARDIS exterior around your worlds.",source:"@site/docs/flying.md",sourceDirName:".",slug:"/flying",permalink:"/flying",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/flying.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Flying the TARDIS"}},s={},p=[{value:"Permission",id:"permission",level:3},{value:"How to fly",id:"how-to-fly",level:2},{value:"Video",id:"video",level:3}],u={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flying-the-tardis"},"Flying the TARDIS"),(0,o.kt)("p",null,"From version 5 of the TARDIS plugin, you can fly the TARDIS exterior around your worlds.\n",(0,o.kt)("em",{parentName:"p"},"This is a ",(0,o.kt)("strong",{parentName:"em"},"Java")," only feature that works with custom model police box presets"),", so you will also need to use the\n",(0,o.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDIS-Resource-Pack/"},"TARDIS Resource Pack"),"."),(0,o.kt)("h3",{id:"permission"},"Permission"),(0,o.kt)("p",null,"You will need the permission ",(0,o.kt)("inlineCode",{parentName:"p"},"tardis.fly")," to pilot your TARDIS."),(0,o.kt)("h2",{id:"how-to-fly"},"How to fly"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Right-click")," the handbrake while ",(0,o.kt)("strong",{parentName:"li"},"sneaking")," to pilot the TARDIS in the world"),(0,o.kt)("li",{parentName:"ul"},"Use the movement keys (",(0,o.kt)("strong",{parentName:"li"},"WASD"),") to navigate"),(0,o.kt)("li",{parentName:"ul"},"Look up to go up"),(0,o.kt)("li",{parentName:"ul"},"Look down to go down"),(0,o.kt)("li",{parentName:"ul"},"Press the ",(0,o.kt)("strong",{parentName:"li"},"Shift")," key to stop flying (best to do this when on the ground!)")),(0,o.kt)("p",null,"When you click the handbrake, you will be teleported to the TARDIS exterior - you will most\nlikely want to switch your view to third-person mode by pressing the ",(0,o.kt)("strong",{parentName:"p"},"F5")," key on the keyboard.\nPressing the Shift key will teleport you back into the TARDIS interior - you'll probably want to be on the ground at\nthe time, though the TARDIS will happily stop in mid-air. Left-click the handbrake to park the TARDIS and exit."),(0,o.kt)("h3",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BhHO95slXZ0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}y.isMDXComponent=!0}}]);