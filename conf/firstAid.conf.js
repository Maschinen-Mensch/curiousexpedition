config.entities.add([

// items

  {
    id: 'it-firstAid',
    name: "txt-it-firstAid-name",
    description: "txt-it-firstAid",
    sprite: 'it_utility_firstaidkit_1.png',
    maxStack: 20,
    value: {
      base: 12,
      karma: 1,
    },
    events: 'evt-useItem-firstAid'
  },

// events

  { 
    id: 'evt-useItem-firstAid',
    text: "txt-evt-useItem-firstAid",
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    playMusic: ['thm_nature_night_campfire'],
    charEffects: [
      {
        count: 'any', optional: true,
        reqItems: {'it-firstAid':1},
        reqStatus: '+injured | +infected | +curse-abomination',
        actions: 'evt-firstAid-heal'
      },
      {
        count: 'all', optional:true,
        reqStatus: '-injured -infected',
        text: "txt-evt-useItem-firstAid-1"
      },
    ],
    actions: 'evt-leave',
  },
  { 
    id: 'evt-firstAid-heal',
    actionText: "txt-evt-firstAid-heal-action",
    text: "txt-evt-firstAid-heal",
    setStatus: '-injured -infected -curse-abomination -jungleRot',
    items: {'it-firstAid':-1},
    health: +100,
    charEffects: {
      count: 'any', optional: true,
      reqItems: {'it-firstAid':1},
      reqStatus: '+injured | +infected | +curse-abomination | +jungleRot',
      actions: 'evt-firstAid-heal',
    },
    actions: 'evt-leave',
  },
])
