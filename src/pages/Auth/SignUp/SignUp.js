import React from 'react';
import {View, Text, Alert} from 'react-native';
import routes from '../../../navigation/routes';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './SignUp.style';
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
  
    function handleSignUp(signData) {
    if (signData.password !== signData.rePassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(signData.email, signData.password)
      .then(() => {
        Alert.alert('User account created & logged in!');
        handleReturnLogin();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        if (error.code === 'auth/weak-password') {
          Alert.alert('Password should be at least 6 characters');
        }

        console.error(error);
      });
  }

  function handleReturnLogin() {
    navigation.navigate(routes.LOGIN_PAGE);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👟</Text>
      <Formik
        initialValues={{email: '', password: '', rePassword: ''}}
        onSubmit={formValues => handleSignUp(formValues)}>
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
            <Input
              label="Confirm Your Password"
              placeholder="Confirm Password..."
              secureTextEntry
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
            />
            <Button label="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button label="Back" theme="secondary" onPress={handleReturnLogin} />
    </View>
  );
}
