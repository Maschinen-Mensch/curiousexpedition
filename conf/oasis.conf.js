config.entities.add([

// fixtures

  {
    id: 'fxt-oasis',
    name: "txt-fxt-oasis-name",
    reqBiomeFlags: '+desert',
    flags: '+oasis +natureRest',
    sprite: "res_fxt_oasis.png",
    setTile: 'tl-desert',
    setNeighbors: [
      {count:4, ref:'tl-mountain'},
      {count:2, ref:'tl-cactusForest'}
    ],
    actions: 'evt-oasis-explore',
    debugCategory: 'nature',
    debugColor: '#64ff58',
  },

// events

  {
    id: 'evt-oasis-explore',
    actionText: "txt-evt-altar-approach-action",
    text: "txt-evt-oasis-explore",
    playMusic: ['thm_nature_1'],
    showImage: {src: 'evt_fxt_oasis_1.png', type: 'day',},
    chat: 'cl-nature',
    events: {ref:'evt-oasis-actions'}
  },
  {
    id: 'evt-oasis-morning',
    playMusic: ['thm_nature_1'],
    showImage: {src: 'evt_fxt_oasis_1.png', type: 'day',},
    text: "txt-evt-oasis-morning",
    chat: 'cl-newMorning',       
    events: {ref:'evt-oasis-actions'}
  },
  { 
    id: 'evt-oasis-actions',
    actions: [
      {ref:'evt-nature-rest'},
      {ref:'evt-refill-water', pushEvent: 'evt-oasis-actions'},
      {ref:'evt-leave'}
    ],
  },
  {
    id: 'evt-refill-water',
    actionText: "txt-evt-cave-mushrooms-refillWater-action",
    text: "txt-evt-refill-water",
    items: {'it-water':10},
    popEvent: true
  },

])
