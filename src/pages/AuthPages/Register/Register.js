import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Register.style';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import authErrorMessages from '../../../utils/authErrorMessages';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  repassword: '',
};

const Register = ({navigation}) => {
  const [securePassword, setSecurePassword] = useState(true);

  function handleShowPassword() {
    setSecurePassword(!securePassword);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegister(formValues) {
    if (formValues.password !== formValues.repassword) {
      // Checks if the passwords match.
      showMessage({
        message: 'Passwords not match!',
        type: 'danger',
        floating: true,
      });
      return;
    } else if (formValues.username.trim() === '') {
      showMessage({
        message: 'Username is required!',
        type: 'danger',
        floating: true,
      });
      return;
    } else {
      try {
        await auth().createUserWithEmailAndPassword(
          // It allows the user to register with e-mail and password.
          formValues.email,
          formValues.repassword,
        );
        await database().ref(`users/${auth().currentUser.uid}`).set({
          // It sends the username entered during registration to the database.
          username: formValues.username,
        });
        showMessage({
          message: 'Account created successfully.',
          type: 'success',
          floating: true,
        });
        navigation.navigate('Login');
      } catch (error) {
        showMessage({
          message: authErrorMessages(error.code),
          type: 'danger',
          floating: true,
        });
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="angle-left" size={30} style={styles.goback_icon} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Register</Text>
      </View>
      <View style={styles.info_container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo/Logo-horizontal.png')}
        />
        <View style={styles.input_container}>
          <Formik initialValues={initialFormValues} onSubmit={handleRegister}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <Input
                  placeholder="Username"
                  name="user"
                  value={values.username}
                  onChangeText={handleChange('username')}
                />
                <Input
                  placeholder="E-mail"
                  name="envelope"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <Input
                  placeholder="Password"
                  name="key"
                  onPress={handleShowPassword}
                  secureTextEntry={securePassword}
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                <Input
                  placeholder="Repassword"
                  name="key"
                  onPress={handleShowPassword}
                  secureTextEntry={securePassword}
                  value={values.repassword}
                  onChangeText={handleChange('repassword')}
                />
                <Button
                  text="Register"
                  theme="primary"
                  style={styles.button}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Register;
