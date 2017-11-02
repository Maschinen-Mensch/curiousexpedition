config.entities.add([

  {
    id: 'st-escortVillager',
    debugCategory: 'Quest',
    title: "txt-st-escortVillager-title",
    description: "txt-st-escortVillager",
    sprite: "res_status_missingPerson.png",
    important: true,
  },

  {
    id: 'evt-harbor-quest-escortVillager',
    showImage: {src: 'evt_spec_ship_1.png'},
    npc: 'npc-village-escort-husband',
    report: "txt-evt-harbor-quest-escortVillager-report",
    npcEffects: {
      text: "txt-evt-harbor-quest-escortVillager",
      actions: [
        {
          actionText: "txt-evt-harbor-quest-missionary-action",
          setPartyStatus: '+escortVillager',
          text: "txt-evt-harbor-quest-escortVillager-1",
          report: "txt-evt-harbor-quest-escortVillager-report-1",
          alwaysShown: true,
          clearPushedEvents: true,
          events: {ref:'evt-harbor-eventSelection'},
        },
        {
          actionText: "txt-evt-angry-demandPayment-action-1",
          text:"txt-evt-harbor-quest-escortVillager-2",
          report: "txt-evt-harbor-quest-escortVillager-report-2",
          events: 'evt-harbor-eventSelection',
        },
      ],
    },
  },
  {
    id: 'evt-harbor-quest-escortVillager-complete',
    showImage: {src: 'evt_spec_ship_1.png'},
    npc: 'npc-village-escort-husband',
    setPartyStatus: '-escortVillager',
    npcEffects: {
      text: "txt-evt-harbor-quest-escortVillager-complete",
      report: "txt-evt-harbor-quest-escortVillager-complete-report",
    },
    events: [
      {
        charEffects: {
          reqCharFlags: '+escortVillager',
          removeCharacter: true,
        },
        text: "txt-evt-harbor-quest-escortVillager-complete-1",
        report: "txt-evt-harbor-quest-escortVillager-complete-report-1",
        actions: 'evt-harbor-quest-reward',
      },
      {
        prio: 1,
        text: "txt-evt-harbor-quest-escortVillager-complete-2",
        report: "txt-evt-harbor-quest-escortVillager-complete-report-2",
        fame: -fameLarge,
        actions: 'evt-harbor-eventSelection',
      },
    ],    
  },

])