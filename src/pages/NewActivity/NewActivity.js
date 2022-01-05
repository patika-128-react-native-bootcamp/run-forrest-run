import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-toast-message';
import Loading from '../../components/Loading';
import styles from './NewActivity.style';
import routes from '../../navigation/routes';
import {fetchWeather} from '../../services/weatherService';

export default function NewActivity({navigation}) {
  const [startingCoord, setStartingCoord] = useState();
  const [currentCoord, setCurrentCoord] = useState();
  const [routeCoords, setRouteCoords] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState([]);

  async function handleFetchWeather(latitude, longitude) {
    try {
      const response = await fetchWeather(latitude, longitude);
      setWeatherInfo(response.data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Weather information could not fetched',
      });
      console.log(error);
      navigateToDashboard();
    }
  }

  function navigateToDashboard() {
    navigation.navigate(routes.DASHBOARD_PAGE);
  }

  useEffect(() => {
    if (!!currentCoord) {
      setRouteCoords([
        ...routeCoords,
        {
          latitude: currentCoord.latitude,
          longitude: currentCoord.longitude,
        },
      ]);
    }
  }, [currentCoord]);

  function handleCurrentCoord() {
    Geolocation.watchPosition(
      position => {
        setCurrentCoord(position.coords);
      },
      error => {
        Toast.show({
          type: 'error',
          text1: 'Error Getting Location!',
          text2: 'Ensure your gps on',
        });
        console.log(error);
        navigateToDashboard();
      },
      {
        maximumAge: 0,
        distanceFilter: 15,
        timeout: 10000,
      },
    );
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setStartingCoord(info.coords);
        setCurrentCoord(info.coords);
        handleFetchWeather(info.coords.latitude, info.coords.longitude);
      },
      error => {
        Toast.show({
          type: 'error',
          text1: 'Error Getting Location!',
          text2: 'Ensure your gps on',
        });
        console.log(error);
        navigateToDashboard();
      },
    );
    handleCurrentCoord();
  }, []);

  // if (!!weatherInfo.weather) {
  //   console.log(weatherInfo.weather[0].main);
  // }

  //  console.log("Current Coord: " + currentCoord);
  // console.log(currentCoord);
  // console.log(weatherInfo);

  return !!currentCoord && weatherInfo.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.mapFrame}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          region={{
            latitude: currentCoord.latitude,
            longitude: currentCoord.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}>
          <Polyline coordinates={routeCoords} />
          <Marker
            coordinate={{
              latitude: startingCoord.latitude,
              longitude: startingCoord.longitude,
            }}
          />
        </MapView>
      </View>
    </View>
  ) : (
    <Loading />
  );
}
