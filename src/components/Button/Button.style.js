import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

const base_style = StyleSheet.create({
  button: {
    width: deviceSize.width / 1.4,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    margin: 10,
    elevation: 4,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 18,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: colors.logoGreen,
      borderColor: colors.logoGreen,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
    icon: {
      ...base_style.icon,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      borderColor: colors.logoGreen,
      backgroundColor: 'white',
    },
    text: {
      ...base_style.text,
      color: colors.logoGreen,
    },
    icon: {
      ...base_style.icon,
      color: colors.logoGreen,
    },
  }),
};
