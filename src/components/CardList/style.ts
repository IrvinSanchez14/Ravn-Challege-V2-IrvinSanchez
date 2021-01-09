import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 16,
		paddingRight: 24,
		marginLeft: 16,
	},
	header: {
    fontWeight: 'bold',
		color: '#000',
		fontSize: 17,
		lineHeight: 20,
	},
	subHeader: {
    color: '#000',
		fontSize: 13,
		lineHeight: 17,
	},
});

export default styles;