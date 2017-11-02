config.entities.add([

// Fixtures

  {
    id: 'fxt-raptorNest',
    name: "txt-fxt-raptorNest-name",
    reqBiomeFlags: '+prehistoric',
    sprite: "res_fxt_raptorNest.png",
    setTile: [
      {ref:'tl-grass-bushes', reqBiomeFlags: '-dry'},
      {ref:'tl-dry-jungle-light',   reqBiomeFlags: '+dry | +desert'},
    ],
    setNeighbors: [
      {count:4, ref:'tl-grass-stoneForest', reqBiomeFlags: '-dry'},
      {count:4, ref:'tl-dry-stoneForest',   reqBiomeFlags: '+dry | +desert'},
    ],
    spawnEvents: {
      addZone: {ref:'zn-raptor', range:1},
    },
    actions: ['evt-raptorNest-init'],
  },

// Events

  {
    id: 'evt-raptorNest-init',
    reqTileFlags: '-explored',
    actionText: "txt-evt-altar-approach-action",
    showImage: {src: 'evt_fxt_raptorNest_1.png', type:'day'},
    events: 'evt-raptorNest-main',
  },
  {
    id: 'evt-raptorNest-main',
    text: "txt-evt-raptorNest-main",
    report: "txt-evt-raptorNest-main-report",
    chat: 'cl-deadlyPlace',
    pushEvent: 'evt-raptorNest-searchOutcome',
    actions: ['evt-searchArea', 'evt-leave']
  },
  { 
    id: 'evt-raptorNest-searchOutcome',
    setPartyFlags: {raptors:true},
    events: [
      {
        slots: 1,
        text: "txt-evt-raptorNest-searchOutcome",
        report: "txt-evt-raptorNest-searchOutcome-report",
        loot: {
          items: {'it-egg-raptor':1},
          close: 'evt-leave'
        },
      },
      {
        slots: 2, 
        text: "txt-evt-raptorNest-searchOutcome-1",
        report: "txt-evt-raptorNest-searchOutcome-report-1",
        loot: {
          items: [
            {slots: 1, 'il-loot-standard':2},
            {slots: 1, 'il-loot-standard':3},
          ],
          close: 'evt-leave'
        },
      },
    ],
  },

// Raptor hatching

  {
    id: 'evt-raptor-hatch',
    showImage: {src: 'evt_fxt_empty.png', type:'day'},
    text: "txt-evt-raptor-hatch",
    removeItem: true,
    loot: {
      items: {'it-baby-raptor':1},
      close: 'evt-leave',
    }
  },
  {
    id: 'evt-raptor-adult',
    showImage: {src: 'evt_fxt_empty.png', type: 'day'},
    text: "txt-evt-raptor-adult",
    npc: 'anm-raptor',
    removeItem: true,
    npcEffects: {
      actions: {
        actionText: "txt-evt-raptor-adult-action",
        text: "txt-evt-raptor-adult-1",
        report: "txt-evt-raptor-adult-report",
        addNPC: true,
        actions: 'evt-leave'
      }
    },
    actions: {
      actionText: "txt-evt-raptor-adult-action-1",
      text: "txt-evt-raptor-adult-2",
      addZone: {ref:'zn-raptor', range:2},
      // deactivateZones: {radius: 2, turns: 5},
      actions: 'evt-leave'
    }
  },

// Items

  {
    id: 'it-egg-raptor',
    name: "txt-it-egg-raptor-name",
    description: "txt-it-egg-raptor",
    sprite: 'it_special_egg_2.png',
    value: {
      base: 30,
      village: 10,
      karma: karmaMedium,
    },
    maxStack: 1,
    tripEvents: [
      {delayedEvent: 'evt-raptor-hatch'},
      {slots:3}
    ]
  },
  {
    id: 'it-baby-raptor',
    name: "txt-it-baby-raptor-name",
    description: "txt-it-baby-raptor",
    sprite: 'it_special_raptor_1.png',
    value: {
      base: 50,
      village: 20,
      karma: karmaLarge,
    },
    maxStack: 1,
    tripEvents: [
      {delayedEvent: 'evt-raptor-adult'},
      {slots:5}
    ]
  },

])