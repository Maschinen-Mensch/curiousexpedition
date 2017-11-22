config.entities.add([


// Harbor Events
  {
    id: 'evt-harbor-quest-arcticClaim',
    npc: 'npc-trader',
    text: "txt-evt-harbor-quest-arcticClaim",
    actions: [
      {
        actionText: "txt-generic-accept",
        text: "txt-evt-harbor-quest-arcticClaim-1",
        setPartyStatus: '+arcticClaim-4',
        items: {'it-claimFlag':+4},
        actions: 'evt-harbor-eventSelection'
      },
      {
        actionText: "txt-generic-refuse",
        text: "txt-evt-harbor-quest-arcticClaim-2",
        select: 'evt-harbor-eventSelection'
      },
    ]
  },
  {
    id: 'evt-harbor-quest-arcticClaim-complete',
    npc: 'npc-trader',
    select: [
      {
        reqPartyStatus: '+arcticClaim-complete',
        setPartyStatus: '-arcticClaim-complete',
        text: "txt-evt-harbor-quest-arcticClaim-complete",
        actions: 'evt-harbor-quest-reward',
      },
      {
        reqPartyStatus: '+arcticClaim-1 | +arcticClaim-2 | +arcticClaim-3 | +arcticClaim-4',
        setPartyStatus: '-arcticClaim-1 -arcticClaim-2 -arcticClaim-3 -arcticClaim-4',
        text: "txt-evt-harbor-quest-arcticClaim-complete-1",
        fame: -fameLarge,
        actions: 'evt-harbor-eventSelection',
      }
    ],
  },

// World Events

  {
    id: 'evt-quest-arcticClaim-worldInit',
    text: "txt-evt-quest-arcticClaim-worldInit",
    partyEvents:[
      {
        addFixture: {ref:'fxt-claimPosition', range:'world'},
        revealTiles: {radius:0, fixture:true, centerCam:false},
      },
      {
        addFixture: {ref:'fxt-claimPosition', range:'world'},
        revealTiles: {radius:0, fixture:true, centerCam:false},
      },
      {
        addFixture: {ref:'fxt-claimPosition', range:'world'},
        revealTiles: {radius:0, fixture:true, centerCam:false},
      },
      {
        addFixture: {ref:'fxt-claimPosition', range:'world'},
        revealTiles: {radius:0, fixture:true, centerCam:false},
      },
    ],
  },
  {
    id: 'evt-claimPosition',
    select: [
      {
        reqTileFlags: '+claimPosition',
        setTileFlags: '-claimPosition',
        items: {'it-claimFlag':-1},
        chat: 'cl-item-claimFlag-success',
        replaceFixtures: [
          {range: 1, old:'fxt-claimPosition', new:'fxt-claimFlag'},
        ],
        select: [
          {
            reqPartyStatus: '+arcticClaim-4',
            setPartyStatus: '-arcticClaim-4 +arcticClaim-3',
          },
          {
            reqPartyStatus: '+arcticClaim-3',
            setPartyStatus: '-arcticClaim-3 +arcticClaim-2',
          },
          {
            reqPartyStatus: '+arcticClaim-2',
            setPartyStatus: '-arcticClaim-2 +arcticClaim-1',
          },
          {
            reqPartyStatus: '+arcticClaim-1',
            setPartyStatus: '-arcticClaim-1 +arcticClaim-complete',
            showImage: {src: 'evt_fxt_empty.png', type: 'day'},
            text: "txt-evt-claimPosition",
          }
        ],
      },
      {
        reqTileFlags: '-claimPosition',
        chat: 'cl-item-claimFlag-fail',
      },  
    ],
  },

// Status

  {
    id: 'st-arcticClaim-4',
    debugCategory: 'Quest',
    title: "txt-st-arcticClaim-4-title",
    description: "txt-st-arcticClaim-4",
    sprite: "res_status_flag.png",
    important: true,
  },
  {
    id: 'st-arcticClaim-3',
    extends: 'st-arcticClaim-4',
    description: "txt-st-arcticClaim-3",
  },
  {
    id: 'st-arcticClaim-2',
    extends: 'st-arcticClaim-4',
    description: "txt-st-arcticClaim-2",
  },
  {
    id: 'st-arcticClaim-1',
    extends: 'st-arcticClaim-4',
    description: "txt-st-arcticClaim-1",
  },
  {
    id: 'st-arcticClaim-complete',
    extends: 'st-arcticClaim-4',
    description: "txt-st-arcticClaim-complete",
  },

// Fixtures


  {
    id: 'fxt-claimPosition',
    name: "txt-fxt-claimPosition-name",
    mapScore: 0,
    showHint: false,
    flags: '+claimPosition',
    debugCategory: 'quest',
    hideParty: false,
    sprite: "res_fxt_arcticClaimMarker.png",
    setTile: 'tl-plateau | tl-deepSnow | tl-frozenPlains | tl-crystalForest',
    spawnEvents: {
      setTileFlags: '+claimPosition'
    }
  },
  {
    id: 'fxt-claimFlag',
    name: "txt-fxt-claimFlag-name",
    debugCategory: 'quest',
    mapScore: 0,
    showHint: false,
    hideParty: false,
    sprite: "res_fxt_arcticClaimFlag.png",
    particle: 'pt-claimFlag-1',
  },

// Items

  {
    id: 'it-claimFlag',
    name: "txt-it-claimFlag-name",
    description: "txt-it-claimFlag",
    sprite: 'it_quest_claimFlag_1.png',
    debugCategory: 'quest',
    autoRemove:true,
    value: {
      base: 0,
      karma: 0,
    },
    maxStack: 10,
    events: 'evt-claimPosition',
  },

])