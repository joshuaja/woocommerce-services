var webpackConfig = require( './webpack.test.config.js' );

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: [
            'mocha',
            'chai'
        ],
        files: [
            'tests/client/index.js',
        ],
        preprocessors: {
            'tests/client/index.js': [ 'webpack' ],
            'client/main.js': [ 'webpack', 'sourcemap', 'coverage' ],
            'client/**/*.js': [ 'webpack', 'sourcemap', 'coverage' ],
        },
        reporters: [ 'mocha', 'coverage' ],
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'text-summary',
                },
                {
                    type: 'html',
                    subdir: 'report-html',
                },
            ],
        },
        port: 9876,
        colors: true,
        autoWatch: false,
        browsers: [
            'jsdom',
        ],
        singleRun: true,
        webpack: webpackConfig,
    });
};
