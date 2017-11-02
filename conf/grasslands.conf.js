config.entities.add([

  // design thoughts:
  // - biome should have 3-4 non-decorative fixtures
  // - biome should spawn settlement or nature (not both)
  // - biome should have 10% chance of adding special customization (wow moment)

  // more notes:
  // - the order in which fixtures are spawned is important

// goals

  {
    id: 'gol-goldenTemple-moonStone',
    description: "txt-gol-goldenTemple-moonStone",
    fixtures: {ref:'grp-goldenTemple'}
  },

// pockets

  {
    id: 'pck-grass', 
    name: "txt-pck-grass-name",
    flags: '+jungle',
    previewSprite: 'hud_worldmap_pocketPreview_grass.png',
    slotMarker: 'hud_mapMarker_grass.png',
    ambientSound: 'sfx_loop_grasslands_1',
    goals: [
      'gol-goldenTemple-moonStone', 
      'gol-goldenTemple-buried'
    ],
    fixtures: [
      [ // resting group
        {ref: 'grp-village'},
        {ref: 'fxt-mission'},
        {ref: 'grp-sanity-nature'},
        {ref: 'grp-sanity-nature'},
        {select:3, group: [
          {ref: 'grp-village'},
          {ref: 'fxt-mission'},
          {ref: 'grp-sanity-nature'},
        ]},
      ],
      [ // loot group
        {ref: 'grp-cave'},
        {ref: 'grp-loot'},
        {ref: 'grp-cave'},
        {ref: 'grp-loot'},
        {ref: 'grp-loot'},
        {ref: 'grp-loot'},
      ],
      [ // utility 
        ,
        {select:3, group: [
          {ref: 'fxt-stoneCircle'},
          {ref: 'fxt-shamanHut'},
          {ref: 'fxt-trader'},
        ]}
      ],
      [ // shrine/special group
        {ref: 'grp-treasure'},
        ,
        {ref: 'grp-treasure'},
        {ref: 'grp-special'},
        {ref: 'grp-treasure'},
        {select:2, group: [
          {ref: 'grp-special'},
          {ref: 'grp-treasure'}
        ]}
      ],
      [
        {reqWorld: '3..', chance:0.5, select:2, ref:'fxt-cave-teleport'}
      ],
      [
        ,
        ,
        {reqDifficulty: '1..', ref: 'fxt-magneticMountain'},
        {reqDifficulty: '1..', ref: 'fxt-magneticMountain'},
        {reqDifficulty: '1..', ref: 'fxt-magneticMountain'},
      ],
      [
        {reqWorld: '3', select: 1, ref: 'fxt-geysir-inactive'},
      ],
      [
        {reqWorld: '4', select: 2, group: [
          {slots: 1, select: 1, ref: 'fxt-volcano-spawn-small-inactive'},
          {slots: 1, select: 1, ref: 'fxt-volcano-spawn-large-inactive'},
          {slots: 3, select: 3, ref: 'fxt-geysir-inactive'},
          {slots: 3, select: 2, ref: 'fxt-geysir-inactive'},
        ]},
      ],
      [
        {reqWorld: '5', select: 1, group: [
          {slots: 1, select: 1, ref: 'fxt-volcano-spawn-large-inactive'},
          {slots: 1, select: 3, ref: 'fxt-volcano-spawn-small-inactive'},
          {slots: 3, select: 4, ref: 'fxt-geysir-inactive'},
        ]},
      ],
      [
        {ref:'fxt-hiddenTreasure'},
        {chance: 0.25, ref:'fxt-mountainFaceSecret'},
      ]
    ],
    borderBiome: [
      {slots:2, ref:'bio-outside-sea'},
      {slots:2, ref:'bio-outside-mountains'},
      {slots:2, ref:'bio-outside-jungle'},
      {slots:1, ref:'bio-outside-pits-dry'},
    ],
    biomes: [
      {ref: 'bio-grasslands-generic'},
      {chance:0.9, ref: 'bio-grasslands-jungle'},
      {chance:0.1, group: [
        {slots:1, group: 'grp-desert-sanity', reqDifficulty:'1..'},
        {slots:1, group: 'grp-drylands-sanity'},
      ]},
      {group: 'grp-grasslands-sanity'},
      {chance:0.3, reqWorld:'3..', group: [
        {slots:2, group: 'grp-desert-sanity', reqDifficulty:'1..'},
        {slots:1, group: 'grp-drylands-sanity'},
      ]},
      {select:5, group: 'grp-grasslands-sanity'},
    ],
  },

// biome groups

  {
    id: 'grp-grasslands-sanity',
    group: [
      {slots: 2, ref: 'bio-grasslands-jungle'},
      {slots: 2, ref: 'bio-grasslands-pits'},
      {slots: 1, ref: 'bio-grasslands-waterMountains'},
      {slots: 1, ref: 'bio-grasslands-lakes'},
      {slots: 1, ref: 'bio-grasslands-swamps', reqWorld:'1..'},
      {slots: 1, ref: 'bio-grasslands-mountains'},
    ]
  },

// biomes

  {
    id: 'bio-grasslands-generic', 
    name: "txt-bio-grasslands-generic-name",
    flags: '+grass',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.80,  tile: 'tl-grass'},
      {perlin: 0.74,  tile: 'tl-dry'},
      {perlin: 0.66,  tile: 'tl-mountain'},
      {perlin: 0.61,  tile: 'tl-jungle-thick'},
      {perlin: 0.585, tile: 'tl-jungle-light'},
      {perlin: 0.58,  tile: 'tl-hill'},
      {perlin: 0.55,  tile: 'tl-jungle-thick'},
      {perlin: 0.51,  tile: 'tl-jungle-light'},
      {perlin: 0.45,  tile: 'tl-grass'},
      {perlin: 0.44,  tile: 'tl-grass-bushes'},
      {perlin: 0.41,  tile: 'tl-jungle-thick'},
      {perlin: 0.30,  tile: 'tl-grass'},
      {perlin: 0.28,  tile: 'tl-grass-bushes'},
      {perlin: 0.27,  tile: 'tl-jungle-light'},
      {perlin: 0.26,  tile: 'tl-grass-bushes'},
      {perlin: 0.22,  tile: 'tl-swamp'},
      {perlin: 0.20,  tile: 'tl-river-shallow'},
      {perlin: 0.16,  tile: 'tl-river'},
      {perlin: 0.13,  tile: 'tl-river-shallow'},
      {perlin: 0.11,  tile: 'tl-river'},
      {perlin: 0.1,   tile: 'tl-river-shallow'},
      {perlin: 0.0,   tile: 'tl-river'},
    ],
    fixtures: [
      {select: 1, group: 'grp-eyeCandy-grasslands'},
    ],
    zones: [
      {select: 1, group: [
        {slots: 3, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
      ]},
      {reqWorld: '2..3', select: 1, group: [
        {slots: 1, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
      ]},
      {reqWorld: '4..', select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 1, ref: 'zn-giantBird'},
        {slots: 1, ref: 'zn-raptor'},
      ]},

      {change:1.0, select:1, ref:'zn-butterflies'},
      {chance:0.3, select:1, ref:'zn-elephant'},
    ],
  },
  {
    id: 'bio-grasslands-jungle', 
    name: "txt-bio-grasslands-jungle-name",
    flags: '+grass',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.90,  tile: 'tl-grass-bushes'},
      {perlin: 0.70,  tile: 'tl-jungle-thick'},
      {perlin: 0.66,  tile: 'tl-grass-bushes'},
      {perlin: 0.65,  tile: 'tl-grass'},
      {perlin: 0.63,  tile: 'tl-swamp'},
      {perlin: 0.62,  tile: 'tl-river-shallow'},
      {perlin: 0.60,  tile: 'tl-river'},
      {perlin: 0.59,  tile: 'tl-swamp'},
      {perlin: 0.58,  tile: 'tl-grass-bushes'},
      {perlin: 0.57,  tile: 'tl-jungle-light'},
      {perlin: 0.51,  tile: 'tl-jungle-thick'},
      {perlin: 0.49,  tile: 'tl-hill'},
      {perlin: 0.45,  tile: 'tl-grass'},
      {perlin: 0.44,  tile: 'tl-jungle-light'},
      {perlin: 0.41,  tile: 'tl-jungle-thick'},
      {perlin: 0.40,  tile: 'tl-grass'},
      {perlin: 0.37,  tile: 'tl-jungle-thick'},
      {perlin: 0.35,  tile: 'tl-mountain'},
      {perlin: 0.33,  tile: 'tl-jungle-thick'},
      {perlin: 0.30,  tile: 'tl-grass'},
      {perlin: 0.28,  tile: 'tl-grass-bushes'},
      {perlin: 0.27,  tile: 'tl-jungle-light'},
      {perlin: 0.25,  tile: 'tl-grass-bushes'},
      {perlin: 0.22,  tile: 'tl-swamp'},
      {perlin: 0.19,  tile: 'tl-river-shallow'},
      {perlin: 0.16,  tile: 'tl-river'},
      {perlin: 0.14,  tile: 'tl-river-shallow'},
      {perlin: 0.11,  tile: 'tl-jungle-light'},
      {perlin: 0.08,  tile: 'tl-jungle-thick'},
      {perlin: 0.05,  tile: 'tl-grass'},
      {perlin: 0.03,  tile: 'tl-jungle-thick'},
      {perlin: 0.00,  tile: 'tl-mountain'},
    ],
    fixtures: [
      {select: 1, group: 'grp-eyeCandy-grasslands'},
    ],
    zones: [
      {reqWorld: '1..', chance: 0.7, select: 1, group: [
        {slots: 3, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-gorilla'},
      ]},
      {reqWorld: '0', chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-hyena'},
      ]},
      {reqWorld: '1', chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
      ]},
      {reqWorld: '2..3', chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-hyena'},
        {slots: 2, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-gorilla'},
      ]},
      {reqWorld: '4..', chance: 1.0, select: 1, group: [
        {slots: 2, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-gorilla'},
        {slots: 1, ref: 'zn-giantBird'},
        {slots: 1, ref: 'zn-raptor'},
      ]},

      {change:1.0, select:2, ref:'zn-butterflies'},
      {chance:1.0, select:1, ref:'zn-mosquito'},
      {chance:0.3, select:1, ref:'zn-elephant'},
    ],
  },
  {
    id: 'bio-grasslands-waterMountains',
    name: "txt-bio-grasslands-waterMountains-name",
    flags: '+grass +mountain +water',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png', 
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.99, tile: 'tl-jungle-thick'},
      {perlin: 0.96, tile: 'tl-grass'},
      {perlin: 0.91, tile: 'tl-jungle-thick'},
      {perlin: 0.89, tile: 'tl-grass-bushes'},
      {perlin: 0.85, tile: 'tl-jungle-thick'},
      {perlin: 0.80, tile: 'tl-grass'},
      {perlin: 0.77, tile: 'tl-mountain'},
      {perlin: 0.76, tile: 'tl-grass-bushes'},
      {perlin: 0.73, tile: 'tl-hill'},
      {perlin: 0.72, tile: 'tl-river-shallow'},
      {perlin: 0.67, tile: 'tl-mountain'},
      {perlin: 0.57, tile: 'tl-grass'},
      {perlin: 0.51, tile: 'tl-mountain'},
      {perlin: 0.50, tile: 'tl-river-shallow'},
      {perlin: 0.46, tile: 'tl-mountain'},
      {perlin: 0.44, tile: 'tl-river-shallow'},
      {perlin: 0.43, tile: 'tl-grass-bushes'},
      {perlin: 0.40, tile: 'tl-jungle-light'},
      {perlin: 0.25, tile: 'tl-grass'},
      {perlin: 0.20, tile: 'tl-jungle-thick'},
      {perlin: 0.15, tile: 'tl-mountain'},
      {perlin: 0.00, tile: 'tl-grass'},
    ],
    fixtures: [
      // {select: 1, ref: 'fxt-cave'},
      {select: 1, ref: 'fxt-geysir-inactive', reqWorld: '1..'},
      {select: 1, ref: 'fxt-geysir-inactive', reqWorld: '2..'},
      {select: 1, ref: 'fxt-geysir-inactive', reqWorld: '3..'},
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 2, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-giantCrab'},
        {slots: 2, ref: 'zn-gorilla'},
      ]},
      {reqWorld: [2,3], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 2, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantCrab'},
        {slots: 2, ref: 'zn-gorilla'},
      ]},
      {reqWorld: [4, 5], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 2, ref: 'zn-giantCrab'},
        {slots: 2, ref: 'zn-raptor'},
      ]},

      {chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
  {
    id: 'bio-grasslands-lakes', 
    name: "txt-bio-grasslands-lakes-name",
    flags: '+grass +water',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png', 
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.94,  tile: 'tl-jungle-light'},
      {perlin: 0.90,  tile: 'tl-jungle-thick'},
      {perlin: 0.87,  tile: 'tl-grass-bushes'},
      {perlin: 0.82,  tile: 'tl-grass'},
      {perlin: 0.79,  tile: 'tl-hill'},
      {perlin: 0.75,  tile: 'tl-swamp'},
      {perlin: 0.71,  tile: 'tl-river-shallow'},
      {perlin: 0.70,  tile: 'tl-river'},
      {perlin: 0.66,  tile: 'tl-grass'},
      {perlin: 0.64,  tile: 'tl-jungle-thick'},
      {perlin: 0.60,  tile: 'tl-grass'},
      {perlin: 0.585, tile: 'tl-jungle-light'},
      {perlin: 0.56,  tile: 'tl-jungle-thick'},
      {perlin: 0.50,  tile: 'tl-mountain'},
      {perlin: 0.49,  tile: 'tl-jungle-thick'},
      {perlin: 0.48,  tile: 'tl-jungle-light'},
      {perlin: 0.46,  tile: 'tl-grass-bushes'},
      {perlin: 0.44,  tile: 'tl-river-shallow'},
      {perlin: 0.30,  tile: 'tl-river'},
      {perlin: 0.28,  tile: 'tl-river-shallow'},
      {perlin: 0.25,  tile: 'tl-grass'},
      {perlin: 0.10,  tile: 'tl-river'},
      {perlin: 0.00,  tile: 'tl-grass'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-crocodile'},
        {slots: 1, ref: 'zn-gorilla'},
      ]},
      {reqWorld: [2,3], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-crocodile'},
        {slots: 2, ref: 'zn-gorilla'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {reqWorld: [4, 5], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 2, ref: 'zn-crocodile'},
        {slots: 2, ref: 'zn-giantCrab'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 2, ref: 'zn-giantBird'},
      ]},

      {chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
  {
    id: 'bio-grasslands-swamps',
    name: "txt-bio-grasslands-swamps-name",
    flags: '+grass +water',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png', 
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.92,  tile: 'tl-jungle-light'},
      {perlin: 0.88,  tile: 'tl-jungle-thick'},
      {perlin: 0.85,  tile: 'tl-grass-bushes'},
      {perlin: 0.84,  tile: 'tl-hill'},
      {perlin: 0.72,  tile: 'tl-swamp'},
      {perlin: 0.69,  tile: 'tl-river-shallow'},
      {perlin: 0.63,  tile: 'tl-jungle-thick'},
      {perlin: 0.60,  tile: 'tl-grass'},
      {perlin: 0.58,  tile: 'tl-jungle-light'},
      {perlin: 0.57,  tile: 'tl-jungle-thick'},
      {perlin: 0.55,  tile: 'tl-river-shallow'},
      {perlin: 0.53,  tile: 'tl-river'},
      {perlin: 0.51,  tile: 'tl-grass'},
      {perlin: 0.50,  tile: 'tl-mountain'},
      {perlin: 0.44,  tile: 'tl-river-shallow'},
      {perlin: 0.40,  tile: 'tl-river'},
      {perlin: 0.30,  tile: 'tl-swamp'},
      {perlin: 0.29,  tile: 'tl-river-shallow'},
      {perlin: 0.25,  tile: 'tl-grass'},
      {perlin: 0.18,  tile: 'tl-swamp'},
      {perlin: 0.175, tile: 'tl-hill'},
      {perlin: 0.10,  tile: 'tl-swamp'},
      {perlin: 0.00,  tile: 'tl-grass'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 3, ref: 'zn-crocodile'},
        {slots: 1, ref: 'zn-zombiePygmy'},
      ]},
      {reqWorld: '2..3', chance: 1.0, select: 1, group: [
        {slots: 2, ref: 'zn-crocodile'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 1, ref: 'zn-giantBird'},
        {slots: 1, ref: 'zn-giantCrab'},
        {slots: 1, ref: 'zn-zombiePygmy'},
      ]},
      {reqWorld: '4..', chance: 1.0, select: 1, group: [
        {slots: 2, ref: 'zn-crocodile'},
        {slots: 2, ref: 'zn-giantCrab'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-zombiePygmy'},
      ]},

      {chance:1.0, select:2, ref:'zn-mosquito'},
      {chance:0.3, select:1, ref:'zn-elephant'},
    ],
  },
  {
    id: 'bio-grasslands-mountains',
    name: "txt-bio-grasslands-mountains-name",
    flags: '+grass +mountain',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.80,  tile: 'tl-river-shallow'},
      {perlin: 0.75,  tile: 'tl-grass'},
      {perlin: 0.74,  tile: 'tl-mountain'},
      {perlin: 0.67,  tile: 'tl-grass'},
      {perlin: 0.60,  tile: 'tl-jungle-light'},
      {perlin: 0.59,  tile: 'tl-hill'},
      {perlin: 0.56,  tile: 'tl-mountain'},
      {perlin: 0.55,  tile: 'tl-volcano-inactive'},
      {perlin: 0.50,  tile: 'tl-mountain'},
      {perlin: 0.45,  tile: 'tl-grass'},
      {perlin: 0.40,  tile: 'tl-mountain'},
      {perlin: 0.36,  tile: 'tl-dry'},
      {perlin: 0.355, tile: 'tl-hill'},
      {perlin: 0.32,  tile: 'tl-dry-jungle-thick'},
      {perlin: 0.31,  tile: 'tl-hill'},
      {perlin: 0.30,  tile: 'tl-dry'},
      {perlin: 0.27,  tile: 'tl-dry-jungle-light'},
      {perlin: 0.20,  tile: 'tl-mountain'},
      {perlin: 0.00,  tile: 'tl-grass'},
    ],
    fixtures: [
      {select: 1, ref: 'fxt-mountainFace'},
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 3, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 2, ref: 'zn-giantBird'},
      ]},
      {reqWorld: [2,3], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 2, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 3, ref: 'zn-giantBird'},
      ]},
      {reqWorld: [4, 5], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 2, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 4, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
      ]},

      {chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
  {
    id: 'bio-grasslands-pits',
    name: "txt-bio-grasslands-pits-name",
    flags: '+grass +pits',
    debugColor: 'green',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.76,  tile: 'tl-pit-grass'},
      {perlin: 0.74,  tile: 'tl-grass'},
      {perlin: 0.68,  tile: 'tl-jungle-thick'},
      {perlin: 0.65,  tile: 'tl-grass-bushes'},
      {perlin: 0.60,  tile: 'tl-mountain'},
      {perlin: 0.55,  tile: 'tl-jungle-light'},
      {perlin: 0.45,  tile: 'tl-jungle-thick'},
      {perlin: 0.43,  tile: 'tl-grass'},
      {perlin: 0.42,  tile: 'tl-hill'},
      {perlin: 0.40,  tile: 'tl-mountain'},
      {perlin: 0.36,  tile: 'tl-jungle-thick'},
      {perlin: 0.355, tile: 'tl-hill'},
      {perlin: 0.34,  tile: 'tl-jungle-thick'},
      {perlin: 0.31,  tile: 'tl-grass'},
      {perlin: 0.00,  tile: 'tl-pit-grass'},
    ],
    fixtures: [
      {select: 1, ref: 'fxt-mountainFace'},
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
      ]},
      {reqWorld: [2,3], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
      ]},
      {reqWorld: [4,5], chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-gorilla'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 4, ref: 'zn-raptor'},
      ]},

      {chance: 0.3, ref: 'zn-elephant', select: 1},
    ],
  },
])