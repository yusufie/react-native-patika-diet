import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../styles/colors';

const ProfilUserInfoCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_containers}>
        <Text style={styles.info_titles}>Height</Text>
        <Text style={styles.info_text}>{user ? user.userInfo.height : ''}</Text>
      </View>
      <View style={styles.info_containers}>
        <Text style={styles.info_titles}>Weight</Text>
        <Text style={styles.info_text}>{user ? user.userInfo.weight : ''}</Text>
      </View>
      <View style={styles.info_containers}>
        <Text style={styles.info_titles}>Age</Text>
        <Text style={styles.info_text}>{user ? user.userInfo.age : ''}</Text>
      </View>
    </View>
  );
};

export default ProfilUserInfoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 10,
    margin: 15,
    marginBottom: 20,
  },
  info_containers: {
    alignItems: 'center',
  },
  info_titles: {
    fontSize: 15,
    fontWeight: '500',
  },
  info_text: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGray,
  },
});
