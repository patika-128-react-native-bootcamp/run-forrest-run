import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardItem from './CardItem';
import styles from './ActivityCard.style';
import Button from '../../Button';

export default function ActivityCard(props) {
  return (
    <View style={{flex: 1, justifyContent: 'space-around', marginBottom: 20}}>
      <View style={styles.rowContainer}>
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
      <View style={styles.rowContainer}>
        <CardItem
          itemLabel={<Icon name="weather-windy" size={30} />}
          itemValue={props.weatherInfo.wind.speed}
        />
        <CardItem
          itemLabel={<Icon name="thermometer" size={30} />}
          itemValue={props.weatherInfo.main.temp.toFixed(0) - 273 + '°C'}
        />
        <Image
          style={{width: 90, height: 90}}
          source={{
            uri: `http://openweathermap.org/img/wn/${props.weatherInfo.weather[0].icon}@2x.png`,
          }}
        />
      </View>
      {props.isStarted ? (
        <Button
          label={'STOP'}
          type="primaryNegative"
          onPress={() => props.handleStopActivity()}
        />
      ) : (
        <View>
          <Button label={'START'} onPress={() => props.handleStartActivity()} />
        </View>
      )}
    </View>
  );
}
