import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import styles from './ResultMap.style';

export default function ResultMap({routeCoords, regionCoords}) {
  return (
    <MapView
      region={{
        latitude: regionCoords.latitude,
        longitude: regionCoords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
      style={styles.map}>
      <Polyline coordinates={routeCoords} strokeWidth={2} strokeColor="blue" />
      {routeCoords.length > 0 && (
        <Marker
          coordinate={{
            latitude: routeCoords[0].latitude,
            longitude: routeCoords[0].longitude,
          }}
        />
      )}
      {routeCoords.length > 0 && (
        <Marker
          coordinate={{
            latitude: routeCoords[routeCoords.length - 1].latitude,
            longitude: routeCoords[routeCoords.length - 1].longitude,
          }}
        />
      )}
    </MapView>
  );
}
