/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import PackagesView from './view';
import reducer from './state/reducer';
import { fetchSettings } from './state/actions';
// from calypso
import notices from 'state/notices/reducer';
import { combineReducers } from 'state/utils';

export default ( { formData, formSchema, storeOptions } ) => ( {
	getReducer() {
		return combineReducers( {
			form: reducer,
			notices,
		} );
	},

	getHotReducer() {
		return combineReducers( {
			form: require( './state/reducer' ),
			notices,
		} );
	},

	getInitialState() {
		storeOptions = storeOptions || {};
		formSchema = formSchema || { custom: {} };
		return {
			form: {
				pristine: true,
				isSaving: false,
				isFetching: false,
				showModal: false,
				modalErrors: {},
				packages: formData,
				dimensionUnit: storeOptions.dimension_unit,
				weightUnit: storeOptions.weight_unit,
				packageSchema: formSchema.custom.items,
				predefinedSchema: formSchema.predefined,
				packageData: {
					is_user_defined: true,
				},
			},
		};
	},

	getInitialAction() {
		return fetchSettings();
	},

	getStateForPersisting( state ) {
		delete state.notices;
		return state;
	},

	getStateKey() {
		return 'wcs-packages';
	},

	View: () => {
		return <PackagesView />;
	},
} );
