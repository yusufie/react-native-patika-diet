import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './UserInfo.style';
import Button from '../../components/Button/Button';
import GenderCheckBoxCard from '../../components/cards/GenderCheckBoxCard';
import UserInfoInputCard from '../../components/cards/UserInfoInputCard';

const UserInfo = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);

  const data = [
    {label: 'Lightly Active', value: '1'},
    {label: 'Moderately Active', value: '2'},
    {label: 'Active', value: '3'},
    {label: 'Very Active', value: '4'},
  ];

  function handleSave() {
    if (
      !userInfo.age ||
      !userInfo.height ||
      !userInfo.weight ||
      !userInfo.activity ||
      !userInfo.gender
    ) {
      showMessage({
        message: 'Please fill in all fields for best calculation!',
        type: 'danger',
        floating: true,
      });
    } else {
      const userId = auth().currentUser.uid;
      const dbRef = database().ref(`/users/${userId}/userInfo`);
      dbRef.set(userInfo);
      navigation.navigate('BottomTabPages');
    }
  }

  function handleClear() {
    setUserInfo({});
    setSelectedActivity(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>User Info</Text>
      </View>
      <Text style={styles.top_text}>
        Please fill in your information! The information you give us will be
        used to calculate your Body Mass Index and Daily Calorie Needs and to
        recommend diet programs to you.
      </Text>
      <GenderCheckBoxCard userInfo={userInfo} setUserInfo={setUserInfo} />
      <UserInfoInputCard userInfo={userInfo} setUserInfo={setUserInfo} />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholder_style}
        selectedTextStyle={styles.selected_text_style}
        label="Activity"
        placeholder="Select activity"
        labelField="label"
        valueField="value"
        data={data}
        value={selectedActivity}
        onChange={item => {
          setUserInfo({...userInfo, activity: item});
          setSelectedActivity(item.value);
        }}
      />
      <View style={styles.button_container}>
        <Button
          text="Save"
          theme="primary"
          style={styles.buttons}
          onPress={handleSave}
        />
        <Button
          text="Clear"
          theme="secondary"
          style={styles.buttons}
          onPress={handleClear}
        />
      </View>
    </View>
  );
};

export default UserInfo;
