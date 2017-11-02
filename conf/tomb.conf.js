config.entities.add([

// fixtures

  {
    id: 'fxt-tomb-1',
    name: "txt-fxt-tomb-1-name",
    debugColor: 'red',
    reqBiomeFlags: '+desert',
    flags: '+dreamVisions +ruins',
    worldMap: true,
    sprite: "res_fxt_tomb_1.png",
    dist: 5,
    setTile: 'tl-desert',
    setNeighbors: [
       {count: 2, ref:'tl-cactusForest'},
       {count: 2, ref:'tl-desert'},
       {count: 2, ref:'tl-desert-stoneForest'},
    ],
    actions: 'evt-tomb-init'
  },

// events

  { 
    id: 'evt-tomb-init',
    actionText: "txt-evt-tomb-init-action",
    reqTileFlags: '-explored',
    text: "txt-evt-tomb-init",
    report: "txt-evt-tomb-init-report",
    showImage: {src: 'evt_fxt_tomb_1.png', type:'day'},
    playMusic: ['thm_shrine_1'],
    chat: 'cl-scaryPlace',
    actions: ['evt-tomb-enter', 'evt-leave']
  },
  { 
    id: 'evt-tomb-enter',
    actionText: "txt-evt-tomb-enter-action",
    text: "txt-evt-tomb-enter",
    report: "txt-evt-tomb-enter-report",
    partyEffects: 'evt-superstitious-complain',
    showImage: {src: 'evt_fxt_tomb_int_1.png', type:'day'},
    playMusic: ['thm_shrine_2'],
    actions: ['evt-tomb-loot', 'evt-leave']
  },
  { 
    id: 'evt-tomb-loot',
    actionText: "txt-evt-tomb-loot-action",
    text: "txt-evt-tomb-loot",
    events: [
      {
        slots: 2,
        partyEffects: 'evt-superstitious-angry',
        charEffects: {
          chance: 0.25,
          reqStatus: '-deathCurse',
          reqCharFlags: '-special +humanoid',
          setStatus: '+deathCurse'
        },

        loot: {
          items: [
            {slots: 1, 'il-treasure-highValue':1, 'it-moonStone':1, 'it-mummy':1},
            {slots: 1, 'it-mummy':1, 'it-moonStone':1, 'it-jewels':2},
            {slots: 1, 'it-mummy':1, 'it-moonStone':1, 'il-treasure-lowValue':2},
          ],
          close: 'evt-tomb-leave',
          cancel: 'evt-leave'
        }, 
      },
      {
        slots: 3,
        text: "txt-evt-tomb-loot-1",
        showImage: {src: 'evt_fxt_tomb_int_1_combat.png', type:'day'},
        setTileFlags: '+explored',
        charEffects: {
          optional: true,
          reqCharFlags: '+coward',
          text: "txt-evt-tomb-loot-2",
        },
        actions: [
          {
            actionText: "txt-evt-cave-ghostsQuest-action",
            combat: [ {slots:1, 'emy-mummy':1} ],  
          }
        ],
      }
    ]
    
  },
  { 
    id: 'evt-tomb-leave',
    text: "txt-evt-tomb-leave",
    setTileFlags: '+explored'
  },

])
