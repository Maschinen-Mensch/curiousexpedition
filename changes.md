# 1.3.10

* Added Spanish, Polish and Turkish translations
* Performance and Rendering
  * If the game detects that it has no GPU, scaling will default to off
  * Added support for 4K UHD Resolution (3840 x 2160): 1:6 pixel ratio
  * Can now toggle Stretching setting independently of Scaling
  * Added warning that scaling is expensive
  * Improved rendering performance
  * Improved loading times
* Bugfixes
  * Fixed issues with mod language loading and improved logging
  * Fix for Forsaken shrine aftermaths not removing angry natives
  * Fixed village funeral event not allowing extra options when you have a missionary in the party
  * Fix for mousewheel not working on mac
  * Fix for treasure maps not being rendered correctly after loading a savegame

# 1.3.9 (May 25th 2018)

* Content
  * Dendrophobia now adds a "Fear" status when walking in wood or jungle tiles without machetes. Affected characters lose -1 loyalty if staying inside for too long.
  * Added new Game Over tips
* Modding
  * Items can now add statuses to the explorer party when in the inventory with the "addStatus" keyword
  * Added 'Show Flags Info' to Modding Dev Tools, which displays all flags on tiles and characters when enabled
  * Added error/warning report for mods you've created
  * MapSounds (for Sprawls, etc) are now specified in config rather than hardcoded (so they can be modded)
  * When mods get reloaded, the loading bar is now shown
  * Added "wait" keyword that allows for arbitrary waiting to happen (similar to rest but without sanity gain & with support for custom waiting text)
  * Added "combatMusic" property to zones and combat events that specifies music to use instead of the default combat music
  * Can now use mousewheel to scroll list of mods
  * Mods now support localised descriptions
  * Mods can specify sound files without needing an additional / at the beginning
  * Sound files specified by mods are now checked to see if they exist
  * If mods are disabled, clicking a mod's checkbox will enable mods and the clicked mod
  * Images are correctly restored and reloaded when mods are enabled/disabled
  * The MaxStack property of Items can now be a bonus
* Debug Bar
  * When selecting an entity, that entity's JSON structure is printed to the log
* Bugfixes
  * Mangoes now don't survive the trip back to London
  * Fixed issue where geysirs could get removed by river tiles
  * Statuses that get removed by dayEvents don't get updated on the day they're removed
  * Character perks that have no description will display their bonuses instead in the gallery
  * Items tagged with autoremove aren't removed before very first expedition
  * Pack animals don't display crates and saddle together
  * Enemy attacks work correctly for patterns that contain bonuses
  * Fix for "Leave" button not being immediately responsive after using teleport cave (now shows the time spent exploring).
  * Can't use items while character info box is being shown (as they can overlap but the status box will be on top)
  * Can no longer lose items marked with losable:false
  * Fix for tile outlines flickering or not rendering between regions
  * Fix for map containing black areas when playing a small vertical map
  * Fix for status bonus descriptions not line-wrapping correctly
  * Fix for abomination feeding intervals becoming ever more frequent after the first feeding
  * Added some missing aftermath sounds
  * Fixed villages spawning NPCs even if they are abandoned
  * Fixed abominations always facing to the left in combat
  * Improved loading times of web version
  * Fixed news display having extra spaces in some languages
  * Fixed startup freeze that happens on linux sometimes
  * Fixed chinese-language sprites not being used
  * Fix for sounds always playing at full volume on safari
  * Can now lock custom explorers again by entering their code in the settings menu once more
  * Inuit village sprites are now centered correctly on their tile
  * Corrupted river tiles have +river flag set (so the ship lands properly)
  * Fixed issue where locations would use incorrect sprite after reloading savegame in some biomes

# 1.3.8 (April 19th, 2018)

* Content
  * Forsaken villages spawn Abominations
  * Adjusted cultist coca stash
  * Adjusted Jungle Rot icon
  * The New Game gallery now can have multiple pages of explorers if more than 20 are unlocked
    * Can now have multiple custom explorers unlocked at once
    * The random character option is now the first one
* Modding
  * Tile Border Sprites can now be modded, just add a borderSprites section to your tile (full documentation coming soon)
  * Improved warnings that are printed to the log when mod content contains errors
  * Fixed issues with the replace operator not always working
  * Game now longer creates a mods/mods folder
  * Fixed issues with mod localisation files
  * Loading mod data when starting a new game only happens if necessary, so there's not a large hitch by default
  * The small portrait image id will only have a file extension appended if necessary
* Debug Bar
  * Expedition maps are now generated with using a seed.
    * While hovering over the "Test Game" button in the debug bar with your mouse, type to enter the string that will be used to generate the Test Game
    * A map generated with the same seed and parameters (Pocket, Difficulty, Expedition number etc) will always generate the same map layout
    * When starting a game, the seed will be printed to the log. This can help with reporting bugs.
  * Added a "God" toggle to fights: when active, your party cannot be harmed
  * Added a "Win" button to fights: when clicked, you kill all enemies
  * When spawning a tile, if that can't be spawned at the player location it will be spawned one tile north (instead of nothing happening)
  * Reloading mods now properly reloads images
  * Can now start a Test Game using a pocket that doesn't contain a goal (a goal will be spawned)
* Bugfixes
  * Steam Achievements and Workshop integration now works correctly on Mac (the overlay doesn't display though)
  * Fix for game not respecting the OS scaling setting
  * Fixed scaling changes not taking effect immediately
  * Fixed debug bar not rendering correctly at some scaling settings  
  * Fixed issue where small white dots would sometimes appear on the landscape
  * Fixed issues with tiles missing borders along the region borders
  * Fixed issues with tile borders still rendering even when tiles have been consumed by the void
  * Fixed Bug where forsaken Villages sometimes fire non-forsaken events
  * Fixed superstitious animals
  * Mission now checks if trek is full before offering to recruit cultist after cultist takeover
  * Fixed crash when entering item screen with mods that add items enabled
  * Fix for being stuck in a location if a mod has set the leave event to be invalid
  * Fix for the game not loading if an image is referenced by multiple sprites
  * Fix for compass not displaying correctly after loading a saved expedition
  * Compass is no longer 100% in the first expedition (unless playing on Easy)

# 1.3.7 (April 5th, 2018)

* Content
  * Added 3 new tome pages
  * Added triceratops
* Bugfixes
  * Fixed issues with uploading new mods
  * Fixed cloud sync between different OS
  * Moved Linux save game path from ~/* to ~/.config/*
  * Fixed some dice showing wrong number of faces
  * Fixed some typos

# 1.3.6 (March 7th, 2018)

* Reworked world map to show numbers next to locations. This makes the display more readable and easier extendable for modders
* Tuning
  * Improved friendly raptor health and damage
  * Tuned dynamite attacks; reduced damage and increased self damage
  * Reduced altar requirements slightly
* Achievements
  * Achievements Good Heart, Fame without Fortune, Trippy Trip, No new friends now require to finish the game in the top 3 to unlock
  * Fixed treasure achievement was exploitable by trading treasure back and forth
* Modding
  * Added support for extending any entity property, regardless of wether it was used in the original content or not)
  * Added procedural tribes to debug entity list
  * Added missing localization strings for modding screen
  * Support for manually specifying steam ID for mods
* Bugfixes
  * Fixed cmd click on OSX acting as right click
  * Fixed lots of chat lines not triggering correctly anymore
  * Fixed corrupted mountain could not be blown up with dynamite
  * Fixed various typos

# 1.3.5 (February 6th, 2018)

* Changed Lovecraft unlock condition to using Necronomicon instead of just finding it
* On the world map extra worlds and unvisited worlds were shown in gold color. Now only extra worlds are shown in gold color. Unvisited worlds are marked with the fame badge, making it easier to distinguish between the two.
* Bugfixes
  * Fixed golden pyramid not spawning in some special biomes
  * Fixed not being able to explore golden pyramid in some special biomes
  * Fixed broken names of special worlds on world map
  * Fixed Linux crash on startup
* Modding
  * Added support for fallback entries in build lists

# 1.3.4 (January 30th, 2018)

* Fixed green mushroom not giving sanity boost for shamans
* Fixed stuck in celebration screen when no medals left
* Removed report button as we are reworking them
* Fixed some achievements not triggering if they were accomplished before the achievement update
* Fixed performance issues on some machines
* Mod Tools
  * Fixed not being able to update steam mods due to bad cache
  * Fixed game not loading when missing images, instead a proper error message will be printed
  * After refreshing all mods should be enabled again
  * Remember debug choices in main menu debug bar
  * Improved colors in the debug bar
  * Added clear button to log viewer
  * Removed some debug flags and set them to always be automatically enabled
  * Added "Event Checks" check box to log viewer, allowing to see very detailed event computation in the log and understand why exactly a event is failing or not
  * Print log output to tce-log.txt file as well

# 1.3.3 (January 11th, 2018)

* Modding Features
  * Added "reload mods" to in-game debug bar, allowing to adapt script and play the change without having to restart the game
  * Added support for reqXP and reqMapScore
  * Added support for specifying custom loyalty for characters
  * Modding recognized as disabled when all mods have been disabled manually
  * Added debug button N for enabling/disabling tile borders for debugging
  * Made parsing of mods more robust
* Bugfixes
  * Fixed overriding image slots in mods
  * Fixed support for mods on OSX
  * Fixed stunned dice in combat were never reset
  * Fixed debug text showing up in game
  * Steam: Fixed unsubbing mod did not remove it from game
  * Steam: Fixed redownloading previously subscribed mods
  * Steam: Fixed mods being stored in wrong folder

# 1.3.2 (January 4th, 2018)

* Made reset profile less likely to be hit accidentely
* Bugfixes
  * Fixed altar broke when sacrificing certain items
  * Fixed window not covering whole game area
  * Fixed showing item count on actions with required items
  * Fixed unlocking characters
  * Fixed issues with steam achievement syncing
  * Reduced target count for explorer-collect achievement
* Modding
  * Added refresh button to modding screen which allows to reload mods without leaving screen
  * Remember entity history for in-game debug bar
  * Add bonus syntax support for XP, compass score, karma
  * Print syntax parsing errors for mods in debug console
  * Added a warnings/error counter to the show-log button in the debug bar (gets reset on every mod refresh)
  * Fixed upload button
  * Fixed corrupted game state after deleting mods

# 1.3.1 (January 2nd, 2018)

* Modding improvements
  * Added support for requirements for perks in the celebration screen. Possible use cases: only offering some perks for some explorers, having some perks as prequisite for other perks (e.g. level 1, level 2, level 3 perks), offering perks depending on visited terrain types, having a curse disallows choosing a new perk for one expedition, etc..
  * Added support for adding custom character buttons (in the same style as the promote or mount button). They can have their own requirements and can trigger a custom event when clicked. A new example mod slapFace showing how to use this can be found on our githug page https://github.com/Maschinen-Mensch/curiousexpedition/tree/master/mods
  * Added a new log viewer which is more stream lined than the previous version (more work to be done here). There is a new "Show Log" button on the modding screen to open it and also on the in-game debug bar. Also game events should now be contributed to the correct mod making it easier to debug things.
  * Fixed modding feature check only accounted for the first new entity type instead of counting all of them
  * Fixed mod version parsing was not working when the number was not written in quotes. Also reduced the amount of numbers designating the version to just two (A.B) instead of (A.B.C.D).
  * Fixed parsing mods without imgData breaking game graphics
  * Fixed importing files which had a single entry instead of a array
  * Fixed invalid character references crashing the game (should just be ignored now)
  * If mod does not designate a defaultLang property, 'English' is assumed
  * Added support for triggering chat lines from the entity search bar
  * Added support for gender-specific grammar in chat lines
  * Removed mod ID from info screen (not relevant to most users)
  * Made sure that delayedEvent is in the game scripts for events that may interrupt player movement. Events being triggered via delayedEvent show a diary alert first instead of opening up the diary right away. This mode should be used for any text events that are triggered during tripEvents or dayEvents. Maybe we'll come up with a way to detect this automatically, but this isn't trivial, so for now this has be designated manually.
  * Marked sp-ee-base as abstract so they can't be spawned directly into the game
  * Fixed color slots not being recognized correctly
  * Restricted shown mod name lengths on mod select buttons
  * Renamed blocksHealthRegen to blockHealthRegen for consistency
  * Added blockLevelUp property for temporarily blocking promoting characters via a status
* Game Bugfixes
  * Fixed underground tunnel caves not working properly when revisiting
  * Fixed polyglot perk not working properly
  * Fixed villages having empty inventory
  * Fixed sprawl power not being stored correctly in savegame
  * Fixed legacy savegames not loadable anymore
  * Fixed some localization issues on the modding screen (more work to do)
  * Fixed localization on game over screen
* Other changes
  * Cosmic Indifference perk should now also working if there are other human trek members. Raised the required sanity to use Necronomicon without burning it to 20
  * Corrupted sprawl should no longer kill zones

# 1.3.0 (December 20th, 2017) "Modding & Achievements!"

* Modding!
  * We have a new modding menu where you can select any amount of mods you want to run in your game
  * Steam Workshop support. You can subscribe to mods on steam and they will get automatically downloaded into your game. You can also upload new mods directly from the game and see the current mod ratings. Steam is not required for mods though
  * No coding required! We have a simple text format which allows to add any new content. These are the same tools that we  used during development. Add items, characters, enemies, dice, statuses, events, worlds and much more. We went through all our scripts and made sure that they have nice entry points for being moddable.
  * We made all of our text and image content open source. You can see it at [github](https://github.com/Maschinen-Mensch/curiousexpedition) and use it as inspiration for your own mods or games  
  * Access lots of ingame debugging tools which allow you to spawn any entity or run any event on the fly. We actually improved the dev tools so much beyond of what we used during development that we are bit jealous of you now (it's fine though)
  * We're shipping the game with multiple example mods (including the t-rex, scientific assistant and yakul mods)
  * We've prepared extensive wiki documentation and tutorials for you to check out at [our wiki](http://curious-expedition.wikia.com/wiki/Modding:Home). If you have more questions also please join our [discord server](https://discord.gg/maschinen-mensch) and chat with us and other modders directly
  * We created a free extension for the free Visual Studio Code text editor. Go to [their homepage](https://code.visualstudio.com/) to download the editor and enter TCE Script in the extension settings to download our plugin. It will give you proper syntax highlighting and search functionality making working with the script files much more convenient.
  * This is just the start of our modding tools. We're looking forward to your feedback and will add more functionality to support your ideas.
* Achievements!
  * We added over 60 new cool achievements to the game (some of them are secret)
  * There is a new section in the hall of fame allowing you to see all the achievements and your progress
  * These achievements are synched to steam achievements, which you can show off on your steam profile. Steam is not required for achievements though
  * Almost all our achievements track their progress separately for each difficulty level, so once you've mastered easy or medium difficulty, you can try your luck again on a harder difficulty
  * For now achievements are disabled when mods are enabled
* Main Menu
  * New background graphics
  * Added a news section allowing you to read about development news from within the game
* Nicer UI elements (checkboxes and exit buttons)
* Added animated campfire to several event screens
* Added new secret explorers
* Added new sound effects for some aftermath events
* English text will be shown as fallback if no localized string is available
* Tuning
  * Lone survivor perk fills up full sanity bar when triggered
  * Made climbing gear slightly stronger and climber perk slightly weaker
  * Increased ship water refill to 20 units
  * Angry native zones can never become unaggroed now (unless they are sleeping)
  * Restricted most quests to appear before final expedition
  * Missionary quest is now automatically resolved when entering the village
  * Remove local curses when stepping through portals
  * Corruption sprawls will no longer kill enemies
  * Tesla gun now benefits from gun expert perk
  * No random fires can happen when packing a camp up anymore. (Pyromaniacs still can lay a fire though)
* Bugfixes
  * Fixed multiple bugs potentially causing being stuck in tutorial
  * Fixed flood curse following you beyond expedition end
  * Fixed ship getting destroyed
  * Fixed rare crash when having a empty slot in inventory
  * Konrad quest can now be completed even after leaving the village when first encountering him.
  * Freeing slots in the hot air balloon should now work more intuitively
  * Fixed exploit that allowed to return more items than normally allowed with the hot air balloon
  * Fixed issues with path finding in dog sledge
  * Improved camera behavior when panning to locations
  * Removed ability to dismiss character while a pending diary event is already waiting
  * Mount button is now greyed out when already mounted
  * Fixed mounted status not stored in savegames
  * Fixed issues with native visit event
  * Fixed event flow after fighting with giant spiders
  * Fixed shaman perk not working on all mushrooms
  * Fixed combat cursor picks new enemy when old target died
  * Fixed family amulet event line
  * Fixed wrong button help text on scale 3 setting
  * Fixed unlocalized texts in game over screen
  * Fixed being able to stop village spawn via mini puppets
  * Fixed failed idol quest was not handled correctly
  * Fixed vulture night event showing up even though player had no ammo
  * Fixed musician quest not always resolving properly
  * Fixed special friend event flow
  * Fixed Olivia not having a crystall ball at game start
  * Fixed same piece of meat being cooked by multiple cooks at the same time
  * Always show diary alert first before interrupting player action during travel
  * Fixed enemies killed by a debuff now don't supply dice in the next round anymore
  * Fixed window size issues
  * Fixed unusable items having infoboxes explaining how to use them
  * Fixed large inventories overlapping Flee or Roll button during combat
  * Fixed double epilogue caused by obsidian mirror
  * Fixed mini maps sometimes going blank or regenerating or crashing the game
  * Fixed some places being unreachable after world generation
  * Fixed parts of golden pyramids being missing sometimes
  * Fixed crash bug caused by (de)buffed characters entering combat
  * Fixed crash bug in tutorial caused by no place to spawn the ship being found
  * Fixed charismatic perk only working once
  * Fixed weird duplicated actions in queen conflict event
  * Fixed problem where two events could trigger at once
  
# 1.2.6 (October 19th, 2017)

* Translations
  * Supporting new crowdin.com format for languages
  * Added Korean translation
  * Improved Italian translation
  * Improved French translation
* All enemies reachable within 2 tiles can now consistently be attacked (before that number would be between 1 and 3)
* Highlight map location you are interacting with. Helps with knowing which of two enemies you are attacking for example
* Added new treasure type (Golden Beauty)
* Going to windowed mode with different scales now sets appropriate minimum window sizes
* Savegames are saved in two steps now, making sure they don't get corrupted if something goes wrong during the save process (e.g. game is force quit via OS)
* Add option to increase ranking screen animation by clicking
* Tuning
  * Shaman hut charges less for healing infections and injuries
  * Hallucination status generates hallucinations more aggressively now
  * Healer perk is only usable by Feilong
* Bugfixes
  * Fixed sometime travel via double clicking stopped working
  * Fixed loyalty was not properly restored from savegame
  * Fixed missing help text for barter bar
  * Fixed hallucinations status should disappear after expeditions
  * Fixed Geysir water never being replaced by shallow water
  * Fixed animals becoming paranoid when consuming red mushrooms
  * Fixed being stuck in sledge when there is no path
  * Fixed hovering over treasure maps crashing game
  * Fixed savegame not properly deleted on game
  * Fixed Allison Otting not being able to paint
  * Fixed large portrait being used, even though small one is available
  * Fixed translation keywords being replaced incorrectly
  * Fixed tile borders being drawn incorrectly
  * Fixed problems with zooming using keyboard buttons
  * Fixed issues with savegames in write-protected folders

# 1.2.5 (May 15th, 2017)

* Certain disasters now scale up depending on expedition number
* Expedition is auto-saved every couple of minutes and when shutting down game
* Bugfixes
  * Using portal tome page on top of ship should not replace ship anymore
  * Entering portals does not reset golden pyramid discovery state anymore
  * Entering portals does not reset compass progress anymore
  * Forsaken villages don't spawn angry villagers anymore
  * Snarfrattle was not attackable sometimes
  * Location hints are not drawn on top of water or chasms anymore
  * Fixed wrong page title when sharing report to twitter
  * Fixed crash when pressing keys during loading bar
  * Fixed graphical glitches when entering portal world
  * Don't show tree climb event in arctic worlds
  * Fixed forsaken disaster showing wrong text in shrine
  * Fixed harbor hunter becoming party member and crashing game
  * Fixed wrong "decreased loyalty" notification on max loyalty
  * Fixed rare crash when switching world  
  * Fixed rare crash on game over after visiting portal world
  * Fixed rare bug that closed combats early
  * Fixed being able to use item during diary alert
  * Fixed being able to use camp site during build-up
  * Fixed multiple events happening at same time

# 1.2.4 (April 21st, 2017)

* French!
  * We now added the first version of the French fan translation
  
* Bugfixes
  * Fixed crash when hovering over wife NPC character
  * Fixed crash when starting new game after exiting previous game via "save&exit" while an event alert was shown
  * Fixed being able to add NPC hunter to party and crashing game
  * Fixed Chinese names not properly reproduced in savegames
  * Fixed missing spider combat in world 1
  * Fixed broken event flow when not enough funds and having renounced status

# 1.2.3 (April 19th, 2017)

* Bugfixes
  * Added a tab button allowing to flip through very large inventories. This also fixes the issue with unreachable buttons during bartering.
  * Fixed returning with Necronomicon from warp world did not remove the return-home status
  * Fixed some typos

# 1.2.2 (April 17th, 2017)

* Chinese update!
  * Added new explorer Huang Feihong with special attacks
  * Added Traditional and Simplified Chinese language translation (Thanks so much to Project Gutenberg)
* Tuning
  * Increased health bonus for regeneration blessing
  * Increased level health bonus for Marie Curie
* Bugfixes
  * Fixed overlong text in epilogue screen
  * Fixed signature rifle was not using correct die
  * Removed pink pixel on Amundsen statue
  * Don't draw travel path when hovering mouse over action bar
  * Added some missing lines to German translation

# 1.2.1 (March 30th, 2017)

* Bugfixes
  * Fixed ship arrival in arctic regions was not always shown
  * Better support for legacy savegame files
  * Added missing strings to language tables
  * More characters are revivable through altars now
  * Fixed desert events having wrong background image

# 1.2.0 (March 6th, 2017) "Arctic Expanse"

* Arctic
  * New biomes and fieldtypes
    * Packice
    * Deepsnow
    * Frozen plains
    * Crystal forest
    * Plateau
    * Pack ice (will be destroyed after your trek has moved over them)
  * New Locations
    * The polar station. Buy tickets to rest or travel with a dog sledge to nearby stations. This should be your prefered long-range transportation in artic regions.
    * Arctic stock pile
    * Arctic versions of existing locations
  * New enemies
    * Sabertooth tiger
    * Polar Bear
    * Arctic wolfs
    * Giant Walrus
  * New party members
    * Arctic natives
    * Mountain trooper
    * Huskies
    * Mountable polar bear
    * Very rare encounter with a secret special new trek member
  * New music tracks
  * New arctic quest: Arctic claim
  * It may randomly snow in arctic locations
* New world map
  * New map showing the arctic regions
  * The site selection will now generate locations that you haven't been at
  * Extra points for going to new biomes (new world bonus)
  * Offer 2 options right from the start
  * Offer all regular biome types already from expedition 2 onwards
* Corrupted lands: a whole new secret and unique region
* 50+ new events: 
  * New insanity events
  * New village events
  * New friendship events
  * New biome specific events
* New ailments / sicknesses
  * Hallucinations
  * Rabies
  * Sprained ankle
  * Hearing loss
  * Viewing loss
  * Scurvy
* New disasters / aftermaths from looting shrines:
  * Poison gas
  * Spreading Ice
  * Forsaken world
* New items
  * Beauty treasure
  * Obsidian mirror
  * Telescope 
  * Arctic Food Muktuk
  * Sextant
  * Signature pistol/shotgun/rifle
  * Yellow mushroom
  * Snowshoe travel item
  * Tomepage: Portal
  * Tomepage: Eagle scout
  * Blood crown
  * Wadjet eye
* New perks
  * Tactical Mastery
  * Gun expert 
* Increased readability of game / UI improvements
  * Added Loyalty Bar
  * Instead of showing symptoms, sicknesses are shown directly now
  * Show bar on buffs representing days or legs
  * Added lots of bonus info to popups
  * Show health regen rate/info
  * Show infection chance (changed to trip based)
  * Added status for zero slot units
  * Show insanity event risk chance on mouse
  * Increased contrast of travel path for better readability
  * Added explicit perks for standing bonus
  * Being followed by natives is now visibly shown as a status
* New sounds
  * Added item sounds
  * Added travel item sounds
  * Added looping, location based sounds for disasters
* World generation
  * Support more orientations (vertical worlds)
  * More reliable tuning of locations, more variety
  * Added more visual clues what kind of location to find
  * Special markers for special regions on worldmap
* Enemy zones improvements
  * Allow multiple enemy zones to overlap each other
  * Animate enemy zone movement
* Misc
  * Add water items to most settlements
  * Improved particles all over the place
  * Recruited characters may now randomy have improved start loyalty
  * Altars now revive characters. Removed old item exchange system. Re-added karma bar
  * Show wildlife danger already before looting
  * Improved hill and plateu movement cost calculation. Moving ontop a hill or plateau will cost a lot of sanity. Once on top of it, movement costs will be low. Initial investement to move upwards. 
  * Unlock Huizinga by default (support different starting play style)
  * Each teleported world has their own standing bar now
  * Surprise combats might be triggered from events
  * Support custom health increase per explorer
  * Infections now appear on leg basis instead of day basis so that they dont interrupt moves anymore
  * Added taunt combat skill
  * Added several new custom explorers
  * Mini sprites will now animate on top of hills
  * Villages can no longer be blown up with dyanmite
* Languages:
  * Improved text support for non-latin languages
  * Automatically update credits
* Bugfixes
  * Fixed tutorial issues
  * Fixed lots of typos
  * Added missing strings to language table

# 1.1.3 (January 29th, 2017)

* Improved support for Chinese language version
* Updated backend server address for crash/stats reports
* Fixed typos

# 1.1.2 (November 30th, 2016)

* Support for translating explorer names
* Bugfixes
  * Fixed some sites exiting event flow instead of returning to morning event after camping
  * Fixed crash when entering combat with zero health characters
  * Fixed item info box showing item "cost" instead of "value"
  * Fixed old save game states not properly cleared sometimes
  * Fixed some event text typos
  * German: Fixed crash in one positive night event

# 1.1.1 (October 31st, 2016)

* Bugfixes
  * Fixed travel cost/days shown in German
  * Fixed OSX version black screen on startup
  * Fixed characters with hybrid gender crashing game in final screen
  * Fixed crash after restoring game
  * Fixed crash when finishing expedition
  * Improved browser compatibility for web version
* German
  * Improved some texts based on feedback
  * Mount/Dismount buttons were not translated

# 1.1 (October 27th, 2016)

* Support for translations
  * Added full German translation of the game
  * You can add more translations by following the intructions in the langs folder
  * You may use http://forums.maschinen-mensch.com/viewforum.php?f=9 to announce new translations
* Performance
  * There should be considerably less frame drops while traveling over the map now.
  * Also better performance in general.
* Added various new custom explorers
* Tuning
  * Polyglot perk removes standing cost for resting in villages, but it does not give sanity bonus anymore
  * Increased chance of negative loyalty impact when ignoring joke night event
  * Tome page of random teleportation now only teleports to reachable areas
* Bugfixes
  * Volcano shrine aftermath effect would most often not trigger properly
  * Fixed everybody becoming angry during sexist night event
  * Fixed being able to trigger invalid tutorial actions using keyboard shortcuts
  * Added proper icon for purple mushrooms
  * Fixed gun kill night event was triggered even when player had no gun in inventory
  * Fixed villages only having male inhabitants
  * Simplified savegame creation, will not try to use the SavedGames folder in windows anymore and simply prefer the Documents folder instead
  * Fixed exploit of being able to get negative travel costs
  * Player progress was only stored when starting a new map, but not when finishing a map, resulting in potential progress loss of found item stats
  * Triumph music volume is now controlled by music volume slider instead of sound volume slider
  * Fixed various typos

# 1.0 (September 2nd, 2016)

* Added newly rewritten event texts by Luke Openshaw
* New Tome pages
  * Homebound
  * Extended Vision
* Bugfixes
  * Added fame back to idol
  * Stone Circles also reveals missions and not just villages
  * Fixed music tracks not stopping and overlapping each other
  * Fixed music restarting repeatedely
  * Fixed weird glitch sound in music
  * Fixed missionaries losing spiritual solidarity perk
  * Fixed occult vision perk
  * Fixed missionary getting angry when you say that evolution is wrong
  * Fixed not being able to enter golden pyramid when being alone
  * Fixed space key sending trek to wrong location  
  * Fixed inconsistent number of funds shown in harbor text
  * Fixed rare case of missing native character portrait
  * Fixed not being able to trade in village when low standing
  * Fixed events with dropped items should not appear if no items in inventory

# Alpha 30.2 (August 18th, 2016)

* Items  
  * Removed fame from some items. Treasures, trophies and some special items like mummies keep their fame value. Tome pages, mushrooms and other otherwise useful items are not fame items anymore.
  * Show item value and fame/funds in info box for items
  * Also show special local prices variations in info box
  * Removed resell factor penalty for most items for now 
  * Added the option to collect water at various places
  * Added a travel icon for water
  * Villages now always have jewels to offer when bartering
  * Increased duration of horn flute effect
  * Pendulums will not cosume weight anymore
  * Weatherballoon still gives +1 map score, but also reveals the closest location now
  * Set butterfly collection to unlosable
  * Added purple mushrooms
* World variation
  * Retuned all worlds to offer more biome variety
  * All the expeditions still have one main biome, but you might now also encounter single regions of different biomes (e.g. desert next to jungle)
  * Retuned the spawning of settlements and natural camp sites. There basically is now always one per region.
  * In grassland worlds there was always a village near the ship arrival location. That village is usually not there anymore.
  * There is now also more variation in the biomes surrounding the world. In addition to the mountains and river biome, there is now also a jungle and pit biome variation. Entering these will now write the message "Impassable region" and change the background color of the map in that region.
* Improved ship landing location
* To get a preview about the number of locations in a region, the region has to have been entered once
* Show when next rival will arrive in info box for race bar
* Increased delay after a zero sanity event before the next one can hit
* Disabled cartographer perk for now (will come back soon)
* Enemies only spawn on reachable terrain now
* The hall of fame will highlight the last points addition
* Increased fade out time for music when leaving events
* Worlds that lay behind portals now already have all their tiles revealed immediately (not the locations though)
* Stone circle has been changed from randomly offering actions to always offering the same four powerful reveal actions

* Bugfixes
  * Fixed various tutorial issues
  * Fixed general problems with overlapping music
  * Fixed references to missing text
  * Fixed travel reports showing undefined text
  * Fixed average distance was not correct in post-game stats
  * Fixed crash when hovering over anthropolgical studies
  * Fixed village tile hints drawn over the wrong background tile
  * Fixed crash in firefox

# Alpha 30.1 (August 18th, 2016)

* Loyalty
  * Increased default loyalty
  * Added visual notification for changes to loyalty
  * Added loyalty bonus after each expedition for all remaining trek members
  * Native trek members that want to leave the trek at the end of an expedition, can now be convinced to stay by passing a mind die challenge
* Combat and Enemies
  * Added surprise attacks. When an attack is not initiated by the player, the enemies get to strike first in combat
  * Enemies may now also use shield attacks now
  * Improved placing of used dice in combat
  * Increased aggro delay for enemy zones to 2 turns
  * Enemy zones that are still in aggro delay should not attack player
  * Added smarter path finding for enemies
  * Reduced shield effect of spear shield attack from 3 to 2
* Loot
  * Hidden treasures (found via treasure maps) will now always contain a magical item
  * Shamans will now always offer tome pages
  * Removed horn flutes and mini puppets from magic loot table. They are normal items now.
  * Increased loot gained from raiding tombs
  * Reduced item cost of some utility items like coston flare, fireworks, horn flute
* Misc
  * Luis now is a free unit and will not count towards the unit count limit
  * Reduced chance for alcoholism
  * Added different compass thressholds depending on difficulty level
  * Added visual icon for weightless items (similar to how fame items are presented)
  * Improved placing of initial ship landing position to not be directly next to important locations
  * Caves become passable after exploring
  * Bedouins might now be appear in harbor too
  * Reduced capacity cost for mounting enemies
  * Volcanoes now regenerate some of the terrain around them
  * Disabled cam shake from Geysirs
  * Made more tiles burnable
  * Removed spiritual solidarity from explorer perk list
  * Healing springs location will now heal more ailments
  * Desert: increased chance for oasis spawning
  * Desert: increased range of Desert Expert skill
  * Desert: Treasure maps should now point to more recoginazable spots
  * Added visual info box feedback for how many locations are yet to be explorerd in the current region (small questionmarks)
  * Removed altar bar from altar inventory screen for now
  * Improved placing of characters in event images
  * Hide charge count for items in ranking screen
  * Added help text to animal handlers about their skill not stacking
  * Changed polyglot to only remove standing cost from resting in village
  * Changed translator to only increase sanity boost gained from resting in village
  * Increased quest rewards from 50 to 70 funds
  * Many quest items can't be randomly lost anymore
  * Stylized UI of barter screen a bit more
  * Improved image for water village event
  * Tweaked fire animation / flickering
  * Going through portals removes flood curse
* Bugfixes
  * Fixed crash in epilogue screen when having lizard people in trek
  * Fixed ship was drawn too big when zooming out at start of expedition
  * Fixed keyboard shortcuts for zooming not working during ship arrival
  * Fixed animals appearing twice in event image when mounted
  * Fixed stuttery animation on enemies that have multiple dice
  * Fixed capacity indicator for animals being drawn outside of info box
  * Fixed small visual glitch when hidden treasures are generated
  * Fixed missing icon for anthropological studies
  * Fixed missing negative outcome when not suceeding black hyena quest
  * Fixed NPC offering black hyena quest changing name after expedition
  * Fixed weightless items should counting towards balloon limit
  * Fixed stunned combat dice still taken into consideration for patterns hints
  * Fixed clicking on a item slot will remove items from that specific slot and not just from any stack containing the same item type
  * Fixed action bar, item bar and party side bar responding while scrolling
  * Fixed farming of positive night events by removing ability to end resting early
  * Fixed post-expedition stats for games that were restored from save game
  * Fixed chasm/flood events not properly interrupting resting
  * Fixed pure mind blessing not removing ailments immediately
  * Fixed character info drawn below barter interface
  * Fixed negative sanity events interrupting search events
  * Fixed moving weightless item adding an empty item slot that caused player to be flagged as overburdened
  * Fixed wrong overburden status after losing items through event
  * Fixed native trek members changing their appearance after restoring save game
  * Fixed chat bubbles in event images drawing text outside of screen
  * Fixed angry lizard villages spawning angy native warriors instead of angry lizard people
  * Fixed random flickering at side of the screen
  * Fixed clicking on travel button could lead party to unwanted position
  * Fixed various typos

# Alpha 30 (Jul 14th, 2016) "Welcome Home"

It is here! This is our final alpha update before our 1.0 release. For this update we focussed on adding more variety and wrapping up unfinished features and UI elements. From here to the 1.0 release we'll continuously release bugfixes and tuning updates as we get to them. Stay tuned for our announcement for the big 1.0 release date!

* Exploration points
  * You will no longer receive a region point only when discovering all locations within a region. Instead, you will receive an exploration point (same function, just different name) for every three uncovered locations, independend from in which region you have found them. 
  * We removed the preview of the locations that can be found in your current region, as we didn't find a visual representation that we were happy with and that justified the visual clutter and redundancy. The info box of the region now states the number of locations in the region.
  * The 'Geography' perk is now exclusive to scouts (can't be chosen as medal for the explorer) and was reworked to 'far' reveal all available locations when entering a region.
* Sanity events
  * Added lots of new zero-sanity events, resting events and phobias.
  * Tuned probablity of all already existing events, evening out their appearance out a bit.
  * Anger events are not triggered as part of regular resting events anymore, but run on their own timer now and can interrupt your regular traveling.
  * The sanity bar info box now shows additional info about what kind resting events to expect.
  * The sanity bar starts to blink when on zero sanity
  * When hitting zero sanity there is a random amount of days that the player can still move before being interrupted by a catastropic event. That delay was in the range of 5-10 days. It has been reduced to 0-5 days. Events after the first catastropic will still trigger 5-10 days later.
* Epilogue
  * We've finally added the long awaited image of the statue that shows the best explorer in the world.
  * Instead of showing all of the epilogue texts at once, you can now click through them in sequence. You can go back to previous entries by clicking on the small rectangles.
* Altar
  * You will now be able to trade certain items at the mysterious altars
  * In order to receive special items, you will have to find the patterns of objects that need to be sacrificed
  * We plan to extend the altar even further after the 1.0 release.
* Camp Site
  * It is now possible to pack up a camp again, which will remove the camp from the map and add the item back into your inventory
  * It is no longer possible to stash items in a camp
  * The value of the camp item has been increased 
* Art
  * Improved event image of shrine interior
  * Improved event image of elephant graveyard
  * Improved image of giant scorpion enemy
  * Added new image for fire sprawl death
  * Animated gentleman background scene with a flickering fire effect
* UI
  * You can now switch off the custom mouse cursors in the main menu in case your recording software is having trouble displaying it
  * Item usage of machete, rope and climbing gear is now shown directly on your travel path
  * In case that there are too many characters in your trek to fit on the screen, a tab switch button appears that allows to change between visible characters.  
* General
  * Added icon for family amulet item
  * Tomepages can now be used without a range limitation
  * Made infections deadlier and less random in duration
  * Added final steps to tutorial - it should explain all the basic things now to get going if you have never played the game before
  * You can now tell the current difficulty level from looking at the HUD background elements. Also it is now stated in the info box of the day counter.
  * Added a few new secret explorers
  * Hard mode: Added a sanity boost when reaching the pyramid
  * Increased the minumum travel speed for party
  * Added support for funds to the notification system
  * The missing wife that can be found in the first expedition does not use up unit slots anymore
* Bugfixes
  * Fixed a problem in the slaver event chain when not looting after combat
  * Fixed certain volcano aftermath was not always triggered
  * Fixed missing combat slots in cave event image
  * Fixed chasm borders from overlapping on map background
  * Fixed treasure map tiles not having proper tile borders
  * Fixed diary jumping into screen immediately instead of popping up on left screen border first
  * Fixed being able to have more than standing 10 by bartering
  * Fixed info box for dice challenges now says 'No fitting dice' instead of showing an empty info box
  * Fixed item notification should not use the fame mini marker
  * Fixed missing background image on beaches
  * Fixed club music did not stop when exiting from game via settings screen
  * Fixed creation of savegames that could not be continued

# Alpha 29.1 (Jun 16th, 2016)

* Bugfixes
  * Fixed crash under certain circumstances when adding character to party
  * Fixed diary closing after resting in village
  * Fixed save games becoming corrupt when saving on game over screen
  * Fixed no zero sanity event appearing

# Alpha 29 (Jun 15th, 2016) "The End is Nigh"

We're getting closer to our big 1.0 release. Therefore we're spending a lot of time bugfixing the game and generally wrapping up existing features or improving their readability. Its crazy to think that it has been over one year on Early Access now. Alpha 30 will be our last alpha update. After that we'll announce the release date for the 1.0 version. There will be more updates after hitting 1.0 of course, but we want to make sure that that version is as bugfree, stable and tuned as humanly possible.

* Notifications system
  * Shows changes to sanity and standing
  * Show added and removed characters
  * Show lost items
  * Show added and dropped statuses
* Redone slaver
  * New event flow. Can now be attacked by the player
  * Added new event image
  * Added new weapon: the whip
* Explorer Edition
  * Custom explorers as bought through our explorer special edition are now supported in the game.
  * We're currently working through our list of explorer edition buyers so your character might not be in the game yet, but we'll get to it before version 1.0 if you already bought the game. You will receive an email with your secret code as soon as your character is ready
  * Only one custom explorer might be unlocked at a time
  * Unlocked explorer might also appear as your rival
  * Also see http://curious-expedition.com/editions
* Highscores
  * Your final game points are now shown on any game ending screen
  * Final points are scaled by the difficulty level
* Tuning / Game Content
  * Beast master extended to support additional animals. Tuned dice.
  * Added status 'spiritual solidarity' as visual representation of the fact that missionaries can rest for free in missions.
  * Increased amount of trader barter items by one.
  * Changed world regeneration tome page completely. It now acts as a sprawl effect which will restore the land to its original terrain.
  * Multiple natives might now stay behind at the end of an expedition.
  * Changed animal eating event to reduce loyalty instead of hard triggering a character leaving party
  * Stone circles now allow to select from different styles of map reveals.
  * Reworked alcoholic status to work with loyalty.
  * Tuned starting equipment of Darwin and Burton
  * Ships now allow to rest and to refill water. Water may now also refilled in non-desert expeditions.
  * Tunnel caves now explicitly handle the case that the other exit might have been destroyed.
  * Reduced resell value of treasure maps
  * Fixed rivals starting in golden locations
  * Binoculars might now be found earlier in the game
  * Added some new secret item usage
* UI & Visuals
  * Show item cost in info box while in harbor
  * When hovering over a dice you will see the relevant dice that you own.
  * Added gender icons to character info box.
  * Moved standing icon next to sanity bar.
  * Fixed certain locations (usually village or stone circle) already using used-up marker at start of game
  * Fixed buttons drawn on top of cloud entrance scene when restoring from save game
  * Added new font for game over screen.
  * Added support for character info box portraits for enemies
  * Impoved spacing between action buttons that have associated items or dice.
  * Improved mouse box handling for info boxs of mounted explorers
  * Made reset-profile button in settings only activate when held down for some time (should make it really hard to accidently reset your progress). Also added text feedback when profile has been reset.
  * Added animated fire to night event images.
  * New graphic for the question mark icon
  * Reworked voids graphical representation which should make rendering a lot smoother. This should especially remove any performance problems on portal worlds.
  * Accelerate cloud movement during traveling
* Added random explorer selection button to explorer selection screen.
* Updated credits, added special thanks
* Bugfixes
  * Fixed dead enemies still doing damage
  * Fixed jerky animations of characters during combat
  * Fixed secret sites that were unlocked during an expedition were not correctly restored from save game
  * Fixed that in hard mode Some events where already triggered when arriving the pyramid instead of at the ship
  * Fixed changing pixel ratio during run-time broke chat layout
  * Fixed attack button being shown for butterfly zone
  * Fixed followed-by-natives event could happen in portal worlds
  * Fixed fire should not destroy buried treasures anymore
  * Fixed machete stopping fire
  * Fixed after combat all zones within one tile distance were removed. Now only the actual zone will be removed
  * Fixed last machete in player inventory did not remove jungle tile properly
  * Fixed animal and explorer not being drawn properly after animal went down in combat
  * Fixed waiting in portal worlds would never teleport the party back to the real world
  * Fixed buying multiple treasure maps at the same time caused them to point to the same location
  * Fixed last expedition still offering perk selection
  * Fixed old combat particles still appearing when entering new combat
  * Fixed action buttons not updated after teleporting
  * Fixed potentially losing items when cancelling a balloon escape
  * Fixed harbor music still playing when going from harbor into main menu
  * Fixed character health bars not centered during combat
  * Fixed white tigers not being spawned
  * Fixed player always starting in special region when going into unlocked site
  * Fixed changing zoom factor reseting particles
  * Fixed explorers riding on animals should still use explorer image slot in event graphics
  * Fixed dead people chatting in event image
  * Fixed item fade out effect being used while bartering
  * Fixed single punctuation appearing on a new diary line
  * Fixed map pins being drawn too big on map stats screen
  * Fixed region points being farmable by saving/loading save game endlessly
  * Fixed impossible blank dice faces appearing in dice challenges if the player was in a combat before
  * Fixed pressing ESC in highscore screen
  * Fixed volcano aftermath not always being spawned. Generally relaxed the reachability rule on a per-location base
  * Fixed treasure map preview image is now restored more exactly from save game (before the random offset could change when restoring savegame) 
  * Fixed gender changing randomly during event flow of village-love event
  * Fixed a lot of typos


# Alpha 28 (May 11th, 2016) "A Wonderful World"

For this release we're mostly focussing on replacing the remaining art placeholders. Thank you for all your support!

* New Art
  * New stone forest art
  * New desert art
  * New desert cactus art
  * New desert pyramid art
  * New scorched earth art
  * New cave hole art
  * New cave mummy art
  * New cave corpses art
  * New cave paintings art
  * New tomb art
  * New stone statues art
  * New portraits for hyena and raptor
* Tuning
  * Tweaked starting trek setup for Kingsley and Huizinga
  * Restricted pacifists from using more weapon dice 
* Bugfixes
  * Fixed pyramid staying buried (thanks to Charles Watkins for the help)
  * Fixed flickering character info box for mounted characters. Also rider and mount have separate hit boxes for their individual character info boxes now.
  * Fixed shields in combat being covered by large inventory
  * Fixed treasure map being covered by large inventory
  * Fixed info box for character unlocks and site unlocks not appearing
  * Fixed overlong text in harbor
  * Moon stones were not correctly removed from inventory after entering pyramid
  * Increased performance
  * Fixed various typos

# Alpha 27.2 (May 2nd, 2016)

* Bugfixes
  * Fixed character cloning bug issue when missing "Saved Games" folder on Windows
  * Fixed player progress file becoming corrupted

# Alpha 27.1 (Apr 16th, 2016)

* Bugfixes
  * Fixed travel reports
  * Stuck in ranking screen when having empty inventory slots

# Alpha 27 (Apr 14th, 2016) "Hard Mode"

After introducing the "easy" mode in the last update it's time for the "hard" mode. With this addition we're wrapping up our endeavor to support different challenge requirements. As usual we're looking for your feedback about the tuning. We also got a few bugfixed and smaller features in as well. We hope you enjoy the new version!  

* Hard Mode
  * Zero starting funds
  * Zero starting fame
  * Return to your ship after finding the golden pyramid. If your ship is destroyed there is nothing you can do but use the balloon, so be careful!
  * Unlock platinum frames for beating hard mode
* Improved scrolling with cursor keys
* Performance improvements
* Butterfly perk now yields more sanity
* Added more epilogue entries
* Bugfixes
  * Not successfully completing the Konrad quest will no longer skip all further events in the harbor
  * Large enemies now have a proper portrait in their infobox

# Alpha 26 (Mar 17th, 2016) "Easy Mode"

As our first step in supporting difficulty modes we are introducing the "easy" mode. One might think we do this to make the game easier, but honestly this is just our excuse to introduce the dreaded "hard" mode in the next update. 

* Easy Mode
  * Increased starting funds
  * Increased loot in many occasions
  * No standing loss when killing animals or blowing up mountains
  * Starting compass accuracy is always 100%
  * More places to rest and regain sanity across all landscapes
  * No seal or moonstone pyramids - just find the pyramid and you're golden (heh) on all expeditions
  * Less enemies will appear in combat
  * Mummies will never attack you when you are carrying them in your inventory
  * No spider encounters when exploring caves in darkness
  * No void will be triggered from looting a shrine
  * Resting in missions is cheaper
  * No portals or altars will be spawned
* General
  * Improved feedback when using the Necronomicon
  * H.P. Lovecraft now needs to be unlocked
  * World generation tuning improvements
  * Tome pages now are also weightless items
  * Added a dice check when trying to steal an idol from a village
  * Added a new treasure item: The Golden Slokra (Treasure Edition Item)
  * Improved inventory - when inventory slots exceed a certain amount, multiple rows will be displayed. Added a proper icon for discarding objects. Added a frame around the inventory slots.
  * Reduced price of native trinket
  * Lower value treasure items will now stack up to 10 times
* Bugfixes
  * Blue Mushrooms and weather baloons are now improving your range of vision upon usage again
  * Fixed multiple music tracks playing at the same time
  * Fixed promotion stars not placed properly
  * Fixed missing particles in combat
  * Fixed offset zone icon positions
  * Fixed drawing of shield icon in combat
  * Improved position of health bars
  * Fixed bongos did not reset enemy-attention counter always
  * Improved info box for statuses that change travel base cost

# Alpha 25.2 (Mar 3rd, 2016)

* Bugfixes
  * Fixed performance issues on resolution mode 3. Unfortunately if you haven't played Alpha 25 before you might lose all your player progress. To preserve your progress, run the nw.exe (windows) or run_app.sh (osx/linux) in the transfer folder of your game directory
  * Fixed position of chat bubbles
  * Fixed important statuses are shown next to party bar
  * Fixed travel reports. They now also have a nicer URL

# Alpha 25.1 (Mar 1st, 2016)

* Bugfixes
  * Fixed treasure map not scaled properly
  * Check unlock conditions after ranking screen instead of before
  * Fixed random crash when having abomination in party
  * Fixed scaling issues after changing resolution during a running game

# Alpha 25 (Feb 25th, 2016) "Dicey Actions"

With our 25th update (that's a quarter hundred!) we're going full circle and are finally using dice not only for combat, but also for regular diary events. Also the game has never looked this good before!

* Dice actions
  * Some diary actions now depend on dice rolls!
  * These actions will portray the required dice face required on the action button. All dice of your party are rolled excactly once.
  * If you get all required faces a positive outcome is triggered. If not a negative outcome is triggered.
  * This makes its easier for you to understand what the odds are for certain actions to succeed depending on your trek setup.
  * We've updated various old events to use this new mechanic. More events will be added in the coming updates.
* Resolutions
  * So far the game had two resolution modes. Stretched and native. If you played on higher resolutions (i.e. 1080p) both of these modes had disadvantages: Stretched mode made the pixel art appear blurry, while native mode was hard coded to a 1:2 pixel ratio, making the HUD elements and event images appear relatively small to your display size.
  * The new version now supports 4 modes and allows to set custom pixel ratios, resulting in pixel perfect art, big event images, proper HUD element sizes and sharp text.
  * When you play on 1080p the game has literaly never looked as good as it does with this new version. Hundreds of changes where necessary to make this work, so please excuse any hickups that might still have made it through our testing. Let us know if you're missing any more options.
  * Also the size of the info box now adapts properly to the resolution.
* Persistence
  * The player data and save game data is now stored inside a TheCuriousExpedition folder inside your user data folder. In case you want to move your profile to another computer simply copy that folder. Also this should make it easier to create backups of your data.
  * Steam Cloud support for savegames and player data will also be enabled within the next couple of days.
* Phobias
  * When ignoring phobias of party members, they will reduce their individual loyalty instead of reducing the overall party sanity. This should make phobias more readable and relevant.
  * We added a new phobia Dendrophobia, which is the fear of trees.
* New content
  * New item: voodoo dolls curse your rivals
  * New item: tin cans are nutrious, but pretty bland in flavor
  * New quest: a gentleman may ask you to escort a native to London
  * New blessing: your trek member might grow some animal claws 
  * New perk: ruffian, adds a attack die 
  * New perk: protector, adds a defense die 
  * New perk: adept, adds a support die
* Tuning
  * Buffed native enemies, they have spears now!
  * If overburden, mounted animals don't yield extra dice. This counters the exploit of mounting the animals while overburden and then unmounting them after combat.
  * Rivals don't all start at the same time, spacing them out more on the race track bar
* Misc
  * There is a screen prompt warning you about stashes that were destroyed in the world containing items of yours
  * Reworked the gentleman scene at the start of a new game
* Bug fixes
  * Fixed musician quest could not be completed correctly in some situations
  * Certain disasters like voids were spreading way to fast and have been reduced to their original growth speed.
  * Fixed some overlong description texts in world map screen
  * Fixed lots of typos
  * Fixed overburden status was not properly updated after putting items into stash
  * Fixed character unlocks were not checked when using hot air balloon during final expedition
  * Fixed sometimes unreachable villages were spawned in tutorial
  * Fixed additional trek members not shown in side bar when trek was already at regular maximum size

# Alpha 24.1

* Bugfixes
  * Fixed savegame problems in Expedition 6
  * Fixed instrument quest broken
  * Fixed names of dowsing items (now called pendulums)

# Alpha 24 (Feb 3rd, 2016) "The Chasm and the Pendulum"

* Added a new tutorial
  * Completely reworked the old tutorial
  * The new tutorial now is more fail-safe and guided
  * The tutorial now includes a basic combat description
  * We'll extend the tutorial further in the next update
* Harbor improvements
  * You can re-enter the harbor shop now
  * Fame/funds are shown at all times in harbor
  * Failed quests give negative fame
* UI updates
  * The maximum/current party count is shown when recruiting units
  * The party side bar is hidden during events now, allowing to see more of the event image
  * You can inspect character boxes in events directly now
  * Trimmed character boxes size and don't show description text anymore
* New events
  * New resting events
  * New mysterious dowsing item
  * New totem stick item
  * New sickness
  * New secret locations
* World
  * Added new preview images to the world map
  * Tuned neigbhors of locations to make patterns more recognizable
  * Tuned biomes
* Combat
  * Enemies now have different length for how long they seek the player
  * Added small delay between aggroing enemy and their first movement
  * Added new buff effects to various attacks
  * Retuned enemy dice with aim to nerf head butt attack a bit
* Misc
  * Dice are not auto-rolled again when they were pinned before
  * Doing the initial missionary quest now also gives +2 standing
  * Automatically stop traveling when traveling into deadly terrain
* Bug fixes
  * Fixed stuck when dismissing units during travel
  * Fixed aborting resting before spending one day
  * Fixed empty diary with infected units
  * Fixed crash when restoring save game
  * Fixed collection items were not saved properly when stored in ship
  * Fixed fire works item not working correctly
  * Fixed some typos

# Alpha 23 (Jan 5th, 2016) "Collector's Edition"

* New final swamp and sulfur swamp art backgrounds
* Collection items
  * Painter now creates a single stack of paintings
  * Butterflies are now also collected in item
  * Anthropological studies now show the portrait of a tribe member
  * Collection item's worth depends on the collected items
  * Fame/Fund tuning remained the same as before
* Combat
  * Auto advance if all enemies are dead
  * New health bar graphics
  * Increased health of all player characters
  * Show full character info box when hovering over player character
  * Dice that were pinned, are auto rolled when unpinned
  * New particles
  * Added new stun effect to headbutt attack (more special effects to come)
* Loyalty
  * Removed chance for internal loyalty boost when promoting characters
  * Added new perk 'careerist' which always add loyalty boost when promoting
* Events
  * New events for Tim/Luis
  * Added new nature resting events
  * New secret alternative game ending
* Added wiki button to main menu
* Cleaned up font usage in the game, reducing visual clutter (ongoing)
* Added new blessing "leather skin"
* Bugfixes
  * Bongos should not stack
  * Removed binoculars from Earhart starting equipment
  * Fixed NaN output when doing events in warp worlds
  * Clear chat queue when entering combat
  * Fixed enemy head shown in combat instead of body

# Alpha 22.2

* Bugfixes
  * Dynamite now correctly injures party members when used in combat
  * Store location inventory correctly in savegames
  * Fixed buffalo sprite appearing cut off
  * Fixed vulture event not working with marked ammo
  * Fixed Garvey being able to have more party members during harbor event
  * Fixed rare crash when using portal
  * Fixed celebration chat line about buffalo
  * Fixed disappearance of initial ship storage

# Alpha 22.1

* Bugfixes
  * Fixed loading old save games for maps without water access
  * Fixed correct overburden status after mounting/dismounting and using items
  * Fixed endless world gen loop
  * Fixed pointless attack button for mosquitoes and desert storms
  * Fixed celebration audience speaking gibberish
  * Fixed treasure map location correctly restored from save game
  * Fixed missing title for Konrad NPC
  * Improved region score calculation by tracking it per location

# Alpha 22 (Dec 8th, 2015) "Ship Ajoy!"

* Ship
  * Instead of spawning in the middle of nowhere, each expedition now starts with a ship arrival sequence that stops at the shore line.
  * You can accelerate the sequence by clicking or pressing space
  * You can also use the ship as means to escape from a running expedition
  * You can access the ship storage at any time
* Content
  * Added new loot type: jewels
  * New events, new chat lines, new text variations, new epilogue texts
  * New title box for the loading screen
* Tuning
  * Reduced value of animal teeth
  * Tweaked chasm shrine entry text to be more memorable and fitting to what kind of disaster it triggers.
* Final art quality for various images
  * Cenote location
  * Shallow river location
  * Cave entrance
  * Some cave interiors (not all done yet)
  * Blessing temple interior
  * Hill location
* NPC info box now also shows capacity for recruits
* Bugfixes
  * Shaman cleanse was applied to all characters instead of just one
  * Fixed music and sound effects playing with the correct volume setting
  * Harbor shop can't be accessed multiple times anymore
  * Fixed Konrad quest not cleaning up correctly
  * Play explorer jingle at start of expedition

# Alpha 21 (Nov 19th, 2015) "Friendship!"

After our Halloween special we took some time to work on smaller improvements all over the place.

* Gameplay
  * It is now possible to rest in villages even without having a translator or the polyglot perk. However, the basic resting will restore only 30 sanity and cost 2 standing points
  * The Polyglot perk will remove the standing costs from resting in villages and add a small bonus to sanity when resting in villages (+20)
  * Added the option to visit a pack saddle artisan at the harbor. Here you can increase the capacity of your pack animals by up to three additional crates. However, this will cost you a significant amount of funds
  * When being visited by natives in rest events you will be able to do both, trade and recruit. Also, inviting them to the camp does not require a translator or polyglot perk anymore
  * Improved handling of mission storage. You will now be able to access the mission storage even after killing the missionary or if the mission was taken over by cultists
  * New location: The shipwreck. Explore it to find valuable equipment
* Items
  * Added new item: The native trinket. This can be gifted to a unit to improve loyalty
  * Dynamite is now usable in combat
* Units
  * A translator will remove the standing costs from resting in villages. Also, the gained sanity when resting in a village will be increased greatly by the level of the translator
  * Added more visual variations to lizard people
  * Improved the dice of all lizard people
  * Added lizard shaman
  * Improved the dice of abominations and added a special tentacle attack
* Perks
  * Improved effectiveness of native warrior stealth perk
  * The Bullet Hoarder perk will now generate "marked" bullets instead of normal ones. Marked bullets are weightless and will be obtained up to a maximum amount of 5
* Portals
  * Added new, beneficial world variations when entering a portal
  * In addition to the automatic return to the normal world when entering a portal, another portal will appear at your starting position in the teleported world. Enter this portal to manually return to the normal world
  * It is no longer possible to balloon out of teleported worlds
* Content
  * Added many new chat lines to specific events  
  * Added new, unique sound effects to many attacks
  * Replaced jungle placeholder background with final art
* Bugfixes
  * Fixed issue where entering a village would result in leaving it immediately without being able to access the village options

# Alpha 20.2 (Nov 17th, 2015)

* Bugfixes
  * Fixed sometimes stuck in loading before Expedition-6
  * Fixed recruiting Scottish soldier in harbor
  * Fixed endless tortoise spawning
  * Fixed multiple Sterling appearing at harbor
  * Fixed missing icons for some perks
  * Fixed occult vision perk not working correctly

# Alpha 20.1 (Oct 30th, 2015)

* Bugfixes
  * Fixed barter values for missions
  * Fixed missing icon for infected status and charismatic perk
  * Fixed combats sometimes having wrong background image

# Alpha 20 (Oct 28th, 2015) "Halloween"

Its Halloween! We've finally added a character that we've been looking forward to for quite some time. And time it was. Have fun leading expeditions into the unknown being lead by the masterfull describer of the unknown himself. We've also added lots of other new contents and events. Here are some highlights..

* New Explorer: H.P. Lovecraft
  * Lovecraft is unlocked by default for this version.
  * Has necronomicon as starting equipment
  * His perk "Cosmic Indefferentism" gives him custom events when using the necronomicon
  * Has reduced maximum sanity
* New Location: Altar
  * You can sacrifice items on the altar
  * We don't want to spoil exactly what this influences in the game
* Content
  * Added new mummy enemy/event
  * Added giant spider enemy/event
  * Added new tome page for waterfall creation
  * Added new tome page healing springs creation
  * Added some new night camp event
  * Added new loot item: spider leg
  * Added new item: pumpkin lantern
* Tuning
  * Reduced gain for British soldier from perk
  * Weapon dice are now associated with different dice colors
  * Actions in warp worlds don't result in standing changes anymore
  * Animal trophies can be sold for funds or given away for fame again, although at a lower value than before
* Etc
  * Updated abomination/canibal status description to better reflect what they do
  * Added missing status icons
* Bugfixes
  * Fixed entering golden pyramids with moonstones sometimes didn't work
  * Unlocked destinations should be shown in gold color again
  * Animals don't generate post-game narration anymore
  * Sprite crate glitch on water buffalos
  * Wrong background image when recruiting characters in river villages
  * Stone circle behaving weird with superstitious characters
  * Fixed world creation tome

# Alpha 19.2 (Oct 27th, 2015)

* Bugfixes
  * Fixed losing quests when entering warp worlds
  * Fixed overburden status not removed when consuming items
  * Fixed crash on ranking/world map screen 

# Alpha 19.1 (Oct 26th, 2015)

* Bugfixes
  * Fixed bartering issues
  * Fixed names not generated properly
  * Fixed crash when explorer dies
  * Fixed golden seals missing icon
  * Fixed regeneration trait not working
  * Fixed abomination tome page not doing anything sometimes
  * Fixed being able to continue after dying with explorer
  * Fixed wrong background image when recuriting

# Alpha 19 (Oct 22nd, 2015) "Beyond the Portal"

* New locations
  * There are now portals which temporarily teleport you into mysterious parallel worlds
  * A new stone temple allows to upgrade character units with unique special capabilities
  * There are multiple new variations of the stone circle
* The world map now shows a preview of the most important locations to be found in that region
* When overburden you are still allowed to move with increased sanity costs
* After finishing the final expedition you are rewarded with a screen summarizing the life story of all the trek members after finishing their exploration career
* Improved character placement on event images
* Events
  * Nature rest and no sanity events share the same pool of events now resulting in more variety
  * Added lots of new events
* Ailments
  * Infection reduces health
  * Added new status bipolar
  * Death curse might now be a random outcome of raiding tombs
* Items
  * Added icon for mini puppets item
  * Added new treasure item
* Harbor
  * You may now choose between multiple recruits in the harbor depending on your current fame score
  * Quest rewards are now given in funds
* Bugfixes
  * Fixed golden pyramid sub fixtures not always spawned
  * Fixed person traits for starting characters did not work

# Alpha 18.1 (Oct 14th, 2015)

* Bugfixes
  * Fixed crash when continuing game right after saving it
  * Fixed resting in villages with low standing
  * Fixed some character unlocks

# Alpha 18 (Oct 1st, 2015) "Procedural Natives"

There is now a basically endless amount of visual variety in the tribes that you encouter on your journeys. Also lots of new zero-sanity events, character traits and unlock conditions. And to keep track of all your progress we've also extended the hall of fame. Make sure to read the list of highlights in this update:

* Procedural tribe generation
  * Each expedition will now feature their own procedurally generated native people, sharing a unique and different look each time.
  * The portraits of your native recruits are also randomly generated now.
* Recruiting
  * Recruiting in villages requires good standing now
  * You get to chose between three units
  * You can inspect the new units before recruiting them
  * You can recruit units even when already having a full party
* Treasures
  * Added lots of new treasures.
  * Shrines now give a big and a small treasure.
  * Small treasures might also be found in villages now and traded in.
* Loyalty system
  * Characters now have internal loyalty rating which tracks how they feel about you
  * Your actions will influence their loyalty. If loyalty gets too low they might become angry
  * Promoting characters and certain events increase their loyalty
* New content
  * Pyromaniac status
  * Sexist status
  * Deathcurse status
  * Renounced status
  * Promised status
  * Red berries item
  * Fresh air fanatic perk
  * Lots of new events
* Lots of new and challenging explorer unlock conditions
* Travel Reports
  * Now also works in steam version
  * Allows you to share an automatically generated travel summary of your expedition campaign
* Most sicknesses are now automatically healed when returning to London
* Added a item section to the Hall of Fame, showing all items found so far in the game
* Bugfixes
  * Fixed inventory for village was not fully stocked in certain event flows
  * Ammo and spears are considered weapons now
  * Removed duplicate village resting action
  * Fixed tutorial submitting highscore entries
  * Removed easel from item lists since it has no purpose currently
  * Fixed crash in certain browser vendor/version configurations
  * Mushroom bonus for shaman did not work properly
  * Fixed character appearing on top left corner instead of combat area
  * Survivor quest reward was handed out even when quest failed

# Alpha 17.1 (Sept 10th, 2015)

* Tuning
  * Health is restored between expeditions
  * When mounted animals reach zero toughness in combat, they automatically dismount their rider and the rider can still fight. This replaces the previous system of combining the health directly.
  * Increased spawn rate for moon stones
  * Reduced time bonus value

* Bugfixes
  * Fixed animals being marked as injured after mounting
  * Fixed rival progress was not properly restored from save games during expeditions
  * Fixed after restoring save games treasure map location could end up in unreachable areas
  * Fixed rare freeze during world generation
  * Fixed rare freeze when explorer dies in combat

# Alpha 17 (Sept 8th, 2015) "Explorer's Delight"

This is a big one! After plenty of bugfixes and working on the surrounding systems like save games and highscores for the recent alphas we're finally back to focussing on the core gameplay again. We've made some major improvements to core areas like traveling and combat. Here are some of the highlights:

* Map Knowledge
  * Butterflies are now visible on the map. They are automatically collected when moving through these zones without needing to stop. The previous random encounters of butterflies has been removed.
  * Mosquitos have been added to the map. These fields carry an extra risk of getting certain sicknesses. Sicknesses are not directly visible but rather shown through their symptoms, so make sure to observe the statuses of your trek members carefully to understand what kind of sickness they might be suffering from.
  * Points of interest '?' are now always revealed when passing by within a range of up to two tiles. That should make the results of your movement much more predictable.
  * All fields on the map are now drawn in the same color, making it easier to recognize patterns on the map.
* Perks
  * Several explorers how have unique start perks that can't be gained by any other means. The new perks so far..
  * David-Neel can promote her animal trek members, but not humans
  * Kingsley is especially stealthy, but can't use weapons
  * Garvey has one additional unit slot, but lowered max sanity
* Rival Bar
  * During expeditions you can see the progress of your rivals on their current expedition. The sooner you reach your destination the higher the racing fame bonus that you gain.
  * This gives you a better idea about if you're doing well on your current expedition and fits better to the fiction of the game.
  * The old day deduction has been removed from the game.
* Combat System
  * The toughness of your characters doesn't regenerate immediately after combats anymore. Instead it will only regenerate slowly. Certain statuses like sickness might block the regeneration. This adds some more depth to the game and should increase the impact of combat even against weaker enemies.
  * The worth of various hunting trophy items has been reduced. The animal teeth don't count as fame items anymore.
  * Enemy attacks are now shown sequentially instead of all at once.
  * Fleeing is now especially dangerous for characters with zero toughness.
* Tome pages
  * Added three new tome page types (we don't want to spoil what they do exactly here)
  * The mountain tome page now allows you to point at where to create the mountains
* Misc
  * Added Luis & Tim special characters. The special perk of Tim causes him to give you a general fame bonus multiplier at the end of the expedition.
  * The worth of paintings has been increased and the painter does not require the easel item anymore.
  * Character will now consume multiple region points to advance into higher levels.
  * You gain a standing bonus from generous trades with natives. You can see the standing change outcome in the barter interface.
  * The region bar on the top right is not dependent on the mouse position anymore, but will instead just always depend on the current party position.
  * Characters don't return immediately anymore. There is a varying minimum amount of days that has to have passed.
  * Spells that cause regions to become deserts now also cause waterfalls to go dry.
  * Added back the green plus signs hinting at possible level ups.
  * Its not possible to recruit multiple animal handlers anymore.
  * The way the inventory is shown as overburdening has changed a bit to be more intuitive. It also does not highlight weightless items as being problematic anymore.
  * More statuses (like paranoid) will now show their icon next to the character gallery again.
  * Desert storms in the desert now are more stationary and have a bigger impact on the party when being traversed.
  * Anonymous metrics are sent by the game to our server to support us in balancing the game. You can disable sending this data through the settings screen.
* Bugfixes
  * Fixed notifications for unlocking characters and special sites did not appear
  * Fixed slow down in main screen
  * Fixed the unlock description text for Garvey
  * Fixed wrong sort order in hall of fame screen
  * Fixed enemies are now being spawned more reliable

# Alpha 16 "Hall of Fame" (August 18th, 2015)

We're back from gamescom! Thanks so much to everybody that visited us. This week we're adding the beginning of the a new highscoring system. We're also having several gameplay prototypes running in our developer version, but we need more time for play testing to see if they are really an improvement to the game. Hopefully you'll see some of these in the following alphas. We'll also take another loop at optimziation for the next update.

* Hall of Fame
  * Can be reached via a new button in the main menu
  * Shows your 8 overall best highscores
  * Shows your best highscore per explorer
* Content
  * New enemy type: zombie pygmins
  * Added new variations for map background (more to come)
  * Added new icon for enemy attention status
  * Reduced the darkness of far away tiles to make them more readable and allowing better pattern recoginition
  * Improved character info boxes on ranking screen
  * Added particle for stone circle reveal
  * Only give golden frame when finishing on first place
  * Don't show cam shake if party is too far away from source of cam shake (this should make playing the prehistoric worlds less crazy)
* Web version
  * The web version now also supports saving at any point
* Bugfixes
  * Fixed not always getting region score properly (There sometimes still is a delay. Will look into that for next version)
  * Fixed village beast master not using up animal teeth properly
  * Fixed tuning for deadly riposte (it was weaker than triggering riposte twice)
  * Fixed medal jittering on celebration screen
  * Fixed stuck celebration sound after final expedition
  * Fixed possible to click 'save' button even while grayed out
  * Fade out title music when continuing game

# Alpha 15 "Gamescom" (July 31st, 2015)

For this week we have one new major feature update: saving during expeditions! Also of course several new bugfixes and tuning tweaks.

* Saving
  * You can now save/resume during expeditions
  * To save during an expedition, leave the game via the settings screen (press ESC or click on the settings button) and choose "Save & Exit". If the button is grayed out you may not save at the very moment (probably because you are in a combat or event)
  * As before save games that are continued are deleted automatically so you can't load the same save game multiple times.
* Art
  * New location image for healing springs
* Bugfixes
  * Fixed freezing when trigger combat in mission
  * Fixed first recruitment after finishing the first quest objective did always fail
  * Fixed angry villages failing to spawn angry native zones
  * Fixed preconditions for some no-sanity events being too loose
  * Fixed several harbor events were skipped when going to a prehistoric destination
  * Fixed it was impossible to hover over character info boxes on diary action buttons
  * Improved position of some help boxes
  * Fixed characters injured outside of combat had wrong health value
  * Fixed missing buffalo face image
  * Fixed two resting actions available at once in village
  * Fixed region points not always being rewarded if a location in the region was destroyed or after a camp item was used
  * Fixed kleptomaniac getting into arguments with himself
  * Fixed several typos

# Alpha 14 "Stable Grounds" (July 22nd, 2015)

After the amount of major feature additions in recent alphas, we felt it was time to take a moment to make sure that we have a stable foundation for our upcoming updates. We pushed around 7 updates already during the last two weeks updating the game as we worked through our bug list. We will still work through more bugfixes in the next couple of days. We hope you enjoy one of our most stable versions so far.

* Villages
  * Added new events
  * Angry villages now constantly spawn angry villager zone
  * Angry villager enemies now can have a shaman on their side

* Tuning
  * Natives only visit your trek once per expedition now
  * Reduced water buffalo health from 12 to 8

* Misc
  * World map now allows to select destination via double-click
  * Added a new magic die which is used by native shamans
  * It allows to trigger healing combos

* Bugfixes
  * It was possible to overburden the hot air balloon
  * Destinations on world map are now properly restored from save game
  * Healing action for abominations was offered at shaman hut even though they can't be cleansed
  * Animals could get angry during night events
  * Fixed characters becoming angry and superstitious at same time
  * Region score is updated corretly when locations are destroyed
  * Items should not be usable while selecting destination for stone circle
  * Improved missing husband location placement
  * No medals should be shown during final celebration
  * Fixed freeze when resting in fire

# Alpha 13.2 (July 14th, 2015)

* Bugfixes
  * Fixed elephants attacking player
  * Fixed losing unlosable items
  * Allow native visit event only once per expedition
  * Fixed freeze when triggering the Konrad fight in lizardmen villages

# Alpha 13.1 (July 9th, 2015)

* Bugfixes
  * Fixed freezing when trading in harbor under certain conditions
  * Fixed freeze when fighting on mounted giant tortoise
  * Fixed Darwin was missing a support character
  * Fixed health not properly filled up after leveling up
  * Fixed lost husband not returning to his wife
  * Fixed crash when adding abomination or water buffalo to party

# Alpha 13 "Dinosaurs" (July 8th, 2015)

This is a big update for us. We've added the much awaited dinosaur riding features and taken a huge step towards the final UI layout of the game.

* Mounting
  * All pack-animals (including dinosaurs) can be mounted by the explorer now.
  * Mounting animals reduces their carrying capacity, but reduces base movement costs and unlocks special combat dice.
  * Have fun finding all the new dinosaur unit types that we added.
* New Locations
  * Bone village, home to the infamous lizard people
  * Raptor nests, great place to find living dinosaur eggs
* Layout
  * We've reworked the overall layout to feature a new party side bar with  character portraits for all units. The party side bar is also visible during events, allowing to inspect the party quickly.
  * The sanity bar is now bigger and centered on the screen. The path cost for the current travel route is also previewed on the bar.
  * The standing bar has been replaced by a more visual icon on the right side.
  * The fame counter has been removed. Hover over the day counter to see your current fame count.
  * All chat lines are now shown in chat bubbles.
  * Less statuses will be shown next to the character. Hover over characters to see the full list.
  * The character portraits shown on top of the event image have been optimized in size.
* Character selection screen
  * Its now possible to hover over the items and support characters of each explorer to get more information.
  * Explorers that have finished the game are shown with a golden frame.
* Misc
  * Show region info only for regions which already have been entered
  * Missing adventurer does not consume a unit slot anymore
  * Magnetic mountains have been reduced in their influence over distance
  * Angry villagers are stronger now and immediately aggroed towards the player
  * The celebration crowd will now comment on the party and your success
  * New particle for explored regions
  * Hot air balloon now needs at least two humanoid party members to set up
* Bugfixes
  * Fixed world gen sometimes creating unreachable locations. Sorry about that!
  * Haggle icon was missing
  * Wrong Schroedinger sprite was drawn at harbor
  * Clicking multiple time on celebration medals caused extra level ups
  * Clicking the "stop wait" button didn't work properly
  * Fixed zones being drawn on the wrong location
  * Fixed various typos

# Alpha 12.1 (June 20th, 2015)

* Tuning
  * Increased amount of fame that is gained by rivals per expedition
  * Reduced growth rate of voids sligthly
  * Increased cost for fleeing from combat
  * Confrontations with natives now uses the village price table
  * Finishing Konrad quest will give slight standing boost
* Bugfixes
  * Reset followed-by-natives status when leaving expedition
  * Fixed cenote for all pyramid types
  * Clean up quests correctly on leaving expedition
  * Quests won't appear multiple times per play-through after using save game
  * Cave with native paintings didn't work in all expeditions
  * Fixed disappearing items when dragging item onto another item while holding control key
  * Fame bonus for secret worlds was not awareded correctly
  * Fixed red mushrooms being available to wrong person
  * Added leave action to caves with tunnels
  * Hide region bars for empty regions
  * Fixed animals commenting on your cooking skills

# Alpha 12 "Unearthed" (June 18th, 2015)

In this alpha we laid the foundation for alternative goals for expeditions. We're excited to bring you more in the future. We also worked on reducing some of that frustration when hitting a hard wall in the game: you'll be able to abort expeditions and also to explore locations without having the proper items with you.

Here is a more detailed list of highlights in this alpha:

* Alternative Goals
  * A new pyramid type was added, which is buried when the expedition starts. Find all the golden seals to unearth it!
  * The world map screen will give you an idea what goal to expect at each destination.
  * Different types of goals will you award different amounts of fame.
* Quests
  * Added various new quests. We don't want to spoil exactly which, but be careful with Snarfrattle, that's a dangerous beast.
  * Each quest type will only be offered once per play-through
* New actions
  * Added a button for waiting. Does nothing else, just waiting.
  * Added a button for balloon escape. Allows you to abandon your current expedition, but you won't get points for finding the golden pyramid and you might have to leave behind some of your inventory. 
* Locations
  * Tower shrines can be visited without having a rope (at increased risk of injury)
  * Caves can be visited without torches (at increased risk of injury)
  * Villages and biome types are not hardcoded anymore, so you now might also find scouts outside of dry lands now
* Item changes
  * Improved quest rewards loot table
  * Slightly reduced health kit price
  * Increased value of whisky in missions
  * Tuned various item values for villages
  * Weather balloon now gives a small sight advantage and also has no waiting cost anymore
  * Canvases max stack increased to 10; harbor shop now sells more canvases.
  * Improved overburen handling: when losing party members or discarding items, empty slots will automatically be cleaned up.
* Perks
  * Increased sanity gained when having a translator in village
  * Improved occult vision perk to work without having to rest first
  * Improved power of dream visions perk
* Nature Disasters
  * Traversing through fire might be deadly now
  * Made the void more readable by adding new particles
* Abominations
  * Its no longer possible to heal abominations in shaman huts
  * The chance of turning into a abomination when being marked has been increased.
* Music
  * Added music track for pyramids
  * Increased the fade out time of the music, so you will be able to hear the event music tracks longer.
* Bugfixes
  * Restoring a save game with multiple cultists was broken. Unfortunately you won't be able to move your save games from Alpha 11 to Alpha 12.
  * Explorers should automatically level up after each expedition
  * Fixed incorrectly applied injured state
  * Fixed party could rest in village without translator
  * Fixed natives staying back on expeditions, even though they were not homesick anymore.
  * Fixed unreadable treasure maps
  * Fixed exploit of being able to reset treasure maps or crystal balls by trading them.
  * Deserts did not spawn any oasis anymore. Oasis now appears again, also giving much needed opportunity to refill water and to use the Bedouin perk.
  * Fixed easter egg in menu
  * Clicking while traveling could result in unwanted changes to the travel route
  * Fixed feather item appearing after combat even when not fighting against giant birds.
  * Fixed voids that covered whole regions were not drawn correctly.
  * Inventory capacity was not re-calculated correctly after using items with weightless property
  * Various spelling fixes

# Alpha 11.1 (May 27th, 2015)

* Steam: Enable fullscreen by default
* Fixed: Getting stuck at loading bar during world generation

# Alpha 11 "New Frontiers" (May 26th, 2015)

We're super excited to be on Steam Early Access and very happy with all positive feedback we have gotten. For this alpha we're focusing on bugfixing and making the release as stable as possible.

* Shrines
  * Highlight journal text that hints at to be expected shrine curse
  * Removed some of the less spectacular shrine curses
  * Added a new shrine curse "flood" which follow the trek around
* Pyramide
  * Fixed pyramid being spawned too close to player position. It will now spawn at a more consistent distance
  * Made it impossible for moon stones to get randomly lost
  * Reduced moon stone requirement for last expedition
* Characters
  * Its now possible to preview the character traits of recruited personnel
  * Added option to cancel dismissal of characters in harbor
  * Fixed clicking on character that didn't support leveling up, still wasted a region point
  * Fixed characters restored from save game could have duplicate traits after level-up
  * Fixed toughness was not correctly refilled after every combat
  * Fixed some characters had the wrong gender attribute set
* Combat
  * Disallowed to click 'end round' while a dice combo was already selected (this should hopefully help teach about the attack button)
  * Fixed being able to click the reroll button even though no dice were left
* Steam version
  * Fixed crash on startup on some windows machines
  * Fixed stuck in loading bar on some machines
  * Fixed some slowdowns on OSX
  * Fullscreen state is stored persistently
  * Quitting from settings while in main menu, quits the game instead of returning to main menu
* Fixed multiple Jim Sterling being able to show up
* Fixed empty cave appearing in last expedition
* Fixed some locations didn't have the correct background applied (e.g. old camp in desert appearing on jungle background)
* Fixed special positions on world map appeared offset
* Fixed injured characters that entered combat immediately died
* Fixed various typos (thanks to everybody reporting spelling mistakes)

# Alpha 10.3 (May, 23rd, 2015)

This is a bugfix release

* Fixed severe graphical glitch showing up on some clients.

# Alpha 10.2 (May, 20th, 2015)

This is a bugfix release

* Fixed Linux 32bit build 
* Fixed memory leak during character selection screen 
* Re-enabled rotation on dice in combats 
* Tweaked the type of help prompts shown during the first combat of each play-through to hopefully make the combat easier to grasp 
* Fixed resting in mission resulted in always the same event being triggered

# Steam Early Access (May 19th, 2015)

We are finally out on Steam! Welcome to all the new players. All old players get a free steam key too as promissed.

* Added new title screen showing off London, the home of the explorers club
* Tuned cooking (reduced sanity increase per cooked meat, increased stack size for meat)
* Screen scaling is now enabled by default
* Mulitattack triggered by player could target the same enemy multipe times
* Fixed geysir location not being reset correctly
* Added mushroom background
* Updated nightcamp background
* Increased chance to find helpful locations in higher levels
* General combat tuning
* Habor always sells travel items now
* Reduced animal capacity in general by one

# Alpha 10.1 (May 9th, 2015)

This is a bugfix release.

* Fixed potential crash when fighting raptors or other enemies with multiple dice (thanks to @kramski for reporting)
* Fixed mouse button area for item info box on ranking screen

# Alpha 10 "Full Steam Ahead" (May 6th, 2015)

For this update we concentrated mostly on improving the dice-game. We heard your feedback: the dice game had some confusing parts which made it a bit hard to understand for new players. We tried to fix those and at the same time make the gameplay deeper. Besides this we also improved usability in various other areas of the game, preparing for the onslaught of our upcoming Steam early access release which will happen: May 19th 2015!

All buyers that have bought the game so far, will get a free steam key as promised.

* Dice-Game
  * Added many more actions to perform
  * Reworked the type of dice and dice faces in the game, making them more manageable and intuitive
  * Instead of rolling the enemy and player dice at the same time, enemies roll their dice in a separate phase now
  * Possible dice combos are now hinted at by vibrating dice
  * The effects (e.g. damage) of the chosen dice are shown as preview below the action button now
  * Added new special attack attributes like attacking multiple enemies or inflicting self damage
  * Weapons add dice to combat, allowing to trigger special combos
  * Improved dice placing, so that they don't overlap with other dice or the center roll button
  * Portraits next to dice are only shown during the overview and when hovering over the dice now
  * The blink faces (looked like a star) which did have no effect in the game, have been replaced by more readable blank faces
  * For players that already have played some rounds, the tutorial prompts are not shown anymore on every first combat
  * Added various new visual effects to the dice game. The dice game is still work-in-progress, but we're getting closer to our goal
* Units
  * Dice types and gained dice per level has been tuned
  * Units will now receive 2 toughness per promotion (instead of 1) 
* General
  * Waypoints can be added inside of existing travel route
  * Location reveals are now delayed until the diary is closed, so that you can actually see them appear on the map
  * The camera scrolls to revealed locations, instead of jumping there directly, making it easier to understand where the new location is in relation to the party.
  * Flipped barter clicking behavior - left click moves one, right click moves all items in that inventory slot.
  * Increased fame gain for finding the golden pyramids
  * Players already start the game with fame 10 to reflect their starting popularity
  * Moonstones can now also be found in desert tombs
  * Renamed perk "cartographer" to "navigator"
  * Regions are not fully revealed anymore once the have been unlocked; instead the a new perk "cartographer" is now necessary to retain the old behavior.
  * Added info box for items to the ranking screen
  * Removed death cross from player path when overextending sanity, since it was causing too much confusion. Instead the regular travel costs are shown, adding valuable information.
  * Also show amount of days used for travel route in info box
  * Tweaked journal text speed to appear more organic
  * The maximum days of resting allowed has been increased from 4 to 5 per try. It still yields the same sanity gain as before though.
* Items
  * Usable items are highlighted in inventory. This also makes it easier to recognize which items can be used during combat (currently just the extra bullets)
  * New weapon items: Pistol, Shotgun, Rifle, Spears and the dreaded Tesla Gun have been added.
  * Resell value of items has been slightly increased
* Bugfixes
  * Fixed donkeys being able to paint drawings
  * Camera was not centered properly on player part (by the way.. you may also press 'c' to center the camera on the party when on the map)
  * The expedition counter sometimes showed the wrong number
  * Disabled item usage while traveling or resting
  * Wrong game over text when existing the game via the setting screen

# Bugfixes (April 27th, 2015)

We're back from the Berlin Games Week and did some fixes for Alpha 9. Thanks to everybody reporting bugs!

* Fixed map being completely free from locations of interest.
* Fixed game sometimes being stuck in map loading screen.
* Fixed way points being placable on non-reachable fields.
* Fixed dynamite not working in certain situations.
* Fixed drums event in village not cleaning up inventory properly.

# Alpha 9 "Artistic Merit" (April 17th, 2015)

We've been very busy with preparing for our upcoming Steam release and the Berlin International Games Week. Because of this, we have a couple of smaller improvements this time. Here are some of the highlights:

* Units
  * New unit: The artist. Allows to create paintings of natives or locations for fame and funds
  * All units now will get additional dice when leveling up. Dice are not gained each level but semi-regularily, depending on unit type.
* Fame & Funds
  * Items may now have different fame & funds values. You'll have much more interesting decisions in the ranking screen now.
  * We changed the way how items are delivered at a Mission. Instead of giving up all your exotic items automatically, the mission now has a small inventory in which you can put items. These will be sent home at the end of your expedition.
  * Increased fame value of anthropological studies. Combined with the artist, a non-disruptive playstyle is much more viable now if you choose to do so. 
  * It's not possible to trade in items at the harbor anymore.
* General
  * We added text hints that allow you to anticipate which curse will be triggered by raiding a shrine. We also increased the effect of shrine curses for volcanos and chasm. Also earthquakes will not block your path that easily anymore.
  * The available destinations on the world map are more random now. You might not have the opportunity to select jungle terrain for every expedition.
  * Fighting animals will now resolve in standing loss instead of standing gain as before.
  * We've added highlighting to some texts to easier grasp the essence of a text. We'll add more highlighting in the coming updates.
  * Rival explorers now use a simplified location marker on the world map for better overview.
  * Some items don't consume slots (e.g. treasure maps). We added a help text to the item info box to point this out.
  * Earhart is now unlocked when recruiting a native scout. Kingsley is unlocked after finishing first expedition.
  * Added some animation to the title screen. The screen is still work-in-progress overall.
* Bugfixes
  * Player won't start in blocked off areas anymore.
  * Character info box that appears when hovering over character names in the diary doesn't disappear randomly anymore.
  * Fixed giant tortoise being respawned endlessly.
  * Fixed caves with tunnels not property connecting to other caves.
  * Fixed stats popup showing twice the amount of change that actually happened.
  * Fixed some cases of locations being spawned on the wrong terrain type.


# Bugfixes (April 7th, 2015)

* Fixed missing harbor equip opportunity on expedition 4+

# Alpha 8 "Treasure Hunt" (April 1st, 2015)

This update comes with various, smaller changes and a plethora of new events. The largest feature is the 'Special Region'. These unique areas are only found in the special unlocked worlds.

* Special Regions
  * All unlocked worlds have a 'special' region, with unique enemies and locations
  * Special regions: Elephant Graveyard, White Tigers, Water Temple
* Treasure maps
  * Instead of directly showing you the target location, treasure maps now show you a small cutout of the target area. You'll have to figure out for yourself where it is in the world.
  * You need a shovel to dig up treasures.
* Art
  * New background image for locations situated on grassland tiles
  * New background image for locations situated on dryland tiles
  * Various location images have been adjusted to fit with the new backgrounds
* Music/Sound
  * New explorers club theme
  * New trader theme
  * Added cheering sounds to the celebration
* Content
  * The angry status has been fleshed out with more events
  * More nature rest events
  * More village rest events
  * New zero sanity event
  * New mission location event
  * New passive animal: Triceratops
  * New special unit: Jim 'James' Sterling
* Settings
  * Added a quick text mode, which shows all text immediately
  * Added a scaling mode which scales the 1280x720 to your screen. Don't use if you prefer pixel perfect art.
* General
  * The inventory of each character is now also shown in the character selection screen.
  * Buried treasure can only be recovered with the new shovel item
  * English improvements
  * Cheering sound for celebration screen
  * Improvements to the looting and inventory interface
  * Improvements to - and more chatlines for - the chat system
* Bug Fixes
  * Fixed the infamous enemy-not-disappearing bug
  * Enemies did not always chase after you
  * Fixed rare crash when dropping items
  * Items now store correctly in saved games
  * Trek member genders are correctly restored from save game
  * The explorer can still die from infected wounds, but the text now changes accordingly

# Alpha 7.2 (March 18th, 2015)
* Fixed sounds not playing on some systems
* Reworked the looting interface to behave more like the barter interface
* Fixed a couple of smaller barter/item related glitches

# Alpha 7.1 (March 13th, 2015)
* The party fame was not always shown correctly on the ranking screen
* The rivals are now correctly restored from save game
* Fixed connected caves not working
* We also used the time to add some extra polishing
  * You can now also see to which destinations your rivals travel to
  * The gentleman intro text is now split up over multiple chat bubbles
  * Your ranking score is shown in a different color and a scale is drawn on top to make your current rank easier readable
  * We updated a lot of random chat comments to fit better
  * One new extra secret easter egg in the menus ;)

# Alpha 7 "Fame or Funds" (March 12th, 2015)

With this update we have added the last missing piece to our game loop: the ranking screen. Here you decide whether you donate exotic items to a museum to receive fame, or sell them at an auction house for funds. In order to beat the game, you need more fame than your rivals have at the end of the last expedition.

* Funds and Rivals
  * Sell items that you bring from your expedition for either funds or fame
  * Instead of buying equipment with fame, you'll now use funds
  * Compete against other famous explorers
  * More items are now considered to be 'fame' items
  * There is a new (place-holder) introduction screen that explains the goal of the game
* Barter Interface
  * The barter interface has been iterated and is now positioned on top of the journal (instead of hiding the nice event image)
  * Your current funds are shown in the barter interface while you're trading in the harbor
  * The exact item values being shown have been replaced by a more vague horizontal bar, that gives you a graphical overview of the deal state
  * The party inventory is now shown next to the shop items while trading.
  * While the changes should in general improve the interface, it is an unfinished and in-between step to our desired final result
* Art
  * New WIP ranking and title screen
  * Explorer's club image
  * Alternate stone statue event image
  * New character selection screen
* New content
  * "The Void" shrine aftermath event (can YOU escape it?)
  * Volcano eruption shrine aftermath event
  * New nature night events
  * The magnetic mountain has replaced the magnetic pit. Blow it up with TNT to get back your compass bearings
  * (Real-life) quotes from explorers are triggered by certain events
* General gameplay
  * The cook can now cook all the time and not just at the camp or nature rest locations
  * Meat will now spoil after some time, just like mangos. It will then automatically removed from the inventory
  * Tuned enemy aggro chance and ranges
  * Tuned travel costs as well as item and perk effects for thick jungle, hills, swamps and desert fields
* General
  * Added a whole batch of new people to the credits
  * Pressing space in character selection screen will select a random explorer
* Bug fixes
  * General performance improvements. Travelling across the map should be much smoother now.
  * Healing (red) mushrooms and first aid kits did not work properly
  * Dynamite will now also destroy locations (caves etc)
  * Explorers can no longer decide to leave the expedition and live with the natives (potentially will return as a proper feature)
  * The camp item no longer disappears when one tries to use over an existing location
  * Sanity is now refilled between tutorials
  * Party is no longer shown as arrow after using teleport or machetes
  * Normal units can now be properly dismissed, even if an abomination is part of your trek
  * Units will no longer be covered by the journal in events
  * Fixed trading exploit which allowed to gain standing without actually trading
  * Clicking on an item will now use the item from that specific item stack instead of just the general inventory
  * Reduced minimum diary height, so that the combat should stay playable in ever lower screen resolutions than before
  * Numeros spelling errors

# Curious Weekend! (Feb 28th - Mar 1st, 2015)

This weekend the game is completely free for everybody to play. So please share the news with your friends and let them know that they can play the game too. The URL for directly connecting to the game is [free.curious-expedition.com](http://free.curious-expedition.com).

# Alpha 6 "Tectonic Shift" (Feb 25th, 2015)

For this update we spent a lot of time changing the way the worlds are generated. This has increased replayability tremendously, since each world type now has numerous variations and difficulties. You're also able to select between much more landscape types when planning your next expedition.

* World generation
  * Increased playable worlds from 5 to 6
  * Water and mountain border regions are generated around the playable area, making the game map more organic.
  * The playable region can now have various, irregular shapes instead of just rectangular shapes as before.
  * Improved patterns of fields to make it easier to guess what kind of location a "?" is
  * The location spawning algorithm has been completely reworked to create more natural and also more interesting distribution of special locations. Also various cases of not matching fields have been fixed with this (for example lush jungles being spawned in dry forest lands).
  * More regions are available to chose from on the select expedition screen
* Art
  * New expedition select screen and markers (not final quality, but closer to what we have in mind). The destination markers are not generated randomly anymore, but more consciously placed. The color of the flag indicates its terrain type.
  * Updated the harbor screen
  * Added a night time version of the desert village
  * Added bird particles
  * New village event image
* Several new events
  * Volcanoes are no longer just eye candy, but set neighbouring tiles alight periodically
  * Geysirs can flood neighbouring tiles
  * Secret expeditions can be unlocked through special events
  * Added new village night events
  * Added new harbor event
  * Added a new look-out tower location/event
  * Added a shrine that requires a rope or climbing gear to enter
* Interface
  * Set waypoints with left click, then click again on a waypoint to start traveling or press space. Remove way points by right clicking (command-click on Mac)
  * Move around planted waypoints by drag'n'dropping them around with your mouse
  * Press space or click to accelerate the celebration screen and finish expedition screen
* Gameplay
  * Major tuning pass on travel items. Machetes, Ropes and Climbing Gear will make it much easier to traverse jungles, swamps and hills. However, one of the used items will be removed after usage, so make sure to bring plenty. The amount of travel items used for the leg is shown next to the path. Water has been added for crossing deserts.
  * The golden pyramid now gives a different amount of fame according to the level one is playing
  * One can now sell all units and not only natives at the slaver
  * Units can receive an angry status that causes them to behave differently
  * Removed the cave that required a rope to enter
  * The animal handler unit can now be recruited in villages
  * Added icons to show your active harbor quests
  * Specialists level up after each expedition
  * You can now see the toughness of your units in their info boxes
  * Increased capacity for most units, including animals
  * Stone statues always have loot
  * Defeated hostile natives now give loot
  * Removed Magnetic Pits. They will be replaced by a slightly different location in the future
  * The maximum amount of days that can be rested has been capped to four. After that you have to retrigger the resting action. (This causes more night events to occur in the game)
* Dice Challenge
  * Item dice use a different color
  * Increased number of rerolls to 3
* Added "reset stats" button to settings menu which allows to reset your unlocked characters.
* Bugfixes
  * Combat triggered blank screen
  * Fixed numerous spelling mistakes
  * Fixed crash caused by using mouse wheel on Mac Firefox
  * Party members could stand on top of each during events
  * Unspent region points were deleted when loading the game
  * Missionary could be delivered to village without triggering event

# Bugfixes (Feb 12th, 2015)
* Fixed golden pyramide was destroyable by fire
* Fixed weather balloon item
* Fixed tutorial should not use region score mechanic

# Alpha 5 "The Triumphant Return" (Feb 11th, 2015)

Another update, this time we have been focusing on adding more content through additional perks or random events. Also, and most notably, we have added a celebration screen for explorers returning from their successful expedition!

* Celebration Screen
  * Depending on how much fame you gathered a differently sized crowd will await you.
  * This screen replaces the old choose-your-perk selection.
* Lots of new events
  * Added new village night events.
  * Added new nature resting night events.
  * Added new harbor events.
  * Added non-hostile elephant zones, which can be attacked for ivory. 
  * Added a new look-out tower location/event.
  * Reworked the slaver location/event
* Villages
  * Villages will now become angry once your standing drops to zero. Angry villages will spawn groups of natives that are hostile towards you.
  * Villagers will now attack you if you deny to pay a tribute after you've been caught looting a shrine or statue.
  * Trading in native villages will increase your standing by 1 (once per village)
* General Gameplay
  * Streamlined harbor events. You will now only be offered a quest or item, a recruitable unit and then set sail becomes available (or you can purchase equipment)
  * Added tutorial prompts for combat
  * If you don't have translators in your trek (or somebody with polyglot perk) all chat texts by native people will be shown scrambled.
  * Added screenshakes for sprawling disasters
* Perks
  * Perk Multi-Talented was renamed to Polymath. Marie Curie now has polymath as a starting perk (being that she won Nobel prizes in physics AND chemistry).
  * Added new perks: Bullet Hoarder, Polyglot, Dream Visions, Lone survivor and scouting. In addition, all starting perks of the other explorers are now (potentially) available when you're offered your perks at the celebration screen
* Items
  * Added tome pages, which replace and improve the old "fetish" objects. Tome pages can be used once and then are gone. There are already quite a lot of them, make sure to try them all (at your own risk)
* Units
  * New Unit: Beduin - Can be recruited in a desert village
  * New Unit: Cultist - Be wary of their treachery, may turn into an abomination when injured. They also like to take over missions... Aleister Crowley starts with cultists by default.
  * New Unit: Abomination - Very powerful but extremely grotesque and dangerous unit. Bring enough raw meat or they will help themselves.
  * Injured units will no longer lose their capacity and still be able to carry objects just as normal
  * Native units can have a "homesick" status. If this status is active, the unit will not return home with you after you have found the golden pyramid. The homesick status will only be applied in the native units home world.
  * Changed some explorer unlock requirements. Ada is not unlocked by default anymore.
* Bugfixes
  * Fixed Save Games
  * Fixed full screen button in settings menu
  * Sometimes it was impossible to dismiss any characters from your party
  * Perk Multi-Talented/Polymath somestimes still only offered 3 choices
  * All characters should be unlockable now
  * Fixed many spelling errors. Thanks to all the suggestions in the forums :-)

# Bugfixes (Jan 27th, 2015)

* Fixed: Attacks in the dice game should be triggered by combining certain dice (for example some simple attack dice) and then pressing the action button in the center of the screen. There was a bug that sometimes actions were triggered automatically instead, which made the whole combat system more confusing.
* Fixed: Animals being attacked in combat could result in crash.
* Fixed: Even without translator it was possible to sleep in the village under certain unwanted conditions.
* Fixed: Delivering the letter sometimes triggered the wrong reaction text.

# Alpha 4 "The Curious Die" (Jan 21st, 2015)

We've been very busy working on one of the last big missing features: Combat! With this whole new dice-game mechanic, encounters and your trek units play a completely different role in the game.

* Dice Game / Combat
  * We added a new mini game to represent combat. You roll dice associated with your characters. Combining certain die faces injures your enemies.
  * You can use the ammo item to temporarily add new dice to your side
  * All standing units regain full health after a fight. All unconscious members gain injuries after a fight and can't participate in further fights until they are healed. If all of your team members go unconsious in one fight, your game ends.
  * Fighting animals grants a small standing bonus.
  * Added lots of new enemy types and loot items.
  * Added new enemy types: Crocodile, Panther, Giant Bird & Giant Crab 
  * Added back the old ZZZ system for zones, allowing you to get some head start when fleeing from a territory without being caught up again immediately.   
  * This is just the first iteration. A lot more dice combos and events will follow. Our goal is to use the system also to represent conflicts/challenges outside of just combat in future alphas.
* Added new units: The animal handler and hunting dog 
* Made support characters more specialized 
  * Animals can't be promoted anymore. Instead use the new character class animal handler to upgrade the capacity of your animals. 
  * Scouts are necessary to get the region info panel. 
  * Translators are necessary to rest in villages. 
  * Missionaries allow to sleep for free in missions. 
  * All other unit perks have their effects also improved. 
* Resting in nature takes a flexible amount of turns and will automatically continue until you have regained full sanity. You may stop resting at any point before that. This spares you from having to go through the same event multiple times to regain full sanity.
* All animal loot objects (except raw meat) will now give fame when returning them home after an expedition 
* Units with a standing bonus (natives & translator) will now grant that standing bonus at the beginning of each expedition 
* Unified unit capacity - normal humanoids now all have 1 capacity 
* Art
  * Brought Stone Circle event image to final art quality 
  * Exploring the golden pyramid now will show an image of the pyramid 
  * Pack animals now have visual variations 
* Explorer perks 
  * New perk: Multi-Talented allows to select from 4 perks instead of 3 when finishing expeditions.
  * New perk: Charismatic allows to choose from up to two new characters between expeditions, instead of one. 
  * Black market perk allows to select from 10 items now. Regular item selection has been reduced to 5.
* You can now store items in a stash at portable camp sites 
* We added the first batch for player names to the credits 
* Pressing ESC opens/closes the settings 
* Bugfixes 
  * Ida Lovelace abacus item was broken 
  * Fixed random fire/wild life spawning 
  * Various spelling fixes 
 

# Alpha 3 "Reports from the port!" (Jan 2, 2015)

Reports from the port! A happy new year to all of you. After the holidays we are back with a new update. As usual, a special thanks goes to all the people posting on our [forums](http://forums.maschinen-mensch.com) and pointing out typos and improvements.

* Characters
  * Every explorer now has their own pre-determined party/equipment setup.
  * A preview of which characters belong to which explorer is shown in the selection screen.
  * Explorers that you have beaten the game with are highlighted in the selection screen too.
* Harbor
  * There is now a special harbor location in-between expeditions. Random encounters and expedition preparation happens here.
  * The character refilling and shop interaction happens through this harbor now and you will not get offered all items anymore, but only a random sub set every time. The blackmarket perk has been changed to grant you a bigger selection of these random items. Also you may not freely chose from any unit type anymore, but instead get random requests by chracters to join your trek.
* Regions
  * When moving your mouse over a region, you get a preview about which locations can be found in that region.
  * Once you've found every location in the region, it is considered unlocked.
  * Unlocked regions are shown with a green bar in the region overview.
  * As before unlocked regions give you region points which can be used to level up your characters.
  * When zooming out using the mouse wheel or pressing minus (-) on the keyboard you can see all region infos at once.
* New ambient soundscapes for all worlds
* Sprawl System
  * Extended the fire system to handle different types of crazy spreading madness. We added desert storms and all-consuming chasms. 
  * Fire will now also restrict your viewing distance and kill trapped animals.
* Items
  * Some items will be now automatically removed after every expedition. See the item info box to see if this is the case for a specific item.
  * The camp item is created at the party position
  * When selling your items, you will get less value than their original buy value.
* Enemy behavior
  * Previously the size of the enemy zones represented their attack range, while their aggro range was a hidden internal value. We changed it so that the attack range is always 1 and the zone border now represents the aggro range.
  * In general the aggro range has been reduced. Occurances of zones randomly jumping into your path are less frequent now. This also allowed us to add more zones in general to the worlds.
* UI
  * The diary is now centered vertically, making better use of high screen resolutions.
  * We added cute animated clouds to the game.
  * There is now a 'return' button in the character selection screen.
  * Reworked the expedition selection screen a bit. This screen will probably be heavily extended in the future, allowing you to explicitly send your ship to new destinations.
* Travel Reports
  * Added journey pages which are automatically generated during gameplay and that summarize your entire game. These pages can be shared freely on the web, even with people that don't own the game. Feel free to share these on social networks (we'll add a dedicated button for soon).
* Various Bugfixes
  * Combats resulted in mostly two persons injured even though you had soldiers in your trek.
  * Fame was not calculated correctly when players traded in their own goods when equiping for the new expedition.
  * Fixed graphical glitches when opening/closing the diary.
  * Biome points don't contribute to fame anymore, thereby also fixing the double-counting that occured when they were not spent.
  * Haggle item could accidentely end up in player inventory.
  * Character info box sometimes did not close.


# Alpha 2 "Ada explores the desert" (Dec 11, 2014)

Ada explores the desert! We're excited to bring our first update to you! Thank you so much for all the feedback to our Alpha 1. A special thanks goes to all the people posting on our [forums](http://forums.maschinen-mensch.com) and pointing out typos and improvements. We've made over 230 changes since the last update, so it's impossible to list them all, but here are some of our favorites..

* Content
  * Added a brand-new desert terrain type
    * Includes the camel, your friendly but stoic pack animal
    * New desert villages
    * New desert treasure location - Grave
  * Added Ada Lovelace. Famous mathematician and probably the first programmer in the world. We had to stretch our definition of late 19th century a little bit for her, but we had to have her in the game. For this alpha we're unlocking her by default.
  * There is a new resting spot for the grasslands: the stone overhang.
  * Event images are now made up by combining territory, tile and local position information resulting in much bigger variety. In general many of the used images are still placeholders. To show you the level of quality that we are aiming for, we've updated the waterfall image to final quality. We'll continue to move images to final quality from alpha to alpha.
  * Changed behavior of horn flute - instead of removing it now distracts enemies in a greater radius.
  * Added a new camp item - allowing you to rest anywhere.
  
* Gameplay
  * Removed XP. To level up (promote) your units you will have spend region points. Region points are collected by discovering enough locations in a region until it is conquered. There are now also mini bars showing the degree of exploration for every region in the world. This is still not the final UI/gameplay design and we're  iterating on how to represent scientific work in the game. For now we also have disabled the science instruments. They should be back for Alpha 3 or 4, while we try some new ideas.
  * Events may now involve previously lost team members. "They never come back.".. or do they?
  * Indigenous members of your trek might not want to follow you back into the "civilized" world and decide to stay in their lands instead, depending on how you played.
  * Added a new anthropolgy perk which allows to gain fame by studying the native tribes.
  * Changed how the bartering (now called "haggle") skill of the Parsi trader works. Instead of giving a standard bonus you can now select a haggle item from the inventory for a one-time discount when trading.
  * Locations will no longer be marked with a "?" if there is nothing to do.
  * Tuned move costs for various field types.
  * Fire will now destroy villages - so be careful. We also limited how much fire can spread across the land.
  * Inactive zones now spawn ZZZ particles to make them easier recognizable.
  * Clicking with CTRL in barter dialogue moves only one item.

* Misc
  * Added confirmation dialogue when closing the game tab while playing.
  * Mac: Improved mouse handling and mouse scrolling.
  * Zooming in/out can be triggered via key shortcuts +/-.
  * We now also support female random names.
  * Fame can't become negative anymore.

* Bug fixing
  * Fixed various typos and improved texts.
  * Fixed being able to access unavailable actions via keyboard.
  * Improved save game handling.
  * The golden pyramid tiles were not always placed correctly, causing the pyramide to just be one tile big sometimes.
  * The capacity of animals was not correctly calculated on level-up resulting in more capacity than we aimed for.

# Alpha 1 (Nov 27, 2014)

Welcome to our Alpha release! If you have been playing in our closed alpha test, here are some changes that we've done recently.

* General Gameplay
  * Dropping to 0 sanity will no longer result in instant game over. Instead, very bad events will happen.
* Units
  * You can now choose from various perks for your main explorer when completing an expedition
  * Removed native units and the water buffalo from initial trek setup - they now have to be recruited in villages 
  * Units will now start with their level 1 perk
  * Added new unit: The cook. She is able to cook raw meat at nature camping spots
* Pack animals
  * Added new pack animal: The giant tortoise. No word on how to get it, though
  * Increased carrying capacity of donkey
  * Reduced carrying capacity of water buffalo. It also does not count as 2 units anymore
* Misc
  * Tuned random starting gear
  * Butterflies generate fame at expedition end
  * Added a settings screen for music/sound volume and fullscreen
  * Lots of other small enhancements
  * The game now works better with vertical window sizes below 600 px
