export const ADD_PACKAGE = 'ADD_PACKAGE';
export const EDIT_PACKAGE = 'EDIT_PACKAGE';
export const DISMISS_MODAL = 'DISMISS_MODAL';
export const SET_MODAL_READONLY = 'SET_MODAL_READONLY';
export const SAVE_PACKAGE = 'SAVE_PACKAGE';
export const UPDATE_PACKAGES_FIELD = 'UPDATE_PACKAGES_FIELD';
export const TOGGLE_OUTER_DIMENSIONS = 'TOGGLE_OUTER_DIMENSIONS';

export const addPackage = () => ( {
	type: ADD_PACKAGE,
} );

export const editPackage = ( packageToEdit ) => ( {
	type: EDIT_PACKAGE,
	package: packageToEdit,
} );

export const dismissModal = () => ( {
	type: DISMISS_MODAL,
} );

export const setModalReadOnly = ( value ) => ( {
	type: SET_MODAL_READONLY,
	value,
} );

export const savePackage = ( settings_key, packageData ) => ( {
	type: SAVE_PACKAGE,
	settings_key,
	packageData,
} );

export const updatePackagesField = ( newValues ) => ( {
	type: UPDATE_PACKAGES_FIELD,
	values: newValues,
} );

export const toggleOuterDimensions = () => ( {
	type: TOGGLE_OUTER_DIMENSIONS,
} );
