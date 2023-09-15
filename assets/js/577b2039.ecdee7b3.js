"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4240],{39446:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(34360),r=n(12699);const i=e=>{const{children:t}=e;return t};function o(e){let{data:t,ymlKey:n,value:l,indent:s=0}=e;const u=typeof l,d="object"===u;n=n.trim().split(".").pop();const h=d?Object.entries(l).map((e=>{let[n,l]=e;return a.createElement(o,{data:t,key:n,ymlKey:n,value:l,indent:s+1})})):null,c=t.split("\n").find((e=>e.trim().startsWith(n+":")));let m=null;if(c.includes("#")&&(m=c.split("#")[1]),d)return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,n,":"))),h);let k="";for(let a=0;a<s;a++)k+="&nbsp;&nbsp;&nbsp;&nbsp;";const p=a.createElement("tr",null,a.createElement("td",null,a.createElement("span",{dangerouslySetInnerHTML:{__html:k}}),a.createElement("code",null,n.toString())),a.createElement("td",null,a.createElement("code",null,u.toString())),a.createElement("td",null,a.createElement("code",null,l.toString())));return m?a.createElement(a.Fragment,null,p,a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("span",{dangerouslySetInnerHTML:{__html:k}}),a.createElement(r.D,{children:m,components:{p:i}})))):p}function s(e){let{data:t}=e;const n=(0,l.Qc)(t);return a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Config"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,Object.entries(n).map((e=>{let[n,l]=e;return a.createElement(o,{data:t,key:n,ymlKey:n,value:l,indent:0})}))))))}},50436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(39446);const i={layout:"default",title:"The Junk TARDIS"},o="The Junk TARDIS",s={unversionedId:"junk-tardis",id:"junk-tardis",title:"The Junk TARDIS",description:"The Junk TARDIS is a public use TARDIS that any player with the correct permission can use on the server. It only",source:"@site/docs/junk-tardis.mdx",sourceDirName:".",slug:"/junk-tardis",permalink:"/TARDIS-Docs/junk-tardis",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/junk-tardis.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"The Junk TARDIS"},sidebar:"docs",previous:{title:"Siege Mode",permalink:"/TARDIS-Docs/siege-mode"},next:{title:"Whovian Food",permalink:"/TARDIS-Docs/food"}},u={},d=[{value:"Prerequisite for enabling the Junk TARDIS",id:"prerequisite-for-enabling-the-junk-tardis",level:2},{value:"Creating the Junk TARDIS",id:"creating-the-junk-tardis",level:2},{value:"Removing the Junk TARDIS",id:"removing-the-junk-tardis",level:2},{value:"Flying the Junk TARDIS",id:"flying-the-junk-tardis",level:2},{value:"Other commands",id:"other-commands",level:2},{value:"Config options",id:"config-options",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Video",id:"video",level:2}],h={toc:d},c="wrapper";function m(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-junk-tardis"},"The Junk TARDIS"),(0,l.kt)("p",null,"The Junk TARDIS is a public use TARDIS that any player with the correct permission can use on the server. It only\ntravels in overworlds (no Nether or The End) and doesn\u2019t require the player to have an Artron Energy supply."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Junk TARDIS",src:n(85286).Z,width:"600",height:"353"})),(0,l.kt)("h2",{id:"prerequisite-for-enabling-the-junk-tardis"},"Prerequisite for enabling the Junk TARDIS"),(0,l.kt)("p",null,"For the Junk TARDIS to be enabled on the server, the server must be set to use a default world for storing TARDISes (\nthis is the default option with new installs). In the config, set ",(0,l.kt)("inlineCode",{parentName:"p"},"creation.default_world: true"),". You will also need to\nenable the Junk TARDIS \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"junk.enabled: true"),"."),(0,l.kt)("h2",{id:"creating-the-junk-tardis"},"Creating the Junk TARDIS"),(0,l.kt)("p",null,"Any player with the ",(0,l.kt)("inlineCode",{parentName:"p"},"tardis.admin")," permission can create the Junk TARDIS, but only one Junk TARDIS can be active at a\ntime. To create the Junk TARDIS:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clear a 6 x 6 block flat area"),(0,l.kt)("li",{parentName:"ol"},"Target a block in the centre of the flat area"),(0,l.kt)("li",{parentName:"ol"},"Open chat and type the command ",(0,l.kt)("inlineCode",{parentName:"li"},"/tardisjunk create"))),(0,l.kt)("h2",{id:"removing-the-junk-tardis"},"Removing the Junk TARDIS"),(0,l.kt)("p",null,"Open chat and type the command ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardisjunk delete"),". Requires the ",(0,l.kt)("inlineCode",{parentName:"p"},"tardis.admin")," permission."),(0,l.kt)("h2",{id:"flying-the-junk-tardis"},"Flying the Junk TARDIS"),(0,l.kt)("p",null,"There are seven controls that let you set a Junk TARDIS destination:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sign")," \u2014 shows the travel destination"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"handbrake")," \u2014 starts the TARDIS travelling"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tripwire hook")," \u2014 selects the world to travel to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stone button")," \u2014 sets the x coordinate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wood button")," \u2014 sets the z coordinate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"repeater")," \u2014 determines the amount (1, 10, 100 or 1000) which is added or subtracted from the x and z coordinates\nwhen the buttons are clicked"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"comparator")," \u2014 sets whether the buttons add or subtract")),(0,l.kt)("p",null,"When the Junk TARDIS is travelling, any player who steps off the Junk TARDIS platform will be killed instantly. To\nvisually show that the Junk TARDIS is travelling particle effects and the redstone torch on the console will flash on\nand off."),(0,l.kt)("p",null,"If no destination coordinates are entered onto the destination sign and the Junk TARDIS is not at its \u2018home\u2019 location,\nthen clicking the handbrake lever will make the Junk TARDIS travel home."),(0,l.kt)("h2",{id:"other-commands"},"Other commands"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/tardisjunk return")," \u2014 returns the Junk TARDIS to its \u2018home\u2019 location (bringing along any players who may be onboard)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/tardisjunk time")," \u2014 find out how much time remains before the Junk TARDIS automatically returns home."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/tardisjunk find")," \u2014 find the current location of the Junk TARDIS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/tardisjunk [wall|floor] [material]")," \u2014 change the wall and floor blocks of the Junk TARDIS. Use ",(0,l.kt)("strong",{parentName:"p"},"before")," creating the\nJunk TARDIS so that the Vortex TARDIS matches"),(0,l.kt)("h2",{id:"config-options"},"Config options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},"junk:\n  enabled: true\n  return: -1\n  particles: true\n")),(0,l.kt)(r.Z,{data:"\njunk:\n  enabled: true # Sets whether the Junk TARDIS is available on the server \u2014 **NOTE:** The Junk TARDIS will be disabled if `creation.default_world` is `false`\n  return: -1 # Sets the time in seconds that the Junk TARDIS will automatically return to its \u2018home\u2019 location. If this is less than `0` and the Junk TARDIS will not automatically return home.\n  particles: true # Sets whether the Junk TARDIS displays a particle effect when travelling\n",mdxType:"ConfigTable"}),(0,l.kt)("h2",{id:"permissions"},"Permissions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tardis.admin")," \u2014 to create, delete and return the Junk TARDIS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tardis.junk")," \u2014 to fly and find the Junk TARDIS."),(0,l.kt)("h2",{id:"video"},"Video"),(0,l.kt)("iframe",{src:"https://player.vimeo.com/video/139185257",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}m.isMDXComponent=!0},85286:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/junk-8caafc771a651bbaa040d6481f365c57.jpg"}}]);