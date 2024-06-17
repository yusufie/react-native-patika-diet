import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const ProfileTopInfoCard = ({
  user,
  handleAddPhoto,
  handleEditProfile,
  handleLogout,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAddPhoto}>
        {user?.photos?.profile ? (
          <Image
            source={{uri: user.photos.profile}}
            style={styles.profile_image}
          />
        ) : (
          <Image
            source={require('../../assets/images/defaultProfile.png')}
            style={styles.profile_image}
          />
        )}
      </TouchableOpacity>
      <View style={styles.user_info_container}>
        <Text style={styles.username}>{user ? user.username : ''}</Text>
        <Text style={styles.gender}>
          {user ? '# ' + user.userInfo.gender : ''}
        </Text>
        <Text style={styles.activity_text}>
          {user ? '# ' + user.userInfo.activity.label : ''}
        </Text>
      </View>
      <View style={styles.icon_container}>
        <TouchableOpacity onPress={handleEditProfile}>
          <Icon name="account" size={30} color="#363636" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="logout" size={30} color="#363636" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileTopInfoCard;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: deviceSize.height / 4.3,
  },
  profile_image: {
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 40,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  user_info_container: {
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.darkGray,
  },
  gender: {
    fontSize: 15,
    color: colors.darkGray,
    marginVertical: 10,
    fontWeight: '500',
  },
  activity_text: {
    fontSize: 15,
    color: colors.darkGray,
    fontWeight: '500',
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 15,
    top: 45,
    width: 70,
  },
});
