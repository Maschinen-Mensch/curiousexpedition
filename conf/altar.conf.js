config.entities.add([

// fixtures

  {
    id: 'fxt-altar',
    name: "txt-fxt-altar-name",
    debugCategory: 'special',
    worldMap: true,
    debugColor: 'red',
    reqBiomeFlags: '+dry | +grass | +arctic',
    dist: 5,
    flags: '+altar +dreamVisions',
    sprite: [
      {ref:'res_fxt_altar.png', reqBiomeFlags: '-arctic -dry -desert'},
      {ref:'res_fxt_altar_dry.png', reqBiomeFlags: '+dry|+desert'},
      {ref:'res_fxt_altar_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry|+desert'},
      {ref:'tl-jungle-thick', reqBiomeFlags: '+grass'},
      {ref:'tl-snowForest', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {count:4, ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric -desert'},
      {count:4, ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {count:4, ref:'tl-cactusForest', reqBiomeFlags: '+desert'},
      {count:4, ref:'tl-snowForest', reqBiomeFlags: '+arctic'},
    ],
    actions: 'evt-altar-approach',
  },
  
// events

  {
    id: 'evt-altar-approach',
    actionText: "txt-evt-altar-approach-action",
    text: "txt-evt-altar-approach",
    partyEffects: 'evt-superstitious-complain',
    events: 'evt-altar-actions',
  },
  {
    id: 'evt-altar-actions',
    partyEffects: {
      events: [
        {
          slots:1,
          reqBiomeFlags: '+arctic',
          showImage: {
            src: 'evt_fxt_altar_1.png', type: 'day', showMounted: false,
            particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
          },
        },
        {
          slots:1,
          showImage: {
            src: 'evt_fxt_altar_1.png', type: 'day', showMounted: false,
          },
        }
      ],
    },
    actions: [
      'evt-altar-drop',
      'evt-altar-revive',
      'evt-leave',
    ],
  },
  {
    id: 'evt-altar-drop',
    actionText: "txt-evt-altar-actions-action",
    showImage: {
      src: 'evt_fxt_altar_1.png',  type: 'day', 
      showMounted: false 
    },
    barter: {
      title: "txt-evt-altar-actions-title",
      baseValue: 'karma',
      close: 'evt-altar-dropDone',
      cancel: 'evt-altar-cancel',
      itemEvents: [
        {items:{'it-treasure-eggplant':1}, ref:{incAchievement:'ach-eggplant-altar',text: "txt-evt-altar-eggplant-done",events: 'evt-altar-actions'}}
      ],
      priceTable: 'karma',
      hideNPCInv: true,
    }, 
  },
  {
    id: 'evt-altar-dropDone',
    text: "txt-evt-altar-done",
    events: 'evt-altar-actions'
  },
  {
    id: 'evt-altar-revive',
    alwaysShown: true,
    actionText: "txt-evt-altar-revive-action",
    text: "txt-evt-altar-revive",
    reqKarma: '75..',
    storeEffects: {
      count: '..4',
      reqCharFlags: '+dead',
      actions: {
        actionText: "txt-evt-altar-revive-action-1",
        text: "txt-evt-altar-revive-1",
        restoreCharacter: true,
        incAchievement: 'ach-revive',
        karma: -75,
        events: 'evt-altar-actions'
      }
    },
    partyEffects: 'evt-superstitious-angry',
    actions: {
      actionText: 'txt-evt-action-nothing',
      events: 'evt-altar-actions'
    }
  },
  {
    id: 'evt-altar-cancel',
    text: "txt-evt-altar-cancel",
    events: 'evt-altar-actions'
  },

  // {
  //   id: 'evt-altar-ghostie-appear',
  //   chat: 'cl-ghostiesVisit',
  //   showImage: { 
  //     src: 'evt_fxt_altar_1.png',  type: 'day', 
  //     showMounted: false 
  //   },
  //   npc: 'npc-ghostie',
  //   text: "txt-evt-altar-ghostie-appear",
  //   events: 'evt-altar-actions',
  // },

  //   itemEvents: [
  //   {items: {'it-torch':3}, ref: {items:{'it-dynamite':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-meat-raw':3}, ref: {items:{'it-meat-animal-cooked-overcooked':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-giantBirdFeather':1}, ref: {items:{'it-egg-tortoise':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-giantCrabPincer':1,}, ref: {items:{'it-egg-raptor':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-pelt-hyena-black':1,}, ref: {items:{'it-pumpkinLantern':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-rope':1, 'it-pelt-tiger':1}, ref: {items:{'it-pendulum-treasure':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-rope':1, 'it-pelt-panther':1}, ref: {items:{'it-pendulum-shrine':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-rope':1, 'it-pelt-crocodile':1}, ref: {items:{'it-pendulum-blessing':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-spear':1, 'it-dinoSkull':1}, ref: {items:{'it-totemStick':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-whisky':3,}, ref: {items:{'it-tomePage-targetTeleport':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-chocolate':3,}, ref: {items:{'it-tomePage-superMove':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-mango':3,}, ref: {items:{'it-tomePage-waterfall':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-mushroom-healing':1,}, ref: {items:{'it-mushroom-status':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-mushroom-status':1,}, ref: {items:{'it-mushroom-view':1}, events:'evt-altar-ghostie-appear'}},
  //   {items: {'it-mushroom-view':1,}, ref: {items:{'it-mushroom-healing':1}, events:'evt-altar-ghostie-appear'}},
  // ]

])