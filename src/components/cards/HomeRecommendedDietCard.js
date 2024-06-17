import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import getProgramImage from '../../utils/getProgramImage';
import colors from '../../styles/colors';

const HomeRecommendedDietCard = ({recommendedDiet, handleRecommended}) => {
  return (
    <TouchableOpacity
      onPress={handleRecommended}
      style={styles.recommended_container}>
      <Image
        style={styles.recommended_image}
        source={getProgramImage(recommendedDiet)}
        resizeMode="cover"
      />
      <Text style={styles.recommended_diet}>{recommendedDiet}</Text>
    </TouchableOpacity>
  );
};

export default HomeRecommendedDietCard;

const styles = StyleSheet.create({
  recommended_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    height: 70,
    margin: 7,
  },
  recommended_image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.3,
  },
  recommended_diet: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    color: 'white',
    flex: 1,
  },
});
