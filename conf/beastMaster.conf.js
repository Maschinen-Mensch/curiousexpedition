config.entities.add([

  {
    id: 'evt-village-beastMaster',
    reqFixtureFlags: {beastMaster: true},
    actionText: "txt-evt-village-beastMaster-action",
    text: "txt-evt-village-beastMaster",
    chat: 'cl-beastMaster-recruit',
    showPartyCount: true,
    events: 'evt-village-beastMaster-actions',
  },
  {
    id: 'evt-village-beastMaster-actions',
    partyEffects: [
      {
        optional: true,
        reqFixtureFlags: '-beastSet',
        setFixtureFlags: '+beastSet',
        events: [
          {slots: 3, setFixtureFlags: '+beastNormal'},
          {slots: 2, setFixtureFlags: '+beastSpecial_1'},
          {slots: 1, setFixtureFlags: '+beastSpecial_2'},
        ],
      },
      {
        optional: true, // Standard 1
        events: [
          {
            reqBiomeFlags: '-arctic',
            events: 'evt-village-beastMaster-recruit-hyena', 
          },
          {
            reqBiomeFlags: '+arctic',
            events: 'evt-village-beastMaster-recruit-arcticWolf', 
          },
        ],
      },
      {
        optional: true, // Standard 2
        events: [
          {
            reqBiomeFlags: '-arctic',
            events: 'evt-village-beastMaster-recruit-gorilla', 
          },
          {
            reqBiomeFlags: '+arctic',
            events: 'evt-village-beastMaster-recruit-polarBear', 
          },
        ],
      },
      {
        reqFixtureFlags: '+beastNormal', optional: true, // Normal Addition
        events: [
          {
            reqBiomeFlags: '-arctic',
            events: 'evt-village-beastMaster-recruit-tiger',
          },
          {
            reqBiomeFlags: '+arctic',
            // nothing  
          },
        ],
      },
      {
        reqFixtureFlags: '+beastSpecial_1', optional: true, // Special 1
        events: [
          {
            reqBiomeFlags: '-arctic',
            events: 'evt-village-beastMaster-recruit-tiger-white'
          },
          {
            reqBiomeFlags: '+arctic',
            events: 'evt-village-beastMaster-recruit-sabertooth-white',
          },
        ],
      },
      {
        reqFixtureFlags: '+beastSpecial_2', optional: true, // Special 2
        events: [
          {
            reqBiomeFlags: '-arctic',
            events: 'evt-village-beastMaster-recruit-tiger-battle',
          },
          {
            reqBiomeFlags: '+arctic',
            events: 'evt-village-beastMaster-recruit-sabertooth-white',
          },
        ],
      },
    ],
    actions: 'evt-village-main-update',
  },
  {
    id: 'evt-village-beastMaster-recruit-hyena',
    actions: [
      {
        actionText: "txt-anm-hyena-title",
        alwaysShown: true,
        reqItems: {'it-animalTooth':5},
        items: {'it-animalTooth':-5},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-hyena',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-tiger',
    actions: [
      {
        actionText: "txt-anm-tiger-title",
        alwaysShown: true,
        reqItems: {'it-animalTooth':10},
        items: {'it-animalTooth':-10},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-tiger',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-tiger-white',
    actions: [
      {
        actionText: "txt-anm-tiger-white-title",
        alwaysShown: true,
        reqItems: {'it-animalTooth':15},
        items: {'it-animalTooth':-15},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-tiger-white',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-tiger-battle',
    actions: [
      {
        actionText: "txt-anm-tiger-battle-title",
        alwaysShown: true,
        reqItems: {'it-animalTooth':15},
        items: {'it-animalTooth':-15},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-tiger-battle',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-gorilla',
    actions: [
      {
        actionText: "txt-anm-gorilla-title",
        alwaysShown: true,
        reqItems: {'it-animalTooth':10},
        items: {'it-animalTooth':-10},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-gorilla',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-arcticWolf',
    actions: [
      {
        actionText: "txt-emy-wolf-arctic-name",
        alwaysShown: true,
        reqItems: {'it-animalTooth':5},
        items: {'it-animalTooth':-5},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-wolf-arctic',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-polarBear',
    actions: [
      {
        actionText: "txt-emy-polarBear-name",
        alwaysShown: true,
        reqItems: {'it-animalTooth':10},
        items: {'it-animalTooth':-10},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-polarBear',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
  {
    id: 'evt-village-beastMaster-recruit-sabertooth-white',
    actions: [
      {
        actionText: "txt-emy-sabertooth-name",
        alwaysShown: true,
        reqItems: {'it-animalTooth':15},
        items: {'it-animalTooth':-15},
        text: "txt-evt-village-beastMaster-recruit-beast",
        addCharacter: 'anm-sabertooth-white',
        events: 'evt-village-beastMaster-actions',
      },
    ],
  },
])