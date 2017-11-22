config.entities.add([

// fixtures

  {
    id: 'fxt-waterfall',
    name: "txt-fxt-waterfall-name",
    reqBiomeFlags: '-desert -arctic',
    flags: '+water +waterfall +natureRest',
    sprite: "res_fxt_waterfall.png",
    particle: 'pt-waterfall',
    setTile: 'tl-mountain',
    setNeighbors: ['tl-mountain', 'tl-river', 'tl-river', 'tl-river-shallow', 'tl-river-shallow'],
    actions: 'evt-waterfall-explore',
    debugCategory: 'nature',
    debugColor: '#64ff58',
  },
  {
    id: 'fxt-healingSprings',
    name: "txt-fxt-healingSprings-name",
    flags: '+springs +natureRest',
    reqBiomeFlags: '-desert',
    sprite: [
      {ref:'res_fxt_healingSprings.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_healingSprings_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-hill', reqBiomeFlags: '-arctic'},
      {ref:'tl-plateau', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {count:5, ref:'tl-hill', reqBiomeFlags: '-arctic'},
      {count:5, ref:'tl-plateau', reqBiomeFlags: '+arctic'},
    ],
    actions: 'evt-healingSprings-enter',
    debugColor: '#64ff58',
    debugCategory: 'nature',
  },
  {
    id: 'fxt-overhang',
    name: "txt-fxt-overhang-name",
    reqBiomeFlags: '-arctic',
    flags: '+overhang +natureRest',
    sprite: "res_fxt_stoneOverhang.png",
    setTile: 'tl-dry',
    setNeighbors: ['tl-mountain'],
    actions: 'evt-overhang-explore',
    debugCategory: 'nature',
    debugColor: '#64ff58',
  },

// fixture select

  {
    id: 'evt-waterfall-explore',
    actionText: "txt-evt-altar-approach-action",
    playMusic: ['thm_nature_1'],
    showImage: {src: 'evt_fxt_waterfall_1.png', type: 'day'},
    text: "txt-evt-waterfall-explore",
    chat: 'cl-nature',
    select: 'evt-waterfall-actions'
  },
  {
    id: 'evt-waterfall-morning',
    playMusic: ['thm_nature_1'],
    showImage: {src: 'evt_fxt_waterfall_1.png', type: 'day'},
    text: "txt-evt-waterfall-morning",
    chat: 'cl-newMorning',       
    select: 'evt-waterfall-actions'
  },
  { 
    id: 'evt-waterfall-actions',
     actions: [
      'evt-nature-rest',
      { ref:'evt-nature-refillWater'},
      { ref:'evt-nature-paint'},
      'evt-leave'
    ],
  },

  { 
    id: 'evt-healingSprings-enter',
    actionText: "txt-evt-healingSprings-enter-action",
    playMusic: ['thm_nature_1'],
    partyEvents: [
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_healingSprings_1.png', type: 'day'}, 
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {
          src: 'evt_fxt_healingSprings_arctic.png', type: 'day', showMounted: true,
          particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
          particlesChance: 0.5
        }
      },
    ],
    text: "txt-evt-healingSprings-enter", 
    chat: 'cl-nature',
    select: {ref:'evt-healingSprings-actions'},

  },
  {
    id: 'evt-healingSprings-morning',
    playMusic: ['thm_nature_1'],
    partyEvents: [
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_healingSprings_1.png', type: 'day'}, 
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {src: 'evt_fxt_healingSprings_arctic.png', type: 'day'}, 
      },
    ],
    chat: 'cl-newMorning',
    text: "txt-evt-healingSprings-morning",
    charEvents: {
      count:"any", optional:true, 
      chat: 'cl-heal',
      setStatus: '-infected -jungleRot -jungleFever -malaria',
      health: 10,
      text: "txt-evt-healingSprings-morning-1"
    },
    select: {ref:'evt-healingSprings-actions'},
  },
  { 
    id: 'evt-healingSprings-actions',
    actions: [
      { ref:'evt-nature-rest' },
      { ref:'evt-nature-paint'},
      { ref:'evt-leave' }
    ],
  },

  {
    id: 'evt-overhang-explore',
    actionText: "txt-evt-altar-approach-action",
    text: "txt-evt-overhang-explore",
    playMusic: ['thm_nature_1'],
    showImage: {src: 'evt_fxt_overhang_1.png', type:'day',},
    chat: 'cl-nature',
    select: {ref:'evt-overhang-actions'}
  },
  {
    id: 'evt-overhang-morning',
    text: "txt-evt-overhang-morning",
    playMusic: ['thm_nature_1'],
    showImage: {src: 'evt_fxt_overhang_1.png', type:'day',},
    chat: 'cl-newMorning',       
    select: {ref:'evt-overhang-actions'}
  },
  { 
    id: 'evt-overhang-actions',
    actions: [
      { ref:'evt-nature-rest' },
      { ref:'evt-nature-paint'},
      { ref:'evt-leave' }
    ],
  },

  {
    id: 'evt-nature-paint',
    actionText: "txt-evt-nature-paint-action",
    reqFixtureFlags: '-painting',
    setFixtureFlags: '+painting',
    charEvents: [
      {
        reqCharFlags: '+artist',
        reqItems: {'it-canvas':1},
      },
      {
        optional: true,
        reqCharFlags: '+artist',
        reqStatus: '-angry',
        text: "txt-evt-nature-paint",
        select: [
          {
            slots: 1,
            text: "txt-evt-nature-paint-1",
            report: "txt-evt-nature-paint-report",
            setTempFlags: '+paintingLocation',
            select: 'evt-painting-create',
          },
        ],
      },
      {
        optional: true,
        reqCharFlags: '+artist',
        reqStatus: '+angry',
        select: 'evt-painting-angry',
      },
    ],
    partyEvents: [
    {
      optional: true,
      reqFixtureFlags: '+waterfall',
      select: 'evt-waterfall-actions'
    },
    {
      optional: true,
      reqFixtureFlags: '+overhang',
      select: 'evt-overhang-actions'
    },
    {
      optional: true,
      reqFixtureFlags: '+springs',
      select: 'evt-healingSprings-actions'
    }
    ]
  },
  {
    id: 'evt-nature-refillWater',
    actionText: "txt-evt-cave-mushrooms-refillWater-action",
    chat: 'cl-water-pack',
    items: {'it-water':10},
    select: 'evt-waterfall-actions'
  },

// ---- Nature Rest

  {
    id: 'evt-nature-rest',
    actionText: "txt-evt-nature-rest-action",
    partyEvents: [
      { 
        ref: 'evt-setImage-nightCamp' 
      },
      {
        optional: true,
        charEvents: {count: 3, reqCharFlags:'+humanoid'},
        text: "txt-evt-nature-rest",
      },
      {
        optional: true,
        charEvents: {count: 'all', reqCharFlags:'+special|-humanoid'},
        text: "txt-evt-nature-rest-1",
      },
      {
        optional: true,
        reqSanity: '31..',
        text: "txt-evt-nature-rest-2",
      },
      {
        optional: true,
        reqSanity: '1..30',
        text: "txt-evt-nature-rest-3",
      },
      {
        optional: true,
        reqSanity: '0',
        text: "txt-evt-nature-rest-4",
      }
    ],
    setPartyFlags: '+startFire +natureSleep',
    select: 'evt-sanity-select'
  },
  {
    id: 'evt-nature-sleep',
    actions: {
      actionText: "txt-evt-mission-cultist-rest-action",
      setPartyFlags: '-natureSleep',
      rest: {
        sanity: {base:sanityNaturalFixtures, bonus:'natureSanityBonus'},
        events: [
          { reqFixtureFlags: '+waterfall', select: 'evt-waterfall-morning' },
          { reqFixtureFlags: '+springs', select: 'evt-healingSprings-morning' },
          { reqFixtureFlags: '+overhang', select: 'evt-overhang-morning' },
          { reqFixtureFlags: '+oasis', select: 'evt-oasis-morning' },
          { reqFixtureFlags: '+ship', select: 'evt-ship-morning' },
          { reqFixtureFlags: '+camp', select: 'evt-camp-morning' },
        ]
      }  
    }
  },
  { 
    id: 'evt-sanity-cultist-injureSelf',
    charEvents: [
      {
        text: "txt-evt-sanity-cultist-injureSelf",
        report: "txt-evt-sanity-cultist-injureSelf-report",
        reqCharFlags: '+cultist',
        chat: 'cl-cultist-injureSelf',
        reqStatus: '-injured',
        health: -2,
      },
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-vulture',
    charEvents: {
      reqStatus: '+superstitious',
      reqLoyalty: '1..',
      chat: 'cl-vulture',
      text: "txt-evt-sanity-vulture",
      report: "txt-evt-sanity-vulture-report",
      actions: [
        {
          actionText: "txt-evt-sanity-vulture-action",
          alwaysShown: true,
          reqItems: {'it-ammo':1},
          items: {'it-ammo':-1},
          text: "txt-evt-sanity-vulture-1",
          report: "txt-evt-sanity-vulture-report-1",
          loot: {items: {'it-meat-raw':1}},
          select: 'evt-sanity-return'
        },
        {
          actionText: "txt-evt-sanity-vulture-action-1",
          reqItems: {'it-markedAmmo':1},
          items: {'it-markedAmmo':-1},
          text: "txt-evt-sanity-vulture-2",
          report: "txt-evt-sanity-vulture-report-2",
          loot: {items: {'it-meat-raw':1}},
          select: 'evt-sanity-return'
        },
        {
          actionText: "txt-st-kleptomania-idol-action-1",
          text: "txt-evt-sanity-vulture-3",
          report: "txt-evt-sanity-vulture-report-3",
          sanity: -10,
          loyalty: -1,
          select: 'evt-sanity-return'
        },
      ]
    }
  },
  { 
    id: 'evt-sanity-abomination-hungry',
    playMusic: ['thm_nature_night_campfire_dark_2'],
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    charEvents: [
      {
        reqCharFlags: '+abomination',
      },
      {
        optional: true,
        reqItems: {'it-meat-raw':1},
        text: "txt-evt-sanity-abomination-hungry",
        report: "txt-evt-sanity-abomination-hungry-report",
        setTempFlags: '+meat',
        actions: [
          {
            actionText: "txt-evt-sanity-abomination-hungry-action",
            text: "txt-evt-sanity-abomination-hungry-1",
            report: "txt-evt-sanity-abomination-hungry-report-1",
            items: {'it-meat-raw':-2},
          },
          {
            actionText: "txt-evt-sanity-abomination-hungry-action-1",
            text: "txt-evt-sanity-abomination-hungry-2",
            report: "txt-evt-sanity-abomination-hungry-report-2",
            charEvents: { 
              reqCharFlags:'+abomination', 
              removeCharacter:true
            },
            select: {
              combat: {refs: [{slots:1, 'emy-abomination':1}], win: 'evt-sanity-abomination-combat-win', flee: 'evt-sanity-abomination-combat-flee'}
            }
          },
        ],
      },
      {
        reqTempFlags: '-meat',
        reqCharFlags: '-abomination',
        select: 'evt-sanity-abomination-attackUnit',
      }
    ],
  },
  { 
    id: 'evt-sanity-abomination-attackUnit',
    charEvents: [
      {
        optional: true,
        reqCharFlags: '-cultist -abomination -special',
        setTempFlags: '+abominationVictim',
        text: "txt-evt-sanity-abomination-attackUnit",
        report: "txt-evt-sanity-abomination-attackUnit-report",
        actions: [
          {
            actionText: "txt-evt-sanity-abomination-attackUnit-action",
            text: "txt-evt-sanity-abomination-attackUnit-1",
            report: "txt-evt-sanity-abomination-attackUnit-report-1",
            charEvents: { reqCharFlags:'+abomination', removeCharacter:true},
            select: {
              combat: {
                refs: [{slots:1, 'emy-abomination':1}], 
                win: 'evt-sanity-abomination-combat-win', 
                flee: 'evt-sanity-abomination-combat-flee'
              }
            },
          },
          {
            actionText: "txt-evt-sanity-abomination-attackUnit-action-1",
            text: "txt-evt-sanity-abomination-attackUnit-2",
            report: "txt-evt-sanity-abomination-attackUnit-report-2",
            storeCharacter: true,
            setCharFlags: '+dead',
            sanity: -15,
            select: 'evt-sanity-return'
          }
        ],
      },
      {
        optional: true,
        reqCharFlags: '+cultist -special -abomination',
        reqTempFlags: '-abominationVictim',
        setTempFlags: '+abominationVictim',
        text: "txt-evt-sanity-abomination-attackUnit-3",
        report: "txt-evt-sanity-abomination-attackUnit-report-3",
        storeCharacter: true,
        setCharFlags: '+dead',
      },
      {
        optional: true,
        text: "txt-evt-sanity-abomination-attackUnit-4",
         report: "txt-evt-sanity-abomination-attackUnit-report-4",
        reqCharFlags: '+abomination',
        removeCharacter: true,
        reqPartyCount:'0..1',
        actions: {
          actionText: "txt-evt-cave-ghostsQuest-action",
          combat: {
            refs: [{slots:1, 'emy-abomination':1}], 
            win: 'evt-sanity-abomination-combat-win', 
            flee: 'evt-sanity-abomination-combat-flee'
          }
        },
      },
    ],
  },
  {
    id: 'evt-sanity-abomination-combat-win',
    loot: {
      items: {},
      cancel: 'evt-sanity-abomination-afterCombat',
      close: 'evt-sanity-abomination-afterCombat'
    }
  },
  {
    id: 'evt-sanity-abomination-combat-flee',
    sanity: -20,
    select: 'evt-sanity-abomination-afterCombat'
  },
  { 
    id: 'evt-sanity-abomination-afterCombat',
    text: "txt-evt-sanity-abomination-afterCombat",
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-cultist-leaveForMission',
    //chat: 'cl-replace',
    reqFixture: {flags:'+mission', range:'..80'},
    replaceFixtures: {range: '..80', old:'fxt-mission', new:'fxt-mission-cultist'},
    charEvents: [
      {
        reqCharFlags: '+cultist',
        text: "txt-evt-sanity-cultist-leaveForMission",
        report: "txt-evt-sanity-cultist-leaveForMission-report",
        setCharFlags: '+missionTakeover',
        storeCharacter: true,
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-flavor-camp',
    chat: 'cl-generic',
    text: "txt-evt-sanity-positive-flavor-camp",
    charEvents: [
      {
        optional: true,
        reqCharFlags: '+angry',
        text: "txt-evt-sanity-positive-flavor-camp-1"
      },
      {
        optional: true,
        reqCharFlags: '+superstitious -angry',
        text: "txt-evt-sanity-positive-flavor-camp-2"
      },
      {
        optional: true,
        reqCharFlags: '+religious',
        text: "txt-evt-sanity-positive-flavor-camp-3"
      },
      {
        optional: true,
        reqCharFlags: '+coward',
        text: "txt-evt-sanity-positive-flavor-camp-4"
      },
      {
        optional: true,
        reqCharFlags: '+brave',
        text: "txt-evt-sanity-positive-flavor-camp-5"
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-fame-stars',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    text: "txt-evt-sanity-positive-fame-stars",
    fame: +10,
    charEvents: [
      {
        optional: true,
        reqCharFlags: '+native',
        text: "txt-evt-sanity-positive-fame-stars-1",
        consume: true
      },
      {
        optional: true, consume: true,
        reqCharFlags: '+superstitious',
        text: "txt-evt-sanity-positive-fame-stars-2"
      },
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-native',
    chat: 'cl-generic',
    charEvents: [
      {
        count: 'any',
        reqCharFlags: '+native',
        text: "txt-evt-sanity-positive-native"
      },
      {
        optional: true,
        chance: 0.5,
        reqCharFlags: '+spiritual',
        text: "txt-evt-sanity-positive-native-1"
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-playing',
    chat: 'cl-generic',
    charEvents: {
      count: 2,
      reqCharFlags: '-special +humanoid',
      reqStatus: '-racist',
      text: "txt-evt-sanity-positive-playing",
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-flavor-diary',
    chat: 'cl-generic',
    text: "txt-evt-sanity-positive-flavor-diary",
    charEvents: {
      reqCharFlags: '+humanoid -special',
      reqLoyalty: '2..',
      text: "txt-evt-sanity-positive-flavor-diary-1"
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-acknowledge',
    chat: 'cl-generic',
    charEvents: {
      reqCharFlags: '+humanoid -special',
      reqLoyalty: '3..',
      text: "txt-evt-sanity-positive-acknowledge",
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-memory',
    storeEvents: {
      reqCharFlags: '+humanoid',
      reqLoyalty: '2..',
      reqAge: '20..',
      reqLevel: '1..',
      text: "txt-evt-sanity-positive-memory"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-positive-cook',
    reqMaxPerWorld: 1,
    charEvents: [
      {
        reqCharFlags: '+cook',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-positive-cook",
        setCharFlags: '+soupLife', // soupLife for post narrative
      },
      {
        count: 'any',
        reqStatus: '+injured',
        health: +5
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-nativeScout',
    chat: 'cl-generic',
    charEvents: [
      {
        reqCharFlags: '+scout',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-positive-nativeScout",
        compassScore: +5,
        setPartyStatus: {'os-viewDistance':true},
      },
      {
        optional: true,
        chance: 0.5,
        reqStatus: '+racist',
        text: "txt-evt-sanity-positive-nativeScout-1"
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-nativeWarrior',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    charEvents: [
      {
        reqCharFlags: '+nativeWarrior',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-positive-nativeWarrior",
        items: [
          {slots:3, 'it-meat-raw':2},
          {slots:1, 'it-meat-raw':3}
        ]
      },
      {
        optional: true,
        reqCharFlags: '+cook',
        text: "txt-evt-sanity-positive-nativeWarrior-1"
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-nativeShaman',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    charEvents: {
      reqCharFlags: '+nativeShaman',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-positive-nativeShaman",
      items: [
        {slots:1, 'it-mushroom-healing':2},
        {slots:1, 'it-mushroom-status':2},
        {slots:1, 'it-mushroom-view':2}
      ]
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-sailor',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    charEvents: {
      reqCharFlags: '+sailor',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-positive-sailor",
      items: [{slots:1, 'it-whisky':2}]
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-missionary',
    reqMaxPerWorld: 1,
    chat: 'cl-generic',
    charEvents: [
      {
        reqCharFlags: '+missionary',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-positive-missionary",
        report: "txt-evt-sanity-positive-missionary-report",
        consume: true
      },
      {
        reqCharFlags: '-special +humanoid',
        reqLoyalty: '..3',
        reqTurns: '30..',
        text: "txt-evt-sanity-positive-missionary-1",
        report: "txt-evt-sanity-positive-missionary-report-1",
        loyalty: +1
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-soldierBritish',
    reqMaxPerWorld: 1,
    chat: 'cl-generic',
    charEvents: {
      reqCharFlags: '+soldierBritish',
      reqLoyalty: '1..',
      items: {'it-markedAmmo':3},
      text: "txt-evt-sanity-positive-soldierBritish",
      report: "txt-evt-sanity-positive-soldierBritish-report"
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-animalHandler',
    reqMaxPerWorld: 1,
    chat: 'cl-generic',
    charEvents: [
      {
        reqCharFlags: '+nativeAnimalHandler',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-positive-animalHandler",
        report: "txt-evt-sanity-positive-animalHandler-report"
      },
      {
        reqCharFlags: '+animal',
        loyalty: +1,
        text: "txt-evt-sanity-positive-animalHandler-1",
        report: "txt-evt-sanity-positive-animalHandler-report-1",
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-trader',
    reqMaxPerWorld: 1,
    chat: 'cl-generic',
    reqFixture: {flags:'+trader', fixtureKnown:false, range:'..100'},
    posTile: {fixtureFlags:'+trader', fixtureKnown:false, closest:true},
    revealTiles: {radius:1, fixture:true},
    charEvents: {
      reqCharFlags: '+trader',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-positive-trader"
    },
    select: 'evt-sanity-return'
  },

  { 
    id: 'evt-sanity-flavor-lowSanity',
    chat: 'cl-generic',
    text: "txt-evt-sanity-flavor-lowSanity",
    charEvents: [
      {
        reqCharFlags: '-special +humanoid'
      },
      {
        optional: true,
        chance: 0.5,
        reqStatus: {'st-alcoholic':true},
        text: "txt-evt-sanity-flavor-lowSanity-1",
        consume: true
      },
      {
        optional: true,
        chance: 0.5,
        reqCharFlags: '+native',
        text: "txt-evt-sanity-flavor-lowSanity-2",
        consume: true
      },
      {
        optional: true,
        chance: 0.5,
        text: "txt-evt-sanity-flavor-lowSanity-3"
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-jungleRot',
    charEvents: [
      {
        reqCharFlags: '-special +humanoid',
        text: "txt-evt-sanity-jungleRot",
        setStatus: '+jungleRot',
        consume: true
      },
      {
        reqCharFlags: '+humanoid',
        chat: 'cl-disgust'
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-nativeVisit-init',
    reqWorldFlags: '-nativeVisit',
    setPartyFlags: {
      nativeVisitWarrior:false, 
      nativeVisitScout:false, 
      nativeVisitShaman:false, 
      nativeVisitAnimalHandler:false
    },
    select: [
      {
        setPartyFlags: '+nativeVisitWarrior', 
        select: 'evt-sanity-nativeVisit'
      },
      {
        setPartyFlags: '+nativeVisitScout', 
        select: 'evt-sanity-nativeVisit'
      },
      {
        setPartyFlags: '+nativeVisitShaman', 
        select: 'evt-sanity-nativeVisit'
      },
      {
        setPartyFlags: '+nativeVisitAnimalHandler', 
        select: 'evt-sanity-nativeVisit'
      }
    ]
  },
  { 
    id: 'evt-sanity-nativeVisit',
    chat: 'cl-nativeVisit',
    text: "txt-evt-sanity-nativeVisit",
    report: "txt-evt-sanity-nativeVisit-report",
    setWorldFlags: '+nativeVisit',
    partyEvents: [
      { ref: 'evt-setImage-nightCamp' },
      {
        optional: true,
        reqPartyFlags: '+nativeVisitWarrior',
        npc: [
          'pl-native-warrior',
          'pl-native-warrior',
          'npc-native-generic',
        ],
      },
      {
        optional: true,
        reqPartyFlags: '+nativeVisitScout',
        npc: [
          'pl-native-scout',
          'pl-native-scout',
          'npc-native-generic',
        ],
      },
      {
        optional: true,
        reqPartyFlags: '+nativeVisitShaman',
        npc: [
          'pl-native-shaman',
          'pl-native-shaman',
          'npc-native-generic',
        ],
      },
      {
        optional: true,
        reqPartyFlags: '+nativeVisitAnimalHandler',
        npc: [
          'pl-native-animalHandler',
          'pl-native-animalHandler',
          'pl-native-animalHandler',
        ],
      },
    ],

    charEvents: [
      {
        optional: true,
        reqStatus: {'st-racist':true},
        text: "txt-evt-sanity-nativeVisit-1"
      },
      {
        optional: true,
        reqStatus: {'st-paranoid':true},
        text: "txt-evt-sanity-nativeVisit-2"
      },
    ],
    actions: ['evt-sanity-nativeVisit-invite', 'evt-sanity-nativeVisit-sendAway'],
  },
  { 
    id: 'evt-sanity-nativeVisit-invite',
    actionText: "txt-evt-sanity-nativeVisit-invite-action",
    report: "txt-evt-sanity-nativeVisit-invite-report",
    charEvents: [
      {
        text: "txt-evt-sanity-nativeVisit-invite",
      },
      {
        optional: true,
        reqStatus: {'st-racist':true},
        loyalty: -1,
        text: "txt-evt-sanity-nativeVisit-invite-1"
      }
    ],
    actions: [
      {
        actionText: "txt-evt-mission-trade-action",
        reqTileFlags: '-trade',
        setTileFlags: '+trade',
        report: "txt-evt-sanity-nativeVisit-invite-report-1",
        barter: {
          priceTable: 'village',
          items: {'il-trade-village':3, 'il-metaItems':99},
          close: 'evt-sanity-nativeVisit-invite',
          cancel: 'evt-sanity-nativeVisit-invite'
        },
      },
      {
        actionText: "txt-evt-mission-cultist-recruit-action",
        text: "txt-evt-sanity-nativeVisit-invite-2",
        report: "txt-evt-sanity-nativeVisit-invite-report-2",
        reqTileFlags: '-recruit',
        setTileFlags: '+recruit',
        select: [
          {
            reqPartyFlags: {nativeVisitWarrior: true},
            addCharacter: {
              id:'pl-native-warrior', 
              setCharFlags: '+homeWorld',
              setStatus: {'st-homesick':true}
            },
            chat: 'cl-join-nativeWarrior',
            select: 'evt-sanity-nativeVisit-invite',
          },
          {
            reqPartyFlags: {nativeVisitScout: true},
            addCharacter: {
              id:'pl-native-scout', 
              setCharFlags: '+homeWorld',
              setStatus: {'st-homesick':true}
            },
            chat: 'cl-join-nativeScout',
            select: 'evt-sanity-nativeVisit-invite',
          },
          {
            reqPartyFlags: {nativeVisitShaman: true},
            addCharacter: {
              id:'pl-native-shaman', 
              setCharFlags: '+homeWorld',
              setStatus: {'st-homesick':true}
            },
            chat: 'cl-join-nativeShaman',
            select: 'evt-sanity-nativeVisit-invite',
          },
          {
            reqPartyFlags: {nativeVisitAnimalHandler: true},
            addCharacter: {
              id:'pl-native-animalHandler', 
              setCharFlags: '+homeWorld',
              setStatus: {'st-homesick':true}
            },
            chat: 'cl-join-nativeAnimalHandler',
            select: 'evt-sanity-nativeVisit-invite',
          },
        ],
      },
      {
        actionText: "txt-evt-mission-sleep-action",
        text: "txt-pl-native-animalHandler",
        select: 'evt-sanity-return'
      }
    ],
  },
  { 
    id: 'evt-sanity-nativeVisit-sendAway',
    actionText: "txt-evt-sanity-nativeVisit-sendAway-action",
    charEvents: {
      optional: true,
      reqCharFlags: '+translator -special',
      text: "txt-evt-sanity-nativeVisit-sendAway",
    },
    text: "txt-evt-sanity-nativeVisit-sendAway-1",
    report: "txt-evt-sanity-nativeVisit-sendAway-report",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-drums',
    chat: 'cl-generic',
    text: "txt-evt-sanity-flavor-drums",
    charEvents: [
      {
        optional: true, chance: 0.5,
        text: "txt-evt-sanity-flavor-drums-1"
      },
      {
        optional: true, chance: 0.5,
        reqCharFlags: '+spiritual',
        text: "txt-evt-sanity-flavor-drums-2"
      }
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-history',
    reqMaxPerWorld: 1,
    chat: 'cl-generic',
    text: "txt-evt-sanity-flavor-history",
    storeEvents: {
      reqCharFlags: '+humanoid +native +stayHome',
      text: "txt-evt-sanity-flavor-history-1"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-cook',
    reqMaxPerWorld: 1,
    chat: 'cl-generic',
    charEvents: [
      {
        reqCharFlags: '+cook',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-flavor-cook",
        report: "txt-evt-sanity-flavor-cook-report",
        consume: true
      },
      {
        optional: true,
        reqLoyalty: '..1',
        reqCharFlags: '+witty',
        text: "txt-evt-sanity-flavor-cook-1"
      }
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-memory-nightmare',
    storeEvents: [
      {
        reqCharFlags: '+humanoid',
        text: "txt-evt-sanity-flavor-memory-nightmare"
      }
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-childhood',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    text: "txt-evt-sanity-flavor-childhood",
    charEvents: [
      {
        reqCharFlags: '-special -native +humanoid',
        text: "txt-evt-sanity-flavor-childhood-1",
        consume: true
      },
      {
        optional: true,
        chance: 0.5,
        reqCharFlags: '-special +native +humanoid',
        text: "txt-evt-sanity-flavor-childhood-2",
        consume: true
      },
      {
        optional: true,
        chance: 0.5,
        reqCharFlags: '-special +humanoid -native',
        text: "txt-evt-sanity-flavor-childhood-3",
        consume: true
      },
      {
        optional: true,
        chance: 0.5,
        reqCharFlags: '-special +humanoid',
        text: "txt-evt-sanity-flavor-childhood-4",
        consume: true
      },
      {
        optional: true,
        reqLoyalty: '..1',
        text: "txt-evt-sanity-flavor-childhood-5"
      }
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-missionary',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    charEvents: {
      reqCharFlags: '+missionary',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-flavor-missionary",
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-lastExpedition',
    chat: 'cl-generic',
    reqWorld: '5..',
    reqMaxPerWorld: 1,
    charEvents: {
      reqCharFlags: '-special +humanoid +veteran',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-flavor-lastExpedition",
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-romance',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    text: "txt-evt-sanity-flavor-romance",
    charEvents: {
      count: 2,
      reqCharFlags: '-special +humanoid',
      text: "txt-evt-sanity-flavor-romance-1"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-gorillas',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    reqPartyFlags: '+gorillaCombat',
    text: "txt-evt-sanity-flavor-gorillas",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-desert',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    reqBiomeFlags: '+desert',
    text: "txt-evt-sanity-flavor-desert",
    partyEvents: {
      optional: true,
      reqItems: {'it-water':1},
      text: "txt-evt-sanity-flavor-desert-water"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-temples',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    text: "txt-evt-sanity-flavor-temples",
    report: "txt-evt-sanity-flavor-temples-report",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-magneticMountains',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    reqFixture: {flags:'+magnetic', range:'..10'},
    text: "txt-evt-sanity-flavor-magneticMountains",
    report: "txt-evt-sanity-flavor-magneticMountains-report",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-patternMatching',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    reqWorld: '1..',
    reqBiomeFlags: '-desert',
    text: "txt-evt-sanity-flavor-patternMatching",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-stoneOverhang',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    reqFixtureFlags: '+overhang',
    text: "txt-evt-sanity-flavor-stoneOverhang",
    report: "txt-evt-sanity-flavor-stoneOverhang-report",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-waterfall',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    reqFixtureFlags: '+waterfall',
    text: "txt-evt-sanity-flavor-waterfall",
    charEvents: {
      optional: true,
      reqCharFlags: '+humanoid -special',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-flavor-waterfall-1"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-tesla',
    reqMaxPerWorld: 1,
    reqExplorer: 'sp-tesla',
    text: "txt-evt-sanity-flavor-tesla",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-arctic-snowBlind',
    reqBiomeFlags: '+arctic',
    charEvents: [
      {
        reqCharFlags: '+special',
        text: "txt-evt-sanity-flavor-arctic-snowBlind"
      },
      {
        reqCharFlags: '+humanoid -special -abomination -native',
        text: "txt-evt-sanity-flavor-arctic-snowBlind-1",
      }
    ],
    select: 'evt-sanity-return'
  },

  {
    id: 'evt-sanity-flavor-homeworld',
    reqMaxPerWorld: 1,
    charEvents: {
      reqStatus: '+homesick',
      text: "txt-evt-sanity-flavor-homeworld"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-mountainFace',
    reqMaxPerWorld: 1,
    reqFixture: {flags:'+mountainFace', range:'..15', fixtureKnown:true},
    text: "txt-evt-sanity-flavor-mountainFace",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-sticks',
    reqMaxPerWorld: 1,
    reqFixture: {flags:'+sticks', range:'..15', fixtureKnown:true, count:'2..'},
    text: "txt-evt-sanity-flavor-sticks",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-angry',
    charEvents: [
      {
        reqLoyalty: '1..',
        reqCharFlags: '+humanoid -abomination -special',
        text: "txt-evt-sanity-flavor-angry"
      },
      {
        reqLoyalty: '0',
        text: "txt-evt-sanity-flavor-angry-1"
      }
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-alcohol',
    charEvents: {
      reqStatus: {'st-alcoholic':true}, 
      reqItems: {'it-whisky':1},
      items: {'it-whisky':-1},
      chat: 'cl-alcohol',
      text: "txt-evt-sanity-alcohol",
      report: "txt-evt-sanity-alcohol-report",
      actions: [
        {
          actionText: "txt-evt-sanity-alcohol-action",
          text: "txt-evt-sanity-alcohol-1",
          report: "txt-evt-sanity-alcohol-report-1",
          sanity: -10,
          loyalty: -1,
          select: 'evt-sanity-return'
        },
        {
          actionText: "txt-evt-sanity-alcohol-action-1",
          text: "txt-evt-sanity-alcohol-2",
          report: "txt-evt-sanity-alcohol-report-2",
          sanity: 10,
          loyalty: +1,
          compassScore: malusAlcohol,
          charEvents: {
            optional:true, count: 'any',
            reqStatus: {'pk-sanityDrinking-1':true},
            sanity: {base:0, bonus:'whiskyBonus'},
          },
          select: 'evt-sanity-return'
        },
      ]
    },
  },
  {
    id: 'evt-sanity-positive-translator',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    charEvents: {
      reqCharFlags: '+translator -special',
      text: "txt-evt-sanity-positive-translator",
    },
    actions: [
      {
        actionText: "txt-evt-sanity-positive-translator-action",
        text: "txt-evt-sanity-positive-translator-yes",
        sanity: -10,
        charEvents: {reqCharFlags: '+translator -special', loyalty: +1},
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-evt-sanity-positive-translator-action-1",
        text: "txt-evt-sanity-positive-translator-no",
        select: 'evt-sanity-return'
      }
    ]
  },
  {
     id: 'evt-sanity-nativeBond',
     chat: 'cl-generic',
     charEvents: {
       reqCharFlags: '+native',
       reqStatusDayAge: {ref:'st-homesick', age:'20..'},
       reqLoyalty: '1..',
       loyalty: +1,
       text: "txt-evt-sanity-nativeBond",
     },
     select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-cannibal',
    charEvents: [
      {
        reqCharFlags: '+humanoid -special -abomination',
        reqStatus: '+cannibal',
        chat: 'cl-generic-cannibal',
        text: "txt-evt-sanity-cannibal",
        report: "txt-evt-sanity-cannibal-report",
      },
      {
        reqCharFlags: '+humanoid -special -abomination',
        reqStatus: '-cannibal', 
        text: "txt-evt-sanity-cannibal-1",
        report: "txt-evt-sanity-cannibal-report-1",
        storeCharacter: true,
        setCharFlags: '+dead',
      },
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-nativeGhosts',
    reqPartyFlags: '-nativeGhostQuest',
    reqWorld: '1..',
    reqMaxPerWorld: 1,
    playMusic: ['thm_nature_night_campfire_dark_2'],
    chat: 'cl-nativeGhosts',
    npc: [
      'npc-nativeGhost-1',
      'npc-nativeGhost-2',
      'npc-nativeGhost-3',
    ],
    text: "txt-evt-sanity-nativeGhosts",
    actions: [
      {
        actionText: "txt-evt-sanity-nativeGhosts-action",
        text: "txt-evt-sanity-nativeGhosts-1",
        posTile: {range: '5..20', tileKnown: false, tiles: 'tl-mountain'},
        addFixture: {ref:'fxt-cave-ghostsQuest'},
        revealTiles: {radius:1, fixture:true, centerCam:true, particle: 'pt-magic-reveal'},
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-pl-cultist-action",
        text: "txt-evt-sanity-nativeGhosts-2",
        karma: -10,
        select: 'evt-sanity-return'
      }
    ]
  },
  {
    id: 'evt-sanity-kleptomania-stealItem',
    chat: 'cl-generic',
    charEvents: {
      reqStatus: '+kleptomania',
      text: "txt-evt-sanity-kleptomania-stealItem",
    },
    reqItemsValue: '5..',
    dropItems: 5,
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-kleptomania-conflict',
    chat: 'cl-generic',
    charEvents: [
      {
        // need to make sure that we don't select same guy twice
        reqCharFlags: '-special +humanoid',
        reqStatus: '-kleptomania',
        text: "txt-evt-sanity-kleptomania-conflict",
        report: "txt-evt-sanity-kleptomania-conflict-report",
        actions: {
          actionText: "txt-evt-sanity-kleptomania-conflict-action",
          text: "txt-evt-sanity-kleptomania-conflict-1",
          report: "txt-evt-sanity-kleptomania-conflict-report-1",
          loyalty: -1,
          select: 'evt-sanity-return'
        },
      },
      {
        reqStatus: '+kleptomania',
        text: "txt-evt-sanity-kleptomania-conflict-2",
        report: "txt-evt-sanity-kleptomania-conflict-report-2",
        actions: {
          actionText: "txt-evt-sanity-kleptomania-conflict-action-1",
          text: "txt-evt-sanity-kleptomania-conflict-3",
          report: "txt-evt-sanity-kleptomania-conflict-report-3",
          loyalty: -1,
          select: 'evt-sanity-return'
        },
      },
    ],
  },
  { 
    id: 'evt-sanity-nightmare', 
    chat: 'cl-generic',
    charEvents: {
      reqStatus: '+paranoid | +superstitious',
      setCharFlags: '+paranoidEvent',
      text: "txt-evt-sanity-nightmare",
      report: "txt-evt-sanity-nightmare-report",
    },
    actions: [
      {
        actionText: "txt-generic-ignore",
        sanity: -15,
        text: "txt-evt-sanity-nightmare-1",
        charEvents: {
          optional: true, // so that the preconditions are fullfilled for basic check
          reqCharFlags: '+humanoid -special -paranoidEvent',
          loyalty: -1,
          text: "txt-evt-sanity-nightmare-2",
        },
        report: "txt-evt-sanity-nightmare-report-1",
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-evt-sanity-nightmare-action",
        charEvents: {
          reqCharFlags: '+paranoidEvent',
          text: "txt-evt-sanity-nightmare-3",
          report: "txt-evt-sanity-nightmare-report-2",
        },
        reqDice: 'mind',
        winEvents: [
          {
            charEvents:{
              reqCharFlags: '+paranoidEvent',
              setCharFlags: '-paranoidEvent',
              loyalty: -1,
              text: "txt-evt-sanity-nightmare-4",
            },
            select: 'evt-sanity-return'
          },
        ],
        failEvents: [
          {
            charEvents:{
              reqCharFlags: '+paranoidEvent',
              text: "txt-evt-sanity-nightmare-5",
              report: "txt-evt-sanity-nightmare-report-3",
              storeCharacter: true,
              setCharFlags: '-paranoidEvent +dead',
            },
            select: 'evt-sanity-return'
          },
        ]
      },
    ],
  },
  {
    id: 'evt-noSanity-racist',
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    charEvents: [
      {
        reqStatus: '+racist',
        text: "txt-evt-noSanity-racist",
        chat: 'cl-racist-conflict',
        report: "txt-evt-noSanity-racist-report",
        actions: 'evt-conflict-racist-dismiss',
      },
      {
        reqCharFlags: '+native',
        setStatus: '-homesick',
        text: "txt-evt-noSanity-racist-1",
        report: "txt-evt-noSanity-racist-report-1",
        actions: 'evt-conflict-racist-dismiss',
      },
    ],
  },
    {
    id: 'evt-conflict-racist-dismiss',
    actionText: "txt-evt-harbor-countTrek-action",
    text: "txt-evt-conflict-racist-dismiss",
    report: "txt-evt-conflict-racist-dismiss-report",
    charEvents: {
      optional: true,
      reqStatus: '+racist',
      chat: 'cl-racist-confirmation',
    },
    storeCharacter: true,
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-fight',  
    chat: 'sanityFightBurton',
    charEvents: [
      {
        count: 2,
        reqCharFlags: '+humanoid -special',
        text: "txt-evt-sanity-fight",
        report: "txt-evt-sanity-fight-report",
        actions: {
          actionText: "txt-evt-sanity-fight-action",
          reqDice: 'sword',
          winEvents: [
            {
              text: "txt-evt-sanity-fight-1",
              loyalty: -1
            },
          ],
          failEvents: [
            {
              text: "txt-evt-sanity-fight-2",
              report: "txt-evt-sanity-fight-report-1",
              storeCharacter: true,
            },
          ],
        },
      }
    ],
    actions: {
      actionText: "txt-evt-sanity-fight-action-1",
      reqItems: {'it-chocolate':2},
      text: "txt-evt-sanity-fight-3",
      items: {'it-chocolate':-2},
      sanity: +10,
      select: 'evt-sanity-return'
    },
  },
  { 
    id: 'evt-sanity-paranoid',
    chat: 'cl-generic',
    charEvents: {
      reqStatus: '+paranoid',
      text: "txt-evt-sanity-paranoid",
      report: "txt-evt-sanity-paranoid-report",
      loyalty: -1
    },
    select: 'evt-sanity-return',
    sanity: -10,
  },

  { 
    id: 'evt-sanity-apply-paranoid',
    charEvents: {
      reqCharFlags: '-special +humanoid -abomination',
      reqStatus: '-paranoid -blessingPureMind',
      text: "txt-evt-sanity-apply-paranoid",
      report: "txt-evt-sanity-apply-paranoid-report",
      chat: 'cl-apply-paranoid',
      setStatus: '+paranoid',
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-claustrophobic',
    charEvents: {
      reqStatus: '-blessingPureMind -claustrophobic',
      reqFixtureFlags: '+overhang',
      reqCharFlags: '+humanoid -special -abomination',
      setStatus: '+claustrophobic',
      chat: 'cl-apply-claustrophobic',
      text: "txt-evt-sanity-apply-claustrophobic",
      report: "txt-evt-sanity-apply-claustrophobic-report",
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-lepidopterophobia',
    reqWorldFlags: '+jungle',
    charEvents: {
      reqStatus: '-blessingPureMind -lepidopterophobia',
      reqCharFlags: '+humanoid -special -abomination',
      setStatus: '+lepidopterophobia',
      chat: 'cl-apply-lepidopterophobia',
      text: "txt-evt-sanity-apply-lepidopterophobia",
      report: "txt-evt-sanity-apply-lepidopterophobia-report",
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-acrophobia',
    charEvents: {
      reqStatus: '-blessingPureMind -acrophobia',
      reqFixtureFlags: '+springs',
      reqCharFlags: '+humanoid -special -abomination',
      setStatus: '+acrophobia',
      chat: 'cl-apply-acrophobia',
      text: "txt-evt-sanity-apply-acrophobia",
      report: "txt-evt-sanity-apply-acrophobia-report",
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-dendrophobia',
    reqWorldFlags: '+jungle',
    charEvents: {
      reqStatus: '-blessingPureMind -dendrophobia',
      reqCharFlags: '+humanoid -special -abomination',
      reqFixtureFlags: '-springs -overhang',
      setStatus: '+dendrophobia',
      chat: 'cl-apply-dendrophobia',
      text: "txt-evt-sanity-apply-dendrophobia",
      report: "txt-evt-sanity-apply-dendrophobia-report",
      health: -2,
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-kleptomania',
    charEvents: {
      reqStatus: '-blessingPureMind -kleptomania',
      reqCharFlags: '+humanoid -special -abomination',
      setStatus: '+kleptomania',
      chat: 'cl-apply-kleptomania',
      text: "txt-evt-sanity-apply-kleptomania",
      report: "txt-evt-sanity-apply-kleptomania-report",
    },
  },
  {
    id: 'evt-sanity-apply-pyromaniac',
    charEvents: {
      reqStatus: '-blessingPureMind -pyromaniac',
      reqCharFlags: '+humanoid -special -abomination',
      text: "txt-evt-sanity-apply-pyromaniac",
      report: "txt-evt-sanity-apply-pyromaniac-report",
      chat: 'cl-apply-pyromaniac',
      setStatus: '+pyromaniac',
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-bipolar',
    charEvents: {
      reqStatus: '-blessingPureMind -bipolar',
      reqCharFlags: '+humanoid -special -abomination',
      text: "txt-evt-sanity-apply-bipolar",
      report: "txt-evt-sanity-apply-bipolar-report",
      chat: 'cl-apply-bipolar',
      setStatus: '+bipolar',
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-scurvy',
    charEvents: {
      text: "txt-evt-sanity-apply-scurvy",
      reqCharFlags: '-special +humanoid -abomination',
      setStatus: '+scurvy'
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-sprained',
    charEvents: {
      text: "txt-evt-sanity-apply-sprained",
      reqCharFlags: '-special +humanoid -abomination',
      setStatus: '+sprained'
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-hearingLoss',
    reqMaxPerWorld: 1,
    charEvents: {
      text: "txt-evt-sanity-apply-hearingLoss",
      reqCharFlags: '-special +humanoid -abomination',
      setStatus: '+hearingLoss'
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-viewingLoss',
    reqMaxPerWorld: 1,
    charEvents: {
      text: "txt-evt-sanity-apply-viewingLoss",
      reqCharFlags: '-special +humanoid -abomination',
      setStatus: '+viewingLoss'
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-apply-pneumonia',
    charEvents: {
      text: "txt-evt-sanity-apply-pneumonia",
      reqCharFlags: '-special +humanoid -abomination',
      setStatus: '+pneumonia'
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-alcoholic-turkey',
    charEvents: {
      reqStatus: '+alcoholic',
      text: "txt-evt-sanity-alcoholic-turkey",
      reqLoyalty: '1..2',
      actions: [
        {
          actionText: "txt-evt-sanity-alcoholic-turkey-action",
          alwaysShown: true,
          reqItems: {'it-whisky':1},
          items: {'it-whisky':-1},
          text: "txt-evt-sanity-alcoholic-turkey-1",
          loyalty: +1,
          select: 'evt-sanity-return'
        },
        {
          actionText: "txt-st-kleptomania-idol-action-1",
          text: "txt-evt-sanity-alcoholic-turkey-2",
          loyalty: -3,
          select: 'evt-sanity-return'
        }
      ],
    },
  },
  { 
    id: 'evt-sanity-mummy',
    reqItems: {'it-mummy':1},
    playMusic: ['thm_nature_night_campfire_dark_2'], 
    select: [
      {
        slots: 1, // Apply Paranoid
        charEvents: {
          reqStatus: '-paranoid',
          reqCharFlags: '-special',
          text: "txt-evt-sanity-mummy",
          report: "txt-evt-sanity-mummy-report",
          charEvents: {
            reqStatus: '-paranoid -blessingPureMind',
            reqCharFlags: '+humanoid -special',
            text: "txt-evt-sanity-mummy-1",
            setStatus: '+paranoid',
            chat: 'cl-apply-paranoid',
          },
        },
      },
      {
        slots:1, // Combat
        reqDifficulty: '1..',
        chat: 'cl-mummy-attack',
        text: "txt-evt-sanity-mummy-2",
        report: "txt-evt-sanity-mummy-report-1",
        items: {'it-mummy':-1},
        actions: [
          {
            actionText: "txt-evt-cave-ghostsQuest-action",
            combat: {
              refs:{'emy-mummy':1}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return'
            }
          }
        ],
      },
      {
        slots:3, // Combat
        reqDifficulty: '1..',
        reqItems: {'it-mummy':2},
        chat: 'cl-mummy-attack',
        text: "txt-evt-sanity-mummy-3",
        report: "txt-evt-sanity-mummy-report-2",
        items: {'it-mummy':-2},
        actions: [
          {
            actionText: "txt-evt-cave-ghostsQuest-action",
            combat: {
              refs:{'emy-mummy':1}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return',
            }
          }
        ],
      }

    ]
    
  },
  {
    id: 'evt-sanity-loot-return',
    loot:{
      items:{},
      cancel: 'evt-sanity-return',
      close: 'evt-sanity-return'
    }
  },
  {
    id: 'evt-sanity-flee-return',
    sanity: -20,
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-return-friend',
    storeEvents: {
      reqAge: '15..',
      reqCharFlags: '+humanoid -imaginary -dead',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-friendReturn",
      actions: [
        {
          actionText: "txt-evt-sanity-friendReturn-action",
          text: "txt-evt-sanity-friendReturn-yes",
          report: "txt-evt-sanity-friendReturn-report",
          chat: 'cl-friendReturn',
          restoreCharacter: true,
          loyalty: +1,
          select: 'evt-sanity-return'
        },
        {
          actionText: "txt-evt-dismiss-default-action",
          text: "txt-evt-sanity-friendReturn-no",
          report: "txt-evt-sanity-friendReturn-report-1",
          select: 'evt-sanity-return'
        }
      ]
    }
  },
  {
    id: 'evt-sanity-return-angryLeave',
    storeEvents: {
      reqCharFlags: '-dead',
      reqLoyalty: '0',
      reqAge: '10..',
      text: "txt-evt-sanity-return-angryLeave",
      actions: [
        {
          actionText: "txt-evt-sanity-friendReturn-action",
          text: "txt-evt-sanity-return-angryLeave-1",
          report: "txt-evt-sanity-return-angryLeave-report",
          chat: 'cl-angryReturn',
          restoreCharacter: true,
          loyalty: +2,
          select: 'evt-sanity-return'
        },
        {
          actionText: "txt-evt-dismiss-default-action",
          text: "txt-evt-sanity-return-angryLeave-no",
          report: "txt-evt-sanity-return-angryLeave-report-1",
          select: 'evt-sanity-return'
        }
      ]
    }
  },
  {
    id: 'evt-sanity-return-nativeCurse',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    storeEvents: {
      reqLoyalty: '0',
      reqCharFlags: '+native -dead',
      text: "txt-evt-sanity-angry-native",
    },
    charEvents: {
      reqCharFlags: '-special +humanoid',
      text: "txt-evt-sanity-angry-native-1",
      setStatus: '+deathCurse'
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-flavor-imaginary',
    charEvents: [
      { 
        reqCharFlags: '+imaginary',
        text: "txt-evt-sanity-flavor-imaginary",
      },
      {
        reqCharFlags: '-special +humanoid -imaginary',
        text: "txt-evt-sanity-flavor-imaginary-1",
        chat: 'cl-imaginary',
      }, 
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-helpNative-1',
    chat: 'cl-whatIsIt',
    text:"txt-evt-sanity-helpNative-1",
    report: "txt-evt-sanity-helpNative-1-report",
    actions: [
      {
        // investigate action
        actionText: "txt-evt-sanity-helpNative-1-action",
        text: "txt-evt-sanity-helpNative-1-yes",
        chat: 'cl-helpNative',
        actions: [
          'evt-sanity-helpNative-heal-firstAid',
          'evt-sanity-helpNative-heal-mushroom',
          'evt-sanity-helpNative-death'
        ],
        report: "txt-evt-sanity-helpNative-1-yes-report",
      },
      {
        actionText: "txt-st-kleptomania-idol-action-1",
        text: "txt-evt-sanity-helpNative-1-no",
        report: "txt-evt-sanity-helpNative-1-no-report",
        chat: 'cl-racist-confirmation',
        select: 'evt-sanity-return'
      }
    ]
  },
  {
    id: 'evt-sanity-helpNative-heal-firstAid',
    actionText: "txt-evt-sanity-helpNative-heal-firstAid-action",
    text:"txt-evt-sanity-helpNative-heal-firstAid",
    report: "txt-evt-sanity-helpNative-heal-firstAid-report",
    reqItems: {'it-firstAid':1}, alwaysShown: true,
    items: {'it-firstAid':-1},
    standing: +2,
    select: [
      // {
      //   text:"txt-evt-sanity-helpNative-heal-firstAid-1",
      //   select: ['evt-sanity-helpNative-recruit-scout','evt-sanity-helpNative-recruit-shaman','evt-sanity-helpNative-recruit-animalHandler'],
      // },
      {  
        text:"txt-evt-sanity-helpNative-heal-firstAid-2",
        select: 'evt-sanity-return'
      }, 
    ],
  },
  {
    id: 'evt-sanity-helpNative-heal-mushroom',
    actionText: "txt-evt-sanity-helpNative-heal-mushroom-action",
    text:"txt-evt-sanity-helpNative-heal-mushroom",
    report: "txt-evt-sanity-helpNative-heal-mushroom-report",
    reqItems: {'it-mushroom-healing':1}, alwaysShown: true,
    items: {'it-mushroom-healing':-1},
    standing: +2,
    select: [
      // {
      //   text:"txt-evt-sanity-helpNative-heal-mushroom-1",
      //   select: ['evt-sanity-helpNative-recruit-scout','evt-sanity-helpNative-recruit-shaman','evt-sanity-helpNative-recruit-animalHandler'],
      // },
      {  
        text:"txt-evt-sanity-helpNative-heal-mushroom-2",
        select: 'evt-sanity-return'
      }, 
    ],
  },
  {
    id: 'evt-sanity-helpNative-2',
    charEvents: {
      count: 'all',
      reqCharFlags: '-nativeWarrior'
    },
    select: {
      text:"txt-evt-sanity-helpNative-2",
      report: "txt-evt-sanity-helpNative-2-report",
      partyEvents: { ref: 'evt-setImage-nightCamp' },
      chat: 'cl-helpNative-2',
      actions: [
        {
          actionText: "txt-evt-sanity-helpNative-2-action",
          addCharacter: 'pl-native-warrior',
          chat: 'cl-join-nativeWarrior',
          events: [ 
            {slots:1, reqWorld: '..1', combat: { refs:{'emy-tiger':1}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return'}},
            {slots:1, reqWorld: '2..', combat: { refs:{'emy-tiger':2}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return'}},
            {slots:1, reqWorld: '2..', combat: { refs:{'emy-gorilla':1}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return'}},
            {slots:1, reqWorld: '3..', combat: { refs:{'emy-crocodile':1}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return'}},
            {slots:1, combat:{refs:{'emy-hyena':3}, win: 'evt-sanity-loot-return', flee: 'evt-sanity-flee-return'}},
          ],
        },
        {
          actionText: "txt-st-kleptomania-idol-action-1",
          text: "txt-evt-sanity-helpNative-2-no",
          report: "txt-evt-sanity-helpNative-2-no-report",
          select: 'evt-sanity-return'
        }
      ]
    },
  },
  {
    id: 'evt-sanity-helpNative-recruit',
    text: "txt-evt-sanity-helpNative-recruit",
    report: "txt-evt-sanity-helpNative-recruit-report",
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-helpNative-recruit-scout',
    text: "txt-evt-sanity-helpNative-recruit-scout",
    charEvents: {
      count: "all",
      reqCharFlags: {nativeScout:false},
    },
    actions: [
      {
        alwaysShown: true,
        actionText: "txt-evt-sanity-helpNative-recruit-scout-action",
        addCharacter: 'pl-native-scout',
        chat: 'cl-join-nativeScout',
        text: "txt-evt-sanity-helpNative-recruit-scout-1",
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-evt-harbor-recruit-action",
        text: "txt-evt-sanity-helpNative-recruit-scout-2",
        select: 'evt-sanity-return'
      }, 
    ],
  }, 
  {
    id: 'evt-sanity-helpNative-recruit-warrior',
    text: "txt-evt-sanity-helpNative-recruit-warrior",
    charEvents: {
      count: "all",
      reqCharFlags: {nativeWarrior:false},
    },
    actions: [
      {
        alwaysShown: true,
        actionText: "txt-evt-sanity-helpNative-recruit-warrior-action",
        addCharacter: 'pl-native-warrior',
        chat: 'cl-join-nativeWarrior',
        text: "txt-evt-sanity-helpNative-recruit-warrior-1",
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-evt-harbor-recruit-action",
        text: "txt-evt-sanity-helpNative-recruit-warrior-2",
        select: 'evt-sanity-return'
      }, 
    ],
  },
  {
    id: 'evt-sanity-helpNative-recruit-shaman',
    text: "txt-evt-sanity-helpNative-recruit-shaman",
    charEvents: {
      count: "all",
      reqCharFlags: {nativeShaman:false},
    },
    actions: [
      {
        alwaysShown: true,
        actionText: "txt-evt-sanity-helpNative-recruit-shaman-action",
        addCharacter: 'pl-native-shaman',
        chat: 'cl-join-nativeShaman',
        text: "txt-evt-sanity-helpNative-recruit-shaman-1",
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-evt-harbor-recruit-action",
        text: "txt-evt-sanity-helpNative-recruit-shaman-2",
        select: 'evt-sanity-return'
      },
    ]
  },
  {
    id: 'evt-sanity-helpNative-recruit-animalHandler',
    text: "txt-evt-sanity-helpNative-recruit-animalHandler",
    charEvents: {
      count: "all",
      reqCharFlags: {nativeAnimalHandler:false},
    },
    actions: [
      {
        alwaysShown: true,
        actionText: "txt-evt-sanity-helpNative-recruit-animalHandler-action",
        addCharacter: 'pl-native-animalHandler',
        chat: 'cl-join-nativeAnimalHandler',
        text: "txt-evt-sanity-helpNative-recruit-animalHandler-1",
        select: 'evt-sanity-return'
      },
      {
        actionText: "txt-evt-harbor-recruit-action",
        text: "txt-evt-sanity-helpNative-recruit-animalHandler-2",
        select: 'evt-sanity-return'
      },
    ],
  },
  {
    id: 'evt-sanity-helpNative-death',
    actionText: "txt-evt-sanity-helpNative-death-action",
    text:"txt-evt-sanity-helpNative-death",
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-paranoid-rope',
    sanity: -10,
    charEvents: [
      {
        reqStatus: {'st-paranoid':true},optional:false,
        text: "txt-evt-sanity-paranoid-rope",
        actions: [
          {
            actionText: "txt-evt-sanity-paranoid-rope-action",
            reqDice: 'sword',
            winEvents: [
              {
                text: "txt-evt-sanity-paranoid-rope-1",
                select: 'evt-sanity-return'
              }
            ],
            failEvents: [
              {
                text: "txt-evt-sanity-paranoid-rope-2",
                charEvents: {
                  optional: true,
                  text: "txt-evt-sanity-paranoid-rope-3",
                  reqCharFlags: '-special +humanoid',
                  reqStatus: '-paranoid', 
                  health: -4,
                },
                select: 'evt-sanity-return'
              },
            ],
          },
          {
            actionText: "txt-evt-sanity-paranoid-rope-action-1",
            reqItems: {'it-rope':1},
            text: "txt-evt-sanity-paranoid-rope-4",
            report: "txt-evt-sanity-paranoid-rope-report",
            select: 'evt-sanity-return'
          },
        ],
      },
      {
        count: 2, reqCharFlags: {humanoid: true, special: false},
      }
    ]
  },  
  { 
    id: 'evt-sanity-paranoid-racist',
    sanity: -10,
    charEvents: [
      {
        reqStatus: {'st-paranoid':true, 'st-racist':true},
        chat: 'cl-racist-paranoid',
        text: "txt-evt-sanity-paranoid-racist",
        report: "txt-evt-sanity-paranoid-racist-report",
      },
      {
        reqCharFlags: {native:true},
        text: "txt-evt-sanity-paranoid-racist-1",
        report: "txt-evt-sanity-paranoid-racist-report-1",
      },
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-faithLost',
    charEvents: {
      reqPerk: '+spiritualSolidarity',
      setPerk: '-spiritualSolidarity',
      setCharFlags: '-missionary',
      text: "txt-evt-sanity-faithLost",
      report: "txt-evt-sanity-faithLost-report",
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-faithRegained',
    charEvents: {
      reqCharacter: 'pl-missionary',
      reqPerk: '-spiritualSolidarity',
      setPerk: '+spiritualSolidarity',
      setCharFlags: '+missionary',
      text: "txt-evt-sanity-positive-faithRegained",
      report: "txt-evt-sanity-positive-faithRegained-report",
    },
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-notRacist',
    charEvents: [
      {
        reqStatus: '+racist',
        reqLevel: '2..',
        reqLoyalty: '1..',
        setStatus: '-racist',
        text: "txt-evt-sanity-positive-notRacist",
        report: "txt-evt-sanity-positive-notRacist-report",
      },
      {
        optional: true,
        reqCharFlags: '+native',
        text: "txt-evt-sanity-positive-notRacist-native",
      }
    ],
    select: 'evt-sanity-return'
  },
  { 
    id: 'evt-sanity-positive-goodStanding',
    reqMaxPerWorld: 1,
    text: "txt-evt-sanity-positive-goodStanding",
    charEvents: {
      reqCharFlags: '+native',
      reqStanding: '3..',
      reqLoyalty: '2..',
      items: {'it-nativeTrinket':1},
      text: "txt-evt-sanity-positive-goodStanding-1"
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-timAlone',
    charEvents: [
      {
        reqCharFlags: '+tim',
        text: "txt-evt-sanity-timAlone",
        report: "txt-evt-sanity-timAlone-report",
        loyalty: -1
      },
      {
        count: 'all',
        reqCharFlags: '-luis'
      }
    ],
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-sanity-arctic-frostbite',
    reqBiomeFlags: '+arctic',
    charEvents: [
      {
        optional: true,
        count: 'any',
        setCharFlags: '-frostbite'
      },
      {
        reqCharFlags: '+humanoid -special -abomination',
        text: "txt-evt-sanity-arctic-frostbite",
        health: -3,
        consume: false,
        setCharFlags: '+frostbite'
      },
      {
        optional: true,
        reqCharFlags: '+frostbite',
        reqStatus: '+alcoholic',
        text: "txt-evt-sanity-arctic-frostbite-1"
      }
    ],
    select: 'evt-sanity-return'
  },
])