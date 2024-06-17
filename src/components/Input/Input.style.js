import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 15,
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 15,
    width: deviceSize.width / 1.1,
  },
  input: {
    flex: 1,
  },
});
