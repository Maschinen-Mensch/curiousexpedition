config.entities.add([

// status

  {
    id: 'st-angry',
    debugCategory: 'Ailment',
    title: "txt-st-angry-title",
    description: "txt-st-angry",
    sprite: "res_status_angry.png",
    important: true,
    tripEvents: [
      {slots: 1, select: 'evt-angry-select', reqAge:'6..'},
      {slots: 5},
    ],
  },
  {
    id: 'st-renounced',
    debugCategory: 'Ailment',
    title: "txt-st-renounced-title",
    description: "txt-st-renounced",
    sprite: "res_status_renounced.png",
    important: true
  },

// events

  {
    id: 'evt-angry-select',
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    select: [
      {slots: 1,  ref: 'evt-angry-runAway'},    
      {slots: 1,  ref: 'evt-angry-nativeLeave'},
      {slots: 1,  ref: 'evt-angry-stealLeave'},
      {slots: 2,  ref: 'evt-angry-angryLeave'},
      {slots: 1,  ref: 'evt-angry-demandPayment'},
      {slots: 1,  ref: 'evt-angry-shamanCurse'},
      {slots: 10, ref: 'evt-angry-mutiny'},

      {slots: 1,  ref: 'evt-angry-renounced'},

      // {slots: 1,  ref: 'evt-angry-traitor'},
      // {slots: 1, ref: 'evt-angry-compensation'},
    ]
  },
  {
    id: 'evt-angry-runAway',
    charEvents: {
      reqCharFlags: '+humanoid -special -abomination',
      reqStatus: '-cannibal -renounced',
      reqLoyalty: '0',
      text: "txt-evt-angry-runAway",
      report: "txt-evt-angry-runAway-report",
      storeCharacter: true,
    },
    chat: 'cl-runAway',
  },
  {
    id: 'evt-angry-nativeLeave',
    //chat: 'cl-replace',
    charEvents: {
      reqCharFlags: '+humanoid +native -special',
      reqLoyalty: '0',
      text: "txt-evt-angry-nativeLeave",
      report: "txt-evt-angry-nativeLeave-report",
      storeCharacter:true,
    },
    items: {'it-cocaLeaves':+2},
  },
  {
    id: 'evt-angry-stealLeave',
    //chat: 'cl-replace',
    charEvents: {
      reqCharFlags: '+humanoid -special -native -abomination',
      reqStatus: '-cannibal',
      reqLoyalty: '0',
      text: "txt-evt-angry-justLeave",
      report: "txt-evt-angry-justLeave-report",
      storeCharacter:true,
    },
    dropItems: 30
  },
  {
    id: 'evt-angry-angryLeave',
    charEvents: [
      {
        reqCharFlags: '+humanoid -special -native -abomination',
        reqStatus: '-cannibal',
        reqLoyalty: '0',
        text: "txt-evt-angry-angryLeave",
        storeCharacter: true,
      },
      {
        text: "txt-evt-angry-angryLeave-1",
        reqCharFlags: '-special -animal +humanoid'
      }
    ]
  },
  {
    id: 'evt-angry-demandPayment',
    //chat: 'cl-replace',
    charEvents: {
      reqCharFlags: '+humanoid -special -trader -abomination',
      reqStatus: '-cannibal',
      reqLoyalty: '0',
      text: "txt-evt-angry-demandPayment",
      actions: [
        {
          actionText: "txt-evt-angry-demandPayment-action",
          text: "txt-evt-angry-demandPayment-1",
          barter: {
            baseValue: {base:+20},
            items: {'il-metaItems':99},
            close: {
              loyalty: +2,
              text: "txt-evt-angry-demandPayment-2",
              report: "txt-evt-angry-demandPayment-report",
            },
            cancel: {
              text: "txt-evt-angry-demandPayment-3",
              report: "txt-evt-angry-demandPayment-report-1",
              storeCharacter: true,
            },
          },
        },
        {
          actionText: "txt-evt-angry-demandPayment-action-1",
          text: "txt-evt-angry-demandPayment-4",
          report: "txt-evt-angry-demandPayment-report-2",
          storeCharacter: true,
        },
      ]
    },
  },
  {
    id: 'evt-angry-compensation',
    charEvents: {
      reqStatus: '+angry',
      chat: 'cl-angry-compensation',
      text: "txt-evt-sanity-angry",
      report: "txt-evt-sanity-angry-report",
      actions: {
        actionText: "txt-evt-sanity-angry-action",
        barter: {
          baseValue: {base:15},
          items: {'il-metaItems':99},
          close: {
            text: "txt-evt-sanity-angry-1",
            loyalty: +2,
            report: "txt-evt-sanity-angry-report-1",
          },
          cancel: {
            text: "txt-evt-sanity-angry-2",
            setCharFlags: '+leftAngry',
            storeCharacter: true,
            report: "txt-evt-sanity-angry-report-2",
          }
        }, 
      },
    }, 
  },
  {
    id: 'evt-angry-shamanCurse',
    //chat: 'cl-replace',
    charEvents: [
      {
        reqCharFlags: '+nativeShaman',
        reqLoyalty: '0',
        text: "txt-evt-angry-shamanCurse",
        report: "txt-evt-angry-shamanCurse-report",
        storeCharacter: true
      },
      {
        reqCharFlags: '+humanoid -special -native',
        text: "txt-evt-angry-shamanCurse-1",
        setStatus: '+deathCurse'
      }
    ]
  },
  {
    id: 'evt-angry-renounced',
    charEvents: {
      reqCharFlags: '-homeWorld +humanoid -special -abomination',
      reqStatus: '-renounced',
      reqLoyalty: '0',
      text: "txt-evt-angry-renounced",
      report: "txt-evt-angry-renounced-report",
      setStatus: '+renounced',
      chat: 'cl-angry'
    }
  },
  {
    id: 'evt-angry-traitor',
    charEvents: {
      reqCharFlags: '-homeWorld +humanoid -special -abomination -traitor',
      reqLoyalty: '0',
      text: "txt-evt-angry-traitor",
      report: "txt-evt-angry-traitor-report",
      loyalty: +2,
      select: [
        { slots: 2, setCharFlags:'+traitor' },
        { slots: 1, /* nothing */ }
      ]
    }
  },
  {
    id: 'evt-sanity-angry-native',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    storeEvents: {
      reqLoyalty: '0',
      reqCharFlags: '+native -dead',
      text: "txt-evt-sanity-angry-native",
    },
    charEvents: {
      reqCharFlags: '-special +humanoid',
      text: "txt-evt-sanity-angry-native-1",
      setStatus: '+deathCurse'
    },
    select: 'evt-sanity-return'
  },
  {
    id: 'evt-angry-mutiny',
    chat: 'cl-generic',
    charEvents: {
      reqCharFlags: '-special +humanoid',
      reqLoyalty: '0',
      count: '3..',
      text: "txt-evt-angry-mutiny",
      storeCharacter: true
    },
    dropItems: 75
  },
])