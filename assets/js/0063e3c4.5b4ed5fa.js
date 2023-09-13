"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[6724],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,c=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[s]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97452:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={layout:"default",title:"Dev Commands"},i="TARDIS dev commands",d={unversionedId:"commands/dev",id:"commands/dev",title:"Dev Commands",description:"Commands used by eccentric_nz to help with coding and documenting the TARDIS plugin.",source:"@site/docs/commands/dev.md",sourceDirName:"commands",slug:"/commands/dev",permalink:"/TARDIS-Docs/commands/dev",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/dev.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Dev Commands"},sidebar:"docs",previous:{title:"Config Commands",permalink:"/TARDIS-Docs/commands/config"},next:{title:"Give Commands",permalink:"/TARDIS-Docs/commands/give"}},o={},m=[{value:"<code>/tardisdev</code>",id:"tardisdev",level:2},{value:"<code>/tdev displayitem</code>",id:"tdev-displayitem",level:3}],p={toc:m},s="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(s,(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tardis-dev-commands"},"TARDIS dev commands"),(0,r.kt)("p",null,"Commands used by eccentric_nz to help with coding and documenting the TARDIS plugin."),(0,r.kt)("h2",{id:"tardisdev"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisdev")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tdev")),(0,r.kt)("li",{parentName:"ul"},"Permission: ",(0,r.kt)("inlineCode",{parentName:"li"},"tardis.admin"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"add_regions")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds missing WorldGuard regions for Bedrock players."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev add_regions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"advancements")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks whether a TARDIS advancement is valid."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev advancements [advancement]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"biome")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the biome the player is looking at."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev biome"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},"Lists various options to aid documentation - possible listings are: ",(0,r.kt)("inlineCode",{parentName:"td"},"preset_perms"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"perms"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"recipes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"blueprints"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"commands"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev list [which] [html/all]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stats")),(0,r.kt)("td",{parentName:"tr",align:null},"Display ARS room counts."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev stats"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tree")),(0,r.kt)("td",{parentName:"tr",align:null},"Grows a Huge Fungus Tree on the block the player is targeting. If no further arguments are specified, random blocks are used to grow the tree. You can also specify a block for the stem, hat and decor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev tree [stem] [hat] [decor]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plurals")),(0,r.kt)("td",{parentName:"tr",align:null},"Displays a list of block and item names in plural form."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev plurals"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chunky")),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-generates chunks using the ",(0,r.kt)("a",{parentName:"td",href:"https://www.spigotmc.org/resources/chunky.81534/"},"Chunky plugin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev chunky [world]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"snapshot")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a TARDIS Monitor map snapshot. Using the ",(0,r.kt)("inlineCode",{parentName:"td"},"c")," arguments clears the player's inventory of filled maps. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"in")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"out")," to determine which view (interior/exterior) to capture."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev snapshot [in\\|out\\|c]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frame")),(0,r.kt)("td",{parentName:"tr",align:null},"Lock and unlock TARDIS item frames."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev frame [lock\\|unlock]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"brushable")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a suspicious sand block to the player's inventory."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev brushable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"box")),(0,r.kt)("td",{parentName:"tr",align:null},"Set the state of the armour stand police box between open/closed/stained/glass/flying."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev box [open\\|closed\\|stained\\|glass\\|flying]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nms")),(0,r.kt)("td",{parentName:"tr",align:null},"Spawn a custom NMS monster."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev nms [monster]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"circuit")),(0,r.kt)("td",{parentName:"tr",align:null},"Give a player a random used TARDIS circuit."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev circuit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tis")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks and lists TARDIS Information System entries."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev tis"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"displayitem")),(0,r.kt)("td",{parentName:"tr",align:null},"Various commands to test Item Display custom blocks and lights - sub-commands are: ",(0,r.kt)("inlineCode",{parentName:"td"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"remove"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"place"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"break"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"convert"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"chunk")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem place [display block]")," see separate table below.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom tree",src:n(4774).Z,width:"600",height:"337"})),(0,r.kt)("h3",{id:"tdev-displayitem"},(0,r.kt)("inlineCode",{parentName:"h3"},"/tdev displayitem")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"add")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a TARDIS Shop module item (hologram) above the targeted block."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem add"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remove")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes an Item Display from above the targeted block."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem remove"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"place")),(0,r.kt)("td",{parentName:"tr",align:null},"Places an Item Display custom block on top of the block the player is targeting."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem place [custom block]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"break")),(0,r.kt)("td",{parentName:"tr",align:null},"Breaks the Item Display custom block the player is targeting and drops the related item."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem break"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"convert")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts old custom mushroom blocks to Item Display custom blocks in TARDIS interiors and ARS rooms."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem convert"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chunk")),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes all Item Display and Interaction entieies in the chunk the player currently resides in."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/tdev displayitem chunk"))))))}k.isMDXComponent=!0},4774:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/tree-d7cbe0b856afb19b2ecb03773fd3a54d.jpg"}}]);