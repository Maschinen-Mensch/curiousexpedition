config.entities.add([

  {
    id: 'evt-village-beastMaster',
    reqFixtureFlags: '+beastMaster',
    actionText: "txt-evt-village-beastMaster-action",
    text: "txt-evt-village-beastMaster",
    chat: 'cl-beastMaster-recruit',
    showPartyCount: true,
    select: 'evt-village-beastMaster-actions',
  },
  {
    id: 'evt-village-beastMaster-actions',
    partyEvents: [
      {
        optional: true,
        reqFixtureFlags: '-beastSet',
        setFixtureFlags: '+beastSet',
        select: [
          {slots: 3, setFixtureFlags: '+beastNormal'},
          {slots: 2, setFixtureFlags: '+beastSpecial_1'},
          {slots: 1, setFixtureFlags: '+beastSpecial_2'},
        ],
      },
      {
        optional: true, // Standard 1
        select: [
          {
            reqBiomeFlags: '-arctic',
            select: 'evt-village-beastMaster-recruit-hyena', 
          },
          {
            reqBiomeFlags: '+arctic',
            select: 'evt-village-beastMaster-recruit-arcticWolf', 
          },
        ],
      },
      {
        optional: true, // Standard 2
        select: [
          {
            reqBiomeFlags: '-arctic',
            select: 'evt-village-beastMaster-recruit-gorilla', 
          },
          {
            reqBiomeFlags: '+arctic',
            select: 'evt-village-beastMaster-recruit-polarBear', 
          },
        ],
      },
      {
        reqFixtureFlags: '+beastNormal', optional: true, // Normal Addition
        select: [
          {
            reqBiomeFlags: '-arctic',
            select: 'evt-village-beastMaster-recruit-tiger',
          },
          {
            reqBiomeFlags: '+arctic',
            // nothing  
          },
        ],
      },
      {
        reqFixtureFlags: '+beastSpecial_1', optional: true, // Special 1
        select: [
          {
            reqBiomeFlags: '-arctic',
            select: 'evt-village-beastMaster-recruit-tiger-white'
          },
          {
            reqBiomeFlags: '+arctic',
            select: 'evt-village-beastMaster-recruit-sabertooth-white',
          },
        ],
      },
      {
        reqFixtureFlags: '+beastSpecial_2', optional: true, // Special 2
        select: [
          {
            reqBiomeFlags: '-arctic',
            select: 'evt-village-beastMaster-recruit-tiger-battle',
          },
          {
            reqBiomeFlags: '+arctic',
            select: 'evt-village-beastMaster-recruit-sabertooth-white',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-hyena',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-tiger',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-tiger-white',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-tiger-battle',
        incAchievement: 'ach-battlecat-recruit',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-gorilla',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-wolf-arctic',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-polarBear',
        select: 'evt-village-beastMaster-actions',
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
        setPartyFlags: '+recruitedSomebody',
        addCharacter: 'anm-sabertooth-white',
        select: 'evt-village-beastMaster-actions',
      },
    ],
  },
])