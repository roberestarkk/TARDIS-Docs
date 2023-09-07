"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[8969],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(a),c=r,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(g,o(o({ref:e},d),{},{components:a})):n.createElement(g,o({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2777:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={layout:"default",title:"Vortex Manipulator",slug:"/vortex-manipulator"},o="Vortex Manipulator",i={unversionedId:"modules/vortex-manipulator",id:"modules/vortex-manipulator",title:"Vortex Manipulator",description:'"Vortex manipulator. Cheap and nasty time travel. Very bad for you. I\'m trying to give it up."',source:"@site/docs/modules/vortex-manipulator.md",sourceDirName:"modules",slug:"/vortex-manipulator",permalink:"/vortex-manipulator",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/modules/vortex-manipulator.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Vortex Manipulator",slug:"/vortex-manipulator"},sidebar:"docs",previous:{title:"Weeping Angels",permalink:"/weeping-angels"},next:{title:"Dynmap-TARDIS",permalink:"/dynmap-tardis"}},p={},m=[{value:"Enabling the module",id:"enabling-the-module",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Crafting",id:"crafting",level:2},{value:"Multi-world support",id:"multi-world-support",level:2},{value:"Commands",id:"commands",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Video",id:"video",level:2}],d={toc:m},s="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(s,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vortex-manipulator"},"Vortex Manipulator"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Vortex manipulator. Cheap and nasty time travel. Very bad for you. I\'m trying to give it up."')),(0,r.kt)("p",null,"TARDISVortexManipulator is one of the TARDIS plugin modules that brings\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://tardis.fandom.com/wiki/Vortex_manipulator"},"Vortex Manipulator")," to Minecraft. Travel like Jack Harkness or\nRiver Song from Doctor Who! Have the Vortex Manipulator in your hand, put in your desired location, and GO!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note")," For TARDIS version 4.13.0 and below you can download the separate TARDISVortexManipulator plugin JAR\nfrom ",(0,r.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDISVortexManipulator/"},"http://tardisjenkins.duckdns.org:8080/job/TARDISVortexManipulator/")),(0,r.kt)("p",{parentName:"admonition"},"  ",(0,r.kt)("em",{parentName:"p"},"The instructions below are for the TARDIS module, but are pretty much the same ,with some extra configuration options (\ndatabase / plugin respect), and separate commands instead of sub-commands."),"\n")),(0,r.kt)("h2",{id:"enabling-the-module"},"Enabling the module"),(0,r.kt)("p",null,"To use the Weeping Angels module, it must be enabled in the TARDIS config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisconfig vortex_manipulator [true|false]")," to enable or disable the feature."),(0,r.kt)("li",{parentName:"ul"},"A server restart is required when changing the config value.")),(0,r.kt)("p",null,"The TARDISVortexManipulator models and textures are part of\nthe ",(0,r.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDIS-Resource-Pack/"},"TARDIS-Resource-Pack")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"For the full experience, you'll need\nthe ",(0,r.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDIS-Resource-Pack/"},"TARDIS-Resource-Pack")),(0,r.kt)("h2",{id:"crafting"},"Crafting"),(0,r.kt)("p",null,"Crafting is a little complicated, as it's an advanced piece of technology. Requirements for crafting are (left to right,\ntop row first): stone button, another stone button, glass; clock, gold, compass; iron ingot, iron ingot, iron ingot.\nCustom graphics for the crafted item and GUI are available as part of\nthe ",(0,r.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDIS-Resource-Pack/"},"TARDIS-Resource-Pack"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Crafting",src:a(11056).Z,width:"600",height:"157"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Item",src:a(72953).Z,width:"128",height:"128"})),(0,r.kt)("h2",{id:"multi-world-support"},"Multi-world support"),(0,r.kt)("p",null,"The plugin works with Multiverse (or other multi-word plugin), remembering personally saved locations and allowing for\ndirect teleporting to any available world and coordinate. Also having respect for World Borders (plugin and the 1.8\ndefault if possible). Towny/Faction/WorldGuard/GriefPrevention suport can be enabled via the config."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Help")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm help {topic}")),(0,r.kt)("td",{parentName:"tr",align:null},"Display help and commands for the plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Activate")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm activate {player}")),(0,r.kt)("td",{parentName:"tr",align:null},"Activate a Vortex Manipulator that has been given with the /tardisgive command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Travel")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm go {worldname}")),(0,r.kt)("td",{parentName:"tr",align:null},"Teleport to a random location in the specified world")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm go {worldname} {X} {Y} {Z}")),(0,r.kt)("td",{parentName:"tr",align:null},"Teleport to a specific location in the specified world")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm go")),(0,r.kt)("td",{parentName:"tr",align:null},"Teleport to random world, random location. If another player is standing on the same block as you, they will teleport with you, using more energy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm go {custom}")),(0,r.kt)("td",{parentName:"tr",align:null},"Teleport to a saved location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Saves")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm save {custom}")),(0,r.kt)("td",{parentName:"tr",align:null},"Save a specific location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm remove {custom}")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove a saved location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Messaging")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm message msg {player} {message}")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a message to another user with a device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm message list {in/out} [page]")),(0,r.kt)("td",{parentName:"tr",align:null},"See a list of received or sent messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm message read {#}")),(0,r.kt)("td",{parentName:"tr",align:null},"Read a specific message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm message delete {#}")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a specific message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm message clear {in/out}")),(0,r.kt)("td",{parentName:"tr",align:null},"Clear the specified mail box")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Lifesigns")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm lifesigns")),(0,r.kt)("td",{parentName:"tr",align:null},"List entities nearby, mobs and players")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm lifesigns {player}")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the health, hunger and oxygen level of a player")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Beacon")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm beacon")),(0,r.kt)("td",{parentName:"tr",align:null},"Send out a beacon signal that lasts until the player moves")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GUI")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm gui")),(0,r.kt)("td",{parentName:"tr",align:null},"Open the Vortex Manipulator GUI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Give")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/vm give {player} {amount}")),(0,r.kt)("td",{parentName:"tr",align:null},"Give Tachyon energy to a player's Vortex Manipulator")))),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vm.teleport")," - allow crafting and using of a Vortex Manipulator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vm.message")," - for messaging system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vm.lifesigns")," - detect lifesigns and info on players"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vm.beacon")," - activate the beacon feature")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"vortex_manipulator.yml")," config is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/vortex_manipulator.yml"',title:'"/plugins/TARDIS/vortex_manipulator.yml"'},'allow:\n  teleport: true\n  messaging: true\n  lifesigns: true\n  beacon: true\n  multiple: true\n  look_at_block: true\nrecipe:\n  shape: BBG,WOC,III\n  ingredients:\n    B: STONE_BUTTON\n    G: GLASS\n    W: WATCH\n    O: GOLD_INGOT\n    C: COMPASS\n    I: IRON_INGOT\n  result: WATCH\n  amount: 1\n  lore: "Cheap and nasty time travel"\ntachyon_use:\n  max: 1000\n  recharge: 25\n  recharge_interval: 600\n  travel:\n    random: 100\n    world: 150\n    coords: 200\n    saved: 50\n  lifesigns: 15\n  beacon: 1000\n  message: 5\ndate_format: dd/MM/YY HH:mm\nlifesign_scan_distance: 16\nmax_look_at_distance: 50\nblock_travel_malfunction_chance: 0\n')),(0,r.kt)("h2",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/broKxj7z3cI?rel=0",frameborder:"0",allowfullscreen:!0}),(0,r.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/mYq9hOWmVS8?rel=0",frameborder:"0",allowfullscreen:!0}))}u.isMDXComponent=!0},72953:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/manipulator-bc870cb66aa46c5196166a71175aea10.png"},11056:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/vortex_manipulator-0c062c8c0d7493ab155bff75d39666b2.jpg"}}]);