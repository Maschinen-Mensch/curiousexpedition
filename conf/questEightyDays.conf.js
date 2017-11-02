config.entities.add([

// status

  {
    id: 'st-80days',
    debugCategory: 'Quest',
    title: "txt-st-80days-title",
    description: "txt-st-80days",
    sprite: "res_status_80days.png",
    important: true,
  },

// events

  {
    id: 'evt-harbor-quest-80Days',
    showImage: {src: 'evt_spec_ship_1.png'},
    npc: 'npc-gentleman',
    text: "txt-evt-harbor-quest-80Days",
    report: "txt-evt-harbor-quest-80Days-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        setPartyFlags: {harborEventsQuest80Days:true},
        setPartyStatus: {'st-80days':true},
        text: "txt-evt-harbor-quest-81",
        report: "txt-evt-harbor-quest-80Days-report-1",
        events: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-82",
        report: "txt-evt-harbor-quest-80Days-report-2",
        events: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-quest-80Days-complete',
    showImage: {src: 'evt_spec_ship_1.png'},
    setPartyFlags: '-harborEventsQuest80Days',
    npc: 'npc-gentleman',
    events: [
      {
        reqPartyFlags: '+harborEventsQuest80DaysComplete',
        text: "txt-evt-harbor-quest-80Days-complete",
        actions: 'evt-harbor-quest-reward',
      },
      {
        reqPartyFlags: '-harborEventsQuest80DaysComplete',
        text: "txt-evt-harbor-quest-80Days-complete-1",
        fame: -fameLarge,
        actions: 'evt-harbor-eventSelection',
      }
    ]
  },
])