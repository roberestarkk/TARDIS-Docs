"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[8276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={layout:"default",title:"TARDIS Shop",slug:"/tardis-shop"},i="TARDIS Shop",l={unversionedId:"modules/tardis-shop",id:"modules/tardis-shop",title:"TARDIS Shop",description:"TARDIS Shop is a simple shop module for TARDIS items and blueprints.",source:"@site/docs/modules/tardis-shop.md",sourceDirName:"modules",slug:"/tardis-shop",permalink:"/tardis-shop",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/modules/tardis-shop.md",tags:[],version:"current",frontMatter:{layout:"default",title:"TARDIS Shop",slug:"/tardis-shop"},sidebar:"docs",previous:{title:"Dynmap-TARDIS",permalink:"/dynmap-tardis"},next:{title:"Sonic Blaster",permalink:"/sonic-blaster"}},s={},p=[{value:"Enabling the module",id:"enabling-the-module",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Config options",id:"config-options",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Setting up shop",id:"setting-up-shop",level:2},{value:"Setting item costs",id:"setting-item-costs",level:3},{value:"Adding shop blocks",id:"adding-shop-blocks",level:3},{value:"Removing shop blocks",id:"removing-shop-blocks",level:3},{value:"Going shopping",id:"going-shopping",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tardis-shop"},"TARDIS Shop"),(0,r.kt)("p",null,"TARDIS Shop is a simple shop module for TARDIS items and blueprints."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," For TARDIS version 4.14.0 and below you can download it here:\n",(0,r.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDISShop/"},"http://tardisjenkins.duckdns.org:8080/job/TARDISShop/")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"The instructions below are for the TARDIS module, but are pretty much the same, with some extra configuration options (\ndatabase / plugin respect), and separate commands instead of sub-commands."))),(0,r.kt)("h2",{id:"enabling-the-module"},"Enabling the module"),(0,r.kt)("p",null,"To use the shop module, it must be enabled in the TARDIS config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisconfig shop [true|false]")," to enable or disable the feature."),(0,r.kt)("li",{parentName:"ul"},"A server restart is required when changing the config value.")),(0,r.kt)("p",null,"Shops are ",(0,r.kt)("strong",{parentName:"p"},"server")," based, players ",(0,r.kt)("em",{parentName:"p"},"cannot")," setup their own personal shops."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"In order for the Shop module to function you will need to install:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/vault.34315/"},"Vault")),(0,r.kt)("li",{parentName:"ul"},"A permissions plugin")),(0,r.kt)("h2",{id:"config-options"},"Config options"),(0,r.kt)("p",null,"These can be found in ",(0,r.kt)("em",{parentName:"p"},"shop.yml"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PRISMARINE_BRICKS")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of block that TARDIS items will be displayed on. This should be specified using the ",(0,r.kt)("a",{parentName:"td",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material"},"Bukkit Material ENUM")," name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tardis_admin_free")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether players with ",(0,r.kt)("inlineCode",{parentName:"td"},"tardis.admin")," permission get TARDIS items for free from the shop")))),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tardisshop.use")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allow players to buy items from a TARDIS Shop"),(0,r.kt)("td",{parentName:"tr",align:null},"op")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tardisshop.admin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allow players to set up a TARDIS Shop"),(0,r.kt)("td",{parentName:"tr",align:null},"op")))),(0,r.kt)("h2",{id:"setting-up-shop"},"Setting up shop"),(0,r.kt)("p",null,"A shop can be in any location and any size ","\u2014"," you simply place a block anywhere you want to sell an item and then\nstock the item using a command."),(0,r.kt)("h3",{id:"setting-item-costs"},"Setting item costs"),(0,r.kt)("p",null,"The cost for a TARDIS item is stored in ",(0,r.kt)("em",{parentName:"p"},"items.yml"),". You will need to edit this file and set prices based on however\nyour current server economy is set up."),(0,r.kt)("p",null,"If you change the cost after adding a shop block, you can update the block with the new price by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisshop update\n")),(0,r.kt)("p",null,"This will reload the items configuration and update any blocks where the price is different than the config."),(0,r.kt)("h3",{id:"adding-shop-blocks"},"Adding shop blocks"),(0,r.kt)("p",null,"Adding new shop blocks is pretty simple:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Place the configured block (",(0,r.kt)("inlineCode",{parentName:"li"},"PRISMARINE_BRICKS")," by default) in the desired location"),(0,r.kt)("li",{parentName:"ol"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisshop add [item]"),"\nYou can use tab completion to see a list of available items"),(0,r.kt)("li",{parentName:"ol"},"Follow the onscreen instructions and click the block ","\u2014"," a display item will appear with display text labels for\nits name and cost")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TARDIS Shop block",src:n(62568).Z,width:"600",height:"356"})),(0,r.kt)("h3",{id:"removing-shop-blocks"},"Removing shop blocks"),(0,r.kt)("p",null,"To remove a shop block:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisshop remove")),(0,r.kt)("li",{parentName:"ol"},"Follow the onscreen instructions and click the block you want to remove")),(0,r.kt)("h3",{id:"going-shopping"},"Going shopping"),(0,r.kt)("p",null,"To purchase items:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Right-click a TARDIS Shop block"),(0,r.kt)("li",{parentName:"ul"},"If you have sufficient credit, you will be given the appropriate item")))}m.isMDXComponent=!0},62568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tardis_shop_block-877f7fc212f71120e6329d25dcffa45e.jpg"}}]);