config.entities.add([

// fixtures

  {
    id: 'fxt-stoneStatue01',
    name: "txt-fxt-stoneStatue01-name",
    sprite: "res_fxt_stoneStatue_1.png",
    reqBiomeFlags: '-arctic',
    flags: '+stoneStatueType_01 +dreamVisions +hasLoot +abacus',
    setTile: [
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-dry', reqBiomeFlags: '+dry'},
      {ref:'tl-corrupted-plains', reqBiomeFlags: '+corrupted'},
      {ref:'tl-grass'},
    ],
    actions: 'evt-stoneStatue',
    debugCategory: 'sacrileg',
    debugColor: '#5DADE2',
  },
  {
    id: 'fxt-stoneStatue02',
    debugCategory: 'sacrileg',
    extends: 'fxt-stoneStatue01',
    sprite: "res_fxt_stoneStatue_2.png",
    reqBiomeFlags: '-desert -arctic',
    flags: '+stoneStatueType_02 +dreamVisions +hasLoot +abacus',
    setTile: [
      {ref:'tl-sulfur-shallow', reqBiomeFlags: '+prehistoric'},
      {ref:'tl-corrupted-river-shallow', reqBiomeFlags: '+corrupted'},
      {ref:'tl-river-shallow'},
    ],
  },
  {
    id: 'fxt-stoneStatue03',
    debugCategory: 'sacrileg',
    extends: 'fxt-stoneStatue01',
    sprite: "res_fxt_stoneStatue_3.png",
    flags: '+stoneStatueType_03 +dreamVisions +hasLoot +abacus',
    setTile: [
      {ref:'tl-desert-stoneForest', reqBiomeFlags: '+desert'},
      {ref:'tl-dry-stoneForest', reqBiomeFlags: '+dry'},
      {ref:'tl-corrupted-stoneForest', reqBiomeFlags: '+corrupted'},
      {ref:'tl-grass-stoneForest'},
    ],
  },

// events

  { 
    id: 'evt-stoneStatue',
    actionText: "txt-evt-stoneStatue-action",
    reqFixtureFlags: '-explored',
    partyEffects: [
      {
        reqFixtureFlags: '+stoneStatueType_01', optional: true,
        showImage: {src: 'evt_fxt_stoneStatue_1.png', type: 'day'},
      },
      {
        reqFixtureFlags: '+stoneStatueType_02', optional: true,
        showImage: {src: 'evt_fxt_stoneStatue_2.png', type: 'day'},
      },
      {
        reqFixtureFlags: '+stoneStatueType_03', optional: true,
        showImage: {src: 'evt_fxt_stoneStatue_3.png', type: 'day'},
      },
    ],
    events: 'evt-stoneStatue-examine'
  },
  {
    id: 'evt-stoneStatue-examine',
    text: "txt-evt-stoneStatue-examine",
    chat: 'cl-sacrileg-warning',
    partyEffects: {
      optional: true, 
      reqFixtureFlags: '+hasLoot',
      text: "txt-evt-stoneStatue-examine-1",
      actions: 'evt-stoneStatue-loot'
    },
    actions: 'evt-leave',
  },
  { 
    id: 'evt-stoneStatue-loot',
    actionText: "txt-evt-stoneStatue-loot-action",
    chat: 'cl-warning-superstitious',
    events: [
      {
        reqDifficulty: '1..',
        loot: {
          items: [
            {slots:6, 'il-loot-native':2},
            {slots:2, 'il-loot-native':3},
            {slots:1, 'il-loot-native':1, 'il-tomePages':1},
          ],
          close: 'evt-stoneStatue-loot-close',
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
    id: 'evt-stoneStatue-loot-close',
    standing: -2,
    text: "txt-evt-stoneStatue-loot-close",
    report: "txt-evt-stoneStatue-loot-close-report",
    setPartyFlags: '+sacrileg +superstitious',
    setFixtureFlags: '+explored',
    chat: 'cl-sacrileg-loot',
    charEffects: {
      chance: 0.3, optional: true, 
      reqCharFlags: '-special +humanoid',
      setPartyFlags: '-superstitious', // don't apply superstitious and trigger aftermath at once 
      reqStatus: '-superstitious',
      setStatus: '+superstitious',
      text: "txt-evt-stoneStatue-loot-close-1",
      chat: 'cl-apply-superstitious',
    },
    actions: 'evt-leave'
  },

])