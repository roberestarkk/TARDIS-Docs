"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[131],{27263:(e,n,t)=>{t.d(n,{Z:()=>m,w:()=>s});var a=t(67294),r=t(34360),o=t(12699);const s=e=>{const{children:n}=e;return n};function i(e){let{yml:n,cmd:t}=e,r=n[t].aliases;const o="object"==typeof r?r.join(", "):r;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent0",id:t},a.createElement("code",null,"/",t)),a.createElement("td",null,a.createElement("code",null,o)),a.createElement("td",null,a.createElement("code",null,n[t].permission))),a.createElement("tr",null,a.createElement("td",{colSpan:3},n[t].description)),a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,n[t].usage.replace("<command>",t)))))}function l(e){let{ymlKey:n,value:t,cmd:r}=e,i=t.permission,l=null!=i?"__Permission:__ `"+i+"`":"";return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent1",id:n},a.createElement("code",null,n)),a.createElement("td",null,a.createElement(o.D,{children:t.description,components:{p:s}}),a.createElement("br",null),a.createElement(o.D,{children:l,components:{p:s}})),a.createElement("td",null,a.createElement("code",null,t.usage.replace("<command>",r)))))}function m(e){let{data:n,args:t,cmd:o,extra:s}=e;const m=(0,r.Qc)(n),c=(0,r.Qc)(t);let d=a.createElement(a.Fragment,null),p=a.createElement(a.Fragment,null);return 0==s&&(d=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Command"),a.createElement("th",null,"Aliases"),a.createElement("th",null,"Permission"))),p=a.createElement(i,{key:o,yml:m,cmd:o})),a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},d,a.createElement("tbody",null,p,a.createElement("tr",null,a.createElement("th",null,"Arguments"),a.createElement("th",null,"Description"),a.createElement("th",null,"Usage")),Object.entries(c).map((e=>{let[n,t]=e;return a.createElement(l,{key:n,ymlKey:n,value:t,cmd:o})}))))))}},55167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=t(87462),r=(t(67294),t(3905)),o=t(27263);const s={versionNumber:"5.2.0"},i={layout:"default",title:"Player Preferences"},l="Player Preferences",m={unversionedId:"commands/player-preferences",id:"commands/player-preferences",title:"Player Preferences",description:"There are a number of specific player preferences that you can change:",source:"@site/docs/commands/player-preferences.mdx",sourceDirName:"commands",slug:"/commands/player-preferences",permalink:"/TARDIS-Docs/commands/player-preferences",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/player-preferences.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Player Preferences"},sidebar:"docs",previous:{title:"Nether Portal Command",permalink:"/TARDIS-Docs/commands/netherportal"},next:{title:"Recipe Command",permalink:"/TARDIS-Docs/commands/recipe"}},c={},d=[{value:"Player preference commands",id:"player-preference-commands",level:2},{value:"<code>/tardisprefs</code>",id:"tardisprefs",level:2},{value:"TARDIS Key GUI",id:"tardis-key-gui",level:2},{value:"Sonic Screwdriver GUI",id:"sonic-screwdriver-gui",level:2},{value:"@Deprecated",id:"deprecated",level:2}],p={toc:d},u="wrapper";function f(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"player-preferences"},"Player Preferences"),(0,r.kt)("p",null,"There are a number of specific player preferences that you can change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TARDIS key"),(0,r.kt)("li",{parentName:"ul"},"Sound effects"),(0,r.kt)("li",{parentName:"ul"},"Who quotes"),(0,r.kt)("li",{parentName:"ul"},"Wall material"),(0,r.kt)("li",{parentName:"ul"},"Floor material"),(0,r.kt)("li",{parentName:"ul"},"Siege Wall material"),(0,r.kt)("li",{parentName:"ul"},"Siege Floor material"),(0,r.kt)("li",{parentName:"ul"},"Isomorphic controls"),(0,r.kt)("li",{parentName:"ul"},"Autonomous homing function"),(0,r.kt)("li",{parentName:"ul"},"HADS"),(0,r.kt)("li",{parentName:"ul"},"Emergency Program One"),(0,r.kt)("li",{parentName:"ul"},"Police Box sign (not available in TARDIS v2.6 to v2.8)"),(0,r.kt)("li",{parentName:"ul"},"Police Box lamp (only available if the TARDIS preset is a Police Box)"),(0,r.kt)("li",{parentName:"ul"},"Beacon"),(0,r.kt)("li",{parentName:"ul"},"Do Not Disturb (DND)"),(0,r.kt)("li",{parentName:"ul"},"Build flag"),(0,r.kt)("li",{parentName:"ul"},"Minecart sounds"),(0,r.kt)("li",{parentName:"ul"},"Exterior Rendering Room"),(0,r.kt)("li",{parentName:"ul"},"Travel Bar"),(0,r.kt)("li",{parentName:"ul"},"Difficulty"),(0,r.kt)("li",{parentName:"ul"},"Farming"),(0,r.kt)("li",{parentName:"ul"},"Junk Mode"),(0,r.kt)("li",{parentName:"ul"},"Interior hum sound effects"),(0,r.kt)("li",{parentName:"ul"},"Announce repeater settings")),(0,r.kt)("p",null,"Each preference can be set with a command, and some of them can be set via an inventory based GUI (if the player has a\nSonic Screwdriver, sneaking and right-clicking air will open the Player Preferences GUI)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Player prefs GUI",src:t(86904).Z,width:"916",height:"515"})),(0,r.kt)("h2",{id:"player-preference-commands"},"Player preference commands"),(0,r.kt)("h2",{id:"tardisprefs"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisprefs")),(0,r.kt)(o.Z,{data:"tardisprefs:\n    aliases: tprefs\n    description: Set player preferences.\n    permission: tardis.timetravel\n    usage: /<command> [preference] [on|off]\n    ",args:"\n    announce_repeaters:\n      description: Toggle announcing (i.e. showing a title in-game) of the TARDIS console travel repeater settings when you click them\n      usage: /<command> announce_repeaters [on|off]\n      permission: tardis.prefs.announce_repeaters\n    auto:\n      description: Toggle the TARDIS Autonomous Homing feature on and off. If the server admin has disabled the autonomous homing function in the plugin config, this command will have no effect. See the [Autonomous homing function](autonomous) page for more information.\n      permission: tardis.prefs.auto\n      usage: /<command> auto [on|off]\n    auto_powerup:\n      description: Toggle automatic powerup on and off (when entering the TARDIS).\n      permission: tardis.prefs.auto_powerup\n      usage: /<command> auto_powerup [on|off]\n    auto_siege:\n      description: Toggle automatic Siege Mode on and off (when the Time Lord dies).\n      permission: tardis.prefs.auto_siege\n      usage: /<command> submarine [on|off]\n    beacon:\n      description: Toggle whether the TARDIS beacon is only on while travelling.\n      permission: tardis.prefs.beacon\n      usage: /<command> beacon [on|off]\n    build:\n      description: Toggle companion building inside the TARDIS on and off.\n      permission: tardis.prefs.build\n      usage: /<command> build [on|off]\n    chameleon:\n      description: Toggle the chameleon circuit on and off.\n      permission: tardis.prefs.chameleon\n      usage: /<command> chameleon [on|off]\n    difficulty:\n      description: Change your personal difficulty level.\n      permission: tardis.prefs.difficulty\n      usage: /<command> difficulty [easy|medium|hard]\n    dnd:\n      description: Annoyed by other players time travelling to your location?Toggle whether other players can request travel/rescue to you.\n      permission: tardis.prefs.dnd\n      usage: /<command> dnd [on|off]\n    eps:\n      description: Toggle Emergency Programme One on and off.\n      permission: tardis.prefs.eps\n      usage: /<command> eps [on|off]\n    eps_message:\n      description: Set the Emergency Programme One message.\n      permission: tardis.prefs.eps_message\n      usage: /<command> eps_message [message]\n    farm:\n      description: Toggle mob farming on and off. Requires the appropriate room, or `allow.spawn_eggs` set to `true` in the TARDIS config.\n      permission: tardis.prefs.farm\n      usage: /<command> farm [on|off]\n    flight:\n      description: Set the TARDIS flight mode.\n      permission: tardis.prefs.flight\n      usage: /<command> flight [normal|regulator|manual]\n    floor:\n      description: Set the TARDIS room growing floor material. `[material]` is a block from the list on the [Wall materials](../walls) page.\n      permission: tardis.prefs.floor\n      usage: /<command> floor [material]\n    forcefield:\n      description: Toggle the TARDIS forcefield on and off.\n      permission: tardis.prefs.forcefield\n      usage: /<command> forcefield [on|off]\n    hads:\n      description: Toggle HADS on and off.\n      permission: tardis.prefs.hads\n      usage: /<command> hads [on|off]\n    hads_type:\n      description: Set the TARDIS HADS type.\n      permission: tardis.prefs.hads_type\n      usage: /<command> hads_type [dispersal|displacement]\n    hum:\n      description: Sets the TARDIS interior hum sound. The sounds are called  `alien`, `atmosphere`, `computer`, `copper`, `coral`, `galaxy`, `learning`, `mind`, `neon`, `sleeping`, `void`, `random`\n      permission: tardis.prefs.hum\n      usage: /<command> hum [sound]\n    isomorphic:\n      description: Toggle isomorphic controls on and off.\n      permission: tardis.prefs.isomorphic\n      usage: /<command> isomorphic [on|off]\n    junk:\n      description: Toggle Junk mode on and off.\n      permission: tardis.prefs.junk\n      usage: /<command> junk [on|off]\n    key:\n      description: Set the TARDIS key item. The server admin may have restricted the list of items that may be used for the TARDIS Key. Use auto-completion to see a list of available items e.g. type `/tardisprefs key` then press the TAB key.\n      permission: tardis.prefs.key\n      usage: /<command> key [material]\n    key_menu:\n      description: Open the TARDIS Key preferences GUI.\n      permission: tardis.prefs.key_menu\n      usage: /<command> key_menu\n    language:\n      description: Set the language used in the '/tardis say' command.\n      permission: tardis.prefs.language\n      usage: /<command> language [language]\n    lanterns:\n      description: Toggle Sea Lanterns for lights on and off.\n      permission: tardis.prefs.lanterns\n      usage: /<command> lanterns [on|off]\n    message:\n      description: Set the Emergency Programme One message.\n      permission: tardis.prefs.message\n      usage: /<command> eps_message [message]\n    minecart:\n      description: Toggle default Minecraft SFX on and off. If the server admin has disabled sound effects in the plugin config, this command will have no effect.\n      permission: tardis.prefs.minecart\n      usage: /<command> minecart [on|off]\n    quotes:\n      description: Toggle the TARDIS quotes on and off.\n      permission: tardis.prefs.quotes\n      usage: /<command> quotes [on|off]\n    renderer:\n      description: Toggle entering the Renderer room after scanning on and off.\n      permission: tardis.prefs.renderer\n      usage: /<command> renderer [on|off]\n    sfx:\n      description: Toggle the TARDIS sound effects on and off. If the server admin has disabled sound effects in the plugin config, this command will have no effect.\n      permission: tardis.prefs.sfx\n      usage: /<command> sfx [on|off]\n    siege_floor:\n      description: Set the block used for the TARDIS floor when Siege Mode is engaged, where `[material]` is a block from the list on the [Wall materials](../walls) page. This setting has no effect if `siege.textures` is ` false` is set in the config.\n      permission: tardis.prefs.siege_floor\n      usage: /<command> siege_floor [block type]\n    siege_wall:\n      description: Set the block used for the TARDIS walls when Siege Mode is engaged, where `[material]` is a block from the list on the [Wall materials](../walls) page. This setting has no effect if `siege.textures` is ` false` is set in the config.\n      permission: tardis.prefs.siege_wall\n      usage: /<command> siege_wall [block type]\n    sign:\n      description: Toggle the Police Box 'name' sign on and off.\n      permission: tardis.prefs.sign\n      usage: /<command> sign [on|off]\n    sonic:\n      description: Open the Sonic Screwdriver preferences GUI.\n      permission: tardis.prefs.sonic\n      usage: /<command> sonic\n    submarine:\n      description: Toggle submarine landings on and off.\n      permission: tardis.prefs.submarine\n      usage: /<command> submarine [on|off]\n    translate:\n      description: Set the languages and player used when auto translating messages.\n      permission: tardis.prefs.translate\n      usage: /<command> translate [language to] [language from] [player]\n    travelbar:\n      description: Toggle the travel remaining progress bar on and off.\n      permission: tardis.prefs.travelbar\n      usage: /<command> travelbar [on|off]\n    wall:\n      description: Set the TARDIS room growing wall material. `[material]` is a block from the list on the [Wall materials](../walls) page.\n      permission: tardis.prefs.wall\n      usage: /<command> wall [material]\n    ",cmd:"tardisprefs",extra:"false",mdxType:"CommandTable"}),(0,r.kt)("h2",{id:"tardis-key-gui"},"TARDIS Key GUI"),(0,r.kt)("p",null,"To change the look of your TARDIS Key, type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisprefs key_menu\n")),(0,r.kt)("p",null,"This requires the ",(0,r.kt)("a",{parentName:"p",href:"/resource-packs"},"TARDIS-Resource-Pack")," to see the\ndifferent key textures. Use the command to open the TARDIS Key GUI."),(0,r.kt)("p",null,"To change the TARDIS key texture:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Place your key in the lower left slot and then select the\nkey of your choice"),(0,r.kt)("li",{parentName:"ul"},"To change the colour of the key\u2019s display name, click the wool block to choose a colour"),(0,r.kt)("li",{parentName:"ul"},"Remove your key and close the GUI")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TARDIS Key GUI",src:t(4340).Z,width:"600",height:"337"})),(0,r.kt)("h2",{id:"sonic-screwdriver-gui"},"Sonic Screwdriver GUI"),(0,r.kt)("p",null,"To change the look of your Sonic Screwdriver, type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisprefs sonic\n")),(0,r.kt)("p",null,"This requires the ",(0,r.kt)("a",{parentName:"p",href:"/resource-packs"},"TARDIS-Resource-Pack")," to see the\ndifferent sonic textures. Use the command to open the Sonic Screwdriver GUI."),(0,r.kt)("p",null,"To change the screwdriver texture:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Place your sonic in the lower left slot and then select the\nscrewdriver of your choice"),(0,r.kt)("li",{parentName:"ul"},"To change the colour of the sonic\u2019s display name, click the wool block to choose a colour"),(0,r.kt)("li",{parentName:"ul"},"Remove your screwdriver and close the GUI")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sonic Screwdriver GUI",src:t(1912).Z,width:"600",height:"337"})),(0,r.kt)("h2",{id:"deprecated"},"@Deprecated"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",null,"These preferences are not available in version ",(0,r.kt)("code",null,s.versionNumber)," of the plugin.")),(0,r.kt)(o.Z,{data:"tardisprefs:\n    aliases: tprefs\n    description: Set player preferences.\n    permission: tardis.timetravel\n    usage: /<command> [preference] [on|off]\n    ",args:"\n    plain:\n      description: Toggle the plain TARDIS on and off (no sign or lamp).\n      permission: tardis.prefs.plain\n      usage: /<command> plain [on|off]\n    policebox_textures:\n      description: Toggle Police Box textures on and off (biome for CTM is set / not set at the TARDIS' location).\n      permission: tardis.prefs.policebox_textures\n      usage: /<command> policebox_textures [on|off]\n    wool_lights:\n      description: hoose whether to use black wool or sponge (re-textured with the TARDIS Resource Pack to look like Redstone Lamp Off blocks) for the off state of the TARDIS lights.\n      permission: tardis.prefs.wool_lights\n      usage: /<command> wool_lights [on|off]\n    ctm:\n      description: Choose whether your Police Box preset uses the Connected Textures Mod to change the block to the left of the door to a quartz pillar that is retextured to the Police Box sign (players without the mod installed will see a plain quartz pillar instead of the regular blue wool when this is `on`).\n      permission: tardis.prefs.ctm\n      usage: /<command> ctm [on|off]\n    lanterns:\n      description: Set whether your TARDIS console uses lanterns or redstone lamps. `on` means that the console will use sea lanterns, toggle the lights off and on to see the change.\n      permission: tardis.prefs.lanterns\n      usage: /<command> lanterns [on|off]\n    ",cmd:"tardisprefs",extra:"true",mdxType:"CommandTable"}))}f.isMDXComponent=!0},4340:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/key_prefs_menu-0b0b56dd96eddbcaa68dc01526c8219f.jpg"},86904:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/player_prefs_custom-b090aba04d119c05234c8b7648585845.jpg"},1912:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/sonic_prefs_menu-d359841509fe556d86d12cd4c5a3b128.jpg"}}]);