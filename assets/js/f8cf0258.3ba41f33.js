"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[7026],{85162:(e,t,r)=>{r.d(t,{Z:()=>o});var l=r(67294),n=r(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var l=r(87462),n=r(67294),a=r(86010),o=r(12466),s=r(16550),u=r(91980),c=r(67392),m=r(50012);function i(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:l,default:n}}=e;return{value:t,label:r,attributes:l,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??i(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const l=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,a=d(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[u,c]=h({queryString:r,groupId:l}),[i,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,m.Nk)(r);return[l,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),f=(()=>{const e=u??i;return p({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var f=r(72389);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=m.indexOf(t),l=c[r].value;l!==s&&(i(t),u(l))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:d},o,{className:(0,a.Z)("tabs__item",E.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",E.tabList)},n.createElement(g,(0,l.Z)({},e,t)),n.createElement(v,(0,l.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return n.createElement(y,(0,l.Z)({key:String(t)},e))}},27263:(e,t,r)=>{r.d(t,{Z:()=>c,w:()=>o});var l=r(67294),n=r(34360),a=r(12699);const o=e=>{const{children:t}=e;return t};function s(e){let{yml:t,cmd:r}=e,n=t[r].aliases;const a="object"==typeof n?n.join(", "):n;return l.createElement(l.Fragment,null,l.createElement("tr",null,l.createElement("td",{className:"indent0",id:r},l.createElement("code",null,"/",r)),l.createElement("td",null,l.createElement("code",null,a)),l.createElement("td",null,l.createElement("code",null,t[r].permission))),l.createElement("tr",null,l.createElement("td",{colSpan:3},t[r].description)),l.createElement("tr",null,l.createElement("td",{colSpan:3},l.createElement("code",null,t[r].usage.replace("<command>",r)))))}function u(e){let{ymlKey:t,value:r,cmd:n}=e,s=r.permission,u=null!=s?"__Permission:__ `"+s+"`":"";return l.createElement(l.Fragment,null,l.createElement("tr",null,l.createElement("td",{className:"indent1",id:t},l.createElement("code",null,t)),l.createElement("td",null,l.createElement(a.D,{children:r.description,components:{p:o}}),l.createElement("br",null),l.createElement(a.D,{children:u,components:{p:o}})),l.createElement("td",null,l.createElement("code",null,r.usage.replace("<command>",n)))))}function c(e){let{data:t,args:r,cmd:a,extra:o}=e;const c=(0,n.Qc)(t),m=(0,n.Qc)(r);let i=l.createElement(l.Fragment,null),d=l.createElement(l.Fragment,null);return 0==o&&(i=l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Command"),l.createElement("th",null,"Aliases"),l.createElement("th",null,"Permission"))),d=l.createElement(s,{key:a,yml:c,cmd:a})),l.createElement(l.Fragment,null,l.createElement("div",{className:"table-responsive"},l.createElement("table",{className:"table table-striped table-bordered"},i,l.createElement("tbody",null,d,l.createElement("tr",null,l.createElement("th",null,"Arguments"),l.createElement("th",null,"Description"),l.createElement("th",null,"Usage")),Object.entries(m).map((e=>{let[t,r]=e;return l.createElement(u,{key:t,ymlKey:t,value:r,cmd:a})}))))))}},80047:(e,t,r)=>{r.d(t,{Z:()=>u});var l=r(67294),n=r(74866),a=r(85162),o=r(12699),s=r(27263);function u(e){let{name:t,description:r,folder:u,image:c,heading:m=3}=e,i="!["+t+"](/images/"+u+"/vanilla/"+c+")",d="!["+t+"](/images/"+u+"/tardis/"+c+")";let p="number"==typeof m?l.createElement("h"+m,{id:t},t):l.createElement(l.Fragment,null);let h=null!=r&&""!==r?l.createElement("p",null,l.createElement(o.D,{children:r,components:{p:s.w}})):l.createElement(l.Fragment,null);return l.createElement(l.Fragment,null,p,h,l.createElement(n.Z,{groupId:"images"},l.createElement(a.Z,{value:"vanilla",label:"vanilla",default:!0},l.createElement(o.D,{children:i,components:{p:s.w}})),l.createElement(a.Z,{value:"tardis",label:"tardis"},l.createElement(o.D,{children:d,components:{p:s.w}}))))}},97963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var l=r(87462),n=(r(67294),r(3905)),a=r(80047);const o={layout:"default",title:"Smelter Room"},s="Smelter Room",u={unversionedId:"rooms/smelter",id:"rooms/smelter",title:"Smelter Room",description:"The Smelter room lets you automate the process of smelting ores and other raw materials.",source:"@site/docs/rooms/smelter.mdx",sourceDirName:"rooms",slug:"/rooms/smelter",permalink:"/TARDIS-Docs/rooms/smelter",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/rooms/smelter.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Smelter Room"},sidebar:"docs",previous:{title:"Rail Room",permalink:"/TARDIS-Docs/rooms/rail"},next:{title:"Vault Room",permalink:"/TARDIS-Docs/rooms/vault"}},c={},m=[],i={toc:m},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,l.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smelter-room"},"Smelter Room"),(0,n.kt)("p",null,"The Smelter room lets you automate the process of smelting ores and other raw materials."),(0,n.kt)("p",null,"The room contains a ring of 16 chests, hoppers and furnaces which are fed by adding items to two chests in the centre of the room."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The upper chest is the ",(0,n.kt)("strong",{parentName:"li"},"fuel")," chest ","\u2014"," add any items that can be burnt, such as coal, logs etc."),(0,n.kt)("li",{parentName:"ul"},"The lower chest is the ",(0,n.kt)("strong",{parentName:"li"},"ore")," chest ","\u2014"," add the items that you want to smelt in here.")),(0,n.kt)("p",null,"When you close the chests, the TARDIS distributes the items evenly to the surrounding chests. Smelting should start automatically."),(0,n.kt)(a.Z,{name:"Smelter room",description:"",folder:"rooms",image:"smelter.png",heading:!1,mdxType:"TabbedImage"}))}p.isMDXComponent=!0}}]);