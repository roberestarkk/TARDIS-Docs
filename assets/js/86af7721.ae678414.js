"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[8804],{39446:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(34360),r=n(12699);const i=e=>{const{children:t}=e;return t};function o(e){let{data:t,ymlKey:n,value:l,indent:s=0}=e;const m=typeof l,d="object"===m;n=n.trim().split(".").pop();const p=d?Object.entries(l).map((e=>{let[n,l]=e;return a.createElement(o,{key:n,data:t,ymlKey:n,value:l,indent:s+1})})):null,c=t.split("\n").find((e=>e.trim().startsWith(n+":")));let u=null;c.includes("#")&&(u=c.split("#")[1]);let y="indent"+s;if(d){let e;return u&&(e=a.createElement("tr",null,a.createElement("td",{colSpan:3,className:y},a.createElement(r.D,{children:u,components:{p:i}})))),a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{colSpan:3,className:y,id:n.toString()},a.createElement("code",null,n,":"))),e,p)}const h=a.createElement("tr",null,a.createElement("td",{className:y,id:n.toString()},a.createElement("code",null,n.toString())),a.createElement("td",null,a.createElement("code",null,m.toString())),a.createElement("td",null,a.createElement("code",null,l.toString())));return u?a.createElement(a.Fragment,null,h,a.createElement("tr",null,a.createElement("td",{colSpan:3,className:y},a.createElement(r.D,{children:u,components:{p:i}})))):h}function s(e){let{data:t}=e;const n=(0,l.Qc)(t);return a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Config"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,Object.entries(n).map((e=>{let[n,l]=e;return a.createElement(o,{key:n,data:t,ymlKey:n,value:l,indent:0})}))))))}},4783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(39446);const i={layout:"default",title:"Dynmap-TARDIS"},o="Dynmap-TARDIS",s={unversionedId:"modules/dynmap-tardis",id:"modules/dynmap-tardis",title:"Dynmap-TARDIS",description:"If you have Dynmap installed on your server, you can use the Dynmap-TARDIS module to display the real-time locations of",source:"@site/docs/modules/dynmap-tardis.mdx",sourceDirName:"modules",slug:"/modules/dynmap-tardis",permalink:"/TARDIS-Docs/modules/dynmap-tardis",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/modules/dynmap-tardis.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Dynmap-TARDIS"},sidebar:"docs",previous:{title:"Blueprints",permalink:"/TARDIS-Docs/modules/blueprints"},next:{title:"World Generators",permalink:"/TARDIS-Docs/modules/generators"}},m={},d=[{value:"Configuration options",id:"configuration-options",level:2},{value:"Installation",id:"installation",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dynmap-tardis"},"Dynmap-TARDIS"),(0,l.kt)("p",null,"If you have Dynmap installed on your server, you can use the Dynmap-TARDIS module to display the real-time locations of\nall TARDISes. For version 5.0.0 and above set ",(0,l.kt)("inlineCode",{parentName:"p"},"modules.dynmap: [true\\false]")," in the TARDIS config."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"As of TARDIS v4.6.2 the Dynmap-TARDIS add-on plugin has been integrated into the main TARDIS plugin. To enable/disable TARDISes\nin dynmap, set ",(0,l.kt)("inlineCode",{parentName:"p"},"dynmap.enabled: [true\\false]")," in the TARDIS config or run the\ncommand ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardisconfig dynmap [true|false]"),".")),(0,l.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},"modules:\n  dynmap: false\n...\ndynmap:\n  update_period: 30\n  updates_per_tick: 10\n")),(0,l.kt)(r.Z,{name:"/plugins/TARDIS/config.yml",data:"\nmodules:\n  dynmap: false # Sets whether to display TARDISes in Dynmap (requires Dynmap to be installed on the server).\ndynmap:\n  update_period: 30 # Sets the interval in seconds between TARDIS marker updates, try setting this higher if you experience lag.\n  updates_per_tick: 10 # Sets the maximum number of TARDIS markers to update per tick, try setting this lower if you experience lag.\n",mdxType:"ConfigTable"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable the TARDIS ",(0,l.kt)("em",{parentName:"p"},"dynmap")," module in the TARDIS config - ",(0,l.kt)("inlineCode",{parentName:"p"},"/tardisconfig dynmap true"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Dynmap as per the instructions found on the ",(0,l.kt)("a",{parentName:"p",href:"http://dev.bukkit.org/bukkit-plugins/dynmap/"},"Dynmap")," page. Run\nthe server once to generate the default Dynmap files and folders.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Put the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/Dynmap-Tardis/blob/master/tardis.png?raw=true%0A"},"tardis.png")," icon\nfile ( ",(0,l.kt)("img",{parentName:"p",src:"https://github.com/eccentricdevotion/Dynmap-Tardis/blob/master/tardis.png?raw=true",alt:"tardis icon"}),") into the\n",(0,l.kt)("em",{parentName:"p"},"plugins/dynmap/web/tiles/","_","markers","_","/")," folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command ",(0,l.kt)("inlineCode",{parentName:"p"},"/dmarker addicon id:tardis newlabel:tardis file:plugins/dynmap/web/tiles/_markers_/tardis.png"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Stop and start the server.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Render the map."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Dynmap-TARDIS",src:n(56093).Z,width:"600",height:"354"})))))}u.isMDXComponent=!0},56093:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynmap-tardis-4e9a5c22c10008f3687ad89261a6c21c.jpg"}}]);