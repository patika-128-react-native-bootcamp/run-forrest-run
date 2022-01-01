import React from 'react';
import {View, Text} from 'react-native';
import CardItem from '../CardItem';
import styles from './TotalInfoCard.style';

export default function TotalInfoCard() {
  return (
    <View style={styles.container}>
      <View>
        <CardItem itemLabel={'Kilometers'} itemValue={'32,5'} />
        <CardItem itemLabel={'Activity Count'} itemValue={'8'} />
      </View>
      <View>
        <CardItem itemLabel={'Activity Time'} itemValue={'12,3'} />
        <CardItem itemLabel={'Activity Count'} itemValue={'12'} />
      </View>
    </View>
  );
}
