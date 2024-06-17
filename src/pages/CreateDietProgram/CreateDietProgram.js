import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './CreateDietProgram.style';
import fetchFoodData from '../../utils/FetchFoodData';
import FoodCard from '../../components/cards/FoodCard';
import HeaderCard from '../../components/cards/HeaderCard';

const CreateDietProgram = ({navigation}) => {
  const [food, setFood] = useState('');
  const [foodData, setFoodData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchFoodData(food);
    setFoodData(data);
  };

  return (
    <View style={styles.container}>
      <HeaderCard text="Create Program" navigation={navigation} />
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          value={food}
          onChangeText={setFood}
          placeholder="Enter food name"
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={25} style={styles.search_icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.foodcard_container}>
        {foodData && (
          <FoodCard foodData={foodData} iconName="plus" iconColor="green" />
        )}
      </View>
    </View>
  );
};

export default CreateDietProgram;
