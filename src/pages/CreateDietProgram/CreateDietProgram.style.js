import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingRight: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
  },
  search_icon: {
    color: colors.darkGray,
  },
  foodcard_container: {
    flex: 1,
  },
});
