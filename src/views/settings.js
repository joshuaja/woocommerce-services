var React = require( 'react' );
var FG = require( 'react-form-generator' );
var tools = FG.tools;
var GeneratedForm = FG( {} );

module.exports = React.createClass( {

    getInitialState: function() {
        return {
            value: tools.evalDefaults( this.props.meta )
        }
    },

    handleFormChanged: function ( newValue, change, fieldErrors ) {
        this.setState( {
            value: newValue,
            errors: tools.merge( this.state.errors, fieldErrors )
        } );
    },

    render: function() {
        return (
            <GeneratedForm meta={this.props.meta}
                           value={this.state.value}
                           errors={this.state.errors}
                           onChange={this.handleFormChanged} />
        );
    }

} );
