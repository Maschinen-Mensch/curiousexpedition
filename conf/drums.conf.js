config.entities.add([

// items

  {
    id: 'it-bongos',
    name: "txt-it-bongos-name",
    description: "txt-it-bongos",
    debugCategory: 'utility',
    sprite: 'it_special_bongos_1.png',
    value: {
      base: 30,
      karma: karmaSmall,
    },
    maxStack: 1,
    maxChargeTime: 10,
    select: {
      sanity: 10,
      resetPartyStatus: '+aggro',
      playSound: 'sfx_totem'
    }
  },
  {
    id: 'it-bongosTuned',
    name: "txt-it-bongosTuned-name",
    description: "txt-it-bongosTuned",
    debugCategory: 'utility',
    sprite: 'it_special_bongos_1.png',
    value: {
      base: 40,
      karma: karmaMedium,
    },
    maxStack: 1,
    maxChargeTime: 10,
    select: {
      sanity: 15,
      playSound: 'sfx_totem',
      resetPartyStatus: '+aggro'
    }
  }
])