import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import routes from '../../navigation/routes';
import auth from '@react-native-firebase/auth';
import Button from '../../components/Button';
import TotalInfoCard from '../../components/cards/TotalInfoCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useFetchData from '../../hooks/useFetchData';

export default function Dashboard({navigation}) {
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [activityCount, setActivityCount] = useState(0);

  const {data, dataError, dataLoading} = useFetchData(
    `activities/${auth().currentUser.uid}`,
  );

  useEffect(() => {
    if (!!data) {
      let distance = 0;
      let time = 0;
      let count = 0;
      setTotalDistance(
        data.map(
          activity => (
            (distance = distance + parseInt(activity.distance)),
            (time = parseInt(activity.time))
          ),
        ),
      );
      setTotalDistance(distance);
      setTotalTime(time);
    }
  }, [data]);

  console.log(totalDistance);

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        console.log('Signed Out');
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          style={{marginRight: 8}}
          name="logout"
          size={35}
          onPress={() => handleSignOut()}
        />
      ),
    });
  }, [navigation]);

  function navigateToNewActivity() {
    navigation.navigate(routes.NEW_ACTIVITY_PAGE);
  }

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
      }}>
      <TotalInfoCard />
      <Button label={totalDistance}></Button>
      <Button
        label={
          <Text>
            {totalTime.minute >= 10 ? totalTime.minute : '0' + totalTime.minute}
            :
            {totalTime.second >= 10 ? totalTime.second : '0' + totalTime.second}
          </Text>
        }></Button>
      <Button
        label={'START'}
        type="roundPrimary"
        onPress={navigateToNewActivity}></Button>
    </View>
  );
}
