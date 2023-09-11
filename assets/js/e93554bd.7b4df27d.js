"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2093],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(a),p=r,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},12908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={layout:"default",title:"Miscellaneous Commands"},l="Miscellaneous commands",o={unversionedId:"commands/misc",id:"commands/misc",title:"Miscellaneous Commands",description:"Some utility commands available in the TARDIS plugin.",source:"@site/docs/commands/misc.md",sourceDirName:"commands",slug:"/commands/misc",permalink:"/TARDIS-Docs/commands/misc",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/misc.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Miscellaneous Commands"},sidebar:"docs",previous:{title:"Give Commands",permalink:"/TARDIS-Docs/commands/give"},next:{title:"Nether Portal Command",permalink:"/TARDIS-Docs/commands/netherportal"}},s={},m=[{value:"<code>/tardiscall</code>",id:"tardiscall",level:2},{value:"<code>/tardisinfo</code>",id:"tardisinfo",level:2},{value:"<code>/tardisgamemode</code>",id:"tardisgamemode",level:2},{value:"<code>/tardismushroom</code>",id:"tardismushroom",level:2},{value:"<code>/tardistime</code>",id:"tardistime",level:2},{value:"<code>/tardisweather</code>",id:"tardisweather",level:2}],d={toc:m},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"miscellaneous-commands"},"Miscellaneous commands"),(0,r.kt)("p",null,"Some utility commands available in the TARDIS plugin."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tardiscall"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardiscall")),(0,r.kt)("p",null,"Request a player to bring their TARDIS to your targeted location."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'If you\'re wandering around in your TARDIS, and a friend wants you to come and\ncheck something out, rather than them saying in chat "Hey come check this out"\nand then you using ',(0,r.kt)("inlineCode",{parentName:"p"},"/ttravel [player] ?")," to request to travel to them (and them\npossibly having to move to a safe landing spot and accepting) - they can just run\nthe command ",(0,r.kt)("inlineCode",{parentName:"p"},"tardiscall [player]"),' and you\'ll get a message saying "{Player} wants\nyou to travel to them, do you accept?" which you accept to set the destination.')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tcall")),(0,r.kt)("li",{parentName:"ul"},"Permission: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.use")),(0,r.kt)("li",{parentName:"ul"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardiscall [player]"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tardisinfo"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisinfo")),(0,r.kt)("p",null,"Internal command used by the TARDIS Information System."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias: none"),(0,r.kt)("li",{parentName:"ul"},"Permission: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.help")),(0,r.kt)("li",{parentName:"ul"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisinfo [letter]"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tardisgamemode"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisgamemode")),(0,r.kt)("p",null,"Set a player's gamemode."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aliases: tgm, tgms, tgmc, tgma, tgmsp"),(0,r.kt)("li",{parentName:"ul"},"Permission: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.admin")),(0,r.kt)("li",{parentName:"ul"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisgamemode [GameMode] <player>")," - if no player is specified, then the gamemode is changed for the player\nrunning the command.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tardismushroom"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardismushroom")),(0,r.kt)("p",null,"Fix broken mushroom block textures."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias: ",(0,r.kt)("inlineCode",{parentName:"li"},"tmushroom")),(0,r.kt)("li",{parentName:"ul"},"Permission: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.mushroom")),(0,r.kt)("li",{parentName:"ul"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardismushroom [red|brown|stem] [radius]"))),(0,r.kt)("p",null,"Before command:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mushroom before update",src:a(94199).Z,width:"600",height:"330"})),(0,r.kt)("p",null,"After command:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mushroom after update",src:a(25548).Z,width:"600",height:"330"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tardistime"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardistime")),(0,r.kt)("p",null,"Change the time in the world the player is in (or where their TARDIS is if they are inside it)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias: ",(0,r.kt)("inlineCode",{parentName:"li"},"ttime")),(0,r.kt)("li",{parentName:"ul"},"Permission: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.admin")),(0,r.kt)("li",{parentName:"ul"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardistime [day|morning|noon|night|midnight|?AM|?PM|ticks]"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tardisweather"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisweather")),(0,r.kt)("p",null,"Change the weather in the world the player is in (or where their TARDIS is if they are inside it)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias: ",(0,r.kt)("inlineCode",{parentName:"li"},"tweather")),(0,r.kt)("li",{parentName:"ul"},"Permissions: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.weather.clear"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.weather.rain"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.weather.thunder")),(0,r.kt)("li",{parentName:"ul"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisweather [clear|rain|thunder]"))),(0,r.kt)("p",null,"You can also add a weather button to your TARDIS console to open a weather GUI. Palce an appropriate block and then run\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardis update weather")," command."),(0,r.kt)("p",null,"When you open the weather GUI, you can click a button to change the weather, or initiate atmospheric excitation (make it\nsnow around your TARDIS)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Weather GUI",src:a(61231).Z,width:"600",height:"330"})),(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/222985511",width:"600",height:"365",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}u.isMDXComponent=!0},25548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mushroom_after-db41fd68e8211be9e7c428a6785a3ff6.jpg"},94199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mushroom_before-9d2c699d79ba90ed78940aa6f9667bb4.jpg"},61231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weather_gui-41288d695b168165adacc53834f02663.jpg"}}]);