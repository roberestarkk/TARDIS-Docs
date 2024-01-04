"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(r),c=l,y=p["".concat(s,".").concat(c)]||p[c]||u[c]||n;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<n;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},69574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var a=r(87462),l=(r(67294),r(3905));const n={layout:"default",title:"Gravity Wells"},o="Gravity Wells",i={unversionedId:"rooms/gravity-wells",id:"rooms/gravity-wells",title:"Gravity Wells",description:"Gravity wells let you move around the TARDIS interior without having to walk or use ladders. They let you create",source:"@site/docs/rooms/gravity-wells.md",sourceDirName:"rooms",slug:"/rooms/gravity-wells",permalink:"/TARDIS-Docs/rooms/gravity-wells",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/rooms/gravity-wells.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Gravity Wells"},sidebar:"docs",previous:{title:"The Garden Room",permalink:"/TARDIS-Docs/rooms/garden"},next:{title:"Rail Room",permalink:"/TARDIS-Docs/rooms/rail"}},s={},m=[{value:"Growing a Gravity Well Room",id:"growing-a-gravity-well-room",level:2},{value:"The <code>/tardisgravity</code> command",id:"the-tardisgravity-command",level:2},{value:"Wool colours",id:"wool-colours",level:3},{value:"Removing gravity well blocks",id:"removing-gravity-well-blocks",level:2},{value:"Videos",id:"videos",level:2}],d={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gravity-wells"},"Gravity Wells"),(0,l.kt)("p",null,"Gravity wells let you move around the TARDIS interior without having to walk or use ladders. They let you create\nmultiple levels so you can expand the TARDIS as much as you want."),(0,l.kt)("p",null,"There are three types of gravity wells:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("em",{parentName:"li"},"gravity")," room type grows gravity wells that go ",(0,l.kt)("strong",{parentName:"li"},"down")," a level"),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("em",{parentName:"li"},"antigravity")," room type grows gravity wells that go ",(0,l.kt)("strong",{parentName:"li"},"up")," a level"),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/tardisgravity")," command lets you create ",(0,l.kt)("strong",{parentName:"li"},"sideways")," gravity wells (or inertial dampened passages)")),(0,l.kt)("h2",{id:"growing-a-gravity-well-room"},"Growing a Gravity Well Room"),(0,l.kt)("p",null,"Gravity Wells can be grown ",(0,l.kt)("a",{parentName:"p",href:"#growing"},"in the same manner as any other room"),", though with certain other\nrequirements. The ",(0,l.kt)("em",{parentName:"p"},"gravity")," room requires an additional empty ARS slot ",(0,l.kt)("strong",{parentName:"p"},"below")," the selected slot, while the\n",(0,l.kt)("em",{parentName:"p"},"antigravity")," room requires an additional empty ARS slot ",(0,l.kt)("strong",{parentName:"p"},"above"),"."),(0,l.kt)("p",null,"For TARDIS versions prior to ",(0,l.kt)("inlineCode",{parentName:"p"},"2.6-beta-1"),", gravity wells are best grown in the middle of an empty room."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"/tardis room [gravity|antigravity]")," command to get started"),(0,l.kt)("li",{parentName:"ol"},"Place the seed block (default MOSSY COBBLESTONE for gravity, and SANDSTONE for antigravity) down into the centre of\nthe floor (don\u2019t sit it on top)"),(0,l.kt)("li",{parentName:"ol"},"Click the seed block with the TARDIS key and sit back while you watch it grow")),(0,l.kt)("p",null,"The PINK side of the gravity well allows you fall down it without taking any damage, while the GREEN side will lift you\nup (without any need for flying)."),(0,l.kt)("h2",{id:"the-tardisgravity-command"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"/tardisgravity")," command"),(0,l.kt)("p",null,"This command will let you create either sideways gravity wells, or up and down ones of any height (though you\u2019ll need to\nbuild your own gravity shaft)."),(0,l.kt)("p",null,"The command syntax is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/tardisgravity [direction] [distance] [velocity]\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"[direction]")," is one of:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"up\ndown\nnorth\nwest\nsouth\neast\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[distance]")," is the number of blocks you want to move"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[velocity]")," is how fast you want to move. As a guide, normal Minecraft walking speed is 0.37, and a standard (grown)\nTARDIS gravity well is 0.5."),(0,l.kt)("p",null,"You will find that the higher you set the velocity, the less you will have to set the distance. For example, a\nstandard (grown) TARDIS gravity well uses ",(0,l.kt)("inlineCode",{parentName:"p"},"distance = 11"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"velocity = 0.5"),". If we change the velocity to ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5"),", then\nthe distance will need to be lowered to ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," to stop players hitting their heads on the ceiling."),(0,l.kt)("p",null,"After running the command you will be prompted to click the wool block that becomes the trigger for the gravity well."),(0,l.kt)("h3",{id:"wool-colours"},"Wool colours"),(0,l.kt)("p",null,"The following table sets out the colour of the wool block needed for each gravity well direction."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Wool colour"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Up"),(0,l.kt)("td",{parentName:"tr",align:null},"Light Green")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Pink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"North"),(0,l.kt)("td",{parentName:"tr",align:null},"Black")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"West"),(0,l.kt)("td",{parentName:"tr",align:null},"Purple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South"),(0,l.kt)("td",{parentName:"tr",align:null},"Red")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"East"),(0,l.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,l.kt)("h2",{id:"removing-gravity-well-blocks"},"Removing gravity well blocks"),(0,l.kt)("p",null,"You cannot jettison gravity wells, but sometimes you may want to remove them manually. To get rid of the gravity well\ntrigger block, you can use the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/tardisgravity remove\n")),(0,l.kt)("p",null,"You will be prompted to click on the block to remove the reference to it in the TARDIS database."),(0,l.kt)("h2",{id:"videos"},"Videos"),(0,l.kt)("iframe",{src:"https://player.vimeo.com/video/58275849",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}),(0,l.kt)("iframe",{src:"https://player.vimeo.com/video/61447553",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}u.isMDXComponent=!0}}]);