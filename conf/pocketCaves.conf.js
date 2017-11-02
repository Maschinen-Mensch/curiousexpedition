config.entities.add([

// pocket

  {
    id: 'pck-caves', 
    name: "txt-pck-caves-name",
    slotMarker: 'hud_mapMarker_desert.png',
    description: "txt-pck-caves",
    ambientSound: 'sfx_loop_desert_1',
    goals: [
      'gol-goldenTemple-grass',
    ],
    fixtures: [
      {ref: 'fxt-magneticMountain'},
    ],
    biomes: [
      {ref: 'bio-caves-generic'},
    ],
  },

// biome groups
  

// biomes

  {
    id: 'bio-caves-generic', 
    name: "txt-pck-caves-name",
    flags: {caves:true},
    eventImg: {
      day:'evt_bio_drylands_1.png',
      night:'evt_bio_drylands_1_night.png'
    },
    tokenIdx: 10,
    terrain: [
      {perlin: 0.7, tile: 'tl-mountain'},
      {perlin: 0.6, tile: 'tl-grass'},
      {perlin: 0.3, tile: 'tl-mountain'},
      {perlin: 0.2, tile: 'tl-grass'},
      {perlin: 0.0, tile: 'tl-mountain'},
    ],
    fixtures: [
      {chance: 1.0, select: 1, group: 'grp-village'},
      {chance: 1.0, select: 1, group: 'grp-sacrileg'},
      {chance: 1.0, select: 1, group: [
        {slots: 1, group: 'grp-utility'},
        {slots: 1, group: 'grp-loot'},
      ]},
    ],
  },

])