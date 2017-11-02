config.entities.add([

// fixtures

  {
    id: 'fxt-shrine-2',
    name: "txt-fxt-shrine-2-name",
    sprite: "res_fxt_temple_5.png",
    worldMap: true,
    reqBiomeFlags: '-arctic',
    flags: '+shrine +dreamVisions +ruins',
    setTile: [
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {ref:'tl-dry', reqBiomeFlags: '+desert'},
      {ref:'tl-jungle-thick'},
    ],
    setNeighbors: [
      {count:5, ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric -desert'},
      {count:5, ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {count:4, ref:'tl-mountain', reqBiomeFlags: '+desert'},
    ],
    spawnEvents: [
      {prio:1, reqTutorial: true, setFixtureFlags: '+aftermathVolcano'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathFlood'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathMountains',   reqBiomeFlags: '-arctic'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathIce',         reqBiomeFlags: '-arctic'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathDry',         reqBiomeFlags: '-desert'},
      {prio:2, slots:1, setFixtureFlags: '+aftermathForsake'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathVolcano',     reqWorld: '1..'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathPoisonGas',   reqWorld: '2..'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathCorrupted',   reqWorld: '2..'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathChasm',       reqWorld: '2..'},
      {prio:2, slots:3, setFixtureFlags: '+aftermathVoid',        reqWorld: '3..', reqDifficulty:'1..'},
    ],
    subFixtures: {
      ref: 'fxt-subfixture-shrine-1 fxt-subfixture-shrine-2', 
      offsets: '4ne 4nw 4sw 4se',
      chance: 0.5
    }, 
    actions: 'evt-shrine-2',
    debugCategory: 'shrine',
    debugColor: 'red',
  },
  {
    id: 'fxt-subfixture-shrine-1',
    extends: 'fxt-subfixture',
    sprite: [
      {ref:'res_fxt_sub_stoneBlocks_1.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_sub_stoneBlocks_3.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
      {ref:'tl-grass'},
    ],
  },
  {
    id: 'fxt-subfixture-shrine-2',
    extends: 'fxt-subfixture-shrine-1',
    sprite: [
      {ref:'res_fxt_sub_stoneBlocks_2.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_sub_stoneBlocks_4.png', reqBiomeFlags: '+arctic'},
    ],
  },
  {
    id: 'fxt-shrine-3',
    debugCategory: 'shrine',
    extends: 'fxt-shrine-2',
    sprite: "res_fxt_temple_2.png",
  },
  {
    id: 'fxt-shrine-4',
    debugCategory: 'shrine',
    extends: 'fxt-shrine-2',
    sprite: "res_fxt_temple_1.png",
  },
  {
    id: 'fxt-shrine-rope',
    extends: 'fxt-shrine-2',
    reqWorld: '1..',
    sprite: "res_fxt_temple_4.png",
    flags: '+shrine +shrineTypeRope +dreamVisions +ruins',
    setTile: 'tl-hill',
    setNeighbors: [
      {count: 4, ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric -desert'},
      {count: 2, ref:'tl-hill', reqBiomeFlags: '+grass | +prehistoric -desert'},

      {count: 4, ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {count: 2, ref:'tl-hill', reqBiomeFlags: '+dry'},

      {count: 4, ref:'tl-mountain', reqBiomeFlags: '+desert'},
      {count: 2, ref:'tl-hill', reqBiomeFlags: '+desert'},
    ],
    debugCategory: 'shrine',
  },
  {
    id: 'fxt-shrine-6', // legacy save games
    debugCategory: 'shrine',
    extends: 'fxt-shrine-rope',
    sprite: "res_fxt_temple_4.png",
  },
  {
    id: 'fxt-shrine-arctic',
    extends: 'fxt-shrine-2',
    reqBiomeFlags: '+arctic',
    sprite: "res_fxt_temple_arctic.png",
    flags: '+shrine +dreamVisions +ruins',
    setTile: [
      {ref:'tl-deepSnow'},
      {ref:'tl-frozenPlains'},
      {ref:'tl-crystalForest'},
    ],
    setNeighbors: [
      {count: 3, ref:'tl-deepSnow'},
      {count: 3, ref:'tl-crystalForest'},
    ],
    debugCategory: 'shrine',
  },

// events	

  { 
    id: 'evt-shrine-2',
    actionText: "txt-evt-shrine-2-action",
    playMusic: ['thm_shrine_1'],
    chat: 'cl-scaryPlace',
    partyEffects: [
      {
        events: 'evt-shrine-actions',
      },
      {
        optional: true, reqFixtureFlags: '+broken',
        showImage: {src: 'evt_fxt_shrine_1.png', type:'day'},
        text: "txt-evt-shrine-4",
      },
      {
        optional: true, reqFixtureFlags: '-broken -shrineTypeRope', reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_shrine_1.png', type:'day'},
        text: "txt-evt-shrine-2",
      },
      {
        optional: true, reqFixtureFlags: '-broken +shrineTypeRope',
        showImage: {src: 'evt_fxt_shrine_2.png', type: 'day'},
        text: "txt-evt-shrine-3",
      },
      {
        optional: true, reqBiomeFlags: '-broken +arctic',
        showImage: {
          src: 'evt_fxt_shrine_arctic.png', type: 'day', showMounted: true,
          particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
          particlesChance: 0.5
        },
        text: "txt-evt-shrine-arctic",
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathMountains',
        text: "txt-evt-shrine-5"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathChasm',
        text: "txt-evt-shrine-9"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathFlood',
        text: "txt-evt-shrine-10"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathDry',
        text: "txt-evt-shrine-11"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathVolcano',
        text: "txt-evt-shrine-12"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathPoisonGas',
        text: "txt-evt-shrine-14"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathCorrupted',
        text: "txt-evt-shrine-15"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathVoid',
        text: "txt-evt-shrine-13"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathForsake',
        text: "txt-evt-shrine-hint-forsaken"
      },
      {
        optional: true, reqFixtureFlags: '-broken +aftermathIce',
        text: "txt-evt-shrine-hint-ice"
      },
    ]
  },
  {
    id: 'evt-shrine-rope-actions',
    reqFixtureFlags: '-broken +shrineTypeRope',
    actions: [
      {
        actionText: "txt-evt-shrine-rope-actions-action",
        alwaysShown: true,
        reqItems: {'it-rope':1},
        text: "txt-evt-shrine-rope-actions-useRope",
        items: {'it-rope':-1},
        actions: 'evt-shrine-enter'
      },
      {
        actionText: "txt-evt-shrine-rope-actions-action-1",
        alwaysShown: true,
        reqItems: {'it-climbingGear':1},
        text: "txt-evt-shrine-rope-actions-useGear",
        items: {'it-climbingGear':-1},
        actions: 'evt-shrine-enter'
      },
      {
        actionText: "txt-evt-shrine-rope-actions-action-2",
        text: "txt-evt-shrine-rope-actions-challenge",
        reqDice: 'agility',
        winEvents: {
          text: "txt-evt-shrine-rope-actions",
          actions: 'evt-shrine-enter'
        },
        failEvents: [
          {
            slots: 4,
            charEffects: {
              reqCharFlags: '-special +humanoid',
              health: -10,
              text: "txt-evt-shrine-rope-actions-1",
            },
            actions: 'evt-shrine-enter'
          },
          {
            charEffects: {
              reqCharFlags: '-special +humanoid',
              storeCharacter: true,
              setCharFlags: '+dead',
              sanity: -15,
              text: "txt-evt-shrine-rope-actions-2"
            },
            actions: 'evt-shrine-enter'
          },
          {
            priority: 5,
            charEffects: [
              {
                reqCharFlags:'+special | -humanoid',
                count:'all'
              },
              {
                reqCharFlags:'+special',
                text: "txt-evt-shrine-rope-actions-3",
                health: -10,
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'evt-shrine-actions',
    events: 'evt-shrine-rope-actions',
    actions: [
      { 
        reqFixtureFlags: '-broken -shrineTypeRope',
        actionText: "txt-evt-shrine-actions-action",
        events: 'evt-shrine-enter' 
      },
      { 
        ref:'evt-shrine-paint',
        pushEvent: 'evt-shrine-actions'
      },
      {
        actionText: "txt-evt-leave-action",
        events:'evt-shrine-leave'
      },
    ],
  },
  { 
    id: 'evt-shrine-enter',
    actionText: "txt-evt-shrine-actions-action",
    partyEffects: [
      {
        optional: true, reqBiomeFlags: '-arctic',
        text: "txt-evt-shrine-enter",
        report: "txt-evt-shrine-enter-report",
        showImage: {src: 'evt_fxt_shrine_int_1.png', showMounted:false},
      },
      {
        optional: true, reqBiomeFlags: '+arctic',
        text: "txt-evt-shrine-arctic-enter",
        report: "txt-evt-shrine-arctic-enter-report",
        showImage: {src: 'evt_fxt_shrine_arctic_int.png', showMounted:false},
      },
    ],
    playMusic: ['thm_shrine_2'],
    chat: 'cl-shrine-warning',
    actions: {
      actionText: "txt-evt-shrine-enter-action",
      chat: 'cl-shrine-loot',
      events: [
        {
          reqDifficulty: '1..',
          loot: {
            items: [
              {slots: 6, 'il-treasure-highValue':1, 'il-treasure-lowValue':1, 'it-moonStone':1 },
              {slots: 2, 'il-treasure-highValue':2, 'it-moonStone':1 },
              {slots: 1, 'il-treasure-highValue':1, 'il-tomePages':1,         'it-moonStone':1 },
              {slots: 1, 'il-treasure-highValue':1, 'il-magic':1,             'it-moonStone':1 },
            ],
            close: 'evt-shrine-lootAftermath',
            cancel: 'evt-shrine-leave',
            itemEvents: {items: {'it-metalCube':1}, ref: 'evt-shrine-loot'},
          },
        },
        {
          reqDifficulty: '0',
          loot: {
            items: [
              {slots: 6, 'il-treasure-highValue':1, 'il-treasure-lowValue-easy':1 },
              {slots: 2, 'il-treasure-highValue':2},
              {slots: 1, 'il-treasure-highValue':1, 'il-tomePages':2,             },
              {slots: 1, 'il-treasure-highValue':1, 'il-magic':1,                 },
            ],
            close: 'evt-shrine-lootAftermath',
            cancel: 'evt-shrine-leave',
            itemEvents: {items: {'it-metalCube':1}, ref: 'evt-shrine-loot'},
          },
        }
      ],
    },
  },
  { 
    id: 'evt-shrine-loot',
    text: "txt-evt-shrine-loot",
    standing: standingCostSacrilegLarge,
    chat: 'cl-sacrileg-loot',
    setFixtureFlags: '+broken'
  },
  { 
    id: 'evt-shrine-lootAftermath',
    extends: 'evt-shrine-loot',
    events: [
      'evt-shrine-aftermath-mountains',
      'evt-shrine-aftermath-chasm',
      'evt-shrine-aftermath-flood',
      'evt-shrine-aftermath-dry',
      'evt-shrine-aftermath-ice',
      'evt-shrine-aftermath-volcano',
      'evt-shrine-aftermath-void',
      'evt-shrine-aftermath-forsake',
      'evt-shrine-aftermath-poisonGas',
      'evt-shrine-aftermath-corrupted',
    ]
  },
  { 
    id: 'evt-shrine-aftermath-mountains',
    reqFixtureFlags: '+aftermathMountains',
    text: "txt-evt-shrine-aftermath-mountains",
    report: "txt-evt-shrine-aftermath-mountains-report",
    actions: {
      camShake: {power:8, length:1.2},
      setPartyFlags: '+sacrileg',
      replaceTiles: [
        {radius:10, old: 'any', new: 'tl-mountain', particle: ['pt-erupt-mountain'], chance: 0.3},
        {radius:1, old: 'any', new: 'tl-dry', particle: ['pt-erupt-hill']},
      ],
      events: 'evt-leave',
    },
  },
  { 
    id: 'evt-shrine-aftermath-chasm',
    reqFixtureFlags: '+aftermathChasm',
    text: "txt-evt-shrine-aftermath-chasm",
    report: "txt-evt-shrine-aftermath-chasm-report",
    events: {
      startSprawl: {ref:'spr-chasm', power:3, worldPower:1},
      events: 'evt-leave'
    }
  },
  { 
    id: 'evt-shrine-aftermath-forsake',
    reqFixtureFlags: '+aftermathForsake',
    text: "txt-evt-shrine-aftermath-forsake",
    partyEffects: [
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'},
      {optional:true, ref:'evt-shrine-aftermath-forsake-fxt'}, 
    ],
    replaceFixtures: [
      {range:'..50', old:'fxt-trader'},
      {range:'..50', old:'fxt-slaver'},
    ],
    removeZones: {
      flags: '+native', 
      radius: 50
    },
    events: 'evt-leave'
  },
  {
    id: 'evt-shrine-aftermath-forsake-fxt',
    reqFixture: {flags:'+inhabited'},
    posTile: {fixtureFlags:'+inhabited'},
    setFixtureFlags: '-inhabited -angry',
    setFixtureParticle: ''
  },

  { 
    id: 'evt-shrine-aftermath-flood',
    reqFixtureFlags: '+aftermathFlood',
    text: "txt-evt-shrine-aftermath-flood",
    report: "txt-evt-shrine-aftermath-flood-report",
    events: [
      {
        startSprawl: {ref:'spr-flood', radius:0, power:2},
        setPartyStatus: {'st-curse-flood':true},
        events: 'evt-leave',
      },
    ],
  },
  { 
    id: 'evt-shrine-aftermath-dry',
    reqFixtureFlags: '+aftermathDry',
    text: "txt-evt-shrine-aftermath-climate",
    report: "txt-evt-shrine-aftermath-climate-report",
    startSprawl: {ref:'spr-dry', radius:0, power:8, worldPower:2},
    events: 'evt-leave'
  },
  { 
    id: 'evt-shrine-aftermath-ice',
    reqFixtureFlags: '+aftermathIce',
    text: "txt-evt-shrine-ice",
    report: "txt-evt-shrine-ice",
    startSprawl: {ref:'spr-ice', radius:0, power:8, worldPower:2},
    events: 'evt-leave'
  },
  { 
    id: 'evt-shrine-aftermath-volcano',
    reqFixtureFlags: '+aftermathVolcano',
    text: "txt-evt-shrine-aftermath-volcano",
    report: "txt-evt-shrine-aftermath-volcano-report",
    partyEffects: [
      {
        addFixture: {ref:'fxt-volcano-spawn-large-active', range:4}
      },
      {
        addFixture: {ref:'fxt-volcano-spawn-large-active', range:4}
      },
      {
        optional: true, 
        reqTutorial: true, 
        addFixture: {ref:'fxt-volcano-spawn-large-active', range:10}
      }
    ],
    events: 'evt-leave',
  },
  { 
    id: 'evt-shrine-aftermath-poisonGas',
    reqFixtureFlags: '+aftermathPoisonGas',
    text: "txt-evt-shrine-aftermath-poisonGas",
    report: "txt-evt-shrine-aftermath-poisonGas-report",
    partyEffects: [
      {addFixture: {ref:'fxt-fumarole-spawn', range:7, setPos:false}},
      {addFixture: {ref:'fxt-fumarole-spawn', range:7, setPos:false}},
      {optional: true, reqWorld: '2..', addFixture: {ref:'fxt-fumarole-spawn', range:7, setPos:false}},
      {optional: true, reqWorld: '3..', addFixture: {ref:'fxt-fumarole-spawn', range:7, setPos:false}},
      {optional: true, reqWorld: '4..', addFixture: {ref:'fxt-fumarole-spawn', range:7, setPos:false}},
    ],
    events: 'evt-leave',
  },
  { 
    id: 'evt-shrine-aftermath-corrupted',
    reqFixtureFlags: '+aftermathCorrupted',
    text: "txt-evt-shrine-aftermath-corrupted",
    partyEffects: [
      {optional: true,                  addFixture: {ref:'fxt-corrupt-spawn', range:6,   setPos:false}},
      {optional: true,                  addFixture: {ref:'fxt-corrupt-spawn', range:20,  setPos:false}},
      {optional: true,                  addFixture: {ref:'fxt-corrupt-spawn', range:20,  setPos:false}},
      {optional: true, reqWorld: '4..', addFixture: {ref:'fxt-corrupt-spawn', range:25,  setPos:false}},
      {optional: true, reqWorld: '5..', addFixture: {ref:'fxt-corrupt-spawn', range:30,  setPos:false}},
    ],
    events: 'evt-leave',
  },
  { 
    id: 'evt-shrine-aftermath-void',
    reqFixtureFlags: '+aftermathVoid',
    text: "txt-evt-shrine-aftermath-void",
    report: "txt-evt-shrine-aftermath-void-report",
    startSprawl: {ref:'spr-void', power:10000},
    events: 'evt-leave',
  },
  { 
    id: 'evt-shrine-leave',
    actionText: "txt-evt-leave-action",
    partyEffects: {
      optional: true,
      reqFixtureFlags: '-broken',
      text: "txt-evt-shrine-leave",
      report: "txt-evt-shrine-leave-report",
    }
  },
])