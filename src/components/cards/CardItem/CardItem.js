import React from 'react';
import {View, Text} from 'react-native';
import styles from './CardItem.style';

export default function CardItem({itemLabel, itemValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{itemLabel}</Text>
      <View style={styles.valueFrame}>
        <Text style={styles.value}>{itemValue}</Text>
      </View>
    </View>
  );
}
