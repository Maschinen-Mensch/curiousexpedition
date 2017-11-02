config.entities.add([

  {
    id: 'st-lepidopterophobia',
    title: "txt-st-lepidopterophobia-title",
    description: "txt-st-lepidopterophobia",
    flags: '+ailment',
    sprite: "res_status_lepidopterophobia.png",
    important: true,
    debugCategory: 'Ailment',
  },
  {
    id: 'st-claustrophobic',
    title: "txt-st-claustrophobic-title",
    description: "txt-st-claustrophobic",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_claustrophobic.png",
  },
  {
    id: 'st-acrophobia',
    title: "txt-st-acrophobia-title",
    description: "txt-st-acrophobia",
    debugCategory: 'Ailment',
    flags: '+ailment',
    important: true,
    sprite: "res_status_acrophobia.png",
    dayEvents: [{slots:2}, {slots:1, events:'evt-acrophobia'}]
  },
  {
    id: 'evt-acrophobia', // own id for stats tracking
    reqTiles:'tl-hill',
    loyalty: -1, 
    chat:'cl-phobia-travel',
  },

  {
    id: 'st-dendrophobia',
    title: "txt-st-dendrophobia-title",
    description: "txt-st-dendrophobia",
    debugCategory: 'Ailment',
    flags: '+ailment',
    sprite: "res_status_dendrophobia.png",
    important: true,
    dayEvents: [{slots:1, events:'evt-dendrophobia-angry'}]
  },
  {
    id: 'evt-dendrophobia-angry', // own id for stats tracking
    reqAge:'3..', 
    reqFixture: {range:'..1', flags:'+giantTree'}, 
    loyalty: -1,
    chat:'cl-apply-dendrophobia',
    resetStatusAge: true
  },
  {
    id: 'cl-apply-dendrophobia',
    lines: {
      text: ["I think that tree moved!", "Is that a face on that tree?", "I feel like that tree is watching me!", "These trees are creppy!", "These trees feel alive!"]
    }
  },
  
  {
    id: 'cl-phobia-travel',
    lines: [
      {
        text: ["We shouldn't have chosen this path!", "Only mad men would dare to travel here!", "Why did we have to choose this path!", "I'm not exactly comfortable with this path.", "We should have chosen another path."],
        reqLoyalty: '2..',
      }
    ]

  }
])