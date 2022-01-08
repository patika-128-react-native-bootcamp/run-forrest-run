import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import ActivityCard from '../../components/cards/ActivityCard';
import ResultMap from '../../components/ResultMap';
import styles from './ActivityDetail.style';

export default function ActivityDetail() {
  const route = useRoute();

  const {activityInfo} = route.params;

  return (
    <View style={styles.container}>
      <ResultMap
        routeCoords={activityInfo.routeCoords}
        regionCoords={activityInfo.routeCoords[0]}
      />
      <ActivityCard
        weatherInfo={activityInfo.weatherInfo}
        distance={activityInfo.distance}
        time={activityInfo.time}
      />
    </View>
  );
}
