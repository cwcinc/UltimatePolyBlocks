const modVersion = "0.1.0";
const lbVersion = "0.4.1";

const moddedEnvironment = {
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
			r: 59,	// default 59
			g: 97,	// default 97
			b: 141	// default 141
		},
		groundColor: {
			r: 178,	// default 178
			g: 192,	// default 192
			b: 195	// default 195
		},
		intensity: 4.7	// default 4.7
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
	categories: ["Minecraft", "CustomSigns", "Statues", "RoadSigns", "SpecialBlocks", "Space"],
	modelPaths: [
		"ultimateMod/models/minecraft.glb",
		"ultimateMod/models/customSigns.glb",
		"ultimateMod/models/statues.glb",
		"ultimateMod/models/roadSigns.glb",
		"ultimateMod/models/specialBlocks.glb",
		"ultimateMod/models/space.glb"
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
		{name: "planet6", category: "Space", blenderSceneName: "Space", id: 219}

		// next id: 220
	]
};

const rgbDecimal = (rgb) => {
	return (rgb.r << 16) + (rgb.g << 8) + (rgb.b);
}