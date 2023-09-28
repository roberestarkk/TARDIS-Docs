"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4393],{27263:(e,t,n)=>{n.d(t,{Z:()=>s,w:()=>i});var a=n(67294),l=n(34360),r=n(12699);const i=e=>{const{children:t}=e;return t};function m(e){let{yml:t,cmd:n}=e,l=t[n].aliases;const r="object"==typeof l?l.join(", "):l;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent0",id:n},a.createElement("code",null,"/",n)),a.createElement("td",null,a.createElement("code",null,r)),a.createElement("td",null,a.createElement("code",null,t[n].permission))),a.createElement("tr",null,a.createElement("td",{colSpan:3},t[n].description)),a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,t[n].usage.replace("<command>",n)))))}function o(e){let{ymlKey:t,value:n,cmd:l}=e,m=n.permission,o=null!=m?"__Permission:__ `"+m+"`":"";return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent1"},a.createElement("code",null,t)),a.createElement("td",null,a.createElement(r.D,{children:n.description,components:{p:i}}),a.createElement("br",null),a.createElement(r.D,{children:o,components:{p:i}})),a.createElement("td",null,a.createElement("code",null,n.usage.replace("<command>",l)))))}function s(e){let{data:t,args:n,cmd:r,extra:i}=e;const s=(0,l.Qc)(t),c=(0,l.Qc)(n);let d=a.createElement(a.Fragment,null),p=a.createElement(a.Fragment,null);return"false"==i&&(d=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Command"),a.createElement("th",null,"Aliases"),a.createElement("th",null,"Permission"))),p=a.createElement(m,{key:r,yml:s,cmd:r})),a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},d,a.createElement("tbody",null,p,a.createElement("tr",null,a.createElement("th",null,"Arguments"),a.createElement("th",null,"Description"),a.createElement("th",null,"Usage")),Object.entries(c).map((e=>{let[t,n]=e;return a.createElement(o,{key:t,ymlKey:t,value:n,indent:0,cmd:r})}))))))}},86257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),r=n(27263);const i={layout:"default",title:"Give Commands"},m="TARDIS Give Commands",o={unversionedId:"commands/give",id:"commands/give",title:"Give Commands",description:"TARDIS admins (players with the permission tardis.admin) can use this command to give items and energy to players.",source:"@site/docs/commands/give.mdx",sourceDirName:"commands",slug:"/commands/give",permalink:"/TARDIS-Docs/commands/give",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/give.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Give Commands"},sidebar:"docs",previous:{title:"Dev Commands",permalink:"/TARDIS-Docs/commands/dev"},next:{title:"Junk Console Command",permalink:"/TARDIS-Docs/commands/junk"}},s={},c=[{value:"<code>/tardisgive</code>",id:"tardisgive",level:2},{value:"Artron",id:"artron",level:2},{value:"Items",id:"items",level:2},{value:"Seed Blocks",id:"seed-blocks",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tardis-give-commands"},"TARDIS Give Commands"),(0,l.kt)("p",null,"TARDIS admins (players with the permission ",(0,l.kt)("inlineCode",{parentName:"p"},"tardis.admin"),") can use this command to give items and energy to players."),(0,l.kt)("h2",{id:"tardisgive"},(0,l.kt)("inlineCode",{parentName:"h2"},"/tardisgive")),(0,l.kt)(r.Z,{data:"tardisgive:\n        aliases: tgive\n        description: Give TARDIS items, Artron energy, Seed blocks, kits, knowledge books, or recipe discoveries to a player.\n        permission: tardis.admin\n        usage: /<command> [player] [subcommand] [options]..\n    ",args:"\n    item:\n      description: Gives TARDIS item(s) to a player.\n      usage: /<command> [player] item [amount]\n    artron:\n      description: Gives a player's TARDIS Artron energy.\n      usage: /<command> [player] artron [full|empty|amount]\n    tachyon:\n      description: Give Tachyon energy to a player's Vortex Manipulator.\n      usage: /<command> [player] artron [full|empty|amount]\n    kit:\n      description: Gives a TARDIS kit to a player. Kits can be configured in [kits.yml](../kits)\n      usage: /<command> [player] kit [kit]\n    seed:\n      description: Gives a TARDIS Seed block to a player.\n      usage: /<command> [player] seed [tardis type] [wall black] [floor block]\n    knowledge:\n      description: Grants knowledge of a TARDIS crafting recipe to a player.\n      usage: /<command> [player] knowledge [recipe|all]\n    recipes:\n      description: Grants a TARDIS recipe to a player.\n      usage: /<command> [player] recipes [recipe|all]\n    blueprint:\n      description: Gives a TARDIS Blueprint Disk to a player.\n      usage: /<command> [player] blueprint [blueprint]\n",cmd:"tardisgive",extra:"false",mdxType:"CommandTable"}),(0,l.kt)("h2",{id:"artron"},"Artron"),(0,l.kt)("p",null,"This will alter the specified player\u2019s TARDIS Artron Energy level."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/tardisgive [player] artron [full|empty|amount]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"full")," will set the level to the amount specified by ",(0,l.kt)("inlineCode",{parentName:"li"},"full_charge")," in the Artron config file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"empty")," will set the level to ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"amount")," can be either positive or negative, but the final level will never be less than ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," or higher\nthan ",(0,l.kt)("inlineCode",{parentName:"li"},"full_charge"),".")),(0,l.kt)("h2",{id:"items"},"Items"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/tardisgive [player] [item] [amount]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"item")," is any valid TARDIS item available in ",(0,l.kt)("a",{parentName:"p",href:"/recipes"},"recipes.yml"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"amount")," determines how many of the item to give the player."),(0,l.kt)("h2",{id:"seed-blocks"},"Seed Blocks"),(0,l.kt)("p",null,"This will give the player a TARDIS seed block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/tardisgive [player] seed [tardis type] [wall black] [floor block]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tardis type")," You can find a list here: ",(0,l.kt)("a",{parentName:"li",href:"/creating-a-tardis#tardis-types"},"List of interiors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wall block")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"floor block")," can be any valid ",(0,l.kt)("a",{parentName:"li",href:"/walls"},"wall or floor material"))))}u.isMDXComponent=!0}}]);