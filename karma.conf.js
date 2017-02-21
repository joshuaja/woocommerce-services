const webpack = require( './webpack.config' );

// Run single test: npm test --test=FILE_OR_GLOB
const testFile = (process.env.npm_config_test) ? process.env.npm_config_test : 'client/test/runner.js';

module.exports = function( config ) {
	config.set({
		browsers: [ 'jsdom' ],
		frameworks: [ 'mocha', 'chai' ],
		files: [ 'client/test/mock-jquery.js', testFile ],
		preprocessors: {
			[ testFile ]: [ 'webpack', 'sourcemap' ],
		},
		client: {
			captureConsole: true
		},
		reporters: [ 'mocha', 'coverage' ],
		coverageReporter: {
			dir: 'coverage/',
			includeAllSources: true,
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'text-summary' },
			]
		},
		webpack,
		webpackMiddleware: {
			noInfo: true
		}
	});
};
