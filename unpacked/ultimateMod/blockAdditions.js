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
			r: 255,	// default 59
			g: 255,	// default 97
			b: 255	// default 141
		},
		groundColor: {
			r: 195,	// default 178
			g: 195,	// default 192
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
	categories: ["Minecraft", "CustomSigns", "Statues", "RoadSigns", "SpecialBlocks", "Space", "Environment", "SlopedTurns", "Spooky"],
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
		"ultimateMod/models/hayBales.glb"
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
		{name: "LollipopGate", category: "Spooky", blenderSceneName: "Spooky", id: 242},
		{name: "Pumpkin", category: "Spooky", blenderSceneName: "Spooky", id: 243},
		{name: "PumpkinBig", category: "Spooky", blenderSceneName: "Spooky", id: 244},
		{name: "PumpkinTall", category: "Spooky", blenderSceneName: "Spooky", id: 245},
		{name: "PumpkinTrio", category: "Spooky", blenderSceneName: "Spooky", id: 246},
		{name: "Boggy", category: "Spooky", blenderSceneName: "Spooky", id: 247},
		{name: "DeadTree1", category: "Spooky", blenderSceneName: "Spooky", id: 248},
		{name: "DeadTree2", category: "Spooky", blenderSceneName: "Spooky", id: 249},
		{name: "DeadTree3", category: "Spooky", blenderSceneName: "Spooky", id: 250},
		{name: "Eye1", category: "Spooky", blenderSceneName: "Spooky", id: 251},
		{name: "Eye2", category: "Spooky", blenderSceneName: "Spooky", id: 252},
		{name: "Mushroom1", category: "Spooky", blenderSceneName: "Spooky", id: 253},
		{name: "Mushroom2", category: "Spooky", blenderSceneName: "Spooky", id: 254},

		{name: "HayBale", category: "Spooky", blenderSceneName: "HayBales", id: 255},
		{name: "HayBaleTriple", category: "Spooky", blenderSceneName: "HayBales", id: 256},
		{name: "HayBaleStack", category: "Spooky", blenderSceneName: "HayBales", id: 257}

		// next id: 258
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
