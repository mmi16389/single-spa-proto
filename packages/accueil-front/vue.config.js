const path = require('path');
process.env.VUE_APP_VERSION = require('./package.json').version;
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = {
	devServer: {
		writeToDisk: true
	},
	configureWebpack: {
		entry: {
			remoteEntry: './src/main.ts'
		},
		output: {
			filename: '[name].js',
			libraryTarget: 'umd',
			path: path.resolve(__dirname, 'dist')
		}
	},
	chainWebpack: (config) => {
		config.entryPoints.delete('app');
		config.entry('remoteEntry')
			.add('./src/main.ts')
			.end();
		config
			.plugin('SystemJSPublicPathWebpackPlugin')
			.use(SystemJSPublicPathWebpackPlugin, [
				{
					rootDirectoryLevel: 1,
					systemjsModuleName: require('./package.json').name
				}
			]);
		if (process.env.STANDALONE_SINGLE_SPA !== 'true') {
			config.externals([
				'vue',
				'vue-router',
				'vue-i18n',
				'vuetify',
				'single-spa'
			]);
		}
	},
	filenameHashing: false
};