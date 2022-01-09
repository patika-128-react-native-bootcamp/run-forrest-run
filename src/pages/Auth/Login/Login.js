import React from 'react';
import {View, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../../components/Input';
import routes from '../../../navigation/routes';
import styles from './Login.style';
import Toast from 'react-native-toast-message';
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
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Lets start an activity!',
        });
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Login Successful!',
        });
        console.log(error);
      });
  }

  return (
    <LinearGradient colors={['#d1fffd', '#f4b6e2']} style={styles.container}>
      {/* <Image source={'../../../assets/lala.jpg'} style={{width:'100%',height:400, resizeMode:'contain'}}/>   */}
      <View style={{width: '100%', height: 230}}>
        <LottieView
          source={require('../../../assets/walking.json')}
          autoPlay
          loop
        />
      </View>
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
            <Button label="Log In" onPress={handleSubmit} type="transparent" />
            <Button
              label="Sign Up"
              type="secondary"
              onPress={handleNavigateSignUp}
            />
          </View>
        )}
      </Formik>
    </LinearGradient>
  );
}
