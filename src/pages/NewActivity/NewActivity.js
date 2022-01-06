import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-toast-message';
import NewActivityLayout from './layout/NewActivityLayout';
import routes from '../../navigation/routes';
import haversine from 'haversine';
import {fetchWeather} from '../../services/weatherService';

export default function NewActivity({navigation}) {
  const [isStarted, setIsStarted] = useState(false);
  const [watchID, setWatchID] = useState();
  const [startingCoord, setStartingCoord] = useState();
  const [currentCoord, setCurrentCoord] = useState();
  const [distance, setDistance] = useState(0);
  const [routeCoords, setRouteCoords] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState();
  const [resultsModalVisible, setResultsModalVisible] = useState(false);

  function handleStartActivity() {
    setIsStarted(true);
    handleCurrentPosition();
  }

  function handleFinishActivity() {
    setIsStarted(false);
    Geolocation.clearWatch(watchID);
    setResultsModalVisible(true);
  }

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
    if (!!currentCoord && isStarted) {
      setRouteCoords([
        ...routeCoords,
        {
          latitude: currentCoord.latitude,
          longitude: currentCoord.longitude,
        },
      ]);
    }
  }, [currentCoord]);

  function handleCurrentPosition() {
    let oldLocation = null;
    let newDistance = 0;
    let watchId = null;
    watchId = Geolocation.watchPosition(
      position => {
        if (!!oldLocation) {
          newDistance =
            newDistance +
            haversine(
              {
                latitude: oldLocation.latitude,
                longitude: oldLocation.longitude,
              },
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
              {unit: 'meter'},
            );
          setDistance(newDistance.toFixed(0));
        }
        setCurrentCoord(position.coords);
        oldLocation = position.coords;
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
    setWatchID(watchId);
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setStartingCoord(position.coords);
        setCurrentCoord(position.coords);
        handleFetchWeather(position.coords.latitude, position.coords.longitude);
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
  }, []);

  // if (!!weatherInfo.weather) {
  //   console.log(weatherInfo.weather[0].main);
  // }

  //weatherInfo.length > 0
  return (
    <NewActivityLayout
      startingCoord={startingCoord}
      currentCoord={currentCoord}
      weatherInfo={weatherInfo}
      distance={distance}
      routeCoords={routeCoords}
      resultsModalVisible={resultsModalVisible}
      handleStartActivity={() => handleStartActivity()}
      handleFinishActivity={() => handleFinishActivity()}
    />
  );
}
