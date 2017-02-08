import React, { PropTypes } from 'react';
import Gridicon from 'components/gridicon';
import { translate as __ } from 'lib/mixins/i18n';

const SettingsNuxNotice = ( { noticeDismissed, dismissNotice } ) => {
	if ( noticeDismissed ) {
		return null;
	}

	return (
		<div className="wcc-nux-notice">
			<Gridicon icon="info" size={ 24 } />
			<div className="wcc-nux-notice__copy">{ __( 'Now add your zip code and chose which services you want to offer your customers.' ) }</div>
			<a href="#" onClick={ dismissNotice }>{ __( 'Okay' ) }</a>
		</div>
	);
};

SettingsNuxNotice.propTypes = {
	noticeDismissed: PropTypes.bool,
	dismissNotice: PropTypes.func,
};

export default SettingsNuxNotice;