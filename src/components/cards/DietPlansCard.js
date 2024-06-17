import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import colors from '../../styles/colors';
import getProgramImage from '../../utils/getProgramImage';

const DietPlans = ({program, navigation}) => {
  function handleDietPress() {
    navigation.navigate('ProgramDetail', {program});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleDietPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={getProgramImage(program.label)}
          resizeMode="cover"
        />
        <Text style={styles.label}>{program.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DietPlans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    margin: 7,
    height: 70,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.3,
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    width: 150,
    color: 'white',
    flex: 1,
  },
});
