import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mattegreen,
  },

  bottom_container: {
    flex: 1,
    backgroundColor: 'white',
    height: deviceSize.height / 1.35,
    width: deviceSize.width / 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    elevation: 5,
  },
});
