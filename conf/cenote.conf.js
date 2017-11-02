config.entities.add([
  {
    id: 'fxt-cenote',
    name: "txt-fxt-cenote-name",
    reqWorld: '2..',
    reqBiomeFlags: '-desert -arctic',
    flags: '+dreamVisions',
    worldMap: true,
    sprite: "res_fxt_cenote.png",
    setNeighbors: [
      {ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric'},
      {ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric'},
      {ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric'},
      {ref:'tl-mountain'},
      {ref:'tl-mountain'},
      {ref:'tl-mountain'},
    ],
    setTile: [
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {ref:'tl-jungle-thick'},
    ],
    actions: 'evt-cenote-init',
    debugCategory: 'special',
    debugColor: 'red'
  },
  {
    id: 'evt-cenote-init',
    actionText: "txt-evt-cenote-init-action",
    reqTileFlags: '-explored',
    text: "txt-evt-cenote-init",
    chat: 'cl-nature',
    showImage: {src: 'evt_fxt_cenote_1.png', type: 'day'},
    playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2'],
    actions: ['evt-cenote-night', 'evt-leave']
  },
  {
    id: 'evt-cenote-night',
    actionText: "txt-evt-cenote-night-action",
    turns: 1,
    setTileFlags: '+explored',
    showImage: {src: 'evt_fxt_cenote_1_night.png', type: 'night'},
    npc: 'npc-nativeGhost-4',
    text: "txt-evt-cenote-night",
    partyEffects: 'evt-unlock-specialWorld-withText',
    events: 'evt-cenote-night-afterSpirit',
  },
  {
    id: 'evt-cenote-night-afterSpirit',
    text: "txt-evt-cenote-night-afterSpirit",
    actions: 'evt-cenote-waitUntilDawn',
  },
  {
    id: 'evt-cenote-waitUntilDawn',
    actionText: "txt-evt-cenote-waitUntilDawn-action",
    text: "txt-evt-cenote-waitUntilDawn",
    showImage: {src: 'evt_fxt_cenote_1.png', type: 'day'},
    actions: 'evt-leave',
  }

])