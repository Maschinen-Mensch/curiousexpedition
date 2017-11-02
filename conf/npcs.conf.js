config.entities.add([
  
  {
    id: 'npc-gentleman',
    title: "txt-npc-gentleman-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-gentleman",
    variations: [
      {gender:'male', name:'westernCharacterMale', sprite:'res_npc_gentleman.png'},
    ],
  },
  {
    id: 'npc-slaver',
    title: "txt-npc-slaver-title",
    debugCategory: 'NPC',
    isNPC: true,
    health: 12,
    imgSlot: 'npc2',
    description: "txt-npc-slaver",
    variations: [
      {gender:'male', name:'arabianCharacterMale', sprite:'res_npc_slaver_1.png'},
    ],
  },
  {
    id: 'npc-trader',
    title: "txt-npc-trader-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-trader",
    variations: [
      {gender:'male', name:'parsiMale', sprite:'res_npc_trader_1.png'},
    ],
  },
  {
    id: 'npc-arcticResearcher',
    title: "txt-npc-arcticResearcher-title",
    debugCategory: 'NPC',
    isNPC: true,
    flags: '+arcticResearcher',
    description: "txt-npc-trader",
    variations: [
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_1.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_2.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_3.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_4.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_5.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_6.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_7.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_8.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_9.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_10.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_11.png'},
      {gender:'male', name:'arcticResearcher', sprite:'res_npc_arcticResearcher_12.png'},
    ],
  },
  {
    id: 'npc-saddleArtisan',
    title: "txt-npc-saddleArtisan-title",
    debugCategory: 'NPC',
    isNPC: true,
    name: "txt-npc-saddleArtisan-name",
    description: "txt-npc-saddleArtisan",
    variations: [
      {gender:'female', sprite:'res_npc_saddleArtisan_1.png'},
    ],
  },
  {
    id: 'npc-village-escort-husband',
    debugCategory: 'NPC',
    isNPC: true,
    title: "txt-npc-village-escort-husband-title",
    name: "txt-npc-village-escort-husband-name",
    description: "txt-npc-village-escort-husband",
    variations: [
      {gender:'male', sprite:'res_npc_nativeEscortHusband.png'},
    ],
  },

// Native Villagers

  {
    id: 'npc-native-generic',
    title: "txt-npc-native-generic-title",
    debugCategory: 'NPC', isNPC: true,
    description: "txt-npc-native-generic",
    variations: [
      {gender:'male', name:'native', sprite:'native'},
      {gender:'female', name:'native', sprite:'native'},
    ],
  },
  {
    id: 'npc-native-generic-chief',
    title: "txt-npc-native-generic-chief-title",
    debugCategory: 'NPC', isNPC: true,
    description: "txt-npc-native-generic-chief",
    variations: [
      {gender:'male', name:'native', sprite:'native'},
      {gender:'female', name:'native', sprite:'native'},
    ],
  },

// Inuit Villagers

  {
    id: 'npc-native-inuit',
    title: "txt-npc-native-generic-title",
    debugCategory: 'NPC', isNPC: true,
    description: "txt-npc-native-generic",
    variations: [
      {gender:'male', name:'native', sprite:'native'},
      {gender:'female', name:'native', sprite:'native'},
    ],
  },
  {
    id: 'npc-native-inuit-chief',
    title: "txt-npc-native-generic-chief-title",
    debugCategory: 'NPC', isNPC: true,
    description: "txt-npc-native-generic-chief",
    variations: [
      {gender:'male', name:'native', sprite:'native'},
      {gender:'female', name:'native', sprite:'native'},
    ],
  },

// Lizard Villagers

  {
    id: 'npc-village-lizard-generic',
    title: "txt-npc-village-lizard-generic-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-pl-lizard-warrior",
    variations: [
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_1.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_2.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_3.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_5.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_6.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_7.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_8.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_9.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_10.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_11.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_12.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_13.png'},
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_14.png'},
    ],
  },
  {
    id: 'npc-village-lizard-chief',
    title: "txt-npc-village-lizard-chief-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-village-lizard-chief",
    variations: [
      {gender:'hybrid', name:'lizard', sprite:'res_npc_lizard_4.png'},
    ],
  },
  {
    id: 'npc-missionary',
    title: "txt-pl-missionary-title",
    flags: '+missionary',
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-missionary",
    variations: [
      {gender:'male', name:'missionary', sprite:'res_porter_missionary_1.png'},
    ],
  },
  {
    id: 'npc-mangoWoman',
    title: "txt-npc-wife-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-mangoWoman",
    variations: [
      {gender:'female', name:'westernCharacterFemale', sprite:'res_npc_celebration_11.png'},
    ],
  },
  {
    id: 'npc-schroedinger',
    title: "txt-npc-schroedinger-title",
    debugCategory: 'NPC',
    isNPC: true,
    description: "txt-npc-schroedinger",
    name:'Erwin Schrödinger',
    variations: [
      {gender:'male', sprite:'res_npc_celebration_6.png'},
    ],
  },
  {
    id: 'npc-nativeGhost-1',
    title: "txt-npc-nativeGhost-1-title",
    debugCategory: 'NPC',
    isNPC: true,
    health: 0,
    name: "txt-npc-nativeGhost-1-name",
    description: "txt-npc-nativeGhost-1",
    isLeftFacingSprite: true,
    variations: [
      {gender:'male', sprite:'res_npc_nativeGhost_1.png'},
    ],
  },
  {
    id: 'npc-nativeGhost-2',
    extends: 'npc-nativeGhost-1',
    variations: [
      {gender:'male', sprite:'res_npc_nativeGhost_2.png'},
    ],
  },
  {
    id: 'npc-nativeGhost-3',
    extends: 'npc-nativeGhost-1',
    variations: [
      {gender:'male', sprite:'res_npc_nativeGhost_3.png'},
    ],
  },
  {
    id: 'npc-nativeGhost-4',
    extends: 'npc-nativeGhost-1',
    variations: [
      {gender:'male', sprite:'res_npc_nativeGhost_4.png'},
    ],
  },

  {
    id: 'npc-ghostie',
    title: "txt-npc-ghostie-title",
    debugCategory: 'NPC',
    isNPC: true,
    health: 0,
    name: "txt-npc-nativetxt-npc-nativeGhost-1-name-1-name",
    description: "txt-npc-ghostie",
    variations: [
      {gender:'hyrbid', sprite:'res_npc_ghostie_1.png'},
      {gender:'hyrbid', sprite:'res_npc_ghostie_2.png'},
      {gender:'hyrbid', sprite:'res_npc_ghostie_3.png'},
      {gender:'hyrbid', sprite:'res_npc_ghostie_4.png'},
      {gender:'hyrbid', sprite:'res_npc_ghostie_5.png'},
      {gender:'hyrbid', sprite:'res_npc_ghostie_6.png'},
      {gender:'hyrbid', sprite:'res_npc_ghostie_7.png'},
    ],
  },
  
])
