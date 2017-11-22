config.entities.add([

// fixtures

  {
    id: 'fxt-polarStation',
    isAbstract: true,
    reqBiomeFlags: '+arctic',
    dist: 5,
    hasStash: true,
    priceTable: 'polarStation',
    worldMap: true,
    initItems: {
      'il-trade-polarStation-sanity':1,
      'il-trade-polarStation-equipment':3,
      'it-snowshoe':20, 
      'it-costonFlare':10, 
      'it-firstAid':3, 
      'il-metaItems':99, 
      'it-water':20,
      'it-polarStation-meta-ticket-1':1,
      'it-polarStation-meta-ticket-2':1,
      'it-polarStation-meta-ticket-3':1,
    },
    sprite: 'res_fxt_arcticStation.png',
    setTile: 'tl-deepSnow',
    actions: 'evt-polarStation',
    debugCategory: 'arctic',
    debugColor: '#64ff58',
  },
  {
    id: 'fxt-polarStation-A',
    extends: 'fxt-polarStation',
    name: "txt-fxt-polarStation-A-name",
    flags: '+polarStation +stationA +inhabited',
  },
  {
    id: 'fxt-polarStation-B',
    extends: 'fxt-polarStation',
    name: "txt-fxt-polarStation-B-name",
    flags: '+polarStation +stationB +inhabited'
  },
  {
    id: 'fxt-polarStation-C',
    extends: 'fxt-polarStation',
    name: "txt-fxt-polarStation-C-name",
    flags: '+polarStation +stationC +inhabited'
  },

// items

  {
    id: 'it-polarStation-ticket',
    name: "txt-it-polarStation-ticket-name",
    description: "txt-it-polarStation-ticket",
    sprite: 'it_special_tickets_1.png',
    maxStack: 20,
    reqBiomeFlags: '+arctic',
    resellFactor: 0.0,
    value: {base: 5, karma: 0},
    noWeight: true,
    //autoRemove: true,
  },

  {
    id: 'it-polarStation-meta-ticket-1',
    name: "txt-it-polarStation-meta-ticket-1-name",
    sprite: 'it_special_tickets_2.png',
    value: {base: 15, karma: 0},
    // metaItem needs to be set to false
  },
  {
    id: 'it-polarStation-meta-ticket-2',
    name: "txt-it-polarStation-meta-ticket-2-name",
    sprite: 'it_special_tickets_3.png',
    value: {base: 25, karma: 0},
  },
  {
    id: 'it-polarStation-meta-ticket-3',
    name: "txt-it-polarStation-meta-ticket-3-name",
    sprite: 'it_special_tickets_4.png',
    value: {base: 50, karma: 0},
  },

// status

  {
    id: 'st-sledding', // straight descriptive status
    bonus: {viewDist: -2.0},
    debugCategory: 'internal',
  }, 

// events

  {
    id: 'evt-polarStation',
    actionText: "txt-evt-polarStation-action",
    showImage: {
      src: 'evt_fxt_sledStation_1.png', type: 'day', showMounted: true,
      particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'], particlesChance: 0.5
    },
    playMusic: 'thm_arctic_day_1',
    select: [
      { reqFixtureFlags: '+inhabited', select: 'evt-polarStation-enter' },
      { reqFixtureFlags: '-inhabited', text: 'txt-evt-polarStation-forsaken' },
    ]
  },
  {
    id: 'evt-polarStation-enter',
    text: "txt-evt-polarStation",
    playMusic: 'thm_arctic_day_1',
    partyEvents: {chance:0.5, npc: 'anm-dog-husky'},
    npc: 'npc-arcticResearcher',
    select: 'evt-polarStation-actions',
  },
  {
    id: 'evt-polarStation-actions',
    actions: [
      'evt-polarStation-rest',
      'evt-polarStation-travel',
      'evt-polarStation-trade',
      'evt-polarStation-stash',
      'evt-leave'
    ]
  },
  {
    id: 'evt-polarStation-trade',
    actionText: "txt-evt-polarStation-trade-action",
    barter: {
      close: 'evt-polarStation-trade-deal',
      cancel: 'evt-polarStation-trade-cancel'
    }
  },
  { 
    id: 'evt-polarStation-stash',
    actionText: "txt-evt-mission-stash-action",
    text: "txt-evt-polarStation-stash",
    loot: {
      items: {},
      title: "txt-evt-mission-stash-title",
      close: 'evt-polarStation-stash-done',
      cancel:'evt-polarStation-stash-done',
      slots: 3
    }
  },
  {
    id: 'evt-polarStation-stash-done',
    text: "txt-evt-polarStation-stash-done",
    select: 'evt-polarStation-actions'
  },
  {
    id: 'evt-polarStation-trade-deal',
    text: "txt-evt-polarStation-trade-deal",
    partyEvents: [
      {
        optional: true, 
        reqItems: {'it-polarStation-meta-ticket-1':1},
        items: {
          hideNotifications:true, 
          'it-polarStation-meta-ticket-1':-1, 
          'it-polarStation-ticket':3
        },
      },
      {
        optional: true, 
        reqItems: {'it-polarStation-meta-ticket-2':1},
        items: {
          hideNotifications:true, 
          'it-polarStation-meta-ticket-2':-1, 
          'it-polarStation-ticket':7
        },
      },
      {
        optional: true, 
        reqItems: {'it-polarStation-meta-ticket-3':1},
        items: {
          hideNotifications:true, 
          'it-polarStation-meta-ticket-3':-1, 
          'it-polarStation-ticket':15
        }
      }
    ],
    select: 'evt-polarStation-actions'
  },  
  {
    id: 'evt-polarStation-trade-cancel',
    text: "txt-evt-polarStation-trade-cancel",
    select: 'evt-polarStation-actions'
  },
  {
    id: 'evt-polarStation-travel',
    actionText: "txt-evt-polarStation-travel-action",
    text: "txt-evt-polarStation-travel",
    actions: [
      {
        reqItems: {'it-polarStation-ticket':1},
        items: {'it-polarStation-ticket':-1},
        actionText: "txt-evt-polarStation-action-1",
        reqFixture: {range: '2..50', flags: '+stationA', reachable: true},
        posTile: {range: '..50', fixtureFlags: '+stationA', reachable:true},
        forceTravel: true
      },
      {
        reqItems: {'it-polarStation-ticket':1},
        items: {'it-polarStation-ticket':-1},
        actionText: "txt-evt-polarStation-action-2",
        reqFixture: {range: '2..50', flags: '+stationB', reachable: true},
        posTile: {range: '..50', fixtureFlags: '+stationB', reachable:true},
        forceTravel: true
      },
      {
        reqItems: {'it-polarStation-ticket':1},
        items: {'it-polarStation-ticket':-1},
        actionText: "txt-evt-polarStation-action-3",
        reqFixture: {range: '2..50', flags: '+stationC', reachable: true},
        posTile: {range: '..50', fixtureFlags: '+stationC', reachable:true},
        forceTravel: true
      },
      {
        actionText: "txt-evt-polarStation-travel-action-1", // TODO: use generic text entry
        text: 'txt-evt-polarStation-travel-cancel',
        select: 'evt-polarStation-actions'
      }
    ]
  },
  {
    id: 'evt-polarStation-rest',
    actionText: "txt-evt-polarStation-rest-action",
    alwaysShown: true,
    showImage: {
      src: 'evt_fxt_sledStation_1_night.png', type: 'night', showMounted: true,
      particles: ['pt-snow-1', 'pt-snow-2'],
      particlesChance: 0.5
    },
    playMusic: 'thm_arctic_night_1',
    reqItems: {'it-polarStation-ticket':1},
    items: {'it-polarStation-ticket':-1},
    text: "txt-evt-polarStation-rest",
    actions: {
      actionText: "txt-evt-mission-sleep-action",
      turns: 1,
      sanity: sanityRestVillage,
      select: 'evt-polarStation-morning',
    },
  },
  {
    id: 'evt-polarStation-morning',
    showImage: {
      src: 'evt_fxt_sledStation_1.png', type: 'day', showMounted: true,
      particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
      particlesChance: 0.5
    },
    npc: 'npc-arcticResearcher',
    playMusic: 'thm_arctic_day_1',
    text: "txt-evt-polarStation-morning",
    select: 'evt-polarStation-actions'
  },
])