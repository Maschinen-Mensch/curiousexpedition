config.entities.add([

// fixtures

  {
    id: 'fxt-quest-husband',
    extends: 'fxt-oldCamp',
    dist: 15,
    actions: 'evt-quest-husband-approach',
  },

// status

  {
    id: 'st-husband',
    debugCategory: 'Quest',
    title: "txt-st-husband-title",
    description: "txt-st-husband",
    sprite: "res_status_missingPerson.png",
    important: true,
  },

// Characters

  {
    id: 'pl-husband',
    title: "txt-pl-husband-title",
    description: "txt-pl-husband",
    debugCategory: 'Special',
    miniSprite: 'res_porter_husband_mini.png',
    capacity: 1,
    health: 4,
    flags: '+porter +questUnit +humanoid +missingHusband +crazy',
    levels: [
      {statuses: 'st-cannibal st-zeroSlot', dice: 'dc-attack-2'}
    ],
    variations: {
      gender: 'male',
      name: 'westernCharacterMale',
      sprite: 'res_porter_husband.png',
      portrait: 'res_face_npc_husband_1.png'
    }
  },
  {
    id: 'npc-wife',
    title: "txt-npc-wife-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-wife",
    variations: {
      gender:'female', 
      name:'westernCharacterFemale', 
      sprite:'res_npc_celebration_2.png'
    }
  },

// expedition events

  {
    id: 'evt-quest-husband-approach',
    actionText: "txt-evt-quest-husband-approach-action",
    reqTileFlags: {explored:false},
    showImage: {src: 'evt_fxt_oldCamp_1.png', type:'day'},
    chat: 'cl-quest-missingHusband',
    npc: 'pl-husband',
    npcEvents: {
      text: "txt-evt-quest-husband-approach",
      actions: {
        actionText: "txt-evt-quest-husband-approach-action-1",
        addNPC:true,
        select: 'evt-quest-husband-escort',
      },
    },
    actions: 'evt-leave',
  },
  {
    id: 'evt-quest-husband-escort',
    setTileFlags: {explored:true},
    showImage: {src: 'evt_fxt_oldCamp_1.png', type:'day'},
    text: "txt-evt-quest-husband-escort",
    report: "txt-evt-quest-husband-escort-report",
    actions: 'evt-leave',
  },

  // harbor events

  {
    id: 'evt-harbor-quest-husband',
    npc: 'npc-wife',
    text: "txt-evt-harbor-quest-husband",
    report: "txt-evt-harbor-quest-husband-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        text: "txt-evt-harbor-quest-husband-1",
        report: "txt-evt-harbor-quest-husband-report-1",
        setPartyStatus: {'st-husband':true},
        select: 'evt-harbor-eventSelection',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-husband-2",
        report: "txt-evt-harbor-quest-husband-report-2",
        select: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-quest-husband-complete',
    reqPartyStatus: '+husband', 
    setPartyStatus: '-husband',
    showImage: {src: 'evt_spec_ship_1.png'},
    npc: 'npc-wife',
    text: "txt-evt-harbor-quest-husband-complete",
    select: [
      {
        charEvents: [
          {
            reqCharFlags: '+missingHusband',
          },
          {
            optional: true,
            reqCharFlags: '+missingHusband', 
            reqStatus: '+cannibal',
            removeCharacter: true,
            text: "txt-evt-harbor-quest-husband-complete-1",
          },
          {
            optional: true,
            reqCharFlags: '+missingHusband', 
            reqStatus: '-cannibal',
            removeCharacter: true,
            incAchievement: "ach-noCanib-husband",
            text: "txt-evt-harbor-quest-husband-complete-2",
          },
        ],
        report: "txt-evt-harbor-quest-husband-complete-report",
        actions: 'evt-harbor-quest-reward',
      },
      {
        charEvents: {reqCharFlags: '-missingHusband', count: "all"},
        text: "txt-evt-harbor-quest-husband-complete-3",
        fame: -fameLarge,
        actions: {
          actionText: "txt-evt-sanity-angry-action",
          select: 'evt-harbor-eventSelection',
        }
      }
    ]
  },

])