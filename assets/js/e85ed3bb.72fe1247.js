"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2336],{27263:(e,t,n)=>{n.d(t,{Z:()=>c,w:()=>r});var a=n(67294),o=n(34360),m=n(12699);const r=e=>{const{children:t}=e;return t};function l(e){let{yml:t,cmd:n}=e,o=t[n].aliases;const m="object"==typeof o?o.join(", "):o;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent0",id:n},a.createElement("code",null,"/",n)),a.createElement("td",null,a.createElement("code",null,m)),a.createElement("td",null,a.createElement("code",null,t[n].permission))),a.createElement("tr",null,a.createElement("td",{colSpan:3},t[n].description)),a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,t[n].usage.replace("<command>",n)))))}function s(e){let{ymlKey:t,value:n,cmd:o}=e,l=n.permission,s=null!=l?"__Permission:__ `"+l+"`":"";return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent1",id:t},a.createElement("code",null,t)),a.createElement("td",null,a.createElement(m.D,{children:n.description,components:{p:r}}),a.createElement("br",null),a.createElement(m.D,{children:s,components:{p:r}})),a.createElement("td",null,a.createElement("code",null,n.usage.replace("<command>",o)))))}function c(e){let{data:t,args:n,cmd:m,extra:r}=e;const c=(0,o.Qc)(t),d=(0,o.Qc)(n);let i=a.createElement(a.Fragment,null),u=a.createElement(a.Fragment,null);return 0==r&&(i=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Command"),a.createElement("th",null,"Aliases"),a.createElement("th",null,"Permission"))),u=a.createElement(l,{key:m,yml:c,cmd:m})),a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},i,a.createElement("tbody",null,u,a.createElement("tr",null,a.createElement("th",null,"Arguments"),a.createElement("th",null,"Description"),a.createElement("th",null,"Usage")),Object.entries(d).map((e=>{let[t,n]=e;return a.createElement(s,{key:t,ymlKey:t,value:n,cmd:m})}))))))}},92743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),m=n(27263);const r={layout:"default",title:"Room Command"},l="Room Commands",s={unversionedId:"commands/room",id:"commands/room",title:"Room Command",description:"Commands to add and configure TARDIS rooms.",source:"@site/docs/commands/room.mdx",sourceDirName:"commands",slug:"/commands/room",permalink:"/TARDIS-Docs/commands/room",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/room.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Room Command"},sidebar:"docs",previous:{title:"Remote Command",permalink:"/TARDIS-Docs/commands/remote"},next:{title:"Schematic Command",permalink:"/TARDIS-Docs/commands/schematic"}},c={},d=[{value:"<code>/tardisroom</code>",id:"tardisroom",level:2}],i={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"room-commands"},"Room Commands"),(0,o.kt)("p",null,"Commands to add and configure TARDIS rooms."),(0,o.kt)("h2",{id:"tardisroom"},(0,o.kt)("inlineCode",{parentName:"h2"},"/tardisroom")),(0,o.kt)(m.Z,{data:"tardisroom:\n    aliases: troom\n    description: Set TARDIS room configuration options, and add new rooms.\n    permission: tardis.create\n    usage: /<command> [subcommand] [options...]\n    ",args:"\n    add:\n      description: Add a new custom room schematic.\n      permission: tardis.admin\n      usage: /<command> add [schematic name]\n    blocks:\n      description: List the blocks needed to grow a room. If a room name is given, the block list will be shown in the chat/console. If `save` is specified, a text file is created the the _plugins/TARDIS/_ folder for each room that is enabled on the server.\n      usage: /<command> blocks [room name|save]\n    cost:\n      description: Set the cost of a custom room.\n      permission: tardis.admin\n      usage: /<command> add [schematic name]\n    enabled:\n      description: Set the custom room as active/inactive.\n      permission: tardis.admin\n      usage: /<command> [schematic name] [true|false]\n    offset:\n      description: Set the offset of a custom room.\n      permission: tardis.admin\n      usage: /<command> [schematic name] [negative amount]\n    required:\n      description: List the blocks needed to grow a room.\n      usage: /<command> required [room name]\n    seed:\n      description: Set the seed block of a custom room.\n      permission: tardis.admin\n      usage: /<command> [schematic name] [material]\n    ",cmd:"tardisroom",extra:"false",mdxType:"CommandTable"}))}p.isMDXComponent=!0}}]);