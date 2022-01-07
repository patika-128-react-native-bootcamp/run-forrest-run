import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import Button from '../../components/Button';

export default function PastActivities() {
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
    <View>
      <Text>AAAAAAAAAAAAAAAAAAAA</Text>
      <Button label={'Share'} onPress={() => shareResults()}></Button>
      <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1.0}}>
        <MapView
        style={{width:'100%', height:300}}
          region={{
            latitude: 34,
            longitude: 65,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}>
        </MapView>
        <View >
          <Text >421</Text>
          <Text style={{color:'red', fontSize:30}} >METERS</Text>
          <Text >
            04:21
          </Text>
        </View>
      </ViewShot>
    </View>
  );
}
