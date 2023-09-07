"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[1773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[d]="string"==typeof e?e:a,l[1]=m;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={layout:"default",title:"Remote Command"},l="The Remote command",m={unversionedId:"commands/remote-commands",id:"commands/remote-commands",title:"Remote Command",description:"This command lets you remotely control a TARDIS, and is useful for server admins and command blocks. To use the command",source:"@site/docs/commands/remote-commands.md",sourceDirName:"commands",slug:"/commands/remote-commands",permalink:"/commands/remote-commands",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/remote-commands.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Remote Command"},sidebar:"docs",previous:{title:"Recipe Command",permalink:"/commands/recipe-commands"},next:{title:"Schematic Command",permalink:"/commands/schematic-commands"}},i={},c=[{value:"Notes",id:"notes",level:3},{value:"Video",id:"video",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-remote-command"},"The Remote command"),(0,a.kt)("p",null,"This command lets you remotely control a TARDIS, and is useful for server admins and command blocks. To use the command\nplayers need the permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"tardis.remote")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisremote [player] [action] [travel options]\n")),(0,a.kt)("p",null,"The currently supported actions are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"travel"),(0,a.kt)("li",{parentName:"ul"},"comehere"),(0,a.kt)("li",{parentName:"ul"},"chameleon"),(0,a.kt)("li",{parentName:"ul"},"hide"),(0,a.kt)("li",{parentName:"ul"},"rebuild"),(0,a.kt)("li",{parentName:"ul"},"back")),(0,a.kt)("p",null,"If the action equals ",(0,a.kt)("inlineCode",{parentName:"p"},"travel"),", travel options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"home"),(0,a.kt)("li",{parentName:"ul"},"area ","[area name]"),(0,a.kt)("li",{parentName:"ul"},"coords e.g. world x y z")),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"can be run from command blocks, but the specified player must be online"),(0,a.kt)("li",{parentName:"ul"},"if the player who is running the command does ",(0,a.kt)("strong",{parentName:"li"},"NOT")," have ",(0,a.kt)("inlineCode",{parentName:"li"},"tardis.admin")," permission, then the normal checks are\nperformed (energy/permissions/circuits/plugin respect etc for the specified player)"),(0,a.kt)("li",{parentName:"ul"},"use via Command Block will fail silently if above checks fail, as we can\u2019t message a command block..."),(0,a.kt)("li",{parentName:"ul"},"if player has ",(0,a.kt)("inlineCode",{parentName:"li"},"tardis.admin")," permission then no energy is used / only basic checks performed (so we\u2019re not griefing\nanything)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"comehere")," comes to the currently targeted block (only available to TARDIS admin players)")),(0,a.kt)("h3",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/VypqSYls1QM0",frameborder:"0",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);