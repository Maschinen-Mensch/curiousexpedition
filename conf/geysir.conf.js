config.entities.add([

  {
    id: 'fxt-geysir-spawn-inactive',
    name: "txt-fxt-geysir-spawn-inactive-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    sprite: "res_fxt_geysir_1.png",
    showHint: false,
    hintBiome:false,
    reqBiomeFlags: '-desert',
    particle: 'pt-volcano-inactive',
    setTile: [
      {ref: 'tl-river-shallow'},
      //{ref:'tl-river-shallow', reqBiomeFlags: '+grass | +dry'},
      //{ref:'tl-sulfur-shallow', reqBiomeFlags: '+prehistoric'},
      //{ref:'tl-arcticSea', reqBiomeFlags: '+arctic'},
    ],
    
    spawnEvents: {
      replaceFixtures: {new:'fxt-geysir-inactive'},
    },
    setNeighbors: [
      {ref:'tl-swamp', reqBiomeFlags: '-dry -arctic'},
      {ref:'tl-river-shallow', reqBiomeFlags: '-arctic'},
      {ref:'tl-packIce', reqBiomeFlags: '+arctic'},
    ],
  },
  {
    id: 'fxt-geysir-active',
    name: "txt-fxt-geysir-active-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    sprite: "res_fxt_geysir_1.png",
    showHint: false,
    hintBiome:false,
    checkReachability: false,
    particle: 'pt-geysir-burst',
    setTile: [
      //{ref:'tl-river', reqBiomeFlags: '+grass | +dry'},
      //{ref:'tl-sulfur', reqBiomeFlags: '+prehistoric'},
      //{ref:'tl-arcticSea', reqBiomeFlags: '+arctic'},
      {ref:'tl-river'}
    ],
    spawnEvents: {
      camShake: {power:4, length:2},
      startSprawl: {ref:'spr-geysir-flood', radius:0, power:2},
      replaceFixtures: {range:4, old:'fxt-geysir-inactive', new:'fxt-geysir-active'},
    },
    dayEvents: {
      reqAge: 7,
      replaceFixtures: {new:'fxt-geysir-inactive'},
      startSprawl: {ref:'spr-geysir-dry', radius:0, power:2},
    },
  },
  {
    id: 'fxt-geysir-inactive',
    name: "txt-fxt-geysir-spawn-inactive-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    showHint: false,
    hintBiome:false,
    checkReachability: false,
    particle: 'pt-geysir-inactive',
    sprite: "res_fxt_geysir_1.png",
    setTile: [
      //{ref:'tl-sulfur-shallow', reqBiomeFlags: '+prehistoric'},
      //{ref:'tl-arcticSea', reqBiomeFlags: '+arctic'},
      {ref:'tl-river-shallow'},
    ],
    dayEvents: [
      {reqAge: 15, slots:1, replaceFixtures: {range:0, new:'fxt-geysir-active'}},
      {reqAge: 15, slots:10},
    ],
  },
  
])
