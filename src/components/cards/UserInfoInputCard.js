import React from 'react';
import {StyleSheet, View} from 'react-native';

import Input from '../../components/Input/Input';

const UserInfoInputCard = ({userInfo, setUserInfo}) => {
  return (
    <View style={styles.input_container}>
      <Input
        placeholder="Age"
        value={userInfo.age}
        style={styles.input}
        onChangeText={text => setUserInfo({...userInfo, age: text})}
      />
      <Input
        placeholder="Height (cm)"
        value={userInfo.height}
        style={styles.input}
        onChangeText={text => setUserInfo({...userInfo, height: text})}
      />
      <Input
        placeholder="Weight (kg)"
        value={userInfo.weight}
        style={styles.input}
        onChangeText={text => setUserInfo({...userInfo, weight: text})}
      />
    </View>
  );
};

export default UserInfoInputCard;

const styles = StyleSheet.create({
  input_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    margin: 10,
  },
  input: {
    width: 115,
    borderColor: '#a0a0a0',
  },
});
