var React = require( 'react' );
var Settings = require( './views/settings' );

document.addEventListener( "DOMContentLoaded", function( event ) {
    React.render(
        React.createElement( Settings, {} ), document.getElementById( 'wc-connect-admin-container' )
    );
} );