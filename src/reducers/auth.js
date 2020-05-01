import authActions from '../constants/auth';

const initialState = {
	token: null
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authActions.ADD_TOKEN:
			return {  ...state, token: payload.token };

		case authActions.REMOVE_TOKEN:
			return {  ...state, token: null };

		default:
			return state;
	}
};

export default authReducer;
