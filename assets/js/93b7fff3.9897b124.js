"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[1405],{39446:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),l=n(34360),a=n(12699);const o=e=>{const{children:t}=e;return t};function r(e){let{data:t,ymlKey:n,value:l,indent:s=0}=e;const g=typeof l,d="object"===g;n=n.trim().split(".").pop();const h=d?Object.entries(l).map((e=>{let[n,l]=e;return i.createElement(r,{data:t,ymlKey:n,value:l,indent:s+1})})):null,u=t.split("\n").find((e=>e.trim().startsWith(n+":")));let c=null;u.includes("#")&&(c=u.split("#")[1]);let m="indent"+s;if(d){let e;return c&&(e=i.createElement("tr",null,i.createElement("td",{colSpan:3,className:m},i.createElement(a.D,{children:c,components:{p:o}})))),i.createElement(i.Fragment,null,i.createElement("tr",null,i.createElement("td",{colSpan:3,className:m,id:n.toString()},i.createElement("code",null,n,":"))),e,h)}const p=i.createElement("tr",null,i.createElement("td",{className:m,id:n.toString()},i.createElement("code",null,n.toString())),i.createElement("td",null,i.createElement("code",null,g.toString())),i.createElement("td",null,i.createElement("code",null,l.toString())));return c?i.createElement(i.Fragment,null,p,i.createElement("tr",null,i.createElement("td",{colSpan:3,className:m},i.createElement(a.D,{children:c,components:{p:o}})))):p}function s(e){let{data:t}=e;const n=(0,l.Qc)(t);return i.createElement(i.Fragment,null,i.createElement("div",{className:"table-responsive"},i.createElement("table",{className:"table table-striped table-bordered"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Config"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default"))),i.createElement("tbody",null,Object.entries(n).map((e=>{let[n,l]=e;return i.createElement(r,{data:t,ymlKey:n,value:l,indent:0})}))))))}},17672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),l=(n(67294),n(3905)),a=n(39446);const o={layout:"default",title:"Siege Mode"},r="Siege Mode",s={unversionedId:"siege-mode",id:"siege-mode",title:"Siege Mode",description:"As of TARDIS version 3.2, the plugin allows you to engage Siege mode on your TARDIS. You can read more about Siege mode",source:"@site/docs/siege-mode.mdx",sourceDirName:".",slug:"/siege-mode",permalink:"/TARDIS-Docs/siege-mode",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/siege-mode.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Siege Mode"},sidebar:"docs",previous:{title:"Chameleon Arch",permalink:"/TARDIS-Docs/chameleon-arch"},next:{title:"The Junk TARDIS",permalink:"/TARDIS-Docs/junk-tardis"}},g={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Siege mode Artron settings",id:"siege-mode-artron-settings",level:3},{value:"The Siege Cube",id:"the-siege-cube",level:2},{value:"Transferring energy to the Siege Cube",id:"transferring-energy-to-the-siege-cube",level:3},{value:"Disengaging Siege mode",id:"disengaging-siege-mode",level:2},{value:"Lost Siege Cube / broken Siege mode",id:"lost-siege-cube--broken-siege-mode",level:2}],h={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"siege-mode"},"Siege Mode"),(0,l.kt)("p",null,"As of TARDIS version 3.2, the plugin allows you to engage Siege mode on your TARDIS. You can read more about Siege mode\nat the ",(0,l.kt)("a",{parentName:"p",href:"https://tardis.fandom.com/wiki/Siege_mode"},"TARDIS wikia"),"."),(0,l.kt)("p",null,"To engage Siege mode use the button in TARDIS Control Menu, or add a lever to the console (to do this you can use\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardis update siege")," command)."),(0,l.kt)("h2",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"When you engage Siege mode the following will happen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Entry and exit of the TARDIS will no longer be possible"),(0,l.kt)("li",{parentName:"ul"},"Time travel in the TARDIS will no longer be possible"),(0,l.kt)("li",{parentName:"ul"},"Most other TARDIS functions will be disabled"),(0,l.kt)("li",{parentName:"ul"},"The TARDIS exterior will transform into a Siege Cube")),(0,l.kt)("p",null,"While in Siege mode, the TARDIS is geared for and ONLY FOR the survival of the people inside the TARDIS. Depending on\nthe configuration settings, this means:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All healing in the TARDIS is boosted a little bit"),(0,l.kt)("li",{parentName:"ul"},"Food grows faster in this state"),(0,l.kt)("li",{parentName:"ul"},"Animals have a chance of having twins instead of a single birth"),(0,l.kt)("li",{parentName:"ul"},"All negative mobs in the TARDIS are butchered"),(0,l.kt)("li",{parentName:"ul"},"The desktop theme is changed to a dark wool version"),(0,l.kt)("li",{parentName:"ul"},"The Artron reserves are slowly depleted to support the Siege mode"),(0,l.kt)("li",{parentName:"ul"},"The Artron creeper is sacrificed for the good of the TARDIS, and gives an amount of Artron energy")),(0,l.kt)("p",null,"All these features can be configured, see details below."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"config.yml")," contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"siege")," configuration section with the following defaults:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},"siege:\n  enabled: true\n  breeding: 0\n  growth: 0\n  butcher: false\n  creeper: false\n  healing: false\n  texture: false\n")),(0,l.kt)("p",null,"The settings are explained below:"),(0,l.kt)(a.Z,{data:"\nsiege:\n  enabled: true # Sets whether players can engage Siege mode\n  breeding: 0 # If this is set higher than 0, this is the percentage chance that twins will be born when animals breed\n  growth: 0 # If this is set higher than 0, this is the percentage chance that a plant will sprout an extra step when it grows\n  butcher: false # Sets whether any hostile mobs inside the TARDIS will be butchered when Siege mode is engaged\n  creeper: false # Sets whether (when the TARDIS runs out of energy) the Artron creeper will be sacrificed to give the TARDIS an energy boost\n  healing: false # Sets whether players inside the TARDIS receive a healing pick-me-up\n  texture: false # Sets whether the desktop theme is changed when Siege mode is engaged\n",mdxType:"ConfigTable"}),(0,l.kt)("h3",{id:"siege-mode-artron-settings"},"Siege mode Artron settings"),(0,l.kt)("p",null,"The default Artron settings for Siege mode are shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/artron.yml"',title:'"/plugins/TARDIS/artron.yml"'},"siege_transfer: 10\nsiege_deplete: 100\nsiege_ticks: 1500\nsiege_creeper: 150\n")),(0,l.kt)(a.Z,{data:"\nsiege_transfer: 10 # Sets the percentage of maximum (`full_charge`) energy the TARDIS needs to be able to disengage Siege mode. Also the minimum amount of energy that can be transferred to the TARDIS by clicking the Siege Cube\nsiege_deplete: 100 # Sets the amount of energy the TARDIS loses every cycle it is in Siege mode\nsiege_ticks: 1500 # Sets the time cycle in ticks, the plugin will deplete energy from the TARDIS / heal players while in Siege mode\nsiege_creeper: 150 # Sets the amount of energy boost the TARDIS gets when the Artron creeper is sacrificed\n",mdxType:"ConfigTable"}),(0,l.kt)("h2",{id:"the-siege-cube"},"The Siege Cube"),(0,l.kt)("p",null,"The Siege Cube replaces the Police Box when Siege mode is engaged. The Time Lord and any companions of the TARDIS can\nmine the Siege Cube and carry it around with them in their inventory. While as an ",(0,l.kt)("em",{parentName:"p"},"item"),", the Siege Cube is\nindestructible."),(0,l.kt)("p",null,"If the player drops the Siege Cube on the ground, and there is sufficient room for a Police Box to materialise, the\nSiege Cube will turn back into a block again."),(0,l.kt)("h3",{id:"transferring-energy-to-the-siege-cube"},"Transferring energy to the Siege Cube"),(0,l.kt)("p",null,"If a player (the Time Lord or companion) RIGHT-clicks the Siege Cube some of their Time Lord energy will be transferred\ninto the TARDIS. The player must have the configured percentage of full charge in order to do this."),(0,l.kt)("p",null,"The Artron Condensers, both the interior one and the server condenser (if setup) will also work as normal while the\nTARDIS is in Siege mode."),(0,l.kt)("h2",{id:"disengaging-siege-mode"},"Disengaging Siege mode"),(0,l.kt)("p",null,"Siege mode can be disengaged in three ways. All require the TARDIS to have enough energy."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Toggle the Siege mode on and off using the button in the Control Menu GUI"),(0,l.kt)("li",{parentName:"ol"},"Toggle the Siege mode lever inside the TARDIS (if you have one)"),(0,l.kt)("li",{parentName:"ol"},"SHIFT-RIGHT-click the Siege Cube from the outside")),(0,l.kt)("h2",{id:"lost-siege-cube--broken-siege-mode"},"Lost Siege Cube / broken Siege mode"),(0,l.kt)("p",null,"Server admins can restore a TARDIS in siege mode back to its normal state with the command:."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/tardisadmin desiege [player]\n")),(0,l.kt)("p",null,"The player must be online when running the command, and the TARDIS will be restored back to its \u2018home\u2019 location."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Siege Cube",src:n(420).Z,width:"600",height:"353"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The TARDIS Siege Cube block is a CYAN_CONCRETE block (or BROWN_MUSHROOM_BLOCK for older\nplugin versions) with the texture on all sides. As such it is recommended that players use the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDIS-Resource-Pack"},"TARDIS-Resource-Pack")," so that it looks\nthe part and can be distinguished easily.")))}c.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/siegecube-5a11949ab040a9a3d55f9e6ff2111f24.jpg"}}]);