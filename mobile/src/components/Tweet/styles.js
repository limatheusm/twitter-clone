import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderBottomWidth: 1,
		borderColor: '#eee',
	},

	author: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#1C2022',
	},

	content: {
		fontSize: 15,
		lineHeight: 20,
		color: '#1C2022',
		marginVertical: 10,
	},

	likeButton: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	likeText: {
		color: '#999',
		marginLeft: 5,
	},
});

export default styles;
