"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[6336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(t),h=r,u=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={layout:"default",title:"Handles"},i="Handles",s={unversionedId:"handles",id:"handles",title:"Handles",description:"Handles is the name given by the Eleventh Doctor to a Cyberman head that he obtained from the Maldovarium Market, and",source:"@site/docs/handles.md",sourceDirName:".",slug:"/handles",permalink:"/TARDIS-Docs/handles",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/handles.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Handles"},sidebar:"docs",previous:{title:"Archiving consoles",permalink:"/TARDIS-Docs/archive"},next:{title:"TARDIS HUD Display",permalink:"/TARDIS-Docs/display"}},l={},d=[{value:"Talking to Handles",id:"talking-to-handles",level:3},{value:"Examples",id:"examples",level:3},{value:"Commands",id:"commands",level:3},{value:"Config Options",id:"config-options",level:3},{value:"Interaction",id:"interaction",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Programming Handles",id:"programming-handles",level:2},{value:"Video",id:"video",level:2}],m={toc:d},c="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(c,(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handles"},"Handles"),(0,r.kt)("p",null,"Handles is the name given by the Eleventh Doctor to a Cyberman head that he obtained from the Maldovarium Market, and\nsubsequently repaired."),(0,r.kt)("p",null,"You can craft and place Handles so that he can interact with you and the TARDIS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Handles",src:t(336).Z,width:"600",height:"337"})),(0,r.kt)("p",null,"To see the Handles crafting recipe, use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisrecipe handles"),". Alternatively, you can give yourself or\nother players a Handles with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisgive [player] handles 1")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Handles recipe",src:t(72775).Z,width:"400",height:"166"})),(0,r.kt)("p",null,"Handles can only be placed inside the TARDIS, and must be placed in an item frame."),(0,r.kt)("a",{id:"communicator"}),"Outside the TARDIS you can only communicate with Handles if he is in your inventory, or you have a communicator (and Handles is placed in the TARDIS) \u2014 use the `/tardisrecipe communicator` to view the recipe, or give a communicator with the `/tardisgive [player] communicator 1` command.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Comunicator",src:t(6908).Z,width:"600",height:"337"})),(0,r.kt)("h3",{id:"talking-to-handles"},"Talking to Handles"),(0,r.kt)("p",null,"Use chat to talk to Handles. All communication must be proceeded by a prefix \u2014 by default this is: \u201cHey Handles\u201d \u2014\nfollowed by one or more keywords."),(0,r.kt)("p",null,"Keywords for chat processing are: ",(0,r.kt)("em",{parentName:"p"},"\u201ctakeoff\u201d, \u201cland\u201d, \u201cscan, \u201clock\u201d, \u201cunlock\u201d, \u201cremind\u201d, \u201csay\u201d, \u201cname\u201d, \u201ctime\u201d,\n\u201chandbrake\u201d")," \u2014 or ",(0,r.kt)("em",{parentName:"p"},"\u201cbrake\u201d")," or ",(0,r.kt)("em",{parentName:"p"},"\u201cpark\u201d")," , ",(0,r.kt)("em",{parentName:"p"},"\u201ctravel\u201d")," \u2014 travel can be to ",(0,r.kt)("em",{parentName:"p"},"\u201chome\u201d, \u201csave\u201d ","[name]",", \u201cplayer\u201d ","[name]",",\n\u201carea\u201d ","[name]"),", ",(0,r.kt)("em",{parentName:"p"},"\u201cbiome\u201d ","[name]")," \u2014 normal TARDIS permissions apply."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hey handles takeoff\nhey handles land\nhey handles handbrake on\nhey handles scan the exterior\nhey handles lock the door\nhey handles unlock the door\nhey handles remind me to get some wood in 5\nhey handles say something funny\nhey handles what is my name\nhey handles what time is it\n")),(0,r.kt)("p",null,"Reminders need to have the number of minutes (until the reminder) as the last part of the handles request\ne.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"hey handles remind me to [do something] in 5\xa0"),"(reminder times will not be 100% accurate, because the plugin only\nchecks for reminders every minute \u2014 can be changed in the config)"),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Name a Handles Program Disk"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/handles disk [name]\n")),(0,r.kt)("p",null,"Remove the Handles record from the TARDIS database. Use this if Handles is destroyed accidentally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/handles remove\n")),(0,r.kt)("h3",{id:"config-options"},"Config Options"),(0,r.kt)("p",null,"Handles comes with several configuration options, which can be edited in ",(0,r.kt)("inlineCode",{parentName:"p"},"handles.yml"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Most Handles options (except ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reminders"),") require regular expressions (",(0,r.kt)("em",{parentName:"p"},"regex"),") to properly fine tune the possible commands to listen to."),(0,r.kt)("p",{parentName:"admonition"},"You should familiarise yourself with regex and test your responses with sites like ",(0,r.kt)("a",{parentName:"p",href:"https://regexr.com/"},"RegExr"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All your regexes must be in single quotes!")),(0,r.kt)("p",null,"The default configuration is listed below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=/plugin/TARDIS/handles.yml",title:"/plugin/TARDIS/handles.yml"},"# must use single quotes to wrap regular expressions\nenabled: true\nprefix: '^(?:hey,?\\s+)?handles(?:[,!:\\s]|\\.\\.\\.+)'\nreminders:\n  enabled: true\n  schedule: 1200\ncore-commands:\n  craft: '\\b(?:craft|build|make|create)\\b.*\\b(\\w+)\\s+(tardis\\b)?(\\b.*\\b)'\n  remind: '\\bremind\\s*(?:me\\s+to)?\\s+(.+)\\s+.+(\\d+)'\n  say: '\\bsay\\s+(.+)'\n  name: '\\bname\\b'\n  time: '\\btime\\b'\n  call: '\\bcall\\b'\n  takeoff: '\\btake\\s*off\\b'\n  land: '\\bland\\b'\n  hide: '\\bhide\\b'\n  rebuild: '\\brebuild\\b'\n  direction: '\\b(?:fac(?:ing|e)|direction)\\s+(\\w+)'\n  lights: '\\b(?:lights\\b.*\\b(off|on)|(off|on)\\b.*\\blights)\\b'\n  power: '\\b(?:power\\b.*\\b(off|on)|(off|on)\\b.*\\bpower)\\b'\n  brake: '\\b(?:(?:hand)*brake|park)\\b'\n  travel:\n    save: '\\b(?:travel|go)\\s+(?:to\\s+)?.*?(?:saved?(?:\\s+(?:location|destination|place|point))?|destination)\\s+(\\w+)'\n    home: '\\b(?:travel|go)\\s+(?:to\\s+)?.*?home\\b'\n    random: '\\b(?:(?:travel|go)\\s+(?:to\\s+)?.*?|find\\b.+)\\brandom\\b'\n    player: '\\b(?:travel|go)\\s+(?:to\\s+)?.*?player\\s+(\\w+)'\n    area: '\\b(?:travel|go)\\s+(?:to\\s+)?.*?(?:\\b(\\w+)\\s+area|area\\s+(\\w+))\\s*?$'\n    biome: '\\b(?:(?:travel|go)\\s+(?:to\\s+)?.*?|find\\b.+)(?:\\b([\\w:]+)\\s+biome|biome\\s+(\\w+))\\s*?$'\n    cave: '\\b(?:(?:travel|go)\\s+(?:to\\s+)?.*?|find\\b.+)\\bcave\\b'\n    village: '\\b(?:(?:travel|go)\\s+(?:to\\s+)?.*?|find\\b.+)\\bvillage\\b'\n  door:\n    open: '\\b(?:open\\b.*\\bdoor|door\\b.*\\bopen(?:ed)?)\\b'\n    close: '\\b(?:close\\b.*\\bdoor|door\\b.*\\bclosed?)\\b'\n    lock: '\\b(?:lock\\b.*\\bdoor|door\\b.*\\block(?:ed)?)\\b'\n    unlock: '\\b(?:unlock\\b.*\\bdoor|door\\b.*\\bunlock(?:ed)?)\\b'\n  scan: '\\bscan\\b'\n  teleport: '\\bteleport\\b'\n  transmat: '\\btransmat\\s+(?:(?:me\\s+)?to\\s+(?:the\\s+)?)?(.+)'\ncustom-commands:\n  weird:\n    regex: '\\bblah\\b'\n    permission: tardis.handles.use\n    commands:\n      - handles tell %player_name% I'm sorry %player_displayname%, I'm afraid I can't do that\n      - handles weird\n  console:\n    regex: '\\bconsole\\s+(\\w+)'\n    permission: tardis.admin\n    commands:\n      - ^tadmin list $1\n")),(0,r.kt)("p",null,"Breakdown of some options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - boolean true/false, whether Handles is enabled, requires a server restart to change"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reminders.enabled")," - boolean true/false, whether Handles can remind you of things"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reminders.schedule")," - integer, how often Handles should check for reminders, in ticks")),(0,r.kt)("h2",{id:"interaction"},"Interaction"),(0,r.kt)("p",null,"Clicking on a placed handles plays a Handles voice\nsnippet (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDIS-SoundResourcePack/"},"TARDIS-SoundResourcePack")," required)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDIS-Resource-Pack"},"TARDIS-Resource-Pack")," has been updated with the Handles\nmodel and textures \u2014 the Handles block is a BIRCH","_","BUTTON."),(0,r.kt)("p",null,"Clicking on Handles while sneaking opens the ",(0,r.kt)("a",{parentName:"p",href:"#programming-handles"},"Handles Programming GUI")," where you can create\nprogram disks, ",(0,r.kt)("em",{parentName:"p"},"documentation yet to come"),", disks can be renamed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/handles disk [name]")," command). More on this\nlater, but it should extend Handles\u2019 functionality a bit with events and more actions and will work with Advanced\nConsole Disks."),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"The is one parent permission, with three children for finer control that allow players to use the Handles companion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tardis.handles\n")),(0,r.kt)("p",null,"And the children:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tardis.handles.use\ntardis.handles.communicator\ntardis.handles.program\n")),(0,r.kt)("h2",{id:"programming-handles"},"Programming Handles"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The programming feature is not fully tested and you may run into bugs! Please report them to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDIS/issues"},"the issues tab on GitHub")," if you do.")),(0,r.kt)("p",null,"Clicking on Handles while sneaking opens the Handles Programming GUI where you can create program disks, allowing you to\nextend Handles\u2019 functionality with events, actions, and Advanced Console Disks."),(0,r.kt)("p",null,"The Handles programming is block based ","\u2014"," instructions are represented as blocks that you add in a particular order\nto create a program that Handles can run."),(0,r.kt)("h2",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/pyJQHvxqpA8?rel=0",frameborder:"0",allowfullscreen:!0}))}p.isMDXComponent=!0},6908:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/communicator-7cca9bc766a3a61337390d3cf2b7b320.jpg"},336:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/handles-eadb3b1d05cee68fe1a9425f16686f54.jpg"},72775:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/handles_recipe-4e6267d6ab04c3f5310d0ae1b992de13.jpg"}}]);