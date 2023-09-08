"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),h=r,d=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={layout:"default",title:"Achievements"},o="Achievements",l={unversionedId:"achievements",id:"achievements",title:"Achievements",description:"Players can gain rewards for TARDIS achievements. The achievement system is mostly automatic, and works in conjunction",source:"@site/docs/achievements.md",sourceDirName:".",slug:"/achievements",permalink:"/TARDIS-Docs/achievements",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/achievements.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Achievements"},sidebar:"docs",previous:{title:"Universal Translator",permalink:"/TARDIS-Docs/translator"},next:{title:"Timelore books",permalink:"/TARDIS-Docs/books"}},s={},m=[{value:"Customising achievements",id:"customising-achievements",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"achievements"},"Achievements"),(0,r.kt)("p",null,"Players can gain rewards for TARDIS achievements. The achievement system is mostly automatic, and works in conjunction\nwith TARDIS ",(0,r.kt)("a",{parentName:"p",href:"books"},"books"),". Minecraft achievement popup included :)"),(0,r.kt)("p",null,"Players can get the following achievements."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tardis")," \u2014 awarded when they create their TARDIS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"travel")," \u2014 awarded for travelling the configured distance in their TARDIS (Note: only distances travelled from point\nA to point B ",(0,r.kt)("strong",{parentName:"li"},"in the same world")," count towards this achievement)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rooms")," \u2014 awarded after growing one of each enabled room type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"farm")," \u2014 awarded after farming one of each mob type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"energy")," \u2014 awarded for overcharging the Artron Energy Capacitor by the configured amount"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"friends")," \u2014 awarded for adding the configured amount of companions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kill")," \u2014 awarded for killing a charged creeper")),(0,r.kt)("p",null,"Players can list achievements with the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisbook list")," command. This shows the name of the achievement/book and the\nreward type and amount."),(0,r.kt)("h2",{id:"customising-achievements"},"Customising achievements"),(0,r.kt)("p",null,"You can edit the ",(0,r.kt)("em",{parentName:"p"},"plugins/TARDIS/achievements.yml")," file to change the attributes of each achievement. An achievement\nlooks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/achievements.yml"',title:'"/plugins/TARDIS/achievements.yml"'},"rooms:\n  name: Room freak\n  description: Grow all room types\n  required: 1\n  reward_type: XP\n  reward_amount: 50\n  enabled: true\n  repeatable: false\n  auto: true\n  message: Grew a truckload of rooms\n  icon: BOOKSHELF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The achievement (in this example ",(0,r.kt)("inlineCode",{parentName:"li"},"rooms"),") matches the name of the book the player gets to read about the achievement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name:")," is used as the title of the book"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description:")," is not currently used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"required:")," is the amount of the goal the player needs to gain e.g. for the \u2018travel\u2019 achievement this is set to\n100000 \u2014 the number of blocks they need to travel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reward_type:")," what sort of reward to give the player when they reach the achievement goal. This can be:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XP")),(0,r.kt)("li",{parentName:"ul"},"An item specified by\nthe ",(0,r.kt)("a",{parentName:"li",href:"https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/browse/src/main/java/org/bukkit/Material.java"},"Bukkit material enum"),"\nname"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reward_amount:")," the amount of the reward type the player gets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled:")," a true or false value determining whether the achievement is available to players"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repeatable:")," a true or false value determining whether the achievement can be repeated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auto:")," if ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," the player does not have to manually initiate the start of the achievement with\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"/tardisbook start")," command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message:")," is the second line of the achievement notification"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"icon:")," is material icon used in the achievement notification")))}u.isMDXComponent=!0}}]);