import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

export default function ResultsModal(props) {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={{ flex:1, backgroundColor: 'white'}}>
        <Text>{props.distance}</Text>
        <Text>{props.weatherInfo.weather[0].main}</Text>
        <Text></Text>
        <Text>aasdasd</Text>
      </View>
    </Modal>
  );
}
