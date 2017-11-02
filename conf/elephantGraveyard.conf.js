config.entities.add([

// fixtures

  {
    id: 'fxt-elephantGraveyard',
    name: "txt-fxt-elephantGraveyard-name",
    reqBiomeFlags: '-desert -arctic',
    sprite: "res_fxt_elephantGraveyard.png",
    setTile: [
      {ref:'tl-sulfur-swamp', reqBiomeFlags: '+prehistoric -mushrooms'},
      {ref:'tl-swamp'},
    ],
    setNeighbors: [
      {count:5, ref:'tl-swamp', reqBiomeFlags: '-prehistoric'},
      {count:5, ref:'tl-sulfur-swamp', reqBiomeFlags: '+prehistoric'},
    ],
    spawnEvents: [
      {slots:2},
      {setFixtureFlags: '+wildlife'}
    ],
    actions: 'evt-elephantGraveyard-explore',
    debugCategory: 'loot',
    debugColor: '#5DADE2',
  },

// events

  { 
    id: 'evt-elephantGraveyard-explore',
    reqFixtureFlags: '-explored',
    actionText: "txt-evt-altar-approach-action",
    text: "txt-evt-elephantGraveyard-explore",
    report: "txt-evt-elephantGraveyard-explore-report",
    chat: 'cl-scaryPlace',
    partyEffects: {
      optional: true,
      reqFixtureFlags: '+wildlife',
      text: 'txt-evt-leave-wildlife-hint'
    },
    showImage: {
      src: 'evt_fxt_elephantGraveyard_1.png', 
      type:'day'
    },
    playMusic: [
      'thm_nature_mystic_1', 
      'thm_nature_mystic_2'
    ],
    actions: [
      { ref:'evt-searchArea', pushEvent: 'evt-elephantGraveyard-searchOutcome' },
      'evt-leave'
    ],
  },
  { 
    id: 'evt-elephantGraveyard-searchOutcome',
    setFixtureFlags: '+explored',
    events: [
      {slots: 8, ref: 'evt-elephantGraveyard-searchOutcome-1'},
      {slots: 1, ref: 'evt-elephantGraveyard-searchOutcome-2'},
    ],
  },
  { 
    id: 'evt-elephantGraveyard-searchOutcome-1',
    loot: {
      items: {'il-loot-elephantGraveyard':1},
      close: 'evt-leave'
    }
  },
  { 
    id: 'evt-elephantGraveyard-searchOutcome-2',
    text: "txt-evt-elephantGraveyard-searchOutcome-2",
    report: "txt-evt-elephantGraveyard-searchOutcome-2-report",
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
