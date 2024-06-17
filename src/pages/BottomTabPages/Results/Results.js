import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import ConsumedFoodsCard from '../../../components/cards/ConsumedFoodsCard';
import BarChartCard from '../../../components/cards/BarChartCard';
import CalorieNeedCard from '../../../components/cards/CalorieNeedCard';
import styles from './Results.style';

const Results = () => {
  const [user, setUser] = useState();
  const [consumedFoods, setConsumedFoods] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [dailyConsumedFoods, setDailyConsumedFoods] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const dbRef = database().ref(`/users/${userId}`);
    const programRef = database().ref(`users/${userId}/MyProgram`);

    dbRef.once('value').then(snapshot => {
      setUser(snapshot.val());
    });

    programRef.on('value', snapshot => {
      const programs = snapshot.val() || {};
      const today = new Date();
      const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
      const consumedFoodsData = [];
      const dailyConsumedFoodsData = [];

      Object.values(programs).forEach(program => {
        const eatDate = new Date(program.date).getTime();

        // It adds a period to the consumed food according to its date.
        if (eatDate >= yesterday.getTime() && eatDate < today.getTime()) {
          consumedFoodsData.push({
            ...program,
            period: 'daily',
          });

          dailyConsumedFoodsData.push({
            ...program,
            period: 'daily',
            quantity: 1,
          });
        }

        if (eatDate >= lastWeek.getTime()) {
          consumedFoodsData.push({
            ...program,
            period: 'weekly',
          });
        }
        if (eatDate >= lastMonth.getTime()) {
          consumedFoodsData.push({
            ...program,
            period: 'monthly',
          });
        }
      });
      consumedFoodsData.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date from new to old.
      setConsumedFoods(consumedFoodsData);
      setDailyConsumedFoods(dailyConsumedFoodsData);
    });
  }, []);

  const consumedByPeriod = {
    daily: [],
    weekly: [],
    monthly: [],
  };
  consumedFoods.reduce((acc, consumedFood) => {
    // It collects the nutrient amounts of the consumed food.
    const {food, period} = consumedFood;
    const nutrients = food.nutrients;

    for (const [key, value] of Object.entries(nutrients)) {
      if (!acc[period][key]) {
        acc[period][key] = value;
      } else {
        acc[period][key] += value;
      }
    }

    return acc;
  }, consumedByPeriod);

  const weeklyData = {
    labels: ['Fat', 'Carbohydrate', 'Fiber', 'Protein'],
    datasets: [
      {
        data: [
          consumedByPeriod.weekly.FAT,
          consumedByPeriod.weekly.CHOCDF,
          consumedByPeriod.weekly.FIBTG,
          consumedByPeriod.weekly.PROCNT,
        ],
      },
    ],
  };

  const monthlyData = {
    labels: ['Fat', 'Carbohydrate', 'Fiber', 'Protein'],
    datasets: [
      {
        data: [
          consumedByPeriod.monthly.FAT,
          consumedByPeriod.monthly.CHOCDF,
          consumedByPeriod.monthly.FIBTG,
          consumedByPeriod.monthly.PROCNT,
        ],
      },
    ],
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <CalorieNeedCard
        user={user}
        weeklyConsumed={consumedByPeriod.weekly}
        dailyConsumed={consumedByPeriod.daily}
      />
      <View style={styles.charts_container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.charts_title}>Weekly Chart</Text>
            <BarChartCard data={weeklyData} consumedFoods={consumedFoods} />
          </View>
          <View>
            <Text style={styles.charts_title}>Monthly Chart</Text>
            <BarChartCard data={monthlyData} consumedFoods={consumedFoods} />
          </View>
        </ScrollView>
      </View>
      {consumedFoods.length === 0 ? (
        <ScrollView style={styles.consumed_container}>
          <Text style={styles.consumed_title}>Consumed Foods History</Text>
          <Text style={styles.nofood_text}>No food info yet!</Text>
        </ScrollView>
      ) : (
        <ScrollView style={styles.consumed_container}>
          <Text style={styles.consumed_title}>Consumed Foods History</Text>
          {dailyConsumedFoods.map((food, index) => (
            <ConsumedFoodsCard key={index} food={food} />
          ))}
        </ScrollView>
      )}

      <View style={styles.bottom_space} />
    </ScrollView>
  );
};

export default Results;
