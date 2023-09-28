"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[3546],{27263:(e,n,a)=>{a.d(n,{Z:()=>m,w:()=>o});var t=a(67294),r=a(34360),s=a(12699);const o=e=>{const{children:n}=e;return n};function i(e){let{yml:n,cmd:a}=e,r=n[a].aliases;const s="object"==typeof r?r.join(", "):r;return t.createElement(t.Fragment,null,t.createElement("tr",null,t.createElement("td",{className:"indent0",id:a},t.createElement("code",null,"/",a)),t.createElement("td",null,t.createElement("code",null,s)),t.createElement("td",null,t.createElement("code",null,n[a].permission))),t.createElement("tr",null,t.createElement("td",{colSpan:3},n[a].description)),t.createElement("tr",null,t.createElement("td",{colSpan:3},t.createElement("code",null,n[a].usage.replace("<command>",a)))))}function d(e){let{ymlKey:n,value:a,cmd:r}=e,i=a.permission,d=null!=i?"__Permission:__ `"+i+"`":"";return t.createElement(t.Fragment,null,t.createElement("tr",null,t.createElement("td",{className:"indent1"},t.createElement("code",null,n)),t.createElement("td",null,t.createElement(s.D,{children:a.description,components:{p:o}}),t.createElement("br",null),t.createElement(s.D,{children:d,components:{p:o}})),t.createElement("td",null,t.createElement("code",null,a.usage.replace("<command>",r)))))}function m(e){let{data:n,args:a,cmd:s,extra:o}=e;const m=(0,r.Qc)(n),l=(0,r.Qc)(a);let c=t.createElement(t.Fragment,null),p=t.createElement(t.Fragment,null);return"false"==o&&(c=t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Command"),t.createElement("th",null,"Aliases"),t.createElement("th",null,"Permission"))),p=t.createElement(i,{key:s,yml:m,cmd:s})),t.createElement(t.Fragment,null,t.createElement("div",{className:"table-responsive"},t.createElement("table",{className:"table table-striped table-bordered"},c,t.createElement("tbody",null,p,t.createElement("tr",null,t.createElement("th",null,"Arguments"),t.createElement("th",null,"Description"),t.createElement("th",null,"Usage")),Object.entries(l).map((e=>{let[n,a]=e;return t.createElement(d,{key:n,ymlKey:n,value:a,indent:0,cmd:s})}))))))}},25462:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=a(87462),r=(a(67294),a(3905)),s=a(27263);const o={layout:"default",title:"Admin Commands"},i="Admin Commands",d={unversionedId:"commands/admin",id:"commands/admin",title:"Admin Commands",description:"This page contains all /tardisadmin sub-commands. Every command requires the tardis.admin permission node.",source:"@site/docs/commands/admin.mdx",sourceDirName:"commands",slug:"/commands/admin",permalink:"/TARDIS-Docs/commands/admin",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/admin.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Admin Commands"},sidebar:"docs",previous:{title:"Commands",permalink:"/TARDIS-Docs/category/commands"},next:{title:"Area Commands",permalink:"/TARDIS-Docs/commands/area"}},m={},l=[{value:"<code>/tardisadmin</code>",id:"tardisadmin",level:2}],c={toc:l},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"admin-commands"},"Admin Commands"),(0,r.kt)("p",null,"This page contains all ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin")," sub-commands. Every command requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"tardis.admin")," permission node."),(0,r.kt)("h2",{id:"tardisadmin"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisadmin")),(0,r.kt)(s.Z,{data:"tardisadmin:\n    aliases: tadmin\n    description: Perform TARDIS administration tasks.\n    permission: tardis.admin\n    usage: /<command> [sub command] [options...]\n    ",args:"\n    arch:\n      description: View an \u2018arched\u2019 player\u2019s real name, or with the `force` argument, toggle arch status. _See also the [Chameleon Arch](chameleon-arch) page._\n      usage: /<command> arch [player] <force>\n    assemble:\n      description: Clear HADS dispersal trackers or list dispersed TARDISes.\n      usage: /<command> assemble [clear|list]\n    chunks:\n      description: List chunks that are being kept loaded by TARDIS.\n      usage: /<command> chunks\n    condenser:\n      description: Set the chest you are targeting in game, as the server\u2019s community Artron Condenser - see [Server condenser](../condenser#server-condenser).\n      usage: /<command> condenser\n    convert_database:\n      description: Convert an SQLite database to MySQL.\n      usage: /<command> convert_database\n    create:\n      description: Create a TARDIS for a player. The TARDIS exterior will appear on the block that the command sender is targeting.\n      usage: /<command> create [player] [schematic] <wall> <floor>\n    decharge:\n      description: Remove the specified beacon recharger from the config.\n      usage: /<command> decharge [name]\n    delete:\n      description: Delete a player\u2019s TARDIS.\n      usage: /<command> delete [player]\n    disguise:\n      description: Disguise a player as the specified entity type.\n      usage: /<command> disguise [player] [entity type]    \n    dispersed:\n      description: Clear the dispersed status of all TARDISes, or list which TARDISes are currently dispersed by HADS.\n      usage: /<command> dispersed [clear|list]\n    enter:\n      description: Enter a player\u2019s TARDIS (by direct teleport instead of the door).\n      permission: tardis.skeletonkey\n      usage: /<command> enter [player]\n    find:\n      description: Searches for hidden TARDISs or empty blocks with TARDIS protection on them around a player\u2019s location with an optional distance parameter. If protected blocks are found, click the listing in chat to remove the protection.\n      usage: /<command> find [distance]\n    list:\n      description: List TARDISs and their locations (or save them to file), plus list open portals / abandoned TARDISes.\n      usage: /<command> list [page no.|save|portals|abandoned]\n    make_preset:\n      description: Create a custom chameleon preset file - see [Custom presets](custom-preset).\n      usage: /<command> make_preset [name] [asymmetric:true|false]\n    maze:\n      description: Create a 11 x 11 block maze starting at the targeted block.\n      usage: /<command> maze\n    mvimport:\n      description: Import Multiverse worlds into TARDIS's _planets.yml_.\n      usage: /<command> mvimport\n    playercount:\n      description: Check or set a player\u2019s TARDIS count.\n      usage: /<command> playercount [player] <count>\n    prune:\n      description: Remove TARDISes that haven\u2019t been used for an extended period.\n        See the [Prune](prune) page for more details.\n      usage: /<command> prune [number of days]\n    prunelist:\n      description: List TARDISes that haven\u2019t been used for an extended period.\n      usage: /<command> prunelist [number of days]\n    purge:\n      description: Remove all database entries for the named player.\n      usage: /<command> purge [player]\n    purge_portals:\n      description: Clear all data associated with walking into the TARDIS (they\u2019ll still work, just toggle open the door again)\n      usage: /<command> purge_portals\n    recharger:\n      description: Set the beacon block you are looking at, as a TARDIS recharge station.\n      usage: /<command> recharger [name]\n    region_flag:\n      description: >\n        Sets the WorldGuard entry or exit flags for all regions in the TARDIS `default_world`. See info below.\n      usage: /<command> region_flag [entry|exit]\n    repair:\n      description: Set a player\u2019s TARDIS repair count.\n      usage: /<command> repair [player] [amount]\n    revoke:\n      description: Remove a blueprint permission from a player.\n      usage: /<command> revoke [player] [permission]\n    set_size:\n      description: Set a player\u2019s console size/type in the database.\n      usage: /<command> set_size [player] [size]\n    spwan_abandoned:\n      description: Spawn an abandoned TARDIS - see [Spawning abandoned TARDISes](abandon#spawning-abandoned-tardises).\n      usage: /<command> spawn_abandoned [SCHEMATIC] [PRESET] [DIRECTION] world x y z\n    undisguise:\n      description: Remove a disguise from a player.\n      usage: /<command> undisguise [player]\n    update_plugins:\n      description: Download the latest TARDIS plugin from the Jenkins server. Restart the server to update the plugin.\n      usage: /<command> update_plugins\n    ",cmd:"tardisadmin",extra:"false",mdxType:"CommandTable"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The actual commands run for ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin region_flag entry")," are:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"/rg flag [region_id] exit -w [world_name]\n/rg flag [region_id] entry -w [world_name] -g nonmembers deny\n")),(0,r.kt)("p",{parentName:"admonition"},"And ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisadmin region_flag exit"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"/rg flag [region_id] entry -w [world_name]\n/rg flag [region_id] exit -w [world_name] -g everyone deny\n/rg flag [region_id] use -w [world_name] allow\n/rg flag [region_id] chest-access -w [world_name]\n"))))}u.isMDXComponent=!0}}]);