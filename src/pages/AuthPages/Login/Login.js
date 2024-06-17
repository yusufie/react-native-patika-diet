import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Login.style';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import authErrorMessages from '../../../utils/authErrorMessages';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [securePassword, setSecurePassword] = useState(true);

  function handleShowPassword() {
    setSecurePassword(!securePassword);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleLogin(formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Login successful!',
        type: 'success',
        floating: true,
      });
    } catch (error) {
      showMessage({
        message: authErrorMessages(error.code),
        type: 'danger',
        floating: true,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="angle-left" size={30} style={styles.goback_icon} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Login</Text>
      </View>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo/Logo-horizontal.png')}
      />
      <View style={styles.input_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                placeholder="E-mail"
                name="envelope"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <Input
                placeholder="Password"
                name="key"
                secureTextEntry={securePassword}
                onPress={handleShowPassword}
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <Button
                text="Login"
                theme="primary"
                style={styles.button}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
