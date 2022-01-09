import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  map: {
    height: Dimensions.get('window').height / 2.4,
    width: '100%',
  },
  cardView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});
