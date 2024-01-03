"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[4032],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>N});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var A=r.createContext({}),i=function(n){var e=r.useContext(A),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=i(n.components);return r.createElement(A.Provider,{value:e},n.children)},p="mdxType",I={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,A=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=i(t),c=a,N=p["".concat(A,".").concat(c)]||p[c]||I[c]||o;return t?r.createElement(N,l(l({ref:e},u),{},{components:t})):r.createElement(N,l({ref:e},u))}));function N(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var A in e)hasOwnProperty.call(e,A)&&(s[A]=e[A]);s.originalType=n,s[p]="string"==typeof n?n:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},55221:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>A,contentTitle:()=>l,default:()=>I,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={layout:"default",title:"Universal Translator"},l="TARDIS Universal Translator",s={unversionedId:"translator",id:"translator",title:"Universal Translator",description:"The translation circuit is a part of the TARDIS that allows instantaneous translation of most languages spoken or",source:"@site/docs/translator.md",sourceDirName:".",slug:"/translator",permalink:"/TARDIS-Docs/translator",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/translator.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Universal Translator"},sidebar:"docs",previous:{title:"Remote Key",permalink:"/TARDIS-Docs/remote-key"},next:{title:"Achievements",permalink:"/TARDIS-Docs/achievements"}},A={},i=[{value:"How it works",id:"how-it-works",level:2},{value:"Supported languages",id:"supported-languages",level:3},{value:"Auto-translating player messages",id:"auto-translating-player-messages",level:2}],u={toc:i},p="wrapper";function I(n){let{components:e,...o}=n;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tardis-universal-translator"},"TARDIS Universal Translator"),(0,a.kt)("p",null,"The translation circuit is a part of the TARDIS that allows instantaneous translation of most languages spoken or\nwritten in the universe."),(0,a.kt)("p",null,"You can send translated text in chat using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tardissay [language] [message]"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardissay SWEDISH hello world\n")),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The command uses the free Lingva translation API to translate your message \u2014 see the list of supported languages below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[language]")," \u2014 You need to specify the language you want to translate into"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[message]")," \u2014 The plugin tries to auto-detect the language that you are typing in, however you can force the language\nit uses by setting a player preference:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisprefs language [language]\n")),(0,a.kt)("h3",{id:"supported-languages"},"Supported languages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AUTO_DETECT\nAFRIKAANS\nALBANIAN\nAMHARIC\nARABIC\nARMENIAN\nASSAMESE\nAYMARA\nAZERBAIJANI\nBAMBARA\nBASQUE\nBELARUSIAN\nBENGALI\nBHOJPURI\nBOSNIAN\nBULGARIAN\nCATALAN\nCEBUANO\nCHICHEWA\nCHINESE\nCORSICAN\nCROATIAN\nCZECH\nDANISH\nDHIVEHI\nDOGRI\nDUTCH\nENGLISH\nESPERANTO\nESTONIAN\nEWE\nFILIPINO\nFINNISH\nFRENCH\nFRISIAN\nGALICIAN\nGEORGIAN\nGERMAN\nGREEK\nGUARANI\nGUJARATI\nHAITIAN_CREOLE\nHAUSA\nHAWAIIAN\nHEBREW\nHINDI\nHMONG\nHUNGARIAN\nICELANDIC\nIGBO\nILOCANO\nINDONESIAN\nIRISH\nITALIAN\nJAPANESE\nJAVANESE\nKANNADA\nKAZAKH\nKHMER\nKINYARWANDA\nKONKANI\nKOREAN\nKRIO\nKURDISH\nKYRGYZ\nLAO\nLATIN\nLATVIAN\nLINGALA\nLITHUANIAN\nLUGANDA\nLUXEMBOURGISH\nMACEDONIAN\nMAITHILI\nMALAGASY\nMALAY\nMALAYALAM\nMALTESE\nMAORI\nMARATHI\nMEITEILON\nMIZO\nMONGOLIAN\nMYANMAR\nNEPALI\nNORWEGIAN\nODIA\nOROMO\nPASHTO\nPERSIAN\nPOLISH\nPORTUGUESE\nPUNJABI\nQUECHUA\nROMANIAN\nRUSSIAN\nSAMOAN\nSANSKRIT\nSCOTS_GAELIC\nSEPEDI\nSERBIAN\nSESOTHO\nSHONA\nSINDHI\nSINHALA\nSLOVAK\nSLOVENIAN\nSOMALI\nSPANISH\nSUNDANESE\nSWAHILI\nSWEDISH\nTAJIK\nTAMIL\nTATAR\nTELUGU\nTHAI\nTIGRINYA\nTSONGA\nTURKISH\nTURKMEN\nTWI\nUKRAINIAN\nURDU\nUYGHUR\nUZBEK\nVIETNAMESE\nWELSH\nXHOSA\nYIDDISH\nYORUBA\nZULU\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TARDIS Universal Translator",src:t(80029).Z,width:"600",height:"354"})),(0,a.kt)("h2",{id:"auto-translating-player-messages"},"Auto-translating player messages"),(0,a.kt)("p",null,"You can setup the TARDIS plugin to automatically translate messages from a specified player. Use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisprefs translate [language to] [language from] [player]\n")),(0,a.kt)("p",null,"To turn off auto-translation, use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tardisprefs translate off\n")))}I.isMDXComponent=!0},80029:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/universaltranslator-702e975e3f0bc57ec3aee62e51c1fa65.jpg"}}]);