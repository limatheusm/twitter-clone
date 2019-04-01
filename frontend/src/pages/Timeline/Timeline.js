import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';

import twitterLogo from '../../twitter.svg';
import Tweet from '../../components/Tweet';
import './Timeline.css';

export default class Timeline extends Component {
	state = {
		tweets: [],
		newTweet: '',
	};

	async componentDidMount() {
		this.subscribeToEvents();
		const response = await api.get('tweets');
		this.setState({ tweets: response.data });
	}

	handleInputChange = e => {
		this.setState({ newTweet: e.target.value });
	};

	handleNewTweet = async e => {
		if (e.keyCode !== 13) return;

		const content = this.state.newTweet;
		const author = localStorage.getItem('@Twitter:username');

		this.setState({ newTweet: '' });
		await api.post('tweets', { content, author });
	};

	subscribeToEvents = () => {
		const io = socket('http://localhost:3000');

		io.on('tweet', data => {
			this.setState({ tweets: [data, ...this.state.tweets] }); // imutabilidade e spread operator
		});

		io.on('like', data => {
			this.setState({ tweets: this.state.tweets.map(tweet => (tweet._id === data._id ? data : tweet)) });
		});
	};

	renderTweets = () => {
		return (
			<ul className="tweet-list">
				{this.state.tweets.map(tweet => (
					<Tweet key={tweet._id} tweet={tweet} />
				))}
			</ul>
		);
	};

	render() {
		return (
			<div className="timeline-wrapper">
				<img height={24} src={twitterLogo} alt="Twitter" />

				<form>
					<textarea
						value={this.state.newTweet}
						onChange={this.handleInputChange}
						onKeyDown={this.handleNewTweet}
						placeholder="O que está acontecendo?"
					/>
				</form>

				{this.renderTweets()}
			</div>
		);
	}
}
