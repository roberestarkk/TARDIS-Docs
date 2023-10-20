"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[8030],{27263:(e,t,n)=>{n.d(t,{Z:()=>s,w:()=>m});var a=n(67294),l=n(34360),r=n(12699);const m=e=>{const{children:t}=e;return t};function o(e){let{yml:t,cmd:n}=e,l=t[n].aliases;const r="object"==typeof l?l.join(", "):l;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent0",id:n},a.createElement("code",null,"/",n)),a.createElement("td",null,a.createElement("code",null,r)),a.createElement("td",null,a.createElement("code",null,t[n].permission))),a.createElement("tr",null,a.createElement("td",{colSpan:3},t[n].description)),a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,t[n].usage.replace("<command>",n)))))}function c(e){let{ymlKey:t,value:n,cmd:l}=e,o=n.permission,c=null!=o?"__Permission:__ `"+o+"`":"";return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent1",id:t},a.createElement("code",null,t)),a.createElement("td",null,a.createElement(r.D,{children:n.description,components:{p:m}}),a.createElement("br",null),a.createElement(r.D,{children:c,components:{p:m}})),a.createElement("td",null,a.createElement("code",null,n.usage.replace("<command>",l)))))}function s(e){let{data:t,args:n,extra:r}=e;const m=(0,l.Qc)(t),s=(0,l.Qc)(n);let i=Object.keys(m)[0],d=a.createElement(a.Fragment,null),u=a.createElement(a.Fragment,null);return 0==r&&(d=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Command"),a.createElement("th",null,"Aliases"),a.createElement("th",null,"Permission"))),u=a.createElement(o,{key:i,yml:m,cmd:i})),a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},d,a.createElement("tbody",null,u,a.createElement("tr",null,a.createElement("th",null,"Arguments"),a.createElement("th",null,"Description"),a.createElement("th",null,"Usage")),Object.entries(s).map((e=>{let[t,n]=e;return a.createElement(c,{key:t,ymlKey:t,value:n,cmd:i})}))))))}},87433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>m,metadata:()=>c,toc:()=>i});var a=n(87462),l=(n(67294),n(3905)),r=n(27263);const m={layout:"default",title:"Remote Command"},o="The Remote command",c={unversionedId:"commands/remote",id:"commands/remote",title:"Remote Command",description:"This command lets you remotely control a TARDIS, and is useful for server admins and command blocks.",source:"@site/docs/commands/remote.mdx",sourceDirName:"commands",slug:"/commands/remote",permalink:"/TARDIS-Docs/commands/remote",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/remote.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Remote Command"},sidebar:"docs",previous:{title:"Recipe Command",permalink:"/TARDIS-Docs/commands/recipe"},next:{title:"Room Command",permalink:"/TARDIS-Docs/commands/room"}},s={},i=[{value:"<code>/tardisremote</code>",id:"tardisremote",level:2},{value:"Video",id:"video",level:3}],d={toc:i},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-remote-command"},"The Remote command"),(0,l.kt)("p",null,"This command lets you remotely control a TARDIS, and is useful for server admins and command blocks."),(0,l.kt)("h2",{id:"tardisremote"},(0,l.kt)("inlineCode",{parentName:"h2"},"/tardisremote")),(0,l.kt)(r.Z,{data:"tardisremote:\n    aliases: tremote\n    description: Remote control a TARDIS.\n    permission: tardis.remote\n    usage: /<command> [player] [action] [options...]\n    ",args:"\n    travel:\n      description: >\n        Make a player\u2019s TARDIS travel to the specified location. Travel options are:\n        \n        - `home`\n        \n        - `area [area name]`\n        \n        - coordinates e.g. `world x y z`\n      usage: /<command> [player] travel [home|area|coords]\n    comehere:\n      description: Make a player\u2019s TARDIS come to the currently targeted block\n      usage: /<command> [player] comehere\n    hide:\n      description: Hide a player\u2019s TARDIS\n      usage: /<command> [player] hide\n    rebuild:\n      description: Rebuild a player\u2019s TARDIS\n      usage: /<command> [player] rebuild\n    back:\n      description: Make a player\u2019s TARDIS travel to its previous location\n      usage: /<command> [player] back    \n    ",extra:"false",mdxType:"CommandTable"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"can be run from command blocks, but the specified player must be online"),(0,l.kt)("li",{parentName:"ul"},"if the player who is running the command does ",(0,l.kt)("strong",{parentName:"li"},"NOT")," have ",(0,l.kt)("inlineCode",{parentName:"li"},"tardis.admin")," permission, then the normal checks are\nperformed (energy/permissions/circuits/plugin respect etc for the specified player)"),(0,l.kt)("li",{parentName:"ul"},"use via Command Block will fail silently if above checks fail, as we can\u2019t message a command block..."),(0,l.kt)("li",{parentName:"ul"},"if player has ",(0,l.kt)("inlineCode",{parentName:"li"},"tardis.admin")," permission then no energy is used / only basic checks performed (so we\u2019re not griefing\nanything)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comehere")," comes to the currently targeted block (only available to TARDIS admin players)"))),(0,l.kt)("h3",{id:"video"},"Video"),(0,l.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/VypqSYls1QM0",frameborder:"0",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);