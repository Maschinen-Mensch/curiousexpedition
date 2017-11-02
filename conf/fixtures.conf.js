config.entities.add([

  {
    id: 'fxt-magneticMountain',
    name: "txt-fxt-magneticMountain-name",
    debugCategory: 'nature',
    debugColor: '#64ff58',
    sprite: "res_fxt_magneticMountain.png",
    showHint: false,
    hintBiome:false,
    flags: '+magnetic',
    hintCompass: true,
    particle: 'pt-magnetic',
    setTile: 'tl-mountain',
  },

// Decorative Fixtures

  {
    id: 'fxt-rockFormation',
    name: "txt-fxt-rockFormation-name",
    debugCategory: 'decorative',
    sprite: "res_fxt_rockFormation.png",
    showHint: false,
    mapScore: 0,

    setTile: [
      {ref:'tl-grass', reqBiomeFlags: '+prehistoric | +grass'},
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert'},
    ],
  },
  {
    id: 'fxt-giantTree',
    name: "txt-fxt-giantTree-name",
    debugCategory: 'decorative',
    flags: '+giantTree',
    sprite: "res_fxt_giantTree.png",
    showHint: false,
    reqBiomeFlags: '-dry -desert',
    mapScore: 0,

    setTile: 'tl-jungle-thick',
    setNeighbors: [
      {count:4, ref:'tl-jungle-thick'},
    ],
  },
  {
    id: 'fxt-mountainFace',
    name: "txt-fxt-mountainFace-name",
    debugCategory: 'decorative',
    sprite: "res_fxt_mountainFace.png",
    flags: '+mountainFace +mountain',
    showHint: false,
    mapScore: 0,
    setTile: 'tl-mountain'
  },
  {
    id: 'fxt-special-chasmCircle-bridge',
    name: "txt-fxt-special-chasmCircle-bridge-name",
    subFixtures: [
      {ref: 'fxt-stoneStatue01', offsets: '1ne'},
      {ref: 'fxt-stoneStatue01', offsets: '2ne'},
      {ref: 'fxt-stoneStatue01', offsets: '3ne'},
    ],
  },
  {
    id: 'fxt-special-chasmCircle',
    name: "txt-fxt-special-chasmCircle-name",
    sprite: "res_fxt_giantSkeleton.png",
    spawnEvents: {
      replaceTiles: [
        {radius:3, old: 'any', new: 'tl-pit-grass', chance: 0.3},
        {radius:2, old: 'any', new: 'tl-pit-grass'},
        {radius:1, old: 'any', new: 'tl-grass'},
      ],
      // events: [
      //   {
      //     replaceFixtures: {new:'fxt-special-chasmCircle-bridge'},
      //   },
      // ],
    },
  },
  {
    id: 'fxt-special-caveCircle-blessingTemple',
    name: "txt-fxt-special-caveCircle-blessingTemple-name",
    spawnEvents: {
      replaceTiles: [
        {radius:3, old: 'any', new: 'tl-dry'},
        {radius:3, old: 'any', new: 'tl-dry-jungle-thick', chance:0.3},
        {radius:2, old: 'any', new: 'tl-mountain'},
        {radius:1, old: 'any', new: 'tl-dry'},
        {radius:1, old: 'any', new: 'tl-dry-stoneForest', chance: 0.2},
      ],
      events: [
        {
          partyEffects: [
            {
              addFixture: {ref:'fxt-blessingTemple-noNeighbors', range:0},
            },
            {
              addFixture: {ref:'fxt-cave-noNeighbors', range:2},
            },
          ]          
        },
      ],
    },
  },
  {
    id: 'fxt-cave-noNeighbors',
    extends: 'fxt-cave',
    setNeighbors: [],
    setTile: 'tl-mountain',
  },
  {
    id: 'fxt-giantSkeleton',
    name: "txt-fxt-giantSkeleton-name",
    debugCategory: 'decorative',
    sprite: "res_fxt_giantSkeleton.png",
    showHint: false,
    mapScore: 0,
    setTile: [
      {ref:'tl-grass', reqBiomeFlags: '+prehistoric -desert | +grass'},
      {ref:'tl-dry', reqBiomeFlags: '+dry -desert'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
    ],
  },
 
])