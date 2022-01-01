import React from 'react';
import {View, Text} from 'react-native';
import routes from '../../navigation/routes';
import auth from '@react-native-firebase/auth';
import Button from '../../components/Button';
import TotalInfoCard from '../../components/cards/TotalInfoCard';

export default function Dashboard({navigation}) {
  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        console.log('Signed Out');
      })
      .catch(error => {
        console.error(error);
      });
  }

  console.log(auth().currentUser)

  return (
    <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
      <TotalInfoCard />
      <Button
        label={'Sign Out'}
        theme="roundPrimary"
        onPress={handleSignOut}></Button>
    </View>
  );
}
