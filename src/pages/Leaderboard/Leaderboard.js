import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetchData from '../../hooks/useFetchData';
import useUsers from '../../hooks/useUsers';
import database from '@react-native-firebase/database';
import Button from '../../components/Button';

export default function Leaderboard() {
  const [userDistanceMap, setUserDistanceMap] = useState([]);

  const {data} = useFetchData('activities/');
  const {userList} = useUsers();

  useEffect(() => {
    if (!!data && !!userList) {
      let sortedUserDistanceMap = [];

      const parsedActivityData = Object.keys(data).map(key => ({
        id: key,
        value: data[key],
      }));

      parsedActivityData.map(activitiyMap => {
        let totalDistance = 0;
        let userId = activitiyMap.id;
        let userName = '';

        const activitiyMapValueArr = Object.keys(activitiyMap.value).map(
          key => ({
            ...activitiyMap.value[key],
          }),
        );

        activitiyMapValueArr.map(activity => {
          totalDistance = totalDistance + parseInt(activity.distance);
        });

        userList.map(user => {
          if (user.id === userId) {
            const userValueArr = Object.keys(user.value).map(key => ({
              ...user.value[key],
            }));

            userValueArr.map(userItem => {
              userName = userItem.displayName;
            });
          }
        });

        sortedUserDistanceMap.push({
          userId: userId,
          userName: userName,
          totalDistance: totalDistance,
        });
      });

      sortedUserDistanceMap = sortedUserDistanceMap.sort(
        (a, b) => b.totalDistance - a.totalDistance,
      );
      setUserDistanceMap(sortedUserDistanceMap);
    }
  }, [data, userList]);

  const renderActivities = ({item, index}) => <Text>{index + 1}{item.userName}</Text>;

  return (
    <View>
      <Text></Text>
      <FlatList
        data={userDistanceMap}
        renderItem={renderActivities}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button label={'Get Users'} onPress={() => getUsers()} />
    </View>
  );
}
