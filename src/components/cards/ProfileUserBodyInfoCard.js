import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const ProfileUserBodyInfoCard = ({
  bmi,
  maintenanceCalories,
  fatLossCalories,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bmi_calorieNeed_container}>
        <View style={styles.bmi_container}>
          <Text style={styles.calculates_title}>Body Mass Index</Text>
          <Text style={styles.calculates_text}>{bmi.toFixed(2)}</Text>
        </View>
        <View style={styles.calorieNeed_container}>
          <Text style={styles.calculates_title}>Daily Calorie Needs</Text>
          <Text style={styles.calculates_text}>
            {maintenanceCalories.toFixed(0)}
          </Text>
        </View>
      </View>
      <View style={styles.fatloss_container}>
        <Text style={styles.calculates_title}>Fat Loss Calorie</Text>
        <Text style={styles.calculates_text}>{fatLossCalories.toFixed(0)}</Text>
      </View>
    </View>
  );
};

export default ProfileUserBodyInfoCard;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  bmi_calorieNeed_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginHorizontal: 5,
  },
  bmi_container: {
    borderRadius: 10,
    width: deviceSize.width / 2.2,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#4B778D',
    elevation: 12,
  },
  calorieNeed_container: {
    borderRadius: 10,
    width: deviceSize.width / 2.2,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#88B04B',
    elevation: 12,
  },
  fatloss_container: {
    borderRadius: 10,
    width: deviceSize.width / 2.2,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#4D8F6F',
    elevation: 12,
  },
  calculates_title: {
    fontSize: 15,
    color: 'white',
    marginBottom: 7,
    fontWeight: '600',
  },
  calculates_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
