"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3829],{39446:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(67294),r=n(34360),a=n(12699);const l=e=>{const{children:t}=e;return t};function i(e){let{data:t,ymlKey:n,value:r,indent:c=0}=e;const s=typeof r,m="object"===s;n=n.trim().split(".").pop();const u=m?Object.entries(r).map((e=>{let[n,r]=e;return o.createElement(i,{data:t,ymlKey:n,value:r,indent:c+1})})):null,d=t.split("\n").find((e=>e.trim().startsWith(n+":")));let g=null;d.includes("#")&&(g=d.split("#")[1]);let p="indent"+c;if(m){let e;return g&&(e=o.createElement("tr",null,o.createElement("td",{colSpan:3,className:p},o.createElement(a.D,{children:g,components:{p:l}})))),o.createElement(o.Fragment,null,o.createElement("tr",null,o.createElement("td",{colSpan:3,className:p,id:n.toString()},o.createElement("code",null,n,":"))),e,u)}const h=o.createElement("tr",null,o.createElement("td",{className:p,id:n.toString()},o.createElement("code",null,n.toString())),o.createElement("td",null,o.createElement("code",null,s.toString())),o.createElement("td",null,o.createElement("code",null,r.toString())));return g?o.createElement(o.Fragment,null,h,o.createElement("tr",null,o.createElement("td",{colSpan:3,className:p},o.createElement(a.D,{children:g,components:{p:l}})))):h}function c(e){let{data:t}=e;const n=(0,r.Qc)(t);return o.createElement(o.Fragment,null,o.createElement("div",{className:"table-responsive"},o.createElement("table",{className:"table table-striped table-bordered"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Config"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default"))),o.createElement("tbody",null,Object.entries(n).map((e=>{let[n,r]=e;return o.createElement(i,{data:t,ymlKey:n,value:r,indent:0})}))))))}},41969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=n(87462),r=(n(67294),n(3905)),a=n(39446);const l={layout:"default",title:"Room Growth Configuration Options"},i="Room Growth Configuration Options",c={unversionedId:"configuration/growth",id:"configuration/growth",title:"Room Growth Configuration Options",description:"These are the room growth configuration options.",source:"@site/docs/configuration/growth.mdx",sourceDirName:"configuration",slug:"/configuration/growth",permalink:"/TARDIS-Docs/configuration/growth",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/configuration/growth.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Room Growth Configuration Options"},sidebar:"docs",previous:{title:"Artron Energy configuration option",permalink:"/TARDIS-Docs/configuration/energy"},next:{title:"Monsters configuration",permalink:"/TARDIS-Docs/configuration/monsters"}},s={},m=[],u={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"room-growth-configuration-options"},"Room Growth Configuration Options"),(0,r.kt)("p",null,"These are the room growth configuration options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/config.yml"',title:'"/plugins/TARDIS/config.yml"'},"growth:\n  gravity_max_distance: 15\n  gravity_max_velocity: 5\n  rooms_require_blocks: false\n  rooms_condenser_percent: 100\n  return_room_seed: true\n  room_speed: 4\n  delay_factor: 1\n  ars_limit: 1\n")),(0,r.kt)(a.Z,{data:"\ngrowth:\n    gravity_max_distance: 15\n    gravity_max_velocity: 5 # Sets sets the maximum distance and velocity a gravity well can be set to.\n    rooms_require_blocks: false # Sets whether growing a room requires the player to condense the materials required to grow the room in the TARDIS condenser.\n    rooms_condenser_percent: 100 # Sets the percentage of the actual blocks that a player needs to condense if `rooms_require_blocks: true`\n    return_room_seed: true # Sets whether the room seed block is returned to the player when they jettison the room.\n    room_speed: 4 # Sets the speed (in blocks per second) at which rooms are grown. Maximum speed is `20` which is one block per tick.\n    delay_factor: 1 # Sets the delay between growing multiple rooms.\n    ars_limit: 1 # Sets the maximum number of rooms that can be reconfigured at a time.\n",mdxType:"ConfigTable"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/category/plugin-configuration"},"Back to main configuration page")))}g.isMDXComponent=!0}}]);