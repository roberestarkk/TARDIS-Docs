"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"Monitor"},i="TARDIS Monitor",l={unversionedId:"monitor",id:"monitor",title:"Monitor",description:"The TARDIS Monitor lets you view the world outside your TARDIS exterior.",source:"@site/docs/monitor.md",sourceDirName:".",slug:"/monitor",permalink:"/monitor",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/monitor.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Monitor"}},c={},m=[{value:"Adding the monitor to your TARDIS",id:"adding-the-monitor-to-your-tardis",level:3},{value:"TARDIS external camera",id:"tardis-external-camera",level:2}],p={toc:m},s="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-monitor"},"TARDIS Monitor"),(0,a.kt)("p",null,"The TARDIS Monitor lets you view the world outside your TARDIS exterior."),(0,a.kt)("p",null,"To refresh the view click the keyboard and levers."),(0,a.kt)("h3",{id:"adding-the-monitor-to-your-tardis"},"Adding the monitor to your TARDIS"),(0,a.kt)("p",null,"The monitor requires two item frames to be placed adjacent to each other."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Craft a TARDIS Monitor - ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardisrecipe monitor")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Monitor recipe",src:r(25933).Z,width:"600",height:"158"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Place an item frame against a wall or other block and put the monitor in the frame"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Monitor frame placement",src:r(56795).Z,width:"600",height:"337"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Craft a Monitor Frame - ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardisrecipe monitor-frame")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Monitor frame recipe",src:r(216).Z,width:"600",height:"158"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Place an item frame facing ",(0,a.kt)("em",{parentName:"p"},"up")," in front of the TARDIS Monitor item frame and put the monitor frame in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rotate the frame if necessary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardis update monitor")," command and then click the monitor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardis update monitor-frame")," command and then click the monitor frame"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TARDIS Monitor",src:r(46527).Z,width:"600",height:"337"})),(0,a.kt)("h2",{id:"tardis-external-camera"},"TARDIS external camera"),(0,a.kt)("p",null,"If players have the permission ",(0,a.kt)("inlineCode",{parentName:"p"},"tardis.camera"),", they can right-click the monitor frame while sneaking to view the actual exterior."),(0,a.kt)("p",null,"This feature is only available when the TARDIS exterior is using an armour stand custom model Chameleon preset."),(0,a.kt)("p",null,"Press the ",(0,a.kt)("em",{parentName:"p"},"Shift")," key to dismount and return to the TARDIS interior."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TARDIS external camera",src:r(75692).Z,width:"600",height:"338"})))}d.isMDXComponent=!0},75692:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/camera-cfc707c11aeeece344509da4608fbebd.gif"},56795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor_frame_placement-04cc34d9ca7d7eccec3013474742a54e.jpg"},216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor_frame_recipe-d77edab847edf3bdccc6101d70218cd3.jpg"},25933:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor_recipe-ff4f2846c444dfe6a6fbfb54714df57e.jpg"},46527:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tardis_monitor-ca89d91d1fb14d67c5848b6c1b45b58a.jpg"}}]);