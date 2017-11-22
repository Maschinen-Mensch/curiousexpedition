config.entities.add([
  
  {
    id: 'fxt-volcano-spawn-large-active',
    name: "txt-fxt-volcano-spawn-large-active-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    //sprite: "res_fxt_volcano_active.png",
    showHint: false,
    hintBiome:false,
    particle: 'pt-volcano-burst',
    setTile: 'tl-volcano-active',
    spawnEvents: {
      particle: 'pt-erupt-mountain',
      camShake: {power:6, length:2.0},
      select: [
        {slots:3, addFixture: {ref:'fxt-volcano-spawn-large-active', range:1}},
        {slots:1}
      ]
    },
    dayEvents: [
      {reqTutorial: true, replaceFixtures: {new:'fxt-volcano-active-endless'}},
      {reqTutorial: false, replaceFixtures: {new:'fxt-volcano-active'}},
    ],
  },
  {
    id: 'fxt-volcano-spawn-large-inactive',
    name: "txt-fxt-volcano-spawn-large-inactive-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    sprite: "res_fxt_volcano_inactive.png",
    showHint: false,
    hintBiome:false,
    particle: 'pt-volcano-inactive',
    setTile: 'tl-volcano-active',
    setNeighbors: 'tl-mountain',
    spawnEvents: {
      particle: 'pt-erupt-mountain',
      select: [
        {slots:3, addFixture: {ref:'fxt-volcano-spawn-large-inactive', range:1}},
        {slots:1}
      ]
    },
    dayEvents: {replaceFixtures: {new:'fxt-volcano-inactive'}},
  },
  {
    id: 'fxt-volcano-spawn-small-active',
    name: "txt-fxt-volcano-spawn-large-active-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    showHint: false,
    hintBiome:false,
    particle: 'pt-volcano-burst',
    setTile: 'tl-volcano-active',
    sprite: "res_fxt_volcano_active.png",
    spawnEvents: {
      camShake: {power:6, length:2.0},
      particle: 'pt-erupt-mountain',
    },
    dayEvents: {replaceFixtures: {new:'fxt-volcano-active'}},
  },
  {
    id: 'fxt-volcano-spawn-small-inactive',
    name: "txt-fxt-volcano-spawn-large-inactive-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    sprite: "res_fxt_volcano_inactive.png",
    showHint: false,
    hintBiome:false,
    particle: 'pt-volcano-inactive',
    setTile: 'tl-volcano-active',
    spawnEvents: {
      particle: 'pt-erupt-mountain'
    },
    dayEvents: {
      replaceFixtures: {new:'fxt-volcano-inactive'}
    }
  },
  {
    id: 'fxt-volcano-active',
    name: "txt-fxt-volcano-spawn-large-active-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    showHint: false,
    //sprite: "res_fxt_volcano_active.png",
    hintBiome:false,
    particle: 'pt-volcano-burst',
    spawnEvents: {
      camShake: {power:6, length:2.0},
      replaceFixtures: {range: 4, old:'fxt-volcano-inactive', new:'fxt-volcano-active'},
    },
    dayEvents: [
      {
        reqAge: 7, 
        replaceFixtures: {new:'fxt-volcano-inactive'}
      },
      {
        prio:1, 
        camShake: {power:3, length:1.0}, 
        startSprawl: {ref:'spr-fire', radius:2, power:2},
        playSound: 'volcanoErupt'
      },
    ],
  },
  {
    id: 'fxt-volcano-inactive',
    name: "txt-fxt-volcano-spawn-large-inactive-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    showHint: false,
    hintBiome:false,
    particle: 'pt-volcano-inactive',
    sprite: "res_fxt_volcano_inactive.png",
    dayEvents: [
      {
        reqAge: 10,
        select: [
          {replaceTiles: [{chance: 0.04, radius:3, old: 'tl-scorchedEarth', new: 'tl-grass'}] },
          {replaceTiles: [{chance: 0.04, radius:3, old: 'tl-scorchedEarth', new: 'tl-jungle-thick'}] },
          {replaceTiles: [{chance: 0.04, radius:3, old: 'tl-scorchedEarth', new: 'tl-jungle-light'}] },
          {replaceTiles: [{chance: 0.04, radius:3, old: 'tl-scorchedEarth', new: 'tl-grass-bushes'}] },
        ],
      },
      {reqAge: 20, slots:1, replaceFixtures: {new:'fxt-volcano-active'}},
      {reqAge: 20, slots:20},
    ],
  },
  {
    id: 'fxt-volcano-active-endless',
    name: "txt-fxt-volcano-spawn-large-active-name",
    debugCategory: 'hazard',
    debugColor: 'lightgray',
    showHint: false,
    sprite: "res_fxt_volcano_active.png",
    hintBiome:false,
    particle: 'pt-volcano-burst',
    spawnEvents: {
      camShake: {power:6, length:2.0},
      replaceFixtures: {range: 4, old:'fxt-volcano-inactive', new:'fxt-volcano-active-endless'},
    },
    dayEvents: {
      camShake: {power:3, length:1.0}, 
      startSprawl: {ref:'spr-fire', radius:3, power:4},
      playSound: 'volcanoErupt'
    }
  },

])
