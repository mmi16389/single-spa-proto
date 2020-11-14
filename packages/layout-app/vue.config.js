const path = require("path");
const webpack = require("webpack");

module.exports = {
	devServer: {
		writeToDisk: true,
	},
	chainWebpack: (config) => {
		config.externals(["vue", "vue-router", "vue-i18n"]);
	},
};
