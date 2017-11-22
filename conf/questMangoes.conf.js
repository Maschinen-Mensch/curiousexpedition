config.entities.add([

  {
    id: 'evt-harbor-quest-mangoes',
    showImage: {src: 'evt_spec_ship_1.png',},
    npc: 'npc-mangoWoman',
    text: "txt-evt-harbor-quest-mangoes",
    report: "txt-evt-harbor-quest-mangoes-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-mangoes-action",
        text: "txt-evt-harbor-quest-mangoes-1",
        report: "txt-evt-harbor-quest-mangoes-report-1",
        setPartyStatus: {'st-mangoes':true},
        select: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-harbor-quest-mangoes-action-1",
        text: "txt-evt-harbor-quest-mangoes-2",
        report: "txt-evt-harbor-quest-mangoes-report-2",
        select: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-quest-mangoes-complete',
    text: "txt-evt-harbor-quest-mangoes-complete",
    npc: 'npc-mangoWoman',
    select: [
      {
        reqPartyStatus: {'st-mangoes':true}, 
        actions: [
          {
            alwaysShown: true,
            actionText: "txt-evt-harbor-quest-mangoes-complete-action",
            reqItems: {'it-mango':1},
            text: "txt-evt-harbor-quest-mangoes-complete-1",
            items: {'it-mango':-1},
            report: "txt-evt-harbor-quest-mangoes-complete-report",
            funds: +20,
            select: 'evt-harbor-quest-mangoes-complete',
          },
          {
            actionText: "txt-evt-harbor-quest-mangoes-action-1",
            text: "txt-evt-harbor-quest-mangoes-complete-2",
            setPartyStatus: {'st-mangoes':false},
            select: 'evt-harbor-eventSelection',
          },
        ],
      },
    ],
  },

])