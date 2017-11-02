config.entities.add([

  {
    id: 'it-necronomicon',
    name: "txt-it-necronomicon-name",
    debugCategory: 'magic',
    description: "txt-it-necronomicon",
    sprite: 'it_special_book_2.png',
    value: {
      base: 50,
      village: 0,
      karma: karmaVeryLarge,
    },
    maxStack: 1,
    dayEvents: {
      reqDifficulty: '1..', 
      unlockCharacter: 'sp-lovecraft',
    },
    events: [
      {
        slots: 1,
        reqSanity: '..9', sanity: -10, 
        partyEffects: { ref: 'evt-setImage-nightCamp' },
        text: "txt-it-necronomicon-0",
        removeItem: true,
        startSprawl: {ref:'spr-fire', radius:3, power:15}
      },
      {
        slots: 1,
        reqSanity: '10..',
        reqBiomeFlags: '+warped',
        setPartyStatus: '-portalReturn',
        showImage: {src: 'evt_spec_space.png', showMounted:false},
        text: "txt-it-necronomicon-1",
        actions: {unwarpWorld: true}
      },
      {
        prio: 1,
        slots: 2, 
        events:'evt-necronomicon-page',
      },
      {
        prio: 1,
        slots: 10,
        chat: 'cl-necronomicon-page',
        charEffects: {reqStatus: {'pk-necronomicon':true}},
        events:'evt-necronomicon-page',
      },
      {
        prio: 1,
        slots: 1,
        reqMaxPerWorld: 1,
        chat: 'cl-necronomicon-portal',
        charEffects: {reqStatus: {'pk-necronomicon':true}},
        sanity: -35,
        addFixture: {ref:'fxt-portal', range:2},
      },
      {
        prio: 1,
        slots: 8,
        reqSanity:'10..34',
        chat: 'cl-necronomicon-fail',
        events: 'evt-necronomicon-page-fail',
        sanity: -35
      },
      {
        prio: 1,
        slots: 3,
        reqSanity:'35..',
        chat: 'cl-necronomicon-fail',
        events: 'evt-necronomicon-page-fail',
        sanity: -35
      },
    ]    
  },
  {
    id: 'evt-necronomicon-page',
    reqSanity:'10..',
    sanity: -35,
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    text: "txt-evt-necronomicon-page",
    loot: {
      items: [
        {slots:3, 'il-tomePages':2},
        {slots:1, 'il-tomePages':3},
        {slots:5, 'il-tomePages':1},
      ],
      close: [
        {
          slots:1,
          charEffects: {
            reqStatus: {'pk-necronomicon':false},
          },
          text: "txt-evt-necronomicon-page-1",
          startSprawl: {ref:'spr-fire', radius:3, power:15},
          removeItem:true,
        },
        {
          slots:2,
        },       
      ],
    },
  },
  {
    id: 'evt-necronomicon-page-fail',
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    text: "txt-evt-necronomicon-page-fail",
  },
])
