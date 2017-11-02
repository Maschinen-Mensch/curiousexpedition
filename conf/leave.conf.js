config.entities.add([

  {
    id: 'evt-leave',
    actionText: "txt-evt-leave-action",
    clearPushedEvents: true,
    alwaysShown: true,
    reqTutorial: false,
    partyEffects: [
      {
        events: [
          { prio: 0, reqTutorial: true },
          { prio: 1, ref: 'evt-followed' },
          { prio: 1, slots: 3, ref: 'evt-leave-wildlife' },
          { prio: 2, slots: 4, chat: 'cl-leave' },
          { prio: 2, slots: 4, ref: 'evt-leave-cannibal' },
          { prio: 2, slots: 3, ref: 'evt-leave-raptors' },
          { prio: 2, slots: 1, ref: 'evt-leave-startFire' },
          { prio: 2, slots: 3, ref: 'evt-leave-startFirePyromaniac' },
          { prio: 2, slots: 3, ref: 'evt-leave-superstitious' },      
        ]    
      },
      {
        ref: 'evt-leave-clearFlags'
      }
    ]
  },
  {
    id: 'evt-leave-wildlife',
    actionText: "txt-evt-leave-action",
    reqFixtureFlags: '+wildlife +explored',
    text: "txt-evt-leave-3",
    report: "txt-evt-leave-report",
    events: [
      {
        reqBiomeFlags:'+grass | +dry | +desert', 
        addZone: {ref:'zn-hyena', range:2}
      },
      {
        reqBiomeFlags:'+arctic', 
        addZone: {ref:'zn-wolf-arctic', range:2}
      },
      {
        reqWorld:'1..', 
        reqBiomeFlags:'+grass | +dry', 
        addZone: {ref:'zn-panther', range:2}
      },
      {
        reqWorld:'1..',
        reqBiomeFlags:'+grass | +dry | +prehistoric', 
        addZone: {ref:'zn-tiger', range:2}
      },
      {
        reqWorld:'2..',
        reqBiomeFlags:'+grass | +dry',  
        addZone: {ref:'zn-gorilla', range:2}
      },
      {
        reqWorld:'2..',
        reqBiomeFlags:'+arctic', 
        addZone: {ref:'zn-polarBear', range:2}
      },
      {
        reqWorld:'2..',
        reqBiomeFlags:'+arctic', 
        addZone: {ref:'zn-walrus', range:2}
      },
      {
        reqWorld:'2..',
        reqBiomeFlags:'+desert', 
        addZone: {ref:'zn-giantScorpion', range:2}
      },
      {
        reqWorld:'3..',
        reqBiomeFlags:'+grass | +water',  
        addZone: {ref:'zn-crocodile', range:2}
      },
      {
        reqWorld:'3..',
        reqBiomeFlags:'+prehistoric',  
        addZone: {ref:'zn-raptor', range:2}
      },
      {
        reqWorld:'3..',
        reqBiomeFlags:'+prehistoric',  
        addZone: {ref:'zn-sabertooth', range:2}
      },
      {
        reqWorld:'4..',
        reqBiomeFlags:'+prehistoric',  
        addZone: {ref:'zn-giantBird', range:2}
      },
    ],
  },
  {
    id: 'evt-leave-raptors',
    reqPartyFlags: '+raptors',
    events: {
      text: "txt-evt-leave-raptors",
      report: "txt-evt-leave-raptors-report",
      events: [
        {slots: 1, addZone: {ref:'zn-raptor', range:1}},
      ],
    }
  },
  {
    id: 'evt-leave-superstitious',
    reqPartyFlags: '+superstitious',
    chat: 'cl-angry-superstitious',
    charEffects: {
      reqStatus: '+superstitious -angry',
      loyalty: -1,
      text: "txt-evt-leave-superstitious",
      report: "txt-evt-leave-superstitious"
    },
  },

  {
    id: 'evt-leave-cannibal',
    reqPartyFlags: '+cannibalSearch',
    charEffects: [
      {
        reqStatus: {'st-cannibal':false},
        reqCharFlags: '-special +humanoid',
        storeCharacter: true,
        text: "txt-evt-leave"
      },
      {
        optional: true,
        reqStatus: {'st-cannibal':true},
        reqCharFlags: '-abomination',
        text: "txt-evt-leave-1"
      },
      {
        optional: true,
        reqCharFlags: '+abomination',
        text: "txt-evt-leave-2"
      }
    ]
  },
  {
    id: 'evt-leave-startFire',
    reqPartyFlags: '+startFire',
    reqCanStartSprawl: {ref:'spr-fire', radius:1},
    reqBiomeFlags:'-arctic',

    text: "txt-evt-leave-startFire",
    report: "txt-evt-leave-startFire-report",
    chat: 'cl-startFire',

    startSprawl: {ref:'spr-fire', radius:1, power:5},
    charEffects: {
      optional: true,
      reqCharFlags: '-special +humanoid',
      text: "txt-evt-leave-startFire-1"
    },
  },
  {
    id: 'evt-leave-startFirePyromaniac',
    reqCanStartSprawl: {ref:'spr-fire', radius:1},
    reqBiomeFlags:'-arctic',

    text: "txt-evt-leave-startFirePyromaniac",
    report: "txt-evt-leave-startFirePyromaniac-report",
    chat: 'cl-startFire',
    
    startSprawl: {ref:'spr-fire', radius:1, power:5},
    charEffects: {
      reqCharFlags: '-special +humanoid',
      reqStatus: '+pyromaniac',
      text: "txt-evt-leave-startFirePyromaniac-1"
    },
  },
  {
    id: 'evt-leave-clearFlags',
    // Clear all flags that have been set in fixtures for leave check
    setPartyFlags: {
      superstitious: false, 
      startFire: false, 
      sacrileg: false, 
      wildlife: false,
      raptors: false,
      cannibalSearch: false
    },
  },

  {
    id: 'evt-followed', // natives confrontation
    reqPartyFlags: '+sacrileg',
    reqPartyStatus: '+followed-natives',
    setPartyStatus: '-followed-natives',
    reqWarpWorld: false,

    events: {
      text: "txt-evt-followed",
      report: "txt-evt-followed-report",
      npc: [ 
        'pl-native-warrior',
        'pl-native-warrior',
        'pl-native-warrior',
      ],
      actions: [
        'evt-followed-confront-pay',
        'evt-followed-confront-deny'
      ]
    }
  },
  { 
    id: 'evt-followed-confront-pay',
    actionText: "txt-evt-followed-confront-pay-action",
    text: "txt-evt-followed-confront-pay",
    barter: {
      baseValue: {base:30},
      priceTable: 'village',
      items: {'il-metaItems':99},
      close: 'evt-followed-confront-pay-success',
      cancel: 'evt-followed-confront-combat',
    },
  },
  { 
    id: 'evt-followed-confront-deny',
    actionText: "txt-evt-followed-confront-deny-action",
    reqDice: 'mind',
    showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
    winEvents: {
      text: "txt-evt-followed-confront-deny",
      report: "txt-evt-followed-confront-deny-report",
    },
    failEvents: [
      'evt-followed-confront-combat'
    ],
  },
  {
    id: 'evt-followed-confront-combat',
    text: "txt-evt-followed-confront-combat",
    report: "txt-evt-followed-confront-combat-report",
    standing: -2,
    actions: {
      actionText: "txt-evt-cave-ghostsQuest-action",
      combat: [{slots:1, 'emy-native-warrior':3}],
    }
  },
  { 
    id: 'evt-followed-confront-pay-success',
    text: "txt-evt-followed-confront-pay-success",
    report: "txt-evt-followed-confront-pay-success-report",
  },

])