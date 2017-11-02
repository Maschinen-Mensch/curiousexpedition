config.entities.add([

// statuses

  {
    id: 'st-hallucinations',
    title: "txt-st-hallucinations-title",
    description: "txt-st-hallucinations",
    flags: '+ailment',
    debugCategory: 'Ailment',
    sprite: "res_status_hallucinations.png",
    important: true,
    autoRemove: true,
    buffDays: '20..40',
    tripEvents: {
        reqFixture: {flags:'+hallucinations', range:'..10', count:'0'},
        posTile: {reachable:true, traversable:true, range:'..10'},
        addFixture: {ref:'fxt-hallucination', animate:false, range:0}, 
    },
    buffEndEvents: {
      chat: 'cl-feelingBetter',
      replaceFixtures: {old:'fxt-hallucination', range:'..100'}
    }
  },

// events

  {
    id: 'evt-sanity-apply-hallucinations',
    charEffects: {
      text: "txt-evt-sanity-apply-hallucinations",
      reqCharFlags: '+special',
      setStatus: '+hallucinations'
    },
  },

// fixtures

  {
    id: 'fxt-hallucination',
    name: "txt-st-hallucinations-title",
    debugCategory: 'hallucinations',
    flags: '+hallucinations',
    sprite: "res_fxt_treasureLocation.png",
    showHint: true,
    mapScore: 0,
    revealEvents: {
      replaceFixtures: {},
      chat: 'cl-hallucinations'
    }
  },

// chat lines

  {
    id: 'cl-hallucinations',
    lines: [
      {
        text: "txt-cl-hallucinations",
        reqCharFlags: '+special'
      },
      {
        text: "txt-cl-hallucinations-1",
        reqCharFlags: '-special +humanoid'
      }
    ]
  }
])