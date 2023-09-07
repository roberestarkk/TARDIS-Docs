"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,b=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={layout:"default",title:"Blueprints"},l="Blueprints",o={unversionedId:"blueprints",id:"blueprints",title:"Blueprints",description:"TARDIS blueprints are a way for players to earn or purchase TARDIS features.",source:"@site/docs/blueprints.md",sourceDirName:".",slug:"/blueprints",permalink:"/blueprints",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/blueprints.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Blueprints"}},p={},s=[{value:"Enabling blueprints",id:"enabling-blueprints",level:3},{value:"Obtaining blueprints",id:"obtaining-blueprints",level:3},{value:"Using blueprints",id:"using-blueprints",level:3},{value:"Removing a blueprint",id:"removing-a-blueprint",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blueprints"},"Blueprints"),(0,a.kt)("p",null,"TARDIS blueprints are a way for players to earn or purchase TARDIS features.\nIf enabled, blueprints suppliment server permissions ","\u2014"," if a player attempts\nto use a TARDIS feature, the following occurs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A reglular server permission check is performed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if the player has the correct permission they can use it as normal"),(0,a.kt)("li",{parentName:"ul"},"if the player doesn't have the correct permission, proceed to step 2"))),(0,a.kt)("li",{parentName:"ol"},"A blue print check is performed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if the player has condensed the blueprint they can use the feature"),(0,a.kt)("li",{parentName:"ul"},"otherwise the player is denied use of the feature")))),(0,a.kt)("h3",{id:"enabling-blueprints"},"Enabling blueprints"),(0,a.kt)("p",null,"To enable blueprints on your server, use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisconfig blueprints true\n")),(0,a.kt)("p",null,"To disable, run the command again with the last argument set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"obtaining-blueprints"},"Obtaining blueprints"),(0,a.kt)("p",null,"Blueprints are a form of TARDIS disk."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blueprint disk",src:n(30515).Z,width:"150",height:"147"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Blueprints are keyed to a specific player ","\u2014"," only the player who obtained\nthe blueprint can use it to upgrade their TARDIS with the blueprinted feature\nthe disk contains.")),(0,a.kt)("p",null,"Players can obtain blueprints in a few ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By purchasing them from a TARDIS Shop. See the instructions on the\n",(0,a.kt)("a",{parentName:"li",href:"tardis-shop"},"TARDIS Shop")," page for how to set this up."),(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"/tardisadmin give [player] [blueprint]")," command."),(0,a.kt)("li",{parentName:"ol"},"Using a system that can run the command above when certain conditions are met\n","\u2014"," for example a ","\u201c","rank up","\u201d"," plugin (or a command block ","\u2014"," use the @p selector).")),(0,a.kt)("h3",{id:"using-blueprints"},"Using blueprints"),(0,a.kt)("p",null,"Once a player has obtained a blueprint they need to condense it in the TARDIS\nArtron condenser. Once condensed the blueprint will be stored in the TARDIS","\u2019","\nmemory core."),(0,a.kt)("h3",{id:"removing-a-blueprint"},"Removing a blueprint"),(0,a.kt)("p",null,"To remove a player","\u2019","s ability to use a blueprint feature use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisadmin revoke [player] [permission]\n")),(0,a.kt)("p",null,"To see a list of blueprint permissions use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisadmin list blueprints\n")))}m.isMDXComponent=!0},30515:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/blueprint_disk-ac0fc668b79fe101a34e74b620f405f4.png"}}]);