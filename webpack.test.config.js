var webpack = require( 'webpack' ),
	path = require( 'path' ),
	nodeExternals = require( 'webpack-node-externals' );


module.exports = {
	cache: true,
	devtool: 'inline-source-map',
	module: {
        preLoaders: [
            // adds code coverage and eslint to any test included files
            {
                test: /\.jsx?$/,
                exclude: /(test|spec\.js|node_modules|bower_components)/,
                loaders: [
                    'isparta-instrumenter-loader',
                    'eslint',
                ],
            },
        ],
		loaders: [
			{
				test: /\.json$/,
				loader: 'json',
			},
			{
				test: /\.html$/,
				loader: 'html',
			},
			{
				test: /\.scss$/,
				loaders: [
                    'style',
                    'css',
                    'sass',
                ],
			},
            {
                // babels and lints all src files
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel',
                    'eslint',
                ],
            },
            {
                // babels calypso files we're including
                test: /\.jsx?$/,
                include: /wp-calypso/,
                exclude: /wp-calypso\/node_modules/,
                loaders: [
                    'babel',
                ],
            },
		],
	},
    sassLoader: {
        includePaths: [
            path.resolve( __dirname, './client' ),
            path.resolve( __dirname, './node_modules/wp-calypso/client' ),
            path.resolve( __dirname, './node_modules/wp-calypso/assets/stylesheets' ),
        ]
    },
    resolve: {
        alias: {
            'react': path.join( __dirname, 'node_modules', 'react' ),
            'react-dom': path.join( __dirname, 'node_modules', 'react-dom' ),
            'redux': path.join( __dirname, 'node_modules', 'redux' ),
            'react-redux': path.join( __dirname, 'node_modules', 'react-redux' ),
            'lib/mixins/i18n': path.join( __dirname, 'client', 'lib', 'mixins', 'i18n' )
        },
        extensions: [ '', '.json', '.js', '.jsx' ],
        root: [
            path.join( __dirname, 'client' ),
            path.join( __dirname, 'node_modules' ),
            path.join( __dirname, 'node_modules', 'wp-calypso', 'client' )
        ],
        fallback: [
            path.join( __dirname, 'node_modules', 'wp-calypso', 'node_modules' )
        ]
    },
	externals: [
		nodeExternals( {
			whitelist: [ 'wp-calypso' ]
		} )
	]
};