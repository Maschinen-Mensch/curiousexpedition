config.entities.add([

// perks

  { 
    id: 'pk-mushroomSanity-1', 
    title: "txt-pk-mushroomSanity-1-title", 
    description: "txt-pk-mushroomSanity-1",
    bonus: {mushroomSanity: +20}, 
    sprite: "res_status_mushroom.png", 
    debugCategory:'Unit Perk', 
  },
  { 
    id: 'pk-mushroomSanity-2', 
    extends: 'pk-mushroomSanity-1',
    title: "txt-pk-mushroomSanity-2-title", 
    bonus: {mushroomSanity: +30}, 
  },
  { 
    id: 'pk-mushroomSanity-3', 
    extends: 'pk-mushroomSanity-1',
    title: "txt-pk-mushroomSanity-3-title", 
    bonus: {mushroomSanity: +40}, 
  },
  { 
    id: 'pk-mushroomSanity-4', 
    extends: 'pk-mushroomSanity-1',
    title: "txt-pk-mushroomSanity-4-title", 
    bonus: {mushroomSanity: +50}, 
  },

// items

  {
    id: 'it-mushroom',
    isAbstract: true,
    debugCategory: 'mushroom',
    value: {
      base: 10,
      karma: 1,
    },
    maxStack: 20,
  },

  {
    id: 'it-mushroom-view',
    extends: 'it-mushroom',
    name: "txt-it-mushroom-view-name",
    description: "txt-it-mushroom-view",
    debugCategory: 'mushroom',
    sprite: 'it_consumable_mushroom_blue.png',
    events: {
      removeItem:true,
      playSound: ['sfx_eat_var1', 'sfx_eat_var2'],
      sanity: {base:0, bonus:'mushroomSanity'},
      setPartyStatus: {'os-viewDistance':true},
    },
  },
  {
    id: 'it-mushroom-healing',
    extends: 'it-mushroom',
    name: "txt-it-mushroom-healing-name",
    description: "txt-it-mushroom-healing",
    debugCategory: 'mushroom',
    sprite: 'it_consumable_mushroom_red.png',
    events: 'evt-useItem-mushroom-healing',
    maxDice: 3,
    //tempDice: 'dc-mushroom',
  },
  {
    id: 'it-mushroom-status',
    extends: 'it-mushroom',
    name: "txt-it-mushroom-status-name",
    description: "txt-it-mushroom-status",
    sprite: 'it_consumable_mushroom_green.png',
    events: 'evt-useItem-mushroom-status'
  },

  {
    id: 'it-mushroom-noAngry',
    extends: 'it-mushroom',
    name: "txt-it-mushroom-noAngry-name",
    description: "txt-it-mushroom-noAngry",
    sprite: 'it_consumable_mushroom_purple.png',
    events: {
      charEffects: {
        count: 'any', 
        reqCharFlags: '-special +humanoid -abomination', 
        setStatus: '+mushroom-noAngry'
      },      
      playSound: ['sfx_eat_var1', 'sfx_eat_var2'],
      removeItem: true,
    }
  },
  {
    id: 'st-mushroom-noAngry',
    title: "txt-st-mushroom-noAngry-title",
    sprite: 'res_status_noAngry.png',
    important: true,
    debugCategory: 'buff',
    bonus: {loyalty:+1},
    buffDays: '20'
  },

  {
    id: 'it-mushroom-capacity',
    extends: 'it-mushroom',
    name: "txt-it-mushroom-capacity-name",
    description: "txt-it-mushroom-capacity",
    sprite: 'it_consumable_mushroom_slimy.png',
    events: {
      charEffects: {reqCharFlags: '+special', setStatus: '+mushroom-capacity'},      
      playSound: ['sfx_eat_var1', 'sfx_eat_var2'],
      removeItem: true,
    }
  },
    {
    id: 'st-mushroom-capacity',
    title: "txt-st-mushroom-capacity-title",
    important: true,
    debugCategory: 'buff',
    sprite: 'res_status_tempCapacity.png',
    bonus: {capacity:+1},
    buffTrips: '4'
  },

// events

  { 
    id: 'evt-useItem-mushroom-healing',
    text: "txt-evt-useItem-mushroom-healing",
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    playMusic: ['thm_nature_night_campfire'],
    charEffects: [
      {
        count: "any",
        optional: true,
        reqItems: {'it-mushroom-healing':1},
        reqStatusFlags: '+affliction',
        actions: ['evt-mushroom-healing-heal']
      },
      {
        count: "all",
        optional:true,
        reqStatusFlags: '-affliction',
        text: "txt-evt-useItem-mushroom-healing-1",
      },
    ],
    actions: 'evt-leave',
  },
  { 
    id: 'evt-mushroom-healing-heal',
    actionText: "txt-evt-mushroom-healing-heal-action",
    text: "txt-evt-mushroom-healing-heal",
    removeStatusWithFlags: '+affliction',
    health: 10,
    playSound: ['sfx_eat_var1', 'sfx_eat_var2'],
    items: {'it-mushroom-healing':-1},
    chat: 'cl-heal',
    charEffects: {
      count: "any",
      optional: true,
      reqItems: {'it-mushroom-healing':1},
      reqStatusFlags: '+affliction',
      actions: ['evt-mushroom-healing-heal']
    },
    events: [
      {
        slots:3,
      },
      {
        slots:1,
        text: "txt-evt-mushroom-healing-heal-1",
        report: "txt-evt-mushroom-healing-heal-report",
        reqCharFlags: '-special +humanoid',
        reqStatus: '-blessingPureMind',
        setStatus: {'st-paranoid':true},
        chat: 'cl-apply-paranoid',
      },
      {
        slots:1,
        text: "txt-evt-mushroom-healing-heal-2",
        report: "txt-evt-mushroom-healing-heal-report-1",
        reqCharFlags: '-special +humanoid',
        reqStatus: '-blessingPureMind',
        setStatus: {'st-cannibal':true},
      },
      {
        slots:1,
        text: "txt-evt-mushroom-healing-heal-3",
        report: "txt-evt-mushroom-healing-heal-report-2",
        reqCharFlags: '-special +humanoid',
        reqStatus: '-blessingPureMind',
        setStatus: {'st-lepidopterophobia':true},
        chat: 'cl-apply-lepidopterophobia',
      },
      {
        slots:1,
        text: "txt-evt-mushroom-healing-heal-4",
        report: "txt-evt-mushroom-healing-heal-report-3",
        reqCharFlags: '-special',
        reqStatus: '-blessingPureMind',
        setStatus: {'st-superstitious':true},
        chat: 'cl-apply-superstitious',
      },
    ],
    actions: 'evt-leave',
  },

  { 
    id: 'evt-useItem-mushroom-status',
    text: "txt-evt-useItem-mushroom-status",
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    playMusic: ['thm_nature_night_campfire'],
    charEffects: {
      optional: true, count: "any",
      reqStatusFlags: '+ailment',
      actions: 'evt-mushroom-status-heal',
    },
    actions: 'evt-leave',
  },
  { 
    id: 'evt-mushroom-status-heal',
    actionText: "txt-evt-mushroom-healing-heal-action",
    text: "txt-evt-mushroom-status-heal",
    removeStatusWithFlags: '+ailment',
    playSound: ['sfx_eat_var1', 'sfx_eat_var2'],
    items: {'it-mushroom-status':-1},
    actions: 'evt-leave',
  },

])