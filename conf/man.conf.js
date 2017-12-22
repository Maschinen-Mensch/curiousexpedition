config.staticKeywords = [
  'id', 'cid', 'mod', 'actionText', 'text', 'optional', 'slots',
  'actions', 'events', 'select', 'charEvents', 'storeEvents', 'partyEvents',
  'count', 'sanityEvent', 'chance', 'posPunch', 'breakPage',
  'popEvent', 'prio', 'alwaysShown', 'delayedEvent',
  'report', 'npcEvents', 'winEvents', 'failEvents', 'reqDice',
  'clearPushedEvents', 'consume', 'restoreCharacter', 'karma', 
  'funds', 'reqAge', 'fame', 'unwarpWorld', 'gameOver', 'reqFreePartyCount',
  'isAbstract', 'reqNoCombat', 'showNPC', 'reqTargetChar', 'reqDiceCharFlags',
  'posTile'
]

config.man = [
  {
    keyword: 'addZone',
    ref: "id of zone",
    _range: "max range of where zones is possibly spawned",
    _seeking: "true if zone should already be aggroed",
    _reachable: "true if must be reachable (default:false)",
    $description: "Adds a new zone to the world",
    $pos: true
  },
  {
    keyword: 'incAchievement',
    $inline: "Increases achievement counter",
    $description: "**Not usable for modders** Increments achievement counter"
  },
  {
    keyword: 'barter',
    _items: "items to be offered (in addition to the general location inventory)",
    closeEvents: "event that happens on successful deal",
    _cancelEvents: "event that happens when barter is cancelled",
    _baseValue: "value that is added to deal overall or 'funds' (default: 0)",
    _hidePartyOffer: "hides player inventory",
    _hideNPCInv: "hides npc/location inventory",
    _title: "title shown instead of 'their inventory'",
    _priceTable: "pricetable to be used",
    _globalInv: "all barter that share the same globalInv ID will share the same inventory",
    _itemEvents: "events tied to specific items",
    $description: "Starts a trading screen"
  },
  {
    keyword: 'resetGlobalInv',
    $inline: "the ID of the global inventory to remove/reset",
    $description: "Resets a global inventory"
  },
  {
    keyword: 'loot',
    items: "item list to loot",
    closeEvents: "ID of close event (or {} if no follow-up event)",
    _cancelEvents: "ID of cancel event or nothing taking event (if omitted will use the close event always)",
    _title: "title (default: 'take items')",
    _slots: "max amount of slots (default: unlimited)",
    _itemEvents: "events tied to specific items",
    $description: "Shows a menu for looting"
  },
  {
    keyword: 'startSprawl',
    ref: "id of sprawl",
    _radius: "max radius in which to spawn (default: 0)",
    _power: "power of new sprawl (default: 100)",
    _worldPower: "mutiplier for world level added to power (default: 0)",
    _count: "the number of random tiles affected (default: 1)",
    $description: "Starts a sprawl in the world",
    $pos: true
  },
  {
    keyword: 'revealTiles',
    _location: "should locations also be revealed? (default: false)",
    _radius: "radius of tiles to be revealed (default: 0)",
    _centerCam: "center camera on center position (default: false)",
    _particle: "particle to draw on each tile revealed",
    $description: "Reveals part of the map",
    $pos: true
  },
  {
    keyword: 'revealBiome',
    _LocationKnown: "if locations should become visible (default: true)",
    _particle: "particle to spawn on revealed tiles (default: none)",
    $description: "Reveals everything in a biome",
    $pos: true,
    $example: 'revealBiome: {locationKnown:false}'
  },
  {
    keyword: 'reqCanStartSprawl',
    ref: "the ID of the sprawl to be checked",
    _radius: "radius in which to check for sprawl requirements (default: 0)",
    $description: "Returns true if the specified sprawl can be started at the position",
    $pos: true
  },
  {
    keyword: 'replaceLocations',
    _range: "all locations in range will be considered (default: 0)",
    _new: "new ID of the location",
    _old: "list of location IDs that are being replaced (default: any)",
    _oldFlags: "flags of locations that are being replaced (default: any)",
    $description: "Replaces a location at that position",
    $pos: true
  },
  {
    keyword: 'replaceTiles',
    new: "new id of tile",
    old: "IDs of old tiles or ANY to replace all",
    _radius: "maximum distance to consider (default: 0)",
    _chance: "random chance for tile to be replaced (default: 1)",
    _particle: "particle to spawn on replaced tile",
    _animate: "if new tile should transition in or appear immediately (default: true)",
    $description: "Replaces one tile with another"
  },
  {
    keyword: 'deactivateZones',
    _radius: "radius in which all zones are deactivated (default: 0)",
    _turns: "the amount of turns to deactive the zones (default: 2)",
    $pos: true,
    $description: "Makes zones in a specific area inactive"
  },
  {
    keyword: 'posTile',
    _tiles: "list of tile keywords to be found",
    _locations: "list of location keywords to be found",
    _locationFlags: "location flag set that needs to fit",
    _tileFlags: "tile flag set that needs to fit",
    _biomeFlags: "biome flag set that needs to fit",
    _range: "min/max distance (default: 0..100)",
    _tileKnown: "tile is known? (default: find all)",
    _locationKnown: "location is known? (default: find all)",
    _traversable: "tile is not blocking (default: ignore)",
    _reachable: "tile is reachable (default: ignore)",
    _closest: "return closest tile, otherwise a random one",
    _showHint: "location has showHint?",
    $description: "Sets the position context to something that matches the search requirements"
  },
  {
    keyword: 'setLocationParticle',
    $inline: "sets a new particle of the location",
    $pos: true,
    $description: "Sets the particle effect of a location"
  },
  {
    keyword: 'resetLocationAge',
    $inline: "reset the location age to zero",
    $pos: true,
    $description: "Resets a locations age counter"
  },
  {
    keyword: 'reqLocation',
    _count: "which amount to validate (default: '1..')",
    _tileKnown: "if tile should be known (default: ignore)",
    _locationKnown: "if location should be far known (default: ignore)",
    _range: "max distance to location (default: 0)",
    _flags: "flags that location needs to match",
    _reachable: "checks if target is reachable (default: ignore)",
    $pos: true,
    $description: "Returns true if a matching location is found"
  },
  {
    keyword: 'reqZone',
    _count: "range for which number of zones to validate (default: '1..')",
    _range: "range in which to check for zones (default: 'world')",
    _flags: "zone flags for which to check (default: ignore)",
    $pos: true,
    $description: "Returns true if a matching zone is found"
  },
  {
    keyword: 'addLocation',
    ref: "id of location",
    _range: "range from context position or keywords 'biome' or 'world' (default: biome)",
    _animate: "if new location (and tile) should transition in or appear immediately (default: true)",
    _setPos: "sets the context position to the newly added location position (default: true)",
    $pos: true,
    $description: "Adds a location at the given position"
  },
  {
    keyword: 'camShake',
    _power: "the intensity of the screen shake (default: 1)",
    _length: "the duration in seconds (default: 0.2)",
    $description: "Shakes the screen"
  },
  {
    keyword: 'dropItems',
    $inline: "the item value overall to be randomly dropped",
    $description: "Drops items from the players inventory until a specific value is lost"
  },
  {
    keyword: 'endWorld',
    _goalFame: "if false no goal fame is awarded (default: true)",
    $description: "Ends the current expedition"
  },
  {
    keyword: 'addButterfly',
    _count: "how many butterflies are found (default: 1)",
    $description: "Adds butterflies to the partys inventory"
  },
  {
    keyword: 'regenBiome',
    _biomeId: "new biome ID for the biome. (default: keep previous)",
    $example: "regenBiome: {}",
    $description: "Replaces current biome with newly generated one"
  },
  {
    keyword: 'rest',
    sanity: "amount of sanity to regain per day. can use bonus",
    events: "one of these events is triggered after being done with resting",
    $description: "Starts resting"
  },
  {
    keyword: 'reqStatusDayAge',
    ref: "id of status",
    age: "range of day age (if status does not exist will return -1)",
    $character: true,
    $description: "Returns true if the given character has had a status for at least age days"
  },
  {
    keyword: 'removeStatusWithFlags',
    $inline: 'all statuses matching given flag set will be removed',
    $character: true,
    $example: "removeStatusWithFlags: '+sickness|+curse'",
    $description: "Removes any status on a character that matches the flags"
  },
  {
    keyword: 'reqMaxPerWorld',
    $inline: "max amount of times this event may trigger on same expedition",
    $example: "reqMaxPerWorld: 1",
    $description: "Returns true if this event has triggered fewer than the given amount of times in the current world"
  },
  {
    keyword: 'reqWorld',
    $inline: "requires the world level to be within given range",
    $example: "reqWorld: '2..3'",
    $description: "Returns true if the world level matches the given range"
  },
  {
    keyword: 'posPunch',
    _maxRange: "the maximum distance from context position (default: 2)",
    _radius: "size of area which is affected (default: 0)",
    $pos: true,
    $description: "Lets the player specify a position by clicking on the map"
  },
  {
    keyword: 'blockRivals',
    $inline: "blocks the rivals for X amount of rounds",
    $example: "blockRivals: 10",
    $description: "Blocks the rivals for X amount of turns"
  },
  {
    keyword: 'resetStatusAge',
    $inline: "reset the day counter for a status back to 0",
    $example: "resetStatusAge: true",
    $description: "Reset the day counter for a status back to 0",
  },
  {
    keyword: 'removeItem',
    $example: "removeItem: true",
    $inline: "Removes current context item from inventory",
  },
  {
    keyword: 'removeZone',
    $example: "removeZone: true",
    $zone: true,
    $inline: "Removes current context zone from map",
  },
  {
    keyword: 'removeZones',
    _radius: "radius in which all zones are removed (default: 0)",
    _flags: "type of zones to remove (default: '')",
    $description: "Removes all zones matching the criteria"
  },
  {
    keyword: 'reqWaiting',
    $inline: "wether to require waiting or not waiting",
    $example: "reqWaiting: true",
    $description: "Returns true if the partys waiting status matches"
  },
  {
    keyword: 'storeCharacter',
    $character: true,
    $inline: "Stores character in the character storage. removes character from party if character was in party."
  },
  {
    keyword: 'unstoreCharacter',
    $inline: "Removes character from character storage.",
    $character: true,
  },
  {
    keyword: 'loyalty',
    $inline: "value to add/remove to personal loyalty",
    $character: true,
    $description: "Modifies the current characters loyalty"
  },
  {
    keyword: 'cloneCharacter',
    $inline: "true if character should be cloned",
    $character: true,
    $description: "Clones a character"
  },
  {
    keyword: 'reqExplorer',
    $inline: "ID of explorer that we want to check for",
    $character: true,
    $description: "Returns true if the current character is the specified explorer"
  },
  {
    keyword: 'reqTutorial',
    $inline: "Checks if value matches being in tutorial",
  },
  {
    keyword: 'reqFame',
    $inline: "fame range to check for",
    $description: "Returns true if the range is matched"
  },
  {
    keyword: 'reqFunds',
    $inline: "funds range to check for",
    $description: "Returns true if the range is matched"
  },
  {
    keyword: 'reqWarpWorld',
    $inline: "Checks if expedition is currently in a warp world",
  },
  {
    keyword: 'showPartyCount',
    $inline: "Enables a party counter to be shown at bottom of diary",
  },
  {
    keyword: 'removeCharacter',
    $inline: "Removes the current person",
    $character: true
  },
  {
    keyword: 'turns',
    $inline: "amount of turns to wait",
    $description: "Waits for a given amount of time"
  },
  {
    keyword: 'sanity',
    $inline: "amount of sanity to add or remove",
    $description: "Changes sanity by given amount"
  },
  {
    keyword: 'teleport',
    $inline: "teleports party to given position",
    $pos: true,
  },
  {
    keyword: 'reqKarma',
    $inline: "karma range to check for. karma is manipulated by visiting altar",
    $example: "reqKarma: '5..10'",
    $description: "Checks if the required amount of karma is reached"
  },
  {
    keyword: 'compassScore',
    $inline: "change to compass score",
    $description: "Changes the compass score"
  },
  {
    keyword: 'health',
    $inline: "change to character health",
    $character: true,
    $description: "Modifies a characters health"
  },
  {
    keyword: 'forceTravel',
    $inline: "Travel to context position",
    $pos: true
  },
  {
    keyword: 'npc',
    $inline: "single NPC ID or list of NPC IDs",
    $description: "Adds npc(s) to the current context"
  },
  {
    keyword: 'setCharFlags',
    $flags: true,
    $character: true,
    $description: "Sets the current characters flags"
  },
  {
    keyword: 'setLocationFlags',
    $flags: true,
    $location: true,
    $description: "Sets the current locations flags"
  },
  {
    keyword: 'playSound',
    $inline: "single sound file or list of files of which one is chosen randomly",
    $example: "playSound: ['sound_1', 'sound_2']",
    $description: "Plays a sound effect"
  },
  {
    keyword: 'setBiomeFlags',
    $flags: true,
    $pos: true,
    $description: "Sets the flags of the biome at the contexts position"
  },
  {
    keyword: 'combat',
    refs: "enemy set that is attacking player. can also be a list of sets with relative slot probability",
    _surprise: "true if enemies get to attack first (default: false)",
    $example: "combat: {surprise:true, refs: [{slots:2, 'emy-giantScorpion':1}]}",
    $custom: true,
    $description: "Starts combat with the given properties"
  },
  {
    keyword: 'reqItemFlags',
    $inline: "A flag or flag set",
    $example: "reqItemsFlags: '+gun'",
    $flags: true,
    $description: "Returns true if at least one item in the inventory fulfills given flags"
  },
  {
    keyword: 'chat',
    id: "@id of the chat line entry",
    _chance: "the random chance for chat line to be triggered (default: 1.0)",
    $inline: "@id of the chat line entry",
    $example: "chat: {chance:0.5, id:'cl-chat'}",
    $description: "Shows a specific chat line"
  },
  {
    keyword: 'items',
    $custom: "list of random items to add or remove from party inventory",
    $example: "items: [{slots:1, 'it-chocolate':2}, {slots:2, 'it-torch':3}]",
    $description: "Makes specified changes to partys inventory"
  },
  {
    keyword: 'setPartyFlags',
    $flags: true,
    $description: "Sets the partys flags"
  },
  {
    keyword: 'playMusic',
    $custom: "list of random music tracks of which one played randomly",
    $example: "playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2']",
    $description: "Starts playing specified music"
  },
  {
    keyword: 'setStatus',
    $character: true,
    $flags: true,
    $description: "Sets/changes the context characters status flags"
  },
  {
    keyword: 'reqStatus',
    $flags: true,
    $character: true,
    $description: "Returns true if the current character matches the status flags"
  },
  {
    keyword: 'reqCharFlags',
    $flags: true,
    $description: "Returns true if a character matches the given flags"
  },
  {
    keyword: 'reqLocationFlags',
    $flags: true,
    $location: true,
    $description: "Returns true if th current location matches the given flags"
  },
  {
    keyword: 'addNPC',
    $inline: "true if context npc should be added to party",
    $description: "Adds a specified or the current contexts npc to the party"
  },
  {
    keyword: 'clearPushedEvents',
    $custom: true,
    $description: "Clears pushed events"
  },
  {
    keyword: 'removeStatus',
    $character: true,
    $description: "Removes the status which is in current context",
    $inline: "true or false"
  },
  {
    keyword: 'particle',
    $custom: "list of particles to emmit. all of them are triggered.",
    $description: "Emmits all specified particles"
  },
   {
    keyword: 'showImage',
    _src: "image source",
    _npc: "list of NPCs (default: [])",
    _npcMovement: "if NPCs should be moving, used for celebration (default: false)",
    _showMounted: "should NPCs that are mounted be drawn on their animal (default: true)",
    _showCampfire: "should an animated nightfire be shown in center of image (default: false)",
    $custom: true,
    $description: "Specifies the background image and options for the background"
  },
  {
    keyword: 'reqPartyFlags',
    $flags: true,
    $description: "Returns true if the party matches the given flags"
  },
  {
    keyword: 'addCharacter',
    id: "@id of character",
    _gender: "male or female or hybrid (default: random male/female)",
    $custom: true, // because of the custom inline event syntax
    $inline: "@id of character",
    $description: "Adds the specified character to the party"
  },
  {
    keyword: 'reqBiomeFlags',
    $flags: true,
    $description: "Returns true if the current biome matches the given flags"
  },
  {
    keyword: 'reqDifficulty',
    $inline: "range for difficulty level",
    $description: "Returns true if the current difficulty matches the range"
  },
  {
    keyword: 'pushEvent',
    $inline: "true if event should be called after other events have passed through",
    $description: "Pushes an event to be used later"
  },
  {
    keyword: 'reqTileFlags',
    $flags: true,
    $description: "Returns true if the "
  },
  {
    keyword: 'unlockCharacter',
    $inline: "@id of explorer to unlock",
    $description: "Unlocks specified character"
  },
  {
    keyword: 'warpWorld',
    $inline: "@id of world to warp to"
  },
  {
    keyword: 'reqItemsValue',
    $inline: "range for total item value sum that player has to own",
    $description: "Returns true if the partys items match the value"
  },
  {
    keyword: 'reqLoyalty',
    $inline: "range for loyalty that character should have",
    $character: true,
    $description: "Returns true if the current characters loyalty matches the range"
  },
  {
    keyword: 'reqLevel',
    $inline: "range that character level should have",
    $character: true,
    $description: "Returns true if the current characters level matches the range"
  },
  {
    keyword: 'unlockPocket',
    $inline: "pocket ID to unlock",
    $description: "Unlocks the specified pocket for the duration of the current campaign"
  },
  {
    keyword: 'reqRanking',
    $inline: "range for current party position in rival race. 0 is first place.",
    $description: "Returns true if the current party rank matches the range"
  },
  {
    keyword: 'reqStanding',
    $inline: "range for current party standing to match",
    $description: "Returns true if the current partys standing matches the range"
  },
  {
    keyword: 'setPartyStatus',
    $flags: true,
    $description: "Sets the partys status"
  },
  {
    keyword: 'setTempFlags',
    $flags: true,
    $description: "Sets temporary flags"
  },
  {
    keyword: 'reqTempFlags',
    $flags: true,
    $description: "Returns true if the current temporary flags match"
  },
  {
    keyword: 'reqWorldFlags',
    $flags: true,
    $description: "Returns true if the current worlds flags match"
  },
  {
    keyword: 'reqPartyStatus',
    $flags: true,
    $description: "Returns true if the current party flags match"
  },
  {
    keyword: 'setTileFlags',
    $flags: true,
    $description: "Sets the current tiles flags"
  },
  {
    keyword: 'reqGender',
    $inline: "check for 'female' or 'male' of character",
    $character: true,
    $description: "Returns true if the current character has the specified gender"
  },
  {
    keyword: 'ref',
    $inline: "reference to a event ID",
    $description: "A reference to another event"
  },
  {
    keyword: 'extends',
    $inline: "extends another event with ID",
    $description: "Extends specified event"
  },
  {
    keyword: 'reqSanity',
    $inline: "range to match a certain party sanity",
    $description: "Returns true if the current sanity matches the range"
  },
  {
    keyword: 'reqFlags',
    $flags: true,
    $description: "Returns true if the current flags match"
  },
  {
    keyword: 'reqStatusFlags',
    $flags: true,
    $description: "Returns true if the current status flags match"
  },
  {
    keyword: 'reqPartyCount',
    $inline: "range to match number of character in party (ignoring zero-slot characters)",
    $description: "Returns true if the partys filled slots match"
  },
  {
    keyword: 'reqHealth',
    $inline: "range to match health of character",
    $character: true,
    $description: "Returns true if the current characters health matches"
  },
  {
    keyword: 'reqTiles',
    $custom: true,
    $description: "Returns true if the current tile is"
  },
  {
    keyword: 'reqTurns',
    $inline: "range to match amount of days that have passed on expedition",
    $description: "Returns true if the current day matches the range"
  },
  {
    keyword: 'reqCharacter',
    $custom: true,
    $description: "Returns true if the specified character is part of the party"
  },
  {
    keyword: 'setWorldFlags',
    $flags: true,
    $description: "Sets the current worlds flags"
  },
  {
    keyword: 'reqDifficulty',
    $inline: "range for difficulty, 0 = easy, 1 = medium, 2 = hard",
    $description: "Returns true if the current difficulty matches the range"
  },
  {
    keyword: 'reqWorld',
    $inline: "range for world level",
    $description: "Returns true if the current world level matches the range"
  },
  {
    keyword: 'standing',
    $inline: "change to standing",
    $description: "Changes the current standing"
  },
  {
    keyword: 'popEvent',
    $custom: true,
    $description: "Pops the last pushed event and executes it"
  },
  {
    keyword: 'reqItems',
    $custom: true,
    $description: "Dictionary with set of required items"
  },
  {
    keyword: 'escape',
    $custom: true,
    $description: "Used for spefying hot air balloon escape options"
  },
  {
    keyword: 'resetPartyStatus',
    $inline: "true or false",
    $description: "Resets a status that is attached to the explorer"
  },
  {
    keyword: 'superMove',
    $inline: "true or false",
    $description: "Makes the next travel trip a free effortless travel trip."
  },
  {
    keyword: 'mapScore',
    $inline: "true or false",
    $description: "The amount of map score added or removed."
  }

]