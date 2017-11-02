config.entities.add([

// statuses

  {
    id: 'st-superstitious',
    title: "txt-st-superstitious-title",
    description: "txt-st-superstitious",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_superstitious.png",
  },

// events

  {
    id: 'evt-superstitious-complain',
    charEffects: {
      optional: true,
      count: 'any',
      reqStatus: '+superstitious',
      text: "txt-evt-superstitious-complain",
    }
  },
  {
    id: 'evt-superstitious-angry',
    charEffects: {
      optional: true,
      reqStatus: '+superstitious',
      text: "txt-evt-superstitious-angry",
      loyalty: -1,
      chat: 'cl-angry-superstitious'
    }
  }
])
