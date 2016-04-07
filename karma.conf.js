/*eslint-disable no-var*/

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'test/**/*.spec.js'
		],
		exclude: [],
		preprocessors: {
			'test/**/*.js': ['webpack']
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: true,
		concurrency: Infinity,
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true
		}
	});
};
