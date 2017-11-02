config.entities.add([

// status

  {
    id: 'st-schroedinger',
    debugCategory: 'Quest',
    title: "txt-st-schroedinger-title",
    description: "txt-st-schroedinger",
    sprite: "res_status_box.png",
    important: true,
  },

// fixtures

  {
    id: 'fxt-treasure-schroedinger',
    mapScore:0,
    showHint:false,
    flags: '+burriedTreasureSchroedinger',
    hideParty:false,
    setTile: [
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
      {ref:'tl-jungle-thick'},
    ],
  },

// items

  {
    id: 'it-map-schroedinger',
    name: "txt-it-map-schroedinger-name",
    description: "txt-it-map-schroedinger",
    debugCategory: 'quest',
    sprite: 'it_special_map_1.png',
    value: 0,
    maxStack: 1,
    autoRemove: true,
    noWeight: true,
    losable: false,
    miniMap: {
      width: 150, height: 150, coverage: 1, 
      initEvents: {addFixture: {ref:'fxt-treasure-schroedinger', range:'world'}}
    },
  },
  {
    id: 'it-box-schroedinger',
    name: "txt-it-box-schroedinger-name",
    description: "txt-it-box-schroedinger",
    debugCategory: 'quest',
    sprite: 'it_quest_box_1.png',
    value: {
      base: 0,
      karma: karmaVeryLarge,
    },
    maxStack: 1,
    events: {
      text: "txt-it-box-schroedinger-use",
      partyEffects: { ref: 'evt-setImage-nightCamp' },
      playMusic: ['thm_nature_night_campfire'],
      actions: [
        {
          actionText: "txt-it-box-schroedinger-action",
          text: "txt-it-box-schroedinger-open",
          items: {'it-box-schroedinger':-1},
          report: "txt-it-box-schroedinger-open-report",
          setPartyStatus: {'st-schroedinger':false},
          startSprawl: {ref:'spr-void', power:10000},
          incAchievement: "ach-mystery-box",
        },
        'evt-leave'
      ],
    },
  },

// Harbor Events
  {
    id: 'evt-harbor-quest-schroedinger',
    npc: 'npc-schroedinger',
    text: "txt-evt-harbor-quest-schroedinger",
    report: "txt-evt-harbor-quest-schroedinger-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        text: "txt-evt-harbor-quest-schroedinger-1",
        report: "txt-evt-harbor-quest-schroedinger-report-1",
        setPartyStatus: {'st-schroedinger':true},
        items: {'it-map-schroedinger':1},
        events: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-schroedinger-2",
        report: "txt-evt-harbor-quest-schroedinger-report-2",
        events: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-quest-schroedinger-complete',
    reqPartyStatus: '+schroedinger',
    setPartyStatus: '-schroedinger',
    npc: 'npc-schroedinger',
    text: "txt-evt-harbor-quest-schroedinger-complete",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-schroedinger-complete-action",
        text: "txt-evt-harbor-quest-schroedinger-complete-1",
        reqItems: {'it-box-schroedinger':1},
        items: {'it-box-schroedinger':-1},
        report: "txt-evt-harbor-quest-schroedinger-complete-report",
        actions: 'evt-harbor-quest-reward',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-schroedinger-complete-2",
        reqItems: {'it-box-schroedinger':1},
        fame: -fameLarge,
        events: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-harbor-quest-schroedinger-complete-action-1",
        text: "txt-evt-harbor-quest-schroedinger-complete-3",
        reqItems: {'it-box-schroedinger':'0'},
        fame: -fameLarge,
        events: 'evt-harbor-eventSelection',
      },
    ],
  },
])