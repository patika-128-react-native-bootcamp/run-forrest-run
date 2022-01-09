import React from 'react';
import {View, Text} from 'react-native';
import TotalInfoCardItem from './TotalInfoCardItem';
import styles from './TotalInfoCard.style';

export default function TotalInfoCard({
  totalDistance,
  totalTime,
  activityCount,
}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
          Your Stats
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TotalInfoCardItem
          itemLabel={'Total Distance'}
          itemValue={totalDistance}
        />
        <TotalInfoCardItem
          itemLabel={'Total Time'}
          itemValue={
            <Text>
              {totalTime.minute >= 10
                ? totalTime.minute
                : '0' + totalTime.minute}
              :
              {totalTime.second >= 10
                ? totalTime.second
                : '0' + totalTime.second}
            </Text>
          }
        />
      </View>
      <TotalInfoCardItem
        itemLabel={'Activity Count'}
        itemValue={activityCount}
      />
    </View>
  );
}
