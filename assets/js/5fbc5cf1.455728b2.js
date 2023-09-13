"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[1207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={layout:"default",title:"API"},o="TARDIS API",l={unversionedId:"api",id:"api",title:"API",description:"The TARDIS plugin includes a publically accessible API for plugin developers to use.",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/TARDIS-Docs/api",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/api.md",tags:[],version:"current",frontMatter:{layout:"default",title:"API"},sidebar:"docs",previous:{title:"pruning",permalink:"/TARDIS-Docs/prune"},next:{title:"Updateable blocks",permalink:"/TARDIS-Docs/update-blocks"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-api"},"TARDIS API"),(0,a.kt)("p",null,"The TARDIS plugin includes a publically accessible API for plugin developers to use."),(0,a.kt)("p",null,"As of TARDIS v3.2-beta-1 the API can be accessed in your plugin like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ExamplePlugin extends JavaPlugin {\n    private TardisAPI tardisAPI;\n    private TARDIS tardis;\n\n    @Override\n    public void onEnable() {\n        PluginManager pm = getServer().getPluginManager();\n        // Get TARDIS\n        Plugin p = pm.getPlugin("TARDIS");\n        if (p == null) {\n            System.err.println("Cannot find TARDIS!");\n            pm.disablePlugin(this);\n            return;\n        }\n        tardis = (TARDIS) p;\n        // get the API\n        tardisAPI = tardis.getTardisAPI();\n    }\n\n    public TardisAPI getTardisAPI() {\n        return tardisAPI;\n    }\n}\n')),(0,a.kt)("p",null,"You can auto-generate a plugin that hooks into the TARDIS API at the\n",(0,a.kt)("a",{parentName:"p",href:"http://thenosefairy.duckdns.org/plugin_starter.php"},"Spigot plugin starter")," page.\nMake sure to select the ",(0,a.kt)("em",{parentName:"p"},"TARDIS API")," checkbox."),(0,a.kt)("p",null,"The Java Doc for the API is available here:\n",(0,a.kt)("a",{parentName:"p",href:"http://thenosefairy.duckdns.org/TARDIS_java_docs/me/eccentric_nz/TARDIS/api/TardisAPI.html"},"TARDIS API docs")),(0,a.kt)("p",null,"An extensive working example plugin can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eccentricdevotion/TARDISVortexManipulator"},"TARDISVortexManipulator source code")))}d.isMDXComponent=!0}}]);