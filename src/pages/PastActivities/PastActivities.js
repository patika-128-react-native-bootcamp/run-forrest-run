import axios from 'axios';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function PastActivities() {
  
    async function fetchWeather() {
    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.7795345&lon=29.0300001&appid=13ea7bc900806057f5cb50345c0c69a7");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text></Text>
      <Button title='Hava Durumu' onPress={fetchWeather}></Button>
    </View>
  );
}
