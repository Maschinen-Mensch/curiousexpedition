config.entities.add([

  {
    id: 'anm-donkey', 
    title: "txt-anm-donkey-title",
    description: "txt-anm-donkey",
    debugCategory: 'Pack Animal',
    miniSprite: 'res_anm_donkey_mini.png',
    health: 8,
    isMountable: true,
    flags: '+animal +packAnimal +mammal',
    variations: [
      {
        gender: 'male',
        name: 'animalMale',
        sprite: 'res_anm_donkey_1.png',
        portrait: 'res_face_donkey_1.png'
      },
      {
        gender: 'female',
        name: 'animalFemale',
        sprite: 'res_anm_donkey_2.png',
        portrait: 'res_face_donkey_2.png'
      },
      {
        gender: 'male',
        name: 'animalMale',
        sprite: 'res_anm_donkey_3.png',
        portrait: 'res_face_donkey_3.png'
      },
    ],
    extraSprites: {
      crates: 'res_anm_donkey_crates.png',
      saddle: 'res_anm_donkey_saddle.png',
    },
    mountedStatuses: 'st-mount-1',
    mountedDice: 'dc-donkey-1!4',
    capacity: 3,
    bonus: [
      {capacity:-1, reqMounted:true},
    ],
    levels: [
      {},
      {dice: 'dc-donkey-1!4'},
      {dice: 'dc-donkey-1!5'},
      {dice: 'dc-donkey-1!6'},
    ],
  },
  {
    id: 'anm-waterBuffalo',
    title: "txt-anm-waterBuffalo-title",
    description: "txt-anm-waterBuffalo",
    debugCategory: 'Pack Animal',
    variations: [
      {
        gender: 'male',
        name: 'animalMale',
        sprite: 'res_anm_buffalo_1.png',
        portrait: 'res_face_buffalo_1.png'
      },
      {
        gender: 'female',
        name: 'animalFemale',
        sprite: 'res_anm_buffalo_2.png',
        portrait: 'res_face_buffalo_1.png'
      }
    ],
    extraSprites: {
      crates: 'res_anm_buffalo_crates.png',
      saddle: 'res_anm_buffalo_saddle.png',
    },
    isMountable: true,
    miniSprite: 'res_anm_buffalo_mini.png',
    health: 10,
    mountedDice: 'dc-buffalo-1!4',
    mountedStatuses: 'st-mount-1',
    capacity: 4,
    bonus: [
      {capacity:-2, reqMounted:true},
    ],
    flags: '+animal +packAnimal +buffalo +mammal',
    levels: [
      {},
      {dice: 'dc-buffalo-1!4'},
      {dice: 'dc-buffalo-1!5'},
      {dice: 'dc-buffalo-1!6'},
    ],
  },
  {
    id: 'anm-tortoise', 
    title: "txt-anm-tortoise-title",
    description: "txt-anm-tortoise",
    debugCategory: 'Pack Animal',
    miniSprite: 'res_anm_tortoise_mini.png',
    flags: '+animal +packAnimal +tortoise',
    variations: [
      {
        gender:'male',
        name:'animalMale',
        sprite:'res_anm_tortoise_1.png',
        portrait: 'res_face_tortoise_1.png'
      },
      {
        gender:'female',
        name:'animalFemale',
        sprite:'res_anm_tortoise_2.png',
        portrait: 'res_face_tortoise_2.png'
      },
    ],
    extraSprites: {
      crates: 'res_anm_tortoise_crates.png',
      saddle: 'res_anm_tortoise_saddle.png',
    },
    health: 12,
    isMountable: true,
    mountedDice: 'dc-tortoise-1!4',
    mountedStatuses: 'st-mount-1',
    capacity: 4,
    bonus: [
      {capacity: -2, reqMounted:true},
    ],
    levels: [
      {},
      {dice: 'dc-tortoise-1!4'},
      {dice: 'dc-tortoise-1!5'},
      {dice: 'dc-tortoise-1!6'},
    ]
  },
  {
    id: 'anm-camel', 
    title: "txt-anm-camel-title",
    description: "txt-anm-camel",
    debugCategory: 'Pack Animal',
    variations: [
      {
        gender: 'male',
        name: 'animalMale',
        sprite: 'res_anm_camel_1.png',
        portrait: 'res_face_camel_1.png'
      },
      {
        gender: 'female',
        name: 'animalFemale',
        sprite: 'res_anm_camel_2.png',
        portrait: 'res_face_camel_1.png'
      },
    ],
    extraSprites: {
      crates: 'res_anm_camel_crates.png',
      saddle: 'res_anm_camel_saddle.png',
    },
    health: 8,
    isMountable: true,
    mountedDice: 'dc-camel-1',
    mountedStatuses: 'st-mount-2',
    miniSprite: 'res_anm_camel_mini.png',
    flags: '+animal +packAnimal +camel +mammal',
    capacity: 4,
    bonus: [
      {capacity: -2, reqMounted:true},
    ],
    levels: [
      {},
      {dice: 'dc-camel-1!4'},
      {dice: 'dc-camel-1!5'},
      {dice: 'dc-camel-1!6'},
    ],
  },
  {
    id: 'anm-elephant', 
    title: "txt-anm-elephant-title",
    debugCategory: 'Neutral Animal',
    capacity: 9, 
    flags: '+animal +elephant +mammal',
  },
  {
    id: 'anm-raptor', 
    title: "txt-anm-raptor-title",
    description: "txt-anm-raptor",
    variations: [
      {
        gender: 'male',
        name: 'animalMale',
        sprite: 'res_anm_raptor_1.png',
        portrait: 'res_face_raptor_1.png'
      },
      {
        gender: 'female',
        name: 'animalFemale',
        sprite: 'res_anm_raptor_2.png',
        portrait: 'res_face_raptor_2.png',
        miniSprite: 'res_anm_raptor_2_mini.png',
      }
    ],
    extraSprites: {
      crates: 'res_anm_raptor_crates.png',
      saddle: 'res_anm_raptor_saddle.png',
    },
    health: 12,
    miniSprite: 'res_anm_raptor_1_mini.png',
    mountedDice: 'dc-raptor-1!4 dc-raptor-1!4',
    isMountable: true,
    mountedStatuses: 'st-mount-3',
    flags: '+animal +packAnimal +dinosaur +raptor',
    capacity: 3,
    bonus: [
      {capacity: -1, reqMounted:true},
    ],
    levels: [
      {},
      {dice: 'dc-raptor-1!4'},
      {dice: 'dc-raptor-1!5'},
      {dice: 'dc-raptor-1!6'},
    ],
    debugCategory: 'Pack Animal',
  },
  {
    id: 'anm-parasaurolophus', 
    title: "txt-anm-parasaurolophus-title",
    description: "txt-anm-parasaurolophus",
    debugCategory: 'Pack Animal',
    variations: [
      {
        gender:'male',
        name:'animalMale', 
        sprite:'res_anm_parasaurolophus_1.png', 
        portrait: 'res_face_parasaurolophus_1.png',
        miniSprite: 'res_anm_raptor_2_mini.png',
      },
    ],
    extraSprites: {
      crates: 'res_anm_parasaurolophus_crates.png',
      saddle: 'res_anm_parasaurolophus_saddle.png',
    },
    health: 14,
    isMountable: true,
    mountedDice: 'dc-parasaurolophus-1!4',
    mountedStatuses: 'st-mount-3',
    flags: '+animal +packAnimal +dinosaur',
    capacity: 4,
    bonus: [
      {capacity: -2, reqMounted:true},
    ],
    levels: [
      {},
      {dice: 'dc-parasaurolophus-1!4'},
      {dice: 'dc-parasaurolophus-1!5'},
      {dice: 'dc-parasaurolophus-1!6'},
    ],
  },
  {
    id: 'anm-chasmosaurus', 
    title: "txt-anm-chasmosaurus-title",
    description: "txt-anm-chasmosaurus",
    debugCategory: 'Pack Animal',
    variations: [
      {gender:'male', name:'animalMale', sprite:'res_anm_chasmosaurus_1.png', portrait: 'res_face_chasmosaurus_1.png'},
      {gender:'female', name:'animalFemale', sprite:'res_anm_chasmosaurus_1.png', portrait: 'res_face_chasmosaurus_1.png'},
    ],
    extraSprites: {
      crates: 'res_anm_chasmosaurus_crates.png',
      saddle: 'res_anm_chasmosaurus_saddle.png',
    },
    miniSprite: 'res_anm_chasmosaurus_mini.png',
    health: 16,
    isMountable: true,
    mountedDice: 'dc-chasmosaurus-1!4',
    mountedStatuses: 'st-mount-1',
    flags: '+animal +packAnimal +dinosaur',
    capacity: 6,
    bonus: [
      {capacity: -2, reqMounted:true},
    ],
    levels: [
      {},
      {dice: 'dc-chasmosaurus-1!4'},
      {dice: 'dc-chasmosaurus-1!5'},
      {dice: 'dc-chasmosaurus-1!6'},
    ],
  },
])
