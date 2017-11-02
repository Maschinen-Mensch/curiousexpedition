config.entities.add([
  
// --- porters

  {
    id: 'pl-translator',
    debugCategory: 'Standard',
    title: "txt-pl-translator-title",
    description: "txt-pl-translator",
    variations: [
      {
        gender: 'male',
        name: 'parsiMale',
        sprite: 'res_porter_translator_1.png',
        portrait: 'res_face_translator_1.png'
      },
      {
        gender: 'female',
        name: 'parsiFemale', 
        sprite: 'res_porter_translator_2.png',
        portrait: 'res_face_translator_2.png'
      },
    ],
    miniSprite: 'res_porter_translator_mini.png',
    health: 4,
    capacity: 1,
    flags: '+porter +translator +humanoid +persianTranslator +darkSkinned',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:1, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-villageSanity-1', dice: 'dc-support-1'},
      {statuses: 'st-goodReputation pk-villageSanity-2', dice: 'dc-support-1'},
      {statuses: 'st-goodReputation pk-villageSanity-3', dice: 'dc-support-1 dc-support-1'},
      {statuses: 'st-goodReputation pk-villageSanity-4', dice: 'dc-support-2 dc-support-1'},
    ]
  },
  {
    id: 'pl-trader',
    debugCategory: 'Standard',
    title: "txt-pl-trader-title",
    description: "txt-pl-trader",
    variations: [
      {
        gender: 'male',
        name: 'parsiMale',
        sprite: 'res_porter_trader_1.png',
        portrait: 'res_face_trader_1.png'
      }
    ],
    miniSprite: 'res_porter_trader_mini.png',
    health: 4,
    capacity: 2, 
    flags: {
      humanoid: true,
      porter: true,
      trader: true,
      parsiTrader: true,
      darkSkinned: true,
    },
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:4, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:4, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-bartering-1', dice: 'dc-attack-1'},
      {statuses: 'pk-bartering-2', dice: 'dc-attack-1'},
      {statuses: 'pk-bartering-3', dice: 'dc-attack-1'},
      {statuses: 'pk-bartering-4', dice: 'dc-attack-1 dc-attack-1'},
    ]
  },
  {
    id: 'pl-native-starting-scout',
    title: "txt-pl-native-starting-scout-title",
    description: "txt-pl-native-starting-scout",
    debugCategory: 'Native',
    miniSprite: 'res_porter_native_scout_mini.png',
    variations: [
      {
        gender: 'male',
        name: 'native', 
        sprite: 'res_porter_native_scout_1.png',
        portrait: 'res_face_native_scout_1.png'
      },
      {
        gender: 'female',
        name: 'native', 
        sprite: 'res_porter_native_scout_2.png',
        portrait: 'res_face_native_scout_2.png'
      },
    ],
    flags: '+porter +humanoid +scout +native +nativeScout +darkSkinned',
    capacity: 2,
    health: 6,
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:2, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-viewDistance-1', dice: 'dc-defend-1'},
      {statuses: 'st-goodReputation pk-viewDistance-2', dice: 'dc-defend-1'},
      {statuses: 'st-goodReputation pk-viewDistance-3', dice: 'dc-attack-1 dc-defend-1'},
      {statuses: 'st-goodReputation pk-viewDistance-4', dice: 'dc-attack-2 dc-defend-1'},
    ]
  },
  {
    id: 'pl-native-scout',
    extends: 'pl-native-starting-scout',
    variations: [
      {
        gender: 'male',
        name: 'native', 
        sprite: 'native',
      },
      {
        gender: 'female',
        name: 'native',
        sprite: 'native',
      },
    ],
  },
  {
    id: 'pl-soldier-british',
    debugCategory: 'Standard',
    title: "txt-pl-soldier-british-title",
    description: "txt-pl-soldier-british",
    variations: [
      {
        gender: 'male',
        name: 'soldierBritish',
        sprite: 'res_porter_soldier_british_1.png',
        portrait: 'res_face_soldier_british_1.png'
      },
      {
        gender: 'male',
        name: 'soldierBritish',
        sprite: 'res_porter_soldier_british_2.png',
        portrait: 'res_face_soldier_british_2.png'
      },
    ],
    miniSprite: 'res_porter_soldier_british_mini.png',
    capacity: 2,
    health: 8,
    flags: '+porter +humanoid +soldier +soldierBritish +british',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:1, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+alcoholic'},
            {slots:2, setStatus: '+racist'},
            {slots:2, setStatus: '+sexist'},
            {slots:7, }
          ],
        }, 
        {
          events: [
            {slots:2, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+coward'},
            {slots:3, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-combatSanity-1', dice: 'dc-attack-1'},
      {statuses: 'pk-combatSanity-2', dice: 'dc-attack-1'},
      {statuses: 'pk-combatSanity-3', dice: 'dc-defend-1 dc-attack-1'},
      {statuses: 'pk-combatSanity-4', dice: 'dc-defend-1 dc-attack-2'},
    ]
  },
  {
    id: 'pl-soldier-scottish',
    debugCategory: 'Standard',
    title: "txt-pl-soldier-scottish-title",
    description: "txt-pl-soldier-scottish",
    variations: [
      {
        gender: 'male',
        name: 'scottish',
        sprite: 'res_porter_soldier_scottish_1.png',
        portrait: 'res_face_soldier_scottish_1.png'
      },
    ],
    miniSprite: 'res_porter_soldier_scottish_mini.png',
    capacity: 2,
    health: 8,
    flags: {
      porter:true,
      soldierScottish:true,
      humanoid:true,
      soldier:true,
    },
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:4, setStatus: '+alcoholic'},
            {slots:2, setStatus: '+racist'},
            {slots:2, setStatus: '+sexist'},
            {slots:7, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+coward'},
            {slots:1, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-whiskyIncrease-1', dice: 'dc-attack-1'},
      {statuses: 'pk-whiskyIncrease-2', dice: 'dc-attack-1'},
      {statuses: 'pk-whiskyIncrease-3', dice: 'dc-attack-1 dc-attack-1'},
      {statuses: 'pk-whiskyIncrease-4', dice: 'dc-attack-2 dc-attack-1'},
    ]
  },
  {
    id: 'pl-mountainTrooper',
    debugCategory: 'Standard',
    title: "txt-pl-mountainTrooper-title",
    description: "txt-pl-mountainTrooper",
    variations: [
      {
        gender: 'male',
        name: 'soldierBritish',
        sprite: 'res_porter_mountainTrooper_1.png',
        portrait: 'res_face_mountainTrooper_1.png'
      },
      {
        gender: 'male',
        name: 'soldierBritish',
        sprite: 'res_porter_mountainTrooper_2.png',
        portrait: 'res_face_mountainTrooper_2.png'
      },
      {
        gender: 'male',
        name: 'soldierBritish',
        sprite: 'res_porter_mountainTrooper_3.png',
        portrait: 'res_face_mountainTrooper_3.png'
      },
    ],
    miniSprite: 'res_porter_mountainTrooper_mini.png',
    capacity: 2,
    health: 8,
    flags: '+porter +humanoid +soldier',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:1, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+alcoholic'},
            {slots:2, setStatus: '+racist'},
            {slots:2, setStatus: '+sexist'},
            {slots:7, }
          ],
        }, 
        {
          events: [
            {slots:2, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+coward'},
            {slots:3, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-mountainTrooper-1', dice: 'dc-defend-1'},
      {statuses: 'pk-mountainTrooper-2', dice: 'dc-defend-2'},
      {statuses: 'pk-mountainTrooper-3', dice: 'dc-defend-2 dc-attack-1'},
      {statuses: 'pk-mountainTrooper-4', dice: 'dc-defend-2 dc-attack-2'},
    ]
  },
  {
    id: 'pl-sailor',
    debugCategory: 'Standard',
    title: "txt-pl-sailor-title",
    description: "txt-pl-sailor",
    miniSprite: 'res_porter_sailor_mini.png',
    capacity: 3,
    variations: [
      {
        gender:'male',
        name: 'westernCharacterMale',
        sprite: 'res_porter_sailor_1.png',
        portrait: 'res_face_sailor_1.png'
      }
    ],
    health: 6,
    flags: {
      porter:true,
      sailor:true,
      humanoid:true,
    },
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:2, setStatus: '+superstitious'},
            {slots:2, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+alcoholic'},
            {slots:1, setStatus: '+racist'},
            {slots:4, setStatus: '+sexist'},
            {slots:7, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:3, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+coward'},
            {slots:1, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-flare-1', dice: 'dc-defend-1 dc-defend-1'},
      {statuses: 'pk-flare-2', dice: 'dc-defend-1 dc-defend-1'},
      {statuses: 'pk-flare-3', dice: 'dc-defend-2 dc-defend-1'},
      {statuses: 'pk-flare-4', dice: 'dc-defend-2 dc-defend-1'},
    ]
  },
  {
    id: 'pl-missionary',
    title: "txt-pl-missionary-title",
    description: "txt-pl-missionary",
    flags: '+porter +religious +missionary +humanoid',
    miniSprite: 'res_porter_missionary_mini.png',
    health: 4,
    capacity: 1,
    variations: [
      {
        gender:'male',
        name: 'missionary',
        sprite: 'res_porter_missionary_1.png',
        portrait: 'res_face_missionary_1.png'
      },
      {
        gender:'male',
        name: 'missionary',
        sprite: 'res_porter_missionary_2.png',
        portrait: 'res_face_missionary_2.png'
      },
      {
        gender:'female',
        name: 'missionaryFemale',
        sprite: 'res_porter_missionary_female_1.png',
        portrait: 'res_face_missionary_3.png',
        miniSprite: 'res_porter_missionary_female_mini.png',
      },
      {
        gender:'female',
        name: 'missionaryFemale',
        sprite: 'res_porter_missionary_female_1.png',
        portrait: 'res_face_missionary_3.png',
        miniSprite: 'res_porter_missionary_female_mini.png',
      },
    ],
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:1, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+alcoholic'},
            {slots:2, setStatus: '+racist'},
            {slots:2, setStatus: '+sexist'},
            {slots:5, }
          ],
        },
        {
          events: [
            {slots:3, setCharFlags: '+moody'},
            {slots:3, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:3, setCharFlags: '+coward'},
            {slots:1, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-maxSanity-1 pk-spiritualSolidarity', dice: 'dc-defend-1'},
      {statuses: 'pk-maxSanity-2 pk-spiritualSolidarity', dice: 'dc-defend-1'},
      {statuses: 'pk-maxSanity-3 pk-spiritualSolidarity', dice: 'dc-defend-1'},
      {statuses: 'pk-maxSanity-4 pk-spiritualSolidarity', dice: 'dc-defend-1'},
    ],
    debugCategory: 'Standard',
  },
  {
    id: 'pl-cook',
    debugCategory: 'Standard',
    title: "txt-pl-cook-title",
    description: "txt-pl-cook",
    miniSprite: 'res_porter_cook_mini.png',
    health: 6,
    capacity: 2,
    flags: '+true +cook +humanoid',
    variations: [
      {
        gender: 'male',
        name: 'frenchMale',
        sprite: 'res_porter_cook_1.png',
        portrait: 'res_face_cook_1.png'
      },
      {
        gender: 'female',
        name: 'frenchFemale',
        sprite: 'res_porter_cook_2.png',
        portrait: 'res_face_cook_2.png'
      },
    ],
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:1, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+alcoholic'},
            {slots:2, setStatus: '+racist'},
            {slots:1, setStatus: '+sexist'},
            {slots:5, }
          ],
        },
        {
          events: [
            {slots:3, setCharFlags: '+moody'},
            {slots:3, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:3, setCharFlags: '+coward'},
            {slots:1, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-cookSanity-1', dice: 'dc-defend-1'},
      {statuses: 'pk-cookSanity-2', dice: 'dc-defend-1'},
      {statuses: 'pk-cookSanity-3', dice: 'dc-defend-1 dc-defend-1'},
      {statuses: 'pk-cookSanity-4', dice: 'dc-defend-1 dc-defend-1'},
    ]
  },
  {
    id: 'pl-cultist',
    debugCategory: 'Standard',
    title: "txt-pl-cultist-title",
    description: "txt-pl-cultist",
    miniSprite: 'res_porter_cultist_mini.png',
    health: 4,
    variations: [
      {
        gender: 'male',
        name: 'westernCharacterMale',
        sprite: 'res_porter_cultist_1.png',
        portrait: 'res_face_occultist_1.png'
      },
      {
        gender: 'male',
        name: 'westernCharacterMale',
        sprite: 'res_porter_cultist_2.png',
        portrait: 'res_face_occultist_2.png'
      },
      {
        gender: 'male',
        name: 'westernCharacterMale',
        sprite: 'res_porter_cultist_3.png',
        portrait: 'res_face_occultist_3.png'
      },
      {
        gender: 'male',
        name: 'westernCharacterMale',
        sprite: 'res_porter_cultist_4.png',
        portrait: 'res_face_occultist_4.png'
      },
      {
        gender: 'male',
        name: 'westernCharacterMale',
        sprite: 'res_porter_cultist_5.png',
        portrait: 'res_face_occultist_5.png'
      },
      {
        gender: 'female',
        name: 'westernCharacterFemale',
        sprite: 'res_porter_cultist_6.png',
        portrait: 'res_face_occultist_6.png'
      },
      {
        gender: 'female',
        name: 'westernCharacterFemale',
        sprite: 'res_porter_cultist_7.png',
        portrait: 'res_face_occultist_7.png'
      },
    ],
    capacity: 2,
    flags: '+porter +humanoid +cultist',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:1, setStatus: '+claustrophobic'},
            {slots:1, setStatus: '+paranoid'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:1, setStatus: '+alcoholic'},
            {slots:1, setStatus: '+racist'},
            {slots:1, setStatus: '+sexist'},
            {slots:2, }
          ],
        },
        {
          events: [
            {slots:3, setCharFlags: '+moody'},
            {slots:3, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:3, setCharFlags: '+coward'},
            {slots:1, setCharFlags: '+brave'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-cocaIncrease-1', dice: 'dc-attack-1'},
      {statuses: 'pk-cocaIncrease-2', dice: 'dc-attack-1'},
      {statuses: 'pk-cocaIncrease-3', dice: 'dc-attack-1 dc-attack-1'},
      {statuses: 'pk-cocaIncrease-4', dice: 'dc-attack-1 dc-attack-1 dc-attack-1'},
    ]
  },
  {
    id: 'pl-abomination',
    debugCategory: 'Special',
    title: "txt-pl-abomination-title",
    name:'Abomination',
    description: "txt-pl-abomination",
    miniSprite: 'res_porter_abomination_mini.png',
    health: 12,
    variations: [
      {
        gender: 'male',
        sprite: 'emy_abomination_1.png',
        portrait: 'res_face_abomination_1.png',
      },
    ],
    capacity: 3,
    flags: '+abomination -humanoid',
    levels: [
      {statuses:'st-abomination-eat', dice:'dc-abomination-1 dc-abomination-2'},
    ],
  },
  {
    id: 'pl-artist',
    debugCategory: 'Standard',
    title: "txt-pl-artist-title",
    description: "txt-pl-artist",
    miniSprite: 'res_porter_artist_mini.png',
    health: 4,
    variations: [
      {
        gender: 'female',
        name: 'frenchFemale',
        sprite: 'res_porter_artist_1.png',
        portrait: 'res_face_artist_1.png'
      },
      {
        gender: 'male',
        name: 'frenchMale',
        sprite: 'res_porter_artist_2.png',
        portrait: 'res_face_artist_2.png'
      },
    ],
    capacity: 1,
    flags: {
      porter:true,
      artist:true,
      humanoid:true,
    },
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:1, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+brave'},
            {slots:3, setCharFlags: '+coward'},
            {slots:4, setCharFlags: '+spiritual'},
            {slots:1, setCharFlags: '+religious'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-artist-1', dice: 'dc-support-1'},
      {statuses: 'pk-artist-2', dice: 'dc-support-2'},
      {statuses: 'pk-artist-3', dice: 'dc-support-1 dc-support-2'},
      {statuses: 'pk-artist-4', dice: 'dc-support-2 dc-support-2'},
    ]
  },
  {
    id: 'pl-tim',
    name: 'Tim Timster',
    title: "txt-pl-tim-title",
    description: "txt-pl-tim",
    debugCategory: 'Special',
    miniSprite: 'res_porter_tim_mini.png',
    health: 6,
    variations: {
      gender:'male',
      sprite: 'res_porter_tim.png',
      portrait:'res_face_tim.png'
    },
    capacity: 2,
    flags: {
      porter: true,
      tim: true,
      humanoid: true,
    },
    spawnEvents: {
      setCharFlags: '+witty',
    },
    levels: [
      {statuses: 'pk-journalist-1', dice: 'dc-support-1'},
      {statuses: 'pk-journalist-2', dice: 'dc-support-2'},
      {statuses: 'pk-journalist-3', dice: 'dc-support-2 dc-attack-1'},
      {statuses: 'pk-journalist-4', dice: 'dc-support-2 dc-attack-1'},
    ]
  },
  {
    id: 'pl-sterling',
    name: 'James Sterling',
    title: "txt-pl-sterling-title",
    description: "txt-pl-sterling",
    debugCategory: 'Special',
    miniSprite: 'res_porter_sterling_mini.png',
    health: 6,
    variations: {
      gender:'male',
      sprite: 'res_porter_sterling.png',
      portrait:'res_face_sterling.png'
    },
    capacity: 2,
    flags: {
      porter:   true,
      sterling: true,
      humanoid: true,
      british:  true,
    },
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+witty'}
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-bartering-1', dice: 'dc-attack-1'},
      {statuses: 'pk-bartering-2', dice: 'dc-attack-1'},
      {statuses: 'pk-bartering-3', dice: 'dc-support-1 dc-attack-1'},
      {statuses: 'pk-bartering-4', dice: 'dc-support-1 dc-attack-2'},
    ]
  },
  {
    id: 'pl-bedouin',
    title: "txt-pl-bedouin-title",
    description: "txt-pl-bedouin",
    debugCategory: 'Native',
    miniSprite: 'res_porter_beduin_mini.png',
    health: 8,
    variations: [
      {
        gender:'male',
        name: 'arabianCharacterMale',
        sprite: 'res_porter_bedouin_1.png',
        portrait:'res_face_bedouin_1.png'
      },
      {
        gender:'female',
        name: 'arabianCharacterFemale',
        sprite: 'res_porter_bedouin_2.png',
        portrait:'res_face_bedouin_2.png'
      },
    ],
    capacity: 1,
    flags: '+porter +bedouin +humanoid +darkSkinned',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:4, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'pk-discoverOasis-1', dice: 'dc-defend-2'},
      {statuses: 'pk-discoverOasis-2', dice: 'dc-defend-2'},
      {statuses: 'pk-discoverOasis-3', dice: 'dc-defend-2 dc-attack-1'},
      {statuses: 'pk-discoverOasis-4', dice: 'dc-defend-2 dc-attack-2 dc-support-1'},
    ]
  },
  {
    id: 'pl-native-starting-shaman',
    title: "txt-pl-native-starting-shaman-title",
    description: "txt-pl-native-starting-shaman",
    debugCategory: 'Native',
    miniSprite: 'res_porter_native_shaman_mini.png',
    health: 6,
    variations: [
      {
        gender: 'male',
        name: 'native',
        sprite: 'res_porter_native_shaman_1.png',
        portrait: 'res_face_native_shaman_1.png'
      },
    ],
    capacity: 2,
    flags: '+porter +native +nativeShaman +humanoid +darkSkinned',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:1, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:4, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-mushroomSanity-1', dice: 'dc-shaman-1'},
      {statuses: 'st-goodReputation pk-mushroomSanity-2', dice: 'dc-shaman-2'},
      {statuses: 'st-goodReputation pk-mushroomSanity-3', dice: 'dc-shaman-2 dc-support-1'},
      {statuses: 'st-goodReputation pk-mushroomSanity-4', dice: 'dc-shaman-2 dc-support-2'},
    ]
  },
  {
    id: 'pl-native-shaman',
    extends: 'pl-native-starting-shaman',
    variations: [
      {
        gender: 'male',
        name: 'native', 
        sprite: 'native'
      },
      {
        gender: 'female',
        name: 'native',
        sprite: 'native'
      },
    ],
  },
  {
    id: 'pl-native-starting-warrior',
    title: "txt-pl-native-starting-warrior-title",
    description: "txt-pl-native-starting-warrior",
    debugCategory: 'Native',
    miniSprite: 'res_porter_native_warrior_mini.png',
    health: 8,
    variations: [
      {
        gender: 'male',
        name: 'native',
        sprite: 'res_porter_native_warrior_1.png',
        portrait: 'res_face_native_warrior_1.png'
      },
      {
        gender: 'female',
        name: 'native',
        sprite: 'res_porter_native_warrior_2.png',
        portrait: 'res_face_native_warrior_2.png'
      },
    ],
    capacity: 2,
    flags: '+porter +nativeWarrior +native +warrior +humanoid +darkSkinned',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:3, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:2, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-combatChance-1', dice: 'dc-attack-1'},
      {statuses: 'st-goodReputation pk-combatChance-2', dice: 'dc-attack-1'},
      {statuses: 'st-goodReputation pk-combatChance-3', dice: 'dc-defend-1 dc-attack-1'},
      {statuses: 'st-goodReputation pk-combatChance-4', dice: 'dc-defend-2 dc-attack-1'},
    ]
  },
  {
    id: 'pl-native-warrior',
    extends: 'pl-native-starting-warrior',
    variations: [
      {
        gender: 'male',
        name: 'native', 
        sprite: 'native'
      },
      {
        gender: 'female',
        name: 'native', 
        sprite: 'native'
      },
    ],
  },
  {
    id: 'pl-native-starting-animalHandler',
    title: "txt-pl-native-starting-animalHandler-title",
    description: "txt-pl-native-starting-animalHandler",
    debugCategory: 'Native',
    miniSprite: 'res_porter_animalHandler_mini.png',
    health: 4,
    variations: [
      {
        gender: 'male',
        name: 'native',
        sprite: 'res_porter_native_animalHandler_1.png',
        portrait: 'res_face_animalHandler_1.png'
      },
      {
        gender: 'female',
        name: 'native',
        sprite: 'res_porter_native_animalHandler_2.png',
        portrait: 'res_face_animalHandler_2.png'
      },
    ],
    capacity: 1,
    flags: '+porter +nativeAnimalHandler +native +humanoid +darkSkinned',
    spawnEvents: {
      partyEffects: [
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:2, setStatus: '+sexist'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:3, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:2, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-handlerCapacity-1', dice: 'dc-defend-1'},
      {statuses: 'st-goodReputation pk-handlerCapacity-2', dice: 'dc-defend-1'},
      {statuses: 'st-goodReputation pk-handlerCapacity-3', dice: 'dc-defend-1 dc-support-1'},
      {statuses: 'st-goodReputation pk-handlerCapacity-4', dice: 'dc-defend-2 dc-support-1'},
    ]
  },
  {
    id: 'pl-native-animalHandler',
    extends: 'pl-native-starting-animalHandler',
    variations: [
      {
        gender: 'male',
        name: 'native', 
        sprite: 'native',
      },
      {
        gender: 'female',
        name: 'native', 
        sprite: 'native',
      },
    ],
  },
  {
    id: 'pl-native-animalHandler-inuit',
    extends: 'pl-native-starting-animalHandler',
    miniSprite: 'res_porter_inuit_mini.png',
    variations: [
      { gender: 'male', name: 'native', sprite: 'res_porter_inuit_m_1.png', portrait: 'res_face_inuit_m_1.png' },
      { gender: 'male', name: 'native', sprite: 'res_porter_inuit_m_2.png', portrait: 'res_face_inuit_m_2.png' },
      { gender: 'male', name: 'native', sprite: 'res_porter_inuit_m_3.png', portrait: 'res_face_inuit_m_3.png' },
      { gender: 'male', name: 'native', sprite: 'res_porter_inuit_f_1.png', portrait: 'res_face_inuit_f_1.png' },
      { gender: 'male', name: 'native', sprite: 'res_porter_inuit_f_2.png', portrait: 'res_face_inuit_f_2.png' },
      { gender: 'male', name: 'native', sprite: 'res_porter_inuit_f_3.png', portrait: 'res_face_inuit_f_3.png' },
    ],
  },
  {
    id: 'pl-lizard-warrior',
    title: "txt-pl-lizard-warrior-title",
    description: "txt-pl-lizard-warrior",
    debugCategory: 'lizard',
    miniSprite: 'res_porter_lizard_1_mini.png',
    health: 8,
    variations: [
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_1.png', portrait: 'res_face_lizard_1.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_2.png', portrait: 'res_face_lizard_2.png',
        miniSprite: 'res_porter_lizard_2_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_3.png', portrait: 'res_face_lizard_3.png',
        miniSprite: 'res_porter_lizard_3_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_6.png', portrait: 'res_face_lizard_6.png',
        miniSprite: 'res_porter_lizard_6_mini.png',
      },
    ],
    capacity: 2,
    flags: '+porter +lizard +native +humanoid +warrior',
    spawnEvents: {
      partyEffects: [
        { setStatus: {'pk-waterproof':true} },
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:1, setCharFlags: '+moody'},
            {slots:1, setCharFlags: '+greedy'},
            {slots:1, setCharFlags: '+witty'},
            {slots:3, setCharFlags: '+brave'},
            {slots:1, setCharFlags: '+coward'},
            {slots:2, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-combatChance-1', dice: 'dc-lizard-1'},
      {statuses: 'st-goodReputation pk-combatChance-2', dice: 'dc-lizard-2'},
      {statuses: 'st-goodReputation pk-combatChance-3', dice: 'dc-defend-1 dc-lizard-2'},
      {statuses: 'st-goodReputation pk-combatChance-4', dice: 'dc-defend-2 dc-lizard-2'},
    ]
  },
  {
    id: 'pl-lizard-shaman',
    title: "txt-pl-lizard-shaman-title",
    description: "txt-pl-lizard-warrior",
    debugCategory: 'lizard',
    miniSprite: 'res_porter_lizard_1_mini.png',
    health: 6,
    variations: [
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_4.png', 
        portrait: 'res_face_lizard_4.png',
        miniSprite: 'res_porter_lizard_4_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_5.png', 
        portrait: 'res_face_lizard_5.png',
        miniSprite: 'res_porter_lizard_5_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_6.png', 
        portrait: 'res_face_lizard_6.png',
        miniSprite: 'res_porter_lizard_6_mini.png',
      },
    ],
    capacity: 2,
    flags: '+porter +lizard +native +humanoid +shaman',
    spawnEvents: {
      partyEffects: [
        { setStatus: {'pk-waterproof':true} },
        {
          events: [
            {slots:2, setStatus: '+claustrophobic'},
            {slots:3, setStatus: '+superstitious'},
            {slots:1, setStatus: '+kleptomania'},
            {slots:10, }
          ],
        }, 
        {
          events: [
            {slots:6, setCharFlags: '+spiritual'},
          ],
        },
      ],        
    },
    levels: [
      {statuses: 'st-goodReputation pk-mushroomSanity-1', dice: 'dc-shaman-1'},
      {statuses: 'st-goodReputation pk-mushroomSanity-2', dice: 'dc-shaman-2'},
      {statuses: 'st-goodReputation pk-mushroomSanity-3', dice: 'dc-shaman-2 dc-lizard-1'},
      {statuses: 'st-goodReputation pk-mushroomSanity-4', dice: 'dc-shaman-2 dc-lizard-2'},
    ]
  },
  
  {
    id: 'pl-village-escort',
    debugCategory: 'Special',
    extends: 'pl-native-starting-shaman',
    description: "txt-pl-village-escort",
    imgSlot: 'npc2',
    flags: '+porter +escortVillager +native +humanoid +darkSkinned',
    variations: [
      {gender:'female', name:'native', sprite:'native'},
    ],
    levels: [
      {statuses: 'st-zeroSlot'}
    ]
  },
])
