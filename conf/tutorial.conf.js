config.entities.add([

// goals

  {
    id: 'gol-goldenTemple-tutorial',
    fixtures: [
      {ref:'fxt-goldenTemple-tutorial'},
    ]
  },

// pockets

  {
    id: 'pck-world-tutorial-1', 
    name: "txt-bio-grasslands-generic-name",
    ambientSound: 'sfx_loop_grasslands_1',
    biomes: [
      {select: 1, ref: 'bio-tutorial'},
    ]
  },

// biomes

  {
    id: 'bio-tutorial',
    name: "txt-bio-grasslands-generic-name",
    flags: '+grass',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 0, 
    terrain: [
      {perlin: 0.82,  tile: 'tl-dry'},
      {perlin: 0.8,   tile: 'tl-mountain'},
      {perlin: 0.795, tile: 'tl-hill'},
      {perlin: 0.77,  tile: 'tl-grass-bushes'},
      {perlin: 0.72,  tile: 'tl-grass'},
      {perlin: 0.68,  tile: 'tl-jungle-thick'},
      {perlin: 0.67,  tile: 'tl-hill'},
      {perlin: 0.64,  tile: 'tl-jungle-light'},
      {perlin: 0.55,  tile: 'tl-jungle-thick'},
      {perlin: 0.51,  tile: 'tl-jungle-light'},
      {perlin: 0.43,  tile: 'tl-grass'},
      {perlin: 0.43,  tile: 'tl-grass-bushes'},
      {perlin: 0.00,  tile: 'tl-grass'},
    ],
  },

// Zones

  {
    id: 'zn-tiger-tutorial',
    name: "txt-emy-tiger-name",
    sprite: 'res_zones_tiger.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 1.0, 
    moveSpeed: 3.0,
    maxSeekTurns: 0, // unlimited
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        combat: [{'emy-tiger':1}]
      }
    ]
  },

// ---- Tutorial

  {
    id: 'evt-tutorial-start-1',
    reqTutorial: true,
    showImage: {src: 'evt_fxt_empty.png', type: 'day'},
    chat: 'tut-1',
    text: "txt-evt-tutorial-start-1",
    actions: 'evt-tutorial-start-2',
  },
  {
    id: 'evt-tutorial-start-2',
    actionText: "txt-evt-tutorial-start-2-action",
    chat: 'tut-2',
    text: "txt-evt-tutorial-start-2",
    actions: 'evt-tutorial-start-3',
  },
  {
    id: 'evt-tutorial-start-3',
    playMusic: ['jgl_good_1'],
    actionText: "txt-evt-tutorial-start-3-action",
  },
  {
    id: 'evt-tutorial-1',
    text: "txt-evt-tutorial-1",
  },

  {
    id: 'evt-tutorial-overburden-1',
    reqTutorial: true,
    text: "txt-evt-tutorial-overburden-1",
    showImage: {src: 'evt_fxt_empty.png', type: 'day'},
    npc: 'npc-native-generic',
    npcEffects: {
      events: [
        {
          reqGender: 'male',
          charEffects: {
            reqCharFlags: '-special',
            text: "txt-evt-tutorial-overburden-2",
          },
        },
        {
          reqGender: 'female',
          charEffects: {
            reqCharFlags: '-special',
            text: "txt-evt-tutorial-overburden-3",
          },
        },
      ],
      loot: {
        items: {'it-mango':5, 'it-meat-animal-cooked-perfect':2, 'it-torch':1, 'it-mushroom-view':1, 'it-redBerries':3},
      },
    },
  },
  {
    id: 'evt-tutorial-shipReturn',
    events: [
      {
        // we just force the combat onto player if he managed to skip it somehow
        reqPartyFlags: '-tutCombatDone',
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        combat: [{'emy-tiger':1}]
      },
      {
        reqPartyFlags: '+tutCombatDone',
        sanity: +100,
        chat: 'tut-shipArrival-1',
        text: "txt-evt-tutorial-shipReturn",
        addCharacter: 'pl-soldier-scottish pl-translator anm-donkey',
        actions: {
          actionText: "txt-evt-tutorial-shipReturn-action",
          items: {'it-whisky':4, 'it-torch':3, 'it-shotgun':1}
        }
    }]    
  },
])