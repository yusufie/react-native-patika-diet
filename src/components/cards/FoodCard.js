import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';

import NutriensCard from './NutriensCard';
import colors from '../../styles/colors';
import DatePickerModal from './DatePickerModal';

const FoodCard = ({foodData, iconName, iconColor}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const handleAddFood = () => {
    setSelectedFood(foodData.hints[0].food);
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
  };

  const data = foodData && foodData.hints[0];

  if (!data) {
    return <Text style={styles.no_result}>No results found!</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.top_container}>
          <TouchableOpacity
            style={styles.info_container}
            onPress={toggleCollapsible}>
            <Image
              style={styles.food_image}
              source={{uri: foodData.hints[0].food.image}}
            />
            <View style={styles.text_container}>
              <Text style={styles.food_label}>
                {foodData.hints[0].food.label}
              </Text>
              <Text style={styles.food_category}>
                {foodData.hints[0].food.category}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddFood}>
            <Icon name={iconName} color={iconColor} size={30} />
          </TouchableOpacity>
        </View>
        <Collapsible collapsed={!isOpen}>
          <NutriensCard
            nutrients={foodData.hints[0].food.nutrients}
            style={styles.nutrients}
          />
          <DatePickerModal
            isVisible={modalVisible}
            onClose={onClose}
            selectedFood={selectedFood}
          />
        </Collapsible>
      </View>
    </>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  info_container: {
    flexDirection: 'row',
  },
  food_image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  text_container: {
    alignSelf: 'center',
  },
  food_label: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  food_category: {
    margin: 10,
    marginTop: -5,
  },
  nutrients: {
    height: 45,
    padding: 0,
    paddingTop: 2,
    marginHorizontal: 0,
    backgroundColor: colors.greenBlue,
  },
  no_result: {
    textAlign: 'center',
    margin: 10,
    marginTop: 25,
  },
});
