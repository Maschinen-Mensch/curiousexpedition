var achievements = [
  //Collection achievements
  {
    id: "ach-butterfly-collect", //events.coffee::addButterfly
    name: "txt-ach-butterfly-collect",
    desc: "txt-ach-butterfly-collect-desc",
    img: "achv_img_ID_07",
    counterTarget: 50
  },
  {
    id: "ach-painting-collect",
    name: "txt-ach-painting-collect",
    desc: "txt-ach-painting-collect-desc",
    img: "achv_img_ID_08",
    counterTarget: 50
  },
  {
    id: "ach-studies-collect",
    name: "txt-ach-studies-collect",
    desc: "txt-ach-studies-collect-desc",
    img: "achv_img_ID_09",
    counterTarget: 50
  },
  {
    id: "ach-treasure-collect",
    name: "txt-ach-treasure-collect",
    desc: "txt-ach-treasure-collect-desc",
    img: "achv_img_ID_57",
    counterTarget: 100
  },
  {
    id: "ach-explorer-collect", //events.coffee::applyUnlockCharacter
    name: "txt-ach-explorer-collect",
    desc: "txt-ach-explorer-collect-desc",
    img: "achv_img_ID_12",
    updateInterval: 1,
    counterTarget: 13,
  },
  //Gameplay achievements
  {
    id: "ach-positive-standing",
    name: "txt-ach-positive-standing",
    desc: "txt-ach-positive-standing-desc",
    img: "achv_img_ID_22",
  },
  {
    id: "ach-alcoholics",
    name: "txt-ach-alcoholics",
    desc: "txt-ach-alcoholics-desc",
    img: "achv_img_ID_23",
  },
  {
    id: "ach-volcano-explosion",
    name: "txt-ach-volcano-explosion",
    desc: "txt-ach-volcano-explosion-desc",
    img: "achv_img_ID_24",
  },
  {
    id: "ach-triple-abomination",
    name: "txt-ach-triple-abomination",
    desc: "txt-ach-triple-abomination-desc",
    img: "achv_img_ID_25",
  },
  {
    id: "ach-no-selling",
    name: "txt-ach-no-selling",
    desc: "txt-ach-no-selling-desc",
    img: "achv_img_ID_26",
  },
  {
    id: "ach-coca-only",
    name: "txt-ach-coca-only",
    desc: "txt-ach-coca-only-desc",
    img: "achv_img_ID_27",
  },
  {
    id: "ach-hot-air-balloon",
    name: "txt-ach-hot-air-balloon",
    desc: "txt-ach-hot-air-balloon-desc",
    img: "achv_img_ID_28",
  },
  {
    id: "ach-beat-tutorial",//tutorial::TutStepEnd
    name: "txt-ach-beat-tutorial",
    desc: "txt-ach-beat-tutorial-desc",
    img: "achv_img_ID_29",
  },
  //Career Achievements
  {
    id: "ach-third-place",//epilogue.coffee::checkAchievements
    name: "txt-ach-third-place",
    desc: "txt-ach-third-place-desc",
    img: "achv_img_ID_31",
  },
  {
    id: "ach-second-place",//epilogue.coffee::checkAchievements
    name: "txt-ach-second-place",
    desc: "txt-ach-second-place-desc",
    img: "achv_img_ID_32",
  },
  {
    id: "ach-first-place",//epilogue.coffee::checkAchievements
    name: "txt-ach-first-place",
    desc: "txt-ach-first-place-desc",
    img: "achv_img_ID_33",
  },
  {
    id: "ach-gol-frames",//mainMenu::onWonCharacter
    name: "txt-ach-gol-frames",
    desc: "txt-ach-gol-frames-desc",
    img: "achv_img_ID_34",
    counterTarget: 19,
    updateInterval: 1
  },
  {
    id: "ach-plat-frames",//mainMenu::onWonCharacter
    name: "txt-ach-plat-frames",
    desc: "txt-ach-plat-frames-desc",
    img: "achv_img_ID_35",
    counterTarget: 19,
    updateInterval: 1
  },
  {//Missing
    id: "ach-all-items",
    name: "txt-ach-all-items",
    desc: "txt-ach-all-items-desc",
    img: "achv_img_ID_36",
    counterTarget: 164
  },
  {
    id: "ach-reach-world2",
    name: "txt-ach-reach-world2",
    desc: "txt-ach-reach-world2-desc",
    img: "achv_img_ID_37",
  },
  {
    id: "ach-reach-world3",
    name: "txt-ach-reach-world3",
    desc: "txt-ach-reach-world3-desc",
    img: "achv_img_ID_38",
  },
  {
    id: "ach-reach-world4",
    name: "txt-ach-reach-world4",
    desc: "txt-ach-reach-world4-desc",
    img: "achv_img_ID_39",
  },
  {
    id: "ach-reach-world5",
    name: "txt-ach-reach-world5",
    desc: "txt-ach-reach-world5-desc",
    img: "achv_img_ID_40",
  },
  {
    id: "ach-reach-world6",
    name: "txt-ach-reach-world6",
    desc: "txt-ach-reach-world6-desc",
    img: "achv_img_ID_41",
  },
  {
    id: "ach-expeditions",
    name: "txt-ach-expeditions",
    desc: "txt-ach-expeditions-desc",
    img: "achv_img_ID_42",
    counterTarget: 100,
    updateInterval: 10,
  },
  {
    id: "ach-portals",
    name: "txt-ach-portals",
    desc: "txt-ach-portals-desc",
    img: "achv_img_ID_43",
    counterTarget: 20,
  },
  {
    id: "ach-recr-natives",
    name: "txt-ach-recr-natives",
    desc: "txt-ach-recr-natives-desc",
    img: "achv_img_ID_44",
    counterTarget: 20
  },
  {//Missing
    id: "ach-visit-special",
    name: "txt-ach-visit-special",
    desc: "txt-ach-visit-special-desc",
    img: "achv_img_ID_45",
  },
  {
    id: "ach-recr-dinos",
    name: "txt-ach-recr-dinos",
    desc: "txt-ach-recr-dinos-desc",
    img: "achv_img_ID_46",
    counterTarget: 20
  },
  {
    id: "ach-complete-quests",
    name: "txt-ach-complete-quests",
    desc: "txt-ach-complete-quests-desc",
    img: "achv_img_ID_47",
    counterTarget: 20
  },
  //Counter Achievements
  {
    id: "ach-explode-mountains",
    name: "txt-ach-explode-mountains",
    desc: "txt-ach-explode-mountains-desc",
    img: "achv_img_ID_01",
    counterTarget: 50
  },
  {
    id: "ach-revive",
    name: "txt-ach-revive",
    desc: "txt-ach-revive-desc",
    img: "achv_img_ID_02",
    counterTarget: 10,
    updateInterval: 1
  },
  {
    id: "ach-stay-portal",
    name: "txt-ach-stay-portal",
    desc: "txt-ach-stay-portal-desc",
    img: "achv_img_ID_03"
  },
  {
    id: "ach-sell-funds", //ranking.coffee::sellOutroItem
    name: "txt-ach-sell-funds",
    desc: "txt-ach-sell-funds-desc",
    img: "achv_img_ID_04",
    counterTarget: 100000,
    updateInterval: 1000
  },
  {
    id: "ach-sell-fame",//ranking.coffee::giftOutroItem
    name: "txt-ach-sell-fame",
    desc: "txt-ach-sell-fame-desc",
    img: "achv_img_ID_05",
    counterTarget: 100000,
    updateInterval: 1000
  },
  {
    id: "ach-eat-chocolate",
    name: "txt-ach-eat-chocolate",
    desc: "txt-ach-eat-chocolate-desc",
    img: "achv_img_ID_06",
    counterTarget: 500,
    updateInterval: 25
  },
  //Combat achievements
  {
    id: "ach-kill-snarfrattle",
    name: "txt-ach-kill-snarfrattle",
    desc: "txt-ach-kill-snarfrattle-desc",
    img: "achv_img_ID_48",
  },
  {
    id: "ach-headbutt-raptor",
    name: "txt-ach-headbutt-raptor",
    desc: "txt-ach-headbutt-raptor-desc",
    img: "achv_img_ID_49",
  },
  {
    id: "ach-flee",
    name: "txt-ach-flee",
    desc: "txt-ach-flee-desc",
    img: "achv_img_ID_50",
    counterTarget: 10,
    updateInterval: 3
  },
  {
    id: "ach-no-recruit",
    name: "txt-ach-no-recruit",
    desc: "txt-ach-no-recruit-desc",
    img: "achv_img_ID_30",
  },
  {
    id: "ach-hyena-kills",
    name: "txt-ach-hyena-kills",
    desc: "txt-ach-hyena-kills-desc",
    img: "achv_img_ID_51",
    counterTarget: 100,
  },
  {
    id: "ach-slave-free",
    name: "txt-ach-slave-free",
    desc: "txt-ach-slave-free-desc",
    img: "achv_img_ID_52",
  },
  {
    id: "ach-crocodile-kills",
    name: "txt-ach-crocodile-kills",
    desc: "txt-ach-crocodile-kills-desc",
    counterTarget: 20,
    img: "achv_img_ID_53",
  },
  {
    id: "ach-giantBird-kills",
    name: "txt-ach-giantBird-kills",
    desc: "txt-ach-giantBird-kills-desc",
    img: "achv_img_ID_54",
    counterTarget: 10,
  },
  {
    id: "ach-giantCrab-kill",
    name: "txt-ach-giantCrab-kill",
    desc: "txt-ach-giantCrab-kill-desc",
    img: "achv_img_ID_55",
  },
  {
    id: "ach-giantScorpion-kills",
    name: "txt-ach-giantScorpion-kills",
    desc: "txt-ach-giantScorpion-kills-desc",
    img: "achv_img_ID_56",
    counterTarget: 10,
  },
  {
    id: "ach-giantSpider-kills",
    name: "txt-ach-giantSpider-kills",
    desc: "txt-ach-giantSpider-kills-desc",
    img: "achv_img_ID_58",
    counterTarget: 20,
  },
  {
    id: "ach-hatchEggs",
    name: "txt-ach-hatchEggs",
    desc: "txt-ach-hatchEggs-desc",
    img: "achv_img_ID_59",
    counterTarget: 10,
    updateInterval: 1,
  },
  {
    id: "ach-giantWalrus-kills",
    name: "txt-ach-giantWalrus-kills",
    desc: "txt-ach-giantWalrus-kills-desc",
    img: "achv_img_ID_60",
    counterTarget: 10,
  },
  {
    id: "ach-treasure-dig",
    name: "txt-ach-treasure-dig",
    desc: "txt-ach-treasure-dig-desc",
    img: "achv_img_ID_11",
    counterTarget: 10,
  },
  {
    id: "ach-yeti-recruit",
    name: "txt-ach-yeti-recruit",
    desc: "txt-ach-yeti-recruit-desc",
    img: "achv_img_ID_16",
    secret: true
  },
  {
    id: "ach-eggplant-altar",
    name: "txt-ach-eggplant-altar",
    desc: "txt-ach-eggplant-altar-desc",
    img: "achv_img_ID_17",
    secret: true
  },
  {
    id: "ach-battlecat-recruit",
    name: "txt-ach-battlecat-recruit",
    desc: "txt-ach-battlecat-recruit-desc",
    img: "achv_img_ID_18",
    secret: true
  },
  {
    id: "ach-mountain-explode-stoneface",
    name: "txt-ach-mountain-explode-stoneface",
    desc: "txt-ach-mountain-explode-stoneface-desc",
    img: "achv_img_ID_19",
    secret: true
  },
  {
    id: "ach-secret-treasure",
    name: "txt-ach-secret-treasure",
    desc: "txt-ach-secret-treasure-desc",
    img: "achv_img_ID_20",
    secret: true
  },
  {
    id: "ach-balloon-click",
    name: "txt-ach-balloon-click",
    desc: "txt-ach-balloon-click-desc",
    img: "achv_img_ID_21",
    counterTarget: 10,
    secret: true
  },
  {
    id: "ach-blood-crown",
    name: "txt-ach-blood-crown",
    desc: "txt-ach-blood-crown-desc",
    img: "achv_img_ID_10",
    secret: true
  },
  {
    id: "ach-secret-explorer",
    name: "txt-ach-secret-explorer",
    desc: "txt-ach-secret-explorer-desc",
    img: "achv_img_ID_13",
    secret: true
  },
  {
    id: "ach-noCanib-husband",
    name: "txt-ach-noCanib-husband",
    desc: "txt-ach-noCanib-husband-desc",
    img: "achv_img_ID_14",
    secret: true
  },
  {
    id: "ach-mystery-box",
    name: "txt-ach-mystery-box",
    desc: "txt-ach-mystery-box-desc",
    img: "achv_img_ID_15",
    secret: true
  },
]

var staticConfig =
{
  versionName: '',
  enableAchievements: true,
  showMods: true,
  footerName: "1.3.2.4",

  // is converted to config.diaryText at run-time
  diaryTextLangs: {
    latin: {
      margin: [3, 13],
      separator: ' ',
      nonBreaking: '!?.,:\''
    },
    'zh-CN': {
      margin: [0, 15],
      separator: '',
      nonBreaking: '。，:'
    },
    'zh-TW': {
      margin: [0, 15],
      separator: '',
      nonBreaking: '。，:'
    }
  },

  slotColors : {
    explorer: '#f0ff00',
    unit: '#36ff00',
    animal: '#ffffff',
    mounted: '#ff9ceb',
    enemy: '#ff0000',
    npc: '#00f6ff',
    npc2: '#b700b1',

    'pck-grass': '#ff0000',
    'pck-dry': '#06ff00',
    'pck-desert': '#f6ff00',
    'pck-arctic': '#a6ffef',
    'pck-prehistoric': '#ff00e4',

    socket: '#ff009c',
    chimney: '#ff0000',
    campfire: '#802cff',
    custom: '#6624cc',
    custom2: '#ffc24d',
  },

  testEvents:[
    {
      id: 'evt-debug-teleport',
      posPunch: {maxRange: 500, radius:0},
      teleport: true
    }
  ],


  fonts: {
    themedLarge: "26px Averia",
    themedSmall: "17px Averia",
    technicalLarge: "25px Mallanna",
    technicalSmall: "17px Mallanna"
  },

  scaledFonts: [
    {
      themedLarge: "12px Averia",
      themedSmall: "8px Averia",
      technicalLarge: "15px Mallanna",
      technicalSmall: "8px Mallanna"
    },
    {
      themedLarge: "26px Averia",
      themedSmall: "17px Averia",
      technicalLarge: "25px Mallanna",
      technicalSmall: "16px Mallanna"
    },
    {
      themedLarge: "36px Averia",
      themedSmall: "25px Averia",
      technicalLarge: "31px Mallanna",
      technicalSmall: "20px Mallanna"
    }
  ],

  achievementTimer: 60*20, // how often we want show a update in seconds
}

var config = {
  baseViewDist: 1.3, // the base default view distance
  extendedViewDist: 1.3, // the extended view distance
  simpleLocationRevealDist: 2, // always reveal if below this distance

  maxUnitCount: 5,
  uiMaxUnitCount: 6,
  uiMaxCapacity: 6,
  uiMaxStatuses: 9,

  inactiveZoneParticle: 'pt-zone-inactive',
  defaultResellFactor: 1.0, // value for sold items is modified by this factor
  nativeBarterStandingSteps: 15, // how much to trade to increase standing

  unknownLocationSprite: 'res_tile_chasm_1.png',

  waitTime: 1.0, // time per day when resting
  enableScreenshots: false,
  healthRegenTurn: 8, // how many turns to regen one health

  showFullSanityBarPreview: true,

  maxCamShakes: 4,
  maxCamShakeDist: 500,

  newPocketFameBonus: 50,
  karmaBarSize: 75,
  maxRestTime: 5, // max amount of days, the party is allowed to rest in one go

  trailerScrollSpeed: [0, 0], // scroll speed while in trailer mode
  scrollSpeed: 2000,
  funds: [60, 30, 0], // start money

  superMoveParticle: 'pt-superMove',
  homeLocation: [350, 100],
  showValueInfobox: true, // show item values in info box

  lostStashWarningTime: 10.0,
  baseFame: 10, // fame at game start
  previewPathPulse: 0.2, // the pulse frequency of the preview path

  maxExpedition: 5,

  balloonOffsetY: 120,

  entities: [],

  chat: {
    idleDelay: 2, // time without message before new idle message is shown
    maxTime: 7, // max time before fading out
    scrollingSpeed: 0.01,
    offsetY: 120,
    answerDelay: 4, // the delay before members answer to other members
    eventChatDelay: 3, // the delay before first chat appears in diary after full text is shown
    eventChatDuration: 6, // how long chat appears on event images
    eventChatOffset: [0, -20], // offset of chat message from character
  },

  difficultyNames: [
    'txt-difficulty-easy-title',
    'txt-difficulty-medium-title',
    'txt-difficulty-hard-title'
  ],

  shortDifficultyNames: [
    'txt-difficulty-easy',
    'txt-difficulty-medium',
    'txt-difficulty-hard'
  ],

  loyalty: {
    levelUpChance: 0.25,
    levelUpChanceCareerist: 0.75,
    defaultValue: 2,
    randomExtraLoyalty: 0.25
  },

  tribeGen: {
    tribalLayers: 3,
  },

  magneticMountain: {
    radius: 6,
    error: 0.15
  },

  inventory: {
    slotSize: 25, // in pixel
    margin: 2, // in pixel
    slotCount: 8,
    fameIconOffset: [-1, -5],
    noWeightIconOffset: [+14, -5],
    backgroundColor: '#342a22',
    gridColor: '#67573b',
    maxPartySlots: 18,
    maxCombatSlots: 12
  },

  cursor: {
    standard: "url('img/cursor_1_point.png') 14 5, auto",
    move: "url('img/cursor_1_drag.png') 14 5, auto",
  },

  zone: {
    imgAlpha: 0.95, // the alpha value for the icon
    camShake: {power: 5, length: 1},
    aggroDelay: 2,
    defaultSeekTurns: 25
  },

  diary: {
    delay: 3.0,
    textWidth: 200,
    offsetX: 20,
    indentationOffsetX: 15,
    imageOffsetX: 0.25,
    bgAlpha: 0.2,
    alertWidth: 130,
    pinDelay: 0.25
  },

  challenge: {
    defaultRolls: 3, // rolls per round (including re-rolls)
    faceCount: 6,
    showDieHover: true,
    allowPinEnemyDice: false,
    rerollSingle: true,
    manualPattern: true,
    showBuffer: false,

    showBestPattern: true,
    maxDiceRotation: 30, // in degrees

    rollTime: 0.7, // seconds of how the roll animation takes
    rollDelay: 0.05, // roll delay per die when rolling all dice
    shakeTime: [0.3, 0.5],
    flyTime: 0.3,

    rollOnUnpin: false,
    showHearts: false,
    healthBarWidth: 50,

    showOverview: false,

    surpriseDelay: 1.0,

    resetShields: true,
    maxShield: 15,

    defaultExplorerDice: []
  },

  panel: {
    infoSimple: {img:'hud_info_border_simple.png', offset:26, scale:0.5},
    info: {img:'hud_info_border.png', offset:60, scale: 0.5},
    action: {img:'hud_actionButton.png', offset:24, scale: 0.5},
    extraAction: {sprite:'hud_button_blank.png', offset:4, scale: 0.5},
    menuButton: {sprite:'hud_button_menu.png', offset:7, scale:1},
    mapButton: {sprite:'hud_button_menu.png', offset:7, scale:1},
    modFrame: {sprite:'hud_frame_mod.png', offset:7, scale:1},
    scrollBar: {sprite:'hud_barter_centerBox.png', offset:2, scale:1},
    newsFrame: {sprite:'hud_news_background.png', offset:4, scale:1},
    chat: {sprite:'hud_chat_bubble.png', offset:12, scale:0.5},
    chatSmall: {sprite:'hud_chat_bubble_small.png', offset:4, scale: 0.5},
    inventory: {sprite:'hud_inventory_border.png', offset:1, scale: 0.5},
    backButton: {sprite:'hud_checkbox_neutral.png', offset:6, scale: 1}
  },

  notifications: {
    delay: 10.0,
    sprites: {
      unit: 'hud_feedback_update_newUnit',
      sanity: 'hud_feedback_update_sanity',
      statusPos: 'hud_feedback_update_statusPositive',
      statusNeg: 'hud_feedback_update_statusNegative',
      item: 'hud_feedback_update_item',
      turns: 'hud_feedback_update_statusNegative',
      standing: 'hud_feedback_update_statusPositive',
      butterfly: 'hud_feedback_update_statusPositive',
    }
  },

  specialEvents: {
    harbor: 'evt-harbor',
    worldInit: 'evt-world-init',
    worldStart: 'evt-world-start',
    worldStartWarped: 'evt-warpedWorld-start',
    dismiss: 'evt-dismiss',
    noSanity: 'evt-noSanity-select',
    celebration: 'evt-celebration',
    combatLoot: 'evt-combat-loot',
    combatFlee: 'evt-combat-run',
    balloon: 'evt-hotAirBalloon-explore',
    postNarrative: 'evt-postNarrative',
    extraNarrative: 'evt-postNarrative-extraCampaign',
    expeditionUnlocks: 'evt-expedition-unlocks',
    infected: 'evt-infected',
    promotion: null
  },

  specialStatuses: {
    injured: 'st-injured',
    infected: 'st-infected',
    dying: 'st-dying',
    angry: 'st-angry',
    overburden: 'st-overburden',
    bipolar: 'st-bipolar',
    sledding: 'st-sledding',
    biomeInfo: 'st-biomeInfo',
    polymath: 'st-polymath',
    cartographer: 'st-cartographer',
    desertExpert: 'st-desertExpert',
    pacifist: 'st-pacifist',
    otherworldly: 'st-otherworldly',
    animalWhisperer: 'st-animalWhisperer',
  },

  ship: {
    location: 'loc-ship',
    defaultTile: 'tl-river-shallow',
    particle: 'pt-ship',
    particleDelay: 0.1,
  },

  specialItems: {
    anthropologicalStudies: 'it-anthropologicalStudies',
    wadjetEye: 'it-wadjetEye'
  },

  celebration: {
    audienceCount: [25, 150],
    maxFame: 250,

    npc: [
      'res_npc_celebration_1.png',
      'res_npc_celebration_2.png',
      'res_npc_celebration_3.png',
      'res_npc_celebration_4.png',
      'res_npc_celebration_5.png',
      'res_npc_celebration_6.png',
      'res_npc_celebration_7.png',
      'res_npc_celebration_8.png',
      'res_npc_celebration_9.png',
      'res_npc_celebration_10.png',
      'res_npc_celebration_11.png',
      'res_npc_celebration_12.png',
      'res_npc_celebration_13.png',
      'res_npc_celebration_14.png',
      'res_npc_celebration_15.png',
    ],

    perkCount: 3,
    perkCountPolymath: 5,

    // all delays in seconds
    happyJumpDelay: [1.0, 5.0],
    veryHappyJumpDelay: [0.3, 0.4],

    chatDelay: 5.0,
    bannerDelay: 3.0,
    medalDelay: 5.0,
    outFade: 3.0
  },

  compass: {
    hintAngleError: [0.3, 3.14], // min/max error offset in rad
    turnDiff: 0.25, // the compass points added each turn
  },

  mainMenuLayers: [
    {offset:  0, sprite:'london_clouds_3.png'},
    {offset:  0, sprite:'london_clouds_2.png'},
    {offset:  0, sprite:'london_clouds_1.png'},
    {offset:  0, sprite:'london_layer_6.png'},
    {offset:  0, sprite:'london_layer_7.png'},
    {offset:  0, sprite:'london_layer_4.png'},
    {offset:  0, sprite:'london_layer_3.png'},
    {offset:  0, sprite:'london_layer_2.png'},
    {offset:  0, sprite:'london_layer_1.png'},
  //  {offset:  0, sprite:'london_layer_6.png', },
  //  {offset:  0, sprite:'london_layer_5.png'},
  //  {offset:  0, sprite:'london_layer_5.png', particle:'pt-smoke-menu-3',      interval: 0.7},
  //  {offset:  0, sprite:'london_layer_4.png', },
  //  {offset:  0, sprite:'london_layer_3.png'},
  //  {offset:  0, sprite:'london_layer_3.png', particle:'pt-smoke-menu-2',      interval: 0.7},
  //  {offset:  0, sprite:'london_layer_2.png',  },
  //  {offset:  0, sprite:'london_layer_1.png', particle:'pt-smoke-menu-1'},
  //  {offset:  0, sprite:'london_layer_1.png', particle:'pt-smoke-menu-1',      interval: 0.7},
  ],

  mapScore: {
    locationDiscoveryDefault: 1, // may be overwritten on locations

    biomeBarDelay: 3,
    biomeXPBonus: 0,
    biomeFameBonus: "fameVerySmall",

    showBiomeInfo: true,
  },

  mapLines: {
    checkScale: 0.51,
    maxAngle: 1.1,
    minDist: 0,
    maxCombo: 5,
    comboScale: 1.2,
    addsCompassScore: false,
    secondaryAlpha: 0.25 // alpha of cosmetic lines
  },

  triangulation: {
    capturePadding: 80, // triangle is scaled for capturing tiles
    lineWidth: 2,
    color: 'orange',
    baseRange: 3, // max range between spots
    checkEnclosure: false, // if true, tiles enclosed by captured tiles will also be captured
  },

  cartography: {
    maxViewDist: 0.6,
    maxRadius: 2,
    dynamicRadius: true,
    pointsPerTile: 0.55
  },

  taxonomy: {
    enabled: true,

    butterflyBody: 8,
    butterflyPattern: 15,
    butterflyWings: 9,

    butterflyChance: 0.0, // 0.35 tuned out
    butterflyMapScore: 0,
    butterflyFame: 10,
  },

  board: {
    biomeSize: [18, 14], // the width, height of every biome block
    maxZoom: [0, -1], // max/min zoom level (default blockSize is 0)
    autoScroll: true, // scroll with party during traveling,
    scrollMargin: -150, // how close scroll gets to screen border

    biomeSafeZone: 3, // how far off to create locations from the borders
    defaultLocationMinDist: 3, // min dist from player start pos
  },

  rivals: {
    count: 4, // amount of rivals
    fame: [150, 190], // fame gained after every expedition
    worldBonus: 30,
    rewards: [200, 150, 100, 50, 0],
    scoring: [0.9, 1.16, 1.34, 1.5, 1.0, 1.3]
  },

  anim: {
    tileBlendInTime: 0.5, // the speed with which new tiles are blended in
    tileBlendInDelay: 0.2, // the delay for each wave of tiles to become reveled

    travelTime: 0.4, // seconds spent per tile while fast traveling
    maxTravelTime: 1.5, // max seconds for traveling
    campTime: 1.0, // seconds spent on turn before switching to next day
    introTime: 3,
    fadeToGame: 5, // how long the initial fade from black takes

    partyAnimSpeed: 4,
    partyAnimFrames: 2,
    partyArrowFrames: 4,

    cityLayers: 2,
    jungleLayers: 2,

    cityScrollSpeed: 1.0,
    jungleScrollSpeed: 1.0,

    shipTravelTiles: 5
  },

  terrain: { // terrain is generated by a perlin noise function
    frequency: 0.3,
    persistence: 0.2,
    octaves: 4
  },

  sanity: {
    maxSanity: 100, // max sanity of party
    tripCost: [0, 5, 15], // sanity change per move input
    maxExtraMoves: 5, // how often checked for noSanity
    bonusInterval: 7, // bonus given if already suffered from nosanity event
    thresholds: [30, 70]
  },

  campfire: {
    alpha: [0.6, 1.0],
    speed: 1.3,
    offset: [-26, -67]
  },

  fireplace: { // narrator scene
    alpha: [0.6, 1.0],
    speed: 1.0,
    offset: [15, 35]
  },

  xp: {
    levels: [1, 2, 3, 4],
    maxMapScore: 3,
    healthBonus: 3, // additional health per level
  },

  imgSlot: {
    explorer: 'explorer',
    animal: 'animal',
    mounted: 'explorer',
    unit: 'unit',
    npc: 'npc',
    enemy: 'enemy'
  },

  imgSize: {
    portrait: [36, 36],
    body: [20, 32],
    item: [20, 20],

    mapOffset: [0, 0], // used to be 0,88
    partyOffset: [7, -20],
    tile: [52, 48],
    location: [52, 48],
    hexOffset: [6, 0],
    tileVariations: 7,
    path: [76, 72],
    dice: [28, 27],

    blockSize: [26, 24], // height/width of each tile in pixels
    porter: [32, 64],
    vehicle: [128, 74], // width x height
    resource: [32, 16],
    biomeToken: [400, 100],

    unitFaceSmall: [64, 44],

    mapBorderSize: 24,
    biomeBgVariations: 8,
    biomeBgTint: 0.7,

    titleScale: 1.5,
    subTitleScale: 1.0,
    subTitleOffset: 120
  },

  sfx: {
    ambientDelay: [20, 40], // only counts if no music playing
    diaryFadeDuration: 8.0
  },

  score: {
    easyModifier: 0.75,
    mediumModifier: 1.0,
    hardModifier: 1.25
  },

  clouds: {
    count: 8,
    lifeTime: [5, 10],
    speed: [5, 40],
    alpha: 0.35,
    imgVariations: 8,
    introFadeDelay: 22.0
  },

  tutorial: {
    character: 'sp-darwin',
    worlds: ['wd-tutorial-1'],

    village: 'loc-village-tutorial',
    oldCamp: 'loc-oldCamp',
    ship: 'loc-ship',
    goldenTemple: 'loc-goldenTemple-grass',
    shrine: 'loc-shrine-2',

    start: 'evt-tutorial-start-3',
    enterCamp: 'evt-oldCamp-enter',
    leaveCamp: 'evt-leave',
    villageEnter: 'evt-village-tutorial-init',
    villageRest: 'evt-village-tutorial-sleep',
    villageTrade: 'evt-village-tutorial-trade',
    villageRecruit: 'evt-village-tutorial-recruit',
    villageLeave: 'evt-village-tutorial-leave',
    hyenaAttack: 'evt-hyena-attack',
    hyenaFlee: 'evt-combat-run',
    overburden: 'evt-tutorial-overburden-1',
    shipReturn: 'evt-ship-return',
    shrineEnter: 'evt-shrine-2',
    shrineExplore: 'evt-shrine-enter',
    shrineLoot: 'evt-shrine-lootAftermath',
    goalEnter: 'evt-goal-explore'
  },

  tips: [
    'txt-tip-1',
    'txt-tip-2',
    'txt-tip-3',
    'txt-tip-4',
    'txt-tip-5',
    'txt-tip-6',
    'txt-tip-7',
    'txt-tip-8',
    'txt-tip-9',
    'txt-tip-10',
    'txt-tip-11',
    'txt-tip-12',
    'txt-tip-13',
    'txt-tip-14',
    'txt-tip-15',
    'txt-tip-16',
    'txt-tip-17',
    'txt-tip-18',
    'txt-tip-19',
    'txt-tip-20',
  ],

  colors: {
    diaryAction: '#fff2c5',
    diaryActionActive: '#B26400',
    diaryActionInvalid: 'gray',

    diaryTextDefault: '#333',
    diaryTextHighlight: 'brown',
    diaryTextPerson: 'brown',
    diaryTextPersonActive: 'brown',

    partyBorder: '#64321E',
    personInfoBorder: '#BF6A1F',
    tileBorder: '#64321E',
    mapHintsBorder: 'white',
    mapLines: 'orange',
    science: 'orange',
    scienceFilled: '#00FF3B',
    scienceActive: 'gold',
    diaryImageBorder: '#64321E',
    loadingScreen: 'black',
    loadingScreenPortrait: '#3BC591',
    warning: '#FF002A',
    path: '#F230C4',
    sanity: '#b100e0',
    sanityHighlight: 'rgba(255,255,255,0.25)',
    standing: '#3ec3ff',
    health: 'red',
    healthBg: '#990000',
    medal: '#ffff00',
    ribbonIn: 'white',
    ribbonOut: '#a61400',
    fameItem: '#ff9900',
    help: '#FFF64C',
    bonus: '#bbb',
    invSlotUsable: 'orange',
    invSlotInvalid: 'red',
    zone: 'red',
    news: '#E5D4B3',

    infoWarning: 'tomato',

    statusBar: 'black',
    statusBarTurns: '#ff49f9',
    statusBarTrips: 'orange',

    karmaBarBg: '#333',
    karmaBar: '#2198B2',
    karmaBarFull: '#1ABF81',
    achievements: ['#973200', '#FBEA2E', '#A8D1D2']
  },

  standardValues: {
    sanityRestVillage       : 30,
    sanityNaturalLocations  : 8,
    sanityBoost             : 30,

    fameVeryTiny    : 2,
    fameTiny        : 5,
    fameVerySmall   : 10,
    fameSmall       : 20,
    fameMedium      : 30,
    fameLarge       : 50,
    fameVeryLarge   : 70,
    fameHuge        : 100,

    fundsTiny       : 5,
    fundsVerySmall  : 10,
    fundsSmall      : 20,
    fundsMedium     : 30,
    fundsLarge      : 40,
    fundsVeryLarge  : 60,

    karmaSmall      : 2,
    karmaMedium     : 10,
    karmaLarge      : 20,
    karmaVeryLarge  : 50,

    standingCostVillageUse        : -2,
    standingCostSacrilegSmall     : -1,
    standingCostSacrilegMedium    : -2,
    standingCostSacrilegLarge     : -3,
    standingCostSlaverTrade       : -3,

    mapScoreSmall  : 5,
    malusAlcohol  : -3
  },

  // todo convert to entities
  helpBonus: {
    capacity: 'txt-ch-capacity',
    loyalty: 'txt-ch-loyalty',
    maxSanity: 'txt-bonus-maxSanity',
    villageSanityBonus: 'txt-bonus-villageSanity',
    whiskyBonus: 'txt-bonus-whisky',
    combatRoll: 'txt-bonus-combatRoll',
    revealDist: 'txt-bonus-revealDist',
    health: 'txt-bonus-health',
    gunDamage: "txt-bonus-gunDamage",
    combatSanity: "txt-bonus-combatSanity",
    taxonomySanity: "txt-bonus-taxonomySanity",
    cocaBonus: "txt-bonus-cocaBonus",
    startStanding: "txt-bonus-startStanding",
    mushroomSanity: "txt-bonus-mushroomSanity",
    natureSanityBonus: "txt-bonus-natureSanityBonus",
    dynamiteBonus: "txt-bonus-dynamiteBonus",
    flareRange: "txt-bonus-flareRange",
    flareRadius: "txt-bonus-flareRadius",
    animalCapacity: "txt-bonus-animalCapacity",

    loyaltyBoost: '%txt-bonus-loyaltyBoost',
    tripCost: '%txt-base-sanity-travel',
    compass: "%txt-bonus-compass",
    zoneEventChance: '%txt-bonus-zoneChance',
    viewDist: '%txt-bonus-viewDist',
    healthRegen: "%txt-bonus-healthRegen",
    mapScore: "%txt-bonus-mapScore",
    infection: "%txt-bonus-infection",
  },

  help: {
    compass: 'txt-help-compass',
    sanity: 'txt-help-sanity',
    standing: 'txt-help-standing',
    standing2: 'txt-help-standing2',
    turns: 'txt-help-turns',
    fame: 'txt-help-fame',
    xp: 'txt-help-xp',
    overburden: "txt-help-overburden",
    overfilled: "txt-help-overfilled",
    lostStash: "txt-help-lostStash",
    levelUp: "txt-help-levelUp",
    health: "txt-help-health",
    loyalty: "txt-help-loyalty",
    dice: "txt-help-dice",
    capacity: "txt-help-capacity",
    wait: "txt-help-wait",
    balloon: "txt-help-balloon",
    raceBar: "txt-help-raceBar",
    barter: "txt-help-barter",
    trash: 'txt-help-trash',
    easyDifficulty: "txt-help-easyDifficulty",
    mediumDifficulty: "txt-help-mediumDifficulty",
    hardDifficulty: "txt-help-hardDifficulty",
    challengePin: 'txt-help-challengePin',
    challengeRoll: 'txt-help-challengeRoll',
    challengeAttack: 'txt-help-challengeAttack',
    challengeRound: 'txt-help-challengeRound',
    challengeUnpin: 'txt-help-challengeUnpin',

    combat: {
      enemyDie: "txt-help-combat-enemyDie",
      roll: "txt-help-combat-roll",
      reroll: "txt-help-combat-reroll",
      flee: "txt-help-combat-flee",
      shield: "txt-help-combat-shield",
    },

    worldmap: {
      rival: "txt-help-worldmap-rival"
    },

    settings: {
      quickText: "txt-help-settings-quickText",
      button: "txt-help-settings-button",
      customCursor: "txt-help-settings-customCursor",
      sendStats: "txt-help-settings-sendStats",
      resetProfile: "txt-help-settings-resetProfile",
      saving: "txt-help-settings-saving",
      quit: "txt-help-settings-quit",

      scale1: ["txt-help-settings-scale1", "txt-help-settings-scale-refuse"],
      scale2: ["txt-help-settings-scale2", "txt-help-settings-scale-refuse"],
      scale3: ["txt-help-settings-scale3", "txt-help-settings-scale-refuse"],
      scaleStrech: ["txt-help-settings-scaleS", "txt-help-settings-scale-refuse"],
    }
  },

  gameOver: {
    noSanity: "txt-gameover-noSanity",
    combat: "txt-gameover-combat",
  },

  // specialStrings: [
  //   {text: '\\$leftClick', default: 'left-click', osx: 'click'},
  //   {text: '\\$rightClick', default: 'right-click', osx: 'ctrl-click'},
  // ],

  report: {
    startWorld: 'txt-startworld-report'
  },

  narrator: [
    'txt-narrator-1',
    'txt-narrator-2',
    'txt-narrator-3',
    'txt-narrator-4'
  ],

  sounds: {
    travelBar: 'sfx_click_xylo',
    campOpen: 'sfx_reveal_kalimba',
    campClose: 'sfx_click_xylo',
    nextChar: 'sfx_click_wood',
    diaryAction: 'sfx_click_xylo',
    moveConfirm: 'sfx_click_eBongo_b',
    triangulation: 'sfx_reveal_kalimba',
    consume: 'sfx_click_xylo',
    dayStart: 'sfx_rhythm_reveal_b',
    biome: 'back_style_4_004',
    yay: 'sfx_campOpen',
    outroBang: 'sfx_reveal_guitar_a',
    outroCount: 'sfx_click_castanet',
    achievement: 'sfx_reveal_kalimba',

    diaryOpen: 'sfx_diary',
    diaryClose: 'sfx_diary',

    cheer1: 'sfx_cheer_1',
    cheer2: 'sfx_cheer_2',
    cheer3: 'sfx_cheer_3',

    zoneAttacked: 'sfx_combat_attack_1',
    combat_attack_1: 'sfx_combat_attack_1',
    combat_attack_2: 'sfx_combat_attack_2',
    combat_shieldActivate: 'sfx_combat_shield_1',

    titleMusic: 'thm_main_1',
    clubMusic: 'thm_explorersClub_1',
    combatMusic: 'loop_combat_1',
    celebrationMusic: 'thm_celebration_1',

    diceRoll: 'sfx_dice_roll_7',
    diceSelect: 'sfx_clickclack',
    diceDismiss: 'sfx_click_eBongo_a',
    diceShield: 'sfx_combat_shield_2',
    diceButton: 'sfx_button_1',

    volcanoErupt: 'VolcanoErupt_Oneshot',

    loopVoid: 'Void_Loop',
    loopChasm: 'Chasm_Loop',
    loopWildfire: 'Fire_Loop',
    loopVolcano: 'Volcano_Loop',
    loopFlood: 'Flood_Loop',
    loopDryfication: 'Dryification_Loop',
    loopGas: 'loop_gas',

    sledgeLoop: 'loop_sledge',
  }

};

// initializing debug values. use debug.conf.js to overwrite these
var debug =
{
  testTribe: 'tg-jungle',
  tribeBackground: '#4b3a32',
  testExplorer: null,
  testWorldLevel: null, // if set new games start with this world
  testDifficulty: null, // default difficulty
  testPocket: null,
  testItem: null,
  testStatus: null,
  testCharacter: null,
  testGoal: null,
  testLocation: null,
  testEvent: null,
  testPerk: null,
};

//Merge static config into config
Object.merge(config, staticConfig)
