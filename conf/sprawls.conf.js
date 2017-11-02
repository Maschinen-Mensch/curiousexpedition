config.entities.add([
  {
      id: 'spr-fire',
      defaultLifeTime: 0,
      defaultChance: 0,
      defaultBurnedTile: 'tl-scorchedEarth',
      removeFixture: '-burriedTreasure',
      particle: 'pt-fire',
      partyEvents: 'evt-sprawl-fire',
      viewCost: 0.3,
      blockZone: true,
    },
    {
      id: 'spr-flood',
      defaultLifeTime: 3,
      defaultChance: 0.35,
      defaultBurnedTile: 'tl-river',
      removeFixture: true,
      particle: 'pt-flood',
      blockZone: true,
      camShake: {power:2, length:1.2}
    },
    {
      id: 'spr-geysir-flood',
      defaultLifeTime: 4,
      defaultChance: 1,
      defaultBurnedTile: 'tl-river',
      removeFixture: false,
      //particle: 'pt-flood',
      blockZone: true,
      //camShake: {power:2, length:1.2}
    },
    {
      id: 'spr-geysir-dry',
      defaultLifeTime: 3,
      removeFixture: false,
    },
    {
      id: 'spr-void',
      defaultLifeTime: 1000,
      defaultChance: 0.08,
      defaultBurnedTile: 'tl-void',
      particle: 'pt-void',
      removeFixture: true,
      forceOuter: true, // if true, tiles surround completely by sprawl tiles will have lifetime zero
      blockZone: true,
    },
    {
      id: 'spr-chasm',
      defaultLifeTime: 1,
      defaultChance: 0.6,
      removeFixture: true,
      particle: 'pt-chasm',
      blockZone: true,
      camShake: {power:6, length:1.2}
    },
    {
      id: 'spr-dry',
      defaultLifeTime: 1,
      defaultChance: 0.7,
      removeFixture: '+water',
      particle: 'pt-spr-desertStorm',
      camShake: {power:2, length:1.2},
      defaultBurnedTile: 'tl-desert',
    },
    {
      id: 'spr-fertile',
      defaultLifeTime: 1,
      defaultChance: 0.7,
      removeFixture: false,
      particle: 'pt-spr-fertile',
    },
    {
      id: 'spr-ice',
      defaultLifeTime: 1,
      defaultChance: 0.7,
      removeFixture: false,
      particle: 'pt-snowStorm',
    },
    {
      id: 'spr-totem',
      defaultLifeTime: 10,
      defaultChance: 0.0,
      removeFixture: false,
      particle: 'pt-magic-totem',
      blockZone: true,
      camShake: {power:2, length:1.2}
    },
    {
      id: 'spr-regen',
      defaultLifeTime: 1,
      defaultChance: 0.7,
      removeFixture: false,
      particle: 'pt-spr-fertile',
      camShake: {power:2, length:1.2},
      defaultBurnedTile: 'regen'
    }
])