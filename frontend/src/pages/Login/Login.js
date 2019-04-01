import React, { Component } from 'react';

import twitterLogo from '../../twitter.svg';
import './Login.css';

export default class Login extends Component {
	state = {
		username: '',
	};

	handleInputChange = e => {
		this.setState({ username: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { username } = this.state; // destructuring ES6

		if (!username.length) return;

		localStorage.setItem('@Twitter:username', username);

		this.props.history.push('/timeline');
	};

	render() {
		return (
			<div className="login-wrapper">
				<img src={twitterLogo} alt="Twitter Logo" />
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.username} // One way data bind
						onChange={this.handleInputChange}
						placeholder="Nome de usuário"
					/>
					<button type="submit">Entrar</button>
				</form>
			</div>
		);
	}
}
