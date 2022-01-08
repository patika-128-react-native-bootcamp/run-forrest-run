import React, {useEffect, useState} from 'react';
import {View, Alert, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import useFetchData from '../../hooks/useFetchData';
import routes from '../../navigation/routes';
import auth from '@react-native-firebase/auth';
import styles from './PastActivities.style';
import PastActivityCard from '../../components/cards/PastActivityCard/PastActivityCard';

export default function PastActivities({navigation}) {
  const [activityList, setActivityList] = useState([]);

  const {data, dataError, dataLoading} = useFetchData(
    `activities/${auth().currentUser.uid}`,
  );

  useEffect(() => {
    setActivityList(data);
  }, [data]);

  function navigateToActivityDetail(activityInfo) {
    navigation.navigate(routes.ACTIVITY_DETAIL_PAGE, {
      activityInfo: activityInfo,
    });
  }

  if (dataError) {
    Alert.alert('Error while fetching data.');
  }

  const renderActivities = ({item}) => (
    <PastActivityCard
      activityDate={item.date}
      activityDistance={item.distance}
      activityTime={item.time}
      onButtonPress={() => navigateToActivityDetail(item)}
    />
  );

  return (
    <View style={styles.container}>
      {dataLoading && <Loading />}
      <FlatList
        data={activityList}
        renderItem={renderActivities}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperator} />;
        }}
      />
    </View>
  );
}
