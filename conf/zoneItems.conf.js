config.entities.add([

  {
    id: 'it-fireworks',
    name: "txt-it-fireworks-name",
    description: "txt-it-fireworks",
    debugCategory: 'zones',
    sprite: 'it_utility_fireworks_1.png',
    value: {
      base: 5,
      village: 15,
      karma: 1,
    },
    maxStack: 10,
    events: {
      removeItem:true,
      particle: 'pt-fireworks',
      setPartyStatus: {'os-stealth':true},
      playSound: ['sfx_balloon_flare_fireworks'],
    }
  },
  {
    id: 'it-totemStick',
    name: "txt-it-totemStick-name",
    description: "txt-it-totemStick",
    debugCategory: 'zones',
    sprite: 'it_special_totemStick.png',
    value: {
      base: 5,
      village: 15,
      karma: 1,
    },
    maxStack: 10,
    events: {
      posPunch: {radius:1, range:5}, 
      startSprawl: {ref:'spr-totem', radius:1, count:7},
      playSound: ['sfx_totem'],
      removeItem: true,
    }
  },
  {
    id: 'it-hornFlute',
    name: "txt-it-hornFlute-name",
    description: "txt-it-hornFlute",
    debugCategory: 'zones',
    sprite: 'it_special_hornflute_1.png',
    value: {
      base: 5,
      karma: karmaSmall,
    },
    maxStack: 20,
    events: {
      posPunch: {radius:1, range:6}, 
      deactivateZones: {radius: 1, turns: 10},
      playSound: ['sfx_flute'],
      removeItem: true,
    }
  }
])