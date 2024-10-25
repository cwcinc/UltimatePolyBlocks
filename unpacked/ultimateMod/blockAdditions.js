const modVersion = "10.31.2024";
const modName = "SpookyTrack by cwcinc"

const lbVersion = "0.4.1";

const moddedEnvironment = {
	skyColor: {
		horizon: {	// Horizon color of sky gradient (default 255 255 255)
			r: 0,
			g: 0,
			b: 0
		},
		zenith: {	// Top color of sky gradient (default 5 140 255)
			r: 30,
			g: 10,
			b: 0
		}
	},
	skyLight: {
		lightColor: {
			r: 141,	// default 59
			g: 100,	// default 97
			b: 60	// default 141
		},
		groundColor: {
			r: 195,	// default 178
			g: 170,	// default 192
			b: 130	// default 195
		},
		intensity: 6	// default 4.7
	},
	sun: {
		size: 50/1000,	// size of the sun (default 1/1000)
		intensity: 10000,	// intensity of the sun (default 60000000000)
		color: {
			r: 20,	// default 20
			g: 5,	// default 20
			b: 0	// default 19
		}
	},
	sunLight: {
		color: {
			r: 255,	// default 255
			g: 100,	// default 255
			b: 0	// default 255
		},
		intensity: 1	// default 4.7
	},
	fog: {
		color: {
			r: 0,	// default 103
			g: 0,	// default 169
			b: 0	// default 169
		},
		density: 0.02	// default 0.001
	},
	mountains: {
		color: {
			r: 100,	// default 53
			g: 100,	// default 86
			b: 80	// default 56
		}
	},
	ground: {
		color: {
			r: 50,	// default 53
			g: 50,	// default 86
			b: 50	// default 56
		}
	}
}

const moddedBlocks = {
	categories: [],
	modelPaths: [
	],
    blocks: [
	]
};

const rgbDecimal = (rgb) => {
	return (rgb.r << 16) + (rgb.g << 8) + (rgb.b);
}