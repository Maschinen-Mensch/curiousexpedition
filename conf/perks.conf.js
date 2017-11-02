config.entities.add([
  
// REGULAR PERKS (can be gained via leveling up)

  { 
    id: 'pk-viewDistance-1', 
    title: "txt-pk-viewDistance-1-title", 
    description: "txt-pk-viewDistance-1", 
    bonus: {viewDist: +0.3}, 
    sprite: "res_status_viewDistance.png", 
    debugCategory:'Unit Perk'
  },
  { 
    id: 'pk-viewDistance-2', 
    extends: 'pk-viewDistance-1',
    title: "txt-pk-viewDistance-2-title", 
    bonus: {viewDist: +0.45}, 
  },
  { 
    id: 'pk-viewDistance-3',
    extends: 'pk-viewDistance-1',
    title: "txt-pk-viewDistance-3-title", 
    bonus: {viewDist: +0.60}, 
  },
  { 
    id: 'pk-viewDistance-4', 
    extends: 'pk-viewDistance-1',
    title: "txt-pk-viewDistance-4-title",  
    bonus: {viewDist: +0.75}, 
  },

  // Animal handler

  { 
    id: 'pk-handlerCapacity-1',
    title: "txt-pk-handlerCapacity-1-title", 
    description: "txt-pk-handlerCapacity-1", 
    sprite: "res_status_animalWhisperer.png", 
    bonus: {animalCapacity:1},
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-handlerCapacity-2',
    extends: 'pk-handlerCapacity-1',
    bonus: {animalCapacity:2},
    title: "txt-pk-handlerCapacity-2-title", 
  },
  { 
    id: 'pk-handlerCapacity-3',
    extends: 'pk-handlerCapacity-1',
    bonus: {animalCapacity:3},
    title: "txt-pk-handlerCapacity-3-title", 
  },
  { 
    id: 'pk-handlerCapacity-4',
    extends: 'pk-handlerCapacity-1',
    bonus: {animalCapacity:4},
    title: "txt-pk-handlerCapacity-4-title", 
  },

  // Mountain Trooper

  { 
    id: 'pk-mountainTrooper-1',
    title: "txt-pk-mountainTrooper-1-title", 
    description: "txt-pk-mountainTrooper-1", 
    sprite: "res_status_climber.png",
    bonus: { moveCost: -2, reqTiles: ['tl-hill', 'tl-plateau'], },
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-mountainTrooper-2',
    extends: 'pk-mountainTrooper-1',
    title: "txt-pk-mountainTrooper-2-title",
    bonus: { moveCost: -4, reqTiles: ['tl-hill', 'tl-plateau'], }, 
  },
  { 
    id: 'pk-mountainTrooper-3',
    extends: 'pk-mountainTrooper-1',
    title: "txt-pk-mountainTrooper-3-title",
    bonus: { moveCost: -6, reqTiles: ['tl-hill', 'tl-plateau'], },
  },
  { 
    id: 'pk-mountainTrooper-4',
    extends: 'pk-mountainTrooper-1',
    title: "txt-pk-mountainTrooper-4-title",
    bonus: { moveCost: -8, reqTiles: ['tl-hill', 'tl-plateau'], },
  },

  // Translator
  { 
    id: 'pk-villageSanity-1',
    title: "txt-pk-villageSanity-1-title",
    description: "txt-pk-villageSanity-1",
    bonus: {villageSanityBonus: +20},
    sprite: "res_status_villageSanity.png",
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-villageSanity-2',
    extends: 'pk-villageSanity-1',
    title: "txt-pk-villageSanity-2-title",
    bonus: {villageSanityBonus: +30},
  },
  { 
    id: 'pk-villageSanity-3',
    extends: 'pk-villageSanity-1',
    title: "txt-pk-villageSanity-3-title",
    bonus: {villageSanityBonus: +40},
  },
  { 
    id: 'pk-villageSanity-4',
    extends: 'pk-villageSanity-1',
    title: "txt-pk-villageSanity-4-title",
    bonus: {villageSanityBonus: +50},
  },

  // Birtish Soldier
  { 
    id: 'pk-combatSanity-1',
    title: "txt-pk-combatSanity-1-title",
    description: "txt-pk-combatSanity-1",
    bonus: {combatSanity: +10},
    sprite: "res_status_combatSanity.png",
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-combatSanity-2',
    extends: 'pk-combatSanity-1',
    title: "txt-pk-combatSanity-2-title",
    bonus: {combatSanity: +15},
  },
  { 
    id: 'pk-combatSanity-3',
    extends: 'pk-combatSanity-1',
    title: "txt-pk-combatSanity-3-title",
    bonus: {combatSanity: +20},
  },
  { 
    id: 'pk-combatSanity-4',
    extends: 'pk-combatSanity-1',
    title: "txt-pk-combatSanity-4-title",
    bonus: {combatSanity: +30},
  },

  // Missionary
  { 
    id: 'pk-maxSanity-1',
    title: "txt-pk-maxSanity-1-title",
    sprite: "res_status_strongMind.png", 
    debugCategory:'Unit Perk', 
    bonus: {maxSanity: +10}, 
  },
  { 
    id: 'pk-maxSanity-2',
    extends: 'pk-maxSanity-1',
    title: "txt-pk-maxSanity-2-title", 
    bonus: {maxSanity: +20}, 
  },
  { 
    id: 'pk-maxSanity-3',
    extends: 'pk-maxSanity-1',
    title: "txt-pk-maxSanity-3-title",
    bonus: {maxSanity: +30}, 
  },
  { 
    id: 'pk-maxSanity-4',
    extends: 'pk-maxSanity-1',
    title: "txt-pk-maxSanity-4-title", 
    bonus: {maxSanity: +40}, 
  },
  { 
    id: 'pk-combatChance-1',
    title: "txt-pk-combatChance-1-title",
    description: "txt-pk-combatChance-1",
    sprite: "res_status_stealth.png", 
    bonus: {zoneEventChance: -0.20},
    debugCategory:'Unit Perk', 
  },
  { 
    id: 'pk-combatChance-2',
    extends: 'pk-combatChance-1',
    title: "txt-pk-combatChance-2-title",
    bonus: {zoneEventChance: -0.30}
  },
  { 
    id: 'pk-combatChance-3',
    extends: 'pk-combatChance-1',
    title: "txt-pk-combatChance-3-title",
    bonus: {zoneEventChance: -0.40}
  },
  { 
    id: 'pk-combatChance-4',
    extends: 'pk-combatChance-1',
    title: "txt-pk-combatChance-4-title",
    bonus: {zoneEventChance: -0.50},
  },
  { 
    id: 'pk-whiskyIncrease-1', 
    title: "txt-pk-whiskyIncrease-1-title", 
    description: "txt-pk-whiskyIncrease-1", 
    bonus: {whiskyBonus: +10}, 
    sprite: "res_status_whiskeyExpert.png", 
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-whiskyIncrease-2', 
    extends: 'pk-whiskyIncrease-1',
    title: "txt-pk-whiskyIncrease-2-title", 
    bonus: {whiskyBonus: +15}, 
  },
  { 
    id: 'pk-whiskyIncrease-3',
    extends: 'pk-whiskyIncrease-1',
    title: "txt-pk-whiskyIncrease-3-title", 
    bonus: {whiskyBonus: +20}, 
  },
  { 
    id: 'pk-whiskyIncrease-4', 
    extends: 'pk-whiskyIncrease-1',
    title: "txt-pk-whiskyIncrease-4-title", 
    bonus: {whiskyBonus: +25}, 
  },

  // Cultist
  { 
    id: 'pk-cocaIncrease-1', 
    title: "txt-pk-cocaIncrease-1-title", 
    description: "txt-pk-cocaIncrease-1", 
    bonus: {cocaBonus: +5}, 
    sprite: "res_status_occultVision.png", 
    debugCategory:'Unit Perk',
   },
  { 
    id: 'pk-cocaIncrease-2', 
    extends: 'pk-cocaIncrease-1',
    title: "txt-pk-cocaIncrease-2-title", 
    bonus: {cocaBonus: +10}, 
  },
  { 
    id: 'pk-cocaIncrease-3', 
    extends: 'pk-cocaIncrease-1',
    title: "txt-pk-cocaIncrease-3-title", 
    bonus: {cocaBonus: +15}, 
  },
  { 
    id: 'pk-cocaIncrease-4', 
    extends: 'pk-cocaIncrease-1',
    title: "txt-pk-cocaIncrease-4-title", 
    bonus: {cocaBonus: +20}, 
  },

  // Sailor
  
  { 
    id: 'pk-flare-1',
    title: "txt-pk-flare-1-title",
    description: "txt-pk-flare-1", 
    bonus: {flareRadius: +1},
    sprite: "res_status_flare.png", 
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-flare-2',
    extends: 'pk-flare-1',
    title: "txt-pk-flare-2-title",
    bonus: {flareRange: +2, flareRadius: +1},
  },
  { 
    id: 'pk-flare-3',
    extends: 'pk-flare-1',
    title: "txt-pk-flare-3-title",
    bonus: {flareRange: +3, flareRadius: +1},
  },
  { 
    id: 'pk-flare-4',
    extends: 'pk-flare-1',
    title: "txt-pk-flare-4-title",
    bonus: {flareRange: +3, flareRadius: +2},
  },

  // Trader
  { 
    id: 'pk-bartering-1',
    title: "txt-pk-bartering-1-title",
    description: "txt-pk-bartering-1",
    sprite: "res_status_haggle.png",
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-bartering-2',
    title: "txt-pk-bartering-2-title",
    extends: 'pk-bartering-1'
  },
  { 
    id: 'pk-bartering-3',
    title: "txt-pk-bartering-3-title",
    extends: 'pk-bartering-1'
  },
  { 
    id: 'pk-bartering-4',
    title: "txt-pk-bartering-4-title",
    extends: 'pk-bartering-1'
  },

  // Cook
  { 
    id: 'pk-cookSanity-1',
    title: "txt-pk-cookSanity-1-title",
    description: "txt-pk-cookSanity-1",
    flags: '+cookSanity',
    sprite: "res_status_freshAirFanatic.png",
    bonus: {cookSanity: +5},
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-cookSanity-2',
    extends: 'pk-cookSanity-1',
    title: "txt-pk-cookSanity-2-title",
    bonus: {cookSanity: +10}
  },
  { 
    id: 'pk-cookSanity-3',
    extends: 'pk-cookSanity-1',
    title: "txt-pk-cookSanity-3-title",
    bonus: {cookSanity: +15}
  },
  { 
    id: 'pk-cookSanity-4',
    extends: 'pk-cookSanity-1',
    title: "txt-pk-cookSanity-4-title",
    bonus: {cookSanity: +20}
  },

// Bedouin

  {
    id: 'pk-discoverOasis-1',
    title: "txt-pk-discoverOasis-1-title",
    description: "txt-pk-discoverOasis-1",
    sprite: "res_status_occultVision.png",
    debugCategory:'Unit Perk',
    tripEvents: {
      reqAge:1, 
      posTile: {fixtures: 'fxt-oasis', closest: true, range: '..10'},
      revealTiles: {radius:0, fixture:true, centerCam:false},
    } 
  },
  {
    id: 'pk-discoverOasis-2',
    title: "txt-pk-discoverOasis-2-title",
    extends: 'pk-discoverOasis-1',
    tripEvents: {
      reqAge:1, 
      posTile: {fixtures: 'fxt-oasis', closest: true, range: '..14'},
      revealTiles: {radius:1, fixture:true, centerCam:false},
    } 
  },
  {
    id: 'pk-discoverOasis-3',
    title: "txt-pk-discoverOasis-3-title",
    extends: 'pk-discoverOasis-1',
    tripEvents: {
      reqAge:1, 
      posTile: {fixtures: 'fxt-oasis', closest: true, range: '..18'},
      revealTiles: {radius:2, fixture:true, centerCam:false},
    } 
  },
  {
    id: 'pk-discoverOasis-4',
    title: "txt-pk-discoverOasis-4-title",
    extends: 'pk-discoverOasis-1',
    tripEvents: {
      reqAge:1, 
      posTile: {fixtures: 'fxt-oasis', closest: true, range: '..25'},
      revealTiles: {radius:2, fixture:true, centerCam:false},
    } 
  },

// Artist

  { 
    id: 'pk-artist-1',
    title: "txt-pk-artist-1-title", 
    description: "txt-pk-artist-1",
    sprite: "res_status_artist.png",
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-artist-2',
    title: "txt-pk-artist-2-title", 
    extends: 'pk-artist-1'
  },
  { 
    id: 'pk-artist-3',
    title: "txt-pk-artist-3-title", 
    extends: 'pk-artist-1'
  },
  { 
    id: 'pk-artist-4',
    title: "txt-pk-artist-4-title", 
    extends: 'pk-artist-1'
  },

// Journalist

  { 
    id: 'pk-journalist-1',
    title: "txt-pk-journalist-1-title",
    description: "txt-pk-journalist-1",
    sprite: "res_status_journalist.png",
    bonus: {fameScale: 0.05},
    debugCategory:'Unit Perk',
  },
  { 
    id: 'pk-journalist-2',
    extends: 'pk-journalist-1',
    title: "txt-pk-journalist-2-title",
    bonus: {fameScale: 0.1}
  },
  { 
    id: 'pk-journalist-3',
    extends: 'pk-journalist-1',
    title: "txt-pk-journalist-3-title",
    bonus: {fameScale: 0.15}
  },
  { 
    id: 'pk-journalist-4',
    extends: 'pk-journalist-1',
    title: "txt-pk-journalist-4-title",
    bonus: {fameScale: 0.2}
  },

// ----------------- END LEVEL EPLORER PERKS
  {
    id: 'pk-die-attack',
    title: "txt-pk-die-attack-title",
    description: "txt-pk-die-attack",
    debugCategory: 'Explorer Perk',
    isPerk: true,
    sprite: "res_status_die_attack.png",
    bonus: {dice: 'dc-attack-2'},
  },
  {
    id: 'pk-die-defend',
    title: "txt-pk-die-defend-title",
    description: "txt-pk-die-defend",
    debugCategory: 'Explorer Perk',
    isPerk: true,
    sprite: "res_status_die_defend.png",
    bonus: {dice: 'dc-defend-2'},
  },
  {
    id: 'pk-die-support',
    title: "txt-pk-die-support-title",
    description: "txt-pk-die-support",
    debugCategory: 'Explorer Perk',
    isPerk: true,
    sprite: "res_status_die_support.png",
    bonus: {dice: 'dc-support-2'},
  },
  {
    id: 'pk-pacifist',
    title: "txt-pk-pacifist-title",
    description: "txt-pk-pacifist",
    debugCategory: 'Explorer Perk',
    sprite: "res_status_loneSurvivor.png",
    bonus: {zoneEventChance: -0.25}
  },
  {
    id: 'pk-otherworldly',
    title: "txt-pk-otherworldly-title",
    description: "txt-pk-otherworldly",
    debugCategory: 'Explorer Perk',
    sprite: "res_status_loneSurvivor.png",
  },
  {
    id: 'pk-animalWhisperer',
    title: "txt-pk-animalWhisperer-title",
    description: "txt-pk-animalWhisperer",
    debugCategory: 'Explorer Perk',
    sprite: "res_status_loneSurvivor.png",
  },
  {
    id: 'pk-naturalLeader',
    title: "txt-pk-naturalLeader-title",
    description: "txt-pk-naturalLeader",
    debugCategory: 'Explorer Perk',
    sprite: "res_status_leader.png",
    bonus: {maxSanity: -30}
  },
  {
    id: 'pk-necronomicon',
    title: "txt-pk-necronomicon-title",
    description: "txt-pk-necronomicon",
    debugCategory: 'Explorer Perk',
    sprite: "res_status_necronomicon.png",
    bonus: {maxSanity: -30}
  },
  {
    id: 'pk-climber',
    title: "txt-pk-climber-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-climber",
    bonus: { moveCost: -7, reqTiles: ['tl-hill', 'tl-plateau'], },
    isPerk: true,
    sprite: "res_status_climber.png",
  },
  { 
    id: 'pk-eagleEye', 
    title: "txt-pk-eagleEye-title", 
    debugCategory: 'Explorer Perk',
    description: "txt-pk-viewDistance-1", 
    bonus: {viewDist: +0.4}, 
    isPerk: true,
    sprite: "res_status_viewDistance.png",
  },
  { 
    id: 'pk-strongMind', 
    title: "txt-pk-strongMind-title", 
    debugCategory: 'Explorer Perk',
    bonus: {maxSanity: +20}, 
    isPerk: true,
    sprite: "res_status_strongMind.png",
  },
  { 
    id: 'pk-loneSurvivor', 
    title: "txt-pk-loneSurvivor-title", 
    debugCategory: 'Explorer Perk',
    description: "txt-pk-loneSurvivor", 
    isPerk: true,
    sprite: "res_status_loneSurvivor.png",
  },
  { 
    id: 'pk-biomeInfo', 
    title: "txt-pk-biomeInfo-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-biomeInfo",
    sprite: "res_status_biomeInfo.png",
  },
  { 
    id: 'pk-polyglot', 
    title: "txt-pk-polyglot-title",
    debugCategory: 'Explorer Perk',
    tripEvents: { setCharFlags: '+translator' },
    description: "txt-pk-polyglot",
    sprite: "res_status_polyglot.png",
  },
  {
    id: 'pk-navigator',
    title: "txt-pk-navigator-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-navigator",
    bonus: {compass: +0.3},
    isPerk: true,
    sprite: "res_status_navigator.png",
  },
  {
    id: 'pk-impetus',
    title: "txt-pk-impetus-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-impetus",
    bonus: {tripCost: -0.25},
    isPerk: true,
    sprite: "res_status_navigator.png",
  },
  {
    id: 'pk-occultVision',
    title: "txt-pk-occultVision-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-occultVision",
    bonus: {stoneCircle: +2},
    isPerk: true,
    sprite: "res_status_occultVision.png",
  },
  {
    id: 'pk-dreamVisions',
    title: "txt-pk-dreamVisions-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-dreamVisions",
    sprite: "res_status_dreamVisions.png",
    tripEvents: [
      {
        slots:1, reqAge: 8,
        resetStatusAge: true,
        reqFixture: {flags:'+dreamVisions', fixtureKnown:false, range:'..25'},
        posTile: {fixtureFlags:'+dreamVisions', fixtureKnown:false, closest:true},
        revealTiles: {radius:1, fixture:true, centerCam:true, particle:'pt-magic-reveal'},
        chat: 'cl-dreamVisions',
      },
      {
        slots:5, reqAge: 8,
      },
    ],
  },
  {
    id: 'pk-butterflyEnthusiast',
    title: "txt-pk-butterflyEnthusiast-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-butterflyEnthusiast",
    bonus: {taxonomySanity: +20},
    sprite: "res_status_butterfly.png",
  },
  {
    id: 'pk-waterproof', 
    title: "txt-pk-waterproof-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-waterproof",
    bonus: { moveCost: -3, reqTileFlags: '+water'},
    isPerk: true,
    sprite: "res_status_waterproof.png",
  },
  { 
    id: 'pk-natureSanity', 
    title: "txt-pk-natureSanity-title", 
    debugCategory: 'Explorer Perk',
    description: "txt-pk-natureSanity", 
    bonus: {natureSanityBonus: +5},
    isPerk: true,
    sprite: "res_status_freshAirFanatic.png",
  },
  {
    id: 'pk-jungleExplorer', 
    title: "txt-pk-jungleExplorer-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-jungleExplorer",
    bonus: { moveCost: -3, reqTiles: ['tl-jungle-thick', 'tl-dry-jungle-thick'],},
    isPerk: true,
    sprite: "res_status_jungleExplorer.png",
  },
  {
    id: 'pk-tacticalMastery', 
    title: "txt-pk-tacticalMastery-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-tacticalMastery",
    bonus: { combatRoll:+1 },
    sprite: "res_status_tacticalMastery.png",
  },
  {
    id: 'pk-gunExpert',
    title: "txt-pk-gunExpert-title",
    debugCategory: 'Combat',
    description: "txt-pk-gunExpert",
    bonus: { gunDamage:+2 },
    isPerk: true,
    sprite: "res_status_gunExpert.png",
  },
  {
    id: 'pk-desertExpert', 
    title: "txt-pk-desertExpert-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-desertExpert",
    sprite: "res_status_desertExplorer.png",
  },
  {
    id: 'pk-desertExplorer', 
    title: "txt-pk-desertExplorer-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-desertExplorer",
    bonus: { moveCost: -4, reqTiles: 'tl-desert'},
    isPerk: true,
    sprite: "res_status_desertExplorer.png",
  },
  {
    id: 'pk-arcticExplorer', 
    title: "txt-pk-arcticExplorer-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-arcticExplorer",
    bonus: { moveCost: -4, reqTiles: 'tl-deepSnow'},
    isPerk: true,
    sprite: "res_status_arcticExplorer.png",
  },
  {
    id: 'pk-explosionExpert', 
    title: "txt-pk-explosionExpert-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-explosionExpert",
    bonus: {dynamiteBonus: +1},
    isPerk: true,
    sprite: "res_status_dynamite.png",
  },
  {
    id: 'pk-spiritualSolidarity', 
    title: "txt-pk-spiritualSolidarity-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-spiritualSolidarity",
    sprite: "res_status_spiritualSolidarity.png",
  },
  {
    id: 'pk-blackMarket', 
    title: "txt-pk-blackMarket-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-blackMarket",
    isPerk: true,
    sprite: "res_status_blackMarket.png",
  },
  {
    id: 'pk-heavyCarrier', 
    title: "txt-pk-heavyCarrier-title",
    description: "txt-pk-heavyCarrier",
    sprite: "res_status_heavyCarrier.png",
    bonus: {capacity: +2},
    isPerk: true,
    debugCategory: 'Explorer Perk',
  },
  {
    id: 'pk-goodReputation', 
    title: "txt-pk-goodReputation-title",
    description: "txt-pk-goodReputation",
    sprite: "res_status_standing.png",
    bonus: {startStanding: +4},
    isPerk: true,
    debugCategory: 'Explorer Perk',
  },
  {
    id: 'st-goodReputation', 
    title: "txt-pk-goodReputation-title",
    description: "txt-pk-goodReputation",
    sprite: "res_status_standing.png",
    bonus: {startStanding: +1},
  },
  {
    id: 'pk-charismatic',
    title: "txt-pk-charismatic-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-charismatic",
    isPerk: true,
    sprite: "res_status_charismatic.png",
  },
  {
    id: 'pk-bulletHoarder',
    title: "txt-pk-bulletHoarder-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-bulletHoarder",
    isPerk: true,
    sprite: "res_status_bulletHoarder.png",
    dayEvents: {
      reqAge: '20..',
      reqItems: {'it-markedAmmo':'..4'},
      items: {'it-markedAmmo':+1},
      resetStatusAge: true
    }
  },
  {
    id: 'pk-polymath',
    title: "txt-pk-polymath-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-polymath",
    sprite: "res_status_polymath.png",
  },
  {
    id: 'pk-careerist',
    title: "txt-pk-careerist-title",
    debugCategory: 'Explorer Perk',
    description: "txt-pk-careerist",
    isPerk: true,
    sprite: "res_status_careerist.png",
    bonus: {loyaltyBoost: +0.5}
  },
  {
    id: 'pk-healer',
    title: "txt-pk-healer-title",
    description: "txt-pk-healer",
    debugCategory: 'Explorer Perk',
    sprite: 'res_status_healer.png',
    tripEvents: {
      charEffects: { count:"any", reqCharFlags: '-animal', setStatus: '+woundTreatment'},
    },
  },
  {
    id: 'st-woundTreatment',
    title: "txt-pk-woundTreatment-title",
    debugCategory: 'generic',
    sprite: 'res_status_regeneration.png',
    bonus: {healthRegen: 0.25}
  },
  // {
  //   id: 'pk-cartographer',
  //   title: "Cartographer",
  //   debugCategory: 'perk',
  //   description: "Reveals full region when all locations have been found.",
  //   isPerk: true,
  //   sprite: "res_status_cartographer.png",
  // },
])
