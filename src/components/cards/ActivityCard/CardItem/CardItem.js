import React from 'react';
import {View, Text} from 'react-native';
import styles from './CardItem.style';

export default function CardItem({itemLabel, itemValue, type = 'default'}) {

  //TODO ActivityCard dışına taşınabilir
  return (
    <View style={styles[type].container}>
      <Text style={styles[type].value}>{itemValue}</Text>
      <Text style={styles[type].label}>{itemLabel}</Text>
    </View>
  );
}
