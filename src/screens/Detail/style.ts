import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  containerDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 16,
		paddingRight: 24,
		marginLeft: 16,
  },
  titleTable: {
    marginTop: 32,
    marginBottom: 21,
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 20,
    color: '#333333',
    marginLeft: 16
  }
});

export default styles;