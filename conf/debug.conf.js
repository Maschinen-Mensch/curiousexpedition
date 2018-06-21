config.testEvents = [

  // Debug events

  {
    id: 'evt-debug-loot',
    // text: 'We need guns. Lots of guns.',
    loot: {
      items: [
        {slots:3, 'il-loot-standard':3, 'it-jewels':1},
        {slots:1, 'il-treasure-lowValue':2, 'it-jewels':1},
        {slots:1, 'il-magic':1, 'il-tomePages':2},
      ],
      closeEvents: 'evt-leave'
    },
  },
  {
    id: 'evt-debug-teleport',
    posPunch: {maxRange: 500, radius:0},
    teleport: true
  },

  // -- Test events

  {
    id: 'evt-test-reqLocation',
    select: [
      {
        reqLocation: {flags:{shrine:true}, range:'..5', locationKnown:false},
        text: 'shrine in range'
      },
      {
        prio: 10,
        text: 'no shrine in range'
      }
    ]
  },

  {
    id: 'evt-test-reset',
    charEvents: {
      reqCharFlags: '+special',
      resetStatus: '+st-injured',
    }
  },
  {
    id: 'evt-test-applyStatus',
    charEvents: {
      reqCharFlags: '-special +humanoid',
      setStatus: '+pneumonia',
    }
  },
  {
    id: 'evt-test-reveal',
    posLocation: {range:[0,100], closest:true, farKnown: false},
    revealTiles: {radius:0, centerCam:true, particle: 'pt-magic-reveal'}
  },
  {
    id: 'evt-test-injured-cultist',
    charEvents: [
      {
        reqCharFlags: '+cultist',
        health: -5
      }
    ]
  },
  {
    id: 'evt-test-follow',
    setPartyStatus: {'st-followed-natives':true}
  },
  {
    id: 'evt-test-curse',
    charEvents: {
      reqCharFlags: '-special',
      setStatus: '+deathCurse'
    }
  },
  {
    id: 'evt-test-wait',
    turns: 3,
  },
  {
    id: 'evt-test-addLocation',
    partyEvents: [
      {addLocation: {ref:'loc-volcano-spawn-large-active', range:4}},
      {addLocation: {ref:'loc-volcano-spawn-large-active', range:4}},
    ],
  },
  {
    id: 'evt-test-addAnimal',
    text: "Choose animal:",
    actions: [
      {
        actionText: "Donkey",
        addCharacter: 'anm-donkey',
      },
      {
        actionText: "Buffalo ",
        addCharacter: 'anm-waterBuffalo',
      },
      {
        actionText: "Camel",
        addCharacter: 'anm-camel',
      },
      {
        actionText: "Tortoise",
        addCharacter: 'anm-tortoise',
      },
      {
        actionText: "Raptor",
        addCharacter: 'anm-raptor',
      },
      {
        actionText: "Parasaurolophus",
        addCharacter: 'anm-parasaurolophus',
      },
      {
        actionText: "Chasmosaurus",
        addCharacter: 'anm-chasmosaurus',
      },
    ],
  },
  {
    id: 'evt-test-standing',
    standing: -1,
  },
  {
    id: 'evt-test-kill',
    text: 'We felt dizzy',
    showImage: {src: 'evt_spec_nightCamp_1.png'},
    charEvents: {
      reqCharFlags: '-special',
      actions: {
        actionText: "Kill!",
        removeCharacter: true,
        text: "$name was gone!"          
      }
    }
  },
  {
    id: 'evt-test-addZone',
    addZone: {ref:'zn-snowStorm', range:"..8"},
  },
  {
    id: 'evt-test-fever',
    text: "Fever was making its evil rounds in our trek.",
    charEvents: [
      {
        text: '_$He_ was not feeling well.'
      }
    ]
  },
  {
    id: 'evt-test-replace',
    actionText: "ReplaceTest",
    replaceLocations: [
      {range: "..30", old:'loc-hiddenTreasure', new: 'loc-goldenTemple-grass'}
    ]
  },
  {
    id: 'evt-test-injured',
    select: {
      charEvents: {
        reqStatus: '-st-injured',
        setStatus: '+st-injured'
      }
    }
  },
  {
    id: 'evt-test-dropItems',
    text: "We lost some items",
    reqItemsValue: '30..',
    dropItems: 45
  },
  {
    id: 'evt-test-sound',
    text: 'Sound 1',
    playSound: 'thm_village_1',
    actions: {
      text: 'Sound 2',
      playSound: 'thm_cave_1',
      actions: {
        text: 'Sound 1',
        playSound: 'thm_village_1',
        actions: {
          text: 'Sound 2',
          playSound: 'thm_cave_1',
        }
      }
    }
  },
  {
    id: 'evt-test-chat',
    text: 'Chat chat chat',
    showImage: {src: 'evt_img_fxt_oldCamp.png', scale:2},
    chat: {id:'tut-1', chance:0.5},
    actions: {
      chat: 'tut-3',
      text: 'Another line'
    }
  },
  {
    id: 'evt-test-textHighlight',
    charEvents: {
      text: 'We have _some_ _highlight_ text over $name and _$name_. That is _true_! _Right_?',
    }
  },

  {
    id: 'evt-test-fumarole',
    addLocation: {ref:'loc-fumarole', range:'biome'},
    revealTiles: {radius:1, location:true, centerCam:true},
  },
  {
    id: 'evt-test-corrupt',
    partyEvents: [
      {addLocation: {ref:'loc-corrupt-spawn', range:6, setPos:false}},
      {addLocation: {ref:'loc-corrupt-spawn', range:20, setPos:false}},
      {addLocation: {ref:'loc-corrupt-spawn', range:20, setPos:false}},
    ],
    
    
  },

  {
    id: 'evt-test-fire',
    posPunch: {radius:0, maxRange:100},
    startSprawl: {ref:'spr-ice', radius:0, power:10000}
  },
  {
    id: 'evt-test-snowStorm',
    startSprawl: {ref:'spr-snowStorm', radius:1, power:5}
  },
  {
    id: 'evt-test-alwaysShown',
    text: 'Test always-shown actions',
    actions: [
      {
        actionText: "not available 1",
        // reqItems: {'it-ammo':100},
        alwaysShown: true,
        text: 'NOT AVAILABLE TEXT 1'
      },
      {
        actionText: "available2",
        text: 'AVAILABLE TEXT 2'
      }
    ]
  },
  {
    id: 'evt-test-store',
    text: 'Store/Restore testing',
    actions: [
      {
        actionText: "store",
        alwaysShown: true,
        charEvents: {
          reqCharFlags: '-special',
          setCharFlags: '+dead',
          text: "$name vanished right in front of our eyes.",
          storeCharacter:true,
        },
        select: 'evt-test-store'
      },
      {
        actionText: "info",
        alwaysShown: true,
        storeEvents: {
          count: 'any',
          text: "We felt the presence of $name but couldn't see anybody."
        },
        select: 'evt-test-store'
      },
      {
        actionText: "restore",
        alwaysShown: true,
        storeEvents: {
          text: 'We welcomed back $name! Everybody was happy.',
          restoreCharacter: true,
          reqAge: '5..10'
        },
        select: 'evt-test-store'
      },
      {
        actionText: "leave"
      }
    ]
  },
  {
    id: 'evt-test-combatQuick',
    showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
    actionText: "Hyenas", text: "Fight!",
    combat: {
      surprise: true,
      refs: {'emy-native-warrior':1}
    }
  },
  {
    id: 'evt-test-diceCombat',
    showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
    text: 'A opponent appeared!',
    actions: [
      {
        actionText: "Hyenas", text: "Fight!",
        combat: [
          {slots:2, 'emy-hyena':2},     
        ],
      },
      {
        actionText: "Mummy", text: "Fight!",
        //showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-mummy':1},     
        ],
      },
      {
        actionText: "Tiger 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-tiger':1},     
        ],
      },
      {
        actionText: "Panther 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-panther':1},     
        ],
      },
      {
        actionText: "Gorilla 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-gorilla':1},     
        ],
      },
      {
        actionText: "Crocodile 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-crocodile':1},     
        ],
      },
      {
        actionText: "Crab 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-giantCrab':1},     
        ],
      },
      {
        actionText: "Spider 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-giantSpider':1},     
        ],
      },
      {
        actionText: "Scorpion 1", text: "Fight!",
        // showImage: {src: 'evt_spec_nightCamp_1.png'},
        combat: [
          {slots:2, 'emy-giantScorpion':1},     
        ],
      },
      // {
      //   actionText: "Spider 2", text: "Fight!",
      //   showImage: {src: 'evt_spec_nightCamp_1.png'},
      //   combat: [
      //     {slots:2, 'emy-giantSpider':2},     
      //   ],
      // },
      // {
      //   actionText: "Spider 3", text: "Fight!",
      //   showImage: {src: 'evt_spec_nightCamp_1.png'},
      //   combat: [
      //     {slots:2, 'emy-giantSpider':3},     
      //   ],
      // },
      // {
      //   actionText: "Spider 4", text: "Fight!",
      //   showImage: {src: 'evt_spec_nightCamp_1.png'},
      //   combat: [
      //     {slots:2, 'emy-giantSpider':4},     
      //   ],
      // },
      // {
      //   actionText: "Tiger", text: "Fight!",
      //   combat: [ {slots:1, 'emy-tiger':1}, ],
      // },
      // {
      //   actionText: "Panther", text: "Fight!",
      //   combat: [ {slots:1, 'emy-panther':1}, ],
      // },
      // {
      //   actionText: "Gorilla", text: "Fight!",
      //   combat: [ {slots:1, 'emy-gorilla':1}, ],
      // },
      // {
      //   actionText: "Crocodile", text: "Fight!",
      //   combat: [ {slots:1, 'emy-crocodile':1}, ],
      // },
      // {
      //   actionText: "Raptor", text: "Fight!",
      //   combat: [ {slots:1, 'emy-raptor':1}, ],
      // },
      // {
      //   actionText: "TRex", text: "Fight!",
      //   combat: [ {slots:1, 'emy-trex':1}, ],
      // },
      // {
      //   actionText: "Giant Scorpion", text: "Fight!",
      //   combat: [ {slots:1, 'emy-giantScorpion':1}, ],
      // },
      // {
      //   actionText: "Giant Bird", text: "Fight!",
      //   combat: [ {slots:1, 'emy-giantBird':1}, ],
      // },
      // {
      //   actionText: "Giant Crab", text: "Fight!",
      //   combat: [ {slots:1, 'emy-giantCrab':1}, ],
      // },
      // {
      //   actionText: "Killer plant", text: "Fight!",
      //   combat: [ {slots:1, 'emy-killerPlant':1}, ],
      // },
      // {
      //   actionText: "Zombie", text: "Fight!",
      //   combat: [ {slots:1, 'emy-zombie':1}, ],
      // },
      // {
      //   actionText: "Abomination", text: "Fight!",
      //   combat: [ {slots:1, 'emy-abomination':1}, ],
      // },
    ],
  },
  {
    id: 'evt-test-report',
    text: 'This is some random event!',
    report: "Some random event occurred!"
  },
  {
    id: 'evt-test-unlockPocket',
    items: {'it-animalTooth':+20},
  },
  {
    id: 'evt-test-unlockCharacter',
    text: "We found somebody",
    unlockCharacter: 'sp-lovelace'
  },
  {
    id: 'evt-test-dropFame',
    text: "We lost fame.",
    fame: -100
  },
  {
    id: 'evt-test-warp',
    warpWorld: 'wd-warped-blessing'
  },
  {
    id: 'evt-test-tim',
    addCharacter: ['pl-tim', 'anm-dog-luis'],
  },
  {
    id: 'evt-test-customExplorer',
    addCharacter: ['sp-lietu'],
  },
  {
    id: 'evt-test-blessing',
    charEvents: {
      reqCharFlags: '-special -animal',
      setStatus: '+blessingInhumanStrength'
    }
  },
  {
    id: 'evt-test-reqDice',
    text: "We had choices",
    actions: [
      {
        actionText: "Try",
        reqDice: 'awarenes',
        text: "That's it",
        winEvents: {text: "We wins"},
        failEvents: {text: "We looses"}
      },
      {
        actionText: "Forget it",
        text: "Never mind"
      }
    ]
  },
  {
    id: 'evt-test-villageCount',
    reqLocation: {count:'1..', flags:'+village', range:'..100'}
  },
  {
    id: 'evt-test-paragraph',
    showImage: {src: 'evt_spec_nightCamp_1.png'},
    charEvents: {
      reqCharFlags: '+special',
      text: "I decided to part with $name. I could sooo return with so more valuables instead of $him."
    },
  },
  {
    id: 'evt-test-posTile',
    posTile: {range:'0..', tileKnown:false, tiles:'tl-mountain'},
    revealTiles: {radius:0, centerCam:true, particle: 'pt-magic-reveal'}
  },
  {
    id: 'evt-test-anthropologicalItem',
    items: {'it-anthropologicalStudies':2},
    incAchievement: {id:'ach-studies-collect', amount: 2},
  },
  {
    id: 'evt-test-addHomesick',
    addCharacter: {id: 'pl-native-scout', setStatus:'+homesick', setCharFlags:'+homeWorld'}
  }
]; 

var logs = {
  parse: true,
  events: true,
  report: false,
  ga: false,
  sound: false,
  eventRequirements: false,
  worldgen: true,
};

var debug = {
  sanityCheckEvents: true,

  traceAssert: true,
  enableDebugKeys: true,
  hideActionButtons: false,

  showLocationInfo: false,
  showBiomeInfo: false,
  showZoneInfo: false,
  showAgeInfo: false, // if true, age of items, statuses, locations is shown
  showFlagsInfo: true,
  showTutorial: false,
  showReport: false,

  showExtraLangs: true,

  isDemo: false,
  skipMainMenu: false, // starts game without going into main menu first
  showHitBoxes: false,

  hidePath: false,
  freePath: false, // if true path may also point to unknown areas
  skipMetrics: true,

  drawAllTiles: false,
  unlockAllExplorers: false,
  drawAllLocations: false,
  drawAllItems: false, // show all items in hall of fame

  showBorders: false,
  showViewCost: false,
  showReachable: false,
  showConnected: false,
  showSea: false,
  showPathFinder: false,
  showTileCoords: true, // if true, tile coords are shown in info field
  showTriangulationCapture: false,
  showMapLinesDebug: false,
  showCoordLines: false,
  showSprawls: false,

  onlyDrawPlayerBiome: false,   // if true, only the biome that contains the player will be rendered
  logBiomeRenderStats: false,   // logs biome rendering stats to the console every frame that anything is rendered
  logGeneralRenderStats: false,

  testParticle: 'pt-fire', // trigger this particle when pressing 'u'
  testParticleText: 'Sanity +50',

  skipExitWarning: true,
  skipPreRoll: true,

  showDebugBar: true,
  skipStartEvents: false,
  autoLevel: false, // automatically level up party for higher expeditions
  
  // skipSaveGame: false,
  forceLocalSaveGame: true,
  timeDilation: 1.0,
  eventChecks: false,

  // saveGame: "XXX",
  // testWorldValidation: 'evt-test-villageCount', // reloads world until this event does not pass

  // testLocationCount: 15,

  testTribe: 'tg-jungle',
  tribeBackground: '#4b3a32',
  testStatus: 'st-sexist',
  // testGoal: 'gol-goldenTemple-moonStone',

  outputDiaryLog: false, // if this is on, screenshots of every diary entry will be placed in a folder 'diaryLog' (electron only)

  isDevMode: true,
};
