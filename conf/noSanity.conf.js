config.entities.add([

// events

  {
    id: 'evt-sanity-conflict-joking',
    chat: 'cl-angry',
    charEffects: [
      {
        reqCharFlags: '+humanoid',
        count: 3
      },
      {
        reqLoyalty: '1..3',
        reqCharFlags: '+humanoid -special -abomination',
        text: "txt-evt-sanity-conflict-joking",
        report: "txt-evt-sanity-conflict-joking-report",
        actions: {
          actionText: "txt-evt-sanity-conflict-joking-action",
          text: "txt-evt-sanity-conflict-joking-1",
          report: "txt-evt-sanity-conflict-joking-report-1",
          loyalty: -1,
        }
      },
    ],
    actions: {
      actionText: "txt-evt-sanity-conflict-joking-action-1",
      text: "txt-evt-sanity-conflict-joking-2",
      chat: 'cl-ignore',
      report: "txt-evt-sanity-conflict-joking-report-2",
      charEffects: {
        optional: true,
        chance: 0.75,
        reqLoyalty: '2..',
        reqCharFlags: '+humanoid -special -abomination',
        text: "txt-evt-sanity-conflict-joking-3",
        report: "txt-evt-sanity-conflict-joking-report-3",
        loyalty: -1,
      }
    }
  },
  {
    id: 'evt-noSanity-ghosts-help',
    reqMaxPerWorld: 1,
    showImage: {src: 'evt_spec_nightCamp_ghosts.png', showMounted:false},
    reqKarma: 30,
    chat: 'cl-ghostiesVisit',
    text: "txt-evt-noSanity-ghosts-help",
    report: "txt-evt-noSanity-ghosts-help-report",
    actions: [
      {
        actionText: "txt-evt-noSanity-ghosts-help-action",
        loot: {
          items: [
            {slots:1, 'it-redBerries':8},
            {slots:1, 'it-mango':8},
            {slots:1, 'it-redBerries':4, 'it-mango':4},
          ],
          close: 'evt-noSanity-ghosts-help-accept',
          cancel: 'evt-noSanity-ghosts-help-reject',
        },
      },
      'evt-noSanity-ghosts-help-reject',
    ],
  },
  {
    id: 'evt-noSanity-ghosts-help-accept',
    text: "txt-evt-noSanity-ghosts-help-accept",
    report: "txt-evt-noSanity-ghosts-help-accept-report",
    karma: -30,
    partyEffects: { ref: 'evt-setImage-nightCamp' },
  },
  {
    id: 'evt-noSanity-ghosts-help-reject',
    actionText: "txt-pl-cultist-action",
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    report: "txt-evt-noSanity-ghosts-help-reject-report",
    text: "txt-evt-noSanity-ghosts-help-reject"
  },
  {
    id: 'evt-sanity-lovecraft-racist',
    charEffects: [
      {
        reqCharFlags: '+lovecraft',
      },
      {
        reqStatus: '-racist',
        reqCharFlags: '+humanoid -special -native -darkSkinned',
        setStatus: '+racist',
        chat: 'cl-lovecraftRacist',
        text: "txt-evt-sanity-lovecraft-racist",
        report: "txt-evt-sanity-lovecraft-racist-report",
      },
    ],
  },
  {
    id: 'evt-sanity-conflict-rally',
    chat: 'cl-generic',
    reqMaxPerWorld: 1,
    charEffects: [
      {
        count: 2,
        reqCharFlags: '-special +humanoid'
      },
      {
        reqCharFlags: '-special -native +humanoid',
        reqLoyalty: '2..', // should not become angry after this
        text: "txt-evt-sanity-conflict-rally",
        report: "txt-evt-sanity-conflict-rally-report",
        loyalty: -1,
        sanity: sanityBoost
      }
    ]
  },
  {
    id: 'evt-sanity-conflict-racist',
    //chat: 'cl-replace',
    reqPartyFlags: '-noSanityRacistFood',
    setPartyFlags: '+noSanityRacistFood',
    charEffects: [
      {
        reqCharFlags: '-special +native',
        text: "txt-evt-sanity-conflict-racist",
        report: "txt-evt-sanity-conflict-racist-report",
        setCharFlags: '+tempRacistVictim'
      },
      {
        reqCharFlags: '-special -native +humanoid',
        reqStatus: '+racist',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-conflict-racist-1",
        report: "txt-evt-sanity-conflict-racist-report-1",
        actions: [
          {
            actionText: "txt-evt-sanity-conflict-racist-action",
            text: "txt-evt-sanity-conflict-racist-2",
            report: "txt-evt-sanity-conflict-racist-report-2",
            loyalty: -1
          },
          {
            actionText: "txt-evt-sanity-conflict-joking-action-1",
            text: "txt-evt-sanity-conflict-racist-3",
            charEffects: {
              reqCharFlags: '+tempRacistVictim',
              setCharFlags: '-tempRacistVictim',
              loyalty: -1
            }
          }
        ]
      }
    ]
  },

// evt-sanity-conflict-sexistMale

  {
    id: 'evt-sanity-conflict-sexistMale',
    reqPartyFlags: '-noSanitySexist',
    setPartyFlags: '+noSanitySexist',
    chat: 'cl-angry',
    charEffects: [
      {
        reqStatus: '+sexist', reqGender: 'male',
        text: "txt-evt-sanity-conflict-sexistMale",
        report: "txt-evt-sanity-conflict-sexistMale-report",
        actions: {
          actionText: "txt-evt-sanity-conflict-joking-action",
          text: "txt-evt-sanity-conflict-sexistMale-1",
          report: "txt-evt-sanity-conflict-sexistMale-report-1",
          loyalty: -1,
        }
      },
      {
        reqCharFlags: '+special', reqGender: 'female'
      }
    ],
    actions: {
      actionText: "txt-evt-sanity-conflict-joking-action-1",
      text: "txt-evt-sanity-conflict-sexistMale-2",
      report: "txt-evt-sanity-conflict-sexistMale-report-2",
      charEffects: {
        optional: true,
        chance: 0.5,
        reqLoyalty: '2..',
        reqCharFlags: '+humanoid -special -abomination',
        loyalty: -1,
        text: "txt-evt-sanity-conflict-sexistMale-3",
        report: "txt-evt-sanity-conflict-sexistMale-report-3"
      }
    }
  },
  {
    id: 'evt-sanity-conflict-sexistFemale',
    reqPartyFlags: '-noSanitySexist',
    setPartyFlags: '+noSanitySexist',

    chat: 'cl-angry',
    charEffects: [
      {
        reqStatus: '+sexist', reqGender: 'female',
        text: "txt-evt-sanity-conflict-sexistFemale",
        report: "txt-evt-sanity-conflict-sexistFemale-report",
        actions: {
          actionText: "txt-evt-sanity-conflict-joking-action",
          text: "txt-evt-sanity-conflict-sexistFemale-1",
          report: "txt-evt-sanity-conflict-sexistFemale-report-1",
          loyalty: -1,
        }
      },
      {
        reqCharFlags: '+special', reqGender: 'male'
      }
    ],
    actions: {
      actionText: "txt-evt-sanity-conflict-joking-action-1",
      text: "txt-evt-sanity-conflict-sexistFemale-2",
      report: "txt-evt-sanity-conflict-sexistFemale-report-2",
      charEffects: {
        optional: true,
        chance: 0.5,
        reqLoyalty: '2..',
        reqCharFlags: '+humanoid -special -abomination',
        loyalty: -1,
        text: "txt-evt-sanity-conflict-sexistFemale-3",
        report: "txt-evt-sanity-conflict-sexistFemale-report-3"
      }
    }
  },

// evt-sanity-conflict-lostPersonalItem

  {
    id: 'evt-sanity-conflict-lostPersonalItem',
    chat: 'cl-generic',
    reqPartyFlags: '-lostPersonalItem',
    setPartyFlags: '+lostPersonalItem',

    charEffects: [
      {
        count: 'any', setCharFlags:'-tempSearching'
      },
      {
        reqCharFlags: '+humanoid -special -native -missionary',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-conflict-lostPersonalItem",
        report: "txt-evt-sanity-conflict-lostPersonalItem-report",
        setCharFlags: '+tempSearching'
      }
    ],
    actions: [
      'evt-sanity-conflict-lostPersonalItem-search',
      'evt-sanity-conflict-lostPersonalItem-ignore'
    ]
  },
  {
    id: 'evt-sanity-conflict-lostPersonalItem-search',
    actionText: "txt-evt-sanity-conflict-lostPersonalItem-search-action",
    text: "txt-evt-sanity-conflict-lostPersonalItem-search",
    report: "txt-evt-sanity-conflict-lostPersonalItem-search-report",
    reqDice: 'awarenes',
    charEffects: {
      optional: true,
      reqCharFlags: '-tempSearching +humanoid -abomination -special',
      text: "txt-evt-sanity-conflict-lostPersonalItem-search-1",
      report: "txt-evt-sanity-conflict-lostPersonalItem-search-report-1",
      chance: 0.75,
      loyalty: -1,
    },
    failEvents: [
      {
        turns: +2,
        text: "txt-evt-sanity-conflict-lostPersonalItem-search-2",
        report: "txt-evt-sanity-conflict-lostPersonalItem-search-report-2"
      },
    ],
    winEvents: [
      {
        turns: +1,
        text: "txt-evt-sanity-conflict-lostPersonalItem-search-3",
        report: "txt-evt-sanity-conflict-lostPersonalItem-search-report-3",
        sanity: sanityBoost
      },
      {
        turns: +1,
        text: "txt-evt-sanity-conflict-lostPersonalItem-search-4",
        sanity: sanityBoost,
        loot: {
          items: [
            {slots:1, 'il-trade-mission':1},
            {slots:1, 'il-trade-village':1},
            {slots:1, 'il-loot-native':1},
          ]
        }
      }
    ],
  },
  {
    id: 'evt-sanity-conflict-lostPersonalItem-ignore',
    actionText: "txt-st-kleptomania-idol-action-1",
    charEffects: {
      reqCharFlags: '+tempSearching',
      text: "txt-evt-sanity-conflict-lostPersonalItem-ignore",
      report: "txt-evt-sanity-conflict-lostPersonalItem-ignore-report",
      loyalty: -1
    }
  },

  {
    id: 'evt-sanity-challenge-climbTree',
    chat: 'cl-generic',
    reqTileFlags: '-desert -arctic',
    charEffects: {
      count: 2,
      reqCharFlags: '+humanoid -special',
      text: "txt-evt-sanity-climbTree",
      setCharFlags: '+tempClimbing'
    },
    actions: [
      {
        actionText: "txt-evt-sanity-climbTree-action",
        reqDice: 'agility',
        text: "txt-evt-sanity-climbTree-1",
        failEvents: {
          charEffects: {
            reqCharFlags: '+tempClimbing',
            text: "txt-evt-sanity-climbTree-2",
            health: -6,
          }
        },
        winEvents: {
          charEffects: {
            reqCharFlags: '+tempClimbing',
            text: "txt-evt-sanity-climbTree-3",
            loyalty: +1
          }
        }
      },
      {
        actionText: "txt-evt-sanity-climbTree-action-1",
        charEffects: {
          count: 2,
          reqCharFlags: '+tempClimbing',
          text: "txt-evt-sanity-climbTree-4",
          loyalty: -1
        }
      }
    ]
  },

  {
    id: 'evt-sanity-challenge-strength',
    charEffects: [
      {
        reqCharFlags: '+special',
        actions: 'evt-sanity-challenge-strength-yes'
      },
      {
        reqCharFlags: '+soldier | +warrior',
        reqLoyalty: '1..',
        setCharFlags: '+tempChallenger',
        text: "txt-evt-sanity-challenge-strength",
        actions: 'evt-sanity-challenge-strength-no'
      }
    ]
  },
  {
    id: 'evt-sanity-challenge-strength-yes',
    actionText: "txt-evt-sanity-challenge-strength-yes-action",
    reqDice: 'sword',
    winEvents: {
      charEffects: {
        reqCharFlags: '+tempChallenger',
        text: "txt-evt-sanity-challenge-strength-yes",
        loyalty: +1
      }
    },
    failEvents: {
      charEffects: {
        reqCharFlags: '+tempChallenger',
        text: "txt-evt-sanity-challenge-strength-yes-1",
        loyalty: -1
      }
    }
  },
  {
    id: 'evt-sanity-challenge-strength-no',
    actionText: "txt-evt-sanity-challenge-strength-no-action",
    text: "txt-evt-sanity-challenge-strength-no"
  },

  {
    id: 'evt-sanity-challenge-mind',
    charEffects: [
      {
        reqCharFlags: '+special',
        actions: 'evt-sanity-challenge-mind-yes'
      },
      {
        reqCharFlags: '+humanoid -special',
        reqLoyalty: '1..',
        setCharFlags: '+tempChallenger',
        text: "txt-evt-sanity-challenge-mind",
        actions: 'evt-sanity-challenge-mind-no'
      }
    ]
  },
  {
    id: 'evt-sanity-challenge-mind-yes',
    actionText: "txt-evt-sanity-challenge-strength-yes-action",
    reqDice: 'mind',
    winEvents: {
      charEffects: {
        reqCharFlags: '+tempChallenger',
        text: "txt-evt-sanity-challenge-mind-yes",
        loyalty: +1
      }
    },
    failEvents: {
      charEffects: {
        reqCharFlags: '+tempChallenger',
        text: "txt-evt-sanity-challenge-mind-yes-1",
        loyalty: -1
      }
    }
  },
  {
    id: 'evt-sanity-challenge-mind-no',
    actionText: "txt-evt-sanity-challenge-strength-no-action",
    text: "txt-evt-sanity-challenge-mind-no"
  },

  {
    id: 'evt-noSanity-injuredDeath',
    //chat: 'cl-replace',
    charEffects: {
      reqCharFlags: '+humanoid -special -abomination',
      reqStatus: '-cannibal +infected -renounced',
      text: "txt-evt-noSanity-injuredDeath",
      report: "txt-evt-noSanity-injuredDeath-report",
      storeCharacter: true,
      setCharFlags: '+dead',
    }
  },
  {
    id: 'evt-noSanity-eatAnimal',
    charEffects: [
      {
        count: 'any',
        reqCharFlags: '-humanoid',
        actions: {
          actionText: "txt-evt-noSanity-eatAnimal-action",
          text: "txt-evt-noSanity-eatAnimal",
          report: "txt-evt-noSanity-eatAnimal-report",
          sanity: +40,
          storeCharacter: true,
          setCharFlags: '+dead',
        }
      },
      {
        reqCharFlags: '+humanoid -special -abomination',
        text: "txt-evt-noSanity-eatAnimal-1",
        report: "txt-evt-noSanity-eatAnimal-report-1",
        actions: {
          actionText: "txt-evt-angry-demandPayment-action-1",
          text: "txt-evt-noSanity-eatAnimal-2",
          report: "txt-evt-noSanity-eatAnimal-report-2",
          loyalty: -1
        }
      }
    ]
  },
  {
    id: 'evt-noSanity-animalAttack',
    charEffects: [
      {
        reqCharFlags: '+humanoid -special -abomination',
        text: "txt-evt-noSanity-animalAttack",
        report: "txt-evt-noSanity-animalAttack-report",
        health: -3,
        actions: {
          actionText: "txt-evt-angry-demandPayment-action-1",
          text: "txt-evt-noSanity-animalAttack-1",
          report: "txt-evt-noSanity-animalAttack-report-1",
          loyalty: -2
        }
      },
      {
        reqCharFlags: '+animal',
        text: "txt-evt-noSanity-animalAttack-2",
        report: "txt-evt-noSanity-animalAttack-report-2",
        actions: {
          actionText: "txt-evt-noSanity-eatAnimal-action",
          text: "txt-evt-noSanity-animalAttack-3",
          report: "txt-evt-noSanity-animalAttack-report-3",
          sanity: +40,
          storeCharacter: true,
          setCharFlags: '+dead',
        }
      },
    ]
  },
  {
    id: 'evt-noSanity-animalRabies',
    reqBiomeFlags: '+jungle',
    charEffects: {
      reqCharFlags: '+animal +mammal',
      reqStatus: '-rabies',
      text: "txt-evt-noSanity-animalRabies",
      report: "txt-evt-noSanity-animalRabies-report",
      setStatus: '+rabies',
      health: -2
    }
  },
  {
    id: 'evt-noSanity-dinoAttack',
    charEffects: [
      {
        reqCharFlags: '+humanoid -special -abomination',
        text: "txt-evt-noSanity-dinoAttack",
        storeCharacter: true,
        setCharFlags: '+dead',
      },
      {
        reqCharFlags: '+animal +dinosaur',
        text: "txt-evt-noSanity-dinoAttack-1",
      }
    ]
  },
  {
    id: 'evt-noSanity-paranoidKill',
    //chat: 'cl-replace',
    charEffects: [
      {
        reqCharFlags: '+humanoid -special -abomination',
        reqStatus: '-paranoid', // so you kill not yourself
        text: "txt-evt-noSanity-paranoidKill",
        storeCharacter: true,
        setCharFlags: '+dead',
        report: "txt-evt-noSanity-paranoidKill-report",
      },
      {
        reqCharFlags: '+humanoid -special',
        reqStatus: '+paranoid',
        text: "txt-evt-noSanity-paranoidKill-1",
        report: "txt-evt-noSanity-paranoidKill-report-1",
      },
    ],
  },
  {
    id: 'evt-noSanity-cannibal',
    chat: 'cl-noSanityCannibal',
    charEffects: [
      {
        count: 2,
        reqCharFlags: '+humanoid -special -abomination',
        reqStatus: '-cannibal',
      },
      {
        reqCharFlags: '+humanoid -special -abomination -blessingPureMind',
        reqStatus: '-cannibal',
        text: "txt-evt-noSanity-cannibal",
        report: "txt-evt-noSanity-cannibal-report",
        setStatus: '+cannibal',
      },
      {
        reqCharFlags: '+humanoid -special -abomination',
        reqStatus: '-cannibal',
        text: "txt-evt-noSanity-cannibal-1",
        report: "txt-evt-noSanity-cannibal-report-1",
        storeCharacter: true,
        setCharFlags: '+dead',
      }
    ]
  },
  {
    id: 'evt-noSanity-gunKill',
    charEffects: {
      reqItemsFlags: '+gun',
      reqCharFlags: '+humanoid -special -abomination -blessingPureMind',
      reqStatus: '-cannibal',
      text: "txt-evt-noSanity-gunKill",
      report: "txt-evt-noSanity-gunKill-report",
      storeCharacter: true,
      setCharFlags: '+dead',
    }
  },
  {
    id: 'evt-noSanity-disappearCube',
    reqWorldFlags: '+jungle',
    reqWorld: '1..',
    charEffects: {
      reqCharFlags: '+humanoid -special -abomination',
      items: {'it-metalCube':1},
      text: "txt-evt-noSanity-disappearCube",
      report: "txt-evt-noSanity-disappearCube-report",
      storeCharacter: true,
      events: [{slots:1}, {slots:1, setCharFlags:'+traitor'}]
    }
  },
  {
    id: 'evt-noSanity-poisonAnimal',
    reqWorldFlags: '+jungle',
    charEffects: {
      reqCharFlags: '+humanoid -special -abomination',
      text: "txt-evt-noSanity-poisonAnimal",
      storeCharacter: true,
      setCharFlags: '+dead',
    }
  },
  {
    id: 'evt-noSanity-abominationCurse',
    charEffects: {
      reqCharFlags: '+humanoid -special -abomination -cultist',
      text: "txt-evt-noSanity-abominationCurse",
      setStatus: '+curse-abomination',
    }
  },
  {
    id: 'evt-noSanity-trap',
    reqWorldFlags: '-warped -arctic',
    charEffects: {
      reqCharFlags: '+humanoid -special -abomination',
      text: "txt-evt-noSanity-trap",
      report: "txt-evt-noSanity-trap-report",
      health: -4,
      setStatus: '+infected'
    }
  },
  {
    id: 'evt-noSanity-jungle-crushed',
    reqBiomeFlags: '-desert -arctic',
    text: "txt-evt-noSanity-jungle-crushed",
    charEffects: {
      reqCharFlags: '+humanoid -special -abomination',
      setCharFlags: '+crushed',
      text: "txt-evt-noSanity-jungle-crushed-1",
    },
    events: 'evt-noSanity-jungle-crushed-select'
  },
  {
    id: 'evt-noSanity-jungle-crushed-select',
    events: [
      {
        charEffects: {reqCharFlags: '+crushed', reqHealth: '0'},
        events: 'evt-noSanity-jungle-crushed-dead'
      },
      {
        prio:1, ref: 'evt-noSanity-jungle-crushed-loop'
      }
    ]
  },
  {
    id: 'evt-noSanity-jungle-crushed-loop',
    charEffects: {
      reqCharFlags: '+crushed',
      text: "txt-evt-noSanity-jungle-crushed-2",
      health: -4,
    },
    actions: [
      {
        reqDice: 'sword',
        actionText: "txt-evt-noSanity-jungle-crushed-action-yes",
        winEvents: {
          charEffects: {
            reqCharFlags: '+crushed',
            setCharFlags: '-crushed',
            text: "txt-evt-noSanity-jungle-crushed-success"
          }
        },
        failEvents: {
          text: "txt-evt-noSanity-jungle-crushed-fail",
          events: 'evt-noSanity-jungle-crushed-select'
        }  
      },
      {
        actionText: "txt-evt-noSanity-jungle-crushed-action-no",
        events: "evt-noSanity-jungle-crushed-dead"
      }
    ]
  },

  {
    id: 'evt-noSanity-jungle-crushed-dead',
    charEffects: {
      reqCharFlags: '+crushed',
      text: "txt-evt-noSanity-jungle-crushed-dead",
      storeCharacter: true,
      setCharFlags: '+dead',
    }
  },

  {
    id: 'evt-noSanity-desert-quicksand',
    reqTileFlags: '+desert',
    text: "txt-evt-noSanity-desert-quicksand",
    charEffects: [
      {
        reqCharFlags: '-special',
        text: "txt-evt-noSanity-desert-quicksand-1",
        setCharFlags: '+tempQuicksand',
        consume: true,
        actions: {
          actionText: "txt-evt-noSanity-desert-quicksand-action-rope",
          reqItems: {'it-rope':1},
          text: "txt-evt-noSanity-desert-quicksand-rope",
          items: {'it-rope':-1},
          alwaysShown: true
        }
      },
      {
        reqCharFlags: '-special +humanoid',
        optional: true,
        text: "txt-evt-noSanity-desert-quicksand-2",
        actions: {
          setCharFlags: '+tempQuicksand',
          actionText: "txt-evt-noSanity-desert-quicksand-action",
          reqDice: 'agility',
          winEvents: {
            charEffects: {
              count: 2, 
              reqCharFlags:'+tempQuicksand',
              text: "txt-evt-noSanity-desert-quicksand-win"
            }
          },
          failEvents: {
            text: "txt-evt-noSanity-desert-quicksand-fail",
            charEffects: {count:2, reqCharFlags:'+tempQuicksand', storeCharacter: true, setCharFlags: '+dead',}
          }
        }
      }
    ],
    actions: {
      actionText: "txt-evt-action-nothing",
      charEffects: {
        reqCharFlags: '+tempQuicksand',
        text: "txt-evt-noSanity-desert-quicksand-no",
        storeCharacter: true,
        setCharFlags: '+dead',
      }
    }
  },

  {
    id: 'evt-noSanity-arctic-hypothermia',
    reqBiomeFlags: '+arctic',
    charEffects: {
      reqCharFlags: '-special +humanoid',
      text: "txt-evt-noSanity-arctic-hypothermia",
      storeCharacter: true,
      setCharFlags: '+dead',
    },
  },

  {
    id: 'evt-noSanity-arctic-water',
    reqTileFlags: '+iceDanger',
    charEffects: [
      {
        reqCharFlags: '-special +humanoid',
        text: "txt-evt-noSanity-arctic-water",
        setCharFlags: '+tempVictim',
        consume: true,
      }, 
      {
        optional: true, count: 'any',
        reqCharFlags: '-special +humanoid',
        actions: {
          actionText: "txt-evt-noSanity-arctic-water-action",
          reqDice: 'agility',
          setCharFlags: '+tempDiver',
          winEvents: 'evt-noSanity-arctic-water-win',
          failEvents: 'evt-noSanity-arctic-water-fail'
        }
      }
    ],
    actions: {
      actionText: "txt-evt-noSanity-arctic-water-action-1",
      charEffects: {
        reqCharFlags: '+tempVictim',
        text: "txt-evt-noSanity-arctic-water-1",
        storeCharacter: true,
        setCharFlags: '+leftBehind'
      }
    }
  },
  {
    id: 'evt-noSanity-arctic-water-win',
    charEffects: [
      {
        reqCharFlags: '+tempVictim',
      },
      {
        reqCharFlags: '+tempDiver',
        text: "txt-evt-noSanity-arctic-water-win"
      }
    ]
  },
  {
    id: 'evt-noSanity-arctic-water-fail',
    charEffects: [
      {
        reqCharFlags: '+tempVictim',
        storeCharacter: true,
        setCharFlags: '+dead',
      },
      {
        reqCharFlags: '+tempDiver',
        text: "txt-evt-noSanity-arctic-water-fail",
        storeCharacter: true,
        setCharFlags: '+dead',
      }
    ]
  },

  {
    id: 'evt-noSanity-dropItems',
    chat: 'cl-generic',
    charEffects: {
      reqCharFlags: '-special +humanoid',
      text: "txt-evt-noSanity-dropItems",
    },
    reqItemsValue: '15..',
    dropItems: 15,
  },

  {
    id: 'evt-sanity-goodStanding-nativeVisit',
    //chat: 'cl-replace',
    reqStanding: '0..',
    reqPartyFlags: '-nativeHelp',

    standing: -3,
    setPartyFlags: '+nativeHelp',

    charEffects: {
      count: 'all',
      reqCharFlags: '-humanoid | +special' // no humans left
    },
    text: "txt-evt-sanity-goodStanding-nativeVisit",
    report: "txt-evt-sanity-goodStanding-nativeVisit-report",
    actions: [
      {
        actionText: "txt-evt-sanity-goodStanding-nativeVisit-action",
        text: "txt-evt-sanity-goodStanding-nativeVisit-1",
        items: {'il-loot-edibleNative':1},
        events: [
          { addCharacter: 'pl-native-warrior', chat:'cl-join-nativeWarrior'},
          { addCharacter: 'pl-native-shaman', chat:'cl-join-nativeShaman'},
          { addCharacter: 'pl-native-animalHandler', chat:'cl-join-nativeAnimalHandler'},
          { addCharacter: 'pl-native-scout', chat:'cl-join-nativeScout'},
        ],
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-sanity-goodStanding-nativeVisit-2",
        items: {'il-loot-edibleNative':2},
      },
    ],
  },
  {
    id: 'evt-sanity-goodStanding-nativeTeleport',
    reqStanding: '0..',
    reqPartyCount: '1',
    reqPartyFlags: '-nativeHelp',
    reqFixture: {flags:'+village', range:'..12'},

    text: "txt-evt-sanity-goodStanding-nativeTeleport",
    report: "txt-evt-sanity-goodStanding-nativeTeleport-report",

    standing: -5,
    setPartyFlags: '+nativeHelp',
    posTile: {fixtureFlags:'+village', range:'..12'},
    teleport: true,

    events: 'evt-village-setImageDay',
    pushEvent: 'evt-village-actions'
  },
  {
    id: 'evt-noSanity-onlyFriend',
    charEffects: [
      {
        reqCharFlags: '-humanoid',
        text: "txt-evt-noSanity-onlyFriend",
        report: "txt-evt-noSanity-onlyFriend-report",
      },
      {
        reqCharFlags: '+special | -humanoid',
        count: 'all'
      }
    ]
  },
  {
    id: 'evt-sanity-conflict-single',
    charEffects: {
      count: '1',
      reqCharFlags: '+humanoid -abomination -homeWorld -special',
      reqLoyalty: '1..',
      text: "txt-evt-sanity-conflict-single",
      loyalty: -1
    }
  },
  {
    id: 'evt-sanity-conflict-queen',
    charEffects: [
      {
        reqCharFlags: '-special +humanoid -soldier -native',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-conflict-queen",
        report: "txt-evt-sanity-conflict-queen-report",
        actions: {
          actionText: "txt-evt-sanity-conflict-joking-action",
          text: "txt-evt-sanity-conflict-queen-1",
          report: "txt-evt-sanity-conflict-queen-report-1",
          loyalty: -1
        }
      },
      {
        reqCharFlags: '-special +humanoid +soldier -native',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-conflict-queen-2",
        //TODO: Look into this, something went wrong with the actions
        actions: [
          {
            actionText: "txt-evt-sanity-conflict-joking-action-1",
            text: "txt-evt-sanity-conflict-queen-3",
            report: "txt-evt-sanity-conflict-queen-report-2",
          },
          {
            actionText: "txt-evt-sanity-conflict-joking-action-1",
            chat: 'cl-ignore',
            text: "txt-evt-sanity-conflict-queen-4",
            report: "txt-evt-sanity-conflict-queen-report-3",
            loyalty: -1,
          }
        ]
      }
    ]
  },
  {
    id: 'evt-sanity-conflict-traitor1',
    charEffects: [
      {
        reqCharFlags: '-special +humanoid',
        text: "txt-evt-sanity-conflict-traitor1",
        report: "txt-evt-sanity-conflict-traitor1-report",
        reqLoyalty: '1..',
        consume: true,
        actions: {
          actionText: "txt-evt-sanity-conflict-traitor1-action",
          text: "txt-evt-sanity-conflict-traitor1-1",
          report: "txt-evt-sanity-conflict-traitor1-report-1",
          loyalty: -1
        }
      },
      {
        reqCharFlags: '-special +humanoid +traitor',
        text: "txt-evt-sanity-conflict-traitor1-2",
        actions: {
          actionText: "txt-evt-sanity-conflict-traitor1-action-1",
          text: "txt-evt-sanity-conflict-traitor1-3",
          report: "txt-evt-sanity-conflict-traitor1-report-2",
          loyalty: -1,
        }
      }
    ]
  },
  {
    id: 'evt-sanity-conflict-traitor2',
    charEffects: [
      {
        reqCharFlags: '-special +humanoid +traitor',
        text: "txt-evt-sanity-conflict-traitor2",
        report: "txt-evt-sanity-conflict-traitor2-report",
        reqLoyalty: '1..',
        consume: true,
        actions: {
          actionText: "txt-evt-sanity-conflict-traitor1-action",
          text: "txt-evt-sanity-conflict-traitor2-1",
          report: "txt-evt-sanity-conflict-traitor2-report-1",
          loyalty: -1
        }
      },
      {
        reqCharFlags: '-special +humanoid',
        text: "txt-evt-sanity-conflict-traitor2-2",
        actions: {
          actionText: "txt-evt-sanity-conflict-traitor1-action-1",
          text: "txt-evt-sanity-conflict-traitor2-3",
          report: "txt-evt-sanity-conflict-traitor2-report-2",
          loyalty: -1,
        }
      }
    ]
  },
  {
    id: 'evt-sanity-conflict-missionary',
    charEffects: [
      {
        reqLoyalty: '1..',
        reqCharFlags: '-special +humanoid +missionary',
        text: "txt-evt-sanity-conflict-missionary-1",
        actions: {
          actionText: "txt-evt-sanity-conflict-missionary-action",
          text: "txt-evt-sanity-conflict-missionary-talk-1",
          loyalty: -1
        }
      },
      {
        reqLoyalty: '1..',
        reqCharFlags: '-special +humanoid -baptized',
        setCharFlags: '+baptized',
        text: "txt-evt-sanity-conflict-missionary-2",
        actions: {
          actionText: "txt-evt-sanity-conflict-missionary-action",
          text: "txt-evt-sanity-conflict-missionary-talk-2",
          loyalty: -1,
        }
      }
    ]
  },
  {
    id: 'evt-sanity-conflict-badStanding',
    text: "txt-evt-sanity-conflict-badStanding",
    charEffects: {
      reqCharFlags: '-special +humanoid +native',
      text: "txt-evt-sanity-conflict-badStanding-1",
      reqStanding: '..-4',
      reqLoyalty: '1..',
      loyalty: -1
    }
  },
  {
    id: 'evt-sanity-conflict-angry',
    charEffects: [
      {
        reqCharFlags: '-special +humanoid',
        reqLoyalty: '0',
        text: "txt-evt-sanity-conflict-angry",
      }, {
        reqCharFlags: '-special +humanoid',
        reqLoyalty: '1..',
        text: "txt-evt-sanity-conflict-angry-1",
        loyalty: -1
      }
    ]
  },
  {
    id: 'evt-noSanity-eatOnlyFriend',
    chat: 'cl-eatOnlyFriend',
    charEffects: [
      {
        reqCharFlags: '-humanoid',
        text: "txt-evt-noSanity-eatOnlyFriend",
        storeCharacter: true,
        setCharFlags: '+dead',
        report: "txt-evt-noSanity-eatOnlyFriend-report",
      },
      {
        reqCharFlags: '+special | -humanoid',
        count: 'all'
      }
    ],
    sanity: +40,
  },
  {
    id: 'evt-sanity-return-imaginary',
    reqPartyFlags: '-imaginaryFriend',
    setPartyFlags: '+imaginaryFriend',
    charEffects: {
      count: 'all',
      reqCharFlags: '+special | -humanoid' // nobody left
    },
    storeEffects: {
      reqAge: '10..',
      text: "txt-evt-sanity-return-imaginary",
      actions: [
        {
          actionText: "txt-evt-sanity-return-imaginary-action",
          text: "txt-evt-sanity-return-imaginary-1",
          report: "txt-evt-sanity-return-imaginary-report",
          restoreCharacter: true,
          setCharFlags: '+imaginary',
          loot: {items: {'il-loot-edible':1}},
          events: [
            {reqStatus: '-racist',        setStatus: '+racist'},
            {reqStatus: '-alcoholic',     setStatus: '+alcoholic'},
            {reqStatus: '-superstitious', setStatus: '+superstitious'}
          ]
        },
        {
          actionText: "txt-evt-sanity-return-imaginary-action-1",
          text: "txt-evt-sanity-return-imaginary-2",
          report: "txt-evt-sanity-return-imaginary-report-1",
        }
      ]
    }
  },
  {
    id: 'evt-noSanity-soldierHelp',
    reqPartyFlags: '-soldierHelp',
    setPartyFlags: '+soldierHelp',
    reqTurns: '200..',
    reqPartyCount: '..2',
    reqWorld: '..4',
    npc: 'pl-soldier-british',
    npcEffects: {
      text: "txt-evt-noSanity-soldierHelp",
      report: "txt-evt-noSanity-soldierHelp-report",
      sanity: sanityBoost,
      addNPC: true
    }
  },
  {
    id: 'evt-noSanity-loneSurvivor',
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    chat: 'cl-loneSurvivor',
    reqPartyFlags: '+loneSurvivor',
    setPartyFlags: '-loneSurvivor',
    text: "txt-evt-noSanity-loneSurvivor",
    report: "txt-evt-noSanity-loneSurvivor-report",
  },
  {
    id: 'evt-noSanity-lastEntryCannibal',
    reqPartyFlags: '-loneSurvivor',
    reqPartyCount: '2',
    showImage: {src: 'evt_spec_gameOver_1.png'},
    charEffects: [
      {
        reqStatus: '+cannibal',
        text: "txt-evt-noSanity-lastEntryCannibal",
        report: "txt-evt-noSanity-lastEntryCannibal-report",
        removeCharacter: true,
      },
      {
        reqCharFlags: '+special',
        report: "txt-evt-noSanity-lastEntryCannibal-report-1",
        removeCharacter: true,
      }
    ]
  },
  {
    id: 'evt-noSanity-lastEntry',
    reqPartyFlags: '-loneSurvivor',
    reqTutorial: false,
    showImage: {src: 'evt_spec_gameOver_1.png'},
    text: "txt-evt-noSanity-lastEntry",
    charEffects: [
      {
        reqCharFlags: '+special',
        count: 'all',
        text: "txt-evt-noSanity-lastEntry-1",
        report: "txt-evt-noSanity-lastEntry-report",
        removeCharacter: true,
      },
    ]
  },
])
