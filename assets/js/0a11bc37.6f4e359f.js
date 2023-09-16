"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[9953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={layout:"default",title:"TARDIS_TimeVortex world"},i="TARDIS_TimeVortex world",l={unversionedId:"time-vortex",id:"time-vortex",title:"TARDIS_TimeVortex world",description:"By default, the plugin will set up a special world that will allow you to store all the TARDISes in it and still be able",source:"@site/docs/time-vortex.md",sourceDirName:".",slug:"/time-vortex",permalink:"/TARDIS-Docs/time-vortex",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/time-vortex.md",tags:[],version:"current",frontMatter:{layout:"default",title:"TARDIS_TimeVortex world"},sidebar:"docs",previous:{title:"Rooms and server economies",permalink:"/TARDIS-Docs/rooms-and-economies"},next:{title:"Wiki Sign",permalink:"/TARDIS-Docs/wiki-sign"}},s={},c=[{value:"If you need to set up the world manually:",id:"if-you-need-to-set-up-the-world-manually",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tardis_timevortex-world"},"TARDIS","_","TimeVortex world"),(0,n.kt)("p",null,"By default, the plugin will set up a special world that will allow you to store all the TARDISes in it and still be able\nto grow rooms, abandon TARDISes, be easier on server resources and make management of TARDISes easier. The world is\ncalled\n",(0,n.kt)("strong",{parentName:"p"},"TARDIS","_","TimeVortex")," and uses TARDISChunkGenerator module to create a void type environment."),(0,n.kt)("p",null,"The plugin will automatically try to create the world when it first starts up."),(0,n.kt)("h3",{id:"if-you-need-to-set-up-the-world-manually"},"If you need to set up the world manually:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set TARDIS config options as shown below:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  /tardisconfig default_world true\n  /tardisconfig default_world_name TARDIS_TimeVortex\n  /tardisconfig include_default_world false\n  /tardisconfig create_worlds false\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do NOT")," use Multiverse or another world management plugin to create and load the TARDIS_TimeVortex world. Doing so\nwill cause players to receive the message ",(0,n.kt)("inlineCode",{parentName:"p"},"You cannot grow rooms unless your TARDIS was created in its own world"),"!")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"As of TARDIS v2.7-beta-1 the plugin now uses a system called ",(0,n.kt)("a",{parentName:"p",href:"tips"},"T.I.P.S")," (TARDIS Interior Positioning System).\nThis system places new TARDISes in a specific \u2018plot\u2019 in the TARDIS_TimeVortex World. This means that TARDISes will no\nlonger overlap other TARDISes if they are created close together in the overworld."),(0,n.kt)("p",{parentName:"admonition"},"If you are using a pre-TARDIS 2.7 version, you will have to educate your players to create their TARDIS home locations\nfar apart as their position in the TimeVortex relates to the position they were created in the server world.")))}d.isMDXComponent=!0}}]);