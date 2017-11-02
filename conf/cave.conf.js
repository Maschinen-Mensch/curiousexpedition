config.entities.add([

// fixtures

  {
    id: 'fxt-cave',
    name: "txt-fxt-cave-name",
    flags: '+cave', keepReachable: true,
    sprite: [
      {ref:'res_fxt_cave.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_cave_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-mountain', reqBiomeFlags: '-arctic'},
      {ref:'tl-glacier-land', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {ref:'tl-mountain', count:3, reqBiomeFlags: '-arctic'},
      {ref:'tl-glacier-land', count:3, reqBiomeFlags: '+arctic'},
    ],
    spawnEvents: [  
      {slots:20, setFixtureFlags: '+caveTypeCorpses'},
      {slots:15, setFixtureFlags: '+caveTypeOpening'},
      {slots:10, setFixtureFlags: '+caveTypePaintings', reqWorld:'1..4'},
      {slots:10, setFixtureFlags: '+caveTypeMushrooms'},
      {slots:10, setFixtureFlags: '+caveTypeMummy'},
      {slots:2, reqBiomeFlags:'+arctic', setFixtureFlags: '+caveTypeYeti'},
    ],
    actions: 'evt-cave-approach',
    debugCategory: 'cave', 
    debugColor: '#5DADE2',
  },
  {
    id: 'fxt-cave-ghostsQuest',
    extends: 'fxt-cave',
    spawnEvents: {setFixtureFlags: '+caveTypeGhostsQuest'},
  },

// events

  {
    id: 'evt-cave-approach',
    reqFixtureFlags: '-explored',
    actionText: "txt-evt-cave-approach-action",
    playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2'],
    partyEffects: [
      {
        optional: true, reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_cave_1.png', type:'day'},
      },
      {
        optional: true, reqBiomeFlags: '+arctic',
        showImage: {
          src: 'evt_fxt_cave_arctic.png', type: 'day', showMounted: true,
          particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'], particlesChance: 0.5
        }
      },
      {
        optional: true, reqFixtureFlags: '+caveTypeYeti',
        events: [
          {
            reqPartyFlags: '-yetiEncountered', setPartyFlags: '+yetiEncountered',
            events: 'evt-cave-yeti',
          },
          {
            reqPartyFlags: '+yetiEncountered',
            setFixtureFlags: '+caveTypeCorpses -caveTypeYeti',
          },
        ],
      },
      {
        optional: true, reqFixtureFlags: '-caveTypeYeti',
        text: "txt-evt-cave-approach",
        report: "txt-evt-cave-approach-report",
        chat: 'cl-cave-approach',
        actions: [
          'evt-cave-explore-torch',
          'evt-cave-explore-pumpkinLantern',
          'evt-cave-explore-noTorch',
          'evt-leave'
        ]
      }
    ],
  },
  {
    id: 'evt-cave-explore-torch',
    reqItems: {'it-torch':1},
    alwaysShown: true,
    actionText: "txt-evt-cave-explore-torch-action",
    reqFixtureFlags: '-caveTypeYeti',
    items: {'it-torch':-1},
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    text: "txt-evt-cave-explore-torch",
    events: 'evt-cave-explore-all',
  },
  {
    id: 'evt-cave-explore-pumpkinLantern',
    reqItems: {'it-pumpkinLantern':1},
    actionText: "txt-evt-cave-explore-pumpkinLantern-action",
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    text: "txt-evt-cave-explore-pumpkinLantern",
    events: 'evt-cave-explore-all',
  },
  {
    id: 'evt-cave-explore-noTorch',
    actionText: "txt-evt-cave-explore-noTorch-action",
    reqFixtureFlags: '-caveTypeYeti',
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    showImage: {src: 'evt_fxt_cave_darkness.png', type:'day'},
    text: "txt-evt-cave-explore-noTorch",
    reqDice: 'awarenes',
    winEvents: [
      { // No bad stuff
        text: "txt-evt-cave-explore-noTorch-1",
      }
    ],
    failEvents: [
      { // Injury
        slots: 5,
        setFixtureFlags: '+noTorchInjury',
        charEffects: { 
          reqCharFlags: '+humanoid -special -abomination',
          reqStatus: '-injured' 
        },
        text: "txt-evt-cave-explore-noTorch-2",
      },
      { // Spiders
        slots: 3,
        reqDifficulty: '1..',
        setFixtureFlags: '+spiders',
        text: "txt-evt-cave-explore-noTorch-3",
      },
      { // Claustrophobic
        slots: 6,
        charEffects: { 
          reqCharFlags: '+humanoid -special -abomination',
          reqStatus: '+claustrophobic' 
        },
        text: "txt-evt-cave-explore-noTorch-4",
        events: [
          {slots:3, setFixtureFlags: '+noTorchClaustrophobic'},
          {slots:1, setFixtureFlags: '+noTorchClaustrophobicDeath'},
        ]
      },
      { // Death
        slots: 2,
        reqDifficulty: '1..',
        charEffects: { 
          reqCharFlags: '+humanoid -special -abomination' 
        },
        setFixtureFlags: '+noTorchDeath',
        text: "txt-evt-cave-explore-noTorch-5",
      },
      { // Abomination
        slots: 2,
        charEffects: { 
          reqCharFlags: '+humanoid -special -abomination' 
        },
        setFixtureFlags: '+noTorchAbomination',
        text: "txt-evt-cave-explore-noTorch-6",
      },
    ],
    actions: [
      {
        actionText: "txt-evt-sanity-angry-action",
        showImage: {src: 'evt_fxt_cave_darkness_2.png'},
        text: "txt-evt-cave-explore-noTorch-7",
        charEffects: [
          {
            optional: true,
            reqFixtureFlags: '+noTorchInjury',
            reqCharFlags: '-special +humanoid -abomination',
            reqStatus: '-injured',
            health: -6,
            text: "txt-evt-cave-explore-noTorch-8",
          },
          {
            optional: true,
            reqFixtureFlags: '+spiders',
            text: "txt-evt-cave-explore-noTorch-9",
            pushEvent: 'evt-cave-explore-all',
            events: [
              {reqWorld: '..2',slots: 2, combat: [{'emy-giantSpider':1}]},
              {reqWorld: '2..', slots: 1, combat: [{'emy-giantSpider':2}]},
              {reqWorld: '4..', slots: 2, combat: [{'emy-giantSpider':3}]},
            ],
          },
          {
            optional: true,
            reqFixtureFlags: '+noTorchClaustrophobic',
            charEffects: { 
              reqCharFlags: {special:false, humanoid:true, abomination:false}, reqStatus: {'st-claustrophobic':true},
              text: "txt-evt-cave-explore-noTorch-10",
            },
            sanity: -20,
          },
          {
            optional: true,
            reqFixtureFlags: '+noTorchClaustrophobicDeath',
            charEffects: {
              reqCharFlags: {special:false, humanoid:true, abomination:false}, reqStatus: {'st-claustrophobic':true},
              text: "txt-evt-cave-explore-noTorch-11",
              storeCharacter: true,
              setCharFlags: '+dead',
            },
            sanity: -20,
          },
          {
            optional: true,
            reqFixtureFlags: '+noTorchDeath',
            charEffects: {
              reqCharFlags: { special:false, humanoid:true, abomination:false },
              text: "txt-evt-cave-explore-noTorch-12",
              storeCharacter: true,
            },
          },
          {
            optional: true,
            reqFixtureFlags: '+noTorchAbomination',
            charEffects: {
              reqCharFlags: {special:false, humanoid:true, abomination:false },
              text: "txt-evt-cave-explore-noTorch-13",
              removeCharacter: true,
            },
            addCharacter: 'pl-abomination',
          },
        ],
        actions: 'evt-cave-explore-all',
      },
    ]
  },
  {
    id: 'evt-cave-explored-leave',
    actionText: "txt-evt-cave-explored-leave-action",
    partyEffects:[
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        replaceTiles: {
          radius: 0, 
          old: 'tl-mountain', 
          new: 'tl-mountainTraversable',
          animate: false
        }
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        replaceTiles: {
          radius: 0, 
          old: 'tl-glacier-land',
          new: 'tl-glacier-land-traversable',
          animate: false
        }
      },
      {
        teleport: true // AFTER fixture replacement
      }
    ],
    events: 'evt-leave'
  },
  {
    id: 'evt-cave-explore-all',
    actionText: "txt-evt-sanity-angry-action",
    events: [
      {reqFixtureFlags: '+caveTypeOpening',                 events: 'evt-cave-opening'},
      {reqFixtureFlags: '+caveTypePaintings',               events: 'evt-cave-paintings'},
      {reqFixtureFlags: '+caveTypeMushrooms',               events: 'evt-cave-mushrooms'},
      {reqFixtureFlags: '+caveTypeCorpses',                 events: 'evt-cave-corpses'},
      {reqFixtureFlags: '+caveTypeMummy',                   events: 'evt-cave-mummy'},
      {reqFixtureFlags: '+caveTypeTeleport',                events: 'evt-cave-teleport-arrive'},
      {reqFixtureFlags: '+caveTypeGhostsQuest',             events: 'evt-cave-ghostsQuest'},
      {reqFixtureFlags: '+caveTypeYeti',                    events: 'evt-cave-yeti'},
      {reqFixtureFlags: '+caveTypeMonsterDenGiantSpiders',  events: 'evt-cave-monsterDen-giantSpiders'},
    ],
  },
  {
    id: 'evt-cave-ghostsQuest',
    setFixtureFlags: '+explored',
    setPartyFlags: '+nativeGhostQuest',
    showImage: {src: 'evt_fxt_cave_spiders.png'},
    text: "txt-evt-cave-ghostsQuest",
    report: "txt-evt-cave-ghostsQuest-report",
    actions: {
      actionText: "txt-evt-cave-ghostsQuest-action",
      combat: [{'emy-giantSpider':2, 'emy-giantSpider-quest':1}],
    },
  },
  {
    id: 'evt-cave-monsterDen-giantSpiders',
    setFixtureFlags: '+explored',
    setPartyFlags: '+nativeGhostQuest',
    showImage: {src: 'evt_fxt_cave_spiders.png'},
    text: "txt-evt-cave-monsterDen-giantSpiders",
    report: "txt-evt-cave-monsterDen-giantSpiders-report",
    actions: {
      actionText: "txt-evt-cave-ghostsQuest-action",
      combat: [{'emy-giantSpider':2}],
    },
  },
  {
    id: 'evt-cave-opening',
    setFixtureFlags: '+explored',
    showImage: {src: 'evt_fxt_cave_hole.png'},
    text: "txt-evt-cave-opening",
    report: "txt-evt-cave-opening-report",
    charEffects: [
      {
        optional: true,
        count: "any",
        actions: 'evt-cave-sendIn'
      },
      {
        optional: true,
        count: "all",
        reqCharFlags: '+humanoid -special',
        reqStatus: {'st-injured':true},
        text: "txt-evt-cave-opening-1",
        report: "txt-evt-cave-opening-report-1"
      },
    ],
    actions: 'evt-cave-explored-leave',
  },
  {
    id: 'evt-cave-paintings',
    showImage: {src: 'evt_fxt_cave_paintings.png'},
    setFixtureFlags: '+explored',
    text: "txt-evt-cave-paintings",
    report: "txt-evt-cave-paintings-report",
    events: 'evt-unlock-specialWorld-noText',
    actions: 'evt-cave-explored-leave',
  },
  {
    id: 'evt-cave-mushrooms', 
    showImage: {src: 'evt_fxt_cave_mushrooms.png'},
    chat: 'cl-nature',
    text: "txt-evt-cave-mushrooms",
    report: "txt-evt-cave-mushrooms-report",
    actions: [
      {
        actionText: "txt-evt-cave-mushrooms-action",
        setFixtureFlags: '+explored',
        text: "txt-evt-cave-mushrooms-1",
        loot: {
          items: [
            {slots: 1, 'il-mushrooms':1},
            {slots: 3, 'il-mushrooms':2},
            {slots: 1, 'il-mushrooms':3},
          ],
          close: 'evt-cave-explored-leave',
        },
      },
      'evt-cave-mushrooms-refillWater',
      'evt-cave-explored-leave',
    ],
  },
  {
    id: 'evt-cave-mushrooms-refillWater',
    actionText: "txt-evt-cave-mushrooms-refillWater-action",
    chat: 'cl-water-pack',
    items: {'it-water':10},
    events: 'evt-cave-mushrooms'
  },
  {
    id: 'evt-cave-corpses', 
    showImage: {src: 'evt_fxt_cave_corpses.png',},
    chat: 'cl-scaryPlace',
    text: "txt-evt-cave-corpses",
    report: "txt-evt-cave-corpses-report",
    actions: [
      {
        actionText: "txt-evt-cave-corpses-action",
        chat: 'cl-scaryPlace',
        setFixtureFlags: '+explored',
        text: "txt-evt-cave-corpses-1",
        report: "txt-evt-cave-corpses-report-1",
        loot: {
          items: [
            {slots:1, 'il-loot-standard':3},
            {slots:2, 'il-loot-standard':2},
            {slots:1, 'it-map-treasure':1, 'it-shovel':1, 'il-loot-standard':2},
            {slots:1, 'il-treasure-lowValue':1, 'it-jewels':1, 'il-loot-standard':1},
            {slots:1, 'il-magic':1, 'il-loot-standard':2},
          ],
          close: 'evt-cave-explored-leave',
        },
      },
      'evt-cave-explored-leave',
    ],
  },

  {
    id: 'evt-cave-mummy',
    showImage: {src: 'evt_fxt_cave_mummy.png',},
    setFixtureFlags: '+explored',
    chat: 'cl-sacrileg-warning',
    text: "txt-evt-cave-mummy",
    report: "txt-evt-cave-mummy-report",
    actions: [
      {
        actionText: "txt-evt-cave-mummy-action",
        chat: 'cl-sacrileg-loot',
        setFixtureFlags: '+explored',
        text: "txt-evt-cave-mummy-1",
        setPartyFlags: '+sacrileg',
        loot: {
          items: [
            {slots:1, 'it-mummy':2},
            {slots:3, 'it-mummy':1},
            {slots:1, 'it-mummy':1, 'it-jewels':1},
            {slots:1, 'it-mummy':1, 'il-treasure-lowValue':1},
          ],
          close: 'evt-cave-explored-leave',
        },
      },
      'evt-cave-explored-leave',
    ],
  },
  {
    id: 'evt-cave-sendIn', 
    actionText: "txt-evt-cave-sendIn-action",
    setCharFlags: '+exploring',
    reqCharFlags: '-special +humanoid',
    chat: 'cl-cave-sendIn',
    report: "txt-evt-cave-sendIn-report",
    reqDice: 'awarenes',
    charEffects: [
      {
        optional: true,
        reqStatus: '+claustrophobic',
        reqCharFlags: '+exploring',
        text: "txt-evt-cave-sendIn",
      },
      {
        optional: true,
        reqStatus: '-claustrophobic',
        reqCharFlags: '+exploring',
        text: "txt-evt-cave-sendIn-1",
      },
    ],
    winEvents: {ref: 'evt-cave-outcome-rewards'},
    failEvents: {ref: 'evt-cave-outcome-bad-1'}
  },
  {
    id: 'evt-cave-outcome-rewards',
    setFixtureFlags: '+explored',
    events: [
      {
        slots: 5,
        charEffects: {
          reqCharFlags: '+exploring',
          setCharFlags: '-exploring',
          text: "txt-evt-cave-outcome-rewards",
          report: "txt-evt-cave-outcome-rewards-report",
        },
        loot: {
          items: [
            {slots:3, 'il-loot-standard':3, 'it-jewels':1},
            {slots:1, 'il-treasure-lowValue':2, 'it-jewels':1},
            {slots:1, 'il-magic':1, 'il-tomePages':2},
          ],
          close: 'evt-cave-explored-leave'
        },
      },
      {
        slots: 1,
        charEffects: {
          reqCharFlags: '+exploring',
          setCharFlags: '-exploring',
          text: "txt-evt-cave-outcome-rewards-1",
        },
        loot: {items: {'il-magic':1}, close: 'evt-cave-explored-leave'},
      },
    ],
  },
  {
    id: 'evt-cave-outcome-bad-1',
    charEffects: [
      {
        reqCharFlags: '+exploring',
        reqStatus: '-claustrophobic',
      },
      {
        optional: true,
        reqCharFlags: '+exploring +native',
        setCharFlags: '-exploring',
        setTempFlags: '+nativeExploring',
        storeCharacter: true,
        text: "txt-evt-cave-outcome-bad-1",
        report: "txt-evt-cave-outcome-bad-1-report",
      },
      {
        optional: true,
        reqCharFlags: '+exploring -native',
        setCharFlags: '-exploring',
        storeCharacter: true,
        text: "txt-evt-cave-outcome-bad-2",
        report: "txt-evt-cave-outcome-bad-1-report-1",
      },
      {
        optional: true, count: 1, chance: 0.8,
        reqCharFlags: '-exploring',
        reqStatus: '+racist',
        reqTempFlags: '+nativeExploring',
        text: "txt-evt-cave-outcome-bad-3",
      },
      {
        count: "any",
        optional: true,
        actions: 'evt-cave-sendIn'
      },
    ],
    actions: 'evt-cave-explored-leave',
  }, 
])