import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {View, Text, Button} from 'react-native';
import useStopwatch from '../../hooks/useStopwatch';

export default function Leaderboard() {
  const [counter, setCounter] = useState(0);
  // const [time, setTime] = useState({s: 0, m: 0});
  const [interv, setInterv] = useState();

  const {time, start, stop} = useStopwatch();

  // const start = () => {
  //   run();
  //   setInterv(setInterval(run, 10));
  // };

  // var updatedS = time.s,
  //   updatedM = time.m;

  // const run = () => {
  //   if (updatedS === 60) {
  //     updatedM++;
  //     updatedS = 0;
  //   }
  //   updatedS++;
  //   return setTime({s: updatedS, m: updatedM});
  // };

  function haversine() {
    const haversine = require('haversine');
    console.log(
      haversine(
        {
          latitude: 30,
          longitude: 83,
        },
        {
          latitude: 27,
          longitude: 82,
        },
        {unit: 'meter'},
      ),
    );
  }

  function handleCounter() {
    let interval = null;
    interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 700);
  }

  // useEffect(() => {
  //   let interval = null;
  //   interval = setInterval(() => {
  //     setCounter(prevCounter => prevCounter + 1)
  //   }, 700);
  // }, [])

  return (
    <View>
      <Button title="console haversine" onPress={() => haversine()} />
      <Button title="Start Stopwatch" onPress={() => start()} />
      <Button title="Stop Stopwatch" onPress={() => stop()} />
      <Text>
        {time.minute >= 10 ? time.minute : '0' + time.minute}:
        {time.second >= 10 ? time.second : '0' + time.second}
      </Text>
    </View>
  );
}
