config.entities.add([

// status

  {
    id: 'st-instrument',
    debugCategory: 'Quest',
    title: "txt-st-instrument-title",
    description: "txt-st-instrument",
    sprite: "res_status_instruments.png",
    important: true,
  },

// events

  {
    id: 'evt-harbor-quest-musician',
    npc: 'npc-trader',
    text: "txt-evt-harbor-quest-musician",
    report: "txt-evt-harbor-quest-musician-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        text: "txt-evt-harbor-quest-musician-1",
        report: "txt-evt-harbor-quest-musician-report-1",
        setPartyStatus: {'st-instrument':true},
        events: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-musician-2",
        report: "txt-evt-harbor-quest-musician-report-2",
        events: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-quest-musician-complete',
    npc: 'npc-trader',
    text: "txt-evt-harbor-quest-musician-complete",
    report: "txt-evt-harbor-quest-musician-complete-report",
    events: [
      {
        reqPartyStatus: {'st-instrument':true}, 
        actions: [
          {
            alwaysShown: true,
            actionText: "txt-evt-harbor-quest-musician-complete-action",
            reqItems: {'it-bongos':1},
            text: "txt-evt-harbor-quest-musician-complete-1",
            items: {'it-bongos':-1},
            report: "txt-evt-harbor-quest-musician-complete-report",
            funds: +40,
            setPartyFlags: '+soldInstrument',
            events: 'evt-harbor-quest-musician-complete',
          },
          {
            actionText: "txt-evt-harbor-quest-musician-complete-action-1",
            reqItems: {'it-bongosTuned':1},
            text: "txt-evt-harbor-quest-musician-complete-2",
            items: {'it-bongosTuned':-1},
            report: "txt-evt-harbor-quest-musician-complete-report-1",
            funds: +80,
            setPartyFlags: '+soldInstrument',
            events: 'evt-harbor-quest-musician-complete',
          },
          {
            alwaysShown: true,
            actionText: "txt-evt-harbor-quest-musician-complete-action-2",
            reqItems: {'it-hornFlute':1},
            text: "txt-evt-harbor-quest-musician-complete-3",
            items: {'it-hornFlute':-1},
            report: "txt-evt-harbor-quest-musician-complete-report-2",
            funds: +25,
            setPartyFlags: '+soldInstrument',
            events: 'evt-harbor-quest-musician-complete',
          },
          {
            reqPartyFlags: '-soldInstrument',
            actionText: "txt-evt-harbor-quest-musician-complete-action-3",
            text: "txt-evt-harbor-quest-musician-complete-4",
            fame: -fameLarge,
            events: 'evt-harbor-eventSelection',
            setPartyStatus: {'st-instrument':false},
          },
          {
            reqPartyFlags: '+soldInstrument',
            actionText: "txt-evt-harbor-quest-musician-complete-action-4",
            text: "txt-evt-harbor-quest-musician-complete-5",
            events: 'evt-harbor-eventSelection',
            setPartyStatus: {'st-instrument':false},
          },
        ],
      },
    ],
  },

])