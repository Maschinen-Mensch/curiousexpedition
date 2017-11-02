config.entities.add([

  {
    id: 'evt-harbor-equipment',
    actionText: "txt-evt-harbor-select-action",
    showImage: {src: 'evt_spec_ship_1.png'},
    reqTutorial: false,
    reqWorld: '0..',
    charEffects: [
      {
        optional: true, 
        reqPartyStatus: {'pk-blackMarket':false},
        barter: {
          title: "txt-evt-harbor-equipment-title",
          globalInv: 'harbor',
          items: {
            'it-rope':10,
            'it-climbingGear':10,
            'it-machete':10,
            'it-snowshoe':10,
            'it-canvas':5,
            'it-shovel':5,
            'it-torch':5,
            'il-harbor-standardTools':2,
            'il-harbor-rations':1,
            'il-harbor-extra':2,
          },
          baseValue: 'funds',
          priceTable: 'harbor',
          close: 'evt-harbor-eventSelection',
          cancel: 'evt-harbor-eventSelection',
          hidePartyOffer: true
        },
      },
      {
        optional: true,
        reqPartyStatus: {'pk-blackMarket':true},
        barter: {
          title: "txt-evt-harbor-equipment-title",
          globalInv: 'harbor',
          items: {
            'it-rope':20,
            'it-climbingGear':20,
            'it-machete':20,
            'it-snowshoe':20,
            'it-canvas':10,
            'it-shovel':10,
            'it-torch':10,
            'il-harbor-standardTools':4,
            'il-harbor-rations':2,
            'il-harbor-extra':4,
          },
          baseValue: 'funds', 
          priceTable: 'harbor',
          close: 'evt-harbor-eventSelection',
          cancel: 'evt-harbor-eventSelection',
          hidePartyOffer: true
        },
      },
    ],
  },

])