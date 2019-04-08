import React, { Component } from 'react';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class New extends Component {
	static navigationOptions = {
		header: null,
	};

	state = { newTweet: '' };

	goBack = () => {
		this.props.navigation.pop();
	};

	handleNewTweet = async () => {
		const content = this.state.newTweet;

		if (!content.length) return;

		const author = await AsyncStorage.getItem('@Twitter:username');

		await api.post('tweets', { content, author });

		this.goBack();
	};

	handleInputChange = newTweet => {
		this.setState({ newTweet });
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.goBack}>
						<Icon name="close" size={24} color="#4bb0ee" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={this.handleNewTweet}>
						<Text style={styles.buttonText}>Tweetar</Text>
					</TouchableOpacity>
				</View>

				<TextInput
					style={styles.input}
					multiline
					placeholder="O que está acontecendo?"
					placeholderTextColor="#999"
					value={this.state.newTweet}
					onChangeText={this.handleInputChange}
					returnKeyType="send"
					onSubmitEditing={this.handleNewTweet}
				/>
			</SafeAreaView>
		);
	}
}
