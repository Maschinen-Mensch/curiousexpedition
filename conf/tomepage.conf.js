config.entities.add([

  {
    id: 'it-tomePage',
    isAbstract: true,
    debugCategory: 'tomePage',
    description: "txt-it-tomePage-desc",
    maxStack: 20,
    // autoRemove: true,
    noWeight: true,
    value: {
      base: 10,
      village: 5,
      shamanHut: 20,
      karma: karmaSmall,
    },
  },
  {
    id: 'it-tomePage-waterfall',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-waterfall-name",
    sprite: 'it_tomepage_1.png',
    events: {
      addFixture: {ref:'fxt-waterfall', range:'biome'},
      revealTiles: {radius:1, fixture:true, centerCam:true},
      chat: 'cl-tomePage-waterfall',
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-shipReturn',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-shipReturn-name",
    sprite: 'it_tomepage_13.png',
    events: {
      posTile: {range:'..100', fixtureFlags:'+ship'},
      teleport: true,
      playSound: 'sfx_teleport_1',
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-vision',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-vision-name",
    sprite: 'it_tomepage_13.png',
    events: {
      setPartyStatus: {'os-viewDistance-large':true},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-wisdom',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-wisdom-name",
    sprite: 'it_tomepage_7.png',
    events: {
      partyEffects:[
        {mapScore: +3},
      ],
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-eagle',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-eagle-name",
    sprite: 'it_tomepage_9.png',
    events: {
      posPunch: {range:100, radius:3},
      revealTiles: {radius:3, fixture:true, centerCam:false},
      particle: 'pt-ambient-eagle',
      playSound: 'sfx_ambient_eagle',
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-portal',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-portal-name",
    sprite: 'it_tomepage_13.png',
    events: {
      addFixture: {ref:'fxt-portal', range:1},
      removeItem: true,
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
    },
  },
  {
    id: 'it-tomePage-monsterDen',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-monsterDen-name",
    sprite: 'it_tomepage_1.png',
    events: {
      addFixture: {ref:'fxt-monsterDen-giantSpiders', range:'biome'},
      revealTiles: {radius:1, fixture:true, centerCam:true},
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-corrupted',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-corrupted-name",
    sprite: 'it_tomepage_1.png',
    events: {
      warpWorld: 'wd-warped-corrupted', 
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-healingSprings',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-healingSprings-name",
    sprite: 'it_tomepage_5.png',
    events: {
      addFixture: {ref:'fxt-healingSprings', range:'biome'},
      revealTiles: {radius:1, fixture:true, centerCam:true},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      chat: 'cl-tomePage-waterfall',
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-hill',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-hill-name",
    sprite: 'it_tomepage_1.png',
    events: {
      replaceTiles: {old: 'any', new: 'tl-hill', particle: ['pt-erupt-hill']},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      camShake: {power:4,length:1.0},
      chat: 'cl-tomePage-hill',
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-mountain',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-mountain-name",
    sprite: 'it_tomepage_2.png',
    events: {
      posPunch: {range:100},
      replaceTiles: {
        old:'any',
        radius:1,
        new:'tl-mountain',
        particle:'pt-erupt-mountain',
        chance:0.7
      },
      camShake: {power:8,length:1.2},
      chat: 'cl-tomePage-hill',
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-waterDrain',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-waterDrain-name",
    sprite: 'it_tomepage_3.png',
    maxStack: 20,
    events: {
      posPunch: {range: 100, radius:1},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      replaceTiles: [
        {radius: 2, old: ['tl-river'], new: 'tl-river-shallow'},
        {radius: 2, old: ['tl-sulfur'], new: 'tl-sulfur-shallow'},
        {radius: 2, old: ['tl-arcticSea'], new: 'tl-packIce'},
      ],

      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-lake',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-lake-name",
    sprite: 'it_tomepage_4.png',
    events: {
      posPunch: {range: 100, radius:1},
      startSprawl: {ref:'spr-flood', radius:0, power:4},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-targetTeleport',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-targetTeleport-name",
    sprite: 'it_tomepage_5.png',
    events: {
      posPunch: {range: 100, radius:0}, 
      teleport: true,
      removeItem: true,
      playSound: 'sfx_teleport_1',
    }
  },
  {
    id: 'it-tomePage-randomTeleport',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-randomTeleport-name",
    sprite: 'it_tomepage_6.png',
    events: {
      posTile: {range: '10..20', traversable:true, reachable:true},
      teleport: true,
      removeItem: true,
      playSound: 'sfx_teleport_1',
    }
  },
  {
    id: 'it-tomePage-abomination',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-abomination-name",
    sprite: 'it_tomepage_7.png',
    events: [
      {
        showImage: {type: 'day', src: 'evt_fxt_empty.png'},
        charEffects: {
          reqCharFlags: '-special -animal -abomination',
          removeCharacter: true,
          text: "txt-it-tomePage-abomination",
          addCharacter: 'pl-abomination',
        },
        playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
        removeItem: true
      },
      {
        prio: 1,
        showImage: {type: 'day', src: 'evt_fxt_empty.png'},
        text: "txt-it-tomePage-abomination-1",
        addCharacter: 'pl-abomination',
        playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
        removeItem: true
      }
    ]
  },
  {
    id: 'it-tomePage-chasm',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-chasm-name",
    sprite: 'it_tomepage_8.png',
    events: {
      posPunch: {range: 100, radius:1},
      startSprawl: {ref:'spr-chasm', radius:0, power:3},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true
    }
  },
  {
    id: 'it-tomePage-fire',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-fire-name",
    sprite: 'it_tomepage_9.png',
    events: {
      posPunch: {range: 100, radius:1},
      startSprawl: {ref:'spr-fire', radius:1, power:5},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-dry',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-dry-name",
    sprite: 'it_tomepage_10.png',
    events: {
      startSprawl: {ref:'spr-dry', radius:0, power:8},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-fertile',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-fertile-name",
    sprite: 'it_tomepage_11.png',
    events: {
      startSprawl: {ref:'spr-fertile', radius:0, power:8},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    id: 'it-tomePage-regen',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-regen-name",
    sprite: 'it_tomepage_12.png',
    events: {
      startSprawl: {ref:'spr-regen', radius:0, power:8},
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
      removeItem: true,
    },
  },
  {
    /* next move to anywhere does not consume any sanity */
    id: 'it-tomePage-superMove',
    extends: 'it-tomePage',
    name: "txt-it-tomePage-superMove-name",
    sprite: 'it_tomepage_13.png',
    events: {
      superMove: true, removeItem: true,
      playSound: ['sfx_tomePage_var1', 'sfx_tomePage_var2', 'sfx_tomePage_var3'],
    },
  },


])
