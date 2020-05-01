import types from '../constants/auth';

const addToken = (token) => {
	return {
		type: types.ADD_TOKEN,
		payload: {
			token
		}
	};
};

const removeToken = () => {
	return {
		type: types.REMOVE_TOKEN
	};
};

const actions = {
	addToken,
	removeToken
};

export default actions;
