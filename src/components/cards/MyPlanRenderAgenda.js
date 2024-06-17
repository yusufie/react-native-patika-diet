import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Collapsible from 'react-native-collapsible';

const MyPlanRenderAgenda = ({
  item,
  toggleCollapsible,
  removeFood,
  isOpen,
  NutriensCard,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => toggleCollapsible(item.id)}>
        <View style={styles.item_container}>
          <Image style={styles.image} source={{uri: item.food.image}} />
          <View style={styles.info_container}>
            <Text style={styles.label}>{item.food.label}</Text>
            <Text style={styles.repast}>{item.repast}</Text>
            <Text style={styles.date}>
              {item.date.split(' ')[1].slice(0, 5)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Icon
        name="remove"
        size={20}
        color="red"
        style={styles.remove_icon}
        onPress={() => removeFood(item.id)}
      />
      <Collapsible collapsed={!isOpen[item.id]}>
        <NutriensCard
          nutrients={item.food.nutrients}
          style={styles.nutrients}
        />
      </Collapsible>
    </View>
  );
};

export default MyPlanRenderAgenda;

const styles = StyleSheet.create({
  item_container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  info_container: {
    marginLeft: 10,
  },
  label: {
    marginBottom: 3,
    fontWeight: 'bold',
  },
  repast: {
    marginBottom: 3,
  },
  date: {},
  remove_icon: {
    position: 'absolute',
    right: 25,
    top: 40,
  },
  nutrients: {
    fontWeight: '400',
    fontSize: 14,
    height: 25,
    padding: 1,
    marginTop: 0,
  },
});
