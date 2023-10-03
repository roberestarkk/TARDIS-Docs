"use strict";(self.webpackChunktardis_docs=self.webpackChunktardis_docs||[]).push([[2799],{27263:(e,t,n)=>{n.d(t,{Z:()=>h,w:()=>o});var a=n(67294),r=n(34360),s=n(12699);const o=e=>{const{children:t}=e;return t};function i(e){let{yml:t,cmd:n}=e,r=t[n].aliases;const s="object"==typeof r?r.join(", "):r;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent0",id:n},a.createElement("code",null,"/",n)),a.createElement("td",null,a.createElement("code",null,s)),a.createElement("td",null,a.createElement("code",null,t[n].permission))),a.createElement("tr",null,a.createElement("td",{colSpan:3},t[n].description)),a.createElement("tr",null,a.createElement("td",{colSpan:3},a.createElement("code",null,t[n].usage.replace("<command>",n)))))}function l(e){let{ymlKey:t,value:n,cmd:r}=e,i=n.permission,l=null!=i?"__Permission:__ `"+i+"`":"";return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"indent1",id:t},a.createElement("code",null,t)),a.createElement("td",null,a.createElement(s.D,{children:n.description,components:{p:o}}),a.createElement("br",null),a.createElement(s.D,{children:l,components:{p:o}})),a.createElement("td",null,a.createElement("code",null,n.usage.replace("<command>",r)))))}function h(e){let{data:t,args:n,cmd:s,extra:o}=e;const h=(0,r.Qc)(t),c=(0,r.Qc)(n);let d=a.createElement(a.Fragment,null),m=a.createElement(a.Fragment,null);return 0==o&&(d=a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Command"),a.createElement("th",null,"Aliases"),a.createElement("th",null,"Permission"))),m=a.createElement(i,{key:s,yml:h,cmd:s})),a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},d,a.createElement("tbody",null,m,a.createElement("tr",null,a.createElement("th",null,"Arguments"),a.createElement("th",null,"Description"),a.createElement("th",null,"Usage")),Object.entries(c).map((e=>{let[t,n]=e;return a.createElement(l,{key:t,ymlKey:t,value:n,cmd:s})}))))))}},39446:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34360),s=n(12699);const o=e=>{const{children:t}=e;return t};function i(e){let{data:t,ymlKey:n,value:r,indent:l=0}=e;const h=typeof r,c="object"===h;n=n.trim().split(".").pop();const d=c?Object.entries(r).map((e=>{let[n,r]=e;return a.createElement(i,{key:n,data:t,ymlKey:n,value:r,indent:l+1})})):null,m=t.split("\n").find((e=>e.trim().startsWith(n+":")));let u=null;m.includes("#")&&(u=m.split("#")[1]);let p="indent"+l;if(c){let e;return u&&(e=a.createElement("tr",null,a.createElement("td",{colSpan:3,className:p},a.createElement(s.D,{children:u,components:{p:o}})))),a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{colSpan:3,className:p,id:n.toString()},a.createElement("code",null,n,":"))),e,d)}const g=a.createElement("tr",null,a.createElement("td",{className:p,id:n.toString()},a.createElement("code",null,n.toString())),a.createElement("td",null,a.createElement("code",null,h.toString())),a.createElement("td",null,a.createElement("code",null,r.toString())));return u?a.createElement(a.Fragment,null,g,a.createElement("tr",null,a.createElement("td",{colSpan:3,className:p},a.createElement(s.D,{children:u,components:{p:o}})))):g}function l(e){let{data:t}=e;const n=(0,r.Qc)(t);return a.createElement(a.Fragment,null,a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-bordered"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Config"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,Object.entries(n).map((e=>{let[n,r]=e;return a.createElement(i,{key:n,data:t,ymlKey:n,value:r,indent:0})}))))))}},93720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(27263),o=n(39446);const i={layout:"default",title:"Config Commands"},l="Config commands",h={unversionedId:"commands/config",id:"commands/config",title:"Config Commands",description:"/tardisconfig",source:"@site/docs/commands/config.mdx",sourceDirName:"commands",slug:"/commands/config",permalink:"/TARDIS-Docs/commands/config",draft:!1,editUrl:"https://github.com/Chew/TARDIS-Docs/tree/master/docs/commands/config.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Config Commands"},sidebar:"docs",previous:{title:"Commands",permalink:"/TARDIS-Docs/commands"},next:{title:"Dev Commands",permalink:"/TARDIS-Docs/commands/dev"}},c={},d=[{value:"<code>/tardisconfig</code>",id:"tardisconfig",level:2},{value:"Setting config options",id:"setting-config-options",level:2},{value:"Config options:",id:"config-options",level:2},{value:"Artron config values",id:"artron-config-values",level:2},{value:"Reloading the config",id:"reloading-the-config",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config-commands"},"Config commands"),(0,r.kt)("h2",{id:"tardisconfig"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tardisconfig")),(0,r.kt)(s.Z,{data:"tardisconfig:\n    aliases: tconfig\n    description: Set TARDIS configuration options and world inclusion.\n    permission: tardis.admin\n    usage: /<command> [option] [value]\n    ",args:"\n    options:\n      description: List the TARDIS config options and values in chat. Where `[config section]` is one of `modules`, `storage`, `creation`, `police_box`, `travel`, `preferences`, `dynmap`, `desktop`, `circuits`, `allow`, `growth`, `arch`, `siege`, `junk`, `abandon`, `archive`, `rechargers`, `autonomous_areas`, `display`, `conversions`.\n      usage: /<command> options [config section]\n    reload:\n      description: Reload the TARDIS config from disk. Where `[config name]` is one of `achievements`, `adaptive`, `artron`, `blaster`, `blocks`, `chameleon_guis`, `condensables`, `custom_consoles`, `flat_world`, `handles`, `items`, `kits`, `monsters`, `planets`, `recipes`, `rooms`, `shop`, `signs`, `tag`, `vortex_manipulator`.\n      usage: /<command> reload [config name]\n    include:\n      description: Set whether the specified world is included in time travel destinations.\n      usage: /<command> include [world]\n    exclude:\n      description: Set whether the specified world is excluded from time travel destinations.\n      usage: /<command> exclude [world]\n    ",cmd:"tardisconfig",extra:"false",mdxType:"CommandTable"}),(0,r.kt)("h2",{id:"setting-config-options"},"Setting config options"),(0,r.kt)("p",null,"Most TARDIS plugin config options can be set ingame or via the console, and take effect immediately."),(0,r.kt)("p",null,"There are three types of config options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Boolean values e.g. true or false"),(0,r.kt)("li",{parentName:"ol"},"String values e.g. the names of things, like the TARDIS key"),(0,r.kt)("li",{parentName:"ol"},"Integer values e.g. numbers, like the cost of a room")),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tardisconfig")," command to set config options, you use the syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisconfig [config option] [value]\n")),(0,r.kt)("p",null,"For example, to set the TARDIS to never land on water you would type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisconfig land_on_water false\n")),(0,r.kt)("h2",{id:"config-options"},"Config options:"),(0,r.kt)("p",null,"The following values will be set in ",(0,r.kt)("em",{parentName:"p"},"config.yml"),":"),(0,r.kt)(o.Z,{data:"\ndebug: false # Shows or hides extra messages in the server log\nmodules:\n  weeping_angels: false # Enables/disables the TARDIS Weeping Angels module\n  vortex_manipulator: false # Enables/disables the TARDIS Vortex Manipulator module\n  dynmap: false # Enables/disables the TARDIS Dynmap module\n  chemistry: false # Enables/disables the TARDIS Chemistry module\n  shop: false # Enables/disables the TARDIS Shop module\n  sonic_blaster: false # Enables/disables the TARDIS Sonic Blaster module\n  blueprints: false # Enables/disables the TARDIS blueprint permissions module\nstorage:\n      database: sqlite # Sets the database type the plugin uses. Valid values are `sqlite` and `mysql`\n      mysql: # Only applicable if `database` is set to `mysql`, otherwise this section can be ignored\n       host: localhost # Sets the host of the mysql database, where: `localhost` = the ip address or hostname of the MySQL server (if the MySQL server is on the same server as the Spigot server, you can usually use `localhost`\n       port: 3306 # Sets the mysql server port, where: `3306` = the port on which the MySQL server is running (usually 3306)\n       database: TARDIS # Sets the name of the database to connect to, where: `TARDIS` = the name of the database where the TARDIS data will be stored\n       user: bukkit # Sets the user that connects to the mysql database\n       password: mysecurepassword # Sets the password to connect to the mysql database\n       prefix: '' # Sets the prefix added to the table names used in the mysql database. Spigot servers will generally only use one database, so to distinguish the TARDIS tables from other plugins this should probably be set to something like `tardis_`\n       use_SSL: false # Sets whether to use an SSL connection to the MySQL database\ncreation:\n    create_worlds: false # It is **NOT recommended** setting this to true! Sets whether TARDISes are created in their own separate worlds.\n    create_worlds_with_perms: false # Sets whether TARDISes are created in their own separate worlds for players with the appropriate permission \u2014 `tardis.create_world`.\n    default_world: true # Sets whether TARDISes are created in a shared world. Also required to be true to enable the Junk TARDIS and the abilty to abandon TARDISes.\n    default_world_name: TARDIS_TimeVortex # Sets the name of the default world. This is only used if `default_world` is true.\n    border_radius: 256 # Sets the distance of the WorldBorder barrier (only used if the plugin is installed on the server).\n    inventory_group: 0 # If the Multiverse-Inventories plugin is enabled on the server, you can set the group that TARDIS worlds are added to when they are created.\n    add_perms: true # Sets whether a TARDIS world is assigned permissions when the server uses a permissions plugin that has per-world configuration \u2014 see [Add permissions](/add-permissions).\n    use_clay: WOOL # Sets whether the coloured wool in TARDIS console and room schematics is switched to stained terracotta or concrete instead. Valid options are WOOL, TERRACOTTA, and CONCRETE.\n    count: 0 # Sets the maximum number of times a player can build and destroy a TARDIS. If set to `0` there is NO maximum.\n    tips_limit: 400 # Sets the number of T.I.P.S slots to use. Must be one of 400, 800, 1200 or 1600.\n    area: none # If set to a pre-defined TARDIS area, it will set that area as the only place on the server that TARDISes can be created in.\n    enable_legacy: true # Sets whether the legacy console schematics are available to build TARDIS interiors with.\n    check_for_home: true # Sets whether the TARDIS creation location is already set to another player's `home` location.\n    seed_block_crafting: true # Sets whether players can craft TARDIS seed blocks.\npolice_box:\n        default_preset: FACTORY # Sets the default preset that appears when the TARDIS is first created. See the [Chameleon Presets](presets) page for values that can be set.\n        name_tardis: false # Sets whether to put the player&rsquo;s name on the Police Box sign.\n        use_nick: false # Sets whether to use the player\u2019s nick name on the Police Box sign.\n        view_interior: false # Sets whether player\u2019s can view the TARDIS interior when opening hte exterior TARDIS door.\n        view_interior_uses_console_size: false # Sets whether the the interior view distance uses the interior console size or a deafult 16 blocks\n        materialise: true # Sets whether the TARDIS runs the materialising animation when it takes off and lands.\n        sign_colour: WHITE # Sets the colour of the text on a TARDIS sign. Must be a valid ChatColor value, see [https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)\n        rebuild_cooldown: 10000 # Sets the minimum time (in server ticks) required between TARDIS rebuilds.\n        load_shells: false # Sets whether player\u2019s can load Chameleon preset shells into the Shell room.\n        keep_chunk_force_loaded: true # Sets whether to keep the current location chunk of player\u2019s Police Boxes force loaded.\ntravel:\n        include_default_world: false # Sets whether the default world is included in time travel destinations.\n        tp_radius: 500 # Sets the maximum distance (in blocks) you can randomly time travel in the TARDIS. **Note** The actual values is about 4 times this (due to the multiplier repeater).\n        max_distance: 29999983 # Sets the maximum distance (in blocks) that can be used with the `/tardistravel` command. If the (vanilla) World Border distance is smaller this will be used instead.\n        chameleon: true # Sets whether the TARDIS police box can change its appearance to match its surroundings.\n        give_key: false # Sets whether the TARDIS key is given when changing worlds (and using a multi-world inventory plugin).\n        the_end: false # Sets whether the TARDIS is allowed to travel to The End worlds.\n        allow_end_after_visit: false # If enabled, players may only fly to The End in the TARDIS if they've already been there once without it (i.e. End Portal) **Note:** End travel must be enabled (`the_end: true`) for this to take effect.\n        nether: false # Sets whether the TARDIS is allowed to travel to Nether worlds.\n        allow_nether_after_visit: false # If enabled, players may only fly to the Nether in the TARDIS if they've already been there once without it (i.e. Nether Portal). **Note:** Nether travel must be enabled (`nether: true`) for this to take effect.\n        land_on_water: true # Sets whether the TARDIS will land on water in the Overworld.\n        timeout: 5\n        timeout_height: 135 # Sets the maximum time in seconds a random location task can take. If the task times out then the Police Box location is set at the `timeout_height` value. This prevents the plugin crashing when using skyblock type worlds.\n        random_attempts: 30 # Sets the maximum number of attempts to find a random location. This prevents the plugin crashing under certain circumstances.\n        exile: false # Sets whether the TARDIS exile feature is enabled.\n        per_world_perms: false # Sets whether players require the `tardis.travel.[world]` permission to travel to a world.\n        terminal_step: 1 # Sets the 4 step values that the TARDIS Destination Terminal GUI uses, where the steps are `10 * step` and `25 * step` etc.\n        terminal:\n            redefine: false\n            the_end: world\n            nether: world # Allows you to redefine the End and Nether buttons in the Destination Terminal to specific worlds when travel to those environments is disabled.\n        manual_flight_delay: 60 # Sets the server tick delay between having to click the repeaters in [manual flight mode](flight-modes).\n        grace_period: 10 # Sets the number of times players can use easy controls when the server is set to `hard` difficulty mode.\n        random_circuit:\n            x: 5000\n            y: 5000 # Maximum +/- number of blocks the random location search will look between in x and z directions, so default will be -5000 to 5000 in both x and z directions. If the WorldBorder plugin is installed or a vaniila world border is in use, then those settings will be used instead.\n        no_destination_malfunctions: true # Sets whether the TARDIS will malfunction if no valid random destination can be found with the current console settings.\npreferences:\n    notify_update: true # Sets whether to check for and notify opped players if there is a TARDIS plugin update.\n    language: en # Sets the language used for TARDIS message localisation. The plugin will look for a file named with this setting and the file extension _.yml_. Should be set to an [international language code](http://thenosefairy.duckdns.org/TARDIS_java_docs/me/eccentric_nz/TARDIS/enumeration/LANGUAGE.html).\n    key: GOLD_NUGGET # Sets the TARDIS key item. You can use any valid Bukkit Material ENUM. A list can be found here: [https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)\n    any_key: false # Sets whether any item can be used as the TARDIS key.\n    walk_in_tardis: true # Sets whether players can walk into the Police Box to enter the TARDIS. If set to `false`, clicking the door with the TARDIS key teleports you to the interior.\n    open_door_policy: false # Sets whether anyone can enter the TARDIS. If set to `false` (the default) only the Time Lord and their companions can enter the TARDIS.\n    use_worldguard: true # Sets whether the TARDIS interior becomes a protected WorldGuard region belonging to the player who created the TARDIS\n    respect_worldguard: build # Sets whether time travelling respects protected WorldGuard regions. Valid values are `none` \u2014 no checking is performed, and any [WorldGuard state flag](http://wiki.sk89q.com/wiki/WorldGuard/Regions/Flags), generally this will probably be `build` or `entry`.\n    respect_grief_prevention: true # Sets whether time travelling respects protected GriefPrevention claims.\n    respect_towny: nation # Sets whether time travelling respects protected Towny regions. Valid values are `none` \u2014 no checking is performed, `wilderness` \u2014 players can only land in wilderness, `town` \u2014 players can also land in a town they are a resident of, `nation` \u2014 players can land in any town that is in the same nation as their own town.\n    respect_worldborder: true\n    respect_factions: true # Sets whether time travelling respects protected regions (if players do not have rights to build in an area, they will be denied access).\n    sfx_volume: 10 # Sets the default volume of the TARDIS Resource Pack sounds. Using `10` is the same volume as the default sounds, lower values make the sounds quieter.\n    difficulty: hard # Sets how hard it is for players to use the plugin. This usually affects the TARDIS crafting recipes, whether they can use certain commands and whether TARDIS functions are controlled by circuits being installed. Valid values are `easy`, `medium` and `hard`\n    strike_lightning: true # Sets whether a TARDIS recharge point will strike lightning when recharging a TARDIS.\n    freeze_cooldown: 60 # Sets the cool down period (in seconds) between uses of the Sonic Screwdriver&rsquo;s player freeze function.\n    hads_damage: 10 # Sets the number of hits the Police Box will take before engaging HADS.\n    hads_distance: 10 # Sets the distnace in blocks the Police Box will travel when HADS is engaged.\n    malfunction: 3 # Sets the percentage chance the TARDIS will malfunction when travelling.\n    malfunction_nether: 3\n    malfunction_end: 3 # Sets the percentage chance a malfunction will deposit the TARDIS in the The End or the Nether.\n    use_default_condensables: true # Sets whether to use the plugin settings for condenser values. If you want to set your own values, set this to `false` and edit _condensables.yml_\n    no_creative_condense: false # Sets whether players can condense items in CREATIVE game mode.\n    no_enchanted_condense: false # Sets whether players can condense enchanted items.\n    heal_speed: 200 # Sets the heal speed in the Zero room. The default value of `200` means the player will gain half a heart every 200 ticks (10 seconds).\n    default_key: eleventh # Sets the default key texture.\n    default_sonic: eleventh # Sets the default sonic screwdriver texture.\n    render_entities: true # Sets whether mobs will be shown in the Rendering room.\n    nerf_pistons:\n        enabled: false # Sets whether the plugin will attempt to prevent protected TARDIS blocks from being moved by pistons.\n        only_tardis_worlds: true # Sets whether all worlds are checked for pistons moving TARDIS blocks, or only TARDIS worlds\n    spawn_random_monsters: true # Sets whether monsters will randomly spawn in the TARDIS if door is left open.\n    spawn_limit: 10 # Sets the maximum number of monsters that can randomly spawn inside a TARDIS.\n    vortex_fall: kill # Sets whether players are killed or teleported when they fall into the vortex in the TARDIS_TimeVortex world. Valid values are `kill` and `teleport`.\n    no_coords: false # Sets whether players will see the coordinates message when choosing a random destination.\n    chat_width: 55 # Sets the maximum character width of a TARDIS message in the chat window.\ndynmap:\n  update_period: 30\n  updates_per_tick: 10\ndesktop:\n      check_blocks_before_upgrade: false # Sets whether to compare the amount of block changes before allowing an upgrade.\n      block_change_percent: 25 # Sets the maximum percentage of block change compared to the original schematic.\ncircuits:\n  damage: false # Sets whether circuits get damaged after each use. Setting this to false (the default) means circuits have unlimited uses.\n  uses:\n    <circuit>: 20 # Sets the maximum number of uses a circuit has before it is vapourised. Setting this to `0` gives unlimited uses for that circuit.\nallow:\n      mob_farming: true # Sets whether players can [farm mobs](farming) when entering the TARDIS.\n      spawn_eggs: true # Sets whether the player receives mob spawn eggs when TARDIS mob farming (and there is no farm room grown).\n      emergency_npc: true # Sets whether the [Emergency Program One](emergency-program-one) feature is enabled.\n      external_gravity: false # Sets whether the [Gravity Wells](/rooms/gravity-wells) can be set up outside of the TARDIS.\n      achievements: true # Sets whether players can gain [TARDIS achievements](achievements).\n      autonomous: true # Sets whether players can use the [autonomous function](autonomous).\n      hads: true # Sets whether the TARDIS can [escape hostile](hads) actions.\n      tp_switch: true # Sets whether players can set and switch resource packs when entering and exiting the TARDIS.\n      all_blocks: false # Sets whether the chameleon circuit is allowed to use precious blocks such as GOLD and DIAMOND. This also affects whether players are allowed to change the TARDIS Key to any item \u2014 if set to `false`, then keys are restricted to the items listed under `keys:` in _blocks.yml_.\n      sfx: true # Sets whether sound effects are played in the TARDIS interior \u2014 this overrides user preferences if turned off.\n      wg_flag_set: true # Sets whether players can set the build flag (allow, deny) in their TARDIS region.\n      zero_room: false # Sets whether players can grow a Zero room. If this is set to true using the `/tardisconfig zero_room true` command, the plugin wil attempt to create the `TARDIS_Zero_Room` world if it doesn\u2019t yet exist.\n      power_down: true # Sets whether players can power down their TARDIS.\n      power_down_on_quit: false # Sets whether a player\u2019s TARDIS automatically powers down when the player leaves the server.\n      player_difficulty: true # Sets whether players can use the `/tardisprefs difficulty [easy | hard]` command to change their personal difficulty setting. See [this ticket](https://dev.bukkit.org/bukkit-plugins/tardis/tickets/689-tardis-console-modes/) for the reasoning behind it all.\n      invisibility: true # Sets whether players can use the invisibility Chameleon preset. See [Invisibility](invisibility) for more info.\n      guardians: false # Sets whether players can farm guardians when entering the TARDIS, and whether guardians will randomly spawn in the pool room if the door is left open.\n      village_travel: false # Sets whether players can use the `/tardistravel [structure|village]` command to time travel to a village or other Minecraft structure.\n      3d_doors: false # Sets whether TARDIS owners can see their door when the exterior is set to the INVISIBLE preset. They must be wearing 3D Glasses and looking at the block that the door would normally be placed on.\n      repair: true # Sets whether players can repair a damaged TARDIS interior.\n      weather_set: false # Sets whether players can use the `/tardisweather` command or the TARDIS Weather GUI.\n      force_field: 8 # If set to greater than `0`, determines whether players can activate the TARDIS force field and sets the range of the force field effect. Set to `0` to disable.\n      admin_bypass: false # Sets whether players the permission `tardis.admin` can bypass TARDIS travel location and plugin protection checks.\n      perception_filter: true # Sets whether players can use the [perception filter](perception-filter).\ngrowth:\n    gravity_max_distance: 15\n    gravity_max_velocity: 5 # Sets sets the maximum distance and velocity a gravity well can be set to.\n    rooms_require_blocks: false # Sets whether growing a room requires the player to condense the materials required to grow the room in the TARDIS condenser.\n    rooms_condenser_percent: 100 # Sets the percentage of the actual blocks that a player needs to condense if `rooms_require_blocks: true`\n    return_room_seed: true # Sets whether the room seed block is returned to the player when they jettison the room.\n    room_speed: 4 # Sets the speed (in blocks per second) at which rooms are grown. Maximum speed is `20` which is one block per tick.\n    delay_factor: 1 # Sets the delay between growing multiple rooms.\n    ars_limit: 1 # Sets the maximum number of rooms that can be reconfigured at a time.\narch:\n  enabled: true\n  min_time: 20\n  switch_inventory: true\n  clear_inv_on_death: false\nsiege:\n  enabled: true # Sets whether players can engage Siege mode\n  breeding: 0 # If this is set higher than 0, this is the percentage chance that twins will be born when animals breed\n  growth: 0 # If this is set higher than 0, this is the percentage chance that a plant will sprout an extra step when it grows\n  butcher: false # Sets whether any hostile mobs inside the TARDIS will be butchered when Siege mode is engaged\n  creeper: false # Sets whether (when the TARDIS runs out of energy) the Artron creeper will be sacrificed to give the TARDIS an energy boost\n  healing: false # Sets whether players inside the TARDIS receive a healing pick-me-up\n  texture: false # Sets whether the desktop theme is changed when Siege mode is engaged\njunk:\n  enabled: true # Sets whether the Junk TARDIS is available on the server \u2014 **NOTE:** The Junk TARDIS will be disabled if `creation.default_world` is `false`\n  return: -1 # Sets the time in seconds that the Junk TARDIS will automatically return to its \u2018home\u2019 location. If this is less than `0` and the Junk TARDIS will not automatically return home.\n  particles: true # Sets whether the Junk TARDIS displays a particle effect when travelling\nabandon:\n  enabled: true\n  reduce_count: true\narchive:\n  enabled: true\n  limit: 3\ndisplay:\n  all: '&6X&7%X% &6Y&7%Y% &6Z&7%Z% &6F&7%FACING% (%FACING_XZ%) %TARGET_BLOCK%'\n",mdxType:"ConfigTable"}),(0,r.kt)("h2",{id:"artron-config-values"},"Artron config values"),(0,r.kt)("p",null,"The following values will be set in ",(0,r.kt)("em",{parentName:"p"},"artron.yml"),":"),(0,r.kt)(o.Z,{data:"\nplayer: 25 # Sets the amount of time lord energy a player absorbs from the time vortex each time they time travel.\nrandom: 75\ntravel: 100\ncomehere: 400\nhide: 500\nautonomous: 100 # Sets the amount of energy the different forms of time travel consume. The options are: random locations, any `/tardistravel`, `/tardis comehere`, `/tardis hide` commands, and autonomous homing.\nnether_min: 4250\nthe_end_min: 5500 # Sets the minimum amount of energy the TARDIS Artron Energy Capacitor must have before players can time travel to the Nether or The End.\nrecharge_distance: 20 # Sets the maximum distance in blocks, a Police Box can be from a recharge beacon in order to start recharging.\nlightning_recharge: 300 # Sets the amount of energy TARDISes receive if they are within the `recharge_distance` of a natural lightning strike.\ncreeper_recharge: 150 # Sets the amount of energy players receive if they kill a charged creeper.\nfull_charge: 5000 # Sets the amount of energy a fully charged TARDIS Artron Energy Capacitor holds.\nfull_charge_item: NETHER_STAR # Sets the item that fully charges the Energy Capacitor when you right-click the Artron button with it.\nsiege_transfer: 10 # Sets the minimum amount of Time Lord energy needed to transfer to the Siege block. This is a percentage of `full_charge`. Default is 10% (500).\nsiege_deplete: 100 # Sets the amount of energy Siege mode uses every cycle. Default is `100`\nsiege_creeper: 150 # Sets the amount of energy gained when the Artron Creeper is sacrificed. The default is `150`. Only relevant if the main config option `siege.creeper` is set to true.\nsiege_ticks: 1500 # Sets the amount of time in server ticks that the energy depletion / siege mode healing cycle takes. The default is `1500` (or every 1.25 minutes)\nstandby: 5 # Sets how much energy is used per cycle when the TARDIS is in standby power mode.\nstandby_time: 6000 # Sets how often energy is removed when the TARDIS is in standby mode. If `standby_time` is set to `0`, then no energy is removed.\njettison: 75 # Sets the percentage of energy the TARDIS gets back when a room is jettisoned.\njettison_seed: TNT # Sets the block required to manually jettison a room.\nrenderer: 250 # Sets the cost to use the Renderer room.\nzero: 250 # Sets the cost to transmat to the TARDIS Zero room.\nupgrades:\n    ancient: 5000\n    ars: 5000\n    bigger: 7500\n    budget: 5000\n    cave: 5000\n    copper: 20000\n    coral: 8000\n    delta: 7500\n    deluxe: 10000\n    division: 7500\n    eleventh: 10000\n    ender: 5000\n    factory: 7500\n    fugitive: 7500\n    hospital: 5000\n    master: 10000\n    mechanical: 7500\n    original: 5000\n    plank: 5000\n    pyramid: 5000\n    redstone: 7500\n    rotor: 5000\n    steampunk: 5000\n    thirteenth: 8000\n    tom: 5000\n    twelfth: 7500\n    war: 5000\n    weathered: 5000\n    custom: 10000\n    legacy_deluxe: 10000\n    legacy_redstone: 8000\n    legacy_bigger: 7500\n    legacy_eleventh: 10000 # Sets the energy cost to upgrade / crossgrade to a different console when using the Desktop Theme changer.\n    archive:\n        tall: 10000\n        small: 5000\n        medium: 7500 # Sets the energy cost to use different archive console sizes when using the Desktop Theme changer.\n    template:\n        medium: 2500\n        small: 1666\n        tall: 3333 # Sets the energy cost to use a console template when using the Desktop Theme changer.\njust_wall_floor: 50 # If a player is just changing the walls and floor, then `just_wall_floor` sets the percentage the cost is reduced.\nartron_furnace:\n    # Sets the options for Artron Furnaces. See further explanation on the [Artron Furnace](artron-furnace) page.\n    cook_time: 0.5 # Sets the cook time for items smelted with Artron Storage Cells \u2014 `0.5` is half the normal time, `2.0` would be twice normal speed (longer), `1.0` = normal cook time (same as coal)\n    burn_time: 0.5 # Sets the length of time an Artron Storage Cell will burn for \u2014 as above fractions (`0.5`) will give shorter life to the cells, > 1 will extend the burn time, `1.0` = normal burn time (same as coal)\n    burn_limit: 100000 # Sets the maximum amount of burn time a fully charged Artron Storage Cell can have.\n    particle: true # Sets whether the Artron Furnace block displays particles.\nsonic_generator:\n    standard: 10\n    bio: 10\n    diamond: 10\n    emerald: 10\n    redstone: 10\n    painter: 10\n    ignite: 10\n    arrow: 10\n    knockback: 10\n    brush: 10 # Sets the energy costs for the [sonic generator](sonic-generator) as a percentage of the `full_charge` option.\nshell: 500 # Sets the cost to use the Shell room constructor.\ncustard_cream: 25 # Sets the cost to dispense a custard cream.\nbackdoor: 100 # Sets the cost to use the TARDIS back door.\n",mdxType:"ConfigTable"}),(0,r.kt)("h2",{id:"reloading-the-config"},"Reloading the config"),(0,r.kt)("p",null,"If you have made changes to the config file by manually editing it, you should use the reload command to reload the changes. Type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tardisconfig reload\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do not use the server ",(0,r.kt)("inlineCode",{parentName:"p"},"/reload")," command or the manual changes you have made will be overwritten when the TARDIS config is saved when it is disabled.")))}p.isMDXComponent=!0}}]);