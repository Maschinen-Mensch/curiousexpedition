config.entities.add([

// FIXTURES

  {
    id: 'fxt-corrupt-spawn',
    debugCategory: 'spawner',
    spawnEvents: {
      startSprawl: {ref:'spr-corrupt', radius:1, power:4},
      replaceFixtures: {new:'fxt-monsterDen-giantSpiders'}
    },
  },

  {
    id: 'fxt-monsterDen-giantSpiders',
    name: "txt-fxt-monsterDen-giantSpiders-name",
    debugColor: 'lightgray',
    sprite: "res_fxt_monsterDen.png",
    setFixtureFlags: '+caveTypeMonsterDenGiantSpiders',
    setNeighbors: ['tl-corrupted-jungle-thick', 'tl-corrupted-jungle-thick', 'tl-corrupted-river', 'tl-corrupted-river', 'tl-corrupted-river-shallow', 'tl-corrupted-jungle-thick' ],
    setTile: 'tl-corrupted-mountain',
    actions: 'evt-monsterDen-giantSpiders-approach',
    spawnEvents: [
      {slots:1, setFixtureFlags: '+opening -explored'},
      {slots:20, setFixtureFlags: '-opening -explored'},
    ],
    dayEvents: [
      {
        slots: 1,
        reqFixtureFlags: '-explored',
        partyEvents: [
          {reqZone: {flags:'+giantSpiders', range:'..8', count:'0'}},
        ],
        addZone: {ref:'zn-giantSpiders', range:1, seeking:true}
      },
      { slots:5 }
    ],
  },
  {
    id: 'fxt-altar-corrupted',
    name: "txt-fxt-altar-name",
    debugCategory: 'special',
    debugColor: 'red',
    reqBiomeFlags: '+corrupted',
    dist: 20,
    flags: '+altar +dreamVisions',
    sprite: [
      {ref:'res_fxt_altar_corrupted.png'},
    ],
    setTile: [
      {ref:'tl-corrupted-jungle-thick'},
    ],
    setNeighbors: [
      {count:4, ref:'tl-corrupted-jungle-thick'},
    ],
    actions: 'evt-altar-corrupted-approach',
  },

  // EVENTS

  {
    id: 'evt-altar-corrupted-approach',
    actionText: "txt-evt-altar-approach-action",
    reqFixtureFlags: '-looted',
    showImage: {src: 'evt_fxt_altar_corrupted.png', type:'day'},
    chat: 'cl-scaryPlace',
    playMusic: ['thm_nature_night_campfire_dark_2'],
    text: 'txt-evt-altar-corrupted-approach',
    actions: [
      'evt-altar-corrupted-loot',
      'evt-leave',
    ],
  },
  {
    id: 'evt-altar-corrupted-loot',
    actionText: 'txt-act-loot-action',
    loot: {
      items: [
        {'it-bloodCrown':1},
      ],
      close: 'evt-altar-corrupted-loot-taken',
      cancel: 'evt-leave',
    },
  },
  {
    id: 'evt-altar-corrupted-loot-taken',
    setFixtureFlags: '+looted',
    text: 'txt-evt-altar-corrupted-loot-taken',
    incAchievement: "ach-blood-crown",
    actions: [
      {
        actionText: 'txt-base-continue',
        showImage: {src: 'evt_spec_space.png', showMounted:false},
        text: "txt-st-portalReturn",
        setPartyStatus: '-portalReturn',
        actions: {unwarpWorld: true},
      }
    ]
  },
  {
    id: 'evt-monsterDen-giantSpiders-approach',
    reqFixtureFlags: '-explored',
    partyEvents: [
      {
        optional: true,
        reqItems: {'it-bloodCrown':1},
        setFixtureFlags: '-opening',
      },
    ],
    actionText: "txt-evt-altar-approach-action",
    playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2'],
    showImage: {src: 'evt_fxt_monsterDen_corrupted.png', type:'day'},
    text: "txt-evt-monsterDen-giantSpiders-approach",
    report: "txt-evt-monsterDen-giantSpiders-approach-report",
    chat: 'cl-monsterDen-approach',
    actions: [
      'evt-monsterDen-giantSpiders-explore-torch',
      'evt-monsterDen-giantSpiders-explore-pumpkinLantern',
      'evt-monsterDen-giantSpiders-explore-noTorch',
      'evt-leave'
    ]
  },
  {
    id: 'evt-monsterDen-giantSpiders-explore-torch',
    reqItems: {'it-torch':1}, items: {'it-torch':-1},
    actionText: "txt-evt-cave-explore-torch-action", alwaysShown: true,
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    text: "txt-evt-cave-explore-torch",
    select: 'evt-monsterDen-giantSpiders-approach-initiative',
  },
  {
    id: 'evt-monsterDen-giantSpiders-explore-pumpkinLantern',
    reqItems: {'it-pumpkinLantern':1},
    actionText: "txt-evt-cave-explore-pumpkinLantern-action",
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    text: "txt-evt-cave-explore-pumpkinLantern",
    select: 'evt-monsterDen-giantSpiders-approach-initiative',
  },
  {
    id: 'evt-monsterDen-giantSpiders-explore-noTorch',
    actionText: "txt-evt-cave-explore-noTorch-action",
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    showImage: {src: 'evt_fxt_cave_darkness.png', type:'day'},
    text: "txt-evt-cave-explore-noTorch",
    reqDice: 'awarenes',
    winEvents: [
      { 
        setFixtureFlags: '+initiative',
        select: 'evt-monsterDen-giantSpiders-approach-initiative',
      },
    ],
    failEvents: [
      { 
        setFixtureFlags: '-initiative',
        select: 'evt-monsterDen-giantSpiders-approach-noInitiative',
      },
    ],
  },
  {
    id: 'evt-monsterDen-giantSpiders-startCombat',
    actionText: 'txt-evt-cave-ghostsQuest-action',
    partyEvents: [
      { optional: true, reqFixtureFlags: '+opening', showImage: {src: 'evt_fxt_cave_spiders_opening.png'} },
      { optional: true, reqFixtureFlags: '-opening', showImage: {src: 'evt_fxt_cave_spiders.png'} },
      {
        optional: true,
        reqFixtureFlags: '+initiative',
        select: [
          {reqDifficulty: '0',   reqWorld: '0..',  combat: {surprise: false, refs: {'emy-giantSpider':2}, 
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '1',   reqWorld: '0..',  combat: {surprise: false, refs: {'emy-giantSpider':3},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '1',   reqWorld: '3..',  combat: {surprise: false, refs: {'emy-giantSpider':4},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '2',   reqWorld: '0..',  combat: {surprise: false, refs: {'emy-giantSpider':4},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '2',   reqWorld: '3..',  combat: {surprise: false, refs: {'emy-giantSpider':5},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
        ],
      },
      {
        optional: true,
        reqFixtureFlags: '-initiative',
        select: [
          {reqDifficulty: '0',   reqWorld: '0..',  combat: {surprise: true, refs: {'emy-giantSpider':2},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '1',   reqWorld: '0..',  combat: {surprise: true, refs: {'emy-giantSpider':3},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '1',   reqWorld: '3..',  combat: {surprise: true, refs: {'emy-giantSpider':4},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '2',   reqWorld: '0..',  combat: {surprise: true, refs: {'emy-giantSpider':4},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
          {reqDifficulty: '2',   reqWorld: '3..',  combat: {surprise: true, refs: {'emy-giantSpider':5},
            win: 'evt-monsterDen-giantSpiders-combatSuccess', flee: 'evt-monsterDen-giantSpiders-combatFail'} },
        ],
      },
    ],    
  },

  {
    id: 'evt-monsterDen-giantSpiders-approach-initiative',
    partyEvents: [
      { optional: true, reqFixtureFlags: '+opening', showImage: {src: 'evt_fxt_cave_spiders_opening.png'} },
      { optional: true, reqFixtureFlags: '-opening', showImage: {src: 'evt_fxt_cave_spiders.png'} },
    ],
    text: "txt-evt-monsterDen-giantSpiders-approach-initiative",
    chat: 'cl-monsterDen-inititative',
    setFixtureFlags: '+initiative',
    actions: [
      'evt-monsterDen-giantSpiders-startCombat',
    ]
  },
  {
    id: 'evt-monsterDen-giantSpiders-approach-noInitiative',
    showImage: {src: 'evt_fxt_cave_darkness.png', type:'day'},
    text: "txt-evt-monsterDen-giantSpiders-approach-noInitiative",
    chat: 'cl-monsterDen-noInititative',
    actions: [
      'evt-monsterDen-giantSpiders-startCombat',
    ]
  },
  {
    id: 'evt-monsterDen-giantSpiders-combatSuccess',
    loot: {
        items: {},
        close: 'evt-monsterDen-giantSpiders-combatAftermath',
        cancel: 'evt-monsterDen-giantSpiders-combatAftermath'
        }
  },
  {
    id: 'evt-monsterDen-giantSpiders-combatFail',
    sanity: -20,
    select: 'evt-monsterDen-giantSpiders-explored-leave'
  },
  {
    id: 'evt-monsterDen-giantSpiders-combatAftermath',
    select: [
      {
        // no opening, nothing happens
        reqFixtureFlags: '-opening',
        select: 'evt-monsterDen-giantSpiders-explored-leave',
      },
      {
        reqFixtureFlags: '+opening',
        text: "txt-evt-monsterDen-giantSpiders-opening",
        actions: [
          'evt-monsterDen-giantSpiders-opening-explore',
          'evt-monsterDen-giantSpiders-explored-leave',
        ],
      },
    ],
  },
  {
    id: 'evt-monsterDen-giantSpiders-opening-explore',
    actionText: "txt-evt-opening-explore",
    replaceTiles: [{radius:0, old: 'tl-corrupted-mountain', new: 'tl-mountainTraversable'}],
    setFixtureFlags: '+explored',
    report: "txt-evt-monsterDen-giantSpiders-opening-explore-report",
    setPartyStatus: '+portalReturn',
    warpWorld: 'wd-warped-corrupted', 
  },
  {
    id: 'evt-monsterDen-giantSpiders-explored-leave',
    actionText: "txt-evt-cave-explored-leave-action",
    setFixtureFlags: '+explored',
    replaceTiles: [{radius:0, old: 'tl-corrupted-mountain', new: 'tl-mountainTraversable'}],
    teleport: true,
    select: 'evt-leave',
  },

// ITEMS

  {
    id: 'it-bloodCrown',
    name: "txt-it-bloodCrown-name",
    description: "txt-it-bloodCrown",
    debugCategory: 'magic',
    sprite: 'it_special_bloodCrown.png',
    maxStack: 1,
    value: {
      base: 80,
      village: 10,
      karma: 50,
    },
    dice: 'dc-bloodCrown',
    isWeapon: true,
  },


// SPAWLS

  {
    id: 'spr-corrupt',
    defaultLifeTime: 1,
    defaultChance: 0.6,
    defaultBurnedTile: 'tl-corrupted-plains',
    removeFixture: false,
    particle: 'pt-corrupt',
    viewCost: 0.0,
    blockZone: true,
  },

// PARTICLE

  {
    id: 'pt-corrupt',
    timer: [0.3, 0.4],
    offsetY: [-35, 35],
    offsetX: [-35, 35],
    count: 2, 
    imgSrc: ['pt_corrupt_1.png', 'pt_corrupt_2.png', 'pt_corrupt_3.png', 'pt_corrupt_4.png', 'pt_corrupt_5.png', 'pt_corrupt_6.png'],
    weight: -25,
    maxTime: 1.6,
    fadeStart: 0.5,
    isAbsolute: false
  },

  // POCKET

  {
    id: 'pck-warped-corrupted', 
    name: "txt-pck-warped-corrupted-name",
    flags: '+fantastic +warped +corrupted',
    ambientSound: 'sfx_loop_corrupt_1',
    borderBiome: ['bio-outside-void'],
    fixtures: [
      {ref: 'fxt-village-bones'},
    ],
    biomes: [
      {ref: 'bio-warped-corrupted'},
    ],
  },

  // BIOME

  {
    id: 'bio-warped-corrupted', 
    name: "txt-bio-warped-corrupted-name",
    flags: '+corrupted +warped',
    eventImg: {
      day:'evt_bio_corrupted_1.png', 
      night:'evt_bio_corrupted_1.png'
    },
    terrain: [
      {perlin: 0.85,  tile: 'tl-corrupted-river'},
      {perlin: 0.76,  tile: 'tl-corrupted-river-shallow'},
      {perlin: 0.74,  tile: 'tl-corrupted-plains'},
      {perlin: 0.68,  tile: 'tl-corrupted-jungle-thick'},
      {perlin: 0.65,  tile: 'tl-corrupted-river'},
      {perlin: 0.60,  tile: 'tl-corrupted-mountain'},
      {perlin: 0.55,  tile: 'tl-corrupted-jungle-light'},
      {perlin: 0.50,  tile: 'tl-corrupted-stoneForest'},
      {perlin: 0.44,  tile: 'tl-corrupted-plains'},
      {perlin: 0.42,  tile: 'tl-hill'},
      {perlin: 0.40,  tile: 'tl-corrupted-mountain'},
      {perlin: 0.36,  tile: 'tl-corrupted-stoneForest'},
      {perlin: 0.34,  tile: 'tl-hill'},
      {perlin: 0.33,  tile: 'tl-corrupted-jungle-thick'},
      {perlin: 0.31,  tile: 'tl-corrupted-plains'},
      {perlin: 0.29,  tile: 'tl-corrupted-river-shallow'},
      {perlin: 0.00,  tile: 'tl-corrupted-river'},
    ],
    fixtures: [
      {select: 1, ref: 'fxt-altar-corrupted'},
    ],
    zones: [
      {select: 7, group: [
        {slots: 4, ref: 'zn-giantSpiders'},
        {slots: 4, ref: 'zn-giantSpiders'},
        {slots: 4, ref: 'zn-giantSpiders'},
        {slots: 4, ref: 'zn-giantSpiders'},
        {slots: 4, ref: 'zn-giantSpiders'},
        {slots: 2, ref: 'zn-zombiePygmy'},
        {slots: 2, ref: 'zn-zombiePygmy'},
        {slots: 2, ref: 'zn-zombiePygmy'},
        {slots: 2, ref: 'zn-zombiePygmy'},
        {slots: 2, ref: 'zn-zombiePygmy'},
        {slots: 2, ref: 'zn-zombiePygmy'},
        {slots: 1, ref: 'zn-abomination'},
        {slots: 1, ref: 'zn-abomination'},
        {slots: 1, ref: 'zn-abomination'},
        {slots: 1, ref: 'zn-abomination'},
        {slots: 1, ref: 'zn-abomination'},
      ]},
    ],
  },


  // TILES

  {
    id: 'tl-corrupted-plains',
    name: "txt-tl-corrupted-plains",
    sprites: [
      "res_tile_corrupted_plains_1.png",
      "res_tile_corrupted_plains_2.png",
      "res_tile_corrupted_plains_3.png",
      "res_tile_corrupted_plains_4.png",
      "res_tile_corrupted_plains_5.png",
      "res_tile_corrupted_plains_6.png",
      "res_tile_corrupted_plains_7.png",
    ],
    borderImgIdx: 29,
    borderPrio: 11,
    level: 0,
    viewCost: 0.15,
    moveCost: 1,
    eventImg: {
      day: 'evt_tile_corrupted_plains_1.png',
      night: 'evt_tile_corrupted_plains_1.png',
    },
    moveSounds: ['sfx_move_dry_1', 'sfx_move_dry_2', 'sfx_move_dry_3'],
    travelParticle: 'pt-travel-dry',
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass'},
      {id:'spr-dry',  burnedTile: 'tl-desert'},
      {id:'spr-fire', chance:0.5, lifeTime:6, burnedTile: 'tl-scorchedEarth'},
      {id:'spr-chasm', burnedTile: 'tl-pit-dry'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-plains'},
    ]
  },
  {
    id: 'tl-corrupted-jungle-thick',
    name: "txt-tl-corrupted-jungle-thick",
    flags: '+jungle',
    sprites: [
      "res_tile_corrupted_jungle_thick_1.png",
      "res_tile_corrupted_jungle_thick_2.png",
      "res_tile_corrupted_jungle_thick_3.png",
      "res_tile_corrupted_jungle_thick_4.png",
      "res_tile_corrupted_jungle_thick_5.png",
      "res_tile_corrupted_jungle_thick_6.png",
      "res_tile_corrupted_jungle_thick_7.png",
    ],
    borderImgIdx: 30,
    borderPrio: 17,
    viewCost: 0.4,
    moveCost: {default:8, 'it-machete':3},
    eventImg: {
      day: 'evt_tile_jungle_corrupted_1.png',
      night:'evt_tile_jungle_corrupted_1.png',
    },
    moveSounds: ['sfx_move_jungle_1', 'sfx_move_jungle_2', 'sfx_move_jungle_3'],
    travelParticle: 'pt-travel-jungle',
    hideParty: true,
    breakStamps: true,
    breakLines: true,
    hasTaxonomy: true,
    sprawls: [
      {id:'spr-fire', chance:0.3, lifeTime:12},
      {id:'spr-dry',  burnedTile: 'tl-dry-jungle-thick'},
      {id:'spr-chasm', burnedTile: 'tl-pit-dry'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-jungle-thick'},
    ]
  },
  {
    id: 'tl-corrupted-jungle-light',
    name: "txt-tl-corrupted-jungle-light",
    flags: '+jungle',
    sprites: [
      "res_tile_corrupted_jungle_light_1.png",
      "res_tile_corrupted_jungle_light_2.png",
      "res_tile_corrupted_jungle_light_3.png",
      "res_tile_corrupted_jungle_light_4.png",
      "res_tile_corrupted_jungle_light_5.png",
      "res_tile_corrupted_jungle_light_6.png",
      "res_tile_corrupted_jungle_light_7.png",
    ],
    borderImgIdx: 32,
    borderPrio: 13,
    viewCost: 0.25,
    breakStamps: true,
    moveCost: 2,
    eventImg: {
      day: 'evt_tile_jungle_corrupted_1.png',
      night:'evt_tile_jungle_corrupted_1.png',
    }, 
    moveSounds: ['sfx_move_grass_1', 'sfx_move_grass_2', 'sfx_move_grass_3'],
    travelParticle: 'pt-travel-grass',
    sprawls: [
      {id:'spr-fire', chance:0.2, lifeTime:9},
      {id:'spr-dry',  burnedTile: 'tl-dry-jungle-light'},
      {id:'spr-chasm', burnedTile: 'tl-pit-dry'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-jungle-light'},
    ]
  },
  {
    id: 'tl-corrupted-mountain',
    name: "txt-tl-corrupted-mountain",
    flags: '+mountain',
    sprites: [
      "res_tile_corrupted_mountain_1.png",
      "res_tile_corrupted_mountain_2.png",
      "res_tile_corrupted_mountain_3.png",
      "res_tile_corrupted_mountain_4.png",
      "res_tile_corrupted_mountain_5.png",
      "res_tile_corrupted_mountain_6.png",
      "res_tile_corrupted_mountain_7.png",
    ],
    borderImgIdx: 31,
    borderPrio: 16,
    elevation: 3.0,
    viewCost: 0.6,
    moveCost: -1,
    breakStamps: true,
    breakLines: true,
    travelParticle: 'pt-travel-dry',
    eventImg: {
      day: 'evt_tile_mountain_corrupted_1.png',
      night:'evt_tile_mountain_corrupted_1.png'
    },
    moveSounds: [
      'sfx_move_dry_1', 
      'sfx_move_dry_2', 
      'sfx_move_dry_3'
    ],
    sprawls: [
      {id:'spr-fire', lifeTime:0},
      {id:'spr-dry', chance:0},
      {id:'spr-flood', lifeTime:0},
      {id:'spr-geysir-flood', lifeTime:0},
      {id:'spr-chasm', burnedTile: 'tl-pit-dry'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-mountain'},
    ]
  },
  {
    id: 'tl-corrupted-stoneForest',
    name: "txt-tl-corrupted-stoneForest",
    sprites: [
      "res_tile_corrupted_stoneForest_1.png",
      "res_tile_corrupted_stoneForest_2.png",
      "res_tile_corrupted_stoneForest_3.png",
      "res_tile_corrupted_stoneForest_4.png",
      "res_tile_corrupted_stoneForest_5.png",
      "res_tile_corrupted_stoneForest_6.png",
      "res_tile_corrupted_stoneForest_7.png",
    ],
    borderImgIdx: 33,
    borderPrio: 13,
    viewCost: 0.4,
    moveCost: 3,
    eventImg: {
      day:'evt_tile_corrupted_stoneForest_1.png',
      night:'evt_tile_corrupted_stoneForest_1.png'
    },
    moveSounds: ['sfx_move_dry_1', 'sfx_move_dry_2', 'sfx_move_dry_3'],
    travelParticle: 'pt-travel-dry',
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass-stoneForest'},
      {id:'spr-dry', burnedTile:'tl-desert-stoneForest'},
      {id:'spr-chasm', burnedTile: 'tl-pit-dry'},
    ]
  },
  {
    id: 'tl-corrupted-river',
    name: "txt-tl-corrupted-river",
    sprites: [
      "res_tile_corrupted_river_1.png",
      "res_tile_corrupted_river_2.png",
      "res_tile_corrupted_river_3.png",
      "res_tile_corrupted_river_4.png",
      "res_tile_corrupted_river_5.png",
      "res_tile_corrupted_river_6.png",
      "res_tile_corrupted_river_7.png",
    ],
    borderImgIdx: 34,
    borderPrio: 18,
    borderTag: 'water',
    viewCost: 0.1,
    moveCost: -1,
    events: 'evt-tile-river',
    sprawls: [
      {id:'spr-dry', burnedTile:'tl-river-shallow'},
      {id:'spr-fire', lifeTime:0},
      {id:'spr-geysir-dry', lifeTime:2, burnedTile:'tl-river-shallow'},
      // {id:'spr-corrupt', burnedTile: ''},
    ]
  },
  {
    id: 'tl-corrupted-river-shallow',
    name: "txt-tl-corrupted-river-shallow",
    sprites: [
      "res_tile_corrupted_river_shallow_1.png",
      "res_tile_corrupted_river_shallow_2.png",
      "res_tile_corrupted_river_shallow_3.png",
      "res_tile_corrupted_river_shallow_4.png",
      "res_tile_corrupted_river_shallow_5.png",
      "res_tile_corrupted_river_shallow_6.png",
      "res_tile_corrupted_river_shallow_7.png",
    ],
    borderImgIdx: 34,
    borderPrio: 18,
    borderTag: 'water',
    moveCost: 4,
    viewCost: 0.1,
    eventImg: {
      day:'evt_tile_corrupted_shallowRiver_1.png',
      night: 'evt_tile_corrupted_shallowRiver_1_night.png'
    }, 
    moveSounds: [
      'sfx_move_water_1', 
      'sfx_move_water_2',
      'sfx_move_water_3',
      'sfx_move_water_4'
    ],
    travelParticle: 'pt-travel-water',
    particle: 'pt-water',
    sprawls: [
      {id:'spr-chasm', chance:0},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-river-shallow'},
    ]
  },

])