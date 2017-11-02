config.entities.add([

  
  {
    id: 'evt-harbor-recruit',
    events: [
      { // Normal Recruit
        reqWorld: '1..',
        reqPartyFlags: '-harborCheck_Recruit',
        events: 'evt-harbor-recruitUnit'
      },
      { // Charismatic Perk additional Recruit
        prio: 1,
        reqWorld: '1..',
        reqPartyFlags: '+harborCheck_Recruit -harborCheck_Recruit2',
        charEffects: {reqStatus: {'pk-charismatic':true}},
        events: {
          setPartyFlags: '+harborCheck_Recruit2',
          events:'evt-harbor-recruitUnit',
        },
      },
      { // Recruitement done
        prio: 2,
        reqPartyFlags: '+harborCheck_Recruit',
        events: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-recruitUnit',
    setPartyFlags: '+harborCheck_Recruit',
    chat: 'cl-harbor-recruit',
    showPartyCount: true,
    actions: {
      actionText: "txt-evt-harbor-recruit-action", clearPushedEvents:true, events: 'evt-harbor-recruit',
    },
    partyEffects: [
      {
        reqRanking: '3..', optional: true,
        text: "txt-evt-harbor-recruit",
        events: 'evt-harbor-recruit-select',
      },
      {
        reqRanking: '0', optional: true,
        text: "txt-evt-harbor-recruit-1",
        partyEffects: [
          { events: 'evt-harbor-recruit-select' },
          { events: 'evt-harbor-recruit-select' },
          { events: 'evt-harbor-recruit-select' },
        ]
      },
      {
        reqRanking: '1', optional: true,
        text: "txt-evt-harbor-recruit-2",
        partyEffects: [
          { events: 'evt-harbor-recruit-select' },
          { events: 'evt-harbor-recruit-select' },
        ]
      },
      {
        reqRanking: '2', optional: true,
        text: "txt-evt-harbor-recruit-3",
        partyEffects: [
          { events: 'evt-harbor-recruit-select' },
          { events: 'evt-harbor-recruit-select' },
        ]
      },
    ],
  },
  {
    id: 'evt-harbor-recruit-select',
    events: [
      {slots:1, ref:'evt-harbor-recruit-persianTranslator'},
      {slots:1, ref:'evt-harbor-recruit-bedouin'},
      {slots:1, ref:'evt-harbor-recruit-parsiTrader'},
      {slots:1, ref:'evt-harbor-recruit-soldierBritish'},
      {slots:1, ref:'evt-harbor-recruit-soldierScottish'},
      {slots:1, ref:'evt-harbor-recruit-cook'},
      {slots:1, ref:'evt-harbor-recruit-missionary'},
      {slots:1, ref:'evt-harbor-recruit-sailor'},
      {slots:1, ref:'evt-harbor-recruit-cultist'},
      {slots:1, ref:'evt-harbor-recruit-artist'},
      {slots:1, ref:'evt-harbor-recruit-mountainTrooper'},

      // unique characters
      {slots:1, ref:'evt-harbor-recruit-sterling'},
      {slots:1, ref:'evt-harbor-recruit-timLuis'},
    ],
  },

  // Individual Units

  {
    id: 'evt-harbor-recruit-persianTranslator',
    npc: 'pl-translator',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-persianTranslator-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-persianTranslator",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {persianTranslator:false} 
    },
  },
  {
    id: 'evt-harbor-recruit-mountainTrooper',
    npc: 'pl-mountainTrooper',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-mountainTrooper-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-mountainTrooper",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {mountainTrooper:false} 
    },
  },
  {
    id: 'evt-harbor-recruit-bedouin',
    npc: 'pl-bedouin',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-bedouin-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-bedouin",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {bedouin:false} 
    },
  },
  {
    id: 'evt-harbor-recruit-parsiTrader',
    npc: 'pl-trader',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-parsiTrader-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-parsiTrader",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {parsiTrader:false} },
  },
  {
    id: 'evt-harbor-recruit-soldierBritish',
    npc: 'pl-soldier-british',
    npcEffects: {
      actions: {
        actionText: "txt-evt-harbor-recruit-soldierBritish-action",
        alwaysShown: true,
        text: "txt-evt-harbor-recruit-soldierBritish",
        addNPC: true,
        chat: 'cl-join',
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {soldierBritish:false} },
  },
  {
    id: 'evt-harbor-recruit-soldierScottish',
    npc: 'pl-soldier-scottish',
    npcEffects: {
      actions: {
        actionText: "txt-evt-harbor-recruit-soldierBritish-action",
        alwaysShown: true,
        text: "txt-evt-harbor-recruit-soldierScottish",
        addNPC: true,
        chat: 'cl-join',
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {soldierScottish:false} },
  },
  {
    id: 'evt-harbor-recruit-sailor',    
    npc: 'pl-sailor',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-sailor-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-sailor",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: 'all', reqCharFlags: '-sailor' },
  },
  {
    id: 'evt-harbor-recruit-cultist',
    npc: 'pl-cultist',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-cultist-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-cultist",
        events: 'evt-harbor-recruit'
      },
    },
  },
  {
    id: 'evt-harbor-recruit-sterling',
    reqPartyFlags: '-sterling',

    setTempFlags: '+recruitSterling',
    reqTempFlags: '-recruitSterling',

    npc: 'pl-sterling',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-sterling-action",
        addNPC: true,
        setPartyFlags: '+sterling',
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-sterling",
        events: 'evt-harbor-recruit'
      },
    },
  },
  {
    id: 'evt-harbor-recruit-missionary',
    npc: 'pl-missionary',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-missionary-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-missionary",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {missionary:false} },
  },
  {
    id: 'evt-harbor-recruit-cook',
    npc: 'pl-cook',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-cook-action",
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-cook",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {cook:false} },
  },
  {
    id: 'evt-harbor-recruit-artist',
    npc: 'pl-artist',
    npcEffects: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-artist-action",
        addNPC: true,
        items: {'it-canvas':3},
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-artist",
        events: 'evt-harbor-recruit'
      },
    },
    charEffects: { count: "all", reqCharFlags: {artist:false} },
  },
  {
    id: 'evt-harbor-recruit-timLuis',
    npc: ['pl-tim', 'anm-dog-luis'],
    reqPartyFlags: '-timLuis',

    setTempFlags: '+recruitTimLuis',
    reqTempFlags: '-recruitTimLuis',

    npcEffects: {
      reqCharFlags: '+tim',
      actions: {
        actionText: "txt-evt-harbor-recruit-timLuis-action",
        alwaysShown: true,
        addNPC: true,
        setPartyFlags: '+timLuis',
        addCharacter: 'anm-dog-luis',
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-timLuis-1",
        events: 'evt-harbor-recruit',
      },
    },
  },

])