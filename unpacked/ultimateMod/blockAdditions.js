const modVersion = "0.1.0";
const lbVersion = "0.4.1";

var moddedEnvironment = {
	skyColor: {
		horizon: {	// Horizon color of sky gradient (default 255 255 255)
			r: 255,
			g: 255,
			b: 255
		},
		zenith: {	// Top color of sky gradient (default 5 140 255)
			r: 5,
			g: 140,
			b: 255
		}
	},
	skyLight: {
		lightColor: {
			r: 255,	// default 59
			g: 255,	// default 97
			b: 255	// default 141
		},
		groundColor: {
			r: 195,	// default 178
			g: 195,	// default 192
			b: 195	// default 195
		},
		intensity: 2.7	// default 4.7
	},
	sun: {
		size: 1/1000,	// size of the sun (default 1/1000)
		intensity: 60000000000,	// intensity of the sun (default 60000000000)
		color: {
			r: 20,	// default 20
			g: 20,	// default 20
			b: 19	// default 19
		}
	},
	sunLight: {
		color: {
			r: 255,	// default 255
			g: 255,	// default 255
			b: 255	// default 255
		},
		intensity: 4.7	// default 4.7
	},
	fog: {
		color: {
			r: 103,	// default 103
			g: 169,	// default 169
			b: 169	// default 169
		},
		density: 0.001	// default 0.001
	},
	mountains: {
		color: {
			r: 53,	// default 53
			g: 86,	// default 86
			b: 56	// default 56
		}
	},
	ground: {
		color: {
			r: 53,	// default 53
			g: 86,	// default 86
			b: 56	// default 56
		}
	}
}

const moddedBlocks = {
	categories: [
		"SlopedTurns", 
		"Forty",
		"BlocksPlus", 
		"BlockMixingRoads",
		"BorderlessRoads",
		"Zones", 
		"Text",
		"Minecraft",
		"Statues",
		"Space", 
		"Environment", 
		"Spooky"
	],
	modelPaths: [
		"ultimateMod/models/customSigns.glb",
		"ultimateMod/models/statues.glb",
		"ultimateMod/models/specialBlocks.glb",
		"ultimateMod/models/environment.glb",
		"ultimateMod/models/diagonalRoads.glb",
		"ultimateMod/models/spookyTrack.glb",
		"ultimateMod/models/zones.glb",
		"ultimateMod/models/polySpiders.glb",
		"ultimateMod/models/hayBales.glb",
		"ultimateMod/models/blocksplus.glb",
		"ultimateMod/models/blockmixingroads.glb",
		"ultimateMod/models/text.glb",
		"ultimateMod/models/borderlessroads.glb"
	],
	blockColors: {
		"Red": null, 
		"DarkRed": [0, .95, -.09], 
		"Orange": [0.05, .6, .1], 
		"Yellow": [0.12, .6, .1], 
		"DarkGreen": [0.38, .4, -.04], 
		"LightGreen": [0.35, 0.235, 0.071], 
		"LightBlue": [0.48, .4, .1], 
		"MediumBlue": [0.6, .4, .1], 
		"Blue": null, 
		"Purple": [0.72, .4, .1], 
		"DarkPurple": [0.72, .4, 0], 
		"Pink": [0.82, .3, .18], 
		"HotPink": [0.89, .5, .15], 
		"White": [0, 0, .3], 
		"LightGray": [0, 0, .1],
		"DarkGray": [0, 0, -.075], 
		"Black": null, 
		"Beige": [.1, .2, .1], 
		"Brown": [.06, .4, -.06]
	},
    blocks: [
		/*{name: "Grass", category: "Minecraft", blenderSceneName: "Minecraft", id: 180},
		{name: "Dirt", category: "Minecraft", blenderSceneName: "Minecraft", id: 179},
		{name: "Stone", category: "Minecraft", blenderSceneName: "Minecraft", id: 181},
		{name: "Cobble", category: "Minecraft", blenderSceneName: "Minecraft", id: 182},
		{name: "OakPlank", category: "Minecraft", blenderSceneName: "Minecraft", id: 184},
		{name: "OakLog", category: "Minecraft", blenderSceneName: "Minecraft", id: 185},
		//{name: "OakLeaves", category: "Minecraft", blenderSceneName: "Minecraft", id: 186},
		{name: "Water", category: "Minecraft", blenderSceneName: "Minecraft", id: 183},*/

		{name: "SignHardFish", category: "Sign", blenderSceneName: "CustomSigns", id: 187},
		{name: "SignHardFishBig", category: "Sign", blenderSceneName: "CustomSigns", id: 188},
		{name: "RickrollQR", category: "Sign", blenderSceneName: "CustomSigns", id: 190},
		
		{name: "PolyCarStatueGold", category: "Statues", blenderSceneName: "Statues", id: 195},
		{name: "PolyCarStatueSilver", category: "Statues", blenderSceneName: "Statues", id: 194},
		{name: "PolyCarStatueBronze", category: "Statues", blenderSceneName: "Statues", id: 191},
		{name: "KodubStatue", category: "Statues", blenderSceneName: "Statues", id: 212},
		{name: "StatueBase", category: "Statues", blenderSceneName: "Statues", id: 213},
		{name: "PolyCar", category: "Statues", blenderSceneName: "Statues", id: 189},

		/*{name: "StopSignPole", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 192},
		{name: "StopSignWall", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 193},
		{name: "SL50", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 196},
		{name: "SL100", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 197},
		{name: "SL250", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 198},
		{name: "SL500", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 199},
		{name: "SL999", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 200},*/
		
		{name: "StartLine", category: "Special", blenderSceneName: "SpecialBlocks", id: 201, isStart: true},
		{name: "FinishLine", category: "Special", blenderSceneName: "SpecialBlocks", id: 202, isFinish: true},
		{name: "BarlessFinish", category: "Special", blenderSceneName: "SpecialBlocks", id: 203, isFinish: true},
		{name: "UpsideDownFinish", category: "Special", blenderSceneName: "SpecialBlocks", id: 204, isFinish: true},
		{name: "VerticalFinish", category: "Special", blenderSceneName: "SpecialBlocks", id: 205, isFinish: true},
		{name: "WallFinish", category: "Special", blenderSceneName: "SpecialBlocks", id: 206, isFinish: true},
		{name: "CheckpointLine", category: "Special", blenderSceneName: "SpecialBlocks", id: 207, isCheckpoint: true},
		{name: "BarlessCheckpoint", category: "Special", blenderSceneName: "SpecialBlocks", id: 208, isCheckpoint: true},
		{name: "UpsideDownCheckpoint", category: "Special", blenderSceneName: "SpecialBlocks", id: 209, isCheckpoint: true},
		{name: "VerticalCheckpoint", category: "Special", blenderSceneName: "SpecialBlocks", id: 210, isCheckpoint: true},
		{name: "WallCheckpoint", category: "Special", blenderSceneName: "SpecialBlocks", id: 211, isCheckpoint: true},
    	
		/*{name: "planet1", category: "Space", blenderSceneName: "Space", id: 214},
		{name: "planet2", category: "Space", blenderSceneName: "Space", id: 215},
		{name: "planet3", category: "Space", blenderSceneName: "Space", id: 216},
		{name: "planet4", category: "Space", blenderSceneName: "Space", id: 217},
		{name: "planet5", category: "Space", blenderSceneName: "Space", id: 218},
		{name: "planet6", category: "Space", blenderSceneName: "Space", id: 219},*/
		
		{name: "SandyHill", category: "Environment", blenderSceneName: "Environment", id: 220},
		{name: "SnowyMt", category: "Environment", blenderSceneName: "Environment", id: 221},
		{name: "Volcano", category: "Environment", blenderSceneName: "Environment", id: 222},

		/*{name: "TurnLong2Diag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 223},
		{name: "TurnLong3Diag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 224},
		{name: "TurnLongDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 225},
		{name: "TurnSharpDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 226},
		{name: "TurnShortDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 227},
		{name: "TurnSLeftDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 228},
		{name: "TurnSRightDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 229},*/

		/*{name: "CandyCorn", category: "Spooky", blenderSceneName: "Spooky", id: 230},
		{name: "CandyCornCluster", category: "Spooky", blenderSceneName: "Spooky", id: 231},
		{name: "CandyCornTriple", category: "Spooky", blenderSceneName: "Spooky", id: 232},
		{name: "Grave1", category: "Spooky", blenderSceneName: "Spooky", id: 233},
		{name: "Grave1Double", category: "Spooky", blenderSceneName: "Spooky", id: 234},
		{name: "Grave2", category: "Spooky", blenderSceneName: "Spooky", id: 235},
		{name: "Grave2Double", category: "Spooky", blenderSceneName: "Spooky", id: 236},
		{name: "JackOLanternAngry", category: "Spooky", blenderSceneName: "Spooky", id: 237},
		{name: "JackOLanternAngryBig", category: "Spooky", blenderSceneName: "Spooky", id: 238},
		{name: "JackOLanternSmile", category: "Spooky", blenderSceneName: "Spooky", id: 239},
		{name: "JackOLanternSmileBig", category: "Spooky", blenderSceneName: "Spooky", id: 240},
		{name: "Lollipop", category: "Spooky", blenderSceneName: "Spooky", id: 241},*/
		{name: "LollipopGate", category: "Spooky", blenderSceneName: "Spooky", id: 242, isBoost:true},
		/*{name: "Pumpkin", category: "Spooky", blenderSceneName: "Spooky", id: 243},
		{name: "PumpkinBig", category: "Spooky", blenderSceneName: "Spooky", id: 244},
		{name: "PumpkinTall", category: "Spooky", blenderSceneName: "Spooky", id: 245},
		{name: "PumpkinTrio", category: "Spooky", blenderSceneName: "Spooky", id: 246},*/
		{name: "DeadTree1", category: "Spooky", blenderSceneName: "Spooky", id: 248},
		{name: "DeadTree2", category: "Spooky", blenderSceneName: "Spooky", id: 249},
		{name: "DeadTree3", category: "Spooky", blenderSceneName: "Spooky", id: 250},
		{name: "DeadTree4", category: "Spooky", blenderSceneName: "Spooky", id: 260},
		{name: "DeadTreeBig1", category: "Spooky", blenderSceneName: "Spooky", id: 261},
		{name: "DeadTreeBig2", category: "Spooky", blenderSceneName: "Spooky", id: 262},
		{name: "DeadTreeBig3", category: "Spooky", blenderSceneName: "Spooky", id: 263},
		{name: "DeadTreeBig4", category: "Spooky", blenderSceneName: "Spooky", id: 264},
		{name: "DeadTreeBig5", category: "Spooky", blenderSceneName: "Spooky", id: 265},
		/*{name: "Eye1", category: "Spooky", blenderSceneName: "Spooky", id: 251},
		{name: "Eye2", category: "Spooky", blenderSceneName: "Spooky", id: 252},
		{name: "Mushroom1", category: "Spooky", blenderSceneName: "Spooky", id: 253},
		{name: "Mushroom2", category: "Spooky", blenderSceneName: "Spooky", id: 254},
		{name: "MushroomRed1", category: "Spooky", blenderSceneName: "Spooky", id: 258},
		{name: "MushroomRed2", category: "Spooky", blenderSceneName: "Spooky", id: 259},*/

		{name: "HayBale", category: "Spooky", blenderSceneName: "HayBales", id: 255},
		{name: "HayBaleTriple", category: "Spooky", blenderSceneName: "HayBales", id: 256},
		{name: "HayBaleStack", category: "Spooky", blenderSceneName: "HayBales", id: 257},

		{name: "Spider", category: "Spooky", blenderSceneName: "Spiders", id: 266},
		{name: "SpiderBig", category: "Spooky", blenderSceneName: "Spiders", id: 267},
		//{name: "SpiderPile", category: "Spooky", blenderSceneName: "Spiders", id: 268},

		//{name: "Boggy", category: "Spooky", blenderSceneName: "Spooky", id: 247},
		{name: "BoggyBig", category: "Spooky", blenderSceneName: "Spooky", id: 270},
		{name: "Cauldron", category: "Spooky", blenderSceneName: "Spooky", id: 271},
		{name: "CauldronGoopGreen", category: "Spooky", blenderSceneName: "Spooky", id: 272},
		{name: "CauldronGoopPurple", category: "Spooky", blenderSceneName: "Spooky", id: 273},
		{name: "FenceCorner", category: "Spooky", blenderSceneName: "Spooky", id: 274},
		{name: "FenceFull", category: "Spooky", blenderSceneName: "Spooky", id: 275},
		{name: "FenceGate", category: "Spooky", blenderSceneName: "Spooky", id: 276},
		{name: "FenceGate2", category: "Spooky", blenderSceneName: "Spooky", id: 277},
		{name: "FenceHalf", category: "Spooky", blenderSceneName: "Spooky", id: 278},
		{name: "FenceTee", category: "Spooky", blenderSceneName: "Spooky", id: 288},

		//{name: "CornLight", category: "Spooky", blenderSceneName: "Spooky", id: 279},
		//{name: "CornMazeSingle", category: "Spooky", blenderSceneName: "Spooky", id: 280},

		//{name: "CobbleStraight", category: "Spooky", blenderSceneName: "Cobblestone", id: 281},
		//{name: "CobbleCheckpoint", category: "Spooky", blenderSceneName: "Cobblestone", id: 283, isCheckpoint: true},
		//{name: "CobbleFinish", category: "Spooky", blenderSceneName: "Cobblestone", id: 285}
		//{name: "CobbleStart", category: "Spooky", blenderSceneName: "Cobblestone", id: 284}

		{name: "1Boost", category: "Zones", blenderSceneName: "Zones", id: 286, isBoostZone: true},
		{name: "1BoostBig", category: "Zones", blenderSceneName: "Zones", id: 529, isBoostZone: true, big: true},
		{name: "2Checkpoint", category: "Zones", blenderSceneName: "Zones", id: 287, isCheckpointZone: true},
		{name: "2CheckpointBig", category: "Zones", blenderSceneName: "Zones", id: 530, isCheckpointZone: true, big: true},
		{name: "3Finish", category: "Zones", blenderSceneName: "Zones", id: 483, isFinishZone: true},
		{name: "3FinishBig", category: "Zones", blenderSceneName: "Zones", id: 531, isFinishZone: true, big: true},
		{name: "4LowGrav", category: "Zones", blenderSceneName: "Zones", id: 484, isLowGravity: true},
		{name: "4LowGravBig", category: "Zones", blenderSceneName: "Zones", id: 532, isLowGravity: true, big: true},
		{name: "5HighGrav", category: "Zones", blenderSceneName: "Zones", id: 485, isHighGravity: true},
		{name: "5HighGravBig", category: "Zones", blenderSceneName: "Zones", id: 533, isHighGravity: true, big: true},
		{name: "6Slip", category: "Zones", blenderSceneName: "Zones", id: 486, isLowFriction: true},
		{name: "6SlipBig", category: "Zones", blenderSceneName: "Zones", id: 534, isLowFriction: true, big: true},
		{name: "7Grip", category: "Zones", blenderSceneName: "Zones", id: 487, isHighFriction: true},
		{name: "7GripBig", category: "Zones", blenderSceneName: "Zones", id: 535, isHighFriction: true, big: true},
		{name: "8EngineOff", category: "Zones", blenderSceneName: "Zones", id: 488, isEngineOff: true},
		{name: "8EngineOffBig", category: "Zones", blenderSceneName: "Zones", id: 536, isEngineOff: true, big: true},
		{name: "9NoWallrideForce", category: "Zones", blenderSceneName: "Zones", id: 537, isNoDownforce: true},
		{name: "9NoWallrideForceBig", category: "Zones", blenderSceneName: "Zones", id: 538, isNoDownforce: true, big: true},
		{name: "10HighWallrideForce", category: "Zones", blenderSceneName: "Zones", id: 539, isHighDownforce: true},
		{name: "10HighWallrideForceBig", category: "Zones", blenderSceneName: "Zones", id: 540, isHighDownforce: true, big: true},
		{name: "11NegativeWallrideForce", category: "Zones", blenderSceneName: "Zones", id: 541, isNegativeDownforce: true},
		{name: "11NegativeWallrideForceBig", category: "Zones", blenderSceneName: "Zones", id: 542, isNegativeDownforce: true, big: true},


		{name: "B1", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 290},
		{name: "B2", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 291},
		{name: "B3", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 292},
		{name: "B4", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 293},
		{name: "B5", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 294},
		{name: "B6", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 295},
		{name: "B7", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 296},
		{name: "B8", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 297},
		{name: "B9", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 298},
		{name: "B10", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 299},
		{name: "B11", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 300},
		{name: "B12", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 301},
		{name: "B13", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 302},
		{name: "B14", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 303},
		{name: "B15", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 304},
		{name: "B16", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 305},
		{name: "B17", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 306},
		{name: "B18", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 307},
		{name: "B19", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 308},
		{name: "B20", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 309},
		{name: "B21", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 310},
		{name: "B22", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 311},
		{name: "B23", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 312},
		{name: "B24", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 313},
		{name: "B25", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 314},
		{name: "B26", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 315},
		{name: "B27", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 316},
		{name: "B28", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 317},
		{name: "B29", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 318},
		{name: "B30", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 439},
		{name: "B31", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 440},
		{name: "B32", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 441},
		{name: "B33", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 442},
		{name: "B34", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 443},
		{name: "B35", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 444},
		{name: "B36", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 445},
		{name: "B37", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 446},
		{name: "B38", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 447},
		{name: "B39", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 448},
		{name: "B40", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 449},
		{name: "B41", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 450},
		{name: "B42", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 451},
		{name: "B43", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 452},
		{name: "B44", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 453},
		{name: "B45", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 454},
		{name: "B46", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 455},
		{name: "B47", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 456},
		{name: "B48", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 457},
		{name: "B49", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 458},
		{name: "B50", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 459},
		{name: "B51", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 460},
		{name: "B52", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 461},
		{name: "B53", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 462},
		{name: "B54", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 463},
		{name: "B55", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 464},
		{name: "B56", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 465},
		{name: "B57", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 466},
		{name: "B58", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 467},
		{name: "B59", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 468},
		{name: "B60", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 469},
		{name: "B61", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 523},
		{name: "B62", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 524},
		{name: "B63", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 525},
		{name: "B64", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 526},
		{name: "B65", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 527},
		{name: "B66", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 528},
		{name: "B67", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 489},
		{name: "B68", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 490},
		{name: "B69", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 491},
		{name: "B70", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 492},
		{name: "B71", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 493},
		{name: "B72", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 494},
		{name: "B73", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 495},
		{name: "B74", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 496},
		{name: "B75", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 497},
		{name: "B76", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 498},
		{name: "B77", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 499},
		{name: "B78", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 500},
		{name: "B79", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 501},
		{name: "B80", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 502},
		{name: "B81", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 503},
		{name: "B82", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 504},
		{name: "B83", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 505},
		{name: "B84", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 506},
		{name: "B85", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 507},
		{name: "B86", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 508},
		{name: "B87", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 509},
		{name: "B88", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 510},
		{name: "B89", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 511},
		{name: "B90", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 512},
		{name: "B91", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 513},
		{name: "B92", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 514},
		{name: "B93", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 515},
		/*{name: "B94", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 516},
		{name: "B95", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 517},
		{name: "B96", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 518},
		{name: "B97", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 519},
		{name: "B98", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 520},
		{name: "B99", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 521},
		{name: "B100", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 522},*/
		
		{name: "LA", category: "Text", blenderSceneName: "Text", id: 319, isAirControl: true},
		{name: "LB", category: "Text", blenderSceneName: "Text", id: 320, isAirControl: true, big: true},
		{name: "LC", category: "Text", blenderSceneName: "Text", id: 321},
		{name: "LD", category: "Text", blenderSceneName: "Text", id: 322},
		{name: "LE", category: "Text", blenderSceneName: "Text", id: 323},
		{name: "LF", category: "Text", blenderSceneName: "Text", id: 324},
		{name: "LG", category: "Text", blenderSceneName: "Text", id: 325},
		{name: "LH", category: "Text", blenderSceneName: "Text", id: 326},
		{name: "LI", category: "Text", blenderSceneName: "Text", id: 327},
		{name: "LJ", category: "Text", blenderSceneName: "Text", id: 328},
		{name: "LK", category: "Text", blenderSceneName: "Text", id: 329},
		{name: "LL", category: "Text", blenderSceneName: "Text", id: 330},
		{name: "LM", category: "Text", blenderSceneName: "Text", id: 331},
		{name: "LN", category: "Text", blenderSceneName: "Text", id: 332},
		{name: "LO", category: "Text", blenderSceneName: "Text", id: 333},
		{name: "LP", category: "Text", blenderSceneName: "Text", id: 334},
		{name: "LQ", category: "Text", blenderSceneName: "Text", id: 335},
		{name: "LR", category: "Text", blenderSceneName: "Text", id: 336},
		{name: "LS", category: "Text", blenderSceneName: "Text", id: 337},
		{name: "LT", category: "Text", blenderSceneName: "Text", id: 338},
		{name: "LU", category: "Text", blenderSceneName: "Text", id: 339},
		{name: "LV", category: "Text", blenderSceneName: "Text", id: 340},
		{name: "LW", category: "Text", blenderSceneName: "Text", id: 341},
		{name: "LX", category: "Text", blenderSceneName: "Text", id: 342},
		{name: "LY", category: "Text", blenderSceneName: "Text", id: 343},
		{name: "LZ", category: "Text", blenderSceneName: "Text", id: 344},
		{name: "L0", category: "Text", blenderSceneName: "Text", id: 345},
		{name: "L1", category: "Text", blenderSceneName: "Text", id: 346},
		{name: "L2", category: "Text", blenderSceneName: "Text", id: 347},
		{name: "L3", category: "Text", blenderSceneName: "Text", id: 348},
		{name: "L4", category: "Text", blenderSceneName: "Text", id: 349},
		{name: "L5", category: "Text", blenderSceneName: "Text", id: 350},
		{name: "L6", category: "Text", blenderSceneName: "Text", id: 351},
		{name: "L7", category: "Text", blenderSceneName: "Text", id: 352},
		{name: "L8", category: "Text", blenderSceneName: "Text", id: 353},
		{name: "L9", category: "Text", blenderSceneName: "Text", id: 354},
		
		{name: "A_Black", category: "Text", blenderSceneName: "Text", id: 355},
		{name: "B_Black", category: "Text", blenderSceneName: "Text", id: 356},
		{name: "C_Black", category: "Text", blenderSceneName: "Text", id: 357},
		{name: "D_Black", category: "Text", blenderSceneName: "Text", id: 358},
		{name: "E_Black", category: "Text", blenderSceneName: "Text", id: 359},
		{name: "F_Black", category: "Text", blenderSceneName: "Text", id: 360},
		{name: "G_Black", category: "Text", blenderSceneName: "Text", id: 361},
		{name: "H_Black", category: "Text", blenderSceneName: "Text", id: 362},
		{name: "I_Black", category: "Text", blenderSceneName: "Text", id: 363},
		{name: "J_Black", category: "Text", blenderSceneName: "Text", id: 364},
		{name: "K_Black", category: "Text", blenderSceneName: "Text", id: 365},
		{name: "L_Black", category: "Text", blenderSceneName: "Text", id: 366},
		{name: "M_Black", category: "Text", blenderSceneName: "Text", id: 367},
		{name: "N_Black", category: "Text", blenderSceneName: "Text", id: 368},
		{name: "O_Black", category: "Text", blenderSceneName: "Text", id: 369},
		{name: "P_Black", category: "Text", blenderSceneName: "Text", id: 370},
		{name: "Q_Black", category: "Text", blenderSceneName: "Text", id: 371},
		{name: "R_Black", category: "Text", blenderSceneName: "Text", id: 372},
		{name: "S_Black", category: "Text", blenderSceneName: "Text", id: 373},

		{name: "T_Black", category: "Text", blenderSceneName: "Text", id: 374},
		{name: "U_Black", category: "Text", blenderSceneName: "Text", id: 375},
		{name: "V_Black", category: "Text", blenderSceneName: "Text", id: 376},
		{name: "W_Black", category: "Text", blenderSceneName: "Text", id: 377},
		{name: "X_Black", category: "Text", blenderSceneName: "Text", id: 378},
		{name: "Y_Black", category: "Text", blenderSceneName: "Text", id: 379},
		{name: "Z_Black", category: "Text", blenderSceneName: "Text", id: 380},
		{name: "0_Black", category: "Text", blenderSceneName: "Text", id: 381},
		{name: "1_Black", category: "Text", blenderSceneName: "Text", id: 382},
		{name: "2_Black", category: "Text", blenderSceneName: "Text", id: 383},
		{name: "3_Black", category: "Text", blenderSceneName: "Text", id: 384},
		{name: "4_Black", category: "Text", blenderSceneName: "Text", id: 385},
		{name: "5_Black", category: "Text", blenderSceneName: "Text", id: 386},
		{name: "6_Black", category: "Text", blenderSceneName: "Text", id: 387},
		{name: "7_Black", category: "Text", blenderSceneName: "Text", id: 388},
		{name: "8_Black", category: "Text", blenderSceneName: "Text", id: 389},
		{name: "9_Black", category: "Text", blenderSceneName: "Text", id: 390},

		
		/*{name: "Forty1", category: "Forty", blenderSceneName: "Forty", id: 391},
		{name: "Forty2", category: "Forty", blenderSceneName: "Forty", id: 392},
		{name: "Forty3", category: "Forty", blenderSceneName: "Forty", id: 393},
		{name: "Forty4", category: "Forty", blenderSceneName: "Forty", id: 394},
		{name: "Forty5", category: "Forty", blenderSceneName: "Forty", id: 395},
		{name: "Forty6", category: "Forty", blenderSceneName: "Forty", id: 396},
		{name: "Forty7", category: "Forty", blenderSceneName: "Forty", id: 397},
		{name: "Forty8", category: "Forty", blenderSceneName: "Forty", id: 398},
		{name: "Forty9", category: "Forty", blenderSceneName: "Forty", id: 399},
		{name: "Forty10", category: "Forty", blenderSceneName: "Forty", id: 400},
		{name: "Forty11", category: "Forty", blenderSceneName: "Forty", id: 401},
		{name: "Forty12", category: "Forty", blenderSceneName: "Forty", id: 402},
		{name: "Forty13", category: "Forty", blenderSceneName: "Forty", id: 403},
		{name: "Forty14", category: "Forty", blenderSceneName: "Forty", id: 404},
		{name: "Forty15", category: "Forty", blenderSceneName: "Forty", id: 405},
		{name: "Forty16", category: "Forty", blenderSceneName: "Forty", id: 406},
		{name: "Forty17", category: "Forty", blenderSceneName: "Forty", id: 407},
		{name: "Forty18", category: "Forty", blenderSceneName: "Forty", id: 408},
		{name: "Forty19", category: "Forty", blenderSceneName: "Forty", id: 409},
		{name: "Forty20", category: "Forty", blenderSceneName: "Forty", id: 410},
		{name: "Forty21", category: "Forty", blenderSceneName: "Forty", id: 411},
		{name: "Forty22", category: "Forty", blenderSceneName: "Forty", id: 412},
		{name: "Forty23", category: "Forty", blenderSceneName: "Forty", id: 413},
		{name: "Forty24", category: "Forty", blenderSceneName: "Forty", id: 414},
		{name: "Forty25", category: "Forty", blenderSceneName: "Forty", id: 415},
		{name: "Forty26", category: "Forty", blenderSceneName: "Forty", id: 416},
		{name: "Forty27", category: "Forty", blenderSceneName: "Forty", id: 417},
		{name: "Forty28", category: "Forty", blenderSceneName: "Forty", id: 418},
		{name: "Forty29", category: "Forty", blenderSceneName: "Forty", id: 419},
		{name: "Forty30", category: "Forty", blenderSceneName: "Forty", id: 420},
		{name: "Forty31", category: "Forty", blenderSceneName: "Forty", id: 421},
		{name: "Forty32", category: "Forty", blenderSceneName: "Forty", id: 422},
		{name: "Forty33", category: "Forty", blenderSceneName: "Forty", id: 423},
		{name: "Forty34", category: "Forty", blenderSceneName: "Forty", id: 424},
		{name: "Forty35", category: "Forty", blenderSceneName: "Forty", id: 425},
		{name: "Forty36", category: "Forty", blenderSceneName: "Forty", id: 426},
		{name: "Forty37", category: "Forty", blenderSceneName: "Forty", id: 427},
		{name: "Forty38", category: "Forty", blenderSceneName: "Forty", id: 428},
		{name: "Forty39", category: "Forty", blenderSceneName: "Forty", id: 429},
		{name: "Forty40", category: "Forty", blenderSceneName: "Forty", id: 430},
		{name: "Forty41", category: "Forty", blenderSceneName: "Forty", id: 431},
		{name: "Forty42", category: "Forty", blenderSceneName: "Forty", id: 432},
		{name: "Forty43", category: "Forty", blenderSceneName: "Forty", id: 433},
		{name: "Forty44", category: "Forty", blenderSceneName: "Forty", id: 434},
		{name: "Forty45", category: "Forty", blenderSceneName: "Forty", id: 435},
		{name: "Forty46", category: "Forty", blenderSceneName: "Forty", id: 436},
		{name: "Forty47", category: "Forty", blenderSceneName: "Forty", id: 437},
		{name: "Forty48", category: "Forty", blenderSceneName: "Forty", id: 438},*/

		
		{name: "BorderlessIntersectionCross", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 470},
		{name: "BorderlessIntersectionT", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 471},
		{name: "BorderlessStart", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 472},
		{name: "BorderlessStraight", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 473},
		{name: "BorderlessTurnLong", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 474},
		{name: "BorderlessTurnLong2", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 475},
		{name: "BorderlessTurnLong3", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 476},
		{name: "BorderlessTurnSFork", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 477},
		{name: "BorderlessTurnSharp", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 478},
		{name: "BorderlessTurnShort", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 479},
		{name: "BorderlessTurnSLeft", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 480},
		{name: "BorderlessTurnSRight", category: "BorderlessRoads", blenderSceneName: "BorderlessRoads", id: 481},
		{name: "TurnSFork", category: "Road", blenderSceneName: "BorderlessRoads", id: 482},


		// next id: 543
	]
};


const rgbDecimal = (rgb) => {
	return (rgb.r << 16) + (rgb.g << 8) + (rgb.b);
}

/*
var rainbowTime = 0;
setInterval(() => {
	let r = (Math.cos(rainbowTime) + 1) / 2;
	let g = (Math.cos(rainbowTime + (2 * Math.PI / 3)) + 1) / 2;
	let b = (Math.cos(rainbowTime + (4 * Math.PI / 3)) + 1) / 2;
	window.getWorld().scene.children[0].r = r;
	window.getWorld().scene.children[0].g = g;
	window.getWorld().scene.children[0].b = b;
	rainbowTime = (rainbowTime + 0.02) % (Math.PI * 2);
}, 50);
*/

/*

	Global Functions:
		getWorld():
			camera:
				position(x,y,z)
				rotation(_x,_y,_z)
				aspect(1.925)
				near(0.1)
				far(10000)
				coordinateSystem(2000)
				filmGauge(35)
				filmOffset(0)
				focus(10)
				fov(70)
				zoom(1)
				scale(x,y,z)
				up(x(0),y(1),z(0))

			canvas  // html canvas

			scene:
				children[array]:
					[
						0: HemisphereLight (sky light): {color(r,g,b), groundColor(r,g,b), intensity, position(x,y,z), rotation(_x,_y,_z)}
						1: DirectionalLight (sun light): same as HemisphereLight excluding groundColor
					]

				fog:
					color(r,g,b)
					density

				position
				rotation
				scale
				up

*/
