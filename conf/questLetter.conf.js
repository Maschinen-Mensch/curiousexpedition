config.entities.add([

// items

  {
    id: 'it-quest-1-letter',
    name: "txt-it-quest-1-letter-name",
    description: "txt-it-quest-1-letter",
    debugCategory: 'quest',
    sprite: 'it_quest_letter_1.png',
    value: 0,
    maxStack: 1,
    autoRemove: true,
    noWeight: true,
    losable: false,
  },

// statuses

  {
    id: 'st-letter',
    title: "txt-st-letter-title",
    description: "txt-st-letter",
    debugCategory: 'Quest',
    autoRemove: true,
    sprite: "res_status_letter.png",
    important: true,
  },
  
// events

  {
    id: 'evt-harbor-quest-letter',
    npc: 'npc-trader',
    text: "txt-evt-harbor-quest-letter",
    report: "txt-evt-harbor-quest-letter-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        text: "txt-evt-harbor-quest-letter-1",
        report: "txt-evt-harbor-quest-letter-report-1",
        items: {'it-quest-1-letter':1},
        setPartyStatus: {'st-letter':true},
        events: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-letter-2",
        report: "txt-evt-harbor-quest-letter-report-2",
        events: 'evt-harbor-eventSelection',
      }
    ]
  },
  {
    id: 'evt-village-quest-letter',
    actionText: "txt-evt-village-quest-letter-action",
    text: "txt-evt-village-quest-letter",
    report: "txt-evt-village-quest-letter-report",

    reqItems: {'it-quest-1-letter':1}, items: {'it-quest-1-letter':-1},
    reqFixtureFlags: '+questLetter', setFixtureFlags: '-questLetter',
    reqPartyStatus: '+letter', setPartyStatus: '-letter',
    
    standing: +2,
    charEffects: {
      posTile: {fixtureFlags: '+shrine'},
      revealTiles: {radius:1, fixture:true, centerCam:true},  
    },    
    events: 'evt-village-main-update',
  },
])