config.entities.add([

  // items

  {
    id: 'it-egg-tortoise',
    name: "txt-it-egg-tortoise-name",
    description: "txt-it-egg-tortoise",
    sprite: 'it_special_egg_1.png',
    value: {
      base: 30,
      karma: 1,
    },
    maxStack: 1,
    tripEvents: [
      {slots: 1, delayedEvent : 'evt-tortoise-hatch'},
      {slots: 3},
    ],
  },
  {
    id: 'it-baby-tortoise',
    name: "txt-it-baby-tortoise-name",
    description: "txt-it-baby-tortoise",
    sprite: 'it_special_tortoise_1.png',
    value: {
      base: 50,
      karma: 1,
    },
    maxStack: 1,
    tripEvents: [
      {slots: 1, delayedEvent : 'evt-tortoise-adult'},
      {slots: 5}
    ]
  },

  // events

  {
    id: 'evt-tortoise-hatch',
    showImage: {src: 'evt_fxt_empty.png', type: 'day'},
    text: "txt-evt-tortoise-hatch",
    incAchievement: 'ach-hatchEggs',
    removeItem: true,
    loot: {
      items: {'it-baby-tortoise':1},
      close: 'evt-leave',
    },
  },
  {
    id: 'evt-tortoise-adult',
    showImage: {src: 'evt_fxt_empty.png', type: 'day'},
    text: "txt-evt-tortoise-adult",
    removeItem: true,
    npc: 'anm-tortoise',
    npcEvents: {
      actions: {
        actionText: "txt-evt-tortoise-adult-action",
        text: "txt-evt-tortoise-adult-1",
        report: "txt-evt-tortoise-adult-report",
        addNPC: true,
        actions: 'evt-leave'
      }
    },
    actions: {
      actionText: "txt-evt-tortoise-adult-action-1",
      text: "txt-evt-tortoise-adult-2",
      actions: 'evt-leave'
    }
  }
])