config.entities.add([

  {
    id: 'evt-harbor-animalImprovement',
    text: "txt-evt-harbor-animalImprovement",
    showImage: {src: 'evt_spec_ship_1.png'},
    npc: 'npc-saddleArtisan',
    events: [
      {
        reqFunds: '50..',
        events: 'evt-harbor-animalImprovement-actions',
      },
      {
        reqFunds: '..49',
        text: "txt-evt-harbor-animalImprovement-1",
        actions: {
          actionText: "txt-evt-harbor-animalImprovement-action",
          events: 'evt-harbor-eventSelection',
        },
      }
    ]
  },
  {
    id: 'evt-harbor-animalImprovement-return',
    text: "txt-evt-harbor-animalImprovement-return",
    events: 'evt-harbor-eventSelection',
  },
  {
    id: 'evt-harbor-animalImprovement-actions',
    charEffects: [
      {
        optional: true, count: 'any', reqCharFlags: '+packAnimal',
        reqStatus: '-animalCapacity-1 -animalCapacity-2 -animalCapacity-3',
        actions: {
          actionText: "txt-evt-harbor-animalImprovement-actions-action",
          reqFunds: '50..',
          funds: -50,
          setStatus: '+animalCapacity-1',
          text: "txt-evt-harbor-animalImprovement-actions",
          events: 'evt-harbor-animalImprovement-return',
        },
      },
      {
        optional: true, count: 'any', reqCharFlags: '+packAnimal',
        reqStatus: '+animalCapacity-1',
        actions: {
          actionText: "txt-evt-harbor-animalImprovement-actions-action-1",
          reqFunds: '100..',
          funds: -100,
          setStatus: '-animalCapacity-1 +animalCapacity-2',
          text: "txt-evt-harbor-animalImprovement-actions-1",
          events: 'evt-harbor-animalImprovement-return',
        },
      },
      {
        optional: true, count: 'any', reqCharFlags: '+packAnimal',
        reqStatus: '+animalCapacity-2',
        actions: {
          actionText: "txt-evt-harbor-animalImprovement-actions-action-2",
          reqFunds: '150..',
          funds: -150,
          setStatus: '-animalCapacity-2 +animalCapacity-3',
          text: "txt-evt-harbor-animalImprovement-actions-2",
          events: 'evt-harbor-animalImprovement-return',
        },
      },
    ],
    actions: {
      actionText: "txt-evt-harbor-recruit-action",
      events: 'evt-harbor-eventSelection',
    },
  },
  
])