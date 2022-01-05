import React from 'react';
import Toast from 'react-native-toast-message';
import {View, Text, Button} from 'react-native';

export default function Leaderboard() {
  function toastTest() {
    Toast.show({
      type: 'error',
      text1: 'Error Getting Location!',
      text2: 'Ensure your gps on',
    });
  }

  function haversine() {
    console.log(
      haversine(
        {
          latitude: 30,
          longitude: 83,
        },
        {
          latitude: 27,
          longitude: 82,
        },
      ),
    );
  }

  return (
    <View>
      <Button title="Show Toast" onPress={toastTest} />
      <Button title="console haversine" onPress={haversine} />
    </View>
  );
}
