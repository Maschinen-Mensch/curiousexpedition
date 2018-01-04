# Overview
[addZone](#{addZone) [incAchievement](#{incAchievement) [barter](#{barter) [resetGlobalInv](#{resetGlobalInv) [loot](#{loot) [startSprawl](#{startSprawl) [revealTiles](#{revealTiles) [revealBiome](#{revealBiome) [reqCanStartSprawl](#{reqCanStartSprawl) [replaceLocations](#{replaceLocations) [replaceTiles](#{replaceTiles) [deactivateZones](#{deactivateZones) [posTile](#{posTile) [setLocationParticle](#{setLocationParticle) [resetLocationAge](#{resetLocationAge) [reqLocation](#{reqLocation) [reqZone](#{reqZone) [addLocation](#{addLocation) [camShake](#{camShake) [dropItems](#{dropItems) [endWorld](#{endWorld) [addButterfly](#{addButterfly) [regenBiome](#{regenBiome) [rest](#{rest) [reqStatusDayAge](#{reqStatusDayAge) [removeStatusWithFlags](#{removeStatusWithFlags) [reqMaxPerWorld](#{reqMaxPerWorld) [reqWorld](#{reqWorld) [posPunch](#{posPunch) [blockRivals](#{blockRivals) [resetStatusAge](#{resetStatusAge) [removeItem](#{removeItem) [removeZone](#{removeZone) [removeZones](#{removeZones) [reqWaiting](#{reqWaiting) [storeCharacter](#{storeCharacter) [unstoreCharacter](#{unstoreCharacter) [loyalty](#{loyalty) [cloneCharacter](#{cloneCharacter) [reqExplorer](#{reqExplorer) [reqTutorial](#{reqTutorial) [reqFame](#{reqFame) [reqFunds](#{reqFunds) [reqWarpWorld](#{reqWarpWorld) [showPartyCount](#{showPartyCount) [removeCharacter](#{removeCharacter) [turns](#{turns) [sanity](#{sanity) [teleport](#{teleport) [reqKarma](#{reqKarma) [compassScore](#{compassScore) [health](#{health) [forceTravel](#{forceTravel) [npc](#{npc) [setCharFlags](#{setCharFlags) [setLocationFlags](#{setLocationFlags) [playSound](#{playSound) [setBiomeFlags](#{setBiomeFlags) [combat](#{combat) [reqItemFlags](#{reqItemFlags) [chat](#{chat) [items](#{items) [setPartyFlags](#{setPartyFlags) [playMusic](#{playMusic) [setStatus](#{setStatus) [reqStatus](#{reqStatus) [reqCharFlags](#{reqCharFlags) [reqLocationFlags](#{reqLocationFlags) [addNPC](#{addNPC) [clearPushedEvents](#{clearPushedEvents) [removeStatus](#{removeStatus) [particle](#{particle) [showImage](#{showImage) [reqPartyFlags](#{reqPartyFlags) [addCharacter](#{addCharacter) [reqBiomeFlags](#{reqBiomeFlags) [reqDifficulty](#{reqDifficulty) [pushEvent](#{pushEvent) [reqTileFlags](#{reqTileFlags) [unlockCharacter](#{unlockCharacter) [warpWorld](#{warpWorld) [reqItemsValue](#{reqItemsValue) [reqLoyalty](#{reqLoyalty) [reqLevel](#{reqLevel) [unlockPocket](#{unlockPocket) [reqRanking](#{reqRanking) [reqStanding](#{reqStanding) [setPartyStatus](#{setPartyStatus) [setTempFlags](#{setTempFlags) [reqTempFlags](#{reqTempFlags) [reqWorldFlags](#{reqWorldFlags) [reqPartyStatus](#{reqPartyStatus) [setTileFlags](#{setTileFlags) [reqGender](#{reqGender) [ref](#{ref) [extends](#{extends) [reqSanity](#{reqSanity) [reqFlags](#{reqFlags) [reqStatusFlags](#{reqStatusFlags) [reqPartyCount](#{reqPartyCount) [reqHealth](#{reqHealth) [reqTiles](#{reqTiles) [reqTurns](#{reqTurns) [reqCharacter](#{reqCharacter) [setWorldFlags](#{setWorldFlags) [reqDifficulty](#{reqDifficulty) [reqWorld](#{reqWorld) [standing](#{standing) [popEvent](#{popEvent) [reqItems](#{reqItems) [escape](#{escape) [resetPartyStatus](#{resetPartyStatus) [superMove](#{superMove) [mapScore](#{mapScore) 

# Commands
## addZone

Adds a new zone to the world
* **ref** id of zone
* **range** (*optional*) max range of where zones is possibly spawned
* **seeking** (*optional*) true if zone should already be aggroed
* **reachable** (*optional*) true if must be reachable (default:false)

## incAchievement

**Not usable for modders** Increments achievement counter

## barter

Starts a trading screen
* **items** (*optional*) items to be offered (in addition to the general location inventory)
* **closeEvents** event that happens on successful deal
* **cancelEvents** (*optional*) event that happens when barter is cancelled
* **baseValue** (*optional*) value that is added to deal overall or 'funds' (default: 0)
* **hidePartyOffer** (*optional*) hides player inventory
* **hideNPCInv** (*optional*) hides npc/location inventory
* **title** (*optional*) title shown instead of 'their inventory'
* **priceTable** (*optional*) pricetable to be used
* **globalInv** (*optional*) all barter that share the same globalInv ID will share the same inventory
* **itemEvents** (*optional*) events tied to specific items

## resetGlobalInv

Resets a global inventory

## loot

Shows a menu for looting
* **items** item list to loot
* **closeEvents** ID of close event (or {} if no follow-up event)
* **cancelEvents** (*optional*) ID of cancel event or nothing taking event (if omitted will use the close event always)
* **title** (*optional*) title (default: 'take items')
* **slots** (*optional*) max amount of slots (default: unlimited)
* **itemEvents** (*optional*) events tied to specific items

## startSprawl

Starts a sprawl in the world
* **ref** id of sprawl
* **radius** (*optional*) max radius in which to spawn (default: 0)
* **power** (*optional*) power of new sprawl (default: 100)
* **worldPower** (*optional*) mutiplier for world level added to power (default: 0)
* **count** (*optional*) the number of random tiles affected (default: 1)

## revealTiles

Reveals part of the map
* **location** (*optional*) should locations also be revealed? (default: false)
* **radius** (*optional*) radius of tiles to be revealed (default: 0)
* **centerCam** (*optional*) center camera on center position (default: false)
* **particle** (*optional*) particle to draw on each tile revealed

## revealBiome

Reveals everything in a biome
* **LocationKnown** (*optional*) if locations should become visible (default: true)
* **particle** (*optional*) particle to spawn on revealed tiles (default: none)

```
revealBiome: {locationKnown:false}
````

## reqCanStartSprawl

Returns true if the specified sprawl can be started at the position
* **ref** the ID of the sprawl to be checked
* **radius** (*optional*) radius in which to check for sprawl requirements (default: 0)

## replaceLocations

Replaces a location at that position
* **range** (*optional*) all locations in range will be considered (default: 0)
* **new** (*optional*) new ID of the location
* **old** (*optional*) list of location IDs that are being replaced (default: any)
* **oldFlags** (*optional*) flags of locations that are being replaced (default: any)

## replaceTiles

Replaces one tile with another
* **new** new id of tile
* **old** IDs of old tiles or ANY to replace all
* **radius** (*optional*) maximum distance to consider (default: 0)
* **chance** (*optional*) random chance for tile to be replaced (default: 1)
* **particle** (*optional*) particle to spawn on replaced tile
* **animate** (*optional*) if new tile should transition in or appear immediately (default: true)

## deactivateZones

Makes zones in a specific area inactive
* **radius** (*optional*) radius in which all zones are deactivated (default: 0)
* **turns** (*optional*) the amount of turns to deactive the zones (default: 2)

## posTile

Sets the position context to something that matches the search requirements
* **tiles** (*optional*) list of tile keywords to be found
* **locations** (*optional*) list of location keywords to be found
* **locationFlags** (*optional*) location flag set that needs to fit
* **tileFlags** (*optional*) tile flag set that needs to fit
* **biomeFlags** (*optional*) biome flag set that needs to fit
* **range** (*optional*) min/max distance (default: 0..100)
* **tileKnown** (*optional*) tile is known? (default: find all)
* **locationKnown** (*optional*) location is known? (default: find all)
* **traversable** (*optional*) tile is not blocking (default: ignore)
* **reachable** (*optional*) tile is reachable (default: ignore)
* **closest** (*optional*) return closest tile, otherwise a random one
* **showHint** (*optional*) location has showHint?

## setLocationParticle

Sets the particle effect of a location

## resetLocationAge

Resets a locations age counter

## reqLocation

Returns true if a matching location is found
* **count** (*optional*) which amount to validate (default: '1..')
* **tileKnown** (*optional*) if tile should be known (default: ignore)
* **locationKnown** (*optional*) if location should be far known (default: ignore)
* **range** (*optional*) max distance to location (default: 0)
* **flags** (*optional*) flags that location needs to match
* **reachable** (*optional*) checks if target is reachable (default: ignore)

## reqZone

Returns true if a matching zone is found
* **count** (*optional*) range for which number of zones to validate (default: '1..')
* **range** (*optional*) range in which to check for zones (default: 'world')
* **flags** (*optional*) zone flags for which to check (default: ignore)

## addLocation

Adds a location at the given position
* **ref** id of location
* **range** (*optional*) range from context position or keywords 'biome' or 'world' (default: biome)
* **animate** (*optional*) if new location (and tile) should transition in or appear immediately (default: true)
* **setPos** (*optional*) sets the context position to the newly added location position (default: true)

## camShake

Shakes the screen
* **power** (*optional*) the intensity of the screen shake (default: 1)
* **length** (*optional*) the duration in seconds (default: 0.2)

## dropItems

Drops items from the players inventory until a specific value is lost

## endWorld

Ends the current expedition
* **goalFame** (*optional*) if false no goal fame is awarded (default: true)

## addButterfly

Adds butterflies to the partys inventory
* **count** (*optional*) how many butterflies are found (default: 1)

## regenBiome

Replaces current biome with newly generated one
* **biomeId** (*optional*) new biome ID for the biome. (default: keep previous)

```
regenBiome: {}
````

## rest

Starts resting
* **sanity** amount of sanity to regain per day. can use bonus
* **events** one of these events is triggered after being done with resting

## reqStatusDayAge

Returns true if the given character has had a status for at least age days
* **ref** id of status
* **age** range of day age (if status does not exist will return -1)

## removeStatusWithFlags

Removes any status on a character that matches the flags

```
removeStatusWithFlags: '+sickness|+curse'
````

## reqMaxPerWorld

Returns true if this event has triggered fewer than the given amount of times in the current world

```
reqMaxPerWorld: 1
````

## reqWorld

Returns true if the world level matches the given range

```
reqWorld: '2..3'
````

## posPunch

Lets the player specify a position by clicking on the map
* **maxRange** (*optional*) the maximum distance from context position (default: 2)
* **radius** (*optional*) size of area which is affected (default: 0)

## blockRivals

Blocks the rivals for X amount of turns

```
blockRivals: 10
````

## resetStatusAge

Reset the day counter for a status back to 0

```
resetStatusAge: true
````

## removeItem

Removes current context item from inventory

```
removeItem: true
````

## removeZone

Removes current context zone from map

```
removeZone: true
````

## removeZones

Removes all zones matching the criteria
* **radius** (*optional*) radius in which all zones are removed (default: 0)
* **flags** (*optional*) type of zones to remove (default: '')

## reqWaiting

Returns true if the partys waiting status matches

```
reqWaiting: true
````

## storeCharacter

Stores character in the character storage. removes character from party if character was in party.

## unstoreCharacter

Removes character from character storage.

## loyalty

Modifies the current characters loyalty

## cloneCharacter

Clones a character

## reqExplorer

Returns true if the current character is the specified explorer

## reqTutorial

Checks if value matches being in tutorial

## reqFame

Returns true if the range is matched

## reqFunds

Returns true if the range is matched

## reqWarpWorld

Checks if expedition is currently in a warp world

## showPartyCount

Enables a party counter to be shown at bottom of diary

## removeCharacter

Removes the current person

## turns

Waits for a given amount of time

## sanity

Changes sanity by given amount

## teleport

teleports party to given position

## reqKarma

Checks if the required amount of karma is reached

```
reqKarma: '5..10'
````

## compassScore

Changes the compass score

## health

Modifies a characters health

## forceTravel

Travel to context position

## npc

Adds npc(s) to the current context

## setCharFlags

Sets the current characters flags

## setLocationFlags

Sets the current locations flags

## playSound

Plays a sound effect

```
playSound: ['sound_1', 'sound_2']
````

## setBiomeFlags

Sets the flags of the biome at the contexts position

## combat

Starts combat with the given properties
* **refs** enemy set that is attacking player. can also be a list of sets with relative slot probability
* **surprise** (*optional*) true if enemies get to attack first (default: false)

```
combat: {surprise:true, refs: [{slots:2, 'emy-giantScorpion':1}]}
````

## reqItemFlags

Returns true if at least one item in the inventory fulfills given flags

```
reqItemsFlags: '+gun'
````

## chat

Shows a specific chat line
* **id** @id of the chat line entry
* **chance** (*optional*) the random chance for chat line to be triggered (default: 1.0)

```
chat: {chance:0.5, id:'cl-chat'}
````

## items

Makes specified changes to partys inventory

```
items: [{slots:1, 'it-chocolate':2}, {slots:2, 'it-torch':3}]
````

## setPartyFlags

Sets the partys flags

## playMusic

Starts playing specified music

```
playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2']
````

## setStatus

Sets/changes the context characters status flags

## reqStatus

Returns true if the current character matches the status flags

## reqCharFlags

Returns true if a character matches the given flags

## reqLocationFlags

Returns true if th current location matches the given flags

## addNPC

Adds a specified or the current contexts npc to the party

## clearPushedEvents

Clears pushed events

## removeStatus

Removes the status which is in current context

## particle

Emmits all specified particles

## showImage

Specifies the background image and options for the background
* **src** (*optional*) image source
* **npc** (*optional*) list of NPCs (default: [])
* **npcMovement** (*optional*) if NPCs should be moving, used for celebration (default: false)
* **showMounted** (*optional*) should NPCs that are mounted be drawn on their animal (default: true)
* **showCampfire** (*optional*) should an animated nightfire be shown in center of image (default: false)

## reqPartyFlags

Returns true if the party matches the given flags

## addCharacter

Adds the specified character to the party
* **id** @id of character
* **gender** (*optional*) male or female or hybrid (default: random male/female)

## reqBiomeFlags

Returns true if the current biome matches the given flags

## reqDifficulty

Returns true if the current difficulty matches the range

## pushEvent

Pushes an event to be used later

## reqTileFlags

Returns true if the 

## unlockCharacter

Unlocks specified character

## warpWorld

@id of world to warp to

## reqItemsValue

Returns true if the partys items match the value

## reqLoyalty

Returns true if the current characters loyalty matches the range

## reqLevel

Returns true if the current characters level matches the range

## unlockPocket

Unlocks the specified pocket for the duration of the current campaign

## reqRanking

Returns true if the current party rank matches the range

## reqStanding

Returns true if the current partys standing matches the range

## setPartyStatus

Sets the partys status

## setTempFlags

Sets temporary flags

## reqTempFlags

Returns true if the current temporary flags match

## reqWorldFlags

Returns true if the current worlds flags match

## reqPartyStatus

Returns true if the current party flags match

## setTileFlags

Sets the current tiles flags

## reqGender

Returns true if the current character has the specified gender

## ref

A reference to another event

## extends

Extends specified event

## reqSanity

Returns true if the current sanity matches the range

## reqFlags

Returns true if the current flags match

## reqStatusFlags

Returns true if the current status flags match

## reqPartyCount

Returns true if the partys filled slots match

## reqHealth

Returns true if the current characters health matches

## reqTiles

Returns true if the current tile is

## reqTurns

Returns true if the current day matches the range

## reqCharacter

Returns true if the specified character is part of the party

## setWorldFlags

Sets the current worlds flags

## reqDifficulty

Returns true if the current difficulty matches the range

## reqWorld

Returns true if the current world level matches the range

## standing

Changes the current standing

## popEvent

Pops the last pushed event and executes it

## reqItems

Dictionary with set of required items

## escape

Used for spefying hot air balloon escape options

## resetPartyStatus

Resets a status that is attached to the explorer

## superMove

Makes the next travel trip a free effortless travel trip.

## mapScore

The amount of map score added or removed.


