const path = require("path");
process.env.VUE_APP_VERSION = require("./package.json").version;
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const {
	vueDotLoader,
} = require("@cnamts/vue-cli-plugin-vue-dash/vueDotLoader");

module.exports = {
	devServer: {
		writeToDisk: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	configureWebpack: {
		entry: {
			remoteEntry: "./src/main.ts",
		},
		output: {
			filename: "[name].js",
			libraryTarget: "umd",
			path: path.resolve(__dirname, "dist"),
		},
	},
	chainWebpack: (config) => {
		config.plugin("VuetifyLoaderPlugin").tap(vueDotLoader);
		config.entryPoints.delete("app");
		config.entry("remoteEntry").add("./src/main.ts").end();
		config
			.plugin("SystemJSPublicPathWebpackPlugin")
			.use(SystemJSPublicPathWebpackPlugin, [
				{
					rootDirectoryLevel: 1,
					systemjsModuleName: require("./package.json").name,
				},
			]);
		if (process.env.STANDALONE_SINGLE_SPA !== "true") {
			config.externals([
				"vue",
				"vue-router",
				"vue-i18n",
				"single-spa",
				"satisfaction-cli-front",
				"accueil-front",
				"@cnamts/vue-dot",
			]);
		} else {
			config.externals([
				"satisfaction-cli-front",
				"accueil-front",
				"single-spa",
				"@cnamts/vue-dot",
			]);
		}
	},
	filenameHashing: false,
};
