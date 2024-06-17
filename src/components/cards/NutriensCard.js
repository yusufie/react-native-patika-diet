import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import colors from '../../styles/colors';

const NutriensCard = ({nutrients, style}) => {
  return (
    <View style={{...styles.nutrients_container, ...style}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text style={{...styles.nutrients, ...style}}>
          Energy / Calories : {nutrients.ENERC_KCAL.toFixed(2)}
        </Text>
        <Text style={{...styles.nutrients, ...style}}>
          Carbohydrates : {nutrients.CHOCDF.toFixed(2)}
        </Text>
        <Text style={{...styles.nutrients, ...style}}>
          Fat : {nutrients.FAT.toFixed(2)}
        </Text>
        <Text style={{...styles.nutrients, ...style}}>
          Fiber : {nutrients.FIBTG.toFixed(2)}
        </Text>
        <Text style={{...styles.nutrients, ...style}}>
          Protein : {nutrients.PROCNT.toFixed(2)}
        </Text>
      </ScrollView>
    </View>
  );
};

export default NutriensCard;

const styles = StyleSheet.create({
  nutrients_container: {
    margin: 10,
    marginTop: 20,
    elevation: 3,
    borderRadius: 10,
    padding: 10,
    paddingRight: 15,
    backgroundColor: colors.greenBlue,
    flexDirection: 'row',
  },
  nutrients: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
