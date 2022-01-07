import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Modal from 'react-native-modal';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewShot from 'react-native-view-shot';
import Button from '../Button';
import CardItem from '../cards/ActivityCard/CardItem';
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
      <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1.0}}>
        <MapView
          region={{
            latitude: props.currentCoord.latitude,
            longitude: props.currentCoord.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          style={styles.map}>
          <Polyline
            coordinates={props.routeCoords}
            strokeWidth={3}
            strokeColor="blue"
          />
          {props.routeCoords.length > 0 && (
            <Marker
              coordinate={{
                latitude: props.routeCoords[0].latitude,
                longitude: props.routeCoords[0].longitude,
              }}
            />
          )}
          {props.routeCoords.length > 0 && (
            <Marker
              coordinate={{
                latitude:
                  props.routeCoords[props.routeCoords.length - 1].latitude,
                longitude:
                  props.routeCoords[props.routeCoords.length - 1].longitude,
              }}
            />
          )}
        </MapView>
        <View style={styles.valuesView}>
          <CardItem
            itemLabel={'Meters'}
            itemValue={props.distance}
            type="bigSize"
          />
          <CardItem
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
        <Button
          label={'Share'}
          type="secondary"
          onPress={() => shareResults()}
        />
      </View>
    </Modal>
  );
}
