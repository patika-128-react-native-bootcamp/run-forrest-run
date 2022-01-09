import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import Share from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewShot from 'react-native-view-shot';
import Button from '../Button';
import ValueItem from '../cards/ValueItem';
import ResultMap from '../ResultMap';
import styles from './ResultsModal.style';

export default function ResultsModal(props) {
  function handleCloseModal() {
    props.setResultsModalVisible(false);
  }

  const viewShotRef = useRef();

  const shareResults = async () => {
    const imageURI = await viewShotRef.current.capture();
    try {
      await Share.open({url: imageURI});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={() => handleCloseModal()}
      onBackdropPress={() => handleCloseModal()}
      style={styles.modalView}>
      <LinearGradient
        colors={['#2f578b', '#00173c', '#2e1537', '#360f31']}
        style={styles.linearGradient}>
        <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1.0}}>
          <ResultMap
            routeCoords={props.routeCoords}
            regionCoords={props.currentCoord}
          />
          <View style={styles.valuesView}>
            <ValueItem
              itemLabel={'Meters'}
              itemValue={props.distance}
              type="bigSize"
            />
            <ValueItem
              itemLabel={<Icon name="timer-outline" size={35} />}
              itemValue={
                <Text>
                  {props.time.minute >= 10
                    ? props.time.minute
                    : '0' + props.time.minute}
                  :
                  {props.time.second >= 10
                    ? props.time.second
                    : '0' + props.time.second}
                </Text>
              }
              type="bigSize"
            />
          </View>
        </ViewShot>
        <View style={styles.buttonsContainer}>
          <Button
            label={
              <Text>
                <Icon name="arrow-left" size={27} /> Continue Activity
              </Text>
            }
            type="secondary"
            onPress={() => handleCloseModal()}
          />
          <Button
            label={'Finish & Save'}
            onPress={() => props.handleFinishActivity()}
          />
          <Button
            label={'Share'}
            type="secondary"
            onPress={() => shareResults()}
          />
        </View>
      </LinearGradient>
    </Modal>
  );
}
