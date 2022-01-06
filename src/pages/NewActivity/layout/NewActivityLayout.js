import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Loading from '../../../components/Loading';
import styles from './NewActivityLayout.style';
import ResultsModal from '../../../components/ResultsModal';

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
      <Button title="START" onPress={() => props.handleStartActivity()} />
      <Button title="FINISH" onPress={() => props.handleFinishActivity()} />
      <ResultsModal
        isVisible={props.resultsModalVisible}
        distance={props.distance}
        routeCoords={props.routeCoords}
        weatherInfo={props.weatherInfo}
      />
    </View>
  ) : (
    <Loading />
  );
}
