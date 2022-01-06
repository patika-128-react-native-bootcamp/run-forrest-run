import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Loading from '../../../components/Loading';
import styles from './NewActivityLayout.style';
import Button from '../../../components/Button';
import ResultsModal from '../../../components/ResultsModal';
import ActivityCard from '../../../components/cards/ActivityCard';

export default function NewActivityLayout(props) {
  return !!props.currentCoord && !!props.weatherInfo ? (
    <View style={styles.container}>
      <View style={styles.mapFrame}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          region={{
            latitude: props.currentCoord.latitude,
            longitude: props.currentCoord.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}>
          <Polyline
            coordinates={props.routeCoords}
            strokeWidth={4}
            strokeColor="blue"
          />
          <Marker
            coordinate={{
              latitude: props.startingCoord.latitude,
              longitude: props.startingCoord.longitude,
            }}
          />
        </MapView>
      </View>
      <Text>Distance: {props.distance}</Text>
      <ActivityCard
        weatherInfo={props.weatherInfo}
        distance={props.distance}
        time={props.time}
        isStarted={props.isStarted}
        handleStartActivity={() => props.handleStartActivity()}
        handleStopActivity={() => props.handleStopActivity()}
      />
      <ResultsModal
        isVisible={props.resultsModalVisible}
        setResultsModalVisible={() => props.setResultsModalVisible()}
        distance={props.distance}
        time={props.time}
        routeCoords={props.routeCoords}
        weatherInfo={props.weatherInfo}
      />
    </View>
  ) : (
    <Loading />
  );
}
