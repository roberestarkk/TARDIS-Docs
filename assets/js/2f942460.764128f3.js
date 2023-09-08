"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[5743],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(o),p=n,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<a;m++)i[m]=o[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},26257:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=o(87462),n=(o(67294),o(3905));const a={layout:"default",title:"Custom rooms"},i="Custom rooms",s={unversionedId:"custom-rooms",id:"custom-rooms",title:"Custom rooms",description:"TARDIS has the ability to add your own custom rooms using TARDIS schematic files and",source:"@site/docs/custom-rooms.md",sourceDirName:".",slug:"/custom-rooms",permalink:"/TARDIS-Docs/custom-rooms",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/custom-rooms.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Custom rooms"},sidebar:"docs",previous:{title:"Room gallery",permalink:"/TARDIS-Docs/room-gallery"},next:{title:"Gravity Wells",permalink:"/TARDIS-Docs/gravity-wells"}},l={},m=[{value:"/tardisroom required",id:"tardisroom-required",level:2},{value:"Tips",id:"tips",level:2},{value:"Video",id:"video",level:2}],c={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-rooms"},"Custom rooms"),(0,n.kt)("p",null,"TARDIS has the ability to add your own custom rooms using ",(0,n.kt)("a",{parentName:"p",href:"schematics"},"TARDIS schematic")," files and\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"/tardisroom")," command."),(0,n.kt)("p",null,"Custom schematics created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"/tardisschematic")," command are automatically saved in the\n",(0,n.kt)("em",{parentName:"p"},"plugins/TARDIS/user","_","schematics")," folder, if you have got a schematic from somewhere else you will need to manually put\nit in the correct folder on the server \u2014 it should be called ",(0,n.kt)("strong",{parentName:"p"},"[something]"),".tschm."),(0,n.kt)("p",null,"To add the room, run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/tardisroom add [something]\n/tardisroom [something] [cost]\n/tardisroom [something] [offset]\n/tardisroom [something] [seed material]\n/tardisroom [something] true\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[something]")," is the name of the room/schematic file and ",(0,n.kt)("em",{parentName:"p"},"MUST")," be lowercase."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[cost]")," is the Artron Energy cost to grow the room, and must be a ",(0,n.kt)("strong",{parentName:"p"},"POSITIVE")," number."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[offset]")," is how far below the door position the schematic extends, and must be a ",(0,n.kt)("strong",{parentName:"p"},"NEGATIVE")," number e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"-1"),"\n(if your floors don\u2019t line up then you got this wrong) See image below. Most of the time (allowing for the default\nredstone door circuits) this will be ",(0,n.kt)("inlineCode",{parentName:"p"},"-4"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Offset example",src:o(46617).Z,width:"600",height:"353"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[seed material]")," is\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/browse/src/main/java/org/bukkit/Material.java"},"Bukkit Material enum"),"\nof the room seed block, and must be ",(0,n.kt)("em",{parentName:"p"},"a block not used by any other rooms")," e.g. SAND"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")," The last command enables the room."),(0,n.kt)("h2",{id:"tardisroom-required"},"/tardisroom required"),(0,n.kt)("p",null,"Lists the blocks needed to grow a room. This is helpful if ",(0,n.kt)("inlineCode",{parentName:"p"},"rooms_require_blocks")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," in the TARDIS config."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/tardisroom required [room name]\n")),(0,n.kt)("h2",{id:"tips"},"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A room template with the correct door circuits is supplied with the plugin. You can load and paste it into a world"),(0,n.kt)("li",{parentName:"ul"},"with the ",(0,n.kt)("inlineCode",{parentName:"li"},"/tardisschematic")," command and then modify it as needed.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    /tardisschematic load user template\n    /tardisschematic paste\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Any room can be enabled/disabled with ",(0,n.kt)("inlineCode",{parentName:"li"},"/tardisroom [name] [true|false]"),", and all other settings can be changed using\nthe same command ",(0,n.kt)("inlineCode",{parentName:"li"},"/tardisroom [name] [value]")),(0,n.kt)("li",{parentName:"ul"},"Rooms schematics must be 16 blocks in width and 16 blocks in length"),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t put doors in the walls they will be added automatically (always in the centre of the wall)"),(0,n.kt)("li",{parentName:"ul"},"If you want to be able to have the rooms use the player wall and floor preferences, then you need to use orange wool\nfor the walls and light grey wool for the floors"),(0,n.kt)("li",{parentName:"ul"},"Currently armour stands are not supported, but things like item frames, paintings and banners are :)"),(0,n.kt)("li",{parentName:"ul"},"Rooms are grown from the bottom to top so keep that in mind when designing the room \u2014 you can\u2019t place levers upside\ndown for example as there will be no block for them to stick to and they will just fall into the void")),(0,n.kt)("h2",{id:"video"},"Video"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This video is very outdated! The plugin no longer uses WorldEdit schematics and rooms should be grown with\nARS.\nThe video shows also the custom room schematic being put into the ",(0,n.kt)("em",{parentName:"p"},"schematics")," folder, but it should now be put into the\n",(0,n.kt)("em",{parentName:"p"},"user","_","schematics")," folder.")),(0,n.kt)("iframe",{src:"https://player.vimeo.com/video/64474578",width:"600",height:"365",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}u.isMDXComponent=!0},46617:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/offset-563a9a1dbc42e5b52cf777c48c7b33a0.jpg"}}]);