config.entities.add([

  // Count Units

  {
    id: 'evt-harbor-countTrek',
    events: [
      {
        reqFreePartyCount: '..-1',
        text: "txt-evt-harbor-countTrek",
        showPartyCount: true,
        charEffects: [
          {
            count: 'any',
            optional: true,
            reqCharFlags: '-special -abomination +humanoid',
            actions: {
              actionText: "txt-evt-harbor-countTrek-action",
              removeCharacter: true,
              text: "txt-evt-harbor-countTrek-1",
              events: 'evt-harbor-eventSelection',
            },
          },
          {
            count: 'any',
            reqCharFlags: '-special -humanoid',
            optional: true,
            actions: {
              actionText: "txt-evt-harbor-countTrek-action",
              removeCharacter: true,
              text: "txt-evt-harbor-countTrek-2",
              events: 'evt-harbor-eventSelection',
            },
          },
        ],
      },
      {
        prio: 1,
        setPartyFlags: '+harborCheck_UnitCount',
        events: 'evt-harbor-eventSelection',
      },
    ],    
  },

  // Dismiss Units

  {
    id: 'evt-harbor-dismissUnit',
    actionText: "txt-evt-harbor-dismissUnit-action",
    text: "txt-evt-harbor-dismissUnit",
    charEffects: [
      {
        count: 'any',
        optional: true,
        reqCharFlags: '-special -abomination +humanoid',
        actions: {
          actionText: "txt-evt-harbor-countTrek-action",
          removeCharacter: true,
          text: "txt-evt-harbor-dismissUnit-1",
          events: 'evt-harbor-eventSelection',
        },
      },
      {
        count: 'any',
        reqCharFlags: '-special -humanoid',
        optional: true,
        actions: {
          actionText: "txt-evt-harbor-countTrek-action",
          removeCharacter: true,
          text: "txt-evt-harbor-dismissUnit-2",
          events: 'evt-harbor-eventSelection',
        },
      },
    ],
    actions: {
      actionText: "txt-evt-harbor-dismissUnit-action-1",
      events: 'evt-harbor-eventSelection',
    },
  },

])