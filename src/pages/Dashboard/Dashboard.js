import React from 'react';
import {View, Text, ScrollView} from 'react-native';
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

  function navigateToNewActivity() {
    navigation.navigate(routes.NEW_ACTIVITY_PAGE);
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'space-between', backgroundColor:'black'}}>
        <TotalInfoCard />
        <Button
          label={'Sign Out'}
          onPress={handleSignOut}></Button>
        <Button
          label={'START'}
          type="roundPrimary"
          onPress={navigateToNewActivity}></Button>
    </View>
  );
}
