import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

const HomeCreateButtonCard = ({handleCreate}) => {
  return (
    <View style={styles.create_container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={handleCreate}>
        <Text style={styles.create_title}>
          Create your personal diet program!
        </Text>
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeCreateButtonCard;

const styles = StyleSheet.create({
  create_container: {
    justifyContent: 'center',
    backgroundColor: colors.logoGreen,
    borderRadius: 15,
    margin: 10,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingRight: 25,
    height: 70,
  },
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  create_title: {
    fontSize: 15,
    color: 'white',
  },
});
