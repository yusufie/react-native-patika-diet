import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalculateUserInfo from '../../utils/CalculateUserInfo';

const CalorieNeedCard = ({user, weeklyConsumed, dailyConsumed}) => {
  const activityLevels = {
    'Lightly Active': 1.375,
    'Moderately Active': 1.55,
    Active: 1.725,
    'Very Active': 1.9,
    Default: 1.375,
  };

  const activityLevel = user?.userInfo?.activity?.label
    ? activityLevels[user.userInfo.activity.label]
    : activityLevels.Default;

  const {maintenanceCalories} =
    user?.userInfo?.height && user?.userInfo?.weight && user?.userInfo?.age
      ? CalculateUserInfo.calculateInfo({
          height: user.userInfo.height,
          weight: user.userInfo.weight,
          age: user.userInfo.age,
          activityLevel: activityLevel,
        })
      : {maintenanceCalories: 0};

  return (
    <LinearGradient
      colors={['#363636', '#008037']}
      style={styles.linear_gradient}>
      <View style={styles.container}>
        <View style={styles.dailyneed_container}>
          <View style={styles.needcontainer_top}>
            <Text style={styles.titles}>Daily Calorie Need</Text>
            <View style={styles.consumed_container}>
              <Text style={styles.numbers}>
                {maintenanceCalories.toFixed(0)} /{' '}
              </Text>
              {!dailyConsumed.ENERC_KCAL ? (
                <Text style={styles.zero_text}> 0 </Text>
              ) : (
                <Text style={styles.numbers}>{dailyConsumed.ENERC_KCAL}</Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.weeklyneed_container}>
          <View style={styles.needcontainer_top}>
            <Text style={styles.titles}>Weekly Calorie Need</Text>
            <View style={styles.consumed_container}>
              <Text style={styles.numbers}>
                {(maintenanceCalories * 7).toFixed(0)} /{' '}
              </Text>
              {!weeklyConsumed.ENERC_KCAL ? (
                <Text style={styles.zero_text}> 0 </Text>
              ) : (
                <Text style={styles.numbers}>{weeklyConsumed.ENERC_KCAL}</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CalorieNeedCard;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  linear_gradient: {
    height: 80,
    backgroundColor: 'gray',
    flexDirection: 'row',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  consumed_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dailyneed_container: {
    borderRightWidth: 1,
    width: deviceSize.width / 2,
    alignItems: 'center',
  },
  weeklyneed_container: {
    width: deviceSize.width / 2,
    alignItems: 'center',
    borderBottomRightRadius: 70,
  },
  needcontainer_top: {
    flex: 1,
    width: deviceSize.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titles: {
    fontSize: 15,
    color: '#e0e0e0',
  },
  numbers: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 1,
    color: '#e0e0e0',
  },
  zero_text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 1,
    color: '#e0e0e0',
  },
});
