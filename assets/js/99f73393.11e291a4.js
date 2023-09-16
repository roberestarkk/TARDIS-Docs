"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3664],{39446:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(67294),a=n(34360),o=n(12699);const i=e=>{const{children:t}=e;return t};function s(e){let{data:t,ymlKey:n,value:a,indent:r=0}=e;const p=typeof a,d="object"===p;n=n.trim().split(".").pop();const m=d?Object.entries(a).map((e=>{let[n,a]=e;return l.createElement(s,{data:t,key:n,ymlKey:n,value:a,indent:r+1})})):null,u=t.split("\n").find((e=>e.trim().startsWith(n+":")));let c=null;u.includes("#")&&(c=u.split("#")[1]);let h="";for(let l=0;l<r;l++)h+="&nbsp;&nbsp;&nbsp;&nbsp;";if(d)return l.createElement(l.Fragment,null,l.createElement("tr",null,l.createElement("td",{colSpan:3},l.createElement("span",{dangerouslySetInnerHTML:{__html:h}}),l.createElement("code",null,n,":"))),m);const k=l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{dangerouslySetInnerHTML:{__html:h}}),l.createElement("code",null,n.toString())),l.createElement("td",null,l.createElement("code",null,p.toString())),l.createElement("td",null,l.createElement("code",null,a.toString())));return c?l.createElement(l.Fragment,null,k,l.createElement("tr",null,l.createElement("td",{colSpan:3},l.createElement("span",{dangerouslySetInnerHTML:{__html:h}}),l.createElement(o.D,{children:c,components:{p:i}})))):k}function r(e){let{data:t}=e;const n=(0,a.Qc)(t);return l.createElement(l.Fragment,null,l.createElement("div",{className:"table-responsive"},l.createElement("table",{className:"table table-striped table-bordered"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Config"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default"))),l.createElement("tbody",null,Object.entries(n).map((e=>{let[n,a]=e;return l.createElement(s,{data:t,key:n,ymlKey:n,value:a,indent:0})}))))))}},54477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var l=n(87462),a=(n(67294),n(3905)),o=n(39446);const i={layout:"default",title:"TARDIS Shop"},s="TARDIS Shop",r={unversionedId:"modules/tardis-shop",id:"modules/tardis-shop",title:"TARDIS Shop",description:"TARDIS Shop is a simple shop module for TARDIS items and blueprints.",source:"@site/docs/modules/tardis-shop.mdx",sourceDirName:"modules",slug:"/modules/tardis-shop",permalink:"/TARDIS-Docs/modules/tardis-shop",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/modules/tardis-shop.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"TARDIS Shop"},sidebar:"docs",previous:{title:"Sonic Blaster",permalink:"/TARDIS-Docs/modules/sonic-blaster"},next:{title:"Vortex Manipulator",permalink:"/TARDIS-Docs/modules/vortex-manipulator"}},p={},d=[{value:"Enabling the module",id:"enabling-the-module",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Config options",id:"config-options",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Setting up shop",id:"setting-up-shop",level:2},{value:"Setting item costs",id:"setting-item-costs",level:3},{value:"Adding shop blocks",id:"adding-shop-blocks",level:3},{value:"Removing shop blocks",id:"removing-shop-blocks",level:3},{value:"Going shopping",id:"going-shopping",level:3}],m={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,l.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-shop"},"TARDIS Shop"),(0,a.kt)("p",null,"TARDIS Shop is a simple shop module for TARDIS items and blueprints."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," For TARDIS version 4.14.0 and below you can download it here:\n",(0,a.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/TARDISShop/"},"http://tardisjenkins.duckdns.org:8080/job/TARDISShop/")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"The instructions below are for the TARDIS module, but are pretty much the same, with some extra configuration options (\ndatabase / plugin respect), and separate commands instead of sub-commands."))),(0,a.kt)("h2",{id:"enabling-the-module"},"Enabling the module"),(0,a.kt)("p",null,"To use the shop module, it must be enabled in the TARDIS config."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardisconfig shop [true|false]")," to enable or disable the feature."),(0,a.kt)("li",{parentName:"ul"},"A server restart is required when changing the config value.")),(0,a.kt)("p",null,"Shops are ",(0,a.kt)("strong",{parentName:"p"},"server")," based, players ",(0,a.kt)("em",{parentName:"p"},"cannot")," setup their own personal shops."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"In order for the Shop module to function you will need to install:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/vault.34315/"},"Vault")),(0,a.kt)("li",{parentName:"ul"},"A permissions plugin")),(0,a.kt)("h2",{id:"config-options"},"Config options"),(0,a.kt)("p",null,"These are the shop configuration options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/shop.yml"',title:'"/plugins/TARDIS/shop.yml"'},"block: PRISMARINE_BRICKS\ntardis_admin_free: true\n")),(0,a.kt)(o.Z,{data:"\nblock: PRISMARINE_BRICKS # The type of block that TARDIS items will be displayed on. This should be specified using the [Bukkit Material ENUM](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material) name\ntardis_admin_free: true # Whether players with `tardis.admin` permission get TARDIS items for free from the shop\n",mdxType:"ConfigTable"}),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Permission"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tardisshop.use")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allow players to buy items from a TARDIS Shop"),(0,a.kt)("td",{parentName:"tr",align:null},"op")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tardisshop.admin")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allow players to set up a TARDIS Shop"),(0,a.kt)("td",{parentName:"tr",align:null},"op")))),(0,a.kt)("h2",{id:"setting-up-shop"},"Setting up shop"),(0,a.kt)("p",null,"A shop can be in any location and any size ","\u2014"," you simply place a block anywhere you want to sell an item and then\nstock the item using a command."),(0,a.kt)("h3",{id:"setting-item-costs"},"Setting item costs"),(0,a.kt)("p",null,"The cost for a TARDIS item is stored in ",(0,a.kt)("em",{parentName:"p"},"items.yml"),". You will need to edit this file and set prices based on however\nyour current server economy is set up."),(0,a.kt)("p",null,"If you change the cost after adding a shop block, you can update the block with the new price by running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisshop update\n")),(0,a.kt)("p",null,"This will reload the items configuration and update any blocks where the price is different than the config."),(0,a.kt)("h3",{id:"adding-shop-blocks"},"Adding shop blocks"),(0,a.kt)("p",null,"Adding new shop blocks is pretty simple:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Place the configured block (",(0,a.kt)("inlineCode",{parentName:"li"},"PRISMARINE_BRICKS")," by default) in the desired location"),(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardisshop add [item]"),"\nYou can use tab completion to see a list of available items"),(0,a.kt)("li",{parentName:"ol"},"Follow the onscreen instructions and click the block ","\u2014"," a display item will appear with display text labels for\nits name and cost")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TARDIS Shop block",src:n(62568).Z,width:"600",height:"356"})),(0,a.kt)("h3",{id:"removing-shop-blocks"},"Removing shop blocks"),(0,a.kt)("p",null,"To remove a shop block:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardisshop remove")),(0,a.kt)("li",{parentName:"ol"},"Follow the onscreen instructions and click the block you want to remove")),(0,a.kt)("h3",{id:"going-shopping"},"Going shopping"),(0,a.kt)("p",null,"To purchase items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Right-click a TARDIS Shop block"),(0,a.kt)("li",{parentName:"ul"},"If you have sufficient credit, you will be given the appropriate item")))}c.isMDXComponent=!0},62568:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/tardis_shop_block-877f7fc212f71120e6329d25dcffa45e.jpg"}}]);