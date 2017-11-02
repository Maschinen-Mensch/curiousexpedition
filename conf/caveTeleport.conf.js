config.entities.add([

// FIXTURES

  {
    id: 'fxt-cave-teleport',
    extends: 'fxt-cave',
    setNeighbors: [
      {ref:'tl-hill', count:5, reqBiomeFlags: '-arctic'},
      {ref:'tl-plateau', count:5, reqBiomeFlags: '+arctic'},
    ],
    spawnEvents: {setFixtureFlags: '+caveTypeTeleport'},
    debugColor: 'SANDYBROWN'
 },

// EVENTS

  {
    id: 'evt-cave-teleport-arrive', 
    showImage: {src: 'evt_fxt_cave_teleport.png'},
    text: "txt-evt-cave-teleport-arrive",
    report: "txt-evt-cave-teleport-arrive-report",
    actions: ['evt-cave-teleport', 'evt-cave-explored-leave'],
  },
  {
    id: 'evt-cave-teleport',
    actionText: "txt-evt-cave-teleport-action",
    playMusic: ['thm_cave_1', 'thm_cave_2'],
    showImage: {src: 'evt_fxt_cave_teleport.png'},
    events: [
      {
        reqFixture: {range: '2..', flags: '+caveTypeTeleport'},
        charEffects: {reqCharFlags:'+special', removeStatusWithFlags: '+localCurse'},
        text: "txt-evt-cave-teleport",
        report: "txt-evt-cave-teleport-report",
        posTile: {range: '2..', fixtureFlags: '+caveTypeTeleport'},
        teleport: true,
        turns: 3,
        actions: 'evt-cave-explored-leave',
      },
      {
        prio: 1,
        text: "txt-evt-cave-teleport-1",
        report: "txt-evt-cave-teleport-report-1",
        turns: 3,
        actions: 'evt-cave-explored-leave',
      }
    ]
  },
])