import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import useWeather from '../../hooks/useWeather';
import axios from 'axios';

export default function NewActivity() {
  const [startingCoord, setStartingCoord] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentCoord, setCurrentCoord] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [weatherInfo, setWeatherInfo] = useState([]);

  async function handleFetchWeather(latitude, longitude) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=13ea7bc900806057f5cb50345c0c69a7`,
      );
      setWeatherInfo(response.data);
    } catch (error) {
      Alert.alert('An error occurred while fetching weather information.');
    }
  }

  Geolocation.watchPosition(
    position => {
      console.log(position);
      setCurrentCoord(position.coords);
    },
    error => {
      console.log(error);
    },
  );

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setStartingCoord(info.coords);
      handleFetchWeather(info.coords.latitude, info.coords.longitude);
    });
  }, []);

  // if (!!weatherInfo.weather) {
  //   console.log(weatherInfo.weather[0].main);
  // }

  return (
    <View style={{flex: 1}}>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}>
        <MapView
          style={{height: 270, width: '100%'}}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: startingCoord.latitude,
            longitude: startingCoord.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}>
          {!!startingCoord && (
            <Marker
              coordinate={{
                latitude: startingCoord.latitude,
                longitude: startingCoord.longitude,
              }}
            />
          )}
        </MapView>
      </View>
    </View>
  );
}
