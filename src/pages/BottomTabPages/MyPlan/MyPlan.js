import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './MyPlan.style';
import {Agenda} from 'react-native-calendars';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import _ from 'lodash';

import NutriensCard from '../../../components/cards/NutriensCard';
import MyPlanRenderAgenda from '../../../components/cards/MyPlanRenderAgenda';

const MyPlan = () => {
  const [MyProgram, setMyProgram] = useState();
  const [isOpen, setIsOpen] = useState({});

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const ref = database().ref(`users/${userId}/MyProgram`);
    ref.on('value', snapshot => {
      const programs = snapshot.val() || {};
      const groupedPrograms = _.groupBy(
        // It arranges the data according to their dates in order to display them correctly in the Agenda.
        programs,
        program => program.date.split(' ')[0],
      );
      setMyProgram(groupedPrograms);
    });

    return () => ref.off();
  }, []);

  function toggleCollapsible(id) {
    setIsOpen({...isOpen, [id]: !isOpen[id]});
  }

  function removeFood() {
    const userId = auth().currentUser.uid;
    database().ref(`users/${userId}/MyProgram/`).remove();
  }

  return (
    <View style={styles.container}>
      <Agenda
        items={MyProgram}
        renderItem={item => (
          <MyPlanRenderAgenda
            item={item}
            toggleCollapsible={toggleCollapsible}
            removeFood={removeFood}
            isOpen={isOpen}
            NutriensCard={NutriensCard}
          />
        )}
      />
    </View>
  );
};

export default MyPlan;
