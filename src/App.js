import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import auth from './actions/auth';


const App = () => {
	const token = useSelector(state => state.auth.token);
	const dispatch = useDispatch();

	const message = (token) ? 'Welcome User #' + token : 'Welcome Guest'

	return (
		<div className="container">
			<h1> Redux Intro </h1>
			<b> { message } </b>

			<br/>
			<button onClick={ () => dispatch(auth.addToken("eZ5deJQ4dEH4kOQ6mXH1xGX6bQK5fXV8")) }> LOGIN </button>
			<button onClick={ () => dispatch(auth.removeToken()) }> LOGOUT </button>
		</div>
	);
}

export default App;
