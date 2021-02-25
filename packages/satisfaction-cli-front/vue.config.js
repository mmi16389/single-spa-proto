const path = require("path");
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
	devServer: {
		writeToDisk: true
	},
	configureWebpack: {
		entry: {
			remoteEntry: "./src/main.js"
		},
		output: {
			filename: "[name].js",
			libraryTarget: "umd",
			path: path.resolve(__dirname, "dist"),
		},
	},
	chainWebpack: (config) => {
		config.entryPoints.delete('app');
		config.entry('remoteEntry')
			.add('./src/main.js')
			.end();
		config
			.plugin("SystemJSPublicPathWebpackPlugin")
			.use(SystemJSPublicPathWebpackPlugin, [
				{
					rootDirectoryLevel: 1,
					systemjsModuleName: require('./package.json').name,
				},
			]);
		if (process.env.STANDALONE_SINGLE_SPA !== 'true') {
			config.externals([
				'single-spa'
			]);
		}
	},
	filenameHashing: false
};