import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},

	header: {
		paddingTop: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	button: {
		height: 32,
		paddingHorizontal: 20,
		borderRadius: 16,
		backgroundColor: '#4BB0EE',
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
	},

	input: {
		margin: 20,
		fontSize: 16,
		color: '#333',
	},
});

export default styles;
