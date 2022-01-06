import React from 'react';
import {View} from 'react-native';
import routes from '../../../navigation/routes';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Toast from 'react-native-toast-message';
import styles from './SignUp.style';
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
  function handleSignUp(signData) {
    if (signData.password !== signData.rePassword) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
      return;
    }
    auth()
      .createUserWithEmailAndPassword(signData.email, signData.password)
      .then(() => {
        auth().currentUser.updateProfile({
          displayName: signData.name + ' ' + signData.surname,
        });
        Toast.show({
          type: 'success',
          text1: 'User account created & logged in!',
        });
        handleReturnLogin();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text1: 'That email address is already in use!',
          });
        }

        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            text1: 'That email address is invalid!',
          });
        }

        if (error.code === 'auth/weak-password') {
          Toast.show({
            type: 'error',
            text1: 'Password should be at least 6 characters',
          });
        }
        console.error(error);
      });
  }

  function handleReturnLogin() {
    navigation.navigate(routes.LOGIN_PAGE);
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          rePassword: '',
        }}
        onSubmit={formValues => handleSignUp(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label="Name"
              placeholder="Name..."
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <Input
              label="Surname"
              placeholder="Surname..."
              value={values.surname}
              onChangeText={handleChange('surname')}
            />
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
      <Button label="Back" type="secondary" onPress={handleReturnLogin} />
    </View>
  );
}
