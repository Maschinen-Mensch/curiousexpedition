config.entities.add([

// fixtures

	{
    id: 'fxt-mission',
    name: "txt-fxt-mission-name",
    reqBiomeFlags: '-arctic -prehistoric',
    worldMap: true,
    priceTable: 'mission',
    initItems: {'il-trade-mission':3, 'it-firstAid':3, 'il-metaItems':99},
    reqWorld: '1..',
    sprite: "res_fxt_mission.png",
    particle: 'pt-mission',
    hasStash: true,
    flags: '+mission +settlement',
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-grass', reqBiomeFlags: '+grass'},
    ],
    setNeighbors: [
      {count: 1, ref:'tl-river-shallow'},
      {count: 3, ref:'tl-river'},
    ],
    actions: 'evt-mission-init',
    debugCategory: 'mission',
    debugColor: '#64ff58',
  },
  {
    id: 'fxt-mission-cultist',
    name: "txt-fxt-mission-name",
    debugCategory: 'mission',
    sprite: "res_fxt_mission.png",
    particle: 'pt-mission-cultist',
    actions: 'evt-mission-cultist-init'
  }, 

// events

  { 
    id: 'evt-mission-init',
    actionText: "txt-evt-mission-init-action",
    playMusic: ['thm_mission_1','thm_mission_2'],
    select: [
      {
        reqFixtureFlags: '+abandoned',
        select: 'evt-mission-abandoned-main',
      },
      {
        reqFixtureFlags: '+cultistTakeover',
        select: 'evt-mission-cultist-init',
      },
      {
        prio: 1,
        select: 'evt-mission-main'
      },
    ],
  },
  { 
    id: 'evt-mission-main',
    showImage: {src: 'evt_fxt_mission_1.png',type: 'day'},
    npc: 'npc-missionary',
    text: "txt-evt-mission-main",
    report: "txt-evt-mission-main-report",
    charEvents: {
      reqCharFlags: {missionary:true}, optional: true,
      text: "txt-evt-mission-main-1",
    },
    select: 'evt-mission-actions'
  },
  { 
    id: 'evt-mission-actions',
    actions:[
      'evt-mission-trade-rest',
      'evt-mission-perk-rest',
      'evt-mission-trade',
      'evt-mission-stash',
      'evt-mission-leave',
    ],
  },
  { 
    id: 'evt-mission-trade-rest',
    actionText: "txt-evt-mission-trade-rest-action",
    text: "txt-evt-mission-trade-rest",
    charEvents: {
      count: 'all', reqPerk: '-spiritualSolidarity',
    },
    select: [
      {
        reqDifficulty: '1..',
        barter: {
          baseValue: {base:30},
          close: {
            text: "txt-evt-mission-trade-rest-1",
            select: 'evt-mission-rest',
            report: "txt-evt-mission-trade-rest-report",
          },
          cancel: 'evt-mission-trade-cancel'
        }, 
      },
      {
        reqDifficulty: '0',
        barter: {
          baseValue: {base:10},
          close: {
            text: "txt-evt-mission-trade-rest-2",
            select: 'evt-mission-rest',
            report: "txt-evt-mission-trade-rest-report-1",
          },
          cancel: 'evt-mission-trade-cancel'
        }, 
      },
    ],
  },
  { 
    id: 'evt-mission-perk-rest',
    actionText: "txt-evt-mission-perk-rest-action",
    charEvents: {
      reqPerk: '+spiritualSolidarity',
      text: "txt-evt-mission-perk-rest",
    },
    select: 'evt-mission-rest',
  },
  { 
    id: 'evt-mission-rest',
    showImage: {src: 'evt_fxt_mission_1_night.png', type: 'night'},
    select: [
      {slots: 4, ref: 'evt-mission-sleep-event-1'}, // Generic
      {slots: 3, ref: 'evt-mission-sleep-event-2'}, // Drinking
      {slots: 2, ref: 'evt-mission-sleep-event-3'}, // Racist priest
      {slots: 1, ref: 'evt-mission-sleep-event-4'}, // Unlock pocket grass
      {slots: 1, ref: 'evt-mission-sleep-event-5'}, // Abomination
    ],
  },
  {
    id: 'evt-mission-sleep-event-1',
    text: "txt-evt-mission-sleep-event-1",
    report: "txt-evt-mission-sleep-event-1-report",
    actions: 'evt-mission-sleep',
  },
    {
    id: 'evt-mission-sleep-event-2',
    chat: 'cl-alcohol',
    text: "txt-evt-mission-sleep-event-2",
    actions: ['evt-mission-sleep-event-2-accept', 'evt-mission-sleep-event-2-refuse'],
  },
  {
    id: 'evt-mission-sleep-event-2-accept',
    actionText: "txt-evt-mission-sleep-event-2-accept-action",
    text: "txt-evt-mission-sleep-event-2-accept",
    sanity: +10,
    charEvents: {
      optional: true,
      chance: 0.4,
      reqStatus: '-alcoholic',
      reqCharFlags: '+humanoid -special',
      setStatus: '+alcoholic',
      text: "txt-evt-mission-sleep-event-2-accept-alcoholic",
    },
    actions: 'evt-mission-sleep'
  },
  {
    id: 'evt-mission-sleep-event-2-refuse',
    actionText: "txt-evt-angry-demandPayment-action-1",
    sanity: -5,
    text: "txt-evt-mission-sleep-event-2-refuse",
    actions: 'evt-mission-sleep'
  },
  {
    id: 'evt-mission-sleep-event-3',
    charEvents: {
      reqCharFlags: '+native', 
      text: "txt-evt-mission-sleep-event-3",
      setStatus: '+paranoid',
    },
    sanity: -10,
    actions: 'evt-mission-sleep'  
  },
  {
    id: 'evt-mission-sleep-event-4',
    reqWorld: '..4',
    partyEvents: 'evt-unlock-specialWorld-withText', 
    select: 'evt-mission-sleep-event-1',
  },
  {
    id: 'evt-mission-sleep-event-5',
    text: "txt-evt-mission-sleep-event-5",
    actions: [
      {
        actionText: "txt-evt-mission-sleep-event-5-action",
        text: "txt-evt-mission-sleep-event-6",
        select: 'evt-mission-sleep-event-5-fight',
      },
      {
        actionText: "txt-st-kleptomania-idol-action-1",
        select: ['evt-mission-event-5-ignore'],     
      },
    ],    
  }, 
  {
    id: 'evt-mission-event-5-ignore',
    text: "txt-evt-mission-event-5-ignore",
    actions: 'evt-mission-sleep',
  },
  {
    id: 'evt-mission-sleep-event-5-fight',
    report: "txt-evt-mission-sleep-event-5-fight-report",
    setFixtureFlags: '+abandoned',
    actions: [
      {
        setPartyFlags: '+missionFight',
        actionText: "txt-evt-cave-ghostsQuest-action",
        showImage: {src: 'evt_fxt_mission_1_night_combat.png',type: 'night'},
        combat: [{slots:1, 'emy-abomination':1}],
      },
      {
        actionText: "txt-evt-mission-sleep-event-5-fight-action",
        addZone: {ref:'zn-abomination', range:2},
      },
    ], 
  },
  {
    id: 'evt-mission-sleep-event-5-win',
    text: "txt-evt-mission-sleep-event-5-win",
    actions: 'evt-mission-abandoned-main',
  },
  {
    id: 'evt-mission-sleep',
    actionText: "txt-evt-mission-sleep-action",
    showImage: {
      src: 'evt_fxt_mission_1.png',
      type: 'day',
      npc: 'res_porter_missionary_1.png'
    },
    turns: 1,
    sanity: sanityRestVillage,
    select: 'evt-mission-morning',
  },
  {
    id: 'evt-mission-morning',
    showImage: {src: 'evt_fxt_mission_1.png',type: 'day'},
    npc: 'npc-missionary',
    text: "txt-evt-mission-morning",
    chat: 'cl-newMorning',
    select: 'evt-mission-actions'
  },
  {
    id: 'evt-mission-trade',
    actionText: "txt-evt-mission-trade-action",
    text: "txt-evt-mission-trade",
    barter: {
      close: 'evt-mission-trade-deal',
      cancel: 'evt-mission-trade-cancel'
    },
  },
  {
    id: 'evt-mission-trade-deal',
    text: "txt-evt-mission-trade-deal",
    select: 'evt-mission-actions'
  },
  {
    id: 'evt-mission-trade-cancel',
    text: "txt-evt-mission-trade-cancel",
    select: 'evt-mission-actions'
  },
  { 
    id: 'evt-mission-stash',
    actionText: "txt-evt-mission-stash-action",
    text: "txt-evt-mission-stash",
    loot: {
      items: {},
      title: "txt-evt-mission-stash-title",
      close: 'evt-mission-stash-done',
      cancel:'evt-mission-stash-done',
      slots: 3
    },
  },
  { 
    id: 'evt-mission-stash-abandoned',
    actionText: "txt-evt-mission-stash-action",
    loot: {
      items: {},
      title: "txt-evt-mission-stash-title",
      close: 'evt-leave',
      cancel:'evt-leave',
      slots: 3
    },
  },
  {
    id: 'evt-mission-stash-done',
    text: "txt-evt-mission-stash-done",
    select: 'evt-mission-actions'
  },
  { 
    id: 'evt-mission-leave',
    actionText: "txt-evt-leave-action",
    text: "txt-evt-mission-leave",
    charEvents: {
      reqCharFlags: '+cultist',
      text: "txt-evt-mission-leave-1",
      setCharFlags: '+missionTakeover',
      storeCharacter: true,
      setFixtureFlags: '+cultistTakeover',
    },
  },

// ----- Abandoned Mission

  { 
    id: 'evt-mission-abandoned-main',
    text: "txt-evt-mission-abandoned-main",
    report: "txt-evt-mission-abandoned-main-report",
    showImage: {src: 'evt_fxt_mission_1.png',type: 'day'},
    playMusic: ['thm_mission_1','thm_mission_2'],
    select: 'evt-mission-abandoned-actions'
  },
  { 
    id: 'evt-mission-abandoned-actions',
    actions: ['evt-mission-stash-abandoned', 'evt-leave'],
  },
  {
    id: 'evt-mission-abandoned-sleep',
    actionText: "txt-evt-mission-sleep-action",
    showImage: {
      src: 'evt_fxt_mission_1.png',
      type: 'day',
      npc: 'res_porter_missionary_1.png'
    },
    turns: 1,
    sanity: sanityRestVillage,
    select: 'evt-mission-abandoned-morning'
  },
  {
    id: 'evt-mission-abandoned-morning',
    text: "txt-evt-mission-abandoned-morning",
    chat: 'cl-newMorning',
    select: 'evt-mission-abandoned-actions'
  },

// ----- Cultist Mission

// ----- Mission

  { 
    id: 'evt-mission-cultist-init',
    actionText: "txt-evt-mission-init-action",
    showImage: {
      src: 'evt_fxt_mission_1.png',
      type: 'day',
      npc: 'res_porter_cultist_1.png'
    },
    storeEvents: {
      reqCharFlags: '+missionTakeover',
      text: "txt-evt-mission-cultist-init",
    },
    playMusic: ['thm_mission_1','thm_mission_2'],
    select: 'evt-mission-cultist-main'
  },
  { 
    id: 'evt-mission-cultist-main',    
    charEvents: {
      optional: true,
      count: "any",
      reqCharFlags: '+cultist',
      text: "txt-evt-mission-cultist-main",
    },
    report: "txt-evt-mission-cultist-main-report",
    select: 'evt-mission-cultist-actions'
  },
  { 
    id: 'evt-mission-cultist-actions',
    actions: [
      'evt-mission-cultist-rest',
      'evt-mission-cultist-trade',
      'evt-mission-cultist-recruit',
      'evt-leave',
    ],
  },
  { 
    id: 'evt-mission-cultist-rest',
    actionText: "txt-evt-mission-cultist-rest-action",
    reqFixtureFlags: '-looted',
    setFixtureFlags: '+looted',
    text: "txt-evt-mission-cultist-rest",
    loot: {
      items: {'it-cocaLeaves':10},
      close: {
        text: "txt-evt-mission-cultist-rest-thanks",
        select: 'evt-mission-cultist-actions'
      },
      cancel: {
        text: "txt-evt-mission-cultist-rest-thanks",
        select: 'evt-mission-cultist-actions'
      },
    },
  },
  {
    id: 'evt-mission-cultist-trade',
    actionText: "txt-evt-mission-trade-action",
    text: "txt-evt-mission-cultist-trade",
    select: {
      barter: {
        baseValue: {base:0}, 
        close: {
          text: "txt-evt-mission-cultist-trade-yes",
          select: 'evt-mission-cultist-actions'
        },
        cancel: {
          text: "txt-evt-mission-cultist-trade-no",
          select: 'evt-mission-cultist-actions'
        },
      },
    },
  },
  {
    id: 'evt-mission-cultist-recruit',
    actionText: "txt-evt-mission-cultist-recruit-action",
    showPartyCount: true,
    text: "txt-evt-mission-cultist-recruit",
    actions: [
      {
        actionText: "txt-evt-mission-cultist-recruit-action-1",
        text: "txt-evt-mission-cultist-recruit-yes",
        report: "txt-evt-mission-cultist-recruit-yes-report",
        addCharacter: {id:'pl-cultist'},
        chat: 'cl-join-cultist',
        select: 'evt-mission-cultist-actions'
      },
      {
        actionText: "txt-pl-cultist-action",
        text: "txt-pl-cultist",
        select: 'evt-mission-cultist-actions'
      },
    ],
  },
])