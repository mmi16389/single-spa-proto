const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env = {}) => ({
	mode: "development",
	entry: {
		"cnamts-root-config": path.resolve(__dirname, "src/index.js"),
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "sourcemap",
	module: {
		rules: [
			{ parser: { system: false } },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{ loader: "babel-loader" }],
			},
		],
	},
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		disableHostCheck: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: "./public/index.html",
			templateParameters: {
				isLocal: env && env.isLocal === "true",
				importmaps:
					env && env.isLocal === "true"
						? require("./public/maps/dev.json")
						: require("./public/maps/prod.json"),
			},
		}),
		new CopyWebpackPlugin([
			{
				from: "./public/js/config.js",
				to: "./js/config.js",
			},
		]),
	],
});
