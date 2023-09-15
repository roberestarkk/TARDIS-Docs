"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=a.createContext({}),d=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,f=p["".concat(m,".").concat(u)]||p[u]||c[u]||n;return r?a.createElement(f,l(l({ref:t},i),{},{components:r})):a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(87462),o=(r(67294),r(3905));const n={layout:"default",title:"Custom item model presets"},l="Custom item model presets",s={unversionedId:"custom-model-presets",id:"custom-model-presets",title:"Custom item model presets",description:"As of version 5.0.0 you can now add custom item model presets for the TARDIS exterior.",source:"@site/docs/custom-model-presets.md",sourceDirName:".",slug:"/custom-model-presets",permalink:"/TARDIS-Docs/custom-model-presets",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/custom-model-presets.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Custom item model presets"},sidebar:"docs",previous:{title:"The Custom Chameleon preset",permalink:"/TARDIS-Docs/custom-preset"},next:{title:"Biome Adaptive Chameleon Presets",permalink:"/TARDIS-Docs/adaptive-presets"}},m={},d=[],i={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-item-model-presets"},"Custom item model presets"),(0,o.kt)("p",null,"As of version 5.0.0 you can now add custom item model presets for the TARDIS exterior."),(0,o.kt)("p",null,"Custom model presets are defined in ",(0,o.kt)("em",{parentName:"p"},"plugins/TARDIS/custom","_","models.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/custom_models.yml"',title:'"/plugins/TARDIS/custom_models.yml"'},"# a list of the custom models you want to use\nmodels:\n  # model name\n  Type 40:\n    # the item that is placed on the armour stand\n    item: CLAY_BALL\n  Bad Wolf:\n    item: WOLF_SPAWN_EGG\n    \n")),(0,o.kt)("h1",{id:"custom-model-data-values"},"Custom model data values"),(0,o.kt)("p",null,"The plugin uses standardised values for each state of the TARDIS visuals - open/closed door + 2 stages of materialisation (coloured/clear). You must use these values when setting up your resource pack entries! See the examples below (these are also included in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDIS-Resource-Pack"},"TARDIS-Resource-Pack"),", and as comments in ",(0,o.kt)("em",{parentName:"p"},"custom","_","models.yml"),")."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"State"),(0,o.kt)("th",{parentName:"tr",align:null},"Custom model data"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"door closed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1001"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"door open"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1002"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transparent coloured"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1003"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transparent clear"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1004"))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom model states",src:r(760).Z,width:"600",height:"217"})),(0,o.kt)("h1",{id:"example-model-overrides"},"Example model overrides"),(0,o.kt)("p",null,"This would go in ",(0,o.kt)("em",{parentName:"p"},"assets/minecraft/models/item/",(0,o.kt)("strong",{parentName:"em"},"clay","_","ball.json")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "minecraft:item/generated",\n  "textures": {\n    "layer0": "minecraft:item/clay_ball"\n  },\n  "overrides": [\n    {"predicate": {"custom_model_data": 1001}, "model": "tardis:block/police_box/type_40_closed"},\n    {"predicate": {"custom_model_data": 1002}, "model": "tardis:block/police_box/type_40_open"},\n    {"predicate": {"custom_model_data": 1003}, "model": "tardis:block/police_box/type_40_stained"},\n    {"predicate": {"custom_model_data": 1004}, "model": "tardis:block/police_box/type_40_glass"}\n  ]\n}\n')),(0,o.kt)("p",null,"This would go in ",(0,o.kt)("em",{parentName:"p"},"assets/minecraft/models/item/",(0,o.kt)("strong",{parentName:"em"},"wolf","_","spawn","_","egg.json")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "minecraft:item/template_spawn_egg",\n  "overrides": [\n    {"predicate": {"custom_model_data": 1001}, "model": "tardis:block/police_box/bad_wolf_closed"},\n    {"predicate": {"custom_model_data": 1002}, "model": "tardis:block/police_box/bad_wolf_open"},\n    {"predicate": {"custom_model_data": 1003}, "model": "tardis:block/police_box/bad_wolf_stained"},\n    {"predicate": {"custom_model_data": 1004}, "model": "tardis:block/police_box/bad_wolf_glass"}\n  ]\n}\n')))}c.isMDXComponent=!0},760:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/custom_model_states-1d0a401c156e4245fe37dc0a8ffc2fea.jpg"}}]);