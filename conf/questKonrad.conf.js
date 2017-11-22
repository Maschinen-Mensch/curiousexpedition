config.entities.add([

// status

  {
    id: 'st-konrad',
    debugCategory: 'Quest',
    title: "txt-st-konrad-title",
    description: "txt-st-konrad",
    sprite: "res_status_missingPerson.png",
    important: true,
  },

// events

  {
    id: 'evt-quest-konrad',
    npc: 'pl-soldier-british',
    text: "txt-evt-quest-konrad",
    report: "txt-evt-quest-konrad-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        setPartyStatus: {'st-konrad':true},
        text: "txt-evt-quest-konrad-1",
        report: "txt-evt-quest-konrad-report-1",
        select: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-quest-konrad-2",
        report: "txt-evt-quest-konrad-report-2",
        select: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-quest-konrad-complete',
    setPartyStatus: {'st-konrad':false},
    select: [
      {
        reqItems: {'it-quest-5-decoration':1},
        npc: 'pl-soldier-british',
        text: "txt-evt-quest-konrad-complete",
        items: {'it-quest-5-decoration':-1},
        actions: ['evt-harbor-quest-reward'],
      },
      {
        reqItems: {'it-quest-5-decoration':'0'},
        npc: 'pl-soldier-british',
        text: "txt-evt-quest-konrad-complete-1",
        fame: -fameLarge,
        actions: {
          actionText: "txt-evt-sanity-angry-action",
          select: 'evt-harbor-eventSelection',
        },
      },
    ]
  },
])