config.entities.add( [

// Tutorial

  {
    id: 'tut-1',
    lines: {
      text: "txt-tut-1",
      chat: 'tut-2',
    }
  },
  {
    id: 'tut-2',
    lines: {
      text: "txt-tut-2",
    }
  },
  {
    id: 'tut-finish',
    lines: {
      reqCharFlags: '+special',
      text: "txt-tut-finish",
      chat: 'tut-finish-reply',
    }
  },
  {
    id: 'tut-finish-reply',
    lines: {
      reqCharFlags: '-special -native',
      text: "txt-tut-finish-reply",
    }
  },
  {
    id: 'tut-shipArrival-1',
    lines: {
      reqCharFlags: '-special +humanoid',
      text: "txt-tut-shipArrival-1",
      chat: 'tut-shipArrival-2',
    }
  },
  {
    id: 'tut-shipArrival-2',
    lines: {
      reqCharFlags: '-special +humanoid',
      text: "txt-tut-shipArrival-2",
      chat: 'tut-shipArrival-3',
    }
  },
  {
    id: 'tut-shipArrival-3',
    lines: {
      text: "txt-tut-shipArrival-3",
      reqCharFlags: '+special',
    }
  },

  {
    id: 'cl-info-village',
    lines: {
      text: "txt-cl-info-village",
      reqCharFlags: '+special'
    }
  },
  {
    id: 'cl-new-biome',
    lines: {
      text: "txt-cl-new-biome",
      reqCharFlags: '+special'
    }
  },
  {
    id: 'cl-evt-alreadyVisited',
    lines: {
      text: "txt-cl-evt-alreadyVisited",
      reqCharFlags: '+humanoid',
    }
  },
  {
    id: 'cl-water-pack',
    lines: {
      text: "txt-cl-water-pack",
      reqCharFlags: '+humanoid -special',
    }
  },
  {
    id: 'cl-quest-missingHusband',
    text: "txt-cl-quest-missingHusband",
    reqCharFlags: '+humanoid -special',
  },

// Expedition start
  {
    id: 'cl-expedition-start',
    lines: [
      {
        text: "txt-cl-expedition-start",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-expedition-start-1",
        reqCharFlags: '+humanoid +moody',
      },
      {
        text: "txt-cl-expedition-start-2",
        reqCharFlags: '+humanoid +witty',
      },
      {
        text: "txt-cl-expedition-start-3",
        reqCharFlags: '+humanoid +greedy',
      },
      {
        text: "txt-cl-expedition-start-4",
        reqCharFlags: '+humanoid +coward',
      },
      {
        text: "txt-cl-expedition-start-5",
        reqCharFlags: '+sterling',
      },
    ],
  },

// Beastmaster Recruit
  {
    id: 'cl-beastMaster-recruit',
    lines: [
      {
        text: "txt-cl-beastMaster-recruit",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-beastMaster-recruit-1",
        reqCharFlags: '+moody',
      },
      {
        text: "txt-cl-beastMaster-recruit-2",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-cl-beastMaster-recruit-3",
        reqCharFlags: '+greedy',
      },
      {
        text: "txt-cl-beastMaster-recruit-4",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-cl-beastMaster-recruit-5",
        reqCharFlags: '+sterling',
      },
    ],
  },
// Habor Recruit
  {
    id: 'cl-harbor-recruit',
    lines: {
      text: "txt-cl-harbor-recruit",
      reqCharFlags: '+special',
      chat: 'cl-reply-harbor-recruit-1',
    },
  },
  {
    id: 'cl-reply-harbor-recruit-1',
    lines: {
      text: "txt-cl-reply-harbor-recruit-1",
      reqCharFlags: '+humanoid -special',
      chat: 'cl-reply-harbor-recruit-2',
    },
  },
  {
    id: 'cl-reply-harbor-recruit-2',
    lines: {
      text: "txt-cl-reply-harbor-recruit-2",
      reqCharFlags: '+humanoid -special',
    },
  },
// Item usage 

  {
    id: 'cl-camp-fail',
    lines: {
      text: "txt-cl-camp-fail",
      reqCharFlags: '+special',
    }
  },
  {
    id: 'cl-camp-success',
    lines: {
      text: "txt-cl-camp-success",
      reqCharFlags: '+special',
    }
  },
  {
    id: 'cl-item-chocolate',
    lines: [
      {
        text: "txt-cl-item-chocolate",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-item-chocolate-1",
        reqCharFlags: '+sterling',
      },
      {
        text: "txt-cl-item-chocolate-2",
        reqCharFlags: '+humanoid +moody',
      },
      {
        text: "txt-cl-item-chocolate-3",
        reqCharFlags: '+humanoid +witty',
      }
    ]
  },
  {
    id: 'cl-item-genericFood',
    lines: [
      {
        text: "txt-cl-item-genericFood",
        reqCharFlags: '+humanoid',
      },
    ]
  },
  {
    id: 'cl-item-tinCan-eat',
    lines: [
      {
        text: "txt-cl-item-tinCan-eat",
        reqCharFlags: '+humanoid -special',
      },
      {
        text: "txt-cl-item-tinCan-eat-1",
        reqCharFlags: '+sterling',
      },
      {
        text: "txt-cl-item-tinCan-eat-2",
        reqCharFlags: '+humanoid +moody',
      },
      {
        text: "txt-cl-item-tinCan-eat-3",
        reqCharFlags: '+humanoid +witty',
      },
      {
        text: "txt-cl-item-tinCan-eat-4",
        reqCharFlags: '+humanoid +religious',
      },
      {
        text: "txt-cl-item-tinCan-eat-5",
        reqCharFlags: '+humanoid +british',
      }
    ]
  },
  {
    id: 'cl-item-tinCan-refuse',
    lines: [
      {
        text: "txt-cl-item-tinCan-refuse",
        reqCharFlags: '+humanoid -special',
      },
      {
        text: "txt-cl-item-tinCan-refuse-1",
        reqCharFlags: '+sterling +moody',
      },
      {
        text: "txt-cl-item-tinCan-refuse-2",
        reqCharFlags: '+humanoid +moody',
      },
    ]
  },
  {
    id: 'cl-cocaLeaves',
    lines: [
      {
        text: "txt-cl-cocaLeaves",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-cocaLeaves-crowley",
        reqCharacter: "sp-crowley",
      }
    ]
  },
  {
    id: 'cl-item-dynamite',
    lines: {
      text: "txt-cl-item-dynamite",
      reqCharFlags: '+humanoid',
    }
  },
  {
    id: 'cl-item-claimFlag-fail',
    lines: {
      text: "txt-cl-item-claimFlag-fail",
      reqCharFlags: '+humanoid -native',
    }
  },
  {
    id: 'cl-item-claimFlag-success',
    lines: {
      text: "txt-cl-item-claimFlag-success",
      reqCharFlags: '+humanoid -native',
    }
  },
  {
    id: 'cl-scroll-hill',
    lines: {
      text: "txt-cl-scroll-hill",
      reqCharFlags: '+humanoid',
    }
  },
  {
    id: 'cl-tomePage-waterfall',
    lines: {
      text: "txt-cl-tomePage-waterfall",
      reqCharFlags: '+humanoid',
    }
  },
  {
    id: 'cl-alcohol',
    lines: {
      text: "txt-cl-alcohol",
      reqCharFlags: '+humanoid',
    }
  },
  {
    id: 'cl-heal',
    lines: {
      text: "txt-cl-heal",
      reqCharFlags: '+humanoid',
    }
  },

  {
    id: 'cl-levelUp',

    lines: [
      {
        text: "txt-cl-levelUp",
        reqCharFlags: '+humanoid'
      }
    ]
  },

  // eating meat

  {
    id: 'cl-item-meat-animal-cooked',
    lines: [
      {
        text: "txt-cl-item-meat-animal-cooked",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-item-meat-animal-cooked-1",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-item-meat-animal-cooked-2",
        reqCharFlags: '+native +humanoid',
      },
      {
        text: "txt-cl-item-meat-animal-cooked-3",
        reqCharFlags: '-native +humanoid',
      }
    ]
  },
  {
    id: 'cl-item-meat-animal-cooked-bad',
    lines: [
      {
        text: "txt-cl-item-meat-animal-cooked-bad",
        reqCharFlags: '+humanoid',
      }
    ]
  },

  // Necronomicon

  {
    id: 'cl-necronomicon-portal',
    lines: {
      text: "txt-cl-necronomicon-portal",
      reqPerk: '+necronomicon',
    }
  },
  {
    id: 'cl-necronomicon-page',
    lines: {
      text: "txt-cl-necronomicon-page",
      reqPerk: '+necronomicon',
    }
  },
  {
    id: 'cl-necronomicon-fail',
    lines: {
      text: "txt-cl-necronomicon-fail",
    }
  },

  // cooking meat

  {
    id: 'cl-cook-meat',
    lines: {
      text: "txt-cl-cook-meat",
      reqCharFlags: '+cook',
    }
  },
  {
    id: 'cl-cook-meat-fail',
    lines: {
      text: "txt-cl-cook-meat-fail",
      reqCharFlags: '+cook',
    }
  },

// Comments - Joining units

  {
    id: 'cl-join',
    lines: [
      {
        text: "txt-cl-join",
        reqCharFlags: '+tim',
      },
      {
        text: "txt-cl-join-1",
        reqCharFlags: '+cultist',
      },
      {
        text: "txt-cl-join-2",
        reqCharFlags: '+artist',
      },
      {
        text: "txt-cl-join-3",
        reqCharFlags: '+trader',
      },
      {
        text: "txt-cl-join-4",
        reqCharFlags: '+sailor',
      },
      {
        text: "txt-cl-join-5",
        reqCharFlags: '+soldierBritish',
      },
      {
        text: "txt-cl-join-6",
        reqCharFlags: '+cook',
      },
      {
        text: "txt-cl-join-7",
        reqCharFlags: '+translator',
      },
      {
        text: "txt-cl-join-8",
        reqCharFlags: '+nativeWarrior',
      },
      {
        text: "txt-cl-join-9",
        reqCharFlags: '+nativeShaman',
      },
      {
        text: "txt-cl-join-10",
        reqCharFlags: '+nativeScout',
      },
      {
        text: "txt-cl-join-11",
        reqCharFlags: '+nativeAnimalHandler',
      },
      {
        text: "txt-cl-join-12",
        reqCharFlags: '+missionary',
      },
      {
        text: "txt-cl-join-13",
        reqCharFlags: '+soldierScottish',
      },
      {
        text: "txt-cl-join-14",
        reqCharFlags: '+bedouin',
      },
      {
        text: "txt-cl-join-15",
        reqCharFlags: '+sterling',
      }
    ]
  },

// Comments - A new morning

  {
    id: 'cl-newMorning',
    lines: [
      {
        text: "txt-cl-newMorning",
        reqCharFlags: '+humanoid -special'
      },
      {
        text: "txt-cl-newMorning-1",
        reqCharFlags: '+humanoid +special',
      },
      {
        text: "txt-cl-newMorning-2",
        reqCharFlags: '+humanoid +cultist',
      },
      {
        text: "txt-cl-newMorning-3",
        reqCharFlags: '+humanoid +moody'
      },
      {
        text: "txt-cl-newMorning-4",
        reqCharFlags: '+humanoid +brave'
      },
      {
        text: "txt-cl-newMorning-5",
        reqCharFlags: '+humanoid +spiritual',
      },
      {
        text: "txt-cl-newMorning-6",
        reqCharFlags: '+humanoid +witty',
      },
      {
        text: "txt-cl-newMorning-7",
        reqCharFlags: '+humanoid +coward',
      },
      {
        text: "txt-cl-newMorning-8",
        reqCharFlags: '+humanoid +greedy'
      },
      {
        text: "txt-cl-newMorning-9",
        reqCharFlags: '+humanoid',
        reqStatus: '+angry',
      },
      {
        text: "txt-cl-newMorning-10",
        reqCharFlags: '+sterling',
      },
      {
        text: "txt-cl-newMorning-11",
        reqCharFlags: '+humanoid',
        reqStatus: '+angry' 
      },
      {
        text:"txt-cl-newMorning-stark",
        reqCharacter: "sp-stark",
      },
      {
        text:"txt-cl-newMorning-darwin",
        reqCharacter: "sp-darwin",
      }
    ]
  },

  {
    id: 'cl-angry', // angry objection
    lines: [
      {
        text: "txt-cl-angry",
        reqCharFlags: '-special'
      },
      {
        text: "txt-cl-angry-1",
        reqCharFlags: '-special', reqLoyalty: '2..'
      },
      {
        text: "txt-cl-angry-2",
        reqCharFlags: '-special', reqLoyalty: '1'
      },
      {
        text: "txt-cl-angry-3",
        reqCharFlags: '-special', reqLoyalty: '0'
      }
    ]
  },
  {
    id: 'cl-angry-compensation', // angry compensation
    lines: [
      {
        text: "txt-cl-angry-compensation",
        reqCharFlags: '-special'
      },
      {
        text: "txt-cl-angry-compensation-1",
        reqCharFlags: '-special', reqLoyalty: '0'
      }
    ]
  },
  {
    id: 'cl-disgust',
    lines: [
      {
        text: "txt-cl-disgust"
      }
    ]
  },
  {
    id: 'cl-ignore',
    lines: [
      {
        text: "txt-cl-ignore"
      }
    ]
  },
  {
    id: 'cl-slaverySell',
    lines: [
      {
        reqCharFlags: '+humanoid -special',
        text: "txt-cl-slaverySell"
      }
    ]
  },
  {
    id: 'cl-slaverySell-comment',
    lines: [
      {
        reqCharFlags: '+humanoid -special',
        text: "txt-cl-slaverySell-comment"
      }
    ]
  },
  {
    id: 'cl-trinketGift',
    lines: [
      {
        text: "txt-cl-trinketGift",
        reqLoyalty: '1',
      },
      {
        text: "txt-cl-trinketGift-1",
        reqLoyalty: '2',
      },
      {
        text: "txt-cl-trinketGift-2",
        reqLoyalty: '3',
      },
      {
        text: "txt-cl-trinketGift-3",
        reqLoyalty: '4',
      },
      {
        text: "txt-cl-trinketGift-4",
        reqLoyalty: '5',
      },
    ]
  },

// Superstitious Angry

  {
    id: 'cl-angry-superstitious',
    lines: {
      text: "txt-cl-angry-superstitious",
      reqStatus: {'st-superstitious':true, 'st-angry':true},
    }
  },

  {
    id: 'cl-racist-conflict',
    lines: {
      text: "txt-cl-racist-conflict",
      chat: 'reply-racist',
    }
  },
  {
    id: 'cl-racist-confirmation',
    lines: {
      text: "txt-cl-racist-confirmation",
      reqStatus: {'st-racist':true},
    }
  },


// Leaving a place

  {
    id: 'cl-leave',
    lines: [
      {
        text: "txt-cl-leave",
        reqCharFlags: {humanoid:true, special: true},
      },
      {
        text: "txt-cl-leave-1",
        reqCharFlags: '+humanoid +moody'
      },
      {
        text: "txt-cl-leave-2",
        reqCharFlags: '+humanoid +coward',
      },
      {
        text: "txt-cl-leave-3",
        reqCharFlags: '+humanoid +spiritual',
      },
      {
        text: "txt-cl-leave-4",
        reqCharFlags: '+humanoid +brave'
      },
      {
        text: "txt-cl-leave-5",
        reqCharFlags: '+humanoid +greedy'
      },
      {
        text: "txt-cl-leave-6",
        reqCharFlags: {humanoid:true, religious:true},
      }
    ]
  },

  // Reply Negative Status

  {
    id: 'reply-paranoid',
    lines: [
      {
        text: "txt-reply-paranoid",
        reqCharFlags: '+humanoid'
      },
      {
        text: "txt-reply-paranoid-1",
        reqCharFlags: '+humanoid +spiritual'
      },
      {
        text: "txt-reply-paranoid-2",
        reqCharFlags: '+humanoid +moody'
      }
    ]
  },
  {
    id: 'reply-applyNegativeStatus',
    lines: [
      {
        text: "txt-reply-applyNegativeStatus",
        reqCharFlags: {humanoid:true,}
      },
      {
        text: "txt-reply-applyNegativeStatus-1",
        reqCharFlags: '+humanoid +moody'
      },
      {
        text: "txt-reply-applyNegativeStatus-2",
        reqCharFlags: '+humanoid +spiritual'
      },
      {
        text: "txt-reply-applyNegativeStatus-3",
        reqCharFlags: '+humanoid +coward'
      },
      {
        text: "txt-reply-applyNegativeStatus-4",
        reqCharFlags: '+humanoid +witty'
      },
      {
        text: "txt-reply-applyNegativeStatus-5",
        reqCharFlags: '+humanoid +greedy'
      }
    ]
  },

// ------- Seal

  {
    id: 'cl-seal-activate',
    lines: {
      text: "txt-cl-seal-activate",
      reqCharFlags: '+humanoid -special -native',
    }
  },

// ------ Village

  {
    id: 'cl-village-enter',
    lines: [
      { // Racist
        text: "txt-cl-village-enter",
        chat: {id:'reply-racist'},
        reqCharFlags: '+humanoid',
        reqStatus: {'st-racist':true},
      },
      { // Generic
        text: "txt-reply-racist",
        reqCharFlags: '+humanoid -moody -special',
        reqStatus: '-racist -paranoid',
        chat: 'reply-generic',
      },
      { // Generic (western)
        text: "txt-reply-racist-1",
        reqCharFlags: '+humanoid -moody -special -native',
        reqStatus: '-racist -paranoid',
        chat: 'reply-generic',
      },
      { // Paranoid
        text: "txt-reply-racist-2",
        reqCharFlags: '+humanoid',
        chat: 'reply-paranoid',
        reqStatus: {'st-paranoid':true},
      },
      { // Greedy
        text: "txt-reply-racist-3",
        reqCharFlags: '+humanoid +greedy'
      },
      { // Coward
        text: "txt-reply-racist-4",
        reqCharFlags: '+humanoid +coward',
        chat: 'reply-coward',
      },
      { // Moody
        text: "txt-reply-racist-5",
        chat: 'reply-moody',
        reqCharFlags: '+humanoid +moody'
      },
      { // Spiritual
        text: "txt-reply-racist-6",
        chat: 'reply-spiritual',
        reqCharFlags: '+humanoid +spiritual'
      }
    ]
  },
  {
    id: 'cl-village-recruit',
    lines: [
      {
        text: "txt-cl-village-recruit",
        chat: 'reply-racist',
        reqCharFlags: '+humanoid',
        reqStatus: {'st-racist':true},
      },
      { 
        text: "txt-cl-village-recruit-1",
        reqCharFlags: {humanoid:true, moody:false, special:false},
        reqStatus: {'st-racist':false, 'st-paranoid':false},
      },
      { 
        text: "txt-cl-village-recruit-2",
        reqCharFlags: '+humanoid +greedy'
      },
      { 
        text: "txt-cl-village-recruit-3",
        chat: 'reply-moody',
        reqCharFlags: '+humanoid +moody'
      },
      { 
        text: "txt-cl-village-recruit-4",
        chat: 'reply-spiritual',
        reqCharFlags: '+humanoid +spiritual'
      }
    ]
  },

// ------ Scary place

  {
    id: 'cl-scaryPlace',
    lines: [
      {
        text: "txt-cl-scaryPlace",
        chat: 'reply-coward',
        reqCharFlags: '+humanoid -special -brave'
      },
      {
        text: "txt-cl-scaryPlace-1",
        chat: 'reply-coward',
        reqCharFlags: '+humanoid +coward'
      },
      {
        text: "txt-cl-scaryPlace-2",
        chat: 'reply-paranoid',
        reqStatus: {'st-paranoid': true}
      },
      {
        text: "txt-cl-scaryPlace-3",
        chat: 'reply-spiritual',
        reqCharFlags: {spiritual: true}
      },
      {
        text:"txt-cl-scaryPlace-curie",
        reqCharacter: "sp-curie",
      },
      {
        text:"txt-cl-scaryPlace-earhart",
        reqCharacter: "sp-earhart",
      },
      {
        text:"txt-cl-scaryPlace-huizinga",
        reqCharacter: "sp-huizinga",
      }
    ]
  },  

// ------ Deadly place

  {
    id: 'cl-deadlyPlace',
    lines: [
      {
        text: "txt-cl-deadlyPlace",
        chat: 'reply-coward',
        reqCharFlags: {humanoid:true, coward: true, special: false},
      },
      {
        text: "txt-cl-deadlyPlace-1",
        chat: 'reply-witty',
        reqCharFlags: {humanoid:true, witty: true,}
      },
      {
        text: "txt-cl-deadlyPlace-2",
        chat: 'reply-spiritual',
        reqCharFlags: {humanoid:true, spiritual: true,}
      },
      {
        text: "txt-cl-deadlyPlace-3",
        chat: 'reply-greedy',
        reqCharFlags: {humanoid:true, greedy: true,}
      },
      {
        text: "txt-cl-deadlyPlace-4",
        chat: 'reply-brave',
        reqCharFlags: {humanoid:true, brave: true,}
      },
      {
        text: "txt-cl-deadlyPlace-5",
        chat: 'reply-religious',
        reqCharFlags: {humanoid:true, religious: true,}
      },
      {
        text: "txt-cl-deadlyPlace-6",
        chat: 'reply-moody',
        reqCharFlags: {humanoid:true, moody: true,}
      }
    ]
  },

// ------ Generic

  {
    id: 'cl-generic',
    lines: [
      {
        text: "txt-cl-generic",
        chat: 'reply-spiritual',
        reqCharFlags: {spiritual: true}
      },
      {
        text: "txt-cl-generic-1",
        chat: 'reply-religious',
        reqCharFlags: {religious: true}
      },
      {
        text: "txt-cl-generic-2",
        chat: 'reply-brave',
        reqCharFlags: {brave: true}
      },
      {
        text: "txt-cl-generic-3",
        chat: 'reply-moody',
        reqCharFlags: {moody: true}
      },
      {
        text: "txt-cl-generic-4",
        chat: 'reply-greedy',
        reqCharFlags: {greedy: true}
      },
      {
        text: "txt-cl-generic-5",
        chat: 'reply-witty',
        reqCharFlags: {witty: true}
      },
      {
        text: "txt-cl-generic-6",
        chat: 'reply-coward',
        reqCharFlags: {coward: true}
      }
    ]
  },

// ------ Portal

  {
    id: 'cl-portal',
    lines: [
      {
        text: "txt-cl-portal",
        chat: 'reply-spiritual',
        reqCharFlags: {spiritual: true}
      },
      {
        text: "txt-cl-portal-1",
        chat: 'reply-brave',
        reqCharFlags: {brave: true}
      },
      {
        text: "txt-cl-portal-2",
        chat: 'reply-moody',
        reqCharFlags: {moody: true}
      },
      {
        text: "txt-cl-portal-3",
        chat: 'reply-greedy',
        reqCharFlags: {greedy: true}
      },
      {
        text: "txt-cl-portal-4",
        chat: 'reply-witty',
        reqCharFlags: {witty: true}
      },
      {
        text: "txt-cl-portal-5",
        chat: 'reply-coward',
        reqCharFlags: {coward: true}
      }
    ]
  },

  // ------ Ghosties visit

    {
      id: 'cl-ghostiesVisit',
      lines: [
        {
          text: "txt-cl-ghostiesVisit",
          reqCharFlags: {spiritual: true}
        },
        {
          text: "txt-cl-ghostiesVisit-1",
          reqCharFlags: {moody: true}
        },
        {
          text: "txt-cl-ghostiesVisit-2",
          reqCharFlags: {greedy: true}
        },
        {
          text: "txt-cl-ghostiesVisit-3",
          reqCharFlags: {witty: true}
        },
        {
          text: "txt-cl-ghostiesVisit-4",
          reqCharFlags: {coward: true}
        },
        {
          text: "txt-cl-ghostiesVisit-5",
          reqCharFlags: {humanoid: true}
        }
      ]
    },

    // ------ Lovecraft Racist

      {
        id: 'cl-lovecraftRacist',
        lines: [
          {
            text: "txt-cl-lovecraftRacist",
            reqCharFlags: {humanoid: true}
          },
        ]
      },

// Make more room for hot air balloon

  {
    id: 'cl-hotAirBalloon-makeRoom',
    lines: {
      text: "txt-cl-hotAirBalloon-makeRoom",
      reqCharFlags: '+humanoid -special'
    }
  },

  // Unit runs away

    {
      id: 'cl-runAway',
      lines: [
        {
          text: "txt-cl-runAway",
          reqCharFlags: {moody:true},
        },
        {
          text: "txt-cl-runAway-1",
          reqCharFlags: {coward:true},
        },
        {
          text: "txt-cl-runAway-2",
          reqCharFlags: {spiritual:true},
        },
        {
          text: "txt-cl-runAway-3",
          reqCharFlags: {witty:true},
        },
        {
          text: "txt-cl-runAway-4",
          reqCharFlags: {religious:true},
        },
        {
          text: "txt-cl-runAway-5",
          reqCharFlags: {greedy:true},
        },
        {
          text: "txt-cl-runAway-6",
          reqCharFlags: '+humanoid',
        },
      ],
    },

// Replies to Explorer

  {
    id: 'cl-confirm-explorer-female',
    lines: {
      text: "txt-cl-confirm-explorer-female",
      reqCharFlags: '+humanoid -special'
    }
  },
  {
    id: 'cl-confirm-explorer-male',
    lines: {
      text: "txt-cl-confirm-explorer-male",
      reqCharFlags: '+humanoid -special'
    }
  },

// Dreamvisions

  {
    id: 'cl-dreamVisions',
    lines: {
      text: "txt-cl-dreamVisions",
      reqStatus: {'pk-dreamVisions':true},
    }
  },

  // Returning unit
  {
    id: 'cl-friendReturn',
    lines: {
      text: "txt-cl-friendReturn",
    }
  },
  {
    id: 'cl-angryReturn',
    lines: {
      text: "txt-cl-angryReturn",
    }
  },

  {
    id: 'cl-imaginary',
    lines: {
      text: "txt-cl-imaginary",
      reqCharFlags: '+humanoid',
    }
  },

  {
    id: 'cl-whatIsIt',
    lines: [
      {
        text: "txt-cl-whatIsIt",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-whatIsIt-1",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-cl-whatIsIt-2",
        reqStatus: '+paranoid',
      },
    ],
  },
  {
    id: 'cl-helpNative',
    lines: [
      {
        text: "txt-cl-helpNative",
        reqCharFlags: '+religious',
      },
      {
        text: "txt-cl-helpNative-1",
        reqCharFlags: '+greedy',
      },
      {
        text: "txt-cl-helpNative-2",
        reqCharFlags: '+moody',
      },
      {
        text: "txt-cl-helpNative-3",
        reqCharFlags: '+spiritual',
      },
      {
        text: "txt-cl-helpNative-4",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-helpNative-5",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-cl-helpNative-6",
        reqStatus: '+racist',
      },
    ],
  },

  // Cannibal Nature rest

  {
    id: 'cl-generic-cannibal',
    lines: [
      {
        text: "txt-cl-generic-cannibal",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Vulture Superstitious 

  {
    id: 'cl-vulture',
    lines: [
      {
        text: "txt-cl-vulture",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Help Natives 2

  {
    id: 'cl-helpNative-2',
    lines: [
      {
        text: "txt-cl-helpNative-7",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-helpNative-8",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-cl-helpNative-9",
        reqCharFlags: '+spiritual',
      },
      {
        text: "txt-cl-helpNative-10",
        reqCharFlags: '+moody',
      },
      {
        text: "txt-cl-helpNative-11",
        reqCharFlags: '+greedy',
      },
      {
        text: "txt-cl-helpNative-12",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-cl-helpNative-13",
        reqCharFlags: '+religious',
      },
      {
        text: "txt-cl-helpNative-14",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Racist Paranoid

  {
    id: 'cl-racist-paranoid',
    lines: [
      {
        text: "txt-cl-racist-paranoid",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Cultist injures himself

  {
    id: 'cl-cultist-injureSelf',
    lines: [
      {
        text: "txt-cl-cultist-injureSelf",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Native Visit

  {
    id: 'cl-nativeVisit',
    lines: [
      {
        text: "txt-cl-nativeVisit",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-nativeVisit-1",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-cl-nativeVisit-2",
        reqCharFlags: '+spiritual',
      },
      {
        text: "txt-cl-nativeVisit-3",
        reqCharFlags: '+moody',
      },
      {
        text: "txt-cl-nativeVisit-4",
        reqCharFlags: '+greedy',
      },
      {
        text: "txt-cl-nativeVisit-5",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-cl-nativeVisit-6",
        reqCharFlags: '+religious',
      },
      {
        text: "txt-cl-nativeVisit-7",
        reqStatus: '+racist',
      },
      {
        text: "txt-cl-nativeVisit-8",
        reqStatus: '+cannibal',
      },
      {
        text: "txt-cl-nativeVisit-9",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Native Ghosts reaction

  {
    id: 'cl-nativeGhosts',
    lines: [
      {
        text: "txt-cl-nativeGhosts",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-nativeGhosts-1",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-cl-nativeGhosts-2",
        reqCharFlags: '+spiritual',
      },
      {
        text: "txt-cl-nativeGhosts-3",
        reqCharFlags: '+moody',
      },
      {
        text: "txt-cl-nativeGhosts-4",
        reqCharFlags: '+greedy',
      },
      {
        text: "txt-cl-nativeGhosts-5",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-cl-nativeGhosts-6",
        reqCharFlags: '+religious',
      },
      {
        text: "txt-cl-nativeGhosts-7",
        reqCharFlags: '+humanoid',
      },
    ],
  },

  // Mummy

  {
    id: 'cl-mummy-attack',
    lines: [
      {
        text: "txt-cl-mummy-attack",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-cl-mummy-attack-1",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-cl-mummy-attack-2",
        reqCharFlags: '+religious',
      },
      {
        text: "txt-cl-mummy-attack-3",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-cl-mummy-attack-4",
        reqCharFlags: '+humanoid',
      },
    ],
  },

// ------ Generic Replies

  {
    id: 'reply-coward',
    lines: [
      {
        text: "txt-reply-coward",
        reqCharFlags: '+humanoid +brave'
      },
      {
        text: "txt-reply-coward-1",
        reqCharFlags: '+humanoid -special'
      },
      {
        text: "txt-reply-coward-2",
        reqCharFlags: '+humanoid +special'
      },
      {
        text: "txt-reply-coward-3",
        reqCharFlags: '+humanoid +cultist'
      }
    ]
  },
  {
    id: 'reply-religious',
    lines: [
      {
        text: "txt-reply-religious",
        reqCharFlags: '+humanoid'
      },
      {
        text: "txt-reply-religious-1",
        reqCharFlags: '+humanoid +moody'
      },
      {
        text: "txt-reply-religious-2",
        reqCharFlags: '+humanoid +spiritual'
      }
    ]
  },
  {
    id: 'reply-racist',
    lines: [
      {
        text: "txt-reply-racist-7",
        reqCharFlags: '+sterling',
      },
      {
        text: "txt-reply-racist-8",
        reqCharFlags: '-racist +humanoid',
      },
      {
        text: "txt-reply-racist-9",
        reqStatus: '+racist',
      }
    ]
  },

  {
    id: 'reply-generic',
    lines: [
      {
        text: "txt-reply-generic",
        reqCharFlags: '+sterling',
      },
      {
        text: "txt-reply-generic-1",
        reqCharFlags: '+coward',
      },
      {
        text: "txt-reply-generic-2",
        reqCharFlags: '+moody',
      },
      {
        text: "txt-reply-generic-3",
        reqCharFlags: '+spiritual',
      },
      {
        text: "txt-reply-generic-4",
        reqCharFlags: '+witty',
      },
      {
        text: "txt-reply-generic-5",
        reqCharFlags: '+brave',
      },
      {
        text: "txt-reply-generic-6",
        reqCharFlags: '+greedy',
      },
      {
        text: "txt-reply-generic-7",
        reqCharFlags: '+religious',
      },
      {
        text: "txt-reply-generic-8",
        reqStatus: '+cannibal',
      },
      {
        text: "txt-reply-generic-9",
        reqStatus: '+paranoid',
      },
      {
        text: "txt-reply-generic-10",
        reqStatus: '+angry',
      }
    ]
  },
  {
    id: 'reply-moody',
    lines: {
      text: "txt-reply-moody",
      reqCharFlags: {humanoid:true, moody:false}
    }
  },
  {
    id: 'reply-spiritual',
    lines: {
      text: "txt-reply-spiritual",
      reqCharFlags: '+humanoid -special'
    }
  },
  {
    id: 'reply-brave',
    lines: {
      text: "txt-reply-brave",
      reqCharFlags: '+humanoid -special'
    }
  },
  {
    id: 'reply-witty',
    lines: {
      text: "txt-reply-witty",
      reqCharFlags: '+humanoid'
    }
  },
  {
    id: 'reply-greedy',
    lines: [
      {
        text: "txt-reply-greedy",
        reqCharFlags: {humanoid:true, special:false, greedy:false},
      },
      {
        text: "txt-reply-greedy-1",
        reqCharFlags: {humanoid:true, special:false, greedy:true},
      }
    ]
  },

// ------ Nature

  {
    id: 'cl-nature',
    lines: [
      {
        text: "txt-cl-nature",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-nature-1",
        reqCharFlags: '+brave +humanoid',
      },
      {
        text: "txt-cl-nature-2",
        reqCharFlags: {moody: true, humanoid:true},
      },
      {
        text: "txt-cl-nature-3",
        reqCharFlags: {humanoid:true, spiritual: true},
      },
      {
        text: "txt-cl-nature-4",
        reqCharFlags: {religious: true, humanoid:true},
      },
      {
        text: "txt-cl-nature-5",
        reqCharFlags: '+greedy +humanoid',
      },
      {
        text: "txt-cl-nature-6",
        reqCharFlags: {witty: true, humanoid:true},
      },
      {
        text: "txt-cl-nature-7",
        reqCharFlags: {coward: true, humanoid:true},
      }
    ]
  },

// ------ Sprawl - Fire

  {
    id: 'cl-sprawlFire',
    lines: [
      {
        text: "txt-cl-sprawlFire",
        reqCharFlags: '-special +humanoid +cultist',
        chat: 'cl-sprawlFire-reply',
      },
      {
        text: "txt-cl-sprawlFire-1",
        reqCharFlags: '-special +humanoid +moody',
        chat: 'cl-sprawlFire-reply',
      },
      {
        text: "txt-cl-sprawlFire-2",
        reqCharFlags: '-special +humanoid +spiritual',
        chat: 'cl-sprawlFire-reply',
      },
      {
        text: "txt-cl-sprawlFire-3",
        reqCharFlags: '-special +humanoid +coward',
        chat: 'cl-sprawlFire-reply',
      },
      {
        text: "txt-cl-sprawlFire-4",
        reqCharFlags: '-special +humanoid +religious',
        chat: 'cl-sprawlFire-reply',
      },
      {
        text: "txt-cl-sprawlFire-5",
        reqCharFlags: '-special +humanoid +brave',
        chat: 'cl-sprawlFire-reply',
      },
      {
        text: "txt-cl-sprawlFire-6",
        reqStatus: {'st-pyromaniac': true},
      },
    ]
  },
  {
    id: 'cl-sprawlFire-reply',
    lines: [
      {
        text: "txt-cl-sprawlFire-reply",
        reqCharFlags: '+special',
      },
    ]
  },

  // ------ Zone - PoisonGas

    {
      id: 'cl-poisonGas',
      lines: [
        {
          text: "txt-cl-poisonGas",
          reqCharFlags: '-special +humanoid',
        },
      ]
    },

// ------ Leave - Fire

  {
    id: 'cl-startFire',
    lines: [
      {
        text: "txt-cl-startFire",
        reqCharFlags: '-special +humanoid',
      },
      {
        text: "txt-cl-startFire-1",
        reqCharFlags: '-special +humanoid +cultist',
      },
      {
        text: "txt-cl-startFire-2",
        reqCharFlags: '-special +humanoid +moody',
      },
      {
        text: "txt-cl-startFire-3",
        reqCharFlags: '-special +humanoid +spiritual',
      },
      {
        text: "txt-cl-startFire-4",
        reqCharFlags: '-special +humanoid +coward',
      },
      {
        text: "txt-cl-startFire-5",
        reqCharFlags: '-special +humanoid +religious',
      },
      {
        text: "txt-cl-startFire-6",
        reqCharFlags: '-special +humanoid +brave',
      }
    ]
  },

// ------ monsterDen

  {
    id: 'cl-monsterDen-approach',
    lines: [
      {
        text: "txt-cl-monsterDen-approach",
        reqCharFlags: '-special +humanoid',
      },
      {
        text: "txt-cl-monsterDen-approach-1",
        reqStatus: {'st-claustrophobic': true},
        reqCharFlags: '-special +humanoid',
      },
      {
        text: "txt-cl-monsterDen-approach-2",
        reqCharFlags: '+spiritual +humanoid',
      },
      {
        text: "txt-cl-monsterDen-approach-3",
        reqCharFlags: '+moody -special +humanoid',
      },
      {
        text: "txt-cl-monsterDen-approach-4",
        reqCharFlags: '+brave +humanoid',
      },
      {
        text: "txt-cl-monsterDen-approach-5",
        reqCharFlags: '+greedy +humanoid',
      }
    ]
  },
  {
    id: 'cl-monsterDen-initiative',
    lines: [
      {
        text: "txt-cl-monsterDen-initiative",
        reqCharFlags: '-special +humanoid',
      },
    ],
  },



// ------ Cave

  {
    id: 'cl-cave-approach',
    lines: [
      {
        text: "txt-cl-cave-approach",
        reqCharFlags: '-special +humanoid',
      },
      {
        text: "txt-cl-cave-approach-1",
        reqStatus: {'st-claustrophobic': true},
        reqCharFlags: '-special +humanoid',
      },
      {
        text: "txt-cl-cave-approach-2",
        reqCharFlags: '+spiritual +humanoid',
      },
      {
        text: "txt-cl-cave-approach-3",
        reqCharFlags: '+moody -special +humanoid',
      },
      {
        text: "txt-cl-cave-approach-4",
        reqCharFlags: '+brave +humanoid',
      },
      {
        text: "txt-cl-cave-approach-5",
        reqCharFlags: '+greedy +humanoid',
      }
    ]
  },
  {
    id: 'cl-cave-sendIn',
    lines: [
      {
        text: "txt-cl-cave-sendIn",
        reqStatus: {'st-claustrophobic': true},
        reqCharFlags: '+exploring',
      },
      {
        text: "txt-cl-cave-sendIn-1",
        reqStatus: {'st-claustrophobic': false},
        reqCharFlags: '+exploring',
      }
    ]
  },
  
// ------ Apply Status
  
  {
    id: 'cl-apply-pyromaniac',
    lines: {
      text: "txt-cl-apply-pyromaniac",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+pyromaniac',
    }
  },
  {
    id: 'cl-apply-superstitious',
    lines: {
      text: "txt-cl-apply-superstitious",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+superstitious'
    }
  },
  {
    id: 'cl-apply-paranoid',
    lines: {
      text: "txt-cl-apply-paranoid",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+paranoid'
    }
  },
  {
    id: 'cl-apply-claustrophobic',
    lines: {
      text: "txt-cl-apply-claustrophobic",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+claustrophobic'
    }
  },
  {
    id: 'cl-apply-lepidopterophobia',
    lines: {
      text: "txt-cl-apply-lepidopterophobia",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+lepidopterophobia'
    }
  },
  {
    id: 'cl-apply-acrophobia',
    lines: {
      text: "txt-cl-apply-acrophobia",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+acrophobia'
    }
  },
  {
    id: 'cl-apply-bipolar',
    lines: {
      text: "txt-cl-apply-bipolar",
      chat: 'reply-applyNegativeStatus',
      reqStatus: '+kleptomanic'
    }
  },
  // {
  //   id: 'cl-apply-kleptomanic',
  //   lines: {
  //     text: "[I feel so empty.]",
  //     chat: 'reply-applyNegativeStatus',
  //     reqStatus: '+kleptomanic'
  //   }
  // },

  // {
  //   id: 'cl-apply-cursed',
  //   lines: [
  //     {
  //       text: "[We are cursed!|Something is wrong.]",
  //       chat: 'reply-applyNegativeStatus',
  //     },
  //     {
  //       text: "[Shadows are following me.]",
  //       chat: 'reply-applyNegativeStatus',
  //       reqCharFlags: {'spiritual':true},
  //     }
  //   ]
  // },

// --- Sacrileg Warning

  {
    id: 'cl-sacrileg-warning',
    lines: [
      {
        text: "txt-cl-sacrileg-warning",
        reqCharFlags: '+native +humanoid',
      },
      {
        text: "txt-cl-sacrileg-warning-1",
        reqCharFlags: '-greedy +humanoid -special',
      },
      {
        text: "txt-cl-sacrileg-warning-2",
        reqCharFlags: '+spiritual +humanoid',
      }
    ]
  },

  // --- Shrine warning

  {
    id: 'cl-shrine-warning',
    lines: [
      {
        text: "txt-cl-shrine-warning",
        reqCharFlags: '+humanoid',
      },
      {
        text: "txt-cl-shrine-warning-1",
        reqCharFlags: '+humanoid +greedy',
      },
      {
        text: "txt-cl-shrine-warning-2",
        reqCharFlags: '+humanoid +brave',
      },
      {
        text: "txt-cl-shrine-warning-3",
        reqCharFlags: '+humanoid +witty',
      }
    ]
  },
  
// ---- Supersitious warning

  {
    id: 'cl-warning-superstitious',
    lines: {
      text: "txt-cl-warning-superstitious",
      reqStatus: '+superstitious'
    }
  },

// --- Shrine loot

  {
    id: 'cl-shrine-loot',
    lines: [
      {
        text: "txt-cl-shrine-loot",
        reqCharFlags: '+humanoid +greedy',
      },
      {
        text: "txt-cl-shrine-loot-1",
        reqCharFlags: '+humanoid -special',
      },
      {
        text: "txt-cl-shrine-loot-2",
        reqCharFlags: '+humanoid +native',
      }
    ]
  },

// ---- Sacrileg general

  {
    id: 'cl-sacrileg',
    lines: [
      {
        text: "txt-cl-sacrileg",
        reqCharFlags: '+native +humanoid'
      },
      {
        text: "txt-cl-sacrileg-1",
        reqCharFlags: '+native +humanoid -native'
      },
      {
        text: "txt-cl-sacrileg-fortune",
        reqCharacter: "sp-fortune",
      },
      {
        text: "txt-cl-sacrileg-huizinga",
        reqCharacter: "sp-huizinga",
      },
      {
        text: "txt-cl-sacrileg-tubman",
        reqCharacter: "sp-tubman",
      },
      {
        text: "txt-cl-sacrileg-earhart",
        reqCharacter: "sp-earhart",
      },
    ]
  },  

// ---- Sacrileg Loot

  {
    id: 'cl-sacrileg-loot',
    lines: [
      {
        text: "txt-cl-sacrileg-loot",
        reqCharFlags: '+moody +humanoid',
      },
      {
        text: "txt-cl-sacrileg-loot-1",
        chat: 'cl-sacrileg',
        reqCharFlags: '+greedy +humanoid',
      },
      {
        text: "txt-cl-sacrileg-loot-2",
        chat: 'cl-sacrileg',
        reqCharFlags: '+brave +humanoid',
      },
      {
        text: "txt-cl-sacrileg-loot-3",
        chat: 'cl-sacrileg',
        reqCharFlags: '+witty +humanoid',
      },
      {
        text: "txt-cl-sacrileg-loot-4",
        reqCharFlags: '+spiritual +humanoid',
      }
    ]
  },


// Smalltalk Reply

  // {
  //   text: "[I once had a cousin that looked like you.|You and me, we have something special.|If we keep together we'll be fine.|We just need to blend in.]",
  //   reqCharFlags: {witty: true},
  //   chat: 'reply-smalltalk',
  // },
  // {
  //   text: "[I really do not think you have done anything useful yet.|This was a terrible idea.|I just want this to end.|Whatever happens next, I am sure I will not like it.]",
  //   reqCharFlags: {moody: true},
  //   chat: 'reply-smalltalk',
  // },
  // {
  //   text: "[I am looking forward to the coming adventures!|You have my word, there is nothing to fear in this region|Rejoice, for there is nothing to be afraid of.",],
  //   reqCharFlags: {brave: true},
  //   chat: 'reply-smalltalk',
  // },
  // {
  //   text: "[There must be some valuable treasure in this region.|If we do not find more treasures this trip will be a complete waste of time.|We need to find more riches!|Indigenous artifacts sell for a good sum in the auction house.]",
  //   reqCharFlags: {greedy: true},
  //   chat: 'reply-smalltalk',
  // },
  // {
  //   text: "[Faith will guide our path.|The gods are watching us.|This land is sacred.|I can hear the spirits at night.|I feel a strong presence in this region.]",
  //   reqCharFlags: {spiritual: true},
  //   chat: 'reply-smalltalk',
  // },

  // {
  //   id: 'reply-smalltalk',
  //   lines: [
  //     {
  //       text: "[No, I do not think so.|Your presence is overwhelmingly annoying.|Why in the world do you talk so much?|Will you ever be quiet?|This is the most boring thing I have heard in days.]",
  //       reqCharFlags: {moody:true},
  //     },
  //     {
  //       text: "[It is interesting that you say that.|That reminds me of an old saying from my grandmother.|Let us do this!|Whatever it is my friend, I am here to help.]",
  //       reqCharFlags: {witty:true},
  //     },
  //     {
  //       text: "[Yes, but do you think we will find more treasure?|I do not care as long as we return home with pockets filled with gold.|That's nice and all but let's get going.|Still, those holy shrines are not looting themselves.|What matters most is the wealth that awaits us.]",
  //       reqCharFlags: {greedy:true},
  //     },
  //     {
  //       text: "[Do not worry, there is nothing we will not be able to handle.|That will not be a problem.|Just think about the adventures that await!]",
  //       reqCharFlags: {brave:true},
  //     },
  //     {
  //       text: "[Your words are heard by the wind.|Don't forget we are nothing but visitors in this sacred place.|And so say the spirits.|You need to free your mind.|Focus on each step, not the path ahead.]",
  //       reqCharFlags: {spiritual:true},
  //     }
  //   ]
  // },
  // {
  //   text: "[You are full of lies.|We are being followed.|I feel watched.|I do not trust you.|Something is out to kill us!|I saw something in the shadows...|Did you hear that?]",
  //   reqStatus: {'st-paranoid':true},
  //   chat: 'reply-idle-paranoid'
  // },
  // {
  //   id: 'reply-idle-paranoid',
  //   lines: [
  //     {
  //       text: "[Calm down my friend, getting nervous now will not help us.|You should brighten up a bit.|Let us not be pessimistic!|How about you drink some more water?]",
  //       reqCharFlags: {witty:true},
  //     },
  //     {
  //       text: "[Yeah right, we are going to die anyway.|We should just leave you behind.|Do not come closer.|You lost your mind. Just like we all will.]",
  //       reqCharFlags: {moody:true},
  //     },
  //     {
  //       text: "[Don't worry.|I will keep us safe|There is nothing to worry about.]",
  //       reqCharFlags: {brave:true},
  //     },
  //     {
  //       text: "[I sense darkness shrouding your mind.|Your spirit is in unrest.|Dark clouds follow you.]",
  //       reqCharFlags: {spiritual:true},
  //     },
  //     {
  //       text: "[Nonsense! Concentrate on the treasures.|If you die, can I have that ring?|I want your rations.]",
  //       reqCharFlags: {greedy:true},
  //     }
  //   ]
  // },
  // {
  //   text: "[We'll be fine.|Magnificent!", 'I think I dreamed about this.',],
  //   reqCharFlags: {witty: true},
  // },
  // {
  //   text: "[We need to respect the natives of this region.|We are guests here, and should behave accordingly.]",
  //   reqCharFlags: {native:true}
  // },
  // {
  //   text: "[We must not anger the gods of this land.|This area is cursed, I tell you.|We are cursed, I knew it.]",
  //   reqCharFlags: {superstitious:true}
  // },
  // {
  //   text: "[We should head in the other direction|This seems like a good direction]",
  //   reqCharFlags: {witty: true},
  // },
  // {
  //   text: "[We are ready for whatever comes next.|Lead us to the truth.|Death is only another step|Praise the sun!]",
  //   reqCharFlags: {occultist:true}
  // },
  // {
  //   text: "[You don't really know what you are doing, do you?|This is rather uncomfortable.|I knew I would regret this.|How much longer?|I want to go back.|You'll get us all killed.",  "This was a horrible idea.]",
  //   reqCharFlags: {moody:true},
  // },
  // {
  //   text: "[Im ready!|Awaiting orders!|We need a strategic assessment of the area.|Weapons ready!|Area secured.]",
  //   reqCharFlags: {soldier:true}
  // },
  // {
  //   text: "[For the crown!|I miss England.", 'Is it tea time already?|Oh dear.|Do we even have tea with us?', ],
  //   reqCharFlags: {british:true}
  // },
  // {
  //   text: "[What a lovely day!', "Adventure awaits!|We are making good progress.|Keep moving!|What could go wrong?|Thanks for playing.|Triangulation!|You are amazing!|It must be here somewhere.|We are close.]",
  //   reqCharFlags: {special: true},
  // },
  // {
  //   text: "[For science!', "Interesting...|We should document more.]",
  //   reqCharFlags: {scientist: true},
  // },
  // {
  //   text: "[There is no plot against you.|We would never betray you.|You can trust me.]",
  //   reqCharFlags: {cultist: true},
  // },
  // {
  //   text: "[This would be a great game.]",
  //   reqCharFlags: {huzinga: true},
  // },

  // Explorer quotes

  {
    id: 'cl-endWorld',
    lines:  [
      {
        text: "txt-cl-endWorld",
        reqCharacter: "sp-darwin",
      },
      {
        text: "txt-cl-endWorld-1",
        reqCharacter: "sp-curie",
      },
      {
        text: "txt-cl-endWorld-2",
        reqCharacter: "sp-burton",
      },
      {
        text: "txt-cl-endWorld-3",
        reqCharacter: "sp-selous",
      },
      {
        text: "txt-cl-endWorld-4",
        reqCharacter: "sp-kingsley",
      },
      {
        text: "txt-cl-endWorld-5",
        reqCharacter: "sp-huizinga",
      },
      {
        text: "txt-cl-endWorld-6",
        reqCharacter: "sp-garvey",
      },
      {
        text: "txt-cl-endWorld-7",
        reqCharacter: "sp-crowley",
      },
      {
        text: "txt-cl-endWorld-8",
        reqCharacter: "sp-tesla",
      },
      {
        text: "txt-cl-endWorld-9",
        reqCharacter: "sp-earhart",
      },
      {
        text: "txt-cl-endWorld-10",
        reqCharacter: "sp-neel",
      },
      {
        text: "txt-cl-endWorld-11",
        reqCharacter: "sp-fortune",
      },
      {
        text: "txt-cl-endWorld-12",
        reqCharacter: "sp-stark",
      },
      {
        text: "txt-cl-endWorld-13",
        reqCharacter: "sp-bird",
      },
      {
        text: "txt-cl-endWorld-14",
        reqCharacter: "sp-tubman",
      },
      {
        text: "txt-cl-endWorld-15",
        reqCharacter: "sp-lovelace",
      },
    ]
  },
  {
    id: 'cl-villageReligion',
    lines: [
      {
        text: "txt-cl-villageReligion",
        reqCharacter: "sp-tesla",
      },
      {
        text: "txt-cl-villageReligion-1",
        reqCharacter: "sp-darwin",
      },
      {
        text: "txt-cl-villageReligion-2",
        reqCharacter: "sp-burton",
      },
      {
        text: "txt-cl-villageReligion-3",
        reqCharacter: "sp-lovelace",
      }
    ]
  },
  {
    id: 'cl-loneSurvivor',
    lines:  [
      {
        text: "txt-cl-loneSurvivor",
        reqCharacter: "sp-neel",
      },
      {
        text: "txt-cl-loneSurvivor-1",
        reqCharacter: "sp-crowley",
      }
    ]
  },
  {
    id: 'cl-dreamVisionsTubman',
    lines: {
      text: "txt-cl-dreamVisionsTubman",
      reqCharacter: "sp-tubman",
    }
  },

  {
    id: 'cl-harbor',
    lines: [
      {
        text: "txt-cl-harbor",
        reqCharacter: "sp-curie",
      },
      {
        text: "txt-cl-harbor-1",
        reqCharacter: "sp-kingsley",
      },
      {
        text: "txt-cl-harbor-2",
        reqCharacter: "sp-burton",
      },
      {
        text: "txt-cl-harbor-3",
        reqCharacter: "sp-darwin",
      },
      {
        text: "txt-cl-harbor-4",
        reqCharacter: "sp-stark",
      },
      {
        text: "txt-cl-harbor-5",
        reqCharacter: "sp-neel",
      },
      {
        text: "txt-cl-harbor-6",
        reqCharacter: "sp-earhart",
      },
      {
        text: "txt-cl-harbor-7",
        reqCharacter: "sp-tesla",
      }
    ]
  },

  {
    id: 'cl-villageHuizinga',
    lines: {
      text:"txt-cl-villageHuizinga",
      reqCharacter: "sp-huizinga",
    }
  },
  {
    id: 'cl-shamanGarvey',
    lines: {
      text:"txt-cl-shamanGarvey",
      reqCharacter: "sp-garvey",
    }
  },
  {
    id: 'cl-eatOnlyFriend',
    lines: [
      {
        text:"txt-cl-eatOnlyFriend",
        reqCharacter: "sp-darwin",
      },
      {
        text: "txt-cl-eatOnlyFriend-1",
        reqCharacter: "sp-crowley",
      }
    ]
  },
  {
    id: 'cl-sanityFightBurton',
    lines: {
      text: "txt-cl-sanityFightBurton",
      reqCharacter: "sp-burton",
    }
  },
  {
    id: 'cl-noSanityCannibal',
    lines: {
      text: "txt-cl-noSanityCannibal",
      reqCharacter: "sp-garvey",
    }
  },
  {
    id: 'cl-stoneCircle',
    lines: {
      text: "txt-cl-stoneCircle",
      reqCharacter: "sp-fortune",  
    }
  },

// crazy talk during no sanity events

  {
    id: 'cl-noSanity',
    lines: [
      {
        slots: 5,
        text: "txt-cl-noSanity",
        reqCharFlags: '-native +humanoid -abomination'
      },
      {
        text: "txt-cl-noSanity-1",
        reqCharFlags: '+animal' 
      },
      {
        text: "txt-cl-noSanity-2",
        reqCharFlags: '+abomination'
      }
    ]
  },
  
// celebration crowd

  {
    id: 'cl-celebration-party',
    lines: [
      {
        reqCharFlags: '+humanoid -abomination',
        text: "txt-cl-celebration-party"
      },
      {
        reqStatus: '+alcoholic',
        text: "txt-cl-celebration-party-1"
      },
      {
        reqCharFlags: '+missionary',
        text: "txt-cl-celebration-party-2"
      },
      {
        reqLoyalty: '0',
        text: "txt-cl-celebration-party-3"
      },
      {
        reqStatus: '+paranoid',
        text: "txt-cl-celebration-party-4"
      },
      {
        reqStatus: '+racist',
        text: "txt-cl-celebration-party-5"
      }
    ]
  },

  {
    id: 'cl-celebration-audience',
    lines: [
      {
        slots: 5,
        text: "txt-cl-celebration-audience"
      },
      {
        charEvents: {reqCharacter:'anm-donkey'},
        text: "txt-cl-celebration-audience-1"
      },
      {
        charEvents: {reqCharFlags:'+dog'},
        text: "txt-cl-celebration-audience-2"
      },
      {
        charEvents: {reqStatus: '+alcoholic'},
        text: "txt-cl-celebration-audience-3"
      },
      {
        reqWorld: '..3',
        charEvents: {reqGender:'female', reqCharFlags:'+special'},
        text: "txt-cl-celebration-audience-4"
      },
      {
        charEvents: {reqCharFlags:'+homeWorld'},
        text: "txt-cl-celebration-audience-5"
      },
      {
        charEvents: {reqCharFlags:'+abomination|+dinosaur'},
        text: "txt-cl-celebration-audience-6"
      },
      {
        charEvents: {count:'all', reqCharFlags:'+special|+animal'},
        text: "txt-cl-celebration-audience-7"
      },
      {
        charEvents: {count:'4', reqCharFlags:'+special|+animal'},
        text: "txt-cl-celebration-audience-8"
      },
      {
        charEvents: {count:'4', reqCharFlags:'+special|+soldier'},
        text: "txt-cl-celebration-audience-9"
      },
      {
        charEvents: [
          {reqGender:'male', reqCharFlags:'+humanoid'},
          {reqGender:'female', reqCharFlags:'+humanoid'}
        ],
        text: "txt-cl-celebration-audience-10"
      },
      {
        charEvents: {reqCharFlags:'+buffalo'},
        text: "txt-cl-celebration-audience-11"
      },
    ]
  }
])