config.entities.add([

	{
	  id: 'evt-harbor-afterMath-curse',
	  charEffects: {
	    reqStatus: '+deathCurse',
	    text: "txt-evt-harbor-afterMath-curse",
	    storeCharacter: true,
	    setCharFlags: '+dead',
	    actions: 'evt-harbor-eventSelection'
	  }
	},
	{
	  id: 'evt-harbor-afterMath-renounced',
	  charEffects: {
	    count: 'any',
	    reqStatus: '+renounced',
	    text: "txt-evt-harbor-afterMath-renounced",
	    removeCharacter: true,
	    actions: 'evt-harbor-eventSelection'
	  }
	},
	{
	  id: 'evt-harbor-afterMath-spouse',
	  reqPartyStatus: '+promiseSpouse',

	  setPartyStatus: '-promiseSpouse',
	  npc: 'npc-wife',

	  storeEffects: {
	    reqCharFlags: '+dead +promise',
	    text: "txt-evt-harbor-afterMath-spouse",
	    actions: [
	      {
	        actionText: "txt-evt-harbor-afterMath-spouse-action",
	        text: "txt-evt-harbor-afterMath-spouse-1",
	        funds: -20,
	        alwaysShown: true,
	        actions: 'evt-harbor-eventSelection'
	      },
	      {
	        actionText: "txt-evt-harbor-afterMath-spouse-action-1",
	        text: "txt-evt-harbor-afterMath-spouse-2",
	        charEffects: {
	          reqCharFlags: '-special -homesick +humanoid',
	          loyalty: -1
	        },
	        actions: 'evt-harbor-eventSelection'
	      }
	    ]
	  },
	},

])