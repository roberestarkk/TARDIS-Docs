"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[1810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={layout:"default",title:"Planets"},i="Planets",o={unversionedId:"planets",id:"planets",title:"Planets",description:"The TARDIS plugin has 3 built-in planets from the Whoniverse. To enable the planets on the server use the",source:"@site/docs/planets.md",sourceDirName:".",slug:"/planets",permalink:"/TARDIS-Docs/planets",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/planets.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Planets"}},s={},u=[{value:"Prior to v4.9.0",id:"prior-to-v490",level:3},{value:"Planet Skaro",id:"planet-skaro",level:2},{value:"Planet Gallifrey",id:"planet-gallifrey",level:2},{value:"Planet Siluria",id:"planet-siluria",level:2},{value:"Enabling Planets",id:"enabling-planets",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"planets"},"Planets"),(0,l.kt)("p",null,"The TARDIS plugin has 3 built-in planets from the Whoniverse. To enable the planets on the server use the\ncommand ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardisworld enable [gallifrey|siluria|skaro]")," - this will enable the worlds on ",(0,l.kt)("em",{parentName:"p"},"planets.yml"),", load the related\nlistener classes on the server, and generate the spawn chunks ready for TARDIS time travel."),(0,l.kt)("h3",{id:"prior-to-v490"},"Prior to v4.9.0"),(0,l.kt)("p",null,"The planets are created by installing custom datapacks on the server. To enable the planets on the server use the\ncommand ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardisworld load [gallifrey|siluria|skaro]")," - this will install the appropriate custom dimension datapack on\nthe server, and the world will be generated on the next server restart. The worlds will be named according to vanilla\nMinecraft conventions using the default world name as specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"server.properties")," e.g. ",(0,l.kt)("em",{parentName:"p"},"world_tardis_gallifrey"),",\n",(0,l.kt)("em",{parentName:"p"},"world_tardis_siluria"),", and ",(0,l.kt)("em",{parentName:"p"},"world_tardis_skaro")),(0,l.kt)("p",null,"The planets are listed and described below!"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"To get the best experience on these planets, it's recommended to enable the ",(0,l.kt)("a",{parentName:"p",href:"modules"},"Weeping Angels module"),"\n(or for versions prior to v5.0.0, download the accompanying plugin and resource pack).\nOtherwise, mobs will look like vanilla mobs!"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://tardisjenkins.duckdns.org:8080/job/TARDISWeepingAngels/lastSuccessfulBuild/"},"TARDISWeepingAngels")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/eccentricdevotion/TARDISWeepingAngels-Resource-Pack"},"TARDISWeepingAngels-ResourcePack")))),(0,l.kt)("h2",{id:"planet-skaro"},"Planet Skaro"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"planet skaro",src:a(70597).Z,width:"600",height:"337"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This world is limited to the customised Desert biome."),(0,l.kt)("li",{parentName:"ul"},"If configured, all water is acid and will harm / kill the player (wearing armour reduces the effect). Use a boat!"),(0,l.kt)("li",{parentName:"ul"},"Dalek structures will generate automatically as you explore the world \u2014 there are currently two Dalek building types,\na big\nmain building and a smaller corridor type one, and some other village type structures will also spawn nearby."),(0,l.kt)("li",{parentName:"ul"},"Daleks will spawn in the big main buildings. There is a 10% chance that a Dalek will spawn flying in the air, but this\ncan be disabled in the config described below."),(0,l.kt)("li",{parentName:"ul"},"A random loot chest is located in the main Dalek building \u2014 wear plenty of armour if you want to raid these!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{id:"buckets"}),"You can fill Acid Buckets and Rust Buckets by using an empty bucket on water and lava. Acid Buckets can be used to make Acid Batteries, which in turn can be used to make [Rift Manipulators](rift-manipulator). Rust Buckets are used in the crafting recipe for the [Rust Plague](http://tardis.wikia.com/wiki/Rust_plague) Sword - this deals more damage to Daleks (Use the TARDIS-Resource-Pack to see the textures).")),(0,l.kt)("h2",{id:"planet-gallifrey"},"Planet Gallifrey"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"planet gallifrey",src:a(3509).Z,width:"600",height:"337"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This world is limited to customised Badlands, Wooded Badlands and Eroded Badlands biomes."),(0,l.kt)("li",{parentName:"ul"},"Time Lord structures will generate automatically as you explore the world \u2014 multiple buildings will be grouped in a\nsmall village."),(0,l.kt)("li",{parentName:"ul"},"Time Lords will spawn in these structures."),(0,l.kt)("li",{parentName:"ul"},"A random loot chest is also located in the structures.")),(0,l.kt)("h2",{id:"planet-siluria"},"Planet Siluria"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"planet siluria",src:a(34678).Z,width:"600",height:"337"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This world is limited to the Bamboo Jungle and Bamboo Jungle Hills biomes."),(0,l.kt)("li",{parentName:"ul"},"Structures will generate automatically as you explore the jungles."),(0,l.kt)("li",{parentName:"ul"},"Silurians will spawn in these structures."),(0,l.kt)("li",{parentName:"ul"},"A random loot chest is also located in the structures.")),(0,l.kt)("h2",{id:"enabling-planets"},"Enabling Planets"),(0,l.kt)("p",null,"All planets must be enabled using the ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardisworld enable")," command. There are some world specific options in\nthe ",(0,l.kt)("a",{parentName:"p",href:"configuration-planets"},"planets.yml configuration file"),". Below is a sample code, and it is commented to describe\neach line."),(0,l.kt)("p",null,"For acid potion effects, see\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionType.html"},"Bukkit PotionType Enum"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/planets.yml"',title:'"/plugins/TARDIS/planets.yml"'},"# other config #\n# Planet name\nskaro:\n  # Whether this world should be created and managed by TARDIS.\n  # This must be enabled to load the world and requires a restart.\n  enabled: false\n  # Whether the world should generate vanilla structures\n  generate_structures: true\n\n  #### The following are exclusive to Skaro. ###\n  # Whether all the water in the world is acid (and harms the player).\n  acid: true\n  # the amount of damage a player takes when in acid water each second.\n  acid_damage: 5\n  # Optional list of potion effects to give the player when they are in acid water.\n  acid_potions:\n    - WEAKNESS\n    - POISON\n  # Whether rust is enabled (used to gain Rust Buckets\n  # an ingredient in crafting the Rust Plague Sword).\n  rust: true\n  # Whether or not to enable flying daleks\n  flying_daleks: true\n\n  ## other terrain options, see planets configuration ##\n\n  # Exclusive to custom planets.\n  # Should non-doctor who (vanilla) mobs spawn?\n  spawn_other_mobs: true\n# other config #\n")),(0,l.kt)("admonition",{title:"tl;dr",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Use the command ",(0,l.kt)("inlineCode",{parentName:"li"},"/tardisworld enable [gallifrey|siluria|skaro]")),(0,l.kt)("li",{parentName:"ol"},"(Re)start the server"))))}c.isMDXComponent=!0},3509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gallifrey-f93f74d46d29074a8c38841304b5274e.jpg"},34678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/siluria-e6e98beed92790acdbe88a6bbd4fae3c.jpg"},70597:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/skaro-7037ec93f2b3546bf569c04d7d6c742b.jpg"}}]);