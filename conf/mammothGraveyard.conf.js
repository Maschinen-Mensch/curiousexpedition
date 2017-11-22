config.entities.add([

// fixtures

  {
    id: 'fxt-mammothGraveyard',
    name: "txt-fxt-mammothGraveyard-name",
    reqBiomeFlags: '+arctic',
    sprite: "res_fxt_mammothGraveyard.png",
    setTile: [
      {ref:'tl-frozenPlains', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {count:5, ref:'tl-frozenPlains', reqBiomeFlags: '+arctic'},
    ],
    spawnEvents: [
      {slots:2},
      {setFixtureFlags: '+wildlife'}
    ],
    actions: 'evt-mammothGraveyard-explore',
    debugCategory: 'loot',
    debugColor: '#5DADE2',
  },

// events

  { 
    id: 'evt-mammothGraveyard-explore',
    reqFixtureFlags: '-explored',
    actionText: "txt-evt-altar-approach-action",
    text: "txt-evt-mammothGraveyard-explore",
    chat: 'cl-scaryPlace',
    setFixtureFlags: '+mammothGraveyard',
    partyEvents: {
      optional: true,
      reqFixtureFlags: '+wildlife',
      text: 'txt-evt-leave-wildlife-hint'
      },
    showImage: {
      src: 'evt_fxt_mammothGraveyard_1.png', type: 'day', showMounted: true,
      particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
      particlesChance: 0.5
    },
    playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2'],
    actions: [
      { ref:'evt-searchArea'},
      'evt-leave'
    ]
  },
  { 
    id: 'evt-mammothGraveyard-searchOutcome',
    setFixtureFlags: '+explored',
    select: [
      {slots: 8, ref: 'evt-mammothGraveyard-searchOutcome-1'},
      {slots: 1, ref: 'evt-mammothGraveyard-searchOutcome-2'},
    ],
  },
  { 
    id: 'evt-mammothGraveyard-searchOutcome-1',
    loot: {
      items: {'il-loot-elephantGraveyard':1},
      close: 'evt-leave'
    }
  },
  { 
    id: 'evt-mammothGraveyard-searchOutcome-2',
    text: "txt-evt-elephantGraveyard-searchOutcome-2",
    loot: {
      items: [
        {slots:6, 'it-egg-tortoise':1},
        {slots:3, 'it-dinoSkull':1},
        {slots:1, 'it-egg-raptor':1},
      ],
      close: 'evt-leave'
    }
  },
])
