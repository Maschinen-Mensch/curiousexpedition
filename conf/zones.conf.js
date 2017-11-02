config.entities.add([
  {
    id: 'zn-hyena',
    name: "txt-zn-hyena-name",
    sprite: 'res_zones_hyena.png',
    borderImgIdx: 0,
    flags: '+hyena',
    size: [2,2],
    aggroChance: 0.5, 
    moveSpeed: 0.5,
    events: 'evt-hyena-attack'
  },
  {
    id: 'evt-hyena-attack',
    showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
    report: "txt-evt-hyena-attack-report",
    events: [
      {reqTutorial:true,  combat: [{'emy-hyena':2}]},
      {reqTutorial:false, reqWorld: '..1', combat: [{'emy-hyena':1}, {'emy-hyena':2}]},
      {reqTutorial:false, reqWorld: '2',   combat: [{'emy-hyena':2}, {'emy-hyena':3}]},
      {reqTutorial:false, reqWorld: '3',   combat: [{'emy-hyena':3}, {'emy-hyena':4}]},
      {reqTutorial:false, reqWorld: '4..',   combat: [{'emy-hyena':4}               ]},

    ]
  },
  {
    id: 'zn-hyena-black',
    name: "txt-zn-hyena-black-name",
    sprite: 'res_zones_hyenaBlack.png',
    borderImgIdx: 0,
    flags: '+hyena',
    size: [2,2],
    aggroChance: 0.5, 
    maxSeekTurns: 10,
    moveSpeed: 0.5,
    events: 'evt-hyena-black-attack'
  },
  {
    id: 'evt-hyena-black-attack',
    showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
    report: "txt-evt-hyena-black-attack-report",
    events: [
      {reqDifficulty: '0', combat: [{'emy-hyena':2, 'emy-hyena-black':1}]},
      {reqDifficulty: '1..', reqWorld: '..2', combat: [{'emy-hyena':2, 'emy-hyena-black':1}]},
      {reqDifficulty: '1..', reqWorld: '3..', combat: [{'emy-hyena':3, 'emy-hyena-black':1}]},
    ]
  },
  {
    id: 'zn-elephant',
    name: "txt-zn-elephant-name",
    sprite: 'res_zones_elephant.png',
    borderImgIdx: 1,
    aggroChance: 0.0, 
    moveSpeed: 0.35,
    events: 'evt-elephant-attack'
  },
  {
    id: 'evt-elephant-attack',
    events: [
      {
        slots:3, reqDifficulty: '0..', 
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-evt-elephant-attack-report",
        combat: [{'emy-elephant':1}]
      },
      {
        reqDifficulty: '1..', 
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-evt-elephant-attack-report-1",
        combat: [{'emy-elephant':2}]
      },
    ],
  },
  {
    id: 'zn-triceratops',
    name: "txt-zn-triceratops-name",
    sprite: 'res_zones_triceratops.png',
    borderImgIdx: 1,
    aggroChance: 0.0, 
    moveSpeed: 0.35,
    events: [
      {
        slots:3,
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-triceratops-report",
        combat: [{'emy-triceratops':1}]
      },
      {
        slots:1,
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-triceratops-report-1",
        combat: [{'emy-triceratops':2}]
      },
    ],
  },
  {
    id: 'zn-tiger',
    name: "txt-anm-tiger-title",
    sprite: 'res_zones_tiger.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75, 
    moveSpeed: 1.5,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-tiger-report",
        partyEffects: {
          optional: true,
          reqDifficulty: '1..',
          unlockCharacter: 'sp-selous',
        },
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-tiger':1}]},
          {reqDifficulty: '1..', reqWorld: '2..', prio:1, combat: [{slots:3, 'emy-tiger':1},{'emy-tiger':2}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-tiger':2}]}
        ]
      }
    ]
  },
  {
    id: 'zn-tiger-white',
    name: "txt-zn-tiger-white-name",
    sprite: 'res_zones_tigerWhite.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75, 
    moveSpeed: 2,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-tiger-white-report",
      combat: [{'emy-tiger-white':1}]
    }
  },
  {
    id: 'zn-sabertooth',
    name: "txt-zn-anm-sabertooth-title",
    sprite: 'res_zones_sabertooth.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75, 
    moveSpeed: 1.5,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-sabertooth-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-sabertooth':1}]},
          {reqDifficulty: '1..', reqWorld: '2..', prio:1, combat: [{slots:3, 'emy-sabertooth':1},{'emy-sabertooth':2}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-sabertooth':2}]}
        ]
      }
    ]
  },
  {
    id: 'zn-sabertooth-white',
    name: "txt-zn-anm-sabertooth-title",
    sprite: 'res_zones_sabertooth_white.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75, 
    moveSpeed: 1.5,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-sabertooth-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-sabertooth-white':1}]},
          {reqDifficulty: '1..', reqWorld: '2..', prio:1, combat: [{slots:3, 'emy-sabertooth-white':1},{'emy-sabertooth-white':2}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-sabertooth-white':2}]}
        ]
      }
    ]
  },
  {
    id: 'zn-polarBear',
    name: "txt-emy-polarBear-name",
    sprite: 'res_zones_polarBear.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75, 
    moveSpeed: 1.0,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-wolf-arctic-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:3, combat: [{'emy-polarBear':1}]},
          {reqDifficulty: '1..', reqWorld: '2..', prio:2, combat: [{slots:3, 'emy-polarBear':1},{'emy-polarBear':2}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-polarBear':3}]}
        ]
      }
    ]
  },
  {
    id: 'zn-walrus',
    name: "txt-emy-walrus-name",
    sprite: 'res_zones_walrus.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.5, 
    moveSpeed: 0.5,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-walrus-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:3, combat: [{'emy-walrus':1}]},
          {reqDifficulty: '1..', reqWorld: '2..', prio:2, combat: [{slots:3, 'emy-walrus':1},{'emy-walrus':2}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-walrus':3}]}
        ]
      }
    ]
  },
  {
    id: 'zn-yeti',
    name: "txt-emy-yeti-name",
    sprite: 'res_zones_yeti.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 1, 
    moveSpeed: 1,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-yeti-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', combat: [{'emy-yeti':1}]},
        ]
      }
    ]
  },
  {
    id: 'zn-wolf-arctic',
    name: "txt-emy-wolf-arctic-name",
    sprite: 'res_zones_wolf_arctic.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 1, 
    moveSpeed: 2,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-polarBear-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:4, combat: [{'emy-wolf-arctic':1}]},
          {reqDifficulty: '1..', reqWorld: '1..', prio:3, combat: [{'emy-wolf-arctic':2}]},
          {reqDifficulty: '1..', reqWorld: '3..', prio:2, combat: [{'emy-wolf-arctic':3}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-wolf-arctic':4}]}
        ]
      }
    ]
  },
  {
    id: 'zn-panther',
    name: "txt-zn-panther-name",
    sprite: 'res_zones_panther.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 1, 
    moveSpeed: 1.5,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-panther-report-1",
      events: [
        {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-panther':1}]},
        {reqDifficulty: '1..', reqWorld: '2..', prio:1, combat: [{slots:2, 'emy-panther':1}, {'emy-panther':2}]},
        {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-panther':2}]}
      ],
    },
  },
  {
    id: 'zn-gorilla',
    name: "txt-anm-gorilla-title",
    sprite: 'res_zones_gorilla.png',
    borderImgIdx: 0,
    size: [3,3],
    aggroChance: 0.4, 
    maxSeekTurns: 20,
    moveSpeed: 0.5,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-gorilla-report",
      events: [
        {reqDifficulty: '0..', reqWorld: '0..', prio:2, setPartyFlags:'+gorillaCombat', combat: [{'emy-gorilla':1}]},
        {reqDifficulty: '1..', reqWorld: '1..', prio:1, setPartyFlags:'+gorillaCombat', combat: [{slots:4, 'emy-gorilla':1},{'emy-gorilla':2}]},
        {reqDifficulty: '1..', reqWorld: '1..', prio:1, setPartyFlags:'+gorillaCombat', combat: [{'emy-gorilla':2}]}
      ]
    }
  },
  {
    id: 'zn-crocodile',
    name: "txt-zn-crocodile-name",
    sprite: 'res_zones_crocodile.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.4, 
    moveSpeed: 0.5,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-crocodile-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-crocodile':1}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-crocodile':1}, {slots:3, 'emy-crocodile':2}]}
        ],
      },
    ],
  },
  {
    id: 'zn-zombiePygmy',
    name: "txt-zn-zombiePygmy-name",
    sprite: 'res_zones_zombiePygmy.png',
    borderImgIdx: 0,
    flags: '+zombiePygmy',
    size: [2,2],
    aggroChance: 1, 
    moveSpeed: 2,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-zombiePygmy-report",
      events: [
        {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-zombiePygmy-warrior':2, 'emy-zombiePygmy-shaman':1}, {'emy-zombiePygmy-warrior':3}]},
        {reqDifficulty: '1..', reqWorld: '3..', prio:1, combat: [{'emy-zombiePygmy-warrior':4, 'emy-zombiePygmy-shaman':1}, {'emy-zombiePygmy-warrior':3, 'emy-zombiePygmy-shaman':2}]},
      ],
    },
  },
  {
    id: 'zn-abomination',
    name: "txt-zn-abomination-name",
    sprite: 'res_zones_abomination.png',
    borderImgIdx: 0,
    flags: '+abomination',
    size: [2,2],
    aggroChance: 0.5, 
    moveSpeed: 0.75,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-abomination-report-2",
      events: [
        {combat: [{'emy-abomination':1}]},
      ],
    },
  },
  {
    id: 'zn-angryNatives',
    name: "txt-zn-angryNatives-name",
    flags: '+native',
    sprite: 'res_zones_natives.png',
    borderImgIdx: 0,
    maxSeekTurns: 0, // unlimited
    size: [2,2],
    aggroChance: 1.0, 
    moveSpeed: 0.75,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-angryNatives-report",
      events: [
        {
          reqPartyFlags: '-angryNatives1 -angryNatives2 -angryNatives3 -angryNatives4',
          setPartyFlags: '+angryNatives1',
          combat: [{'emy-native-warrior':1, 'emy-native-scout':2}],
        },
        {
          reqPartyFlags: '+angryNatives1',
          setPartyFlags: '-angryNatives1 +angryNatives2',
          combat: [{'emy-native-warrior':1, 'emy-native-scout':2, 'emy-native-shaman':1}],
        },
        {
          reqPartyFlags: '+angryNatives2',
          setPartyFlags: '-angryNatives2 +angryNatives3',
          combat: [{'emy-native-warrior':2, 'emy-native-scout':2, 'emy-native-shaman':2}],
        },
        {
          reqPartyFlags: '+angryNatives3',
          setPartyFlags: '-angryNatives3 +angryNatives4',
          combat: [{'emy-native-warrior':2, 'emy-native-scout':2, 'emy-native-shaman':2}]
        },
        {
          reqPartyFlags: '+angryNatives4',
          combat: [{'emy-native-warrior':3, 'emy-native-scout':2, 'emy-native-shaman':2}]
        }
      ]
    }
  },
  {
    id: 'zn-angryLizards',
    name: "txt-zn-angryLizards-name",
    flags: '+native',
    sprite: 'res_zones_natives.png',
    borderImgIdx: 0,
    maxSeekTurns: 0, // unlimited
    size: [2,2],
    aggroChance: 1.0, 
    moveSpeed: 0.75,
    events: {
      showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
      report: "txt-zn-angryNatives-report",
      events: [
        {
          reqPartyFlags: '-angryNatives1 -angryNatives2 -angryNatives3 -angryNatives4',
          setPartyFlags: '+angryNatives1',
          combat: [{'emy-lizard-warrior':1, 'emy-lizard-scout':2}],
        },
        {
          reqPartyFlags: '+angryNatives1',
          setPartyFlags: '-angryNatives1 +angryNatives2',
          combat: [{'emy-lizard-warrior':1, 'emy-lizard-scout':2, 'emy-lizard-shaman':1}],
        },
        {
          reqPartyFlags: '+angryNatives2',
          setPartyFlags: '-angryNatives2 +angryNatives3',
          combat: [{'emy-lizard-warrior':2, 'emy-lizard-scout':2, 'emy-lizard-shaman':2}],
        },
        {
          reqPartyFlags: '+angryNatives3',
          setPartyFlags: '-angryNatives3 +angryNatives4',
          combat: [{'emy-lizard-warrior':2, 'emy-lizard-scout':2, 'emy-lizard-shaman':2}]
        },
        {
          reqPartyFlags: '+angryNatives4',
          combat: [{'emy-lizard-warrior':3, 'emy-lizard-scout':2, 'emy-lizard-shaman':2}]
        }
      ]
    }
  },
  {
    id: 'zn-raptor',
    name: "txt-zn-raptor-name",
    sprite: 'res_zones_raptor.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75, 
    moveSpeed: 1.0,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-raptor-report-1",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..',  prio:2, combat: [{'emy-raptor':1}]},
          {reqDifficulty: '1..', reqWorld: '2..4', prio:1, combat: [{'emy-raptor':1},{'emy-raptor':2}]},
          {reqDifficulty: '1..', reqWorld: '5..',  prio:1,  combat: [{'emy-raptor':2},{slots:2, 'emy-raptor':3}]}
        ],
      },
    ],
  },
  {
    id: 'zn-giantScorpion',
    name: "txt-zn-giantScorpion-name",
    sprite: 'res_zones_giantScorpion.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.75,
    moveSpeed: 0.3,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-giantScorpion-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-giantScorpion':1}]},
          {reqDifficulty: '1..', reqWorld: '3..', prio:1, combat: [{'emy-giantScorpion':2}]},
        ],
      },
    ],
  },
  {
    id: 'zn-giantSpiders',
    name: "txt-zn-giantSpiders-name",
    sprite: 'res_zones_giantSpider.png',
    borderImgIdx: 0,
    flags: '+giantSpiders',
    size: [2,2],
    aggroChance: 0.75,
    moveSpeed: 2,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-giantSpiders-report",
        events: [
          {reqDifficulty: '0',   reqWorld: '0..',  combat: [{'emy-giantSpider':2}, {'emy-giantSpider':1}]},
          {reqDifficulty: '1..', reqWorld: '0..3', combat: [{'emy-giantSpider':3}, {'emy-giantSpider':2}]},
          {reqDifficulty: '1..', reqWorld: '4..',  combat: [{'emy-giantSpider':4}, {'emy-giantSpider':3}]},
        ],
      },
    ],
  },
  {
    id: 'zn-giantBird',
    name: "txt-zn-giantBird-name",
    sprite: 'res_zones_giantBird.png',
    borderImgIdx: 0,
    size: [2,2],
    aggroChance: 0.5, 
    moveSpeed: 0.8,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-giantBird-report",
        events: [
          {reqDifficulty: '0..', reqWorld: '0..', prio:2, combat: [{'emy-giantBird':1}]},
          {reqDifficulty: '1..', reqWorld: '4..', prio:1, combat: [{'emy-giantBird':2}]},
        ],
      },
    ],
  },
  {
    id: 'zn-giantCrab',
    name: "txt-zn-giantCrab-name",
    sprite: 'res_zones_giantCrab.png',
    borderImgIdx: 0,
    size: [3,3],
    aggroChance: 0.75, 
    moveSpeed: 0.8,
    events: [
      {
        showImage: {type: 'day', src: 'evt_spec_combat_1.png'},
        report: "txt-zn-giantCrab-report",
        combat: [{'emy-giantCrab':1}],
      },
    ],
  },
  {
    id: 'zn-butterflies',
    name: "txt-zn-butterflies-name",
    tileFlags: '+jungle',
    sprite: 'res_zone_butterflies.png',
    particle: 'pt-butterflies',
    eventChance: 1.0,
    showOutline: false,
    stopTravel: false,
    canAttack: false,
    events: {
      addButterfly: {count:1}, 
      removeZone:true, 
      charEffects: {
        optional:true, 
        chance:0.5, 
        reqStatus:'+lepidopterophobia', 
        loyalty:-1, 
        chat:'cl-phobia-travel'
      }
    }
  },
  {
    id: 'zn-desertStorm',
    name: "txt-zn-desertStorm-name",
    tileFlags: '+desert',
    canAttack: false,
    particle: 'pt-spr-desertStorm',
    eventChance: 0.8,
    showOutline: false,
    stopTravel: true,
    events: {
      showImage: {src: 'evt_fxt_empty.png', type: 'day'},
      text: "txt-zn-desertStorm",
      removeZone: true,
      turns: +3,
      partyEffects: {
        posTile: {traversable:true, range:'5..7', reachable:true},
        teleport: true,  
      }        
    }
  },
])