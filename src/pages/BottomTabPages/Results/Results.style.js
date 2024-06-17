import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  charts_container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  charts_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.titlesGray,
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.titlesGray,
    marginHorizontal: 110,
    paddingBottom: 5,
    marginBottom: 10,
  },
  consumed_container: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    height: 300,
  },
  consumed_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.titlesGray,
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.titlesGray,
    marginHorizontal: 70,
    paddingBottom: 5,
    marginBottom: 15,
  },
  nofood_text: {
    textAlign: 'center',
  },
  bottom_space: {
    height: 70,
  },
});
