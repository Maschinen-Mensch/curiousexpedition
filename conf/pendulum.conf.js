config.entities.add([
  {
    id: 'it-pendulum-shrine',
    name: "txt-it-pendulum-shrine-name",
    description: "txt-it-pendulum-shrine",
    debugCategory: 'pendulum',
    sprite: 'it_special_dowsingShrine_1.png',
    value: 20,
    maxStack: 3,
    dowsing: '+shrine',
    noWeight: true
  },
  {
    id: 'it-pendulum-treasure',
    name: "txt-it-pendulum-treasure-name",
    description: "txt-it-pendulum-treasure",
    debugCategory: 'pendulum',
    sprite: 'it_special_dowsingTreasure_1.png',
    value: 20,
    maxStack: 3,
    dowsing: '+burriedTreasure',
    noWeight: true,
    dayEvents: {
      replaceFixtures: {range: 2, oldFlags:'+burriedTreasure', new:'fxt-shownTreasure'},
    },
  },
  {
    id: 'it-pendulum-blessing',
    name: "txt-it-pendulum-blessing-name",
    description: "txt-it-pendulum-blessing",
    debugCategory: 'pendulum',
    sprite: 'it_special_dowsingShrine_1.png',
    value: 20,
    maxStack: 3,
    dowsing: '+shrineBlessing',
    noWeight: true
   },
   {
    id: 'it-pendulum-yendor',
    name: "txt-it-pendulum-yendor-name",
    description: "txt-it-pendulum-yendor",
    debugCategory: 'pendulum',
    sprite: 'it_special_amuletYendor_1.png',
    value: 80,
    maxStack: 1,
    dowsing: '+burriedTreasure | +shrineBlessing | +shrine',
    showInHallOfFame: false,
   }
])