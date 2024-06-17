import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

import styles from './Profile.style';
import CalculateUserInfo from '../../../utils/CalculateUserInfo';
import ProfileUserInfoCard from '../../../components/cards/ProfilUserInfoCard';
import ProfileUserBodyInfoCard from '../../../components/cards/ProfileUserBodyInfoCard';
import ProfileTopInfoCard from '../../../components/cards/ProfileTopInfoCard';

const Profile = ({navigation}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const dbRef = database().ref(`/users/${userId}`);
    const onValueChange = snapshot => {
      setUser(snapshot.val());
    };
    dbRef.on('value', onValueChange);
    return () => dbRef.off('value', onValueChange);
  }, []);

  const activityLevels = {
    'Lightly Active': 1.375,
    'Moderately Active': 1.55,
    Active: 1.725,
    'Very Active': 1.9,
    Default: 1.375,
  };

  const activityLevel = user?.userInfo?.activity?.label
    ? activityLevels[user.userInfo.activity.label]
    : activityLevels.Default;

  const {bmi, maintenanceCalories, fatLossCalories} =
    // It takes userInfo and performs calculations using the CalculateUserInfo function.
    user?.userInfo?.height && user?.userInfo?.weight && user?.userInfo?.age
      ? CalculateUserInfo.calculateInfo({
          height: user.userInfo.height,
          weight: user.userInfo.weight,
          age: user.userInfo.age,
          activityLevel: activityLevel,
        })
      : {bmi: 0, maintenanceCalories: 0, fatLossCalories: 0};

  function handleAddPhoto() {
    const userId = auth().currentUser.uid;
    const options = {
      title: 'Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if ((response.didCancel, response.errorCode)) {
        showMessage({
          message: 'Something went wrong.',
          type: 'danger',
        });
      } else {
        const path = response.assets[0].uri;
        database().ref(`users/${userId}/photos/profile`).set(path);
      }
    });
  }

  function handleLogout() {
    auth().signOut();
  }

  function handleEditProfile() {
    navigation.navigate('EditUserInfo');
  }

  return (
    <View style={styles.container}>
      <ProfileTopInfoCard
        user={user}
        handleAddPhoto={handleAddPhoto}
        handleEditProfile={handleEditProfile}
        handleLogout={handleLogout}
      />
      <View style={styles.bottom_container}>
        <ProfileUserInfoCard user={user} />
        <ProfileUserBodyInfoCard
          bmi={bmi}
          maintenanceCalories={maintenanceCalories}
          fatLossCalories={fatLossCalories}
        />
      </View>
    </View>
  );
};

export default Profile;
