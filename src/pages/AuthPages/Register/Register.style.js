import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../../styles/colors';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    padding: 10,
  },
  goback_icon: {
    fontSize: 40,
    marginRight: 20,
    color: colors.logoGreen,
  },
  header_text: {
    fontSize: 25,
    fontWeight: '400',
    color: colors.logoGreen,
    marginLeft: 5,
    textAlign: 'center',
  },
  info_container: {},
  logo: {
    alignSelf: 'center',
    width: deviceSize.width / 1.1,
    height: 250,
  },
  input_container: {
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 15,
    width: deviceSize.width / 1.1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    width: deviceSize.width / 1.1,
  },
});
