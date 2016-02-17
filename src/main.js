var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
import Settings from './views/settings';

document.addEventListener( "DOMContentLoaded", function( event ) {
    ReactDOM.render(
        React.createElement( Settings, {} ), document.getElementById( 'wc-connect-admin-container' )
    );
} );