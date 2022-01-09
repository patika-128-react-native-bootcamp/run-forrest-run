import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActivityCard from '../../components/cards/ActivityCard';
import ResultMap from '../../components/ResultMap';
import styles from './ActivityDetail.style';

export default function ActivityDetail() {
  const route = useRoute();

  const {activityInfo} = route.params;

  return (
    <LinearGradient
      colors={['#2f578b', '#00173c', '#2e1537', '#360f31']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <ResultMap
        routeCoords={activityInfo.routeCoords}
        regionCoords={activityInfo.routeCoords[0]}
        type="bigMap"
      />
      <View style={styles.cardView}>
        <ActivityCard
          weatherInfo={activityInfo.weatherInfo}
          distance={activityInfo.distance}
          time={activityInfo.time}
        />
      </View>
    </LinearGradient>
  );
}
