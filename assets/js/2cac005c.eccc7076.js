"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[8841],{27263:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(34360),r=t(12699);const m=e=>{const{children:n}=e;return n};function s(e){let{yml:n,cmd:t}=e,l=n[t].aliases;const r="object"==typeof l?l.join(", "):l;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent0",id:t},a.createElement("code",null,"/",t)),a.createElement("td",null,a.createElement("code",null,r)),a.createElement("td",null,a.createElement("code",null,n[t].permission))),a.createElement("tr",null,a.createElement("td",{colSpan:3},n[t].description)),a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,n[t].usage.replace("<command>",t)))))}function c(e){let{ymlKey:n,value:t,cmd:l}=e,s=t.permission,c=null!=s?"__Permission:__ `"+s+"`":"";return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent1"},a.createElement("code",null,n)),a.createElement("td",null,a.createElement(r.D,{children:t.description,components:{p:m}}),a.createElement("br",null),a.createElement(r.D,{children:c,components:{p:m}})),a.createElement("td",null,a.createElement("code",null,t.usage.replace("<command>",l)))))}function o(e){let{data:n,args:t,cmd:r,extra:m}=e;const o=(0,l.Qc)(n),d=(0,l.Qc)(t);let i="",u="";return"false"==m&&(i=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Command"),a.createElement("th",null,"Aliases"),a.createElement("th",null,"Permission"))),u=a.createElement(s,{yml:o,cmd:r})),a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},i,a.createElement("tbody",null,u,a.createElement("tr",null,a.createElement("th",null,"Arguments"),a.createElement("th",null,"Description"),a.createElement("th",null,"Usage")),Object.entries(d).map((e=>{let[n,t]=e;return a.createElement(c,{ymlKey:n,value:t,indent:0,cmd:r})}))))))}},93747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>m,metadata:()=>c,toc:()=>d});var a=t(87462),l=(t(67294),t(3905)),r=t(27263);const m={layout:"default",title:"Junk Console Command"},s="Junk Console Commands",c={unversionedId:"commands/junk",id:"commands/junk",title:"Junk Console Command",description:"Commands related to the Junk TARDIS.",source:"@site/docs/commands/junk.mdx",sourceDirName:"commands",slug:"/commands/junk",permalink:"/TARDIS-Docs/commands/junk",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/junk.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Junk Console Command"},sidebar:"docs",previous:{title:"Give Commands",permalink:"/TARDIS-Docs/commands/give"},next:{title:"Miscellaneous Commands",permalink:"/TARDIS-Docs/commands/misc"}},o={},d=[{value:"<code>/tardisjunk</code>",id:"tardisjunk",level:2}],i={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"junk-console-commands"},"Junk Console Commands"),(0,l.kt)("p",null,"Commands related to the Junk TARDIS."),(0,l.kt)("h2",{id:"tardisjunk"},(0,l.kt)("inlineCode",{parentName:"h2"},"/tardisjunk")),(0,l.kt)(r.Z,{data:"tardisjunk:\n    aliases: tjunk\n    description: Create, find, return and delete the Junk TARDIS.\n    permission: tardis.junk\n    usage: /<command> [create|find|time|return|delete]\n    ",args:"\n    create:\n      description: Create a Junk TARDIS.\n      permission: tardis.admin\n      usage: /<command> create\n    find:\n      description: Find the current location of the Junk TARDIS.\n      permission: tardis.junk\n      usage: /<command> find\n    time:\n      description: Find out the time before the Junk TARDIS automatically returns home.\n      permission: tardis.junk\n      usage: /<command> time\n    return:\n      description: Return the Junk TARDIS to its home location.\n      permission: tardis.admin\n      usage: /<command> return\n    delete:\n      description: Delete the Junk TARDIS.\n      permission: tardis.admin\n      usage: /<command> delete\n    ",cmd:"tardisjunk",extra:"false",mdxType:"CommandTable"}))}p.isMDXComponent=!0}}]);