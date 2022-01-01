import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import routes from '../../../navigation/routes';
import styles from './Login.style';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  function handleNavigateSignUp() {
    navigation.navigate(routes.SIGN_UP_PAGE);
  }

  function handleLogin(loginData) {
    auth()
      .signInWithEmailAndPassword(loginData.email, loginData.password)
      .then(() => {
        console.log('Login Successful');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👟</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={formValues => handleLogin(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="Email"
              placeholder="Email..."
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              label="Password"
              placeholder="Password..."
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button label="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button
        label="Sign Up"
        theme="secondary"
        onPress={handleNavigateSignUp}
      />
    </View>
  );
}
