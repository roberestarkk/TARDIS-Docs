"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||c;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const c={layout:"default",title:"The Chameleon Construction GUI"},i="The Chameleon Construction GUI",a={unversionedId:"chameleon-construction",id:"chameleon-construction",title:"The Chameleon Construction GUI",description:"Since version 3.4-beta-1, the TARDIS plugin includes a GUI where players can construct their own Chameleon preset.",source:"@site/docs/chameleon-construction.md",sourceDirName:".",slug:"/chameleon-construction",permalink:"/TARDIS-Docs/chameleon-construction",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/chameleon-construction.md",tags:[],version:"current",frontMatter:{layout:"default",title:"The Chameleon Construction GUI"}},l={},s=[{value:"Video",id:"video",level:3}],u={toc:s},p="wrapper";function h(e){let{components:t,...c}=e;return(0,o.kt)(p,(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-chameleon-construction-gui"},"The Chameleon Construction GUI"),(0,o.kt)("p",null,"Since version 3.4-beta-1, the TARDIS plugin includes a GUI where players can construct their own Chameleon preset."),(0,o.kt)("p",null,"The GUI is accessed from the third page of the Chameleon Preset GUI, which in turn is accessed by clicking the Chameleon\nCircuit sign on the TARDIS console."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"construction access",src:n(77541).Z,width:"600",height:"353"})),(0,o.kt)("p",null,"When opening the GUI for the first time, you are presented with the construction screen \u2014 however if you need help or\ninformation regarding the construction process, 2 other screens are available."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"construction screen",src:n(90646).Z,width:"600",height:"353"})),(0,o.kt)("p",null,"Click the \u2018Help\u2019 button to open the help screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"construction help",src:n(8754).Z,width:"600",height:"353"})),(0,o.kt)("p",null,"Click the \u2018View\u2019 button to open the template example screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"construction template",src:n(6029).Z,width:"600",height:"353"})),(0,o.kt)("p",null,"Blocks can be placed into the GUI to design the preset \u2014 these same blocks are consumed when applying the customised\ndesign to the TARDIS exterior."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"custom design",src:n(75007).Z,width:"600",height:"353"})),(0,o.kt)("p",null,"Click the \u2018Build\u2019 button to accept the design and rebuild the TARDIS."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"allow.all_blocks")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", precious blocks (GOLD, DIAMOND etc.) cannot be used in the GUI."),(0,o.kt)("li",{parentName:"ul"},"All text in the GUI can be translated using the ",(0,o.kt)("em",{parentName:"li"},"plugins/TARDIS/language/chameleon","_","guis.yml")," file."))),(0,o.kt)("h3",{id:"video"},"Video"),(0,o.kt)("iframe",{src:"https://player.vimeo.com/video/139820997",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}h.isMDXComponent=!0},75007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/construct_custom-474a1415130a1d74f48e85c463cbd663.jpg"},90646:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/construct_gui-e24889be99fb6a2ff26a13aa444e4a0e.jpg"},8754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/construct_help-0cb17b2c76dd2de3e1e392fdb6ad37f7.jpg"},6029:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/construct_template-203dee27f58cdc469980512aefe97b72.jpg"},77541:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/open_construction-3a70bf087553112595bf9a4db67124ea.jpg"}}]);