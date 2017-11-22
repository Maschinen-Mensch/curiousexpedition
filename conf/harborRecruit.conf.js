config.entities.add([

  
  {
    id: 'evt-harbor-recruit',
    select: [
      { // Normal Recruit
        reqWorld: '1..',
        reqPartyFlags: '-harborCheck_Recruit1',
        setPartyFlags: '+harborCheck_Recruit1',
        select: 'evt-harbor-recruitUnit'
      },
      { // Charismatic Perk additional Recruit
        prio: 0,
        reqWorld: '1..',
        reqPartyFlags: '+harborCheck_Recruit1 -harborCheck_Recruit2',
        charEvents: {reqStatus: {'pk-charismatic':true}},
        select: {
          setPartyFlags: '+harborCheck_Recruit2',
          select:'evt-harbor-recruitUnit',
        },
      },
      {
        prio: 1,
        reqWorld: '1..',
        reqPartyFlags: '+harborCheck_Recruit1 -harborCheck_Recruit2',
        charEvents: {reqStatus: {'pk-charismatic':false}},
        setPartyFlags: '+harborCheck_Recruit',
        select:'evt-harbor-eventSelection',
      },
      { // Recruitement done
        prio: 2,
        reqPartyFlags: '+harborCheck_Recruit2',
        setPartyFlags: '+harborCheck_Recruit',
        select: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-recruitUnit',
    chat: 'cl-harbor-recruit',
    showPartyCount: true,
    actions: {
      actionText: "txt-evt-harbor-recruit-action", select: 'evt-harbor-recruit',
    },
    partyEvents: [
      {
        reqRanking: '3..', optional: true,
        text: "txt-evt-harbor-recruit",
        select: 'evt-harbor-recruit-select',
      },
      {
        reqRanking: '0', optional: true,
        text: "txt-evt-harbor-recruit-1",
        partyEvents: [
          { select: 'evt-harbor-recruit-select' },
          { select: 'evt-harbor-recruit-select' },
          { select: 'evt-harbor-recruit-select' },
        ]
      },
      {
        reqRanking: '1', optional: true,
        text: "txt-evt-harbor-recruit-2",
        partyEvents: [
          { select: 'evt-harbor-recruit-select' },
          { select: 'evt-harbor-recruit-select' },
        ]
      },
      {
        reqRanking: '2', optional: true,
        text: "txt-evt-harbor-recruit-3",
        partyEvents: [
          { select: 'evt-harbor-recruit-select' },
          { select: 'evt-harbor-recruit-select' },
        ]
      },
    ],
  },
  {
    id: 'evt-harbor-recruit-select',
    select: [
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
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-persianTranslator-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-persianTranslator",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {persianTranslator:false} 
    },
  },
  {
    id: 'evt-harbor-recruit-mountainTrooper',
    npc: 'pl-mountainTrooper',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-mountainTrooper-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-mountainTrooper",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {mountainTrooper:false} 
    },
  },
  {
    id: 'evt-harbor-recruit-bedouin',
    npc: 'pl-bedouin',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-bedouin-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-bedouin",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {bedouin:false} 
    },
  },
  {
    id: 'evt-harbor-recruit-parsiTrader',
    npc: 'pl-trader',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-parsiTrader-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-parsiTrader",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {parsiTrader:false} },
  },
  {
    id: 'evt-harbor-recruit-soldierBritish',
    npc: 'pl-soldier-british',
    npcEvents: {
      actions: {
        actionText: "txt-evt-harbor-recruit-soldierBritish-action",
        alwaysShown: true,
        text: "txt-evt-harbor-recruit-soldierBritish",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {soldierBritish:false} },
  },
  {
    id: 'evt-harbor-recruit-soldierScottish',
    npc: 'pl-soldier-scottish',
    npcEvents: {
      actions: {
        actionText: "txt-evt-harbor-recruit-soldierBritish-action",
        alwaysShown: true,
        text: "txt-evt-harbor-recruit-soldierScottish",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {soldierScottish:false} },
  },
  {
    id: 'evt-harbor-recruit-sailor',    
    npc: 'pl-sailor',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-sailor-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-sailor",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: 'all', reqCharFlags: '-sailor' },
  },
  {
    id: 'evt-harbor-recruit-cultist',
    npc: 'pl-cultist',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-cultist-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-cultist",
        select: 'evt-harbor-recruit'
      },
    },
  },
  {
    id: 'evt-harbor-recruit-sterling',
    reqPartyFlags: '-sterling',

    setTempFlags: '+recruitSterling',
    reqTempFlags: '-recruitSterling',

    npc: 'pl-sterling',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-sterling-action",
        setPartyFlags: '+recruitedSomebody +sterling',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-sterling",
        select: 'evt-harbor-recruit'
      },
    },
  },
  {
    id: 'evt-harbor-recruit-missionary',
    npc: 'pl-missionary',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-missionary-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-missionary",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {missionary:false} },
  },
  {
    id: 'evt-harbor-recruit-cook',
    npc: 'pl-cook',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-cook-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-cook",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {cook:false} },
  },
  {
    id: 'evt-harbor-recruit-artist',
    npc: 'pl-artist',
    npcEvents: {
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-artist-action",
        setPartyFlags: '+recruitedSomebody',
        addNPC: true,
        items: {'it-canvas':3},
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-artist",
        select: 'evt-harbor-recruit'
      },
    },
    charEvents: { count: "all", reqCharFlags: {artist:false} },
  },
  {
    id: 'evt-harbor-recruit-timLuis',
    npc: ['pl-tim', 'anm-dog-luis'],
    reqPartyFlags: '-timLuis',

    setTempFlags: '+recruitTimLuis',
    reqTempFlags: '-recruitTimLuis',

    npcEvents: {
      reqCharFlags: '+tim',
      actions: {
        alwaysShown: true,
        actionText: "txt-evt-harbor-recruit-timLuis-action",
        setPartyFlags: '+timLuis +recruitedSomebody',
        addNPC: true,
        addCharacter: 'anm-dog-luis',
        chat: 'cl-join',
        text: "txt-evt-harbor-recruit-timLuis-1",
        select: 'evt-harbor-recruit',
      },
    },
  },

])