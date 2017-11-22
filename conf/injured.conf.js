config.entities.add([
  
// statuses

  {
    id: 'st-injured',
    title: "txt-st-injured-title",
    description: "txt-st-injured",
    sprite: "res_status_injured.png",
    flags: '+affliction',
    autoRemove: true,
    important: true,
    bonus: { infection: +0.2 },
    debugCategory: 'health'
  },
  {
    id: 'st-infected',
    title: "txt-st-infected-title",
    description: "txt-st-infected",
    sprite: "res_status_infected.png",
    flags: '+affliction',
    autoRemove: true,
    important: true,
    tripEvents: [
      {slots: 1, reqAge:'5..', delayedEvent: 'evt-infectedDeath'},
      {slots: 5, health: -1},
    ],
    debugCategory: 'health',
  },
  {
    id: 'st-dying',
    title: "txt-st-dying-title",
    description: "txt-st-dying",
    sprite: "res_status_infected.png",
    important: true,
    blocksHealthRegen: true,
    dayEvents: {
      delayedEvent: [
        {
          charEvents: {
            reqStatus: '-curse-abomination',
            text: "txt-st-dying-0",
            storeCharacter: true,
            setCharFlags: '+dead',
          }
        },
        {
          charEvents: {
            reqStatus: '+curse-abomination',
            text: "txt-st-dying-1",
            removeCharacter: true,
            addCharacter: 'pl-abomination',
          }
        }
      ]
    },
    debugCategory: 'health',
  },
  {
    id: 'st-promiseSpouse',
    title: "txt-st-promiseSpouse-title",
    description: "txt-st-promiseSpouse",
    sprite: "res_status_spouse.png",
    important: true,
    debugCategory: 'Quest',
  },

// events

  {
    id: 'evt-infected',
    select: [
      {
        delayedEvent: 'evt-infected-companion'
      },
      {
        prio: 1,
        reqCharFlags: '+cultist', 
        delayedEvent: 'evt-injured-turnAbomination',
      },
      {
        prio: 1,
        reqStatus: '+curse-abomination',
        delayedEvent: 'evt-injured-turnAbomination',
      },
    ]
  },
  {
    id: 'evt-infected-companion',
    reqTutorial: false,
    charEvents: {
      reqStatus: '+injured -infected -blessingRegeneration',
      reqCharFlags: '-special', 
      delayedEvent: {
        partyEvents: { ref: 'evt-setImage-nightCamp' },
        text: "txt-evt-infected-companion",
        report: "txt-evt-infected-companion-report",
        setStatus: '+infected'
      }
    },
  },
  {
    id: 'evt-infectedDeath',
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    select: [
      {slots:6, ref:'evt-infectedDeath-companion'},
      {slots:4, ref:'evt-infectedDeath-amulet'},
      {slots:3, ref:'evt-infectedDeath-promise',}, 
      {slots:1, ref:'evt-infectedDeath-explorer'},
    ],
  },
  {
    id: 'evt-infectedDeath-companion',
    charEvents: {
      reqStatus: '+infected',
      reqCharFlags: '-special',
      text: "txt-evt-infectedDeath-companion",
      report: "txt-evt-infectedDeath-companion-report",
      storeCharacter: true,
      setCharFlags: '+dead',
    }
  },
  {
    id: 'evt-infectedDeath-amulet',
    charEvents: {
      reqStatus: '+infected +homesick',
      text: "txt-evt-infectedDeath-amulet",
      report: "txt-evt-infectedDeath-amulet-report",
      storeCharacter: true,
      setCharFlags: '+dead',
    },
    loot: {items: {'it-familyAmulet':1}},
    posTile: {fixtureFlags:'+village'},
    revealTiles: {radius:1, fixture:true, centerCam:true},
    setTileFlags: {familyAmulet: true},
  },
  {
    id: 'evt-infectedDeath-explorer',
    charEvents: { 
      reqStatus: '+infected',
      reqCharFlags: '+special',
      text: "txt-evt-infectedDeath-explorer",
      report: "txt-evt-infectedDeath-explorer-report",
    }
  },
  {
    id: 'evt-infectedDeath-promise',
    reqPartyFlags: '-promiseSpouse',
    setPartyFlags: '+promiseSpouse',
    charEvents: {
      reqStatus: '+infected',
      reqCharFlags: '-native +humanoid -animal -special',
      reqGender: 'male',
      text: "txt-evt-infectedDeath-promise",
      report: "txt-evt-infectedDeath-promise-report",
      storeCharacter: true,
      setCharFlags: '+promise +dead',
      setPartyStatus: '+promiseSpouse'
    }
  },
  {
    id: 'evt-injured-turnAbomination',
    text: "txt-evt-injured-turnAbomination",
    removeCharacter: true,
    addCharacter: 'pl-abomination',
  },
  {
    id: 'evt-infectedHeal',
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    playMusic: ['thm_nature_night_campfire'],
    charEvents: [
      {
        optional:true,
        reqStatus: '+infected',
        reqCharFlags: '-special', 
        text: "txt-evt-infectedHeal",
        report: "txt-evt-infectedHeal-report",
        setStatus: '-infected',
      },
      {
        optional:true,
        reqStatus: '+infected',
        reqCharFlags: '+special', 
        text: "txt-evt-infectedHeal-1",
        report: "txt-evt-infectedHeal-report-1",
        setStatus: '-infected',
      }
    ],
  }
])