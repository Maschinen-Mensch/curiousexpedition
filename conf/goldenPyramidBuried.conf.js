config.entities.add([

// goals

  {
    id: 'gol-goldenTemple-buried',
    description: "txt-gol-goldenTemple-buried",
    flags: '+dreamVisions +goldenTemple',
    extraFame: 50,
    reqWorld: '3..',
    reqDifficulty: '1..',
    fixtures: [
      {ref:'fxt-goldenTemple-buried'},
      {group: 'grp-goldenSeal'},
      {reqWorld: '4..', group: 'grp-goldenSeal'},
      {reqWorld: '5..', group: 'grp-goldenSeal'},
    ]
  },

// groups

  {
    id: 'grp-goldenSeal', group: [
      {slots:2, ref:'fxt-goldenSeal-basic'},
      {slots:1, ref:'fxt-goldenSeal-volcano'},
      {slots:1, ref:'fxt-goldenSeal-monster'},
      {slots:1, ref:'fxt-goldenSeal-fumarole'},
      {reqWorld: '..6', slots:1, ref:'fxt-goldenSeal-geysir'},
    ]
  },

// fixtures

  {
    id: 'fxt-goldenTemple-unearthed',
    name: "txt-fxt-goldenTemple-unearthed-name",
    debugColor: 'orange',
    debugCategory: 'goldenPyramid',
    sprite: "res_fxt_goldenTemple_unearthed_1.png",
    hintCompass: true,
    hintBiome:false,
    mapScore: 0,
    isRemovable: false,
    keepReachable: true,
    maximizeDistance: true,
    flags: '+dreamVisions +goldenTemple +unearthed',
    particle: 'pt-pyramidRay',
    subFixtures: [
      {ref: 'fxt-ruins-set-desert-1', offsets: '1n'},
      {ref: 'fxt-ruins-set-desert-2', offsets: '1ne'},
      {ref: 'fxt-ruins-set-desert-3', offsets: '1nw'},
    ],
    actions: ['evt-goal-explore'],
  },
  {
    id: 'fxt-goldenTemple-buried',
    name: "txt-fxt-goldenTemple-buried-name",
    debugColor: 'orange',
    debugCategory: 'goldenPyramid',
    hintCompass:true,
    hintBiome:false,
    mapScore:0,
    isRemovable:false,
    maximizeDistance: true,
    fixtureFlags: '+goldenTemple',
    sprite: [
      {ref:'res_fxt_goldenTemple_buried_1.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_goldenTemple_buried_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric -desert -dry'},
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry -desert'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-crystalForest', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {ref:'tl-jungle-thick', count: 6, reqBiomeFlags: '+grass | +prehistoric -desert -dry'},
      {ref:'tl-dry-jungle-thick', count: 6, reqBiomeFlags: '+dry -desert'},
      {ref:'tl-desert', count: 6, reqBiomeFlags: '+desert'},
    ],
    spawnEvents: [
      { reqWorld: '..3', setTileFlags: '+seals1' },
      { reqWorld: '4',   setTileFlags: '+seals2' },
      { reqWorld: '5',   setTileFlags: '+seals3' }
    ],
    actions: 'evt-goldenTemple-buried-approach',
  },
  {
    id: 'evt-goldenTemple-buried-approach',
    actionText: "txt-evt-altar-approach-action",
    text: "txt-evt-goldenTemple-buried-approach",
    partyEffects: [
      {
        optional: true, reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_goldenTemple_buried.png', type: 'day'},
      },
      {
        optional: true, reqBiomeFlags: '+arctic',
        events: [
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_goldenTemple_buried_arctic.png', type: 'day', showMounted: true,
              particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
            },
          },
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_goldenTemple_buried_arctic.png', type: 'day', showMounted: true,
            },
          }
        ],
        
      },
    ],
    actions: [
      {
        actionText: "txt-evt-goldenTemple-buried-approach-action",
        text: "txt-evt-goldenTemple-buried-approach-1",
        partyEffects: [
          {
            optional: true,
            posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+goldenSeal', tileFlags:'-mapped'},
            setTileFlags: '+mapped',
            revealTiles: {radius:1, fixture:true, centerCam:true},
          },
          {
            optional: true,
            posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+goldenSeal', tileFlags:'-mapped'},
            setTileFlags: '+mapped',
            revealTiles: {radius:1, fixture:true, centerCam:true},
          },
          {
            optional: true,
            posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+goldenSeal', tileFlags:'-mapped'},
            setTileFlags: '+mapped',
            revealTiles: {radius:1, fixture:true, centerCam:true},
          },
        ],
      },
      'evt-leave',
    ],
  },
  {
    id: 'fxt-goldenSeal-basic',
    name: "txt-fxt-goldenSeal-basic-name",
    debugColor: 'orange',
    debugCategory: 'goldenSeal',
    hintBiome:true, isRemovable: false, keepReachable: true,
    flags: '+goldenSeal',
    sprite: [
      {ref:'res_fxt_goldenSeal.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_goldenSeal_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-dry', reqBiomeFlags: '+dry'},
      {ref:'tl-grass', reqBiomeFlags: '+grass | +prehistoric'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
    ],
    actions: 'evt-goldenSeal'
  },
  {
    id: 'fxt-goldenSeal-active',
    name: "txt-fxt-goldenSeal-basic-name",
    debugColor: 'orange',
    debugCategory: 'goldenSeal',
    hintBiome:true, isRemovable: false, keepReachable: true,
    sprite: [
      {ref:'res_fxt_goldenSeal.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_goldenSeal_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    flags: '+goldenSeal',
    particle: 'pt-sealRay',
  },
  {
    id: 'fxt-goldenSeal-volcano',
    debugCategory: 'goldenSeal',
    extends: 'fxt-goldenSeal-basic',
    setNeighbors: [
      {count:1, ref:'tl-mountain'},
    ],
    setTile: [
      {ref:'tl-jungle-thick', reqBiomeFlags: '-arctic'},
      {ref:'tl-crystalForest', reqBiomeFlags: '+arctic'},
    ],
    subFixtures: [
      {ref: 'fxt-volcano-spawn-small-inactive', offsets: '1n'},
      {ref: 'fxt-volcano-spawn-small-inactive', offsets: '1se'},
      {ref: 'fxt-volcano-spawn-small-inactive', offsets: '1sw'},
    ],
  },
  {
    id: 'fxt-goldenSeal-fumarole',
    debugCategory: 'goldenSeal',
    extends: 'fxt-goldenSeal-basic',
    setNeighbors: [
      {count:1, ref:'tl-plateau', reqBiomeFlags: '-arctic'},
      {count:1, ref:'tl-plateau', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-plateau', reqBiomeFlags: '-arctic'},
      {ref:'tl-plateau', reqBiomeFlags: '+arctic'},
    ],
    subFixtures: [
      {ref: 'fxt-fumarole-spawn', offsets: '1n'},
      {ref: 'fxt-fumarole-spawn', offsets: '1se'},
      {ref: 'fxt-fumarole-spawn', offsets: '1sw'},
    ],
  },
  {
    id: 'fxt-goldenSeal-geysir',
    debugCategory: 'goldenSeal',
    extends: 'fxt-goldenSeal-basic',
    reqBiomeFlags: '-desert',
    setTile: [
      {ref:'tl-hill', reqBiomeFlags: '-arctic'},
      {ref:'tl-plateau', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {ref:'tl-hill', reqBiomeFlags: '-arctic', count:3},
      {ref:'tl-plateau', reqBiomeFlags: '+arctic', count:3},
    ],
    subFixtures: [
      {ref: 'fxt-geysir-spawn-inactive', offsets: '2n'},
      {ref: 'fxt-geysir-spawn-inactive', offsets: '2se'},
      {ref: 'fxt-geysir-spawn-inactive', offsets: '2sw'},
    ],
  },
  {
    id: 'fxt-goldenSeal-monster',
    debugCategory: 'goldenSeal',
    extends: 'fxt-goldenSeal-basic',
    setTile: 'tl-jungle-thick',
    spawnEvents: {
      replaceTiles: [
        {radius:4, chance: 0.4, old: 'any', new: 'tl-mountain'},
        {radius:3, chance: 1.0, old: 'any', new: 'tl-mountain'},
        {radius:2, chance: 1.0, old: 'any', new: 'tl-dry-stoneForest'},
        {radius:0, chance: 1.0, old: 'any', new: 'tl-dry'},
      ],
      events: [
        {reqBiomeFlags: '-arctic', addZone: {ref:'zn-giantBird', range:1}},
        {reqBiomeFlags: '-arctic', addZone: {ref:'zn-giantCrab', range:1}},
        {reqBiomeFlags: '-arctic', addZone: {ref:'zn-giantScorpion',  range:1}},
        {reqBiomeFlags: '+arctic', addZone: {ref:'zn-sabertooth-white',  range:1}},
        {reqBiomeFlags: '+arctic', addZone: {ref:'zn-walrus',  range:1}},
      ]
    }
  },

// events

  {
    id: 'evt-goldenSeal',
    actionText: "txt-evt-altar-approach-action",
    partyEffects: [
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_goldenSeal_1.png', type: 'day'},
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {
          src: 'evt_fxt_goldenSeal_2.png', type: 'day', showMounted: true,
          particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'], particlesChance: 0.5
        },
      },
    ],
    text: "txt-evt-goldenSeal",
    actions: [ 
      {
        actionText: "txt-evt-goldenSeal-action",
        chat: 'cl-seal-activate',
        text: "txt-evt-goldenSeal-1",
        partyEffects: [
          {
            optional: true,
            reqBiomeFlags: '-arctic',
            showImage: {src: 'evt_fxt_goldenSeal_active.png', type: 'day'},
          },
          {
            optional: true,
            reqBiomeFlags: '+arctic',
            showImage: {src: 'evt_fxt_goldenSeal_2_active.png', type: 'day'},
          },
        ],
        actions: {
          replaceFixtures: {new:'fxt-goldenSeal-active'},
          partyEffects: [
            { 
              optional: true,
              posTile: {fixtures:'fxt-goldenTemple-buried'},
              reqTileFlags: '+seals1',
              revealTiles: {radius:2, centerCam:true, fixture:true, particle: 'pt-buriedTempleSpawn'},
              replaceFixtures: {new:'fxt-goldenTemple-unearthed'},
              camShake: {power:8, length:1.5},
              particle: 'pt-sealFlash',
              playSound: 'volcanoErupt'
            },
            { 
              optional: true, 
              posTile: {fixtures:'fxt-goldenTemple-buried'},
              reqTileFlags: '+seals2',
              setTileFlags: '-seals2 +seals1',
              camShake: {power:8, length:1.2}
            },
            { 
              optional: true, 
              posTile: {fixtures:'fxt-goldenTemple-buried'},
              reqTileFlags: '+seals3',
              setTileFlags: '-seals3 +seals2',
              camShake: {power:8, length:1.2}
            }
          ]
        }        
      },
      'evt-leave',
    ],
  },
])