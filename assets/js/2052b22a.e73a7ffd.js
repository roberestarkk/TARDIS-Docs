"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={layout:"default",title:"pruning"},o="TARDIS pruning",u={unversionedId:"prune",id:"prune",title:"pruning",description:"Pruning is a potentially hazardous activity \u2014 make sure you have backed up your server BEFORE running this command!",source:"@site/docs/prune.md",sourceDirName:".",slug:"/prune",permalink:"/prune",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/prune.md",tags:[],version:"current",frontMatter:{layout:"default",title:"pruning"}},s={},l=[{value:"List",id:"list",level:3},{value:"Prune",id:"prune",level:3},{value:"Bypassing a prune",id:"bypassing-a-prune",level:3}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-pruning"},"TARDIS pruning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pruning is a potentially hazardous activity \u2014 make sure you have backed up your server BEFORE running this command!")),(0,a.kt)("p",null,"You can list and remove TARDISes that have not been used for an extended period using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardisadmin [prunelist|prune]")," commands."),(0,a.kt)("p",null,"Each time a player logs in to the server, their last use time is recorded in the database. You can use this data to\ndetermine if a TARDIS has been abandoned."),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("p",null,"To list TARDISes that have not been used for a number of days, use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisadmin prunelist [days]\n")),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"[days]")," to the minimum number of days the TARDISes have been inactive for. The command will output to the\nscreen/console and also save a text file called ",(0,a.kt)("em",{parentName:"p"},"TARDIS","_","Prune","_","List.txt")," to the TARDIS folder."),(0,a.kt)("h3",{id:"prune"},"Prune"),(0,a.kt)("p",null,"If you are happy that the TARDISes in the list are OK to be pruned, use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisadmin prune [days]\n")),(0,a.kt)("h3",{id:"bypassing-a-prune"},"Bypassing a prune"),(0,a.kt)("p",null,"You can allow players to be excluded from pruning by giving them the permission ",(0,a.kt)("inlineCode",{parentName:"p"},"tardis.prune.bypass"),". This will ensure\nthat the players\u2019 \u201clast use\u201d is always set to time in the distant future."))}d.isMDXComponent=!0}}]);