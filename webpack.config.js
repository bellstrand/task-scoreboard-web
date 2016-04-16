/*eslint-disable no-var*/

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');

module.exports = {
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true
	},
	entry: {
		main: [
			'./src/main'
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	plugins: [
		new AureliaWebpackPlugin()
	],
	eslint: {
		configFile: '.eslintrc'
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
		],
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
			{ test: /\.css?$/, loader: 'style!css' },
			{ test: /\.html$/, loader: 'html' },
			{ test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
			{ test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
		]
	}
};
