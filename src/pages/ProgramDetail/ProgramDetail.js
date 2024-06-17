import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import colors from '../../styles/colors';
import getProgramImage from '../../utils/getProgramImage';
import NutriensCard from '../../components/cards/NutriensCard';
import HeaderCard from '../../components/cards/HeaderCard';

const ProgramDetail = ({navigation, route}) => {
  const {program} = route.params;

  function handleStart() {
    Alert.alert('Coming soon...');
  }

  return (
    <View style={styles.container}>
      <HeaderCard text="Program Detail" navigation={navigation} />
      <Image style={styles.image} source={getProgramImage(program.label)} />
      <Text style={styles.label}>{program.label}</Text>
      <View style={styles.category_container}>
        <Text style={styles.category_title}>Category =</Text>
        <Text style={styles.category}>{program.category}</Text>
      </View>
      <View style={styles.contents_container}>
        <Text style={styles.contents_title}>Contents =</Text>
        {program.foodContentsLabel ? (
          <Text style={styles.foodContentsLabel}>
            {program.foodContentsLabel}
          </Text>
        ) : (
          <Text> Undefined</Text>
        )}
      </View>
      <NutriensCard nutrients={program.nutrients} />
      <TouchableOpacity onPress={handleStart}>
        <Text style={styles.start_text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.titlesGray,
  },
  category_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category_title: {
    margin: 5,
    marginLeft: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contents_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contents_title: {
    margin: 5,
    marginLeft: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    marginLeft: 10,
  },
  foodContentsLabel: {
    marginLeft: 10,
    flex: 1,
  },
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
    fontSize: 17,
    fontWeight: 'bold',
  },
  start_text: {
    textAlign: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.mattegreen,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
