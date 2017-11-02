config.entities.add([

// items

  {
    id: 'it-camp',
    name: "txt-it-camp-name",
    description: "txt-it-camp",
    sprite: 'it_utility_camp_1.png',
    value: {
      base: 60,
      karma: 1,
    },
    maxStack: 1,
    events: {
      partyEffects: [
        {
          reqFixture: {flags:"", range:'0'}, optional: true,
          setTempFlags: {campFail: true},
          chat: 'cl-camp-fail',
        },
        {
          reqTiles: ['tl-river-shallow', 'tl-sulfur-shallow', 'tl-packIce'], optional: true,
          setTempFlags: {campFail: true},
          chat: 'cl-camp-fail',
        },
        {
          reqTempFlags: {campFail:false}, optional:true,
          chat: 'cl-camp-success',
          turns: 3,
          addFixture: {ref:'fxt-camp', range: 0}, 
          removeItem: true,
        }
      ],
    },
    debugCategory: 'utility',
  },


// fixtures

  {
    id: 'fxt-camp',
    name: "txt-fxt-camp-name",
    flags: '+camp',
    mapScore: 0, 
    sprite: "res_fxt_camp.png",
    actions: 'evt-camp-explore',
    debugColor: '#64ff58',
  }, 

// events

  {
    id: 'evt-camp-explore',
    actionText: "txt-evt-camp-explore-action",
    text: "txt-evt-camp-explore",
    chat: 'cl-nature',
    playMusic: ['thm_nature_1'],
    partyEffects: [
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_fxt_campItem_1.png', type: 'day'},
      },
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        events: [
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_campItem_1.png', type: 'day', showMounted: false,
              particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
            },
          },
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_campItem_1.png', type: 'day', showMounted: false,
            },
          }
        ],
      },
    ],
    events: 'evt-camp-actions'
  },
  {
    id: 'evt-camp-packUp',
    actionText: "txt-evt-camp-packUp-action",
    text: "txt-evt-camp-packUp",
    turns: 3,
    replaceFixtures: {},
    items: [{'it-camp':1}],
    events: 'evt-leave'
  },
  {
    id: 'evt-camp-morning',
    text: "txt-evt-camp-morning",
    showImage: {src: 'evt_fxt_campItem_1.png', type: 'day'},
    playMusic: ['thm_nature_1'],
    chat: 'cl-newMorning',       
    events: 'evt-camp-actions'
  },
  { 
    id: 'evt-camp-actions',
    actions: ['evt-nature-rest', 'evt-camp-packUp', 'evt-leave']
  },
])