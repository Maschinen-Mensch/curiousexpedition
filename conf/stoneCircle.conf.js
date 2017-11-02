config.entities.add([

// fixtures

  {
    id: 'fxt-stoneCircle',
    name: "txt-fxt-stoneCircle-name",
    flags: '+occultVision +dreamVisions +abacus',
    sprite: [
      {ref:'res_fxt_stoneCircle.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_stoneCircle_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {ref:'tl-grass-stoneForest',  count:5, reqBiomeFlags: '+grass | +prehistoric -desert'},
      {ref:'tl-dry-stoneForest',    count:5, reqBiomeFlags: '+dry'},
      {ref:'tl-desert-stoneForest', count:5, reqBiomeFlags: '+desert -prehistoric'},
      {ref:'tl-crystalForest',      count:5, reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-dry-jungle-thick',  reqBiomeFlags: '+dry'},
      {ref:'tl-cactusForest',      reqBiomeFlags: '+desert -prehistoric'},
      {ref:'tl-deepSnow',     reqBiomeFlags: '+arctic'},
      {ref:'tl-jungle-thick'},
    ],
    actions: 'evt-stoneCircle-init',
    debugCategory: 'sacrileg',
    debugColor: 'deeppink',
  },
  {
    id: 'fxt-stoneCircle-1', // just for legacy savegames
    extends: 'fxt-stoneCircle'
  },

  {
    id: 'fxt-stoneCircle-destroyed',
    name: "txt-fxt-stoneCircle-destroyed-name",
    debugCategory: 'sacrileg',
    sprite: "res_fxt_stoneCircle.png",
  },

// events

  {
    id: 'evt-stoneCircle-init',
    actionText: "txt-evt-stoneCircle-init-action",
    reqFixtureFlags: '-explored',
    showImage: {type:'day'},
    partyEffects: [
      {
        optional: true, reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_stoneCircle_1.png', type: 'day'}
      },
      {
        optional: true, reqBiomeFlags: '+arctic',
        showImage: {
          src: 'evt_fxt_stoneCircle_arctic.png', type: 'day', showMounted: true,
          particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'], particlesChance: 0.5
        }
      }
    ],
    events: 'evt-stoneCircle-enter'
  },  
  {
    id: 'evt-stoneCircle-enter',
    text: "txt-evt-stoneCircle-enter",
    partyEffects: 'evt-superstitious-complain',
    chat:'cl-sacrileg-warning',
    actions: [
      'evt-stoneCircle-revealRuins',
      'evt-stoneCircle-revealSettlements',
      'evt-stoneCircle-revealNatureRests',
      'evt-stoneCircle-revealCaves',
      'evt-leave'
    ]
  },
  {
    id: 'evt-stoneCircle-reveal',
    alwaysShown: true,
    setFixtureFlags: '+explored',
    setPartyFlags: '+sacrileg +superstitious',
    chat: 'cl-stoneCircle',
  },

  {
    id: 'evt-stoneCircle-revealRuins',
    extends: 'evt-stoneCircle-reveal',
    actionText: "txt-evt-stoneCircle-revealRuins-action",
    reqFixture: {flags:'+ruins', fixtureKnown:false, range:'..100'},
    partyEffects: [
      {optional:true, ref:'evt-stoneCircle-revealNextRuin'},
      {optional:true, ref:'evt-stoneCircle-revealNextRuin'},
      {optional:true, ref:'evt-stoneCircle-revealNextRuin'},
      {optional:true, ref:'evt-stoneCircle-revealNextRuin'},
      {optional:true, ref:'evt-stoneCircle-revealNextRuin'},
      {optional:true, ref:'evt-stoneCircle-revealNextRuin'},
    ],
    events: 'evt-stoneCircle-aftermath'
  },
  {
    id: 'evt-stoneCircle-revealNextRuin',
    posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+ruins', tileFlags:'-mapped'},
    setTileFlags: '+mapped',
    revealTiles: {radius: {base:1, bonus:'stoneCircle'}, fixture:true, centerCam:true}
  },

  {
    id: 'evt-stoneCircle-revealSettlements',
    extends: 'evt-stoneCircle-reveal',
    actionText: "txt-evt-stoneCircle-revealSettlements-action",
    reqFixture: {flags:'+settlement', fixtureKnown:false, range: '..100'},
    partyEffects: [
      {optional:true, ref:'evt-stoneCircle-revealNextSettlement'},
      {optional:true, ref:'evt-stoneCircle-revealNextSettlement'},
      {optional:true, ref:'evt-stoneCircle-revealNextSettlement'},
      {optional:true, ref:'evt-stoneCircle-revealNextSettlement'},
      {optional:true, ref:'evt-stoneCircle-revealNextSettlement'},
      {optional:true, ref:'evt-stoneCircle-revealNextSettlement'},
    ],
    events: 'evt-stoneCircle-aftermath'
  },
  {
    id: 'evt-stoneCircle-revealNextSettlement',
    posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+settlement', tileFlags:'-mapped'},
    setTileFlags: '+mapped',
    revealTiles: {radius: {base:1, bonus:'stoneCircle'}, fixture:true, centerCam:true}
  },

  {
    id: 'evt-stoneCircle-revealNatureRests',
    extends: 'evt-stoneCircle-reveal',
    actionText: "txt-evt-stoneCircle-revealNatureRests-action",
    reqFixture: {flags:'+natureRest', fixtureKnown:false, range: '..100'},
    partyEffects: [
      {optional:true, ref:'evt-stoneCircle-revealNextNatureRest'},
      {optional:true, ref:'evt-stoneCircle-revealNextNatureRest'},
      {optional:true, ref:'evt-stoneCircle-revealNextNatureRest'},
      {optional:true, ref:'evt-stoneCircle-revealNextNatureRest'},
      {optional:true, ref:'evt-stoneCircle-revealNextNatureRest'},
      {optional:true, ref:'evt-stoneCircle-revealNextNatureRest'},
    ],
    events: 'evt-stoneCircle-aftermath'
  },
  {
    id: 'evt-stoneCircle-revealNextNatureRest',
    posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+natureRest', tileFlags:'-mapped'},
    setTileFlags: '+mapped',
    revealTiles: {radius: {base:1, bonus:'stoneCircle'}, fixture:true, centerCam:true}
  },

  {
    id: 'evt-stoneCircle-revealCaves',
    extends: 'evt-stoneCircle-reveal',
    actionText: "txt-evt-stoneCircle-revealCaves-action",
    reqFixture: {flags:'+cave', fixtureKnown:false, range: '..100'},
    partyEffects: [
      {optional:true, ref:'evt-stoneCircle-revealNextCave'},
      {optional:true, ref:'evt-stoneCircle-revealNextCave'},
      {optional:true, ref:'evt-stoneCircle-revealNextCave'},
      {optional:true, ref:'evt-stoneCircle-revealNextCave'},
      {optional:true, ref:'evt-stoneCircle-revealNextCave'},
      {optional:true, ref:'evt-stoneCircle-revealNextCave'},
    ],
    events: 'evt-stoneCircle-aftermath'
  },
  {
    id: 'evt-stoneCircle-revealNextCave',
    posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+cave', tileFlags:'-mapped'},
    setTileFlags: '+mapped',
    revealTiles: {
      radius: {base:1, bonus:'stoneCircle'}, 
      fixture:true, 
      centerCam:true
    }
  },

  {
    id: 'evt-stoneCircle-aftermath',
    partyEffects: 'evt-superstitious-angry',
    chat:'cl-sacrileg',
    events: 'evt-leave'
  }
])
