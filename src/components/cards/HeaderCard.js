import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

const HeaderCard = ({navigation, text}) => {
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="angle-left" size={30} style={styles.goback_icon} />
      </TouchableOpacity>
      <Text style={styles.header_text}>{text}</Text>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    padding: 10,
    marginBottom: 5,
  },
  goback_icon: {
    fontSize: 40,
    marginRight: 20,
    color: colors.logoGreen,
  },
  header_text: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.logoGreen,
    marginLeft: 10,
  },
});
