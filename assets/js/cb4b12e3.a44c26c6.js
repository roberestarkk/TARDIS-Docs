"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[9446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,d(d({ref:t},p),{},{components:n})):a.createElement(k,d({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<i;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={layout:"default",title:"Admin Commands"},d="Admin Commands",l={unversionedId:"commands/admin",id:"commands/admin",title:"Admin Commands",description:"This page contains all /tardisadmin sub-commands. Every command requires the tardis.admin permission node.",source:"@site/docs/commands/admin.md",sourceDirName:"commands",slug:"/commands/admin",permalink:"/TARDIS-Docs/commands/admin",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/admin.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Admin Commands"},sidebar:"docs",previous:{title:"Commands",permalink:"/TARDIS-Docs/category/commands"},next:{title:"Area Commands",permalink:"/TARDIS-Docs/commands/area"}},o={},s=[{value:"<code>/tardisadmin</code>",id:"tardisadmin",level:2},{value:"<code>/tardisadmin enter [player]</code>",id:"tardisadmin-enter-player",level:3},{value:"<code>/tardisadmin recharger [name]</code>",id:"tardisadmin-recharger-name",level:3},{value:"<code>/tardisadmin decharge [name]</code>",id:"tardisadmin-decharge-name",level:3},{value:"<code>/tardisadmin condenser</code>",id:"tardisadmin-condenser",level:3},{value:"Chameleon Arch commands",id:"chameleon-arch-commands",level:2},{value:"Disguise commands",id:"disguise-commands",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"admin-commands"},"Admin Commands"),(0,r.kt)("p",null,"This page contains all ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin")," sub-commands. Every command requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"tardis.admin")," permission node."),(0,r.kt)("h2",{id:"tardisadmin"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisadmin")),(0,r.kt)("p",null,"All command under here start with ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin")),(0,r.kt)("h3",{id:"tardisadmin-enter-player"},(0,r.kt)("inlineCode",{parentName:"h3"},"/tardisadmin enter [player]")),(0,r.kt)("p",null,"Enter a player\u2019s TARDIS (by direct teleport instead of the door)."),(0,r.kt)("h3",{id:"tardisadmin-recharger-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"/tardisadmin recharger [name]")),(0,r.kt)("p",null,"Set the beacon block you are targeting in game, as a TARDIS recharge station."),(0,r.kt)("h3",{id:"tardisadmin-decharge-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"/tardisadmin decharge [name]")),(0,r.kt)("p",null,"Remove the specified beacon recharger from the config."),(0,r.kt)("h3",{id:"tardisadmin-condenser"},(0,r.kt)("inlineCode",{parentName:"h3"},"/tardisadmin condenser")),(0,r.kt)("p",null,"Set the chest you are targeting in game, as the server's community Artron Condenser - see ",(0,r.kt)("a",{parentName:"p",href:"/TARDIS-Docs/condenser#server-condenser"},"Server condenser"),"."),(0,r.kt)("p",null,"List all TARDISs and their locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin list\n")),(0,r.kt)("p",null,"Remove a specified player\u2019s TARDIS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin delete [player]\n")),(0,r.kt)("p",null,"Create a TARDIS for a player. The TARDIS exterior will appear on the block that\nthe command sender is targeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tadmin create [player] [schematic] <wall> <floor>\n")),(0,r.kt)("p",null,"List TARDISes that haven\u2019t been used for an extended period."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin prunelist [number of days]\n")),(0,r.kt)("p",null,"Remove TARDISes that haven\u2019t been used for an extended period. See the\n",(0,r.kt)("a",{parentName:"p",href:"prune"},"Prune")," page for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin prune [number of days]\n")),(0,r.kt)("p",null,"Check or set a player\u2019s TARDIS count."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin playercount [player]\n/tardisadmin playercount [player] [count]\n")),(0,r.kt)("p",null,"Delete a player\u2019s TARDIS database records (will not remove any blocks in game)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin purge [player]\n")),(0,r.kt)("p",null,"List chunks that are being kept loaded by TARDIS ","\u2014"," either for room growing\nor Police Box locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin chunks\n")),(0,r.kt)("p",null,"Convert the SQLite database records to a MySQL import file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin convert_database\n")),(0,r.kt)("p",null,"Download the latest TARDIS plugin from the Jenkins server. Restart the server to update the plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin update_plugins\n")),(0,r.kt)("p",null,"Create a custom chameleon preset file - see ",(0,r.kt)("a",{parentName:"p",href:"custom-preset"},"Custom presets"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin make_preset [name] [asymmetric:true|false]\n")),(0,r.kt)("p",null,"Spawn an abandoned TARDIS - see ",(0,r.kt)("a",{parentName:"p",href:"abandon#spawning-abandoned-tardises"},"Spawning abandoned TARDISes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin spawn_abandoned [SCHEMATIC] [PRESET] [DIRECTION] world x y z\n")),(0,r.kt)("p",null,"Clear all data associated with walking into the TARDIS (they\u2019ll still work, just toggle open the door again)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin purge_portals\n")),(0,r.kt)("p",null,"Import Multiverse worlds into TARDIS's ",(0,r.kt)("em",{parentName:"p"},"planets.yml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin mvimport\n")),(0,r.kt)("p",null,"Create a 11 x 11 block maze starting at the targeted block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin maze\n")),(0,r.kt)("p",null,"Clear the dispersed status of all TARDISes, or list which TARDISes are currently dispersed by HADS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin dispersed [clear|list]\n")),(0,r.kt)("p",null,"Sets the WorldGuard entry or exit flags for all regions in the TARDIS ",(0,r.kt)("inlineCode",{parentName:"p"},"default_world"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin region_flag [entry|exit]\n")),(0,r.kt)("p",null,"The actual commands run for ",(0,r.kt)("inlineCode",{parentName:"p"},"[entry]")," are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/rg flag [region_id] exit -w [world_name]\n/rg flag [region_id] entry -w [world_name] -g nonmembers deny\n")),(0,r.kt)("p",null,"And ",(0,r.kt)("inlineCode",{parentName:"p"},"[exit]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/rg flag [region_id]entry -w [world_name]\n/rg flag [region_id] exit -w [world_name] -g everyone deny\n/rg flag [region_id] use -w [world_name] allow\n/rg flag [region_id] chest-access -w [world_name]\n")),(0,r.kt)("p",null,"Set a player\u2019s TARDIS repair count."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin repair [player] [amount]\n")),(0,r.kt)("p",null,"Remove a blueprint permission from a player."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin revoke [player] [permission]\n")),(0,r.kt)("p",null,"Set a player's console size/type in the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tadmin set_size [player] [size]\n")),(0,r.kt)("h2",{id:"chameleon-arch-commands"},"Chameleon Arch commands"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also the ",(0,r.kt)("a",{parentName:"em",href:"chameleon-arch"},"Chameleon Arch")," page."),"\nView an \u2018arched\u2019 player\u2019s real name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin arch [player]\n")),(0,r.kt)("p",null,"Force toggle a player\u2019s \u2018arched\u2019 status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin arch [player] force\n")),(0,r.kt)("h2",{id:"disguise-commands"},"Disguise commands"),(0,r.kt)("p",null,"Disguise a player as the specified entity type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin disguise [player] [entity type]\n")),(0,r.kt)("p",null,"Remove a disguise from a player."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin undisguise [player]\n")),(0,r.kt)("p",null,"Find hidden TARDISes, or empty blocks with TARDIS protection on them.\nIf protected blocks are found, click the listing in chat to remove the protection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisadmin find [radius]\n")))}c.isMDXComponent=!0}}]);