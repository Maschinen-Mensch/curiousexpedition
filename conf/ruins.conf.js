config.entities.add([
  
  {
    id: 'fxt-goldenTemple-grass',
    name: "txt-fxt-goldenTemple-unearthed-name",
    debugColor: 'orange',
    debugCategory: 'goldenPyramid',
    reqBiomeFlags: '+grass',
    sprite: "res_fxt_goldenTemple_grass_1.png",
    hintCompass: true,
    hintBiome:false,
    mapScore: 0,
    isRemovable: false,
    keepReachable: true,
    flags: '+dreamVisions +goldenTemple',
    maximizeDistance: true,
    subFixtures: [
      {ref: 'fxt-ruins-set-1', offsets: '1n'}, 
      {ref: 'fxt-ruins-set-2', offsets: '1ne'}, 
      {ref: 'fxt-ruins-set-3', offsets: '1se'},
      {ref: 'fxt-ruins-set-4', offsets: '1s'}, 
      {ref: 'fxt-ruins-set-5', offsets: '1sw'}, 
      {ref: 'fxt-ruins-set-6', offsets: '1nw'}
    ],
    setTile: 'tl-jungle-thick',
    spawnEvents: [
      {
        reqWorld: '1',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-jungle-thick'},
        ],
      },
      {
        reqWorld: '2..3',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-jungle-thick'},
          {radius:2, old: 'any', new: 'tl-mountain', chance: 0.25},
          {radius:1, old: 'any', new: 'tl-jungle-thick'},
        ],
      },
      {
        reqWorld: '4..',
        replaceTiles: [
          {radius:3, old: 'any', new: 'tl-jungle-thick'},
          {radius:3, old: 'any', new: 'tl-mountain', chance: 0.5},
          {radius:1, old: 'any', new: 'tl-jungle-thick'},
        ]
      }
    ],
    actions: 'evt-goal-explore'
  },
  {
    id: 'fxt-goldenTemple-dry',
    debugCategory: 'goldenPyramid',
    extends: 'fxt-goldenTemple-grass',
    reqBiomeFlags: '+dry',
    setTile: 'tl-dry-jungle-thick',
    spawnEvents: [
      {
        reqWorld: '0',
        replaceTiles: [
          {radius:1, old: 'any', new: 'tl-dry-jungle-thick'},
        ],
      },
      {
        reqWorld: '1',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-dry-jungle-thick'},
        ],
      },
      {
        reqWorld: '2..3',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-dry-jungle-thick'},
          {radius:2, old: 'any', new: 'tl-mountain', chance: 0.4},
          {radius:1, old: 'any', new: 'tl-dry-jungle-thick'},
        ],
      },
      {
        reqWorld: '4..',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-dry-jungle-thick'},
          {radius:2, old: 'any', new: 'tl-mountain', chance: 0.4},
          {radius:1, old: 'any', new: 'tl-dry-jungle-thick'},
        ],
      },
    ],
  },
  {
    id: 'fxt-goldenTemple-desert',
    extends: 'fxt-goldenTemple-grass',
    reqBiomeFlags: '+desert',
    sprite: "res_fxt_goldenTemple_unearthed_1.png",
    subFixtures: [
      {ref: 'fxt-ruins-set-desert-1', offsets: '1n'},
      {ref: 'fxt-ruins-set-desert-2', offsets: '1ne'},
      {ref: 'fxt-ruins-set-desert-3', offsets: '1nw'},
    ],
    setTile: 'tl-desert',
    spawnEvents: [
      {
        reqWorld: '0',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-mountain'},
          {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.8},
          {radius:1, old: 'any', new: 'tl-desert'},
        ],
      },
      {
        reqWorld: '1',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-mountain'},
          {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.7},
          {radius:1, old: 'any', new: 'tl-desert'},
        ],
      },
      {
        reqWorld: '2..3',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-mountain'},
          {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.7},
          {radius:1, old: 'any', new: 'tl-desert'},
        ],
      },
      {
        reqWorld: '4..',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-mountain'},
          {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.5},
          {radius:1, old: 'any', new: 'tl-desert'},
        ],
      },
    ],
  },
  {
    id: 'fxt-goldenTemple-arctic',
    extends: 'fxt-goldenTemple-grass',
    reqBiomeFlags: '+arctic',
    sprite: "res_fxt_goldenTemple_arctic_1.png",
    subFixtures: [
      {ref: 'fxt-ruins-set-arctic-1', offsets: '1n'},
      {ref: 'fxt-ruins-set-arctic-2', offsets: '1ne'},
      {ref: 'fxt-ruins-set-arctic-3', offsets: '1nw'},
    ],
    //setTile: 'tl-deepSnow',
    spawnEvents: [
      {
        reqWorld: '0..',
        replaceTiles: [
          {radius:2, old: 'any', new: 'tl-plateau'},
          //{radius:2, old: 'any', new: 'tl-plateau', chance:0.8},
          {radius:1, old: 'any', new: 'tl-deepSnow'},
        ],
      },
    //   {
    //     reqWorld: '1',
    //     replaceTiles: [
    //       {radius:2, old: 'any', new: 'tl-mountain'},
    //       {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.7},
    //       {radius:1, old: 'any', new: 'tl-desert'},
    //     ],
    //   },
    //   {
    //     reqWorld: '2..3',
    //     replaceTiles: [
    //       {radius:2, old: 'any', new: 'tl-mountain'},
    //       {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.7},
    //       {radius:1, old: 'any', new: 'tl-desert'},
    //     ],
    //   },
    //   {
    //     reqWorld: '4..',
    //     replaceTiles: [
    //       {radius:2, old: 'any', new: 'tl-mountain'},
    //       {radius:2, old: 'any', new: 'tl-dry-stoneForest', chance:0.5},
    //       {radius:1, old: 'any', new: 'tl-desert'},
    //     ],
    //   },
    ],
  },

  {
    id: 'fxt-ruins-set',
    isAbstract: true,
    mapScore: 0,
    showHint: false,
    keepReachable: true,
    isRemovable: false,
    showAlways: false,
    linked: true,
    debugCategory:'ruins',
  },

// Arctic Subfixtures

  { 
    id: 'fxt-ruins-set-arctic-1',
    extends: 'fxt-ruins-set',
    sprite: "res_fxt_goldenTemple_arctic_2.png",
  },
  { 
    id: 'fxt-ruins-set-arctic-2',
    extends: 'fxt-ruins-set-arctic-1',
    sprite: "res_fxt_goldenTemple_arctic_3.png",
  },
  { 
    id: 'fxt-ruins-set-arctic-3',
    extends: 'fxt-ruins-set-arctic-1',
    sprite: "res_fxt_goldenTemple_arctic_4.png",
  },

// Desert Subfixtures

  { 
    id: 'fxt-ruins-set-desert-1',
    extends: 'fxt-ruins-set',
    sprite: "res_fxt_goldenTemple_unearthed_2.png",
  },
  { 
    id: 'fxt-ruins-set-desert-2',
    extends: 'fxt-ruins-set-desert-1',
    sprite: "res_fxt_goldenTemple_unearthed_3.png",
  },
  { 
    id: 'fxt-ruins-set-desert-3',
    extends: 'fxt-ruins-set-desert-1',
    sprite: "res_fxt_goldenTemple_unearthed_4.png",
  },

// Jungle Subfixtures

  { 
    id: 'fxt-ruins-set-1',
    extends: 'fxt-ruins-set',
    sprite: "res_fxt_goldenTemple_grass_2.png",
  },
  { 
    id: 'fxt-ruins-set-2',
    extends: 'fxt-ruins-set-1',
    sprite: "res_fxt_goldenTemple_grass_3.png",
  },
  { 
    id: 'fxt-ruins-set-3',
    extends: 'fxt-ruins-set-1',
    sprite: "res_fxt_goldenTemple_grass_4.png",
  },
  { 
    id: 'fxt-ruins-set-4',
    extends: 'fxt-ruins-set-1',
    sprite: "res_fxt_goldenTemple_grass_5.png",
  },
  { 
    id: 'fxt-ruins-set-5',
    extends: 'fxt-ruins-set-1',
    sprite: "res_fxt_goldenTemple_grass_6.png",
  },
  { 
    id: 'fxt-ruins-set-6',
    extends: 'fxt-ruins-set-1',
    sprite: "res_fxt_goldenTemple_grass_7.png",
  },

// events

  {
    id: 'evt-goal-explore',
    reqPartyFlags: '-expeditionDone',
    actionText: "txt-evt-altar-approach-action",
    events: [
      {
        optional: true,
        reqBiomeFlags: '+grass | +prehistoric -desert -dry',
        showImage: {src: 'evt_fxt_goldenPyramid_grass.png', type:'none'},
        events: 'evt-goal-explore-finish',
      },
      {
        optional: true,
        reqBiomeFlags: '+dry -desert',
        showImage: {src: 'evt_fxt_goldenPyramid_dry.png', type:'none'},
        events: 'evt-goal-explore-finish',
      },
      {
        optional: true,
        reqBiomeFlags: '+desert',
        showImage: {src: 'evt_fxt_goldenPyramid_desert.png', type:'none'},
        events: 'evt-goal-explore-finish',
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {src: 'evt_fxt_goldenPyramid_arctic.png', type:'none'},
        events: 'evt-goal-explore-finish',
      },
      {
        prio: 1,
        optional: true,
        text: "!You have probably modded the game and added a new pyramid for a new biome. If you want your expedition end to play properly you should add a new event to the evt-goal-explore event",
        events: 'evt-goal-explore-finish',
      }
    ],
  },
  {
    id: 'evt-goal-explore-finish',
    actionText: "txt-evt-altar-approach-action",
    playMusic: 'thm_pyramid',
    text: "txt-evt-goal-explore-finish",
    charEffects: [
      {
        optional: true, reqTutorial: false,
        reqCharFlags: '+humanoid -special',
        text: "txt-evt-goal-explore-finish-1"
      },
      {
        optional: true, reqTutorial: false,
        count: 'all',
        reqCharFlags: '-humanoid | +special',
        text: "txt-evt-goal-explore-finish-2",
      },
      {
        optional: true, reqTutorial: true,
        text: "txt-evt-goal-explore-finish-3",
      }
    ],
    chat: 'cl-endWorld',
    events: [
      {
        reqWorld: '3',
        reqDifficulty: '1..',
        reqFixtureFlags: '-unearthed',
        text: "txt-evt-goal-enter",
        actions: {
          actionText: "txt-evt-goal-explore-finish-action",
          alwaysShown:true,
          reqItems: {'it-moonStone':1},
          items: {'it-moonStone':-1},
          events: 'evt-ruins-success'
        }
      },
      {
        reqWorld: '4',
        reqDifficulty: '1..',
        reqFixtureFlags: '-unearthed',
        text: "txt-evt-goal-enter-1",
        actions: {
          actionText: "txt-evt-goal-explore-finish-action",
          alwaysShown:true,
          reqItems: {'it-moonStone':2},
          items: {'it-moonStone':-2},
          events: 'evt-ruins-success'
        }
      },
      {
        reqWorld: '5',
        reqDifficulty: '1..',
        reqFixtureFlags: '-unearthed',
        text: "txt-evt-goal-enter-2",
        actions: {
          actionText: "txt-evt-goal-explore-finish-action",
          alwaysShown:true,
          reqItems: {'it-moonStone':2},
          items: {'it-moonStone':-2},
          events: [
           {events: 'evt-ruins-success', reqTutorial: false},
           {events: 'evt-ruins-success-tutorial', reqTutorial: true},
          ],
        }
      },
      {
        reqWorld: '5',
        reqFixtureFlags: '+unearthed',
        actions: 'evt-ruins-success'
      },
      {
        prio:1,
        actions: 'evt-ruins-success'
      },
    ],
    actions: 'evt-leave',
  },
  {
    id: 'evt-ruins-success-tutorial',
    actionText: "txt-evt-goal-explore-finish-action",
    text: "txt-evt-ruins-success-tutorial",
    endWorld: {},
  },
  {
    id: 'evt-ruins-success',
    actionText: "txt-evt-goal-explore-finish-action",
    report: "txt-evt-ruins-success-report",
    events: [
      {
        reqDifficulty: '..1',
        events: 'evt-expedition-done',
      },
      {
        reqDifficulty: '2..',
        text: "txt-evt-ruins-success",
        sanity: sanityBoost,
        setPartyFlags: '+expeditionDone'
      },
    ],
  },
  {
    id: 'evt-expedition-unlocks',
    partyEffects: [
      { 
        optional: true,
        reqStanding: '..-1',
        setPartyFlags: '+badStanding'
      },
      {
        optional: true,
        reqWorld: '..4',
        reqItems: {'it-dinoSkull':1},
        unlockPocket: 'pck-prehistoric',
      },
      {
        optional: true,
        charEffects: {count:3, reqCharFlags:'+native'},
        reqDifficulty: '1..',
        unlockCharacter: 'sp-tubman',
      },
      {
        optional: true, 
        reqWorld: '2', 
        unlockCharacter: 'sp-kingsley'
      },
      {
        optional: true, 
        reqWorld: '5..', 
        reqRanking: '..2',
        reqNoCombat: true,
        unlockCharacter: 'sp-lovelace'
      },
      {
        optional: true, 
        reqWorld: '5..', 
        reqRanking: '0',
        unlockCharacter: 'sp-earhart'
      },
      {
        optional: true, 
        reqWorld: '5..', 
        reqRanking: '..2',
        charEffects: {count: 2, reqCharFlags:'-special', reqLevel:'3..'},
        unlockCharacter: 'sp-garvey'
      },
      {
        optional: true, 
        reqWorld: '5..', 
        reqRanking: '..2',
        reqDifficulty: '1..',
        reqNoCombat: true,
        unlockCharacter: 'sp-stark'
      },
      {
        optional: true, 
        reqWorld: '5..', 
        reqRanking: '..2',
        charEffects: {reqCharFlags:'+dinosaur'},
        unlockCharacter: 'sp-neel'
      },
      {
        optional: true,
        reqWorld: '5..',
        reqRanking: '..2',
        reqDifficulty: '1..',
        reqPartyFlags: '-badStanding', 
        unlockCharacter: 'sp-crowley'
      },
      {
        optional: true,
        reqWorld: '5..',
        reqPartyFlags: '-hadBadStanding', 
        incAchievement: 'ach-positive-standing'
      },
      {
        optional: true,
        reqWorld: '5..',
        reqPartyFlags: '-soldItem', 
        incAchievement: 'ach-no-selling'
      },
      {
        optional: true,
        reqWorld: '5..',
        reqPartyFlags: '-abortedExpedition', 
        incAchievement: 'ach-expeditions'
      }
    ],
    charEffects: [
      {
        optional: true,
        count: 'any',
        setCharFlags: '+veteran'
      }
    ],
    storeEffects: [
      {
        optional: true,
        count: 'any', // mark all dead
        setCharFlags: '+dead'
      }
    ],
  },
  {
    id: 'evt-expedition-done',
    partyEffects: [
      {
        optional: true,
        reqPartyFlags: '+harborEventsQuest80Days',
        reqTurns: '..80',
        setPartyFlags: '+harborEventsQuest80DaysComplete',
      }
    ],
    charEffects: [
      {
        reqCharFlags: '+special',
        text: "txt-evt-expedition-done-1",
      },
      {
        optional: true,
        reqPartyFlags: '+escortMissionary',
        reqCharFlags: '+missionary',
        text: "txt-evt-expedition-done-2",
        report: "txt-evt-expedition-done-report",
        removeCharacter:true,
      }
    ],
    events: ['evt-expedition-done-aftermath'],
  },
  {
    id: 'evt-expedition-done-aftermath',
    events: [
      {
        reqTutorial: true, 
        actions: { 
          actionText: "txt-evt-expedition-done-aftermath-action",
          endWorld: {}
        }
      },
      {
        prio: 1,
        charEffects: {
          reqLoyalty: '..3',
          text: "txt-evt-expedition-done-native",
          reqStatus: '+homesick',
          reqCharFlags: '+homeWorld',
          setCharFlags: '-homeWorld +homeCheck',
          actions: [
            {
              reqDice: 'mind',
              reqDiceCharFlags: '-homeCheck',

              actionText: "txt-evt-expedition-done-aftermath-action-1",
              winEvents: {
                id: 'evt-expedition-done-native-join',
                text: "txt-evt-expedition-done-native-join",
                report: "txt-evt-expedition-done-native-join-report",
                setCharFlags: '-homeCheck',
                events: 'evt-expedition-done-aftermath'
              },
              failEvents: {
                id: 'evt-expedition-done-native-stay',
                text: "txt-evt-expedition-done-native-stay",
                report: "txt-evt-expedition-done-native-stay-report",
                storeCharacter: true,
                setCharFlags: '+stayHome -homeCheck',
                events: 'evt-expedition-done-aftermath',
              }
            },
            {
              actionText: "txt-evt-expedition-done-native-stay-action",
              text: "txt-evt-expedition-done-native-stay",
              storeCharacter: true,
              setCharFlags: '+stayHome -homeCheck',
              events: 'evt-expedition-done-aftermath'
            }
          ]
        },
      },
      {
        prio: 1,
        charEffects: {
          reqLoyalty: '4..',
          reqStatus: '+homesick', 
          reqCharFlags: '+homeWorld',
          text: "txt-evt-expedition-done-native-join",
          setCharFlags: '-homeWorld',  
          events: 'evt-expedition-done-aftermath'
        }
      },
      {
        prio: 1,
        charEffects: {
          reqCharFlags: '+imaginary',
          text: "txt-evt-expedition-done-3",
          report: "txt-evt-expedition-done-report-2",
          removeCharacter: true,
          events: 'evt-expedition-done-aftermath'
        }
      },
      { 
        prio: 2, 
        actions: { 
          actionText: "txt-evt-expedition-done-native-stay-action-1",
          charEffects: {
            optional: true, // must be optional because it can be none
            count:'any', 
            reqCharFlags:'-special',  
            loyalty: +1
          },
          endWorld: {}
        }
      }
    ]
  }
])