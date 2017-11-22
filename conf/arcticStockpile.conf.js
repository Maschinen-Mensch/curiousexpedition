config.entities.add([

// fixtures

  {
    id: 'fxt-arcticStockpile',
    name: "txt-fxt-arcticStockpile-name",
    reqBiomeFlags: '+arctic',
    sprite: "res_fxt_articStockPile_1.png",
    flags: '+arcticStockpile +dreamVisions +hasLoot +abacus',
    setTile: 'tl-deepSnow',
    actions: 'evt-arcticStockpile',
    hideParty:false,
    debugCategory: 'sacrileg',
    debugColor: '#5DADE2',
  },

// events

  { 
    id: 'evt-arcticStockpile',
    actionText: "txt-base-explore",
    reqFixtureFlags: '-explored',
    showImage: {src: 'evt_fxt_arcticStockpile_1.png', type: 'day'},
    select: 'evt-arcticStockpile-examine'
  },
  {
    id: 'evt-arcticStockpile-examine',
    text: "txt-evt-arcticStockpile-examine",
    chat: 'cl-sacrileg-warning',
    actions: [
      'evt-arcticStockpile-loot',
      'evt-leave',
    ],
  },
  { 
    id: 'evt-arcticStockpile-loot',
    actionText: "txt-evt-stoneStatue-loot-action",
    chat: 'cl-warning-superstitious',
    select: [
      {
        reqDifficulty: '1..',
        loot: {
          items: [
            {slots:6, 'il-loot-native':2},
            {slots:2, 'il-loot-native':3},
            {slots:1, 'il-loot-native':1, 'il-tomePages':1},
          ],
          close: 'evt-arcticStockpile-loot-close',
          cancel: 'evt-leave'
        },
      },
      {
        reqDifficulty: '0',
        loot: {
          items: [
            {slots:6, 'il-loot-edibleNative-easy':2},
            {slots:2, 'il-loot-edibleNative-easy':1, 'il-loot-native':1,},
            {slots:1, 'il-loot-edibleNative-easy':1, 'il-tomePages':2},
          ],
          close: 'evt-stoneStatue-loot-close',
          cancel: 'evt-leave'
        },
      },
    ],
  },    
  { 
    id: 'evt-arcticStockpile-loot-close',
    standing: -2,
    text: "txt-evt-arcticStockPile-loot-close",
    setPartyFlags: '+sacrileg +superstitious',
    setFixtureFlags: '+explored',
    chat: 'cl-sacrileg-loot',
    actions: 'evt-leave'
  },
])