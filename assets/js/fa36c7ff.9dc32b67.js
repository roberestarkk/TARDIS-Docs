"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2092],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),i=a(16550),o=a(91980),d=a(67392),m=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,d]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=o??c;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:d}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=d[a].value;n!==i&&(c(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:u},s,{className:(0,l.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},27263:(e,t,a)=>{a.d(t,{Z:()=>d,w:()=>s});var n=a(67294),r=a(34360),l=a(12699);const s=e=>{const{children:t}=e;return t};function i(e){let{yml:t,cmd:a}=e,r=t[a].aliases;const l="object"==typeof r?r.join(", "):r;return n.createElement(n.Fragment,null,n.createElement("tr",null,n.createElement("td",{className:"indent0",id:a},n.createElement("code",null,"/",a)),n.createElement("td",null,n.createElement("code",null,l)),n.createElement("td",null,n.createElement("code",null,t[a].permission))),n.createElement("tr",null,n.createElement("td",{colSpan:3},t[a].description)),n.createElement("tr",null,n.createElement("td",{colSpan:3},n.createElement("code",null,t[a].usage.replace("<command>",a)))))}function o(e){let{ymlKey:t,value:a,cmd:r}=e,i=a.permission,o=null!=i?"__Permission:__ `"+i+"`":"";return n.createElement(n.Fragment,null,n.createElement("tr",null,n.createElement("td",{className:"indent1"},n.createElement("code",null,t)),n.createElement("td",null,n.createElement(l.D,{children:a.description,components:{p:s}}),n.createElement("br",null),n.createElement(l.D,{children:o,components:{p:s}})),n.createElement("td",null,n.createElement("code",null,a.usage.replace("<command>",r)))))}function d(e){let{data:t,args:a,cmd:l,extra:s}=e;const d=(0,r.Qc)(t),m=(0,r.Qc)(a);let c=n.createElement(n.Fragment,null),u=n.createElement(n.Fragment,null);return"false"==s&&(c=n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Command"),n.createElement("th",null,"Aliases"),n.createElement("th",null,"Permission"))),u=n.createElement(i,{key:l,yml:d,cmd:l})),n.createElement(n.Fragment,null,n.createElement("div",{className:"table-responsive"},n.createElement("table",{className:"table table-striped table-bordered"},c,n.createElement("tbody",null,u,n.createElement("tr",null,n.createElement("th",null,"Arguments"),n.createElement("th",null,"Description"),n.createElement("th",null,"Usage")),Object.entries(m).map((e=>{let[t,a]=e;return n.createElement(o,{key:t,ymlKey:t,value:a,indent:0,cmd:l})}))))))}},80047:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(74866),l=a(85162),s=a(12699),i=a(27263);function o(e){let{name:t,description:a,folder:o,image:d,heading:m=3}=e,c="!["+t+"](/images/"+o+"/vanilla/"+d+")",u="!["+t+"](/images/"+o+"/tardis/"+d+")";let p="number"==typeof m?n.createElement("h"+m,{id:t},t):n.createElement(n.Fragment,null);let h=null!=a&&""!==a?n.createElement("p",null,n.createElement(s.D,{children:a,components:{p:i.w}})):n.createElement(n.Fragment,null);return n.createElement(n.Fragment,null,p,h,n.createElement(r.Z,{groupId:"images"},n.createElement(l.Z,{value:"vanilla",label:"vanilla",default:!0},n.createElement(s.D,{children:c,components:{p:i.w}})),n.createElement(l.Z,{value:"tardis",label:"tardis"},n.createElement(s.D,{children:u,components:{p:i.w}}))))}},10241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(80047);const s={layout:"default",title:"Biome Adaptive Chameleon Presets"},i="Biome Adaptive Chameleon Presets",o={unversionedId:"adaptive-presets",id:"adaptive-presets",title:"Biome Adaptive Chameleon Presets",description:"When the Chameleon Circuit is set to Adaptive Biome mode, the TARDIS exterior preset is selected based on the biome that",source:"@site/docs/adaptive-presets.mdx",sourceDirName:".",slug:"/adaptive-presets",permalink:"/TARDIS-Docs/adaptive-presets",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/adaptive-presets.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Biome Adaptive Chameleon Presets"},sidebar:"docs",previous:{title:"Custom item model presets",permalink:"/TARDIS-Docs/custom-model-presets"},next:{title:"Manage Your TARDIS",permalink:"/TARDIS-Docs/category/manage-your-tardis"}},d={},m=[{value:"Biomes and presets",id:"biomes-and-presets",level:2},{value:"Locking in a preset",id:"locking-in-a-preset",level:2}],c={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"biome-adaptive-chameleon-presets"},"Biome Adaptive Chameleon Presets"),(0,r.kt)("p",null,"When the Chameleon Circuit is set to Adaptive Biome mode, the TARDIS exterior preset is selected based on the biome that\nthe TARDIS travels to."),(0,r.kt)("p",null,"You can configure which preset is used for which biome by editing ",(0,r.kt)("em",{parentName:"p"},"adaptive.yml"),".\nThe file uses YAML aliases - for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/plugins/TARDIS/adaptive.yml"',title:'"/plugins/TARDIS/adaptive.yml"'},"# snowy biomes\nSNOWY_TAIGA: &snowy COLD_TAIGA\nSNOWY_SLOPES: *snowy\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&snowy")," defines an ",(0,r.kt)("em",{parentName:"li"},"alias")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"COLD_TAIGA")," preset"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*snowy")," is an ",(0,r.kt)("em",{parentName:"li"},"instance")," of the alias")),(0,r.kt)("p",null,"You can either change the alias ",(0,r.kt)("inlineCode",{parentName:"p"},"&snowy")," to another Chameleon preset e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"&snowy PINE"),", and the other instances will\nuse that as well, or set a preset for each individual biome."),(0,r.kt)("p",null,"You can use any Chameleon block preset as well as the biome presets shown below."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can only use an ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),"alias if it has been defined in the file above where you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," instance - so to change ",(0,r.kt)("em",{parentName:"p"},"every")," snowy biome you would need to set the alias up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"# frozen biomes")," section first.")),(0,r.kt)("h2",{id:"biomes-and-presets"},"Biomes and presets"),(0,r.kt)("p",null,"By default the plugin maps biomes to presets in the following way:"),(0,r.kt)(l.Z,{name:"Beach, frozen river, river, snowy beach, stony shore",description:"BOAT",folder:"presets",image:"adaptive_beach.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Cold ocean, deep cold ocean, deep lukewarm ocean, deep ocean, lukewarm ocean, ocean, warm ocean",description:"YELLOW",folder:"presets",image:"adaptive_sub.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Desert",description:"DESERT",folder:"presets",image:"adaptive_desert.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Windswept gravelly hills, windswept hills, windswept forest",description:"EXTREME_HILLS",folder:"presets",image:"adaptive_hills.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Birch forest, forest, old growth birch forest",description:"FOREST",folder:"presets",image:"adaptive_forest.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Nether wastes, soul sand valley, crimson forest, warped forest, basalt deltas",description:"NETHER",folder:"presets",image:"adaptive_nether.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Snowy plains, deep frozen ocean, frozen ocean, jagged peaks, snowy peaks",description:"ICE_FLATS",folder:"presets",image:"adaptive_ice_flats.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Ice spikes",description:"ICE_SPIKES",folder:"presets",image:"adaptive_spikes.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Jungle, sparse jungle, bamboo jungle",description:"JUNGLE",folder:"presets",image:"adaptive_jungle.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Badlands, wooded badlands, eroded badlands",description:"MESA",folder:"presets",image:"adaptive_mesa.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Mushroom fields",description:"SHROOM",folder:"presets",image:"adaptive_shroom.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Plains, sunflower plains, meadow",description:"PLAINS",folder:"presets",image:"adaptive_plains.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Dark forest, flower forest",description:"ROOFED_FOREST",folder:"presets",image:"adaptive_dark.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Savanna, windswept savanna, savanna plateau",description:"SAVANNA",folder:"presets",image:"adaptive_savanna.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Swamp, mangrove swamp",description:"SWAMP",folder:"presets",image:"adaptive_swamp.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"End barrens, End highlands, End midlands, small End islands, The End",description:"THEEND",folder:"presets",image:"adaptive_the_end.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Old growth spruce taiga, taiga, old growth pine taiga",description:"TAIGA",folder:"presets",image:"adaptive_taiga.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)(l.Z,{name:"Snowy taiga, snowy slopes, grove",description:"COLD_TAIGA",folder:"presets",image:"adaptive_cold_taiga.jpg",heading:3,mdxType:"TabbedImage"}),(0,r.kt)("h2",{id:"locking-in-a-preset"},"Locking in a preset"),(0,r.kt)("p",null,"You can use the Chameleon GUI to lock in an adaptive biome preset so that it is used regardless of the biome the TARDIS travels to."),(0,r.kt)("p",null,"To lock the preset:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the Chameleon circuit to BIOME Adaptive mode."),(0,r.kt)("li",{parentName:"ol"},"Travel to the biome that has the desired preset."),(0,r.kt)("li",{parentName:"ol"},'Open the Chameleon GUI again and click the "Lock" button above the Adaptive setting.')),(0,r.kt)("p",null,"Clicking the button will switch the settings to ",(0,r.kt)("em",{parentName:"p"},"Shorted out")," and apply the biome preset on a permanent basis (it\nwon't change when you go to a different biome)."),(0,r.kt)(l.Z,{name:"Adaptive biome locked",description:"",folder:"chameleon",image:"chameleon_lock.jpg",heading:!1,mdxType:"TabbedImage"}))}p.isMDXComponent=!0}}]);