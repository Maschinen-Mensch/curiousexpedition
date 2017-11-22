config.entities.add([

  {
    id: 'st-missionary',
    debugCategory: 'Quest',
    title: "txt-st-missionary-title",
    description: "txt-st-missionary",
    autoRemove: true,
    sprite: "res_status_missionary.png",
    important: true,
  },

  {
    id: 'evt-harbor-quest-missionary',
    reqFreePartyCount:'1..',
    npc: 'pl-missionary',
    npcEvents: {
      text: "txt-evt-harbor-quest-missionary",
      report: "txt-evt-harbor-quest-missionary-report",
      actions: [
        {
          actionText: "txt-evt-harbor-quest-missionary-action",
          setPartyStatus: {'st-missionary':true},
          text: "txt-evt-harbor-quest-missionary-1",
          report: "txt-evt-harbor-quest-missionary-report-1",
          alwaysShown: true,
          addNPC: true,
          chat: 'cl-join',
          select: {ref:'evt-harbor-eventSelection'},
        },
        {
          actionText: "txt-evt-angry-demandPayment-action-1",
          text:"txt-evt-harbor-quest-missionary-2",
          report: "txt-evt-harbor-quest-missionary-report-2",
          select: 'evt-harbor-eventSelection',
        },
      ],
    },
  },

])