config.entities.add([
  
  {
    id: 'pck-debug', 
    name: "pck-debug-name",
    slotMarker: 'hud_mapMarker_desert.png',
    description: "txt-pck-debug",
    ambientSound: 'sfx_loop_desert_1',
    goals: [
      'gol-goldenTemple-grass',
    ],
    fixtures: [
      {ref: 'fxt-village-1'},
      {ref: 'fxt-village-2'},
      {ref: 'fxt-village-3'},
      {ref: 'fxt-village-4'},
      {ref: 'fxt-village-bones'},

    ],
    biomes: [
      {ref: 'bio-debug-grass'},
      {ref: 'bio-debug-dry'},
      {ref: 'bio-debug-desert'},
    ]
  },

  // groups

  {
    id: 'grp-goldenTemple', group: [
      {slots: 1, ref: 'fxt-goldenTemple-grass'},
      {slots: 1, ref: 'fxt-goldenTemple-dry'},
      {slots: 1, ref: 'fxt-goldenTemple-desert'},
      {slots: 1, ref: 'fxt-goldenTemple-arctic'},
    ]
  },
  {
    id: 'grp-village', group: [
      {slots:2, ref: 'fxt-village-1'},
      {slots:1, ref: 'fxt-village-2'},
      {slots:1, ref: 'fxt-village-3'},
      {slots:1, ref: 'fxt-village-4'},
      {slots:1, ref: 'fxt-village-inuit'},
    ]  
  },
  {
    id: 'grp-sanity-nature', group: [
      {slots: 2, ref: 'fxt-waterfall'},
      {slots: 1, ref: 'fxt-healingSprings'},
      {slots: 1, ref: 'fxt-overhang'},
      {slots: 2, ref: 'fxt-oasis'},
    ]
  },  
  {
    id: 'grp-rest', group: [
      {slots: 2, group: 'grp-village'},
      {slots: 1, ref: 'fxt-mission'},
      {slots: 1, ref: 'fxt-waterfall'},
      {slots: 1, ref: 'fxt-healingSprings'},
      {slots: 1, ref: 'fxt-overhang'},
      {slots: 1, ref: 'fxt-oasis'}, 
    ]
  },
  {
    id: 'grp-village-fantastic', group: [
      {slots: 1, ref: 'fxt-village-bones'},
    ]
  },
  {
    id: 'grp-utility', group: [
      {slots: 1, ref: 'fxt-trader'},
      {slots: 1, ref: 'fxt-shamanHut'},
      {slots: 1, ref: 'fxt-slaver'},
    ]
  },
  {
    id: 'grp-monsterDen', group: [
      {slots: 1, ref: 'fxt-raptorNest'},
    ]
  },
  {
    id: 'grp-treasure', group: [
      {slots: 1, ref: 'fxt-shrine-2'},
      {slots: 1, ref: 'fxt-shrine-3'},
      {slots: 1, ref: 'fxt-shrine-4'},
      {slots: 1, ref: 'fxt-shrine-rope'},
      {slots: 1, ref: 'fxt-shrine-arctic'},
      {slots: 5, ref: 'fxt-tomb-1'},
    ]
  },
  {
    id: 'grp-loot', group: [
      {slots: 6, ref: 'fxt-elephantGraveyard'},
      {slots: 6, ref: 'fxt-mammothGraveyard'},
      {slots: 6, ref: 'fxt-oldCamp'},
      {slots: 3, ref: 'fxt-shipwreck'},
      {slots: 3, ref: 'fxt-arcticStockpile'},
      
      {slots: 1, ref: 'fxt-stoneStatue01'}, 
      {slots: 1, ref: 'fxt-stoneStatue02'},
      {slots: 1, ref: 'fxt-stoneStatue03'},
    ]  
  },
  {
    id: 'grp-special', group: [
      {slots: 1, ref: 'fxt-blessingTemple'},
      {slots: 1, ref: 'fxt-portal', reqDifficulty:'1..'},
      {slots: 1, ref: 'fxt-altar', reqDifficulty:'1..'},
      {slots: 1, ref: 'fxt-cenote', reqDifficulty:'1..'},
    ]
  },
  {
    id: 'grp-cave', group: [
      {slots: 1, ref: 'fxt-cave'},
    ]  
  },   
  {
    id: 'grp-sacrileg', group: [
      {slots: 1, ref: 'fxt-stoneStatue01'},
      {slots: 1, ref: 'fxt-stoneStatue02'},
      {slots: 1, ref: 'fxt-stoneStatue03'},
      {slots: 2, ref: 'fxt-stoneCircle'},
    ]  
  },
  {
    id: 'grp-stoneStatue', group: [
      {slots: 1, ref: 'fxt-stoneStatue01'},
      {slots: 1, ref: 'fxt-stoneStatue02'},
      {slots: 1, ref: 'fxt-stoneStatue03'},
    ]  
  },
  {
    id: 'grp-eyeCandy-grasslands', group: [
      {slots: 2, ref: 'fxt-giantTree'},
      {slots: 1, ref: 'fxt-mountainFace'},
      {slots: 1, ref: 'fxt-rockFormation'},
    ]  
  },
  {
    id: 'grp-eyeCandy-drylands', group: [
      {slots: 1, ref: 'fxt-rockFormation'},
      {slots: 2, ref: 'fxt-giantSkeleton'},
      {slots: 1, ref: 'fxt-mountainFace'},
    ]  
  },

  // biomes  

  {
    id: 'bio-debug-grass', 
    name: "bio-debug-grass-name",
    flags: {grass:true},
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 0,
    terrain: [
      {perlin: 0,  tile: 'tl-grass'},
    ],
    fixtures: [
      //{chance: 1.0, select: 1, group:'grp-sanity-settlement'},
    ],
    zones: [
      //{chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
  {
    id: 'bio-debug-dry', 
    name: "bio-debug-dry-name",
    flags: {dry:true},
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 0,
    terrain: [
      {perlin: 0,  tile: 'tl-dry'},
    ],
    fixtures: [
      //{chance: 1.0, select: 1, group:'grp-sanity-settlement'},
    ],
    zones: [
      //{chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
  {
    id: 'bio-debug-desert', 
    name: "bio-debug-desert-name",
    flags: {desert:true},
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 0,
    terrain: [
      {perlin: 0,  tile: 'tl-desert'},
    ],
    fixtures: [
      //{chance: 1.0, select: 1, group:'grp-sanity-settlement'},
    ],
    zones: [
      //{chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
]);