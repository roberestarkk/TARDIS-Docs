"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[381],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(o),c=r,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||l;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},11309:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const l={layout:"default",title:"How to use BuildTools"},a=void 0,i={unversionedId:"build-tools",id:"build-tools",title:"How to use BuildTools",description:"You should just download Paper instead of using BuildTools. Paper is a fork of Spigot that is more optimized and doesn't require the steps below.",source:"@site/docs/build-tools.md",sourceDirName:".",slug:"/build-tools",permalink:"/TARDIS-Docs/build-tools",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/build-tools.md",tags:[],version:"current",frontMatter:{layout:"default",title:"How to use BuildTools"}},s={},p=[{value:"Getting the right tools",id:"getting-the-right-tools",level:2},{value:"Setting up to build the server JARs",id:"setting-up-to-build-the-server-jars",level:2},{value:"Building the server JARs",id:"building-the-server-jars",level:2},{value:"Keeping up-to-date",id:"keeping-up-to-date",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You should just download Paper instead of using BuildTools. Paper is a fork of Spigot that is more optimized and doesn't require the steps below."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://papermc.io/downloads/paper"},"https://papermc.io/downloads/paper"))),(0,r.kt)("h1",{id:"how-to-use-buildtools"},"How to use BuildTools"),(0,r.kt)("p",null,"TARDIS is always compiled against the latest version of Spigot. Spigot is being constantly updated, and sometimes TARDIS\ntakes advantage of the new features that have been added to the Spigot API. This means that if you don\u2019t keep your\nserver JAR file up-to-date, then TARDIS ",(0,r.kt)("em",{parentName:"p"},"may not be able to run properly"),"."),(0,r.kt)("p",null,"Spigot has released a tool called BuildTools that allows you to get the latest version of Spigot (as well as the Spigot\nAPI \u2014 but only plugin developers need to worry about that)."),(0,r.kt)("p",null,"Using BuildTools is a slightly tricky process to setup the first time around, but if you follow the steps below, they\nwill hopefully help you get it right :)"),(0,r.kt)("p",null,"If you have\nproblems, ",(0,r.kt)("a",{parentName:"p",href:"http://tardisjenkins.duckdns.org:8080/job/BuildTools/"},"BuildTools is run nightly on the TARDIS Jenkins server"),"\n\u2014 you can download Spigot and Spigot-API from there."),(0,r.kt)("p",null,"This guide is for ",(0,r.kt)("strong",{parentName:"p"},"Windows")," , if you use Linux, then you probably already have a good idea how to do this sort of\nthing \u2014 just follow ",(0,r.kt)("a",{parentName:"p",href:"http://www.spigotmc.org/threads/bukkit-craftbukkit-spigot-1-8.36598/"},"Spigot\u2019s instructions")),(0,r.kt)("h2",{id:"getting-the-right-tools"},"Getting the right tools"),(0,r.kt)("p",null,"To compile Spigot you will need three things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The BuildTools JAR \u2014 you can download that\nhere: ",(0,r.kt)("a",{parentName:"li",href:"https://hub.spigotmc.org/jenkins/job/BuildTools/"},"https://hub.spigotmc.org/jenkins/job/BuildTools/")),(0,r.kt)("li",{parentName:"ol"},"The Java Software Development Kit (JDK) \u2014 download from the Oracle\nwbsite: ",(0,r.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/#java17"},"https://www.oracle.com/java/technologies/downloads/#java17"),"\n\u2014 you probably have Java installed already, but you need this version to actually build anything from code"),(0,r.kt)("li",{parentName:"ol"},"GitHub for Windows \u2014 Get it here: ",(0,r.kt)("a",{parentName:"li",href:"https://windows.github.com"},"https://windows.github.com"))),(0,r.kt)("p",null,"Once you have downloaded the three required tools:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Put BuildTools.jar file in its own folder, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"Downloads\\BuildTools\\")),(0,r.kt)("li",{parentName:"ol"},"Install the Java (JDK) \u2014 it will most probably install at ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\Java\\jdk17.0.2\\")),(0,r.kt)("li",{parentName:"ol"},"Install GitHub (let it add shortcuts to your desktop), start it up, and create a free account")),(0,r.kt)("h2",{id:"setting-up-to-build-the-server-jars"},"Setting up to build the server JARs"),(0,r.kt)("p",null,"You are going to be running BuildTools from the GitHub command line, but before you do that you will need to set up a\nJava system variable."),(0,r.kt)("p",null,"Follow these next steps to do that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open an Explorer window, right-click ",(0,r.kt)("strong",{parentName:"li"},"Computer")," and choose ",(0,r.kt)("strong",{parentName:"li"},"Properties")," \u2014 this should open the ",(0,r.kt)("strong",{parentName:"li"},"Control Panel"),"\nto ",(0,r.kt)("strong",{parentName:"li"},"System information")),(0,r.kt)("li",{parentName:"ol"},"On the left hand side click ",(0,r.kt)("strong",{parentName:"li"},"Advanced system settings")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"System properties")," window that comes up click ",(0,r.kt)("strong",{parentName:"li"},"Environment variables...")),(0,r.kt)("li",{parentName:"ol"},"In the bottom ( ",(0,r.kt)("strong",{parentName:"li"},"System variables")," ) section click the ",(0,r.kt)("strong",{parentName:"li"},"New...")," button"),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Variable name")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")),(0,r.kt)("li",{parentName:"ol"},"for ",(0,r.kt)("strong",{parentName:"li"},"Variable value")," type the path to your JDK installation, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/Program Files/Java/jdk17.0.2/")),(0,r.kt)("li",{parentName:"ol"},"click OK, OK, Apply etc")),(0,r.kt)("h2",{id:"building-the-server-jars"},"Building the server JARs"),(0,r.kt)("p",null,"Almost there! The last step is to actually compile the server JAR files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Git Shell from the desktop shortcut"),(0,r.kt)("li",{parentName:"ol"},"The shell opens in your user directory, so you need to get to the folder where you put the BuildTools.jar file. Use\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"cd")," command to change to the right directory, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"cd Downloads/BuildTools")),(0,r.kt)("li",{parentName:"ol"},"Now you can start the build process, type ",(0,r.kt)("inlineCode",{parentName:"li"},"java -jar BuildTools.jar")),(0,r.kt)("li",{parentName:"ol"},"Let the programme do its thing, it will download everything it needs, and takes about 10 minutes to compile the JARs\nwhen run for the first time \u2014 subsequent builds will be much quicker.")),(0,r.kt)("p",null,"Once the process is complete, you will find the Spigot JAR waiting for you in the BuildTools folder."),(0,r.kt)("h2",{id:"keeping-up-to-date"},"Keeping up-to-date"),(0,r.kt)("p",null,"Once you have it all setup, it is easy to keep your server up-to-date \u2014 just redo the steps under the ",(0,r.kt)("em",{parentName:"p"},"Building the\nserver JARs")," heading. BuildTools will fetch the latest code changes and produce a new set of server JARs."))}h.isMDXComponent=!0}}]);