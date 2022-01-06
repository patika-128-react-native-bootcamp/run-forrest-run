import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Button';
import styles from './ResultsModal.style';

export default function ResultsModal(props) {
  function handleCloseModal() {
    props.setResultsModalVisible(false);
  }

  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={() => handleCloseModal()}
      onBackdropPress={() => handleCloseModal()}>
      <View style={styles.modalView}>
        <View style={styles.statisticsTextView}>
          <Text style={styles.statisticsText}>STATISTICS</Text>
        </View>
        <View style={styles.valuesView}>
          <Text style={styles.distance}>{props.distance}</Text>
          <Text style={styles.metersText}>METERS</Text>
          <Text style={styles.time}>
            {props.time.minute >= 10
              ? props.time.minute
              : '0' + props.time.minute}
            :
            {props.time.second >= 10
              ? props.time.second
              : '0' + props.time.second}
          </Text>
        </View>
        <View>
          <Button
            label={
              <Text>
                <Icon name="arrow-left" size={27} /> Continue Activity
              </Text>
            }
            type="secondary"
            onPress={() => handleCloseModal()}
          />
          <Button label={'Finish & Save'} />
          {/*TODO */}
          <Button label={'Share'} type="secondary" />
          {/*TODO */}
        </View>
      </View>
    </Modal>
  );
}
