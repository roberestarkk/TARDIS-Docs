"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2446],{39446:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(34360),l=n(12699);const r=e=>{const{children:t}=e;return t};function i(e){let{data:t,ymlKey:n,value:o,indent:s=0}=e;const c=typeof o,m="object"===c;n=n.trim().split(".").pop();const p=m?Object.entries(o).map((e=>{let[n,o]=e;return a.createElement(i,{data:t,key:n,ymlKey:n,value:o,indent:s+1})})):null,d=t.split("\n").find((e=>e.trim().startsWith(n+":")));let h=null;d.includes("#")&&(h=d.split("#")[1]);let u="indent"+s;if(m){let e;return h&&(e=a.createElement("tr",null,a.createElement("td",{colSpan:3,className:u},a.createElement(l.D,{children:h,components:{p:r}})))),a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{colSpan:3,className:u,id:n.toString()},a.createElement("code",null,n,":"))),e,p)}const g=a.createElement("tr",null,a.createElement("td",{className:u,id:n.toString()},a.createElement("code",null,n.toString())),a.createElement("td",null,a.createElement("code",null,c.toString())),a.createElement("td",null,a.createElement("code",null,o.toString())));return h?a.createElement(a.Fragment,null,g,a.createElement("tr",null,a.createElement("td",{colSpan:3,className:u},a.createElement(l.D,{children:h,components:{p:r}})))):g}function s(e){let{data:t}=e;const n=(0,o.Qc)(t);return a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Config"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,Object.entries(n).map((e=>{let[n,o]=e;return a.createElement(i,{data:t,key:n,ymlKey:n,value:o,indent:0})}))))))}},61861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),l=n(39446);const r={layout:"default",title:"Desktop Theme"},i="Desktop Theme",s={unversionedId:"desktop-theme",id:"desktop-theme",title:"Desktop Theme",description:"You can upgrade/downgrade/crossgrade your TARDIS to another type or simply change the wall and floor blocks with the",source:"@site/docs/desktop-theme.mdx",sourceDirName:".",slug:"/desktop-theme",permalink:"/TARDIS-Docs/desktop-theme",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/desktop-theme.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Desktop Theme"},sidebar:"docs",previous:{title:"Architectural Reconfiguration System",permalink:"/TARDIS-Docs/ars"},next:{title:"Interiors",permalink:"/TARDIS-Docs/interiors"}},c={},m=[{value:"Opening the desktop theme GUI",id:"opening-the-desktop-theme-gui",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"Archiving, repairing and cleaning",id:"archiving-repairing-and-cleaning",level:3},{value:"Config options",id:"config-options",level:3},{value:"Video",id:"video",level:3}],p={toc:m},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desktop-theme"},"Desktop Theme"),(0,o.kt)("p",null,"You can upgrade/downgrade/crossgrade your TARDIS to another type or simply change the wall and floor blocks with the\nTARDIS Desktop Theme."),(0,o.kt)("p",null,"Changing the desktop theme requires a player to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"tardis.upgrade")," permission, and consumes a set amount of\nArtron Energy (the amount of energy is set in ",(0,o.kt)("inlineCode",{parentName:"p"},"artron.yml"),")."),(0,o.kt)("p",null,"If you are just changing the walls and floor of your current TARDIS the Artron cost is less (you can set the reduction\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"just_wall_floor: [percent]")," option in ",(0,o.kt)("em",{parentName:"p"},"artron.yml"),"."),(0,o.kt)("p",null,"The speed at which the change happens is linked to the ",(0,o.kt)("inlineCode",{parentName:"p"},"growth.room_speed")," config option."),(0,o.kt)("h3",{id:"opening-the-desktop-theme-gui"},"Opening the desktop theme GUI"),(0,o.kt)("p",null,"You can open the desktop theme GUI from the ",(0,o.kt)("a",{parentName:"p",href:"control-menu"},"TARDIS Control Menu"),", with a command, or by ",(0,o.kt)("strong",{parentName:"p"},"right-shift-clicking the ARS sign"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TARDIS Control Menu",src:n(31280).Z,width:"600",height:"353"})),(0,o.kt)("p",null,"To open the desktop theme GUI using a command type one of the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/tardis desktop\n/tardis theme\n/tardis upgrade\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TARDIS Upgrade Menu",src:n(41200).Z,width:"600",height:"337"})),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the command, or right-shift-click the ARS sign to open the GUI."),(0,o.kt)("li",{parentName:"ol"},"When the GUI opens \u2014 select the TARDIS you want to change to \u2014 this can be the same type as you currently have if you\njust want to change the walls and floor. If you don\u2019t have permission for the TARDIS type or don\u2019t have enough Artron\nEnergy you won\u2019t be able to select that TARDIS type. The server's custom consoles appear on page two."),(0,o.kt)("li",{parentName:"ol"},"If there are rooms in the way when trying to upgrade to a bigger TARDIS, you will need to manually jettison them\nfirst (you must be using ARS, manually growing rooms is not supported)."),(0,o.kt)("li",{parentName:"ol"},"Once a TARDIS type has been selected, the next GUI opens allowing you to select a wall block, click one... or choose ",(0,o.kt)("em",{parentName:"li"},"Default Wall")," to use orange wool."),(0,o.kt)("li",{parentName:"ol"},"Another GUI opens allowing you to select a floor block, click one... or choose ",(0,o.kt)("em",{parentName:"li"},"Default Floor")," to use light gray wool."),(0,o.kt)("li",{parentName:"ol"},"The TARDIS starts reconfiguring \u2014 you should be able to stay inside the TARDIS (if needed you will be teleported to a\nsafe location)."),(0,o.kt)("li",{parentName:"ol"},"Watch in amazement as the TARDIS changes before your eyes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TARDIS Wall Menu",src:n(99816).Z,width:"600",height:"337"})),(0,o.kt)("h3",{id:"archiving-repairing-and-cleaning"},"Archiving, repairing and cleaning"),(0,o.kt)("p",null,"THe TARDIS Upgrade GUI also contains three other buttons to aid keeping your console in tip-top shape."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Button"),(0,o.kt)("th",{parentName:"tr",align:null},"Icon"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Archive"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://github.com/eccentricdevotion/TARDIS-Resource-Pack/raw/master/assets/tardis/textures/item/gui/theme/archive.png",alt:"size"})),(0,o.kt)("td",{parentName:"tr",align:null},"Use this to save a copy of a modified console - see the ",(0,o.kt)("a",{parentName:"td",href:"archive"},"Archiving consoles")," page for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Repair"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://github.com/eccentricdevotion/TARDIS-Resource-Pack/raw/master/assets/tardis/textures/item/gui/theme/repair.png",alt:"size"})),(0,o.kt)("td",{parentName:"tr",align:null},"Use this to repair a damaged console. It resets the console back to the original console schematic. Players must condense all missing blocks - unless the ",(0,o.kt)("inlineCode",{parentName:"td"},"/tardisadmin repair [player] [amount]")," command has been run, assigning the player a 'free' repair(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Clean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://github.com/eccentricdevotion/TARDIS-Resource-Pack/raw/master/assets/tardis/textures/item/gui/theme/clean.png",alt:"size"})),(0,o.kt)("td",{parentName:"tr",align:null},"Use this to remove any blocks in the console that are not in the original schematic (missing blocks will not be restored) - good if someone has griefed your interior by filling it with cobwebs.")))),(0,o.kt)("h3",{id:"config-options"},"Config options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},"desktop:\n  check_blocks_before_upgrade: false\n  block_change_percent: 25\n")),(0,o.kt)(l.Z,{name:"/plugins/TARDIS/config.yml",data:"\n    desktop:\n      check_blocks_before_upgrade: false # Sets whether to compare the amount of block changes before allowing an upgrade.\n      block_change_percent: 25 # Sets the maximum percentage of block change compared to the original schematic.\n    ",mdxType:"ConfigTable"}),(0,o.kt)("h3",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"600",height:"366",src:"https://www.youtube.com/embed/g-tHLnpR8oY?rel=0",frameborder:"0",allowfullscreen:!0}),(0,o.kt)("iframe",{src:"https://player.vimeo.com/video/104995044",width:"600",height:"366",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}h.isMDXComponent=!0},31280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/control_menu_desktop-d338430e0171f9c53af58bb197b7373d.jpg"},41200:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/desktop_theme_gui-e209d665dcb05c1c3d9852b7583f394f.jpg"},99816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wall_menu-9c566c0e270019ae6447e2d33703a89a.jpg"}}]);