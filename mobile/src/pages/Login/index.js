import React, { Component } from 'react';

import { View, TouchableOpacity, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

import styles from './styles';

export default class Login extends Component {
	static navigationOptions = {
		header: null,
	};

	state = { username: '' };

	async componentDidMount() {
		const username = await AsyncStorage.getItem('@Twitter:username');

		if (username) {
			this.navigateToTimeline();
		}
	}

	handleInputChange = username => {
		this.setState({ username });
	};

	handleLogin = async () => {
		const { username } = this.state;

		if (!username.length) return;

		await AsyncStorage.setItem('@Twitter:username', username);

		this.navigateToTimeline();
	};

	navigateToTimeline = () => {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Timeline' })],
		});

		this.props.navigation.dispatch(resetAction);
	};

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.content}>
					<View>
						<Icon name="twitter" size={64} color="#4bb0ee" />
					</View>
					<TextInput
						style={styles.input}
						placeholder="Nome de usuário"
						value={this.state.username}
						onChangeText={this.handleInputChange}
						returnKeyType="send"
						onSubmitEditing={this.handleLogin}
					/>
					<TouchableOpacity style={styles.button} onPress={this.handleLogin}>
						<Text style={styles.buttonText}>Entrar</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
