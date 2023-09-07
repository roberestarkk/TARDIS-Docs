"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,k=p["".concat(s,".").concat(c)]||p[c]||h[c]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={layout:"default",title:"The Junk TARDIS"},o="The Junk TARDIS",l={unversionedId:"junk-tardis",id:"junk-tardis",title:"The Junk TARDIS",description:"The Junk TARDIS is a public use TARDIS that any player with the correct permission can use on the server. It only",source:"@site/docs/junk-tardis.md",sourceDirName:".",slug:"/junk-tardis",permalink:"/junk-tardis",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/junk-tardis.md",tags:[],version:"current",frontMatter:{layout:"default",title:"The Junk TARDIS"},sidebar:"docs",previous:{title:"The Chameleon Circuit",permalink:"/chameleon-circuit"},next:{title:"Whovian food",permalink:"/food"}},s={},u=[{value:"Prerequisite for enabling the Junk TARDIS",id:"prerequisite-for-enabling-the-junk-tardis",level:3},{value:"Creating the Junk TARDIS",id:"creating-the-junk-tardis",level:3},{value:"Removing the Junk TARDIS",id:"removing-the-junk-tardis",level:3},{value:"Flying the Junk TARDIS",id:"flying-the-junk-tardis",level:3},{value:"Other commands",id:"other-commands",level:3},{value:"Config options",id:"config-options",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Video",id:"video",level:3}],d={toc:u},p="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-junk-tardis"},"The Junk TARDIS"),(0,a.kt)("p",null,"The Junk TARDIS is a public use TARDIS that any player with the correct permission can use on the server. It only\ntravels in overworlds (no Nether or The End) and doesn\u2019t require the player to have an Artron Energy supply."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Junk TARDIS",src:n(85286).Z,width:"600",height:"353"})),(0,a.kt)("h3",{id:"prerequisite-for-enabling-the-junk-tardis"},"Prerequisite for enabling the Junk TARDIS"),(0,a.kt)("p",null,"For the Junk TARDIS to be enabled on the server, the server must be set to use a default world for storing TARDISes (\nthis is the default option with new installs). In the config, set ",(0,a.kt)("inlineCode",{parentName:"p"},"creation.default_world: true"),". You will also need to\nenable the Junk TARDIS \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"junk.enabled: true"),"."),(0,a.kt)("h3",{id:"creating-the-junk-tardis"},"Creating the Junk TARDIS"),(0,a.kt)("p",null,"Any player with the ",(0,a.kt)("inlineCode",{parentName:"p"},"tardis.admin")," permission can create the Junk TARDIS, but only one Junk TARDIS can be active at a\ntime. To create the Junk TARDIS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clear a 6 x 6 block flat area"),(0,a.kt)("li",{parentName:"ol"},"Target a block in the centre of the flat area"),(0,a.kt)("li",{parentName:"ol"},"Open chat and type the command ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardisjunk create"))),(0,a.kt)("h3",{id:"removing-the-junk-tardis"},"Removing the Junk TARDIS"),(0,a.kt)("p",null,"Open chat and type the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardisjunk delete"),". Requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"tardis.admin")," permission."),(0,a.kt)("h3",{id:"flying-the-junk-tardis"},"Flying the Junk TARDIS"),(0,a.kt)("p",null,"There are seven controls that let you set a Junk TARDIS destination:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sign")," \u2014 shows the travel destination"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"handbrake")," \u2014 starts the TARDIS travelling"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tripwire hook")," \u2014 selects the world to travel to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stone button")," \u2014 sets the x coordinate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wood button")," \u2014 sets the z coordinate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"repeater")," \u2014 determines the amount (1, 10, 100 or 1000) which is added or subtracted from the x and z coordinates\nwhen the buttons are clicked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"comparator")," \u2014 sets whether the buttons add or subtract")),(0,a.kt)("p",null,"When the Junk TARDIS is travelling, any player who steps off the Junk TARDIS platform will be killed instantly. To\nvisually show that the Junk TARDIS is travelling particle effects and the redstone torch on the console will flash on\nand off."),(0,a.kt)("p",null,"If no destination coordinates are entered onto the destination sign and the Junk TARDIS is not at its \u2018home\u2019 location,\nthen clicking the handbrake lever will make the Junk TARDIS travel home."),(0,a.kt)("h3",{id:"other-commands"},"Other commands"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/tardisjunk return")," \u2014 returns the Junk TARDIS to its \u2018home\u2019 location (bringing along any players who may be onboard)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/tardisjunk time")," \u2014 find out how much time remains before the Junk TARDIS automatically returns home."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/tardisjunk find")," \u2014 find the current location of the Junk TARDIS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/tardisjunk [wall|floor] [material]")," \u2014 change the wall and floor blocks of the Junk TARDIS. Use ",(0,a.kt)("strong",{parentName:"p"},"before")," creating the\nJunk TARDIS so that the Vortex TARDIS matches"),(0,a.kt)("h3",{id:"config-options"},"Config options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"junk.enabled: [true|false]\n")),(0,a.kt)("p",null,"Whether the Junk TARDIS is available on the server \u2014 ",(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The Junk TARDIS will be disabled\nif ",(0,a.kt)("inlineCode",{parentName:"p"},"creation.default_world")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"junk.particles: [true|false]\n")),(0,a.kt)("p",null,"Whether the Junk TARDIS displays a particle effect when travelling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"junk.return: [time in seconds]\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"[time in seconds]")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and the Junk TARDIS has not been used for longer than the specified period,\nit will automatically return to its \u2018home\u2019 location"),(0,a.kt)("h3",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tardis.admin")," \u2014 to create, delete and return the Junk TARDIS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tardis.junk")," \u2014 to fly and find the Junk TARDIS."),(0,a.kt)("h3",{id:"video"},"Video"),(0,a.kt)("iframe",{src:"https://player.vimeo.com/video/139185257",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}h.isMDXComponent=!0},85286:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/junk-8caafc771a651bbaa040d6481f365c57.jpg"}}]);