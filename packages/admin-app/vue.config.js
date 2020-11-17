module.exports = {
	devServer: {
		writeToDisk: true,
	},
	chainWebpack: (config) => {
		config.externals(["vue", "vue-i18n"]);
	},
};
