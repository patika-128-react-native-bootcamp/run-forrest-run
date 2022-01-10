import React, {useEffect, useState} from 'react';
import {View, Alert, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import LinearGradient from 'react-native-linear-gradient';
import useFetchData from '../../hooks/useFetchData';
import routes from '../../navigation/routes';
import auth from '@react-native-firebase/auth';
import styles from './PastActivities.style';
import PastActivityCard from '../../components/cards/PastActivityCard/PastActivityCard';

export default function PastActivities({navigation}) {
  const [activityList, setActivityList] = useState([]);

  const {data, dataLoading} = useFetchData(
    `activities/${auth().currentUser.uid}`,
  );

  useEffect(() => {
    if(!!data){
      const parsedActivityData = Object.keys(data).map(key => ({
        ...data[key]
      }));
      setActivityList(parsedActivityData);
    }   
  }, [data]);

  function navigateToActivityDetail(activityInfo) {
    navigation.navigate(routes.ACTIVITY_DETAIL_PAGE, {
      activityInfo: activityInfo,
    });
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
    <LinearGradient colors={['#4568dc', '#b06ab3']} style={styles.container}>
      {dataLoading && <Loading />}
      <FlatList
        data={activityList}
        renderItem={renderActivities}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperator} />;
        }}
      />
    </LinearGradient>
  );
}
