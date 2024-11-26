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
		"Minecraft", 
		"CustomSigns", 
		"Statues", 
		"RoadSigns", 
		"SpecialBlocks", 
		"Space", 
		"Environment", 
		"SlopedTurns", 
		"Spooky", 
		"Zones", 
		"BlocksPlus", 
		"BlockMixingRoads",
		"Text"
	],
	modelPaths: [
		"ultimateMod/models/minecraft.glb",
		"ultimateMod/models/customSigns.glb",
		"ultimateMod/models/statues.glb",
		"ultimateMod/models/roadSigns.glb",
		"ultimateMod/models/specialBlocks.glb",
		"ultimateMod/models/space.glb",
		"ultimateMod/models/environment.glb",
		"ultimateMod/models/diagonalRoads.glb",
		"ultimateMod/models/spookyTrack.glb",
		"ultimateMod/models/cobblestone.glb",
		"ultimateMod/models/zones.glb",
		"ultimateMod/models/polySpiders.glb",
		"ultimateMod/models/hayBales.glb",
		"ultimateMod/models/blocksplus.glb",
		"ultimateMod/models/blockmixingroads.glb",
		"ultimateMod/models/text.glb"
	],
    blocks: [
		{name: "Grass", category: "Minecraft", blenderSceneName: "Minecraft", id: 180},
		{name: "Dirt", category: "Minecraft", blenderSceneName: "Minecraft", id: 179},
		{name: "Stone", category: "Minecraft", blenderSceneName: "Minecraft", id: 181},
		{name: "Cobble", category: "Minecraft", blenderSceneName: "Minecraft", id: 182},
		{name: "OakPlank", category: "Minecraft", blenderSceneName: "Minecraft", id: 184},
		{name: "OakLog", category: "Minecraft", blenderSceneName: "Minecraft", id: 185},
		//{name: "OakLeaves", category: "Minecraft", blenderSceneName: "Minecraft", id: 186},
		{name: "Water", category: "Minecraft", blenderSceneName: "Minecraft", id: 183},

		{name: "SignHardFish", category: "CustomSigns", blenderSceneName: "CustomSigns", id: 187},
		{name: "SignHardFishBig", category: "CustomSigns", blenderSceneName: "CustomSigns", id: 188},
		{name: "RickrollQR", category: "CustomSigns", blenderSceneName: "CustomSigns", id: 190},
		
		{name: "PolyCarStatueGold", category: "Statues", blenderSceneName: "Statues", id: 195},
		{name: "PolyCarStatueSilver", category: "Statues", blenderSceneName: "Statues", id: 194},
		{name: "PolyCarStatueBronze", category: "Statues", blenderSceneName: "Statues", id: 191},
		{name: "KodubStatue", category: "Statues", blenderSceneName: "Statues", id: 212},
		{name: "StatueBase", category: "Statues", blenderSceneName: "Statues", id: 213},
		{name: "PolyCar", category: "Statues", blenderSceneName: "Statues", id: 189},

		{name: "StopSignPole", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 192},
		{name: "StopSignWall", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 193},
		{name: "SL50", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 196},
		{name: "SL100", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 197},
		{name: "SL250", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 198},
		{name: "SL500", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 199},
		{name: "SL999", category: "RoadSigns", blenderSceneName: "RoadSigns", id: 200},
		
		{name: "StartLine", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 201, isStart: true},
		{name: "FinishLine", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 202, isFinish: true},
		{name: "BarlessFinish", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 203, isFinish: true},
		{name: "UpsideDownFinish", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 204, isFinish: true},
		{name: "VerticalFinish", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 205, isFinish: true},
		{name: "WallFinish", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 206, isFinish: true},
		{name: "CheckpointLine", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 207, isCheckpoint: true},
		{name: "BarlessCheckpoint", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 208, isCheckpoint: true},
		{name: "UpsideDownCheckpoint", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 209, isCheckpoint: true},
		{name: "VerticalCheckpoint", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 210, isCheckpoint: true},
		{name: "WallCheckpoint", category: "SpecialBlocks", blenderSceneName: "SpecialBlocks", id: 211, isCheckpoint: true},
    	
		{name: "planet1", category: "Space", blenderSceneName: "Space", id: 214},
		{name: "planet2", category: "Space", blenderSceneName: "Space", id: 215},
		{name: "planet3", category: "Space", blenderSceneName: "Space", id: 216},
		{name: "planet4", category: "Space", blenderSceneName: "Space", id: 217},
		{name: "planet5", category: "Space", blenderSceneName: "Space", id: 218},
		{name: "planet6", category: "Space", blenderSceneName: "Space", id: 219},
		
		{name: "SandyHill", category: "Environment", blenderSceneName: "Environment", id: 220},
		{name: "SnowyMt", category: "Environment", blenderSceneName: "Environment", id: 221},
		{name: "Volcano", category: "Environment", blenderSceneName: "Environment", id: 222},

		{name: "TurnLong2Diag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 223},
		{name: "TurnLong3Diag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 224},
		{name: "TurnLongDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 225},
		{name: "TurnSharpDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 226},
		{name: "TurnShortDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 227},
		{name: "TurnSLeftDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 228},
		{name: "TurnSRightDiag", category: "SlopedTurns", blenderSceneName: "DiagonalRoads", id: 229},

		{name: "CandyCorn", category: "Spooky", blenderSceneName: "Spooky", id: 230},
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
		{name: "Lollipop", category: "Spooky", blenderSceneName: "Spooky", id: 241},
		{name: "LollipopGate", category: "Spooky", blenderSceneName: "Spooky", id: 242, isBoost:true},
		{name: "Pumpkin", category: "Spooky", blenderSceneName: "Spooky", id: 243},
		{name: "PumpkinBig", category: "Spooky", blenderSceneName: "Spooky", id: 244},
		{name: "PumpkinTall", category: "Spooky", blenderSceneName: "Spooky", id: 245},
		{name: "PumpkinTrio", category: "Spooky", blenderSceneName: "Spooky", id: 246},
		{name: "DeadTree1", category: "Spooky", blenderSceneName: "Spooky", id: 248},
		{name: "DeadTree2", category: "Spooky", blenderSceneName: "Spooky", id: 249},
		{name: "DeadTree3", category: "Spooky", blenderSceneName: "Spooky", id: 250},
		{name: "DeadTree4", category: "Spooky", blenderSceneName: "Spooky", id: 260},
		{name: "DeadTreeBig1", category: "Spooky", blenderSceneName: "Spooky", id: 261},
		{name: "DeadTreeBig2", category: "Spooky", blenderSceneName: "Spooky", id: 262},
		{name: "DeadTreeBig3", category: "Spooky", blenderSceneName: "Spooky", id: 263},
		{name: "DeadTreeBig4", category: "Spooky", blenderSceneName: "Spooky", id: 264},
		{name: "DeadTreeBig5", category: "Spooky", blenderSceneName: "Spooky", id: 265},
		{name: "Eye1", category: "Spooky", blenderSceneName: "Spooky", id: 251},
		{name: "Eye2", category: "Spooky", blenderSceneName: "Spooky", id: 252},
		{name: "Mushroom1", category: "Spooky", blenderSceneName: "Spooky", id: 253},
		{name: "Mushroom2", category: "Spooky", blenderSceneName: "Spooky", id: 254},
		{name: "MushroomRed1", category: "Spooky", blenderSceneName: "Spooky", id: 258},
		{name: "MushroomRed2", category: "Spooky", blenderSceneName: "Spooky", id: 259},

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

		{name: "CheckpointZone", category: "Zones", blenderSceneName: "Zones", id: 286, isCheckpoint: true},
		{name: "FinishZone", category: "Zones", blenderSceneName: "Zones", id: 287, isFinish: true},

		{name: "BlockFullRamp", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 290},
		{name: "BlockFullRampCorner", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 291},
		{name: "BlockFullRampCornerFlipped", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 292},
		{name: "BlockFullRampFlipped", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 293},
		{name: "BlockGap", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 294},
		{name: "BlockGapCross", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 295},
		{name: "BlockHalfHeight", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 296},
		{name: "BlockHalfSide", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 297},
		{name: "BlockHole", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 298},
		{name: "BlockHoleInverted", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 299},
		{name: "BlockInvertedPizzaSlice", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 300},
		{name: "BlockInvertedPizzaSlice1x2", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 301},
		{name: "BlockInvertedPizzaSlice2x1", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 302},
		{name: "BlockInvertedPizzaSlice2x2", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 303},
		{name: "BlockInvertedPizzaSlice3x3", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 304},
		{name: "BlockPizzaSlice", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 305},
		{name: "BlockRoof", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 306},
		{name: "BlockRoofCross", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 307},
		{name: "BlockRoofPyramid", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 308},
		{name: "BlockSlopedFlatter", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 309},
		{name: "BlockSlopedFlatterUpInnerCorner", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 310},
		{name: "BlockSlopedFlatterUpOuterCorner", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 311},
		{name: "BlockSlopedTaller", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 312},
		{name: "BlockSlopedTallerUpInnerCorner", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 313},
		{name: "BlockSlopedTallerUpOuterCorner", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 314},
		{name: "BlockSlopeFlatterDown", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 315},
		{name: "BlockSlopeFlatterUp", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 316},
		{name: "BlockSlopeTallerDown", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 317},
		{name: "BlockSlopeTallerUp", category: "BlocksPlus", blenderSceneName: "BlocksPlus", id: 318},

		
		{name: "A", category: "Text", blenderSceneName: "Text", id: 319},
		{name: "B", category: "Text", blenderSceneName: "Text", id: 320, isBoostZone: true},
		{name: "C", category: "Text", blenderSceneName: "Text", id: 321},
		{name: "D", category: "Text", blenderSceneName: "Text", id: 322},
		{name: "E", category: "Text", blenderSceneName: "Text", id: 323},
		{name: "F", category: "Text", blenderSceneName: "Text", id: 324},
		{name: "G", category: "Text", blenderSceneName: "Text", id: 325, isHighGravity: true},
		{name: "H", category: "Text", blenderSceneName: "Text", id: 326},
		{name: "I", category: "Text", blenderSceneName: "Text", id: 327},
		{name: "J", category: "Text", blenderSceneName: "Text", id: 328},
		{name: "K", category: "Text", blenderSceneName: "Text", id: 329},
		{name: "L", category: "Text", blenderSceneName: "Text", id: 330},
		{name: "M", category: "Text", blenderSceneName: "Text", id: 331, isLowGravity: true},
		{name: "N", category: "Text", blenderSceneName: "Text", id: 332},
		{name: "O", category: "Text", blenderSceneName: "Text", id: 333},
		{name: "P", category: "Text", blenderSceneName: "Text", id: 334},
		{name: "Q", category: "Text", blenderSceneName: "Text", id: 335},
		{name: "R", category: "Text", blenderSceneName: "Text", id: 336},
		{name: "S", category: "Text", blenderSceneName: "Text", id: 337},
		{name: "T", category: "Text", blenderSceneName: "Text", id: 338},
		{name: "U", category: "Text", blenderSceneName: "Text", id: 339},
		{name: "V", category: "Text", blenderSceneName: "Text", id: 340},
		{name: "W", category: "Text", blenderSceneName: "Text", id: 341},
		{name: "X", category: "Text", blenderSceneName: "Text", id: 342},
		{name: "Y", category: "Text", blenderSceneName: "Text", id: 343},
		{name: "Z", category: "Text", blenderSceneName: "Text", id: 344},
		{name: "0", category: "Text", blenderSceneName: "Text", id: 345},
		{name: "1", category: "Text", blenderSceneName: "Text", id: 346},
		{name: "2", category: "Text", blenderSceneName: "Text", id: 347},
		{name: "3", category: "Text", blenderSceneName: "Text", id: 348},
		{name: "4", category: "Text", blenderSceneName: "Text", id: 349},
		{name: "5", category: "Text", blenderSceneName: "Text", id: 350},
		{name: "6", category: "Text", blenderSceneName: "Text", id: 351},
		{name: "7", category: "Text", blenderSceneName: "Text", id: 352},
		{name: "8", category: "Text", blenderSceneName: "Text", id: 353},
		{name: "9", category: "Text", blenderSceneName: "Text", id: 354},
		
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



		// next id: 288
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
