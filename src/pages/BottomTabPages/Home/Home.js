import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Home.style';
import fetchDietPrograms from '../../../utils/FetchDietPrograms';
import DietPlans from '../../../components/cards/DietPlansCard';
import CalculateUserInfo from '../../../utils/CalculateUserInfo';
import Loading from '../../../components/Loading/Loading';
import HomeCreateButtonCard from '../../../components/cards/HomeCreateButtonCard';
import HomeRecommendedDietCard from '../../../components/cards/HomeRecommendedDietCard';

const Home = ({navigation}) => {
  const [user, setUser] = useState();
  const [dietPrograms, setDietPrograms] = useState([]);
  const [recommendedDiet, setRecommendedDiet] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const dbRef = database().ref(`/users/${userId}`);
    const onValueChange = snapshot => {
      setUser(snapshot.val());
    };
    dbRef.on('value', onValueChange);
    return () => dbRef.off('value', onValueChange);
  }, []);

  useEffect(() => {
    const getDietPrograms = async () => {
      const data = await fetchDietPrograms();
      if (data.length > 0) {
        setDietPrograms(data);
        setLoading(false);
      } else {
        setDietPrograms([]);
      }
    };
    getDietPrograms();
  }, []);

  useEffect(() => {
    if (user && user.userInfo) {
      const {bmi, maintenanceCalories, fatLossCalories} =
        CalculateUserInfo.calculateInfo({
          height: user.userInfo.height,
          weight: user.userInfo.weight,
          age: user.userInfo.age,
          activityLevel: user.userInfo.activity
            ? user.userInfo.activity.label
            : undefined,
        });
      // According to the user info, it recommends the recommended diet program to the user by using the CalculateUserInfo.suggestDiet function.
      const diet = CalculateUserInfo.suggestDiet({
        bmi,
        maintenanceCalories,
        fatLossCalories,
      });
      setRecommendedDiet(diet);
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  const renderDietPlans = ({item}) => (
    <DietPlans program={item} key={item.foodId} navigation={navigation} />
  );

  function handleCreate() {
    navigation.navigate('CreateDietProgram');
  }

  function handleRecommended() {
    if (recommendedDiet) {
      const selectedProgram = dietPrograms.find(
        program => program.label === recommendedDiet,
      );
      if (selectedProgram) {
        navigation.navigate('ProgramDetail', {program: selectedProgram});
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Home</Text>
      </View>
      <HomeCreateButtonCard handleCreate={handleCreate} />
      <View>
        <Text style={styles.plans_title}>Diet Programs</Text>
        <FlatList
          data={dietPrograms}
          renderItem={renderDietPlans}
          keyExtractor={item => item.foodId.toString()}
          numColumns={2}
        />
        <View>
          <Text style={styles.plans_title}>Recommended Diet Program</Text>
          <HomeRecommendedDietCard
            recommendedDiet={recommendedDiet}
            handleRecommended={handleRecommended}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
