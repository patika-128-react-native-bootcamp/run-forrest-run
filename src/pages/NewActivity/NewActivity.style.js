import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapFrame: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  map: {
    height: Dimensions.get('window').height / 2.3, 
    width: '100%'
  }
});
