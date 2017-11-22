config.entities.add([

  {
    id: 'evt-dismiss',
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    text: "txt-evt-dismiss",
    select: [
      {prio:0, ref:'evt-dismiss-imaginaryFriend'},
      {prio:0, ref:'evt-dismiss-abomination'},
      {prio:0, ref:'evt-dismiss-tim'},
      {prio:0, ref:'evt-dismiss-luis'},
      {prio:3, ref:'evt-dismiss-western'},
      {prio:5, ref:'evt-dismiss-default'}
    ],
  },
  {
    id: 'evt-dismiss-default',
    actions: [
      {
        actionText: "txt-evt-dismiss-default-action", 
        text: "txt-evt-dismiss-default",
        report: "txt-evt-dismiss-default-report",
        select: [
          { 
            reqCharFlags: '+dinosaur', 
            addZone: {ref:'zn-raptor', range:2, reachable:true},
            storeCharacter: true
          },
          { 
            prio:1,
            storeCharacter: true
          }
        ]
      },
      {
        actionText: "txt-evt-dismiss-default-action-1"
      }
    ]
  },
  {
    id: 'evt-dismiss-western',
    reqCharFlags: '-native +humanoid',
    charEvents: {
      count: 'any',
      reqCharFlags: '-native +humanoid -special',
      reqLoyalty: '1..',
      reqTargetChar: false,
      text: "txt-evt-dismiss-western",
      chat: 'cl-angry'
    },
    actions: [
      {
        actionText: "txt-evt-dismiss-default-action", 
        text: "txt-evt-dismiss-western-1",
        report: "txt-evt-dismiss-western-report",
        storeCharacter: true,
        charEvents: {
          count: 'any',
          reqCharFlags: '-native +humanoid -special',
          reqLoyalty: '1..',
          loyalty: -1,
          chat: 'cl-angry'
        }
      },
      {
        actionText: "txt-evt-dismiss-default-action-1"
      }
    ]
  },
  {
    id: 'evt-dismiss-abomination',
    reqCharFlags: '+abomination',
    text: "txt-evt-dismiss-abomination", 
    report: "txt-evt-dismiss-abomination-report", 
    actions: [
      {
        actionText: "txt-evt-cave-ghostsQuest-action",
        removeCharacter: true,
        setPartyFlags: '+abominationCombat',
        combat: [{'emy-abomination':1}]
      },
      {
        actionText: "txt-evt-dismiss-abomination-action",  
      }
    ]
  },
  {
    id: 'evt-dismiss-tim',
    reqCharFlags: '+tim',
    charEvents: [
      {
        count: 'any',
        reqCharFlags: '-native -special +humanoid',
        reqLoyalty: '1..',
        reqTargetChar: false,
        text: "txt-evt-dismiss-tim",
        chat: 'cl-angry'
      },
      {
        reqCharFlags: '+luis',
        text: "txt-evt-dismiss-tim-1"
      }
    ],
    actions: [
      {
        actionText: "txt-evt-dismiss-default-action", 
        text: "txt-evt-dismiss-tim-2",
        report: "txt-evt-dismiss-tim-report",
        storeCharacter: true,
        charEvents: [
          {
            count: 'any',
            reqCharFlags: '-native +humanoid -special',
            reqLoyalty: '1..',
            loyalty: -1,
            chat: 'cl-angry'
          },
          {
            reqCharFlags: '+luis',
            loyalty: -3
          }
        ],
      },
      {
        actionText: "txt-evt-dismiss-default-action-1"
      }
    ]
  },
  {
    id: 'evt-dismiss-luis',
    reqCharFlags: '+luis',
    charEvents: {
      reqCharFlags: '+tim',
      text: "txt-evt-dismiss-luis"
    },
    actions: [
      {
        actionText: "txt-evt-dismiss-default-action", 
        text: "txt-evt-dismiss-luis-1",
        report: "txt-evt-dismiss-luis-report",
        storeCharacter: true,
        charEvents: {
          reqCharFlags: '+tim',
          loyalty: -3
        }
      },
      {
        actionText: "txt-evt-dismiss-default-action-1"
      }
    ]
  },
  {
    id: 'evt-dismiss-imaginaryFriend',
    reqCharFlags: '+imaginary',
    text: "txt-evt-dismiss-imaginaryFriend"
  },

  {
    id: 'evt-dismissed-default',
    storeCharacter: true
  },
])