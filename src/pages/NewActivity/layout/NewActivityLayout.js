import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Loading from '../../../components/Loading';
import styles from './NewActivityLayout.style';
import ResultsModal from '../../../components/ResultsModal';
import ActivityCard from '../../../components/cards/ActivityCard';
import Button from '../../../components/Button';

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
      />
      {props.isStarted ? (
        <View srtyle={styles.buttonView}>
          <Button
            label={'STOP'}
            type="primaryNegative"
            onPress={() => props.handleStopActivity()}
          />
        </View>
      ) : (
        <View style={styles.buttonView}>
          <Button label={'START'} onPress={() => props.handleStartActivity()} />
        </View>
      )}

      <ResultsModal
        isVisible={props.resultsModalVisible}
        setResultsModalVisible={() => props.setResultsModalVisible()}
        routeCoords={props.routeCoords}
        currentCoord={props.currentCoord}
        distance={props.distance}
        time={props.time}
        handleFinishActivity={() => props.handleFinishActivity()}
      />
    </View>
  ) : (
    <Loading />
  );
}
