config.entities.add([

// fixtures

  {
    id: 'fxt-shipwreck',
    name: "txt-fxt-shipwreck-name",
    flags: '+dreamVisions',
    sprite: [
      {ref:'res_fxt_shipwreck.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_shipwreck_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
       {ref:'tl-jungle-thick', reqBiomeFlags: '-dry -desert -arctic'},
       {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
       {ref:'tl-packIce', count:4, reqBiomeFlags: '+arctic'},
     ],
     setTile: [
       {ref:'tl-jungle-thick', reqBiomeFlags: '-dry -desert -arctic'},
       {ref:'tl-desert', reqBiomeFlags: '+desert -dry'},
       {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
       {ref:'tl-packIce', reqBiomeFlags: '+arctic'},
     ],
     spawnEvents: [
        {slots:1},
        {slots:2, setFixtureFlags: '+wildlife'}
      ],
     actions: ['evt-shipwreck-init'],
     debugCategory: 'loot',
     debugColor: '#5DADE2',
  },

// events

  {
    id: 'evt-shipwreck-init',
    actionText: "txt-evt-altar-approach-action",
    reqFixtureFlags: '-explored',
    setFixtureFlags: '+shipwreck',
    text: "txt-evt-shipwreck-enter",
    chat: 'cl-scaryPlace',
    partyEvents: [
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_shipwreck_1.png', type:'day'},
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {src: 'evt_fxt_shipwreck_2.png', type:'day'},
      },
      {
        optional: true,
        reqFixtureFlags: '+wildlife',
        text: 'txt-evt-leave-wildlife-hint'
      }
    ],
    playMusic: [
      'thm_nature_mystic_1',
      'thm_nature_mystic_2'
    ],
    actions: [ 
      {ref:'evt-searchArea'}, 
      'evt-leave' 
    ],
  },
  {
    id: 'evt-shipwreck-searchOutcome',
    setFixtureFlags: '+explored',
    report: "txt-evt-shipwreck-searchOutcome-report",
    loot: {
      items: [
        {slots:10, 'it-dynamite':4, 'il-loot-standard':1},
        {slots:6,  'it-dynamite':5, 'il-loot-standard':1},
        {slots:3,  'it-dynamite':6 },
        {slots:3,  'it-dynamite':3, 'il-loot-standard':2},
        {slots:2,  'it-dynamite':2, 'it-map-treasure':1, 'it-shovel':1},
      ],
      close: 'evt-leave',
    },
  },

])
