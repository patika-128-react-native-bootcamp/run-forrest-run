import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mapFrame: {
    borderBottomColor: colors.themeColor,
    borderBottomWidth: 5,
    borderTopColor: colors.themeColor,
    borderTopWidth: 5,
  },
  map: {
    height: Dimensions.get('window').height / 2.4,
    width: '100%',
  },
});
