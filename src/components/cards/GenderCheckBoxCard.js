import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const GenderCheckBoxCard = ({userInfo, setUserInfo}) => {
  return (
    <View style={styles.gender_container}>
      <View style={styles.gender_info_containers}>
        <CheckBox
          value={userInfo.gender === 'male'}
          onValueChange={newValue =>
            setUserInfo({...userInfo, gender: newValue ? 'male' : 'female'})
          }
          style={styles.checkbox}
        />
        <Text style={styles.gender_text}>Male</Text>
      </View>
      <View style={styles.gender_info_containers}>
        <CheckBox
          value={userInfo.gender === 'female'}
          onValueChange={newValue =>
            setUserInfo({...userInfo, gender: newValue ? 'female' : 'male'})
          }
          style={styles.checkbox}
        />
        <Text style={styles.gender_text}>Female</Text>
      </View>
    </View>
  );
};

export default GenderCheckBoxCard;

const styles = StyleSheet.create({
  gender_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  gender_info_containers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  gender_text: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  checkbox: {
    transform: [{scale: 1.2}],
  },
});
