import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ConsumedFoodsCard = ({food}) => {
  const formattedDate = new Date(food.date).toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{food.food.label}</Text>
      <Text style={styles.kcal}>{food.food.nutrients.ENERC_KCAL} kcal</Text>
      <Text style={styles.repast}>{food.repast}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
};

export default ConsumedFoodsCard;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    margin: 5,
    marginHorizontal: 0,
    paddingHorizontal: 3,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {flex: 1.5, fontSize: 14.5},
  kcal: {flex: 1.3},
  repast: {flex: 1},
  date: {flex: 1},
});
