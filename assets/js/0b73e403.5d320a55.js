"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[9177],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>g});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=a.createContext({}),o=function(t){var n=a.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=o(t.components);return a.createElement(m.Provider,{value:n},t.children)},d="mdxType",N={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=o(e),k=r,g=d["".concat(m,".").concat(k)]||d[k]||N[k]||l;return e?a.createElement(g,i(i({ref:n},u),{},{components:e})):a.createElement(g,i({ref:n},u))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=e[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},47255:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=e(87462),r=(e(67294),e(3905));const l={layout:"default",title:"Room configuration"},i="Room configuration",p={unversionedId:"configuration/rooms",id:"configuration/rooms",title:"Room configuration",description:"These config options are found in the file: rooms.yml",source:"@site/docs/configuration/rooms.md",sourceDirName:"configuration",slug:"/configuration/rooms",permalink:"/TARDIS-Docs/configuration/rooms",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/configuration/rooms.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Room configuration"},sidebar:"docs",previous:{title:"Police Box and preset configuration options",permalink:"/TARDIS-Docs/configuration/preset"},next:{title:"Storage configuration options",permalink:"/TARDIS-Docs/configuration/storage"}},m={},o=[{value:"Room jettisons",id:"room-jettisons",level:2}],u={toc:o},d="wrapper";function N(t){let{components:n,...e}=t;return(0,r.kt)(d,(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"room-configuration"},"Room configuration"),(0,r.kt)("p",null,"These config options are found in the file: ",(0,r.kt)("inlineCode",{parentName:"p"},"rooms.yml")),(0,r.kt)("p",null,"The rooms configuration sets the seed block and Artron Energy costs for growing rooms. Each room type has its own\nsub-section with two keys: the room ",(0,r.kt)("inlineCode",{parentName:"p"},"cost"),", and the room ",(0,r.kt)("inlineCode",{parentName:"p"},"seed"),"."),(0,r.kt)("p",null,"The format is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/rooms.yml"',title:'"/plugins/TARDIS/rooms.yml"'},"rooms:\n   [ROOMTYPE]:\n      enabled: [true|false]\n      cost: [amount]\n      offset: [negative amount]\n      seed: [MATERIAL]\n      user: [true|false]\n")),(0,r.kt)("p",null,"All rooms are enabled by default, the rest of the settings are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ROOMTYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"cost"),(0,r.kt)("th",{parentName:"tr",align:null},"offset"),(0,r.kt)("th",{parentName:"tr",align:null},"seed block"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANTIGRAVITY"),(0,r.kt)("td",{parentName:"tr",align:null},"625"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"SANDSTONE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APIARY"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"BEE_NEST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AQUARIUM"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"TUBE_CORAL_BLOCK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARBORETUM"),(0,r.kt)("td",{parentName:"tr",align:null},"325"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"OAK_LEAVES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BAKER"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"END_STONE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BAMBOO"),(0,r.kt)("td",{parentName:"tr",align:null},"475"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"BAMBOO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BEDROOM"),(0,r.kt)("td",{parentName:"tr",align:null},"475"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"GLOWSTONE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIRDCAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"YELLOW_GLAZED_TERRACOTTA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHEMISTRY"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"BLAST_FURNACE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMPTY"),(0,r.kt)("td",{parentName:"tr",align:null},"250"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"GLASS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FARM"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"DIRT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GARDEN"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"CHERRY_LEAVES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GEODE"),(0,r.kt)("td",{parentName:"tr",align:null},"650"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"AMETHYST_BLOCK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRAVITY"),(0,r.kt)("td",{parentName:"tr",align:null},"625"),(0,r.kt)("td",{parentName:"tr",align:null},"-20"),(0,r.kt)("td",{parentName:"tr",align:null},"MOSSY_COBBLESTONE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GREENHOUSE"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"MELON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HARMONY"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"STONE_BRICK_STAIRS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HUTCH"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"ACACIA_LOG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IGLOO"),(0,r.kt)("td",{parentName:"tr",align:null},"650"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"PACKED_ICE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IISTUBIL"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"WHITE_GLAZED_TERRACOTTA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KITCHEN"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"PUMPKIN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LAZARUS"),(0,r.kt)("td",{parentName:"tr",align:null},"750"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"FURNACE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIBRARY"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"ENCHANTING_TABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MANGROVE"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"MUDDY_MANGROVE_ROOTS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAZE"),(0,r.kt)("td",{parentName:"tr",align:null},"650"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"LODESTONE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MUSHROOM"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"GRAVEL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NETHER"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"BLACKSTONE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PASSAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"CLAY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PEN"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"MOSS_BLOCK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POOL"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"SNOW_BLOCK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"650"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"HOPPER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RENDERER"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"TERRACOTTA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHELL"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"DEAD_BRAIN_CORAL_BLOCK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMELTER"),(0,r.kt)("td",{parentName:"tr",align:null},"750"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"CHEST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"HAY_BLOCK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STALL"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"BROWN_GLAZED_TERRACOTTA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SURGERY"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"RED_CONCRETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TRENZALORE"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"BRICKS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VAULT"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"DISPENSER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VILLAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"OAK_LOG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WOOD"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"OAK_PLANKS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WORKSHOP"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"CRAFTING_TABLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ZERO"),(0,r.kt)("td",{parentName:"tr",align:null},"650"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"OAK_BUTTON")))),(0,r.kt)("h2",{id:"room-jettisons"},"Room jettisons"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NB:")," These config options are found in the file: ",(0,r.kt)("inlineCode",{parentName:"p"},"artron.yml")),(0,r.kt)("p",null,"Set the percentage of energy the TARDIS gets back when a room is jettisoned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jettison: [percentage]\n")),(0,r.kt)("p",null,"The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"75"),"."),(0,r.kt)("p",null,"Set the seed block for room jettisons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jettison_seed: [material]\n")),(0,r.kt)("p",null,"The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"TNT"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"category/plugin-configuration"},"Back to main configuration page")))}N.isMDXComponent=!0}}]);