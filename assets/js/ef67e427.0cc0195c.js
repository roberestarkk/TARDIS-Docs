"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[7132],{27263:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),c=n(34360),a=n(12699);const i=e=>{const{children:t}=e;return t};function s(e){let{yml:t,cmd:n}=e,c=t[n].aliases;const a="object"==typeof c?c.join(", "):c;return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{className:"indent0",id:n},r.createElement("code",null,"/",n)),r.createElement("td",null,r.createElement("code",null,a)),r.createElement("td",null,r.createElement("code",null,t[n].permission))),r.createElement("tr",null,r.createElement("td",{colSpan:3},t[n].description)),r.createElement("tr",null,r.createElement("td",{colSpan:3},r.createElement("code",null,t[n].usage.replace("<command>",n)))))}function m(e){let{ymlKey:t,value:n,cmd:c}=e,s=n.permission,m=null!=s?"__Permission:__ `"+s+"`":"";return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{className:"indent1"},r.createElement("code",null,t)),r.createElement("td",null,r.createElement(a.D,{children:n.description,components:{p:i}}),r.createElement("br",null),r.createElement(a.D,{children:m,components:{p:i}})),r.createElement("td",null,r.createElement("code",null,n.usage.replace("<command>",c)))))}function o(e){let{data:t,args:n,cmd:a,extra:i}=e;const o=(0,c.Qc)(t),d=(0,c.Qc)(n);let l="",u="";return"false"==i&&(l=r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Command"),r.createElement("th",null,"Aliases"),r.createElement("th",null,"Permission"))),u=r.createElement(s,{key:a,yml:o,cmd:a})),r.createElement(r.Fragment,null,r.createElement("div",{className:"table-responsive"},r.createElement("table",{className:"table table-striped table-bordered"},l,r.createElement("tbody",null,u,r.createElement("tr",null,r.createElement("th",null,"Arguments"),r.createElement("th",null,"Description"),r.createElement("th",null,"Usage")),Object.entries(d).map((e=>{let[t,n]=e;return r.createElement(m,{key:t,ymlKey:t,value:n,indent:0,cmd:a})}))))))}},4244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=n(87462),c=(n(67294),n(3905)),a=n(27263);const i={layout:"default",title:"Chemistry Command"},s="Chemistry Commands",m={unversionedId:"commands/chemistry",id:"commands/chemistry",title:"Chemistry Command",description:"Commands to open chemistry guis and view recipes and formulas.",source:"@site/docs/commands/chemistry.mdx",sourceDirName:"commands",slug:"/commands/chemistry",permalink:"/TARDIS-Docs/commands/chemistry",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/chemistry.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Chemistry Command"},sidebar:"docs",previous:{title:"Bind command",permalink:"/TARDIS-Docs/commands/bind"},next:{title:"Commands",permalink:"/TARDIS-Docs/commands"}},o={},d=[{value:"<code>/tardischemistry</code>",id:"tardischemistry",level:2},{value:"<code>/tardischemistry gui</code>",id:"tardischemistry-gui",level:3}],l={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,c.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"chemistry-commands"},"Chemistry Commands"),(0,c.kt)("p",null,"Commands to open chemistry guis and view recipes and formulas."),(0,c.kt)("h2",{id:"tardischemistry"},(0,c.kt)("inlineCode",{parentName:"h2"},"/tardischemistry")),(0,c.kt)(a.Z,{data:"tardischemistry:\n    aliases: tchemistry\n    description: Open a Chemistry creative GUI or show a chemical formula.\n    permission: tardis.chemistry\n    usage: /<command> [gui|formula|recipe] [which]\n    ",args:"\n    formula:\n      description: Show a compound or product formula.\n      permission: tardis.formula.show\n      usage: /<command> formula [compound|product]\n    recipe:\n      description: Show a Chemistry GUI block recipe.\n      permission: tardis.help\n      usage: /<command> recipe [creative|construct|compound|reduce|product|lab]\n    gui:\n      description: Show a chemistry GUI. See the table below for more information.\n      permission: tardis.chemistry.command\n      usage: /<command> gui [creative|construct|compound|reduce|product|lab]\n      creative:\n        description: Open the 'Chemistry creative' GUI.\n        usage: /<command> gui creative [elements|compounds|products|lab]\n        permission: tardis.chemistry.creative\n      construct:\n        description: Open the 'Element constructor' GUI.\n        usage: /<command> gui construct\n        permission: tardis.construct.build\n      compound:\n        description: Open the 'Chemical compounds' creation GUI.\n        usage: /<command> gui compound\n        permission: tardis.compound.create\n      reduce:\n        description: Open the 'Material reducer' GUI.\n        usage: /<command> gui reduce\n        permission: tardis.reducer.use\n      product:\n        description: Open the 'Product crafting' GUI.\n        usage: /<command> gui product\n        permission: tardis.product.craft\n      lab:\n        description: Open the 'Lab table' GUI.\n        usage: /<command> gui lab\n        permission: tardis.lab.combine\n    ",cmd:"tardischemistry",extra:"false",mdxType:"CommandTable"}),(0,c.kt)("h3",{id:"tardischemistry-gui"},(0,c.kt)("inlineCode",{parentName:"h3"},"/tardischemistry gui")),(0,c.kt)(a.Z,{data:"tardischemistry:\n    aliases: tchemistry\n    description: Open a Chemistry creative GUI or show a chemical formula.\n    permission: tardis.chemistry\n    usage: /<command> [gui|formula|recipe] [which]\n    ",args:"\n      creative:\n        description: Open the 'Chemistry creative' GUI.\n        usage: /<command> gui creative [elements|compounds|products|lab]\n        permission: tardis.chemistry.creative\n      construct:\n        description: Open the 'Element constructor' GUI.\n        usage: /<command> gui construct\n        permission: tardis.construct.build\n      compound:\n        description: Open the 'Chemical compounds' creation GUI.\n        usage: /<command> gui compound\n        permission: tardis.compound.create\n      reduce:\n        description: Open the 'Material reducer' GUI.\n        usage: /<command> gui reduce\n        permission: tardis.reducer.use\n      product:\n        description: Open the 'Product crafting' GUI.\n        usage: /<command> gui product\n        permission: tardis.product.craft\n      lab:\n        description: Open the 'Lab table' GUI.\n        usage: /<command> gui lab\n        permission: tardis.lab.combine\n    ",cmd:"tardischemistry",extra:"true",mdxType:"CommandTable"}))}p.isMDXComponent=!0}}]);