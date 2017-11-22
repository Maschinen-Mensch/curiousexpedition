config.entities.add([

 {
    id: 'evt-harbor',
    text: "txt-evt-harbor",
    report: "txt-evt-harbor-report",
    setPartyFlags: '-harborCheck_AfterMath -harborCheck_QuestCompleted -harborCheck_QuestOffer -harborCheck_Recruit -harborCheck_UnitCount -harborCheck_Recruit1 -harborCheck_Recruit2',
    playMusic: 'thm_harbor_1',
    resetGlobalInv: 'harbor',
    select: 'evt-harbor-eventSelection',
  },

  {
    id: 'evt-harbor-eventSelection',
    actionText: 'Continue',
    showImage: {src: 'evt_spec_ship_1.png'}, // Refresh event image
    partyEvents: [
      {
        optional: true, //Step 6: Final Actions
        reqPartyFlags: '+harborCheck_UnitCount',
        select: 'evt-harbor-finalActions',
      },
      {
        optional: true, //Step 5: Count Units
        reqPartyFlags: '+harborCheck_Recruit -harborCheck_UnitCount',
        select: 'evt-harbor-countTrek',
      },
      {
        optional: true, //Step 4: Recruit Unit
        reqPartyFlags: '+harborCheck_QuestOffer -harborCheck_Recruit',
        reqWorld: '1..',
        select: 'evt-harbor-recruit',    
      },
      {
        optional: true, //Step 3: Quest Offer
        reqPartyFlags: '+harborCheck_QuestCompleted -harborCheck_QuestOffer',
        select: 'evt-harbor-quest-offer',
      },
      {
        optional: true, //Step 2: Quest Outcome
        reqPartyFlags: '+harborCheck_AfterMath -harborCheck_QuestCompleted',
        select: 'evt-harbor-quest-completedCheck',
      },
      {
        optional: true, //Step 1: Aftermath
        reqPartyFlags: '-harborCheck_AfterMath',
        select: 'evt-harbor-afterMathCheck',
      },     
    ],
  },


  {
    id: 'evt-harbor-afterMathCheck',
    select: [
      {ref: 'evt-harbor-afterMath-curse'},
      {ref: 'evt-harbor-afterMath-renounced'},
      {ref: 'evt-harbor-afterMath-spouse'},
      {
        prio: 1, 
        setPartyFlags: '+harborCheck_AfterMath',
        select: 'evt-harbor-eventSelection'
      },
    ]
  },
  {
    id: 'evt-harbor-quest-completedCheck',
    select: [
      { //instruments 
        reqPartyStatus: {'st-instrument':true}, select: 'evt-harbor-quest-musician-complete', incAchievement:'ach-complete-quests' }, 
      { //instruments 
        reqPartyStatus: '+escortVillager', select: 'evt-harbor-quest-escortVillager-complete', incAchievement:'ach-complete-quests' },
      { //idol 
        reqPartyStatus: {'st-idol':true}, reqItems: {'it-idol':1}, select: 'evt-harbor-quest-idol-complete', incAchievement:'ach-complete-quests' },
      { //black hyena 
        reqPartyStatus: {'st-blackHyena':true}, select: 'evt-harbor-quest-blackHyena-complete', incAchievement:'ach-complete-quests' },
      { //Schroedinger
        reqPartyStatus: {'st-schroedinger':true}, reqItems: {'it-box-schroedinger':1}, select: 'evt-harbor-quest-schroedinger-complete', incAchievement:'ach-complete-quests' },
      { //Husband
        reqPartyStatus: {'st-husband':true}, select: 'evt-harbor-quest-husband-complete', incAchievement:'ach-complete-quests' },
      { //80 days
        reqPartyFlags: '-harborOffer +harborEventsQuest80Days', select: 'evt-harbor-quest-80Days-complete', incAchievement:'ach-complete-quests' },
      { // Konrad
        reqPartyStatus: {'st-konrad':true}, select: 'evt-quest-konrad-complete', incAchievement:'ach-complete-quests' },
      { // arcticClaim
        reqPartyStatus: '+arcticClaim-complete | +arcticClaim-1 | +arcticClaim-2 | +arcticClaim-3 | +arcticClaim-4', select: 'evt-harbor-quest-arcticClaim-complete', incAchievement:'ach-complete-quests' },
      {
        prio: 1, 
        setPartyFlags: '+harborCheck_QuestCompleted',
        select: 'evt-harbor-eventSelection'
      },
    ],
  },
  {
    id: 'evt-harbor-quest-offer',
    setPartyFlags: '+harborCheck_QuestOffer',
    setPartyStatus: { // Remove old quests flags,
      'st-idol':false,
      'st-80days':false, 
      'st-instrument':false,
      'st-konrad':false,
      'st-blackHyena':false,
      'st-husband':false,
      'st-schroedinger':false,
      'st-arcticClaim':false,
    },
    select: [
      { 
        reqWorld: '0', // Letter
        select: 'evt-harbor-quest-letter'  
      },
      { 
        reqWorld: '0', // Missionary
        charEvents: {count: 'all', reqCharFlags: '-missionary'},
        select: 'evt-harbor-quest-missionary'  
      },
      { 
        reqWorld: '0', // Escort Villager
        select: 'evt-harbor-quest-escortVillager'  
      },
      { 
        reqWorld: '1..', reqWorldFlags: '-fantastic', // Steal Idol
        reqPartyFlags: '-questIdol', setPartyFlags: '+questIdol',
        select: 'evt-harbor-quest-idol'  
      },
      { 
        reqWorld: '1..', reqWorldFlags: '-arctic',// Find Husband
        reqPartyFlags: '-questHusband', setPartyFlags: '+questHusband',
        select: 'evt-harbor-quest-husband'  
      },
      { 
        reqWorld: '1..', reqWorldFlags: '-fantastic | -arctic', //Kill Black Hyena
        reqPartyFlags: '-questBlackHyena', setPartyFlags: '+questBlackHyena',
        select: 'evt-harbor-quest-blackHyena'  
      },
      { 
        reqWorld: '1..', reqWorldFlags: '-fantastic', // Schroedinger
        reqPartyFlags: '-questSchroedinger', setPartyFlags: '+questSchroedinger',
        select: 'evt-harbor-quest-schroedinger'  
      },
      { 
        reqWorld: '1..', reqWorldFlags: '-fantastic', // Instruments
        reqPartyFlags: '-questInstrument', setPartyFlags: '+questInstrument',
        select: 'evt-harbor-quest-musician' 
      },
      { 
        reqWorld: '1..2', //80 days
        reqPartyFlags: '-quest80Days', setPartyFlags: '+quest80Days',
        select: 'evt-harbor-quest-80Days' 
      },
      { 
        reqWorld: '1..', //Kill Konrad
        reqPartyFlags: '-questKonrad', setPartyFlags: '+questKonrad',
        select: 'evt-quest-konrad' 
      },
      { 
        reqWorld: '1..', // Arctic Claim
        reqWorldFlags: '+arctic', 
        reqPartyFlags: '-questArcticClaim', setPartyFlags: '+questArcticClaim',
        select: 'evt-harbor-quest-arcticClaim',
      },      
      { 
        reqWorld: '5..', // Generic Map offer
        select: 'evt-harbor-offer-map', 
      },
      { 
        reqWorldFlags: '+fantastic',
        select: 'evt-harbor-offer-map', 
      },
    ],
  },
  {
    id: 'evt-harbor-finalActions',
    text: "txt-evt-harbor-select",
    actions: [
      { // Purchase Equipment
        actionText: "txt-evt-harbor-select-action",
        reqWorld: '1..',
        select:'evt-harbor-equipment'
      },
      { // Animal Improvement
        actionText: "txt-evt-harbor-select-action-1",
        reqWorld: '1..',
        select:'evt-harbor-animalImprovement'
      }, 
      { // Set Sail
        ref:'evt-harbor-setSail'
      }
    ],
  },

// Harbor generic actions

  {
    id: 'evt-harbor-setSail',
    actionText: "txt-evt-harbor-setSail-action",
  },
  {
    id: 'evt-harbor-quest-reward',
    actionText: "txt-evt-harbor-quest-reward-action",
    select: [
      {
        slots:5,
        text: "txt-evt-harbor-quest-reward",
        funds: +80,
        select: 'evt-harbor-eventSelection',
      },
      {
        slots:3,
        text: "txt-evt-harbor-quest-reward-1",
        funds: +100,
        select: 'evt-harbor-eventSelection',
      },
      {
        slots:1,
        text: "txt-evt-harbor-quest-reward-2",
        funds: +120,
        select: 'evt-harbor-eventSelection',
      },
    ],
  },
  {
    id: 'evt-harbor-offer-map',
    npc: 'pl-native-scout',
    text: "txt-evt-harbor-offer-map",
    report: "txt-evt-harbor-offer-map-report",
    actions: [
      {
        actionText: "txt-evt-harbor-offer-map-action",
        barter: {
          hidePartyOffer: true,
          items: {'il-maps':1},
          baseValue: 'funds', 
          close: 'evt-harbor-eventSelection',
          cancel: 'evt-harbor-eventSelection',
        },
      },
      {
        actionText: "txt-evt-harbor-recruit-action",
        select: 'evt-harbor-eventSelection',
      },
    ],
  },  

])