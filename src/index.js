import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// store.subscribe(() => {
// 	console.log(store.getState().auth.token);
// });
//
// store.dispatch(authActions.addToken('S8kpFN1qkL8jJR4dAR7krB5bPC6uDW2f.sd2Vt8a3Eyv21F2zd.R21ds8D63GTu4,2fsd5s'));
// store.dispatch(authActions.removeToken());

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>,
	document.getElementById('root')
);
