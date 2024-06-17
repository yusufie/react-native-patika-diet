import React from 'react';
import {View, Image} from 'react-native';

import styles from './Main.style';
import Button from '../../../components/Button/Button';

const Main = ({navigation}) => {
  function handleLogin() {
    navigation.navigate('Login');
  }
  function handleRegister() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo/Logo-vertical.png')}
      />
      <Button text="Login" theme="primary" onPress={handleLogin} />
      <Button text="Register" theme="secondary" onPress={handleRegister} />
    </View>
  );
};

export default Main;
